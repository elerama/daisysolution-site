import type { ModuleData } from '../types'

export const ecommerceModule: ModuleData = {
  slug: 'ecommerce',
  name: 'E-commerce B2B/B2C',
  tagline: 'Negozio online integrato con giacenze real-time e marketplace',
  category: 'Crescita e Sviluppo',
  categoryColor: 'violet',
  icon: '🛍️',
  tier: 1,
  overview: {
    intro:
      "Piattaforma e-commerce completa B2B e B2C con integrazione nativa Daisy. Giacenze sincronizzate in tempo reale, carrello abbandonato, marketplace Amazon/eBay, feed automatici Google Shopping. Design responsive e ottimizzato SEO con contenuti Eldomcat. Gestione ordini online unificata con negozio fisico.",
    mainBenefits: [
      'Zero doppia gestione ordini online/offline',
      'Giacenze sincronizzate real-time',
      'Marketplace Amazon/eBay automatici',
      '300k+ prodotti pronti per vendita online',
    ],
    stats: [
      {
        label: 'Incremento vendite',
        value: '+150%',
        description: 'dopo primo anno e-commerce',
      },
      {
        label: 'Prodotti online',
        value: '300k+',
        description: 'con Eldomcat pronti subito',
      },
    ],
  },
  features: [
    {
      title: 'Integrazione Daisy',
      description:
        'Ordini online diventano automaticamente documenti Daisy: zero doppio lavoro',
      icon: '🔗',
    },
    {
      title: 'Giacenze real-time',
      description:
        'Disponibilità prodotti sincronizzata istantaneamente tra negozio e online',
      icon: '⚡',
    },
    {
      title: 'Marketplace Amazon',
      description:
        'Pubblica automaticamente su Amazon con sync giacenze e ordini',
      icon: '📦',
    },
    {
      title: 'Marketplace eBay',
      description:
        'Gestione automatica inserzioni eBay con template personalizzabili',
      icon: '🏷️',
    },
    {
      title: 'Google Shopping',
      description:
        'Feed automatici per Google Shopping e comparatori prezzi',
      icon: '🔍',
    },
    {
      title: 'Carrello abbandonato',
      description: 'Email automatiche per recuperare carrelli abbandonati',
      icon: '🛒',
    },
    {
      title: 'B2B e B2C',
      description:
        'Gestione listini diversificati per clienti privati e rivenditori',
      icon: '👥',
    },
    {
      title: 'Design responsive',
      description:
        'Sito ottimizzato mobile-first per acquisti da smartphone',
      icon: '📱',
    },
  ],
  benefits: [
    {
      title: 'Canale vendita nuovo',
      metric: '+150% fatturato',
      description:
        'Clienti che attivano e-commerce vedono +150% fatturato dopo il primo anno.',
    },
    {
      title: 'Gestione unificata',
      description:
        'Ordini online e offline nello stesso sistema: un solo magazzino, un solo gestionale, zero doppioni.',
    },
    {
      title: 'Marketplace automatici',
      metric: '3 canali in 1',
      description:
        'Vendi su sito proprio, Amazon ed eBay gestendo tutto da un unico pannello.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Negozio elettronica apre e-commerce',
    customer: 'Negozio elettronica (1 punto vendita fisico)',
    challenge:
      'Fatturato stagionale con picchi natalizi e cali estivi. Necessità di aprire canale vendita online senza aumentare personale e complessità gestionale.',
    solution:
      "Lancio e-commerce Elecommerce integrato con Daisy. Catalogo online automatico da Eldomcat, ordini che diventano documenti Daisy, giacenze sincronizzate. Attivazione marketplace Amazon.",
    results: [
      '+150% fatturato dopo primo anno',
      "E-commerce online in 2 settimane dall'attivazione",
      'Zero aumento personale: ordini gestiti da personale esistente',
      '40% ordini da clienti fuori zona: nuovo bacino clienti',
    ],
  },
  integrations: [
    { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
    { name: 'Vendite', slug: 'vendite-cassa' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
  ],
  faq: [
    {
      question: "Come funziona l'integrazione con Daisy?",
      answer:
        "Gli ordini online vengono importati automaticamente in Daisy come ordini clienti. Puoi evaderli, fatturarli e gestire la spedizione direttamente da Daisy. Le giacenze si sincronizzano in tempo reale bidirezionale.",
    },
    {
      question: 'Devo inserire manualmente i prodotti online?',
      answer:
        'No! Con Eldomcat attivo, i prodotti si pubblicano automaticamente online con foto, descrizioni e caratteristiche tecniche. Devi solo impostare i prezzi di vendita.',
    },
    {
      question: "Quanto costa aprire l'e-commerce?",
      answer:
        'Elecommerce è in modalità SaaS con canone mensile da 99€. Include hosting, dominio, certificato SSL, template responsive e assistenza. Setup iniziale gratuito.',
    },
    {
      question: 'Posso vendere anche su Amazon?',
      answer:
        "Sì, l'integrazione Amazon è nativa. Pubblichi i prodotti su Amazon e gli ordini vengono importati automaticamente in Daisy come ordini normali.",
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
