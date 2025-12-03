/**
 * OptionalConnectionCard - Card per visualizzare i collegamenti opzionali
 * Utilizzato nelle pagine moduli per mostrare le integrazioni estendibili
 */

'use client'

import { motion } from 'framer-motion'
import { Link } from './link'
import type { OptionalConnection } from '@/data/modules'
import { HeroIcon } from './hero-icon'

interface OptionalConnectionCardProps {
  connection: OptionalConnection
}

export function OptionalConnectionCard({ connection }: OptionalConnectionCardProps) {
  const CardContent = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full p-6 bg-white rounded-xl ring-1 ring-gray-950/5 hover:ring-brand-primary/30 hover:shadow-lg transition-shadow"
    >
      {/* Icon - Priorita: iconName (Heroicon) > icon (emoji) */}
      {connection.iconName ? (
        <div className="mb-4 text-brand-primary">
          <HeroIcon name={connection.iconName} className="w-10 h-10" />
        </div>
      ) : (
        <div className="text-4xl mb-4" role="img" aria-hidden="true">
          {connection.icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-950">
        {connection.name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">
        {connection.description}
      </p>

      {/* Benefits */}
      {connection.benefits.length > 0 && (
        <ul className="mt-4 space-y-2 flex-1">
          {connection.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-500 shrink-0">&#10003;</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Link indicator */}
      {(connection.relatedModuleSlug || connection.externalLink) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-brand-primary group-hover:underline">
            Scopri di piu &rarr;
          </span>
        </div>
      )}
    </motion.div>
  )

  // If has related module, wrap in Link
  if (connection.relatedModuleSlug) {
    return (
      <Link
        href={`/prodotto/moduli/${connection.relatedModuleSlug}`}
        className="group block"
        aria-label={`Vai al modulo ${connection.name}`}
      >
        {CardContent}
      </Link>
    )
  }

  // If has external link, wrap in anchor
  if (connection.externalLink) {
    return (
      <a
        href={connection.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label={`Scopri di piu su ${connection.name}`}
      >
        {CardContent}
      </a>
    )
  }

  // No link, just return the card
  return CardContent
}

interface OptionalConnectionsGridProps {
  connections: OptionalConnection[]
  className?: string
}

export function OptionalConnectionsGrid({ connections, className }: OptionalConnectionsGridProps) {
  if (connections.length === 0) return null

  return (
    <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className || ''}`}>
      {connections.map((connection) => (
        <OptionalConnectionCard key={connection.id} connection={connection} />
      ))}
    </div>
  )
}
