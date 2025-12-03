/**
 * Helper functions per moduli Daisy Solution
 */

import type { ModuleData } from './types'

/**
 * Verifica se un modulo è completo e pronto per la pubblicazione
 */
export function isModuleComplete(module: ModuleData): boolean {
  return module._meta.isComplete
}

/**
 * Verifica se un modulo ha contenuti sufficienti per essere visualizzato
 * (anche se non è marcato come completo)
 */
export function hasMinimalContent(module: ModuleData): boolean {
  return (
    module.features.length > 0 &&
    module.overview.intro.length > 0 &&
    module.tagline.length > 0
  )
}

/**
 * Ottiene la lista di moduli correlati tramite integrazioni
 */
export function getRelatedModuleSlugs(module: ModuleData): string[] {
  return module.integrations.map((i) => i.slug)
}

/**
 * Filtra moduli per tier
 */
export function filterByTier(
  modules: Record<string, ModuleData>,
  tier: 1 | 2
): ModuleData[] {
  return Object.values(modules).filter((m) => m.tier === tier)
}

/**
 * Filtra moduli per categoria
 */
export function filterByCategory(
  modules: Record<string, ModuleData>,
  category: ModuleData['category']
): ModuleData[] {
  return Object.values(modules).filter((m) => m.category === category)
}

/**
 * Ottiene moduli completi pronti per pubblicazione
 */
export function getCompleteModules(
  modules: Record<string, ModuleData>
): ModuleData[] {
  return Object.values(modules).filter((m) => m._meta.isComplete)
}

/**
 * Crea metadata di default per moduli draft
 */
export function createDraftMeta(note?: string): ModuleData['_meta'] {
  return {
    isComplete: false,
    version: 'v1',
    lastUpdated: new Date().toISOString().split('T')[0],
    draftNote: note ?? 'Contenuto in preparazione',
  }
}

/**
 * Crea metadata per moduli completi
 */
export function createCompleteMeta(
  version: 'v1' | 'v2' | 'v2.1' = 'v2'
): ModuleData['_meta'] {
  return {
    isComplete: true,
    version,
    lastUpdated: new Date().toISOString().split('T')[0],
  }
}
