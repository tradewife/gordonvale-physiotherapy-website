'use client'

import { useState } from "react"

type ContactFormOptions = {
  source: string
  successMessage?: string
}

export function useContactForm({ source, successMessage }: ContactFormOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    if (!name || !email || !message) {
      setError("Please fill out Name, Email, and Message.")
      setSuccess(null)
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source }),
      })

      const data: { error?: string } | undefined = await response.json().catch(() => undefined)

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to send your message. Please try again.")
      }

      setSuccess(successMessage ?? "Thanks for your message. Our reception team will be in touch shortly.")
      form.reset()
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong while sending your message. Please try again."
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { handleSubmit, isSubmitting, error, successMessage: success }
}
