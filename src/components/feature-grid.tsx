/**
 * FeatureGrid - Grid riutilizzabile per visualizzare features
 * Utilizzato nelle pagine moduli per mostrare le funzionalita
 */

import { clsx } from 'clsx'
import { HeroIcon } from './hero-icon'

export interface FeatureGridItem {
  title: string
  description: string
  icon?: string           // Emoji legacy (retrocompatibilita)
  iconName?: string       // Nome Heroicon (es: 'ClipboardDocumentListIcon')
}

interface FeatureGridProps {
  features: FeatureGridItem[]
  columns?: 2 | 3
  className?: string
}

export function FeatureGrid({ features, columns = 3, className }: FeatureGridProps) {
  if (features.length === 0) return null

  return (
    <div
      className={clsx(
        'grid gap-6',
        columns === 2 && 'grid-cols-1 sm:grid-cols-2',
        columns === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {features.map((feature, idx) => (
        <FeatureCard key={idx} feature={feature} />
      ))}
    </div>
  )
}

function FeatureCard({ feature }: { feature: FeatureGridItem }) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl ring-1 ring-gray-950/5 hover:ring-brand-primary/20 hover:shadow-md transition-all">
      {/* Priorita: iconName (Heroicon) > icon (emoji) */}
      {feature.iconName ? (
        <div className="mb-4 text-brand-primary">
          <HeroIcon name={feature.iconName} className="w-10 h-10" />
        </div>
      ) : feature.icon ? (
        <div className="text-4xl mb-4" role="img" aria-hidden="true">
          {feature.icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-gray-950">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}
