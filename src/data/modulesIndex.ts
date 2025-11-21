/**
 * Indice moduli - Mapping slug to basic info
 * File completo con tutti i contenuti sarà in moduleData.ts
 */

export const moduleSlugs = [
  // Tier 1
  'vendite-cassa',
  'magazzino',
  'acquisti-edi',
  'banca-dati-eldomcat',
  'ecommerce',
  'fastlabel',
  'riparazioni',
  'promozioni',
  'raee',
  'liste-regalo',
  'statistiche-bi',
  'webservice',
  // Tier 2
  'contabilita',
  'contratti',
  'comunicazioni',
  'garanzie',
  'navigator',
  'ordini',
  'planning',
] as const

export type ModuleSlug = typeof moduleSlugs[number]

export const moduleNames: Record<ModuleSlug, string> = {
  'vendite-cassa': 'Vendite & Cassa',
  'magazzino': 'Magazzino Multi-Sede',
  'acquisti-edi': 'Acquisti & EDI',
  'banca-dati-eldomcat': 'Banca Dati & Eldomcat',
  'ecommerce': 'E-commerce B2B/B2C',
  'fastlabel': 'Cartelli Fastlabel',
  'riparazioni': 'Riparazioni & Laboratorio',
  'promozioni': 'Promozioni Multi-Canale',
  'raee': 'RAEE & Compliance',
  'liste-regalo': 'Liste Regalo',
  'statistiche-bi': 'Statistiche & BI',
  'webservice': 'Import/Export & Webservice',
  'contabilita': 'Contabilità',
  'contratti': 'Contratti',
  'comunicazioni': 'Comunicazioni',
  'garanzie': 'Garanzie',
  'navigator': 'Navigator',
  'ordini': 'Ordini',
  'planning': 'Planning',
}
