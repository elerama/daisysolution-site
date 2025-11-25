/**
 * Statistiche centralizzate del sito DaisySolution
 *
 * ISTRUZIONI: Per aggiornare una statistica, modificare SOLO questo file.
 * Tutti i componenti importeranno i valori da qui.
 *
 * @example
 * import { CLIENTS, PRODUCTS, formatNumber } from '@/data/siteStats'
 * <span>{CLIENTS.unieuroAffiliates}+</span>
 * <span>{formatNumber(PRODUCTS.eldomcatArticles)}</span>
 */

// === AZIENDA ===
export const COMPANY = {
  name: 'Daisy Solution',
  fullName: 'Daisy Solution by Elettrorama',
  foundedYear: 2005,
  yearsExperience: 25,
  parentCompany: 'Elettrorama S.r.l.',
} as const

// === CLIENTI & AFFILIATI ===
export const CLIENTS = {
  /** Punti vendita totali che usano DaisySolution */
  totalStores: 1000,
  /** Affiliati Unieuro attivi */
  unieuroAffiliates: 250,
  /** Affiliati Expert */
  expertAffiliates: 200,
  /** Affiliati gruppo GRE */
  greAffiliates: 50,
  /** Clienti totali serviti */
  totalClients: 2000,
  /** Clienti Fastlabel */
  fastlabelClients: 2000,
  /** Associati Domex */
  domexAssociates: 200,
  /** Negozi Gaer */
  gaerStores: 200,
} as const

// === INFRASTRUTTURA ===
export const INFRASTRUCTURE = {
  /** Postazioni che lavorano ogni giorno con DaisySolution */
  dailyWorkstations: 4000,
  /** Postazioni Unieuro */
  unieuroWorkstations: 900,
  /** Casse Unieuro collegate */
  unieroCashRegisters: 400,
  /** SKU catalogo Unieuro */
  unieuroSKU: 85000,
  /** Media postazioni per negozio Unieuro */
  avgWorkstationsPerStore: 3.5,
} as const

// === PRODOTTI ===
export const PRODUCTS = {
  /** Moduli funzionali Daisy Solution */
  daisyModules: 41,
  /** Integrazioni native */
  nativeIntegrations: 9,
  /** Articoli nella banca dati Eldomcat */
  eldomcatArticles: 300000,
  /** Compilazioni diverse Eldomcat */
  eldomcatCompilations: 8,
  /** Ore risparmiate vs inserimento manuale */
  hoursSavedManualEntry: 75000,
} as const

// === PREZZI ===
export const PRICING = {
  /** Prezzo base mensile minimo */
  monthlyBase: 10,
  /** Piano Starter annuale */
  starterYearly: 990,
  /** Piano Professional annuale */
  professionalYearly: 2500,
  /** Risparmio TCO percentuale vs on-premise */
  tcoSavingsPercent: 60,
  /** Moduli inclusi Starter */
  starterModules: 3,
  /** Postazioni incluse Starter */
  starterWorkstations: 3,
  /** Moduli inclusi Professional */
  professionalModules: 10,
  /** Postazioni incluse Professional */
  professionalWorkstations: 10,
  /** Punti vendita Professional */
  professionalStores: 3,
  /** Sconto massimo reti 5+ PV */
  networkDiscountPercent: 30,
} as const

// === SLA & PERFORMANCE ===
export const SLA = {
  /** Uptime garantito */
  uptimePercent: 99.9,
  /** Giorni assistenza a settimana */
  supportDaysPerWeek: 7,
  /** Tempo risposta commerciale (ore) */
  responseHours: 24,
  /** Tempo setup iniziale (minuti) */
  setupMinutes: 10,
  /** Giorni per setup integrazioni */
  integrationSetupDays: 2,
  /** Giorni prova gratuita */
  trialDays: 30,
  /** Giorni garanzia rimborso */
  refundDays: 30,
} as const

// === METRICHE DI SUCCESSO ===
export const METRICS = {
  /** Aumento ritorno clienti con fidelity */
  customerReturnIncrease: 35,
  /** Crescita ordini B2B (Gaer anno 1) */
  b2bOrderGrowthPercent: 240,
  /** Riduzione errori ordine */
  orderErrorReductionPercent: 95,
  /** Tempo medio ordine Gaer (minuti) */
  avgOrderTimeMinutes: 3,
  /** Vendite gestite ogni anno */
  yearlySalesManaged: 5000000,
} as const

// === CONTATTI ===
export const CONTACTS = {
  phone: '+39 011 9203522',
  phoneHelpdesk: '+39 011 9203522 int. 1',
  emailSales: 'info@daisysolution.it',
  emailSupport: 'support@daisysolution.it',
  emailHelpdesk: 'helpdesk@elettrorama.com',
  /** TODO: Inserire P.IVA reale */
  vatNumber: '01234567890',
} as const

// === INDIRIZZO ===
export const ADDRESS = {
  street: 'Via Marie Curie 3',
  city: 'Ciriè',
  province: 'TO',
  postalCode: '10073',
  country: 'Italia',
  countryCode: 'IT',
} as const

// === ORARI ===
export const HOURS = {
  weekdayMorning: '9:00-13:00',
  weekdayAfternoon: '14:30-19:30',
  saturday: '9:00-13:00',
  weekdays: 'Lun-Ven',
} as const

// === HELPER FUNCTIONS ===

/**
 * Formatta un numero grande con suffisso (k+, M+)
 * @example formatNumber(300000) => "300k+"
 * @example formatNumber(5000000) => "5M+"
 */
export function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(0)}M+`
  if (n >= 1000) return `${Math.floor(n / 1000)}k+`
  return `${n}+`
}

/**
 * Formatta un prezzo con periodo
 * @example formatPrice(990) => "€990/anno"
 * @example formatPrice(10, 'month') => "€10/mese"
 */
export function formatPrice(n: number, period: 'month' | 'year' = 'year'): string {
  return `€${n}/${period === 'month' ? 'mese' : 'anno'}`
}

/**
 * Formatta una percentuale
 * @example formatPercent(99.9) => "99.9%"
 * @example formatPercent(60) => "60%"
 */
export function formatPercent(n: number): string {
  return `${n}%`
}

/**
 * Restituisce l'indirizzo completo formattato
 */
export function getFullAddress(): string {
  return `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.city} (${ADDRESS.province}), ${ADDRESS.country}`
}

/**
 * Restituisce gli orari formattati
 */
export function getFormattedHours(): string {
  return `${HOURS.weekdays}: ${HOURS.weekdayMorning} / ${HOURS.weekdayAfternoon} - Sabato: ${HOURS.saturday}`
}
