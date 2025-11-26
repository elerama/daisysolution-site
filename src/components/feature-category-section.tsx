/**
 * FeatureCategorySection - Tabs/Accordion per categorie di funzionalita
 * Desktop: tabs orizzontali con grid features
 * Mobile: accordion collassabile
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import type { FeatureCategory } from '@/data/moduleData'
import { FeatureGrid } from './feature-grid'
import { HeroIcon } from './hero-icon'

interface FeatureCategorySectionProps {
  categories: FeatureCategory[]
  className?: string
}

export function FeatureCategorySection({ categories, className }: FeatureCategorySectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '')
  const [openAccordions, setOpenAccordions] = useState<string[]>([categories[0]?.id || ''])

  if (categories.length === 0) return null

  const toggleAccordion = (categoryId: string) => {
    setOpenAccordions((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className={className}>
      {/* Desktop: Tabs */}
      <div className="hidden lg:block">
        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {/* Priorita: iconName (Heroicon) > icon (emoji) */}
              {category.iconName ? (
                <HeroIcon name={category.iconName} className="w-5 h-5" />
              ) : (
                <span role="img" aria-hidden="true">{category.icon}</span>
              )}
              {category.name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {categories.map((category) => (
            activeCategory === category.id && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <FeatureGrid
                  features={category.features}
                  columns={3}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile: Accordion */}
      <div className="lg:hidden space-y-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl ring-1 ring-gray-950/5 overflow-hidden"
          >
            {/* Accordion header */}
            <button
              onClick={() => toggleAccordion(category.id)}
              className="flex items-center justify-between w-full p-4 text-left"
              aria-expanded={openAccordions.includes(category.id)}
            >
              <div className="flex items-center gap-3">
                {/* Priorita: iconName (Heroicon) > icon (emoji) */}
                {category.iconName ? (
                  <div className="text-brand-primary">
                    <HeroIcon name={category.iconName} className="w-7 h-7" />
                  </div>
                ) : (
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {category.icon}
                  </span>
                )}
                <span className="font-semibold text-gray-950">
                  {category.name}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {category.features.length}
                </span>
              </div>
              <ChevronDownIcon
                className={clsx(
                  'w-5 h-5 text-gray-500 transition-transform',
                  openAccordions.includes(category.id) && 'rotate-180'
                )}
              />
            </button>

            {/* Accordion content */}
            <AnimatePresence initial={false}>
              {openAccordions.includes(category.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">
                    <FeatureGrid
                      features={category.features}
                      columns={2}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* SEO: Hidden full content for crawlers (tutte le features nel DOM) */}
      <div className="sr-only" aria-hidden="true">
        {categories.map((category) => (
          <div key={`seo-${category.id}`}>
            <h3>{category.name}</h3>
            <ul>
              {category.features.map((feature, idx) => (
                <li key={idx}>
                  <strong>{feature.title}</strong>: {feature.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
