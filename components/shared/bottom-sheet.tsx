'use client'

import { useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

export function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)
  const currentY = useRef(0)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Touch drag to dismiss
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const delta = e.touches[0].clientY - startY.current
    if (delta > 0 && sheetRef.current) {
      currentY.current = delta
      sheetRef.current.style.transform = `translateY(${delta}px)`
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (currentY.current > 100) {
      onClose()
    }
    if (sheetRef.current) {
      sheetRef.current.style.transform = ''
    }
    currentY.current = 0
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 z-[70] transition-opacity duration-200',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[71]',
          'bg-[#0F172A] rounded-t-2xl',
          'max-h-[70dvh] overflow-y-auto',
          'pb-[env(safe-area-inset-bottom)]',
          'transition-transform duration-300 ease-out',
          isOpen ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2 sticky top-0 bg-[#0F172A] rounded-t-2xl z-10">
          <div className="w-10 h-1 rounded-full bg-[#94A3B8]/40" />
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 pb-4 border-b border-white/10">
            <h3 className="font-heading text-lg font-semibold text-white">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#94A3B8]" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4">
          {children}
        </div>
      </div>
    </>
  )
}
