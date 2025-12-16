/**
 * Module System - Single Source of Truth
 *
 * This is the main entry point for all module data.
 * All module information should be imported from here.
 */

// Re-export types
export type {
  ModuleData,
  ModuleMeta,
  ModuleCategory,
  CategoryColor,
  ModuleSlug,
  FeatureItem,
  FeatureCategory,
  OptionalConnection,
  ScreenshotItem,
} from './types'

// Re-export helpers
export {
  isModuleComplete,
  hasMinimalContent,
  getRelatedModuleSlugs,
  filterByTier,
  createDraftMeta,
  createCompleteMeta,
} from './helpers'

// Re-export tier-specific collections
export {
  tier1Modules,
  tier1ModulesBySlug,
  venditeCassaModule,
  magazzinoModule,
  acquistiModule,
  bancaDatiEldomcatModule,
  ecommerceModule,
  fastlabelModule,
  riparazioniModule,
  promozioniModule,
  raeeModule,
  listeRegaloModule,
  statisticheBiModule,
  webserviceModule,
} from './tier1'

export {
  tier2Modules,
  tier2ModulesBySlug,
  contabilitaModule,
  contrattiModule,
  comunicazioniModule,
  garanzieModule,
  navigatorModule,
  ordiniModule,
  planningModule,
} from './tier2'

import type { ModuleData } from './types'
import { tier1Modules, tier1ModulesBySlug } from './tier1'
import { tier2Modules, tier2ModulesBySlug } from './tier2'

// ============================================================================
// Aggregated Collections (Single Source of Truth)
// ============================================================================

/** All modules as an array (Tier 1 + Tier 2) */
export const allModules: ModuleData[] = [...tier1Modules, ...tier2Modules]

/** All modules as a Record indexed by slug */
export const modules: Record<string, ModuleData> = {
  ...tier1ModulesBySlug,
  ...tier2ModulesBySlug,
}

/** List of all module slugs */
export const moduleSlugs: string[] = allModules.map((m) => m.slug)

/** Map of slug -> module name */
export const moduleNames: Record<string, string> = Object.fromEntries(
  allModules.map((m) => [m.slug, m.name])
)

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get a module by its slug
 */
export function getModuleBySlug(slug: string): ModuleData | undefined {
  return modules[slug]
}

/**
 * Check if a slug is a valid module slug
 */
export function isValidModuleSlug(slug: string): boolean {
  return slug in modules
}

/**
 * Get all modules for a specific tier
 */
export function getModulesByTier(tier: 1 | 2): ModuleData[] {
  return tier === 1 ? tier1Modules : tier2Modules
}

/**
 * Get all modules for a specific category
 */
export function getModulesByCategory(category: string): ModuleData[] {
  return allModules.filter((m) => m.category === category)
}

/**
 * Get unique categories from all modules
 */
export function getCategories(): string[] {
  return [...new Set(allModules.map((m) => m.category))]
}

/**
 * Get category color for a specific category
 */
export function getCategoryColor(category: string): string | undefined {
  const found = allModules.find((m) => m.category === category)
  return found?.categoryColor
}
