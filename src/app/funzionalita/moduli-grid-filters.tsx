'use client'

/**
 * Client Component: Funzionalità Grid with Category Filters
 * Provides interactive filtering by category - ALL modules in a single grid
 */

import { HeroIcon } from '@/components/hero-icon'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/text'
import { modules, moduleSlugs, type ModuleCategory } from '@/data/modules'
import { useState } from 'react'

export function ModuliGridWithFilters() {
  const [selectedCategory, setSelectedCategory] = useState<ModuleCategory | 'all'>('all')

  // Get ALL modules (unified grid - no tier distinction)
  const allModuli = moduleSlugs.map(slug => {
    const moduleData = modules[slug]
    return {
      heroIcon: moduleData.heroIcon,
      title: moduleData.name,
      description: moduleData.overview.intro,
      category: moduleData.category,
      href: `/funzionalita/${slug}`,
    }
  })

  // Get unique categories
  const categories = Array.from(new Set(allModuli.map(m => m.category)))

  // Filter modules based on selected category
  const filteredModuli = selectedCategory === 'all'
    ? allModuli
    : allModuli.filter(m => m.category === selectedCategory)

  return (
    <>
      <Subheading className="text-center">Tutte le funzionalità</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        {moduleSlugs.length} strumenti per gestire il retail moderno
      </Heading>

      {/* Category filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-brand-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tutti ({allModuli.length})
        </button>
        {categories.map((category) => {
          const count = allModuli.filter(m => m.category === category).length
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-brand-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category} ({count})
            </button>
          )
        })}
      </div>

      {/* Modules grid */}
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredModuli.map((modulo) => (
          <div
            key={modulo.title}
            className="flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5 hover:ring-gray-950/10 transition-shadow"
          >
            <div className="mb-6" aria-label={modulo.title}>
              {modulo.heroIcon && (
                <HeroIcon name={modulo.heroIcon} className="size-12 text-brand-primary" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-950">
              {modulo.title}
            </h3>
            <p className="mt-4 text-base text-gray-700 flex-1">
              {modulo.description}
            </p>
            <div className="mt-6">
              <Link
                href={modulo.href}
                className="text-sm font-semibold text-brand-primary hover:underline"
                aria-label={`Scopri ${modulo.title}`}
              >
                Scopri di più →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredModuli.length === 0 && (
        <div className="mt-16 text-center text-gray-500">
          <p>Nessun modulo trovato per questa categoria.</p>
        </div>
      )}
    </>
  )
}
