/**
 * ScreenshotGallery - Carousel per screenshot del modulo
 * Basato sul pattern di testimonials.tsx con snap scroll
 */

'use client'

import { useRef, useState, useCallback, useLayoutEffect } from 'react'
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
  type MotionValue,
} from 'framer-motion'
import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import Image from 'next/image'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import type { ScreenshotItem } from '@/data/modules'

interface ScreenshotGalleryProps {
  screenshots: ScreenshotItem[]
  className?: string
}

function ScreenshotCard({
  screenshot,
  bounds,
  scrollX,
  onClick,
}: {
  screenshot: ScreenshotItem
  bounds: RectReadOnly
  scrollX: MotionValue<number>
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const computeOpacity = useCallback(() => {
    const element = ref.current
    if (!element || bounds.width === 0) return 1

    const rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left
      const percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right
      const percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [bounds.width, bounds.left, bounds.right])

  const opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      onClick={onClick}
      className="relative flex shrink-0 snap-center scroll-ml-(--scroll-padding) flex-col cursor-pointer group"
    >
      <div className="relative w-80 sm:w-96 md:w-[500px] lg:w-[600px] aspect-video overflow-hidden rounded-xl ring-1 ring-gray-950/10 shadow-lg group-hover:shadow-xl group-hover:ring-brand-primary/30 transition-all">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <p className="mt-3 text-sm text-gray-600 text-center max-w-md mx-auto">
        {screenshot.caption}
      </p>
    </motion.div>
  )
}

export function ScreenshotGallery({ screenshots, className }: ScreenshotGalleryProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { scrollX } = useScroll({ container: scrollRef })
  const [setReferenceWindowRef, bounds] = useMeasure()
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    if (scrollRef.current && scrollRef.current.children[0]) {
      const cardWidth = (scrollRef.current.children[0] as HTMLElement).offsetWidth
      setActiveIndex(Math.round(x / (cardWidth + 24))) // 24 = gap-6
    }
  })

  function scrollTo(index: number) {
    if (scrollRef.current && scrollRef.current.children[0]) {
      const gap = 24 // gap-6
      const width = (scrollRef.current.children[0] as HTMLElement).offsetWidth
      scrollRef.current.scrollTo({ left: (width + gap) * index, behavior: 'smooth' })
    }
  }

  if (screenshots.length === 0) return null

  return (
    <div className={clsx('overflow-hidden', className)} ref={setReferenceWindowRef}>
      {/* Carousel container */}
      <div
        ref={scrollRef}
        className={clsx([
          'flex gap-6 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {screenshots.map((screenshot, index) => (
          <ScreenshotCard
            key={index}
            screenshot={screenshot}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(index)}
          />
        ))}
        {/* Spacer at end */}
        <div className="w-6 shrink-0" />
      </div>

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {screenshots.map((screenshot, index) => (
            <Headless.Button
              key={index}
              onClick={() => scrollTo(index)}
              data-active={activeIndex === index ? true : undefined}
              aria-label={`Vai allo screenshot ${index + 1}: ${screenshot.caption}`}
              className={clsx(
                'size-2.5 rounded-full border border-transparent transition',
                'bg-gray-300 data-active:bg-brand-primary',
                'hover:bg-gray-400 data-active:hover:bg-brand-primary',
                'focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
