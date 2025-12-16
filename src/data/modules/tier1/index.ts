// Tier 1 - Core Modules (12 moduli principali)
export { venditeCassaModule } from './vendite-cassa'
export { magazzinoModule } from './magazzino'
export { acquistiModule } from './acquisti'
export { bancaDatiEldomcatModule } from './banca-dati-eldomcat'
export { ecommerceModule } from './ecommerce'
export { fastlabelModule } from './fastlabel'
export { riparazioniModule } from './riparazioni'
export { promozioniModule } from './promozioni'
export { raeeModule } from './raee'
export { listeRegaloModule } from './liste-regalo'
export { statisticheBiModule } from './statistiche-bi'
export { webserviceModule } from './webservice'

import type { ModuleData } from '../types'
import { venditeCassaModule } from './vendite-cassa'
import { magazzinoModule } from './magazzino'
import { acquistiModule } from './acquisti'
import { bancaDatiEldomcatModule } from './banca-dati-eldomcat'
import { ecommerceModule } from './ecommerce'
import { fastlabelModule } from './fastlabel'
import { riparazioniModule } from './riparazioni'
import { promozioniModule } from './promozioni'
import { raeeModule } from './raee'
import { listeRegaloModule } from './liste-regalo'
import { statisticheBiModule } from './statistiche-bi'
import { webserviceModule } from './webservice'

/** All Tier 1 modules as an array */
export const tier1Modules: ModuleData[] = [
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
]

/** All Tier 1 modules as a Record indexed by slug */
export const tier1ModulesBySlug: Record<string, ModuleData> = Object.fromEntries(
  tier1Modules.map((m) => [m.slug, m])
)
