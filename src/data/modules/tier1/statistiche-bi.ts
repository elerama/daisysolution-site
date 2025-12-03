import type { ModuleData } from '../types'

export const statisticheBiModule: ModuleData = {
  slug: 'statistiche-bi',
  name: 'Statistiche & BI',
  tagline: 'Dashboard analytics e report per decisioni data-driven',
  category: 'Intelligence e Ottimizzazione',
  categoryColor: 'blue',
  icon: '📊',
  tier: 1,
  overview: {
    intro:
      'Il modulo Statistiche & BI è il centro di intelligence del tuo business. Dashboard real-time con KPI vendite, margini, giacenze, performance. Report avanzati per articolo, cliente, operatore, periodo. Analisi ABC, rotazione stock, trend vendite, forecast. Export per analisi esterne, grafici interattivi, alert automatici su metriche critiche.',
    mainBenefits: [
      'Visibilità KPI real-time per decisioni rapide',
      'Report avanzati con drill-down su ogni dimensione',
      'Analisi predittive con forecast vendite',
      'Export dati per BI esterni (Power BI, Excel)',
    ],
    stats: [
      {
        label: 'Dashboard configurabili',
        value: '20+',
        description: 'per ruolo e reparto',
      },
      {
        label: 'Metriche tracciate',
        value: '100+',
        description: 'KPI vendite, margini, stock',
      },
    ],
  },
  features: [
    {
      title: 'Dashboard real-time',
      description:
        'KPI principali aggiornati in tempo reale: vendite, margini, giacenze',
      icon: '📈',
    },
    {
      title: 'Report vendite',
      description:
        'Analisi vendite per articolo, cliente, operatore, negozio, periodo',
      icon: '📊',
    },
    {
      title: 'Analisi ABC',
      description:
        'Classificazione articoli per valore vendite e margine contributo',
      icon: '🎯',
    },
    {
      title: 'Rotazione stock',
      description:
        'Indici rotazione magazzino, giorni giacenza, articoli a lento movimento',
      icon: '🔄',
    },
    {
      title: 'Trend e forecast',
      description:
        'Analisi trend storici e previsioni vendite con algoritmi predittivi',
      icon: '📉',
    },
    {
      title: 'Performance operatori',
      description:
        'Classifica venditori per fatturato, margine, numero transazioni',
      icon: '👥',
    },
    {
      title: 'Alert automatici',
      description:
        'Notifiche quando KPI critici superano soglie (es. margine <15%)',
      icon: '🔔',
    },
    {
      title: 'Export flessibile',
      description:
        'Export dati in Excel, CSV, PDF per analisi esterne o Power BI',
      icon: '📤',
    },
  ],
  benefits: [
    {
      title: 'Decisioni data-driven',
      metric: '3x velocità',
      description:
        'Dashboard real-time consente di prendere decisioni 3 volte più velocemente rispetto a report manuali settimanali.',
    },
    {
      title: 'Margini ottimizzati',
      metric: '+12% margine',
      description:
        "L'analisi ABC aiuta a focalizzarsi sui prodotti ad alto margine, aumentando il margine medio del 12%.",
    },
    {
      title: 'Stock ottimizzato',
      metric: '-25% capitale',
      description:
        "L'analisi rotazione riduce il capitale immobilizzato in stock a lento movimento del 25%.",
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena 6 negozi elettronica',
    customer: 'Rivenditore multi-brand elettronica di consumo',
    challenge:
      'Il management riceveva report vendite settimanali su Excel. Nessuna visibilità real-time, analisi limitate, impossibile capire quali prodotti generavano margine. Decisioni su "sensazione" più che su dati.',
    solution:
      'Implementato modulo Statistiche & BI con dashboard personalizzate per CEO, direttori negozi, buyer. Dashboard vendite real-time, analisi ABC prodotti, report performance per operatore. Alert automatici su margini sotto soglia.',
    results: [
      'Visibilità KPI real-time vs. report settimanali a postumi',
      'Margine medio aumentato del 12% focalizzandosi su prodotti ABC',
      'Stock ottimizzato: -25% capitale immobilizzato',
      'Decisioni buyer basate su dati oggettivi, non sensazioni',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Acquisti & EDI', slug: 'acquisti-edi' },
    { name: 'Promozioni', slug: 'promozioni' },
  ],
  faq: [
    {
      question: 'Posso creare dashboard personalizzate per ruolo?',
      answer:
        'Sì, puoi configurare dashboard diverse per CEO (KPI generali), direttori negozio (performance punto vendita), buyer (analisi acquisti), venditori (obiettivi personali). Ogni utente vede solo i dati rilevanti.',
    },
    {
      question: "Come funziona l'analisi ABC?",
      answer:
        "L'analisi ABC classifica gli articoli in base al principio di Pareto: classe A (20% articoli, 80% vendite), B (30% articoli, 15% vendite), C (50% articoli, 5% vendite). Ti aiuta a focalizzarti sui prodotti che contano davvero.",
    },
    {
      question: 'Posso esportare dati per analisi esterne in Power BI?',
      answer:
        'Sì, puoi esportare dati in Excel, CSV o connetterti via API REST per integrare con Power BI, Tableau o altri strumenti di BI esterni. Export schedulati automatici disponibili.',
    },
    {
      question: 'Gli alert automatici come funzionano?',
      answer:
        'Configuri soglie su KPI critici (es. "margine giornaliero <15%", "giacenza prodotto X <10"). Quando la soglia viene superata, ricevi notifica email o SMS. Puoi agire immediatamente invece che scoprirlo a fine mese.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
