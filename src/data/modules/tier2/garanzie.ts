import type { ModuleData } from '../types'

export const garanzieModule: ModuleData = {
  slug: 'garanzie',
  name: 'Garanzie',
  tagline: 'Registro garanzie con alert scadenza e gestione estensioni',
  category: 'Amministrazione',
  categoryColor: 'indigo',
  icon: '🛡️',
  tier: 2,

  // Hero v2.1
  heroIcon: 'ShieldCheckIcon',
  heroIntro:
    'Registro completo garanzie prodotti con registrazione automatica, certificati, alert scadenze, vendita estensioni e tracciabilità per seriale.',
  overview: {
    intro:
      'Il modulo Garanzie è il registro completo di tutte le garanzie prodotti venduti. Registrazione automatica garanzia a vendita, certificati, alert scadenze, vendita estensioni garanzia, gestione resi in garanzia, storico interventi per seriale. Report statistiche difettosità per brand/modello per ottimizzare assortimento.',
    mainBenefits: [
      'Nessuna garanzia persa o dimenticata',
      'Up-sell estensioni garanzia per revenue extra',
      'Tracciabilità completa per audit e contenziosi',
      'Riduzione contenziosi con storico completo',
    ],
  },
  features: [
    {
      title: 'Registrazione automatica',
      description:
        'Garanzia registrata automaticamente alla vendita con durata standard',
      icon: '📝',
      iconName: 'PencilSquareIcon',
    },
    {
      title: 'Certificati garanzia',
      description:
        'Genera e stampa certificati garanzia personalizzati per clienti',
      icon: '📜',
      iconName: 'DocumentTextIcon',
    },
    {
      title: 'Alert scadenze',
      description:
        'Notifiche automatiche quando garanzie convenzionali stanno per scadere',
      icon: '⏰',
      iconName: 'ClockIcon',
    },
    {
      title: 'Vendita estensioni',
      description:
        'Sistema up-sell per proporre estensioni garanzia a clienti',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
    },
    {
      title: 'Gestione resi',
      description:
        'Traccia resi in garanzia con motivo, esito, intervento effettuato',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Storico per seriale',
      description:
        'Cronologia completa interventi garanzia per numero seriale prodotto',
      icon: '🔍',
      iconName: 'MagnifyingGlassIcon',
    },
    {
      title: 'Report difettosità',
      description:
        'Statistiche difetti per brand/modello per ottimizzare assortimento',
      icon: '📊',
      iconName: 'ChartBarIcon',
    },
    {
      title: 'Integrazione riparazioni',
      description:
        'Collega interventi riparazione a garanzie per tracciabilità completa',
      icon: '🔗',
      iconName: 'LinkIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'registrazione',
      name: 'Registrazione Garanzie',
      icon: '📝',
      iconName: 'PencilSquareIcon',
      features: [
        {
          title: 'Registrazione automatica',
          description:
            'Garanzia creata automaticamente alla vendita del prodotto',
          iconName: 'CheckCircleIcon',
          highlighted: true,
        },
        {
          title: 'Durata configurabile',
          description:
            'Imposta durata standard per categoria prodotto (12, 24, 36 mesi)',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Numero seriale',
          description:
            'Associazione garanzia a numero seriale per tracciabilità',
          iconName: 'QrCodeIcon',
        },
        {
          title: 'Dati acquisto',
          description:
            'Collegamento a scontrino/fattura originale di acquisto',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Garanzia manuale',
          description:
            'Registrazione garanzie per prodotti non venduti in negozio',
          iconName: 'PencilIcon',
        },
        {
          title: 'Import massivo',
          description:
            'Importazione garanzie pregresse da file Excel/CSV',
          iconName: 'ArrowUpTrayIcon',
        },
      ],
    },
    {
      id: 'certificati',
      name: 'Certificati e Documenti',
      icon: '📜',
      iconName: 'DocumentTextIcon',
      features: [
        {
          title: 'Certificato garanzia',
          description:
            'Genera certificato PDF personalizzato con logo negozio',
          iconName: 'DocumentTextIcon',
          highlighted: true,
        },
        {
          title: 'Stampa diretta',
          description:
            'Stampa certificato direttamente alla cassa dopo vendita',
          iconName: 'PrinterIcon',
        },
        {
          title: 'Invio email',
          description:
            'Invia certificato via email al cliente automaticamente',
          iconName: 'EnvelopeIcon',
        },
        {
          title: 'QR Code',
          description:
            'QR code sul certificato per verifica online garanzia',
          iconName: 'QrCodeIcon',
        },
        {
          title: 'Duplicato certificato',
          description:
            'Ristampa certificato in caso di smarrimento cliente',
          iconName: 'DocumentDuplicateIcon',
        },
        {
          title: 'Archivio digitale',
          description:
            'Tutti i certificati archiviati e ricercabili nel sistema',
          iconName: 'ArchiveBoxIcon',
        },
      ],
    },
    {
      id: 'estensioni',
      name: 'Estensioni Garanzia',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
      features: [
        {
          title: 'Proposta automatica',
          description:
            'Sistema suggerisce estensione garanzia al momento della vendita',
          iconName: 'SparklesIcon',
          highlighted: true,
        },
        {
          title: 'Listino estensioni',
          description:
            'Prezzi configurabili per tipo prodotto e durata estensione',
          iconName: 'ListBulletIcon',
        },
        {
          title: 'Vendita successiva',
          description:
            'Estensione acquistabile anche dopo la vendita originale',
          iconName: 'PlusCircleIcon',
        },
        {
          title: 'Alert pre-scadenza',
          description:
            'Notifica cliente per proporre estensione prima della scadenza',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Certificato esteso',
          description:
            'Nuovo certificato con durata totale garanzia base + estensione',
          iconName: 'DocumentPlusIcon',
        },
        {
          title: 'Report vendite',
          description:
            'Statistiche vendite estensioni per analisi revenue',
          iconName: 'ChartBarIcon',
        },
      ],
    },
    {
      id: 'resi',
      name: 'Resi e Interventi',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
      features: [
        {
          title: 'Verifica copertura',
          description:
            'Controllo automatico se prodotto è ancora in garanzia',
          iconName: 'ShieldCheckIcon',
          highlighted: true,
        },
        {
          title: 'Apertura reso',
          description:
            'Registrazione reso con motivo, descrizione difetto',
          iconName: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Workflow reso',
          description:
            'Stati reso: ricevuto, in lavorazione, risolto, chiuso',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Esito intervento',
          description:
            'Registrazione esito: riparato, sostituito, rimborsato',
          iconName: 'CheckBadgeIcon',
        },
        {
          title: 'Storico per seriale',
          description:
            'Tutti gli interventi effettuati su un prodotto',
          iconName: 'ClockIcon',
          highlighted: true,
        },
        {
          title: 'Collegamento riparazioni',
          description:
            'Integrazione con modulo Riparazioni per interventi tecnici',
          iconName: 'LinkIcon',
        },
      ],
    },
    {
      id: 'analytics',
      name: 'Analytics e Report',
      icon: '📊',
      iconName: 'ChartBarIcon',
      features: [
        {
          title: 'Report difettosità',
          description:
            'Statistiche resi/difetti per brand, modello, categoria',
          iconName: 'ExclamationTriangleIcon',
          highlighted: true,
        },
        {
          title: 'Tasso di reso',
          description:
            'Percentuale resi sul venduto per identificare problemi',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Costi garanzia',
          description:
            'Analisi costi interventi in garanzia per prodotto',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Performance fornitori',
          description:
            'Ranking fornitori per affidabilità prodotti',
          iconName: 'TrophyIcon',
        },
        {
          title: 'Garanzie in scadenza',
          description:
            'Report garanzie in scadenza per opportunità estensioni',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Export dati',
          description:
            'Export statistiche garanzie in Excel, CSV, PDF',
          iconName: 'ArrowUpTrayIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite & Cassa',
      description:
        'Registrazione automatica garanzia alla vendita',
      benefits: [
        'Garanzia creata a vendita',
        'Collegamento a scontrino',
        'Up-sell estensioni in cassa',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'riparazioni',
      name: 'Modulo Riparazioni',
      description:
        'Gestione interventi tecnici in garanzia',
      benefits: [
        'Verifica copertura automatica',
        'Tracciamento interventi',
        'Storico per seriale',
      ],
      icon: '🔧',
      iconName: 'WrenchScrewdriverIcon',
      relatedModuleSlug: 'riparazioni',
    },
    {
      id: 'banca-dati',
      name: 'Banca Dati Eldomcat',
      description:
        'Informazioni prodotto per durata garanzia standard',
      benefits: [
        'Durata garanzia automatica',
        'Specifiche prodotto',
        'Dati tecnici per interventi',
      ],
      icon: '📚',
      iconName: 'BookOpenIcon',
      relatedModuleSlug: 'banca-dati-eldomcat',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche automatiche scadenze e certificati',
      benefits: [
        'Alert scadenza via email',
        'Invio certificati PDF',
        'Proposta estensioni',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
    {
      id: 'statistiche',
      name: 'Modulo Statistiche',
      description:
        'Dashboard analytics garanzie e difettosità',
      benefits: [
        'KPI garanzie',
        'Report difettosità',
        'Analisi fornitori',
      ],
      icon: '📊',
      iconName: 'ChartBarIcon',
      relatedModuleSlug: 'statistiche',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/garanzie-hero.svg',
      alt: 'Registro garanzie con ricerca',
      caption: 'Vista registro garanzie con ricerca per seriale e cliente',
    },
    {
      src: '/screenshots/moduli/garanzie-certificato.svg',
      alt: 'Certificato garanzia',
      caption: 'Generazione certificato garanzia personalizzato',
    },
    {
      src: '/screenshots/moduli/garanzie-estensioni.svg',
      alt: 'Vendita estensioni',
      caption: 'Sistema up-sell per proporre estensioni garanzia',
    },
    {
      src: '/screenshots/moduli/garanzie-report.svg',
      alt: 'Report difettosità',
      caption: 'Statistiche difetti per brand e modello',
    },
  ],

  benefits: [
    {
      title: 'Zero garanzie perse',
      metric: '100% tracciabilità',
      description:
        'Ogni prodotto venduto ha la sua garanzia registrata. Impossibile perdere o dimenticare garanzie, anche a distanza di anni.',
    },
    {
      title: 'Revenue estensioni',
      metric: '+8% per vendita',
      description:
        "La proposta sistematica di estensioni garanzia genera revenue extra pari all'8% del valore vendita.",
    },
    {
      title: 'Contenziosi ridotti',
      metric: '-60% dispute',
      description:
        'Lo storico completo riduce i contenziosi del 60%. In caso di dispute, hai tutte le prove necessarie.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Rivenditore elettrodomestici con 300 vendite/mese',
    customer: 'Negozio specializzato grandi elettrodomestici',
    challenge:
      'Clienti tornavano dopo mesi per un problema, ma il negozio non trovava traccia della vendita o della garanzia. Nessun up-sell di estensioni garanzia. Contenziosi frequenti per assenza di documentazione.',
    solution:
      'Implementato modulo Garanzie con registrazione automatica a vendita. Alert 15 giorni prima della scadenza garanzia convenzionale per proporre estensione. Storico completo interventi per ogni seriale. Report difettosità per brand.',
    results: [
      'Zero garanzie perse: 100% tracciabilità da anno 2015',
      'Up-sell estensioni: +€24k/anno di revenue extra',
      'Contenziosi ridotti del 65% con documentazione completa',
      'Ottimizzazione assortimento: rimossi 2 brand problematici',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Riparazioni', slug: 'riparazioni' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
  ],
  faq: [
    {
      question: 'Le garanzie vengono registrate automaticamente?',
      answer:
        'Sì, alla vendita di un prodotto il sistema registra automaticamente la garanzia con durata standard (es. 24 mesi per elettrodomestici). Puoi personalizzare durate per categoria prodotto.',
    },
    {
      question: 'Come funziona la vendita delle estensioni garanzia?',
      answer:
        "Al momento della vendita, il sistema può proporre automaticamente estensioni garanzia (es. +2 anni). L'estensione viene registrata e il certificato aggiunto alla garanzia base.",
    },
    {
      question: 'Posso tracciare tutti gli interventi su un prodotto?',
      answer:
        'Sì, ogni prodotto con numero seriale ha uno storico completo: vendita, interventi in garanzia, riparazioni, sostituzioni. Utile per contenziosi o per analizzare affidabilità prodotti.',
    },
    {
      question: 'I report di difettosità come aiutano il business?',
      answer:
        "Vedendo quali brand/modelli hanno più interventi in garanzia, puoi ottimizzare l'assortimento. Rimuovi prodotti problematici, premi brand affidabili. Alcuni clienti hanno ridotto i resi del 40%.",
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
