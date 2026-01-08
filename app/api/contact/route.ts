import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("A valid email address is required"),
  message: z.string().min(1, "Message is required"),
  source: z.string().optional(),
})

function getEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;"
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case '"':
        return "&quot;"
      case "'":
        return "&#39;"
      default:
        return char
    }
  })
}

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid form submission" },
      { status: 400 },
    )
  }

  const { name, phone, email, message, source } = parsed.data

  try {
    const port = Number(getEnv("SMTP_PORT"))
    const secure = process.env.SMTP_SECURE === "true" || port === 465

    const transporter = nodemailer.createTransport({
      host: getEnv("SMTP_HOST"),
      port,
      secure,
      auth: {
        user: getEnv("SMTP_USER"),
        pass: getEnv("SMTP_PASS"),
      },
    })

    const recipient = getEnv("CONTACT_FORM_RECIPIENT")
    const fromAddress = process.env.CONTACT_FORM_FROM ?? getEnv("SMTP_USER")

    const htmlBody = `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Source:</strong> ${escapeHtml(source ?? "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        source ? `Source: ${source}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send contact form email", error)
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    )
  }
}
