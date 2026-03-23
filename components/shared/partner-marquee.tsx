'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Partner {
  name: string
  logo?: string
}

interface PartnerMarqueeProps {
  partners: Partner[]
}

export function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  // Duplicate for seamless loop
  const items = [...partners, ...partners]

  return (
    <div className="relative overflow-hidden py-8 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-r from-[#0B1120] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 bg-gradient-to-l from-[#0B1120] to-transparent pointer-events-none" />

      <div className="flex marquee-track group-hover:[animation-play-state:paused]">
        {items.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center min-w-[120px] md:min-w-[150px]"
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-[filter] duration-300"
              />
            ) : (
              <span className="inline-block px-4 py-2 text-sm font-medium text-[#94A3B8] border border-[#94A3B8]/20 rounded-full whitespace-nowrap hover:text-white hover:border-white/40 transition-colors duration-300">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
