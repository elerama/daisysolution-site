import type { ModuleData } from '../types'

export const ordiniModule: ModuleData = {
  slug: 'ordini',
  name: 'Ordini',
  tagline: 'Gestione ordini clienti con tracking stato ed evasione parziale',
  category: 'Gestione Negozio',
  categoryColor: 'emerald',
  icon: '📋',
  tier: 2,

  // Hero v2.1
  heroIcon: 'ClipboardDocumentListIcon',
  heroIntro:
    'Gestione completa ciclo ordini B2B e B2C con tracking stati, evasione parziale, backorder automatico e integrazione corrieri.',
  overview: {
    intro:
      "Il modulo Ordini gestisce l'intero ciclo ordini clienti B2B e B2C. Inserimento rapido con barcode, gestione ordini da portale B2B, stati ordine (inserito, confermato, evaso, consegnato), evasione parziale con backorder automatico, tracking spedizioni integrato corrieri. Generazione DDT e fatture da ordini, report ordini inevasi o in ritardo.",
    mainBenefits: [
      'Visibilità completa pipeline ordini in tempo reale',
      'Zero ordini dimenticati con tracking automatico',
      'Clienti sempre informati su stato ordine',
      'Riduzione contestazioni e dispute del 70%',
    ],
  },
  features: [
    {
      title: 'Inserimento rapido',
      description:
        'Crea ordini velocemente con scanner barcode o ricerca articoli',
      icon: '⚡',
      iconName: 'BoltIcon',
    },
    {
      title: 'Ordini B2B',
      description:
        'Gestisci ordini da portale clienti B2B con import automatico',
      icon: '🏢',
      iconName: 'BuildingOfficeIcon',
    },
    {
      title: 'Stati ordine',
      description:
        'Tracking stati: inserito, confermato, in preparazione, evaso, consegnato',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Evasione parziale',
      description:
        'Evadi ordini parzialmente, sistema crea backorder automatico per merce mancante',
      icon: '📦',
      iconName: 'CubeIcon',
    },
    {
      title: 'Tracking corrieri',
      description:
        'Integrazione corrieri per tracking spedizioni real-time',
      icon: '🚚',
      iconName: 'TruckIcon',
    },
    {
      title: 'Gestione acconti',
      description: 'Richiedi acconti su ordini, traccia saldo da incassare',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
    },
    {
      title: 'Genera DDT/fatture',
      description: 'Crea DDT e fatture direttamente da ordini con un click',
      icon: '📄',
      iconName: 'DocumentTextIcon',
    },
    {
      title: 'Report inevasi',
      description:
        'Report ordini inevasi, in ritardo, backorder per azione immediata',
      icon: '⚠️',
      iconName: 'ExclamationTriangleIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'inserimento',
      name: 'Inserimento Ordini',
      icon: '⚡',
      iconName: 'BoltIcon',
      features: [
        {
          title: 'Inserimento rapido',
          description:
            'Crea ordini velocemente con barcode scanner',
          iconName: 'BoltIcon',
        },
        {
          title: 'Ricerca articoli',
          description:
            'Cerca prodotti per codice, nome, categoria',
          iconName: 'MagnifyingGlassIcon',
        },
        {
          title: 'Listini cliente',
          description:
            'Prezzi personalizzati per cliente applicati automaticamente',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Note e allegati',
          description:
            'Aggiungi note e documenti allegati all\'ordine',
          iconName: 'PaperClipIcon',
        },
        {
          title: 'Duplica ordine',
          description:
            'Crea nuovo ordine copiando uno esistente',
          iconName: 'DocumentDuplicateIcon',
        },
        {
          title: 'Ordini ricorrenti',
          description:
            'Programma ordini periodici per clienti regolari',
          iconName: 'ArrowPathIcon',
        },
      ],
    },
    {
      id: 'b2b',
      name: 'Canali B2B',
      icon: '🏢',
      iconName: 'BuildingOfficeIcon',
      features: [
        {
          title: 'Portale B2B',
          description:
            'Clienti inseriscono ordini dal portale self-service',
          iconName: 'GlobeAltIcon',
        },
        {
          title: 'Import ordini',
          description:
            'Importa ordini da file Excel, CSV, XML',
          iconName: 'ArrowUpTrayIcon',
        },
        {
          title: 'EDI integrazione',
          description:
            'Scambio ordini elettronici con grandi clienti',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Email to order',
          description:
            'Converti email con ordini in ordini a sistema',
          iconName: 'EnvelopeIcon',
        },
        {
          title: 'Listini B2B',
          description:
            'Prezzi differenziati per categoria cliente',
          iconName: 'TagIcon',
        },
        {
          title: 'Minimi ordine',
          description:
            'Imposta valori minimi ordine per cliente/canale',
          iconName: 'BanknotesIcon',
        },
      ],
    },
    {
      id: 'tracking',
      name: 'Tracking e Stati',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
      features: [
        {
          title: 'Stati ordine',
          description:
            'Workflow: bozza → confermato → preparazione → evaso → consegnato',
          iconName: 'ListBulletIcon',
        },
        {
          title: 'Kanban view',
          description:
            'Vista Kanban con colonne per stato ordine',
          iconName: 'ViewColumnsIcon',
        },
        {
          title: 'Timeline ordine',
          description:
            'Cronologia completa di tutti i passaggi di stato',
          iconName: 'ClockIcon',
        },
        {
          title: 'Notifiche stato',
          description:
            'Email/SMS automatici al cliente ad ogni cambio stato',
          iconName: 'BellIcon',
        },
        {
          title: 'SLA ordini',
          description:
            'Alert se ordine in stato troppo a lungo',
          iconName: 'ExclamationCircleIcon',
        },
        {
          title: 'Dashboard pipeline',
          description:
            'Vista riepilogativa ordini per stato',
          iconName: 'ChartBarIcon',
        },
      ],
    },
    {
      id: 'evasione',
      name: 'Evasione e Spedizione',
      icon: '📦',
      iconName: 'CubeIcon',
      features: [
        {
          title: 'Evasione parziale',
          description:
            'Evadi parte dell\'ordine, backorder automatico per resto',
          iconName: 'ScissorsIcon',
        },
        {
          title: 'Picking list',
          description:
            'Genera liste di prelievo per magazzino',
          iconName: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'Packing list',
          description:
            'Distinta colli per preparazione spedizione',
          iconName: 'ArchiveBoxIcon',
        },
        {
          title: 'Integrazione corrieri',
          description:
            'Genera lettera di vettura e tracking automatico',
          iconName: 'TruckIcon',
        },
        {
          title: 'Multi-spedizione',
          description:
            'Spedisci ordine in colli multipli o date diverse',
          iconName: 'CubeTransparentIcon',
        },
        {
          title: 'Ritiro in negozio',
          description:
            'Click & collect con notifica disponibilità',
          iconName: 'BuildingStorefrontIcon',
        },
      ],
    },
    {
      id: 'documenti',
      name: 'Documenti e Pagamenti',
      icon: '📄',
      iconName: 'DocumentTextIcon',
      features: [
        {
          title: 'Genera DDT',
          description:
            'Documento di trasporto da ordine evaso',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Genera fattura',
          description:
            'Fattura diretta o da DDT con dati ordine',
          iconName: 'DocumentCheckIcon',
        },
        {
          title: 'Gestione acconti',
          description:
            'Richiedi acconto a conferma, traccia saldo',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Riepilogo pagamenti',
          description:
            'Acconti incassati, fatturato, da incassare',
          iconName: 'CalculatorIcon',
        },
        {
          title: 'Stampa conferma',
          description:
            'PDF conferma ordine per cliente',
          iconName: 'PrinterIcon',
        },
        {
          title: 'Archivio ordini',
          description:
            'Storico ordini ricercabile per cliente, data, stato',
          iconName: 'ArchiveBoxIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Verifica disponibilità e impegna scorte a ordine',
      benefits: [
        'Disponibilità real-time',
        'Impegno automatico stock',
        'Alert esaurimento',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite & Cassa',
      description:
        'Incassa ordini in cassa e gestisci acconti',
      benefits: [
        'Incasso acconti',
        'Ordini da cassa',
        'Saldo a ritiro',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Ordini online sincronizzati automaticamente',
      benefits: [
        'Import ordini web',
        'Sync stati ordine',
        'Tracking su sito',
      ],
      icon: '🛍️',
      iconName: 'ShoppingBagIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'omnicanale',
      name: 'Connessione Omnicanale',
      description:
        'Ordini da tutti i canali in un unico flusso',
      benefits: [
        'Ordini marketplace',
        'Click & collect',
        'Ship from store',
      ],
      icon: '🔌',
      iconName: 'LinkIcon',
      relatedModuleSlug: 'connessione-omnicanale',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilità',
      description:
        'Fatturazione automatica da ordini evasi',
      benefits: [
        'Fatture da ordini',
        'Prima nota automatica',
        'Scadenzario incassi',
      ],
      icon: '🧮',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche automatiche stato ordine ai clienti',
      benefits: [
        'Email conferma ordine',
        'SMS spedizione',
        'Notifica ritiro',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/ordini-hero.svg',
      alt: 'Lista ordini con stati',
      caption: 'Dashboard ordini con pipeline e stati tracking',
    },
    {
      src: '/screenshots/moduli/ordini-dettaglio.svg',
      alt: 'Dettaglio ordine',
      caption: 'Dettaglio ordine con righe, acconti e timeline',
    },
    {
      src: '/screenshots/moduli/ordini-evasione.svg',
      alt: 'Evasione ordine',
      caption: 'Processo di evasione con picking list',
    },
    {
      src: '/screenshots/moduli/ordini-tracking.svg',
      alt: 'Tracking spedizione',
      caption: 'Integrazione corrieri con tracking real-time',
    },
  ],

  benefits: [
    {
      title: 'Pipeline visibile',
      metric: '100% controllo',
      description:
        'Vedi in tempo reale tutti gli ordini e il loro stato. Nessun ordine può essere dimenticato o perso.',
    },
    {
      title: 'Clienti informati',
      metric: '-70% chiamate',
      description:
        'I clienti vedono lo stato ordine real-time. Le chiamate "dov\'è il mio ordine?" si riducono del 70%.',
    },
    {
      title: 'Evasione ottimizzata',
      metric: '+40% efficienza',
      description:
        'Evasione parziale e backorder automatici ottimizzano il magazzino. Efficienza picking +40%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Distributore B2B con 150 ordini/giorno',
    customer: 'Distributore elettronica con 200 clienti B2B',
    challenge:
      'Ordini gestiti su Excel. Impossibile sapere quali ordini erano evasi, quali in ritardo. Clienti chiamavano continuamente per info. Nessuna evasione parziale, si aspettava merce completa causando ritardi.',
    solution:
      'Implementato modulo Ordini con stati tracking completo. Portale B2B per clienti per inserire ordini e vedere stato. Evasione parziale automatica con backorder. Integrazione corrieri per tracking. Email automatiche a clienti.',
    results: [
      'Chiamate clienti ridotte del 75%',
      'Ordini inevasi sempre visibili: zero ordini dimenticati',
      'Evasione parziale: tempi consegna -35%',
      'Soddisfazione clienti B2B aumentata del 60%',
    ],
  },
  integrations: [
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Connessione Omnicanale', slug: 'connessione-omnicanale' },
  ],
  faq: [
    {
      question: "Come funziona l'evasione parziale?",
      answer:
        'Se evadi un ordine con solo parte della merce disponibile, il sistema crea automaticamente un backorder per gli articoli mancanti. Quando la merce arriva, il backorder diventa evadibile.',
    },
    {
      question: 'I clienti possono vedere lo stato dei loro ordini?',
      answer:
        'Sì, se integrato con e-commerce o portale B2B, i clienti vedono real-time lo stato ordine: confermato, in preparazione, spedito con tracking corriere.',
    },
    {
      question: 'Posso generare DDT e fatture da ordini?',
      answer:
        "Sì, quando evadi un ordine puoi generare DDT (se spedisci merce) o fattura diretta. Il sistema riporta automaticamente tutti i dati dell'ordine nei documenti.",
    },
    {
      question: 'Come gestisco gli acconti sugli ordini?',
      answer:
        'Puoi richiedere acconti (es. 30%) alla conferma ordine. Il sistema traccia acconto pagato e saldo da incassare a consegna. Report acconti in sospeso sempre disponibile.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
