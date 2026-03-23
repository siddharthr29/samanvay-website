'use client'

import { useState } from 'react'

export function PartnerLogo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <div className="h-8 flex items-center">
      <img
        src={src}
        alt={alt}
        className="h-6 w-auto max-w-[100px] object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
