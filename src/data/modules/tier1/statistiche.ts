import type { ModuleData } from '../types'

export const statisticheModule: ModuleData = {
  slug: 'statistiche',
  name: 'Statistiche',
  tagline: 'Dashboard analytics e report per decisioni data-driven',
  category: 'Integrazioni & Dati',
  categoryColor: 'blue',
  icon: '📊',
  tier: 1,

  // Hero v2.1
  heroIcon: 'ChartBarIcon',
  heroIntro:
    'Centro analitico del business con dashboard real-time, KPI vendite, margini, giacenze. Report avanzati, analisi ABC, forecast e alert automatici.',
  overview: {
    intro:
      'Il modulo Statistiche è il centro analitico del tuo business. Dashboard real-time con KPI vendite, margini, giacenze, performance. Report avanzati per articolo, cliente, operatore, periodo. Analisi ABC, rotazione stock, trend vendite, forecast. Export per analisi esterne, grafici interattivi, alert automatici su metriche critiche.',
    mainBenefits: [
      'Visibilità KPI real-time per decisioni rapide',
      'Report avanzati con drill-down su ogni dimensione',
      'Analisi predittive con forecast vendite',
      'Export dati per strumenti esterni (Excel, PDF)',
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
      iconName: 'ArrowTrendingUpIcon',
    },
    {
      title: 'Report vendite',
      description:
        'Analisi vendite per articolo, cliente, operatore, negozio, periodo',
      icon: '📊',
      iconName: 'ChartBarIcon',
    },
    {
      title: 'Analisi ABC',
      description:
        'Classificazione articoli per valore vendite e margine contributo',
      icon: '🎯',
      iconName: 'AdjustmentsHorizontalIcon',
    },
    {
      title: 'Rotazione stock',
      description:
        'Indici rotazione magazzino, giorni giacenza, articoli a lento movimento',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Trend e forecast',
      description:
        'Analisi trend storici e previsioni vendite con algoritmi predittivi',
      icon: '📉',
      iconName: 'PresentationChartLineIcon',
    },
    {
      title: 'Performance operatori',
      description:
        'Classifica venditori per fatturato, margine, numero transazioni',
      icon: '👥',
      iconName: 'UserGroupIcon',
    },
    {
      title: 'Alert automatici',
      description:
        'Notifiche quando KPI critici superano soglie (es. margine <15%)',
      icon: '🔔',
      iconName: 'BellAlertIcon',
    },
    {
      title: 'Export flessibile',
      description:
        'Export dati in Excel, CSV, PDF per analisi esterne',
      icon: '📤',
      iconName: 'ArrowUpTrayIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'dashboard',
      name: 'Dashboard e KPI',
      icon: '📈',
      iconName: 'ChartBarSquareIcon',
      features: [
        {
          title: 'Dashboard real-time',
          description:
            'KPI aggiornati in tempo reale con refresh automatico',
          iconName: 'ArrowTrendingUpIcon',
          highlighted: true,
        },
        {
          title: 'Widget configurabili',
          description:
            'Componi la tua dashboard con widget drag-and-drop',
          iconName: 'Squares2X2Icon',
        },
        {
          title: 'KPI per ruolo',
          description:
            'Dashboard diverse per CEO, direttori, buyer, venditori',
          iconName: 'UserGroupIcon',
          highlighted: true,
        },
        {
          title: 'Grafici interattivi',
          description:
            'Grafici con drill-down, zoom e filtri dinamici',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Confronto periodi',
          description:
            'Compara performance tra periodi diversi (YoY, MoM)',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Obiettivi e target',
          description:
            'Visualizza progressi verso obiettivi con indicatori',
          iconName: 'FlagIcon',
        },
      ],
    },
    {
      id: 'report',
      name: 'Report e Analisi',
      icon: '📊',
      iconName: 'ChartBarIcon',
      features: [
        {
          title: 'Report vendite',
          description:
            'Analisi vendite per articolo, cliente, operatore, negozio',
          iconName: 'DocumentChartBarIcon',
          highlighted: true,
        },
        {
          title: 'Analisi margini',
          description:
            'Report marginalita per prodotto, categoria, fornitore',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Report per periodo',
          description:
            'Analisi giornaliere, settimanali, mensili, annuali',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Drill-down',
          description:
            'Approfondisci dal totale al singolo documento',
          iconName: 'MagnifyingGlassPlusIcon',
        },
        {
          title: 'Filtri avanzati',
          description:
            'Filtra per qualsiasi dimensione e combinazione',
          iconName: 'FunnelIcon',
        },
        {
          title: 'Report schedulati',
          description:
            'Genera report automatici a orari configurabili',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'abc',
      name: 'Analisi ABC e Pareto',
      icon: '🎯',
      iconName: 'AdjustmentsHorizontalIcon',
      features: [
        {
          title: 'Classificazione ABC',
          description:
            'Articoli in classe A (80% valore), B (15%), C (5%)',
          iconName: 'ChartBarIcon',
          highlighted: true,
        },
        {
          title: 'ABC per margine',
          description:
            'Classificazione basata su contribuzione al margine',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'ABC per rotazione',
          description:
            'Identificazione articoli fast/slow moving',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Analisi incrociata',
          description:
            'Combina ABC vendite e margini per decisioni',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Alert classe C',
          description:
            'Notifiche per articoli a bassa rotazione',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Suggerimenti acquisti',
          description:
            'Raccomandazioni basate su analisi ABC',
          iconName: 'LightBulbIcon',
        },
      ],
    },
    {
      id: 'stock',
      name: 'Analisi Stock',
      icon: '📦',
      iconName: 'CubeIcon',
      features: [
        {
          title: 'Rotazione magazzino',
          description:
            'Indici di rotazione per articolo e categoria',
          iconName: 'ArrowPathIcon',
          highlighted: true,
        },
        {
          title: 'Giorni giacenza',
          description:
            'Calcolo giorni medi di permanenza in magazzino',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Articoli obsoleti',
          description:
            'Identificazione stock a rischio obsolescenza',
          iconName: 'ExclamationCircleIcon',
        },
        {
          title: 'Valore immobilizzato',
          description:
            'Analisi capitale bloccato in magazzino',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'Previsione esaurimento',
          description:
            'Stima data esaurimento scorte per articolo',
          iconName: 'ClockIcon',
        },
        {
          title: 'Ottimizzazione scorte',
          description:
            'Suggerimenti per livelli ottimali di riordino',
          iconName: 'AdjustmentsVerticalIcon',
        },
      ],
    },
    {
      id: 'forecast',
      name: 'Trend e Forecast',
      icon: '📉',
      iconName: 'PresentationChartLineIcon',
      features: [
        {
          title: 'Trend vendite',
          description:
            'Analisi serie storiche con identificazione pattern',
          iconName: 'ArrowTrendingUpIcon',
        },
        {
          title: 'Stagionalita',
          description:
            'Rilevazione automatica pattern stagionali',
          iconName: 'SunIcon',
        },
        {
          title: 'Forecast vendite',
          description:
            'Previsioni vendite basate su algoritmi predittivi',
          iconName: 'SparklesIcon',
          highlighted: true,
        },
        {
          title: 'Budget vs actual',
          description:
            'Confronto previsioni con risultati effettivi',
          iconName: 'ScaleIcon',
        },
        {
          title: 'Scenari what-if',
          description:
            'Simulazioni impatto variazioni prezzi/promozioni',
          iconName: 'BeakerIcon',
        },
        {
          title: 'Obiettivi vendita',
          description:
            'Definizione e monitoraggio target per operatore/negozio',
          iconName: 'FlagIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Dati vendite in tempo reale per dashboard e report',
      benefits: [
        'Vendite real-time',
        'Scontrini e fatture',
        'Performance operatori',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Dati giacenze per analisi stock e rotazione',
      benefits: [
        'Giacenze real-time',
        'Analisi rotazione',
        'Valore immobilizzato',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'acquisti',
      name: 'Modulo Acquisti',
      description:
        'Dati acquisti per analisi costi e margini',
      benefits: [
        'Costi acquisto',
        'Analisi fornitori',
        'Margini per origine',
      ],
      icon: '📥',
      iconName: 'InboxArrowDownIcon',
      relatedModuleSlug: 'acquisti',
    },
    {
      id: 'promozioni',
      name: 'Modulo Promozioni',
      description:
        'Analisi performance campagne promozionali',
      benefits: [
        'ROI promozioni',
        'Sell-through rate',
        'Confronto campagne',
      ],
      icon: '🎯',
      iconName: 'MegaphoneIcon',
      relatedModuleSlug: 'promozioni',
    },
    {
      id: 'navigator',
      name: 'Modulo Navigator',
      description:
        'Dashboard personalizzate per ogni ruolo aziendale',
      benefits: [
        'Widget drag-and-drop',
        'Dashboard per ruolo',
        'Notifiche desktop',
      ],
      icon: '🧭',
      iconName: 'MapIcon',
      relatedModuleSlug: 'navigator',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Invio automatico report e alert via email',
      benefits: [
        'Report schedulati',
        'Alert email',
        'Digest giornaliero',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/statistiche-hero.svg',
      alt: 'Dashboard statistiche con KPI principali',
      caption: 'Dashboard real-time con KPI vendite, margini e performance',
    },
    {
      src: '/screenshots/moduli/statistiche-abc.svg',
      alt: 'Analisi ABC prodotti',
      caption: 'Classificazione articoli per valore e margine contributo',
    },
    {
      src: '/screenshots/moduli/statistiche-trend.svg',
      alt: 'Trend e forecast vendite',
      caption: 'Analisi serie storiche con previsioni vendite',
    },
    {
      src: '/screenshots/moduli/statistiche-report.svg',
      alt: 'Report vendite dettagliato',
      caption: 'Report con drill-down per articolo, cliente, operatore',
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
      'Implementato modulo Statistiche con dashboard personalizzate per CEO, direttori negozi, buyer. Dashboard vendite real-time, analisi ABC prodotti, report performance per operatore. Alert automatici su margini sotto soglia.',
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
    { name: 'Acquisti', slug: 'acquisti' },
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
      question: 'Posso esportare dati per analisi esterne?',
      answer:
        'Sì, puoi esportare dati in Excel, CSV o PDF. Sono disponibili anche export schedulati automatici per avere report periodici sempre pronti.',
    },
    {
      question: 'Gli alert automatici come funzionano?',
      answer:
        'Configuri soglie su KPI critici (es. "margine giornaliero <15%", "giacenza prodotto X <10"). Quando la soglia viene superata, ricevi notifica email o SMS. Puoi agire immediatamente invece che scoprirlo a fine mese.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
