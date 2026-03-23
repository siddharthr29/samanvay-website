'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(Math.min(scrolled, 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none"
      style={{ opacity: progress < 0.05 ? 0 : 1 }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#E8913A] to-[#F5C542]"
        style={{
          width: `${progress * 100}%`,
          transition: 'width 50ms linear',
        }}
      />
    </div>
  )
}
