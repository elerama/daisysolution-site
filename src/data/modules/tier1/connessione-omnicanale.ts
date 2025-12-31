import type { ModuleData } from '../types'

export const connessioneOmnicanaleModule: ModuleData = {
  slug: 'connessione-omnicanale',
  name: 'Connessione Omnicanale',
  tagline: 'Integra negozio, e-commerce, marketplace e sistemi esterni in un unico flusso',
  category: 'Integrazioni & Dati',
  categoryColor: 'blue',
  icon: '🔌',
  tier: 1,

  // Hero v2.1
  heroIcon: 'LinkIcon',
  heroIntro:
    'Unifica tutti i canali di vendita in un ecosistema. Sincronizza catalogo, giacenze e ordini tra negozio fisico, e-commerce, marketplace e software gestionali.',
  overview: {
    intro:
      "Il modulo Connessione Omnicanale unifica tutti i canali di vendita e i sistemi aziendali in un unico ecosistema. Sincronizza catalogo, giacenze e ordini tra negozio fisico, e-commerce, marketplace (Amazon, eBay), portali B2B e software gestionali esterni. Import/export automatico dati, notifiche real-time per ogni evento. L'azienda diventa veramente omnicanale.",
    mainBenefits: [
      'Sincronizzazione automatica tra tutti i canali',
      'Catalogo e giacenze sempre allineati ovunque',
      'Ordini centralizzati da ogni fonte',
      'Ecosistema estendibile senza limiti',
    ],
    stats: [
      {
        label: 'Canali integrabili',
        value: '10+',
        description: 'marketplace, portali, gestionali',
      },
      {
        label: 'Sincronizzazioni/giorno',
        value: '100k+',
        description: 'dati sempre aggiornati',
      },
    ],
  },
  features: [
    {
      title: 'Sincronizzazione catalogo',
      description:
        'Pubblica e aggiorna automaticamente articoli su tutti i canali di vendita',
      icon: '📚',
      iconName: 'BookOpenIcon',
    },
    {
      title: 'Giacenze unificate',
      description:
        'Disponibilita sincronizzata in tempo reale tra negozio, web e marketplace',
      icon: '📦',
      iconName: 'CubeIcon',
    },
    {
      title: 'Ordini centralizzati',
      description:
        'Ricevi ordini da e-commerce, Amazon, eBay e portali B2B in un unico punto',
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
    },
    {
      title: 'Notifiche real-time',
      description:
        'Alert istantanei per nuovi ordini, sotto scorta, variazioni prezzi',
      icon: '🔔',
      iconName: 'BellAlertIcon',
    },
    {
      title: 'Import/Export automatico',
      description:
        'Scambio dati schedulato con fornitori, centrali e software contabili',
      icon: '🔄',
      iconName: 'ArrowsRightLeftIcon',
    },
    {
      title: 'Integrazione marketplace',
      description:
        'Connessione nativa con Amazon, eBay, e altri marketplace',
      icon: '🏪',
      iconName: 'BuildingStorefrontIcon',
    },
    {
      title: 'Portali B2B',
      description:
        'Abilita rivenditori e agenti ad accedere a catalogo, prezzi e ordini',
      icon: '💼',
      iconName: 'BriefcaseIcon',
    },
    {
      title: 'Tracciabilita completa',
      description:
        'Log di tutte le sincronizzazioni per verifica e audit',
      icon: '🔍',
      iconName: 'MagnifyingGlassIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'sincronizzazione',
      name: 'Sincronizzazione Dati',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
      features: [
        {
          title: 'Catalogo multi-canale',
          description:
            'Pubblica articoli automaticamente su tutti i canali con attributi specifici per piattaforma',
          iconName: 'BookOpenIcon',
          highlighted: true,
        },
        {
          title: 'Giacenze real-time',
          description:
            'Disponibilita aggiornata istantaneamente tra negozio, web e marketplace',
          iconName: 'CubeIcon',
          highlighted: true,
        },
        {
          title: 'Prezzi sincronizzati',
          description:
            'Listini diversificati per canale con aggiornamento automatico',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Ordini centralizzati',
          description:
            'Tutti gli ordini da ogni canale confluiscono in Daisy',
          iconName: 'InboxStackIcon',
        },
        {
          title: 'Cronjob pianificati',
          description:
            'Sincronizzazioni automatiche con frequenza configurabile',
          iconName: 'ClockIcon',
        },
        {
          title: 'Webhook eventi',
          description:
            'Notifiche push in tempo reale per ogni evento significativo',
          iconName: 'BellAlertIcon',
        },
      ],
    },
    {
      id: 'marketplace',
      name: 'Marketplace',
      icon: '🏪',
      iconName: 'BuildingStorefrontIcon',
      features: [
        {
          title: 'Amazon SP-API',
          description:
            'Integrazione completa Amazon con catalogo, ordini e spedizioni',
          iconName: 'GlobeAmericasIcon',
          highlighted: true,
        },
        {
          title: 'eBay Integration',
          description:
            'Gestione inserzioni eBay con template e categorie mappate',
          iconName: 'TagIcon',
        },
        {
          title: 'Google Shopping',
          description:
            'Feed automatici per Google Merchant Center',
          iconName: 'MagnifyingGlassIcon',
        },
        {
          title: 'Comparatori prezzi',
          description:
            'Feed per Idealo, Trovaprezzi, Kelkoo e altri comparatori',
          iconName: 'ChartBarSquareIcon',
        },
        {
          title: 'Category matching',
          description:
            'Mappatura automatica categorie per ogni marketplace',
          iconName: 'ArrowsPointingOutIcon',
        },
        {
          title: 'Gestione inserzioni',
          description:
            'Pubblicazione, modifica e rimozione prodotti centralizzata',
          iconName: 'PencilSquareIcon',
        },
      ],
    },
    {
      id: 'b2b',
      name: 'Portale B2B',
      icon: '💼',
      iconName: 'BriefcaseIcon',
      features: [
        {
          title: 'Accesso rivenditori',
          description:
            'Login dedicato per rivenditori con catalogo e prezzi riservati',
          iconName: 'UserGroupIcon',
          highlighted: true,
        },
        {
          title: 'Listini personalizzati',
          description:
            'Prezzi differenziati per cliente o gruppo clienti',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Ordini self-service',
          description:
            'Rivenditori piazzano ordini autonomamente 24/7',
          iconName: 'ShoppingCartIcon',
        },
        {
          title: 'Disponibilita real-time',
          description:
            'Giacenze visibili in tempo reale per ogni articolo',
          iconName: 'EyeIcon',
        },
        {
          title: 'Storico ordini',
          description:
            'Rivenditori consultano storico ordini e documenti',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Report vendite',
          description:
            'Statistiche e report per ogni rivenditore',
          iconName: 'ChartBarIcon',
        },
      ],
    },
    {
      id: 'import-export',
      name: 'Import/Export',
      icon: '📥',
      iconName: 'ArrowsRightLeftIcon',
      features: [
        {
          title: 'Import fornitori',
          description:
            'Caricamento automatico listini e cataloghi fornitori',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Export contabilita',
          description:
            'Esportazione dati verso software contabili (Zucchetti, Teamsystem)',
          iconName: 'DocumentArrowUpIcon',
        },
        {
          title: 'Centrali acquisto',
          description:
            'Sincronizzazione con Unieuro, Domex, Gaer e altre centrali',
          iconName: 'BuildingOffice2Icon',
          highlighted: true,
        },
        {
          title: 'Formati multipli',
          description:
            'Supporto XML, JSON, CSV, TXT con mapping configurabile',
          iconName: 'CodeBracketIcon',
        },
        {
          title: 'Schedulazione',
          description:
            'Import/export automatici a orari configurabili',
          iconName: 'ClockIcon',
        },
        {
          title: 'Log operazioni',
          description:
            'Tracciabilita completa di ogni operazione di import/export',
          iconName: 'DocumentMagnifyingGlassIcon',
        },
      ],
    },
    {
      id: 'api',
      name: 'API e Integrazioni',
      icon: '🔌',
      iconName: 'CodeBracketSquareIcon',
      features: [
        {
          title: 'API REST',
          description:
            'Endpoint documentati per integrazioni custom',
          iconName: 'CodeBracketIcon',
          highlighted: true,
        },
        {
          title: 'Autenticazione OAuth',
          description:
            'Accesso sicuro con token e permessi granulari',
          iconName: 'KeyIcon',
        },
        {
          title: 'Webhook configurabili',
          description:
            'Notifiche push per eventi specifici verso sistemi esterni',
          iconName: 'BellIcon',
        },
        {
          title: 'Rate limiting',
          description:
            'Controllo traffico API per stabilita sistema',
          iconName: 'ShieldCheckIcon',
        },
        {
          title: 'Sandbox test',
          description:
            'Ambiente di test per sviluppo integrazioni',
          iconName: 'BeakerIcon',
        },
        {
          title: 'Documentazione',
          description:
            'Guida completa con esempi per ogni endpoint',
          iconName: 'BookOpenIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Piattaforma e-commerce integrata per vendita online diretta',
      benefits: [
        'Elecommerce nativo',
        'CMS esterni supportati',
        'Checkout ottimizzato',
      ],
      icon: '🛍️',
      iconName: 'ShoppingBagIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Giacenze sincronizzate real-time su tutti i canali',
      benefits: [
        'Multi-magazzino',
        'Alert esaurimento',
        'Inventario unificato',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Ordini online evadibili direttamente da cassa',
      benefits: [
        'Evasione ordini web',
        'Fatturazione automatica',
        'Click & Collect',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'banca-dati',
      name: 'Banca Dati Eldomcat',
      description:
        'Catalogo 300k+ prodotti pronti per pubblicazione multi-canale',
      benefits: [
        '300k+ articoli',
        'Foto e descrizioni',
        'Schede tecniche',
      ],
      icon: '📚',
      iconName: 'BookOpenIcon',
      relatedModuleSlug: 'banca-dati-eldomcat',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilita',
      description:
        'Export automatico movimenti verso software contabili',
      benefits: [
        'Export Zucchetti',
        'Export Teamsystem',
        'Prima nota automatica',
      ],
      icon: '📒',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche automatiche per eventi di sincronizzazione',
      benefits: [
        'Alert email',
        'Notifiche push',
        'Report automatici',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
  ],

  benefits: [
    {
      title: 'Vendita ovunque',
      metric: '+45% canali',
      description:
        'Aggiungi nuovi canali di vendita (marketplace, B2B) senza duplicare il lavoro. Un solo catalogo, ovunque.',
    },
    {
      title: 'Zero errori',
      metric: '-95% discrepanze',
      description:
        'Giacenze e prezzi sempre allineati elimina vendite di articoli esauriti e discrepanze tra canali.',
    },
    {
      title: 'Automazione completa',
      metric: '-80% lavoro manuale',
      description:
        'Import/export automatico elimina la ricopiatura dati tra sistemi. Ordini fluiscono senza intervento.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Rivenditore con e-commerce, Amazon e rete B2B',
    customer: 'Distributore elettronica con 200 rivenditori B2B',
    challenge:
      'Gestiva manualmente catalogo su e-commerce, Amazon ed eBay. Le giacenze non erano sincronizzate: vendeva articoli esauriti, clienti insoddisfatti. I rivenditori B2B chiamavano per verificare disponibilita e piazzare ordini. Impossibile scalare.',
    solution:
      'Implementato modulo Connessione Omnicanale: catalogo pubblicato automaticamente su tutti i canali, giacenze sincronizzate in real-time, portale B2B per rivenditori autonomi. Ordini da ogni fonte confluiscono in Daisy.',
    results: [
      'Portale B2B: 200 rivenditori piazzano ordini autonomamente',
      'Chiamate telefoniche ridotte del 90%',
      'Marketplace: 15k prodotti sincronizzati automaticamente',
      'Revenue marketplace +450k euro/anno con gestione automatica',
      'Zero vendite di articoli esauriti',
    ],
  },
  integrations: [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
  ],
  faq: [
    {
      question: 'Quali canali posso integrare?',
      answer:
        'Puoi integrare e-commerce proprietario, marketplace (Amazon, eBay, ePrice), portali B2B, centrali di acquisto (Unieuro, Domex, Gaer), software contabili (Zucchetti, Teamsystem) e qualsiasi sistema che supporti import/export dati.',
    },
    {
      question: 'Come funziona la sincronizzazione giacenze?',
      answer:
        'Ogni movimento di magazzino (vendita, carico, trasferimento) aggiorna automaticamente le disponibilita su tutti i canali collegati. La sincronizzazione e in tempo reale o schedulata in base alle esigenze.',
    },
    {
      question: 'Posso pubblicare il catalogo su Amazon ed eBay?',
      answer:
        'Si, il modulo supporta la pubblicazione automatica del catalogo su Amazon, eBay e altri marketplace. Titoli, descrizioni, prezzi e giacenze vengono sincronizzati. Gli ordini rientrano automaticamente in Daisy.',
    },
    {
      question: 'Come funziona il portale B2B per rivenditori?',
      answer:
        'I rivenditori accedono con credenziali dedicate, vedono catalogo con prezzi riservati, verificano disponibilita in tempo reale e piazzano ordini. Gli ordini entrano in Daisy pronti per evasione. Riduci chiamate e email del 90%.',
    },
  ],
  screenshots: [
    {
      src: '/screenshots/moduli/connessione-omnicanale-hero.svg',
      alt: 'Dashboard connessione omnicanale con canali integrati',
      caption: 'Pannello centrale con stato sincronizzazione tutti i canali',
    },
    {
      src: '/screenshots/moduli/connessione-omnicanale-marketplace.svg',
      alt: 'Integrazione marketplace Amazon ed eBay',
      caption: 'Gestione catalogo e ordini da marketplace esterni',
    },
    {
      src: '/screenshots/moduli/connessione-omnicanale-b2b.svg',
      alt: 'Portale B2B per rivenditori',
      caption: 'Area rivenditori con catalogo e ordini self-service',
    },
    {
      src: '/screenshots/moduli/connessione-omnicanale-sync.svg',
      alt: 'Log sincronizzazioni e import/export',
      caption: 'Tracciabilita completa operazioni di sincronizzazione',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
