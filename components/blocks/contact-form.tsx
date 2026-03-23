"use client"

import { useState, type FormEvent } from "react"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FieldErrors {
  name?: string
  email?: string
  message?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateForm(data: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.name.trim()) errors.name = "Name is required"
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters"
  if (!data.email.trim()) errors.email = "Email is required"
  else if (!validateEmail(data.email.trim())) errors.email = "Please enter a valid email address"
  if (!data.message.trim()) errors.message = "Message is required"
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters"
  return errors
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  function handleBlur(field: string, value: string) {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const errors = validateForm({
      name: field === "name" ? value : "",
      email: field === "email" ? value : "",
      message: field === "message" ? value : "",
    })
    setFieldErrors((prev) => ({ ...prev, [field]: errors[field as keyof FieldErrors] }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFieldErrors({})
    const formData = new FormData(e.currentTarget)
    const data = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      organization: (formData.get("organization") as string) || "",
      message: (formData.get("message") as string) || "",
      source: "contact-form",
    }
    const errors = validateForm(data)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setTouched({ name: true, email: true, message: true })
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const result = await res.json().catch(() => ({}))
        throw new Error(result.error || "Failed to submit")
      }
      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error && err.message !== "Failed to submit"
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Thank you!</h3>
        <p className="text-zinc-600 dark:text-zinc-400">We&apos;ll get back to you within 48 hours.</p>
      </div>
    )
  }

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-base placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition-all min-h-[52px]"

  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${
      touched[field] && fieldErrors[field]
        ? "border-red-400 focus:ring-red-300/30 focus:border-red-400"
        : "focus:ring-amber-500/30 focus:border-amber-500"
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input type="text" id="name" name="name" required maxLength={100} className={inputClass("name")} placeholder="Your name" onBlur={(e) => handleBlur("name", e.target.value)} />
        {touched.name && fieldErrors.name && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.name}</p>}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Organization
        </label>
        <input type="text" id="organization" name="organization" maxLength={200} className={inputBase} placeholder="Your organization" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input type="email" id="email" name="email" required className={inputClass("email")} placeholder="you@organization.org" onBlur={(e) => handleBlur("email", e.target.value)} />
        {touched.email && fieldErrors.email && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
          How can we work together? <span className="text-red-500">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} maxLength={2000} className={inputClass("message")} placeholder="Tell us about your needs..." onBlur={(e) => handleBlur("message", e.target.value)} />
        {touched.message && fieldErrors.message && <p className="text-xs text-red-500 mt-1.5">{fieldErrors.message}</p>}
      </div>

      {status === "error" && (
        <Alert variant="destructive">
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
        ) : (
          <><Send className="h-4 w-4" /> Send Message</>
        )}
      </button>
    </form>
  )
}
