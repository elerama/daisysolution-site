import type { ModuleData } from '../types'

export const promozioniModule: ModuleData = {
  slug: 'promozioni',
  name: 'Promozioni',
  tagline: 'Campagne promozionali multi-canale con sconti, bundle e prezzi barrati',
  category: 'Crescita e Sviluppo',
  categoryColor: 'violet',
  icon: '🎯',
  tier: 1,
  overview: {
    intro:
      'Il modulo Promozioni è il motore delle tue campagne commerciali. Crea promozioni articolo, categoria o brand con sconti percentuali, prezzi fissi, bundle (3x2, seconda merce -50%), prezzi barrati automatici. Sincronizzazione multi-canale: negozio, e-commerce, cartelli Fastlabel, volantini. Tracking ROI per ogni campagna.',
    mainBenefits: [
      'Campagne sincronizzate automaticamente su tutti i canali',
      'Prezzi promozionali applicati in tempo reale',
      'Bundle e offerte complesse (3x2, -50% su secondo)',
      'Report performance e ROI per ogni campagna',
    ],
    stats: [
      {
        label: 'Canali sincronizzati',
        value: '4+',
        description: 'negozio, web, cartelli, volantini',
      },
      {
        label: 'Incremento vendite',
        value: '+45%',
        description: 'durante campagne promozionali',
      },
    ],
  },
  features: [
    {
      title: 'Campagne periodo',
      description:
        'Definisci promozioni con data inizio/fine, attivazione e disattivazione automatica',
      icon: '📅',
    },
    {
      title: 'Sconti articolo/categoria',
      description:
        'Applica sconti a singoli articoli, categorie o brand completi',
      icon: '💸',
    },
    {
      title: 'Bundle e offerte',
      description:
        'Crea offerte complesse: 3x2, seconda merce -50%, bundle prodotti',
      icon: '🎁',
    },
    {
      title: 'Prezzi barrati',
      description:
        'Prezzi originali barrati automaticamente su cartelli ed e-commerce',
      icon: '🏷️',
    },
    {
      title: 'Gestione volantini',
      description:
        'Cataloghi promozionali con articoli evidenziati e prezzi speciali',
      icon: '📰',
    },
    {
      title: 'Promozioni fidelity',
      description:
        'Sconti esclusivi per clienti con carta fedeltà o livelli premium',
      icon: '⭐',
    },
    {
      title: 'Coupon e codici',
      description:
        'Genera codici sconto usa-e-getta o multi-uso per campagne mirate',
      icon: '🎫',
    },
    {
      title: 'Report ROI',
      description:
        'Analisi vendite pre/durante/post campagna con calcolo ritorno investimento',
      icon: '📊',
    },
  ],
  benefits: [
    {
      title: 'Sincronizzazione multi-canale',
      metric: '100% coerenza',
      description:
        'Prezzi promozionali identici su negozio, web, cartelli e volantini. Zero discordanze, zero contestazioni.',
    },
    {
      title: 'Stimolo vendite mirato',
      metric: '+45% vendite',
      description:
        'Le campagne promozionali aumentano le vendite del 45% sui prodotti target durante il periodo attivo.',
    },
    {
      title: 'ROI tracciabile',
      description:
        'Ogni campagna ha metriche precise: vendite incrementali, margine, costo campagna. Sai esattamente cosa funziona.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Campagna Black Friday multi-canale',
    customer: 'Catena 8 negozi elettrodomestici + e-commerce',
    challenge:
      "Durante il Black Friday, gestire manualmente sconti su 500+ articoli tra negozi ed e-commerce causava errori, ritardi e discordanze di prezzo. Clienti confusi tra prezzo online e negozio.",
    solution:
      'Implementato modulo Promozioni con campagna Black Friday centralizzata. 500 articoli in promo con prezzi barrati sincronizzati automaticamente su tutti i canali. Cartelli Fastlabel stampati in automatico, e-commerce aggiornato in real-time.',
    results: [
      'Vendite Black Friday +62% rispetto anno precedente',
      'Zero discordanze prezzo tra canali',
      'Tempo setup campagna ridotto da 3 giorni a 2 ore',
      'ROI campagna tracciato: margine netto +38%',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Fastlabel', slug: 'fastlabel' },
    { name: 'Statistiche & BI', slug: 'statistiche-bi' },
  ],
  faq: [
    {
      question: 'Posso creare offerte 3x2 o "seconda merce a metà prezzo"?',
      answer:
        'Sì, il sistema supporta bundle complessi: 3x2, 2x1, seconda merce scontata, bundle prodotti. Puoi anche combinare più regole (es. sconto 10% + omaggio).',
    },
    {
      question: 'Come vengono sincronizzati i prezzi su tutti i canali?',
      answer:
        'Quando attivi una campagna, il sistema aggiorna automaticamente i prezzi su vendite, e-commerce, cartelli Fastlabel. La sincronizzazione avviene in tempo reale (web) o al prossimo aggiornamento (cartelli).',
    },
    {
      question: 'Posso limitare promozioni a clienti con fidelity card?',
      answer:
        'Sì, puoi creare promozioni esclusive per clienti con carta fedeltà o per livelli specifici (es. solo Gold). Ottimo per fidelizzare i tuoi clienti migliori.',
    },
    {
      question: 'Come traccio il ROI di una campagna promozionale?',
      answer:
        'Il sistema genera report con vendite incrementali (rispetto a periodo precedente), margine generato, costi campagna (sconti applicati), ROI netto. Puoi confrontare più campagne per capire cosa funziona meglio.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
