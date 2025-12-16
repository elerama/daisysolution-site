import type { ModuleData } from '../types'

export const magazzinoModule: ModuleData = {
  slug: 'magazzino',
  name: 'Magazzino Multi-Sede',
  tagline: 'Gestisci giacenze, movimenti e inventari su più sedi in tempo reale',
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '📦',
  tier: 1,
  overview: {
    intro:
      "Sistema di gestione magazzino avanzato con supporto multi-sede, tracking seriali, gestione ubicazioni e inventari periodici. Movimenti automatici da documenti vendita/acquisto, alert giacenze sotto scorta, transfer inter-sede con tracking completo.",
    mainBenefits: [
      'Giacenze real-time su tutte le sedi',
      'Transfer automatici tra magazzini',
      'Alert giacenze sotto scorta',
      'Inventari con pistola barcode',
    ],
    stats: [
      {
        label: 'Seriali tracciati',
        value: '1M+',
        description: 'per garanzie e compliance',
      },
      {
        label: 'Sedi gestite',
        value: '50+',
        description: 'per singolo cliente catena',
      },
    ],
  },
  features: [
    {
      title: 'Multi-sede real-time',
      description:
        'Gestisci giacenze di decine di punti vendita con aggiornamenti istantanei',
      icon: '🏪',
    },
    {
      title: 'Tracking seriali',
      description:
        'Traccia ogni prodotto serializzato per garanzie e compliance',
      icon: '🔢',
    },
    {
      title: 'Ubicazioni magazzino',
      description:
        'Organizza il magazzino con scaffali, ripiani e celle per trovare subito la merce',
      icon: '📍',
    },
    {
      title: 'Transfer inter-sede',
      description:
        'Sposta merce tra negozi con tracking completo e firma digitale',
      icon: '🚚',
    },
    {
      title: 'Inventari periodici',
      description:
        'Esegui inventari con pistola barcode e riconciliazione automatica',
      icon: '📊',
    },
    {
      title: 'Alert scorte',
      description:
        'Ricevi notifiche quando un articolo scende sotto scorta minima',
      icon: '⚠️',
    },
    {
      title: 'Carico automatico',
      description: 'Carico merce automatico da ricezione ordini fornitori',
      icon: '⬇️',
    },
    {
      title: 'Scarico automatico',
      description: 'Scarico automatico da vendite e scontrini fiscali',
      icon: '⬆️',
    },
  ],
  benefits: [
    {
      title: 'Visibilità completa',
      metric: '100% giacenze',
      description:
        'Conosci sempre la disponibilità reale su tutte le sedi in tempo reale.',
    },
    {
      title: 'Inventario rapido',
      metric: '-80% tempo',
      description: "Con pistola barcode riduci l'inventario da giorni a ore.",
    },
    {
      title: 'Zero rotture stock',
      description:
        'Alert automatici garantiscono che non resti mai senza merce in vendita.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena Expert 18 negozi',
    customer: 'Catena Expert (18 punti vendita)',
    challenge:
      'Gestione di 18 magazzini con necessità di visibilità unificata e transfer rapidi tra negozi per evadere ordini clienti.',
    solution:
      'Implementazione modulo Magazzino multi-sede con transfer automatici e alert condivisi. Ogni negozio vede le giacenze degli altri e può richiedere merce con un click.',
    results: [
      '18 magazzini sincronizzati in tempo reale',
      '-65% transfer manuali grazie ad alert intelligenti',
      '+40% ordini evasi da magazzino alternativo',
      'Inventario annuale completato in 2 giorni invece di 8',
    ],
  },
  integrations: [
    { name: 'Vendite', slug: 'vendite-cassa' },
    { name: 'Acquisti', slug: 'acquisti' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Statistiche BI', slug: 'statistiche-bi' },
  ],
  faq: [
    {
      question: 'Come funzionano i transfer tra sedi?',
      answer:
        "Puoi creare una richiesta transfer da un negozio all'altro. Il sistema genera automaticamente i documenti di scarico/carico e traccia la spedizione. Il destinatario riceve notifica e può firmare digitalmente la ricezione.",
    },
    {
      question: 'Posso gestire più magazzini fisici nello stesso negozio?',
      answer:
        'Sì, ogni sede può avere più magazzini (es: punto vendita, deposito, magazzino esterno). Puoi anche definire ubicazioni interne (scaffali, ripiani).',
    },
    {
      question: "Come funziona l'inventario con pistola barcode?",
      answer:
        'Scannerizzi i prodotti con pistola barcode, il sistema confronta le quantità rilevate con quelle teoriche e genera automaticamente i documenti di rettifica giacenze.',
    },
    {
      question: 'Posso impostare scorte minime diverse per negozio?',
      answer:
        'Sì, ogni articolo può avere scorte minime personalizzate per ogni sede. Gli alert sono specifici per magazzino.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
