interface LogoProps {
  className?: string
}

export function ChatGPTLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-label="ChatGPT">
      <circle cx="16" cy="16" r="16" fill="#10a37f" />
      <path
        d="M22.2 13.8a4.2 4.2 0 0 0-.4-3.5 4.3 4.3 0 0 0-4.6-2 4.2 4.2 0 0 0-3.2-1.4 4.3 4.3 0 0 0-4.1 3 4.2 4.2 0 0 0-2.8 2 4.3 4.3 0 0 0 .5 4.9 4.2 4.2 0 0 0 .4 3.5 4.3 4.3 0 0 0 4.6 2 4.2 4.2 0 0 0 3.2 1.4 4.3 4.3 0 0 0 4.1-3 4.2 4.2 0 0 0 2.8-2 4.3 4.3 0 0 0-.5-4.9zm-6.4 9.6a3.2 3.2 0 0 1-2-.7l.1-.1 3.3-1.9a.5.5 0 0 0 .3-.5v-4.7l1.4.8a.1.1 0 0 1 0 .1v3.9a3.2 3.2 0 0 1-3.1 3.1zm-6.8-2.9a3.2 3.2 0 0 1-.4-2.1l.1.1 3.3 1.9a.5.5 0 0 0 .5 0l4.1-2.4v1.6a.1.1 0 0 1 0 .1l-3.4 2a3.2 3.2 0 0 1-4.2-1.2zm-.9-7.5a3.2 3.2 0 0 1 1.7-1.4v3.9a.5.5 0 0 0 .3.5l4 2.3-1.4.8a.1.1 0 0 1-.1 0l-3.4-2a3.2 3.2 0 0 1-1.1-4.1zm11.7 2.7-4-2.4 1.4-.8a.1.1 0 0 1 .1 0l3.4 2a3.2 3.2 0 0 1-.5 5.7v-4a.5.5 0 0 0-.3-.5zm1.4-2.2-.1-.1-3.3-1.9a.5.5 0 0 0-.5 0l-4.1 2.4v-1.6a.1.1 0 0 1 0-.1l3.4-2a3.2 3.2 0 0 1 4.7 3.3zm-8.7 2.9-1.4-.8a.1.1 0 0 1 0-.1v-3.9a3.2 3.2 0 0 1 5.2-2.5l-.1.1-3.3 1.9a.5.5 0 0 0-.3.5zm.8-1.7 1.8-1.1 1.8 1v2.1l-1.8 1.1-1.8-1z"
        fill="white"
      />
    </svg>
  )
}

export function PerplexityLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-label="Perplexity">
      <circle cx="16" cy="16" r="16" fill="#20808D" />
      <path
        d="M16 7l6 4.5v9L16 25l-6-4.5v-9L16 7z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 7v18M10 11.5l6 4.5 6-4.5M10 20.5l6-4.5 6 4.5"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function ClaudeLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-label="Claude">
      <circle cx="16" cy="16" r="16" fill="#D97757" />
      <path
        d="M16 8c-1.2 0-2.2.7-2.7 1.7l-4.6 8a3.1 3.1 0 0 0 2.7 4.6h9.2a3.1 3.1 0 0 0 2.7-4.6l-4.6-8A3.1 3.1 0 0 0 16 8z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="16" cy="16" r="2" fill="#D97757" />
    </svg>
  )
}

export function GeminiLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-label="Gemini">
      <circle cx="16" cy="16" r="16" fill="#4285F4" />
      <path
        d="M16 6C16 6 22 12 22 16C22 20 16 26 16 26C16 26 10 20 10 16C10 12 16 6 16 6Z"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M6 16C6 16 12 10 16 10C20 10 26 16 26 16C26 16 20 22 16 22C12 22 6 16 6 16Z"
        fill="white"
        opacity="0.7"
      />
    </svg>
  )
}

export function GrokLogo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-label="Grok">
      <circle cx="16" cy="16" r="16" fill="#000000" />
      <path
        d="M9 10l5.5 6L9 22h2l4.5-5 4.5 5h2l-5.5-6L22 10h-2l-4.5 5L11 10H9z"
        fill="white"
      />
    </svg>
  )
}
