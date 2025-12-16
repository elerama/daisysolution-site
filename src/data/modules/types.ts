/**
 * Type definitions per moduli Daisy Solution
 * Estratte da moduleData.ts per modularizzazione
 */

export type ModuleCategory =
  | 'Operazioni Base'
  | 'Crescita e Sviluppo'
  | 'Eccellenza Operativa'
  | 'Intelligence e Ottimizzazione'
  | 'Integrazione e Automazione'
  | 'Compliance e Amministrazione'

export type CategoryColor =
  | 'emerald'
  | 'pink'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'amber'

// Literal union type per type-safe slug validation
export type ModuleSlug =
  | 'vendite-cassa'
  | 'magazzino'
  | 'acquisti'
  | 'banca-dati-eldomcat'
  | 'ecommerce'
  | 'fastlabel'
  | 'riparazioni'
  | 'promozioni'
  | 'raee'
  | 'liste-regalo'
  | 'statistiche-bi'
  | 'webservice'
  | 'contabilita'
  | 'contratti'
  | 'comunicazioni'
  | 'garanzie'
  | 'navigator'
  | 'ordini'
  | 'planning'

// Metadata per tracciare completezza e versione modulo
export interface ModuleMeta {
  isComplete: boolean
  version: 'v1' | 'v2' | 'v2.1'
  lastUpdated: string // ISO date format
  draftNote?: string // "Awaiting screenshots", "Content in progress", etc.
}

export interface ModuleData {
  slug: string
  name: string
  tagline: string
  category: ModuleCategory
  categoryColor: CategoryColor
  icon: string
  tier: 1 | 2
  overview: {
    intro: string
    mainBenefits: string[]
    stats?: {
      label: string
      value: string
      description: string
    }[]
  }
  features: {
    title: string
    description: string
    icon: string // Emoji legacy (retrocompatibilita)
    iconName?: string // Nome Heroicon (es: 'ClipboardDocumentListIcon')
  }[]
  benefits: {
    title: string
    metric?: string
    description: string
  }[]
  useCase: {
    title: string
    customer?: string
    challenge: string
    solution: string
    results: string[]
  }
  integrations: {
    name: string
    slug: string
  }[]
  faq: {
    question: string
    answer: string
  }[]

  // Nuovi campi opzionali (v2) - retrocompatibili
  featureCategories?: FeatureCategory[]
  optionalConnections?: OptionalConnection[]
  screenshots?: ScreenshotItem[]

  // Hero migliorata (v2.1)
  heroIcon?: string // Nome Heroicon (es: 'ShoppingCartIcon')
  heroIntro?: string // Intro breve per hero (max 2-3 righe)

  // Metadata per tracciamento completezza
  _meta: ModuleMeta
}

// ==================== Interface v2 ====================

export interface FeatureItem {
  title: string
  description: string
  icon?: string // Emoji legacy (retrocompatibilita)
  iconName?: string // Nome Heroicon (es: 'ClipboardDocumentListIcon')
}

export interface FeatureCategory {
  id: string
  name: string
  icon: string // Emoji legacy (retrocompatibilita)
  iconName?: string // Nome Heroicon (es: 'DocumentTextIcon')
  features: FeatureItem[]
}

export interface OptionalConnection {
  id: string
  name: string
  description: string
  benefits: string[]
  icon: string // Emoji legacy (retrocompatibilita)
  iconName?: string // Nome Heroicon (es: 'BoltIcon')
  externalLink?: string
  relatedModuleSlug?: string
}

export interface ScreenshotItem {
  src: string
  alt: string
  caption: string
}
