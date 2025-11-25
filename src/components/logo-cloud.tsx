'use client'

import { clsx } from 'clsx'

/**
 * LogoCloud - Carousel animato con loghi clienti
 *
 * Implementazione tipo marquee con scorrimento automatico orizzontale.
 * I loghi si duplicano per creare l'effetto di scorrimento infinito.
 *
 * TODO: Sostituire i placeholder con i loghi reali:
 * - /placeholders/logo-dggroup.svg → logo dggroup.png
 * - /placeholders/logo-sinergy.svg → logo sinergy.png
 * - /placeholders/logo-trony.svg → logo trony.png
 * - /placeholders/logo-elettrosintesi.svg → logo elettrosintesi.png
 */

// Lista completa dei loghi clienti
const logos = [
  { name: 'Unieuro', src: '/loghi/unieuro.png' },
  { name: 'Expert', src: '/loghi/expert.png' },
  { name: 'Gaer', src: '/loghi/gaer.png' },
  { name: 'Eurocom', src: '/loghi/eurocom.png' },
  { name: 'Trend', src: '/loghi/trend.png' },
  { name: 'Model Assistance', src: '/loghi/model_assistance.png' },
  // Placeholder per loghi mancanti
  { name: 'DG Group', src: '/placeholders/logo-dggroup.svg', placeholder: true },
  { name: 'Sinergy', src: '/placeholders/logo-sinergy.svg', placeholder: true },
  { name: 'Trony', src: '/placeholders/logo-trony.svg', placeholder: true },
  { name: 'Elettrosintesi', src: '/placeholders/logo-elettrosintesi.svg', placeholder: true },
]

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'relative overflow-hidden',
      )}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Marquee container */}
      <div className="flex animate-marquee hover:pause-animation">
        {/* First set of logos */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {logos.map((logo, idx) => (
            <img
              key={`logo-1-${idx}`}
              alt={logo.name}
              src={logo.src}
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
        {/* Duplicated set for infinite scroll effect */}
        <div className="flex shrink-0 items-center gap-12 px-6">
          {logos.map((logo, idx) => (
            <img
              key={`logo-2-${idx}`}
              alt={logo.name}
              src={logo.src}
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
