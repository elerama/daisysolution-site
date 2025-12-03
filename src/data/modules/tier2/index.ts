// Tier 2 - Support Modules (7 moduli di supporto)
export { contabilitaModule } from './contabilita'
export { contrattiModule } from './contratti'
export { comunicazioniModule } from './comunicazioni'
export { garanzieModule } from './garanzie'
export { navigatorModule } from './navigator'
export { ordiniModule } from './ordini'
export { planningModule } from './planning'

import type { ModuleData } from '../types'
import { contabilitaModule } from './contabilita'
import { contrattiModule } from './contratti'
import { comunicazioniModule } from './comunicazioni'
import { garanzieModule } from './garanzie'
import { navigatorModule } from './navigator'
import { ordiniModule } from './ordini'
import { planningModule } from './planning'

/** All Tier 2 modules as an array */
export const tier2Modules: ModuleData[] = [
  contabilitaModule,
  contrattiModule,
  comunicazioniModule,
  garanzieModule,
  navigatorModule,
  ordiniModule,
  planningModule,
]

/** All Tier 2 modules as a Record indexed by slug */
export const tier2ModulesBySlug: Record<string, ModuleData> = Object.fromEntries(
  tier2Modules.map((m) => [m.slug, m])
)
