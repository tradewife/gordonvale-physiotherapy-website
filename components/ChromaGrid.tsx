'use client'

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface ChromaGridItem {
  image?: string
  icon?: React.ReactNode
  title: string
  subtitle: string
  handle?: string
  borderColor: string
  gradient: string
  url?: string
}

interface ChromaGridProps {
  items: ChromaGridItem[]
  radius?: number
  damping?: number
  fadeOut?: number
  ease?: string
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out"
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const elements = itemsRef.current.filter(Boolean) as HTMLDivElement[]

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      elements.forEach((element) => {
        const elementRect = element.getBoundingClientRect()
        const elementX = elementRect.left - rect.left + elementRect.width / 2
        const elementY = elementRect.top - rect.top + elementRect.height / 2

        const distance = Math.sqrt(
          Math.pow(mouseX - elementX, 2) + Math.pow(mouseY - elementY, 2)
        )

        const normalizedDistance = Math.min(distance / radius, 1)
        const scale = 1 + (1 - normalizedDistance) * 0.1
        const opacity = Math.max(fadeOut, 1 - normalizedDistance * (1 - fadeOut))

        gsap.to(element, {
          scale,
          opacity,
          duration: damping,
          ease
        })
      })
    }

    const handleMouseLeave = () => {
      elements.forEach((element) => {
        gsap.to(element, {
          scale: 1,
          opacity: 1,
          duration: damping,
          ease
        })
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [radius, damping, fadeOut, ease])

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-16 sm:mb-20 md:mb-24">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            itemsRef.current[index] = el
          }}
          className="text-center group cursor-pointer"
        >
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
            style={{
              background: item.gradient,
              border: `2px solid ${item.borderColor}`
            }}
          >
            {item.image && (
              <img src={item.image} alt={item.title} className="w-10 h-10" />
            )}
          </div>
          <div className="font-light text-black/80 group-hover:text-black transition-colors duration-500 tracking-wide">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChromaGrid
