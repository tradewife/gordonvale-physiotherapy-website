'use client'

import * as React from "react"
import { Phone } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useIsMobile } from "@/components/ui/use-mobile"
import { SITE_PHONE } from "@/lib/constants"

function formatPhoneNumber(rawPhone: string) {
  const digits = rawPhone.startsWith("+")
    ? `+${rawPhone.replace(/[^\d]/g, "")}`
    : rawPhone.replace(/\D/g, "")

  if (digits.startsWith("+61") && digits.length === 12) {
    return digits.replace(/(\+61)(\d{1})(\d{4})(\d{4})/, "$1 $2 $3 $4")
  }

  if (!digits.startsWith("+") && digits.length === 10) {
    return digits.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")
  }

  return rawPhone
}

function getDialLink(rawPhone: string) {
  const sanitized = rawPhone.trim()
  if (sanitized.startsWith("+")) {
    return `tel:${sanitized.replace(/[^\d+]/g, "")}`
  }
  return `tel:${sanitized.replace(/\D/g, "")}`
}

interface CallButtonProps extends ButtonProps {
  phoneNumber?: string
}

export function CallButton(props: CallButtonProps) {
  const { phoneNumber = SITE_PHONE, ...buttonProps } = props
  const {
    className,
    variant,
    size,
    children,
    ["aria-label"]: ariaLabelProp,
    type,
    onClick,
    ...restWithoutBase
  } = buttonProps
  const { asChild: _asChild, ...restProps } = restWithoutBase
  void _asChild

  const isMobile = useIsMobile()
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const copyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const buttonLabel = children ?? "Call"
  const formattedNumber = React.useMemo(
    () => formatPhoneNumber(phoneNumber),
    [phoneNumber]
  )
  const dialHref = React.useMemo(
    () => getDialLink(phoneNumber),
    [phoneNumber]
  )
  const ariaLabel =
    ariaLabelProp ?? `Call Gordonvale Physiotherapy on ${formattedNumber}`

  React.useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  React.useEffect(() => {
    if (!dialogOpen && copied) {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
        copyTimeoutRef.current = null
      }
      setCopied(false)
    }
  }, [copied, dialogOpen])

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current)
      }
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy phone number", error)
    }
  }, [phoneNumber])

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      if (event.defaultPrevented) {
        return
      }

      if (isMobile) {
        window.location.href = dialHref
        return
      }

      setDialogOpen(true)
    },
    [dialHref, isMobile, onClick]
  )

  if (isMobile) {
    return (
      <Button
        aria-label={ariaLabel}
        className={className}
        size={size}
        type={type ?? "button"}
        variant={variant}
        onClick={handleClick}
        {...restProps}
      >
        {buttonLabel}
      </Button>
    )
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Button
        aria-label={ariaLabel}
        className={className}
        size={size}
        type={type ?? "button"}
        variant={variant}
        onClick={handleClick}
        {...restProps}
      >
        {buttonLabel}
      </Button>

      <DialogContent
        overlayClassName="bg-transparent"
        className="fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-xl translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[24px] border border-white/65 bg-[#d6ebff] p-0 shadow-2xl shadow-black/10 backdrop-blur-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
      >
        <div className="relative overflow-hidden rounded-[22px] border border-white/60 bg-[#e8f3ff] px-8 py-10 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[20px] bg-[#cfe3ff]/40" />

          <DialogHeader className="relative z-10 space-y-3 text-left sm:space-y-4">
            <DialogTitle className="font-serif text-3xl tracking-tight text-black sm:text-[2.2rem]">
              Call Gordonvale Physiotherapy
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-black/70">
              We&apos;re ready to help you feel your best. Reach the clinic
              directly using the details below.
            </DialogDescription>
          </DialogHeader>

          <div className="relative z-10 mt-8 rounded-[18px] border border-white/55 bg-[#f1f7ff] p-6 shadow-[0_18px_40px_rgba(35,86,146,0.09)]">
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-black/38">
              Clinic phone
            </span>
            <div className="mt-4 flex items-center gap-4 text-3xl font-medium tracking-wide text-black sm:text-[2rem]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg shadow-black/20">
                <Phone className="h-5 w-5" />
              </span>
              {formattedNumber}
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="flex-1 rounded-[18px] bg-black px-6 py-4 text-base font-medium text-white shadow-xl shadow-black/25 transition-all duration-300 hover:bg-black/85 sm:text-lg"
              size="lg"
            >
              <a href={dialHref} aria-label={ariaLabel}>
                Call now
              </a>
            </Button>
            <Button
              className="flex-1 rounded-[18px] border border-white/60 bg-[#f6f9ff] text-black shadow-md shadow-black/10 transition-all duration-300 hover:bg-[#ffffff]"
              onClick={handleCopy}
              size="lg"
              variant="outline"
            >
              {copied ? "Copied!" : "Copy number"}
            </Button>
          </div>

          <p className="relative z-10 mt-6 text-[0.65rem] uppercase tracking-[0.35em] text-black/45">
            Clinic hours 7:30am – 6:00pm
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
