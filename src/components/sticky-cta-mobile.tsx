'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { Button } from './button'

interface StickyCTAMobileProps {
  href: string
  label: string
  className?: string
}

export function StickyCTAMobile({ href, label, className = '' }: StickyCTAMobileProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Show CTA when scrolling up, hide when scrolling down
    // But always show if we're at the top (< 100px)
    if (latest < 100) {
      setIsVisible(true)
    } else if (latest < lastScrollY) {
      // Scrolling up
      setIsVisible(true)
    } else if (latest > lastScrollY + 10) {
      // Scrolling down (with small threshold to avoid flicker)
      setIsVisible(false)
    }
    setLastScrollY(latest)
  })

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${className}`}
    >
      <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
        <Button href={href} className="w-full justify-center">
          {label}
        </Button>
      </div>
    </motion.div>
  )
}
