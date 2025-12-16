import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const ecommerceModule: ModuleData = {
  slug: 'ecommerce',
  name: 'E-commerce B2B/B2C',
  tagline: 'Negozio online integrato con Elecommerce, marketplace e CMS esterni',
  category: 'Crescita e Sviluppo',
  categoryColor: 'violet',
  icon: '🛍️',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'ShoppingBagIcon',
  heroIntro:
    'Gestisci uno o piu negozi online con Elecommerce o CMS esterni. Sincronizzazione real-time con 8+ marketplace, multi-magazzino e drop-shipping. Listini B2B/B2C differenziati.',

  overview: {
    intro:
      'Piattaforma e-commerce completa B2B e B2C con integrazione nativa Daisy. Elecommerce proprietario o CMS esterni (Magento, Prestashop, Woocommerce). Marketplace Amazon, eBay, Google Shopping, comparatori prezzi. Multi-sito, multi-magazzino, drop-shipping. Listini personalizzabili per canale.',
    mainBenefits: [
      'Zero doppia gestione ordini online/offline',
      'Giacenze sincronizzate real-time multi-magazzino',
      '8+ marketplace e comparatori integrati',
      'Drop-shipping e backorder automatico',
    ],
    stats: [
      {
        label: 'Marketplace integrati',
        value: '8+',
        description: 'Amazon, eBay, Google Shopping e altri',
      },
      {
        label: 'Sincronizzazione',
        value: 'Real-time',
        description: 'giacenze e ordini istantanei',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano E-commerce',
      },
      {
        label: 'Uptime garantito',
        value: `${SLA.uptimePercent}%`,
        description: 'disponibilita servizio',
      },
    ],
  },

  features: [
    {
      title: 'Elecommerce',
      description:
        'Piattaforma e-commerce proprietaria con design responsive e SEO ottimizzato',
      icon: '🌐',
      iconName: 'GlobeAltIcon',
    },
    {
      title: 'Amazon Marketplace',
      description:
        'Sincronizzazione automatica catalogo e ordini Amazon SP-API',
      icon: '📦',
      iconName: 'BuildingStorefrontIcon',
    },
    {
      title: 'eBay Integration',
      description:
        'Gestione inserzioni eBay con template personalizzabili',
      icon: '🏷️',
      iconName: 'TagIcon',
    },
    {
      title: 'Google Shopping',
      description:
        'Feed automatici per Google Merchant Center e comparatori',
      icon: '🔍',
      iconName: 'MagnifyingGlassIcon',
    },
    {
      title: 'CMS esterni',
      description:
        'Integrazione Magento, Prestashop, Woocommerce con sync bidirezionale',
      icon: '🧩',
      iconName: 'PuzzlePieceIcon',
    },
    {
      title: 'Multi-sito',
      description:
        'Gestione piu negozi online da un unico pannello centralizzato',
      icon: '🏪',
      iconName: 'Squares2X2Icon',
    },
    {
      title: 'Multi-magazzino',
      description:
        'Giacenze aggregate da piu magazzini con disponibilita sommata',
      icon: '📍',
      iconName: 'CubeIcon',
    },
    {
      title: 'Drop-shipping',
      description:
        'Ordini senza giacenza con consegna diretta da fornitore',
      icon: '🚚',
      iconName: 'TruckIcon',
    },
    {
      title: 'Listini B2B/B2C',
      description:
        'Prezzi differenziati per clienti privati e rivenditori per canale',
      icon: '💶',
      iconName: 'CurrencyEuroIcon',
    },
    {
      title: 'Sync real-time',
      description:
        'Giacenze e ordini sincronizzati istantaneamente tra tutti i canali',
      icon: '⚡',
      iconName: 'ArrowPathIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'elecommerce',
      name: 'Elecommerce',
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      features: [
        {
          title: 'Piattaforma proprietaria',
          description:
            'E-commerce nativo Daisy con integrazione completa e zero configurazione',
          iconName: 'RocketLaunchIcon',
        },
        {
          title: 'Design responsive',
          description:
            'Template mobile-first ottimizzati per acquisti da smartphone',
          iconName: 'DevicePhoneMobileIcon',
        },
        {
          title: 'SEO ottimizzato',
          description:
            'URL friendly, sitemap automatiche, meta-tag dinamici',
          iconName: 'MagnifyingGlassCircleIcon',
        },
        {
          title: 'Carrello e checkout',
          description:
            'Processo di acquisto ottimizzato con recovery carrello abbandonato',
          iconName: 'ShoppingCartIcon',
        },
        {
          title: 'Pagamenti online',
          description:
            'Integrazione PayPal, Stripe, Nexi, bonifico e contrassegno',
          iconName: 'CreditCardIcon',
        },
        {
          title: 'Area utente',
          description:
            'Login cliente, storico ordini, wishlist e gestione account',
          iconName: 'UserCircleIcon',
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
            'Integrazione completa Amazon con OAuth, feed JSON/XML automatici',
          iconName: 'GlobeAmericasIcon',
        },
        {
          title: 'eBay Sell Feed API',
          description:
            'Gestione inserzioni eBay con template e categorie mappate',
          iconName: 'TagIcon',
        },
        {
          title: 'Google Shopping',
          description:
            'Feed automatici per Google Merchant Center con categorie',
          iconName: 'MagnifyingGlassIcon',
        },
        {
          title: 'Idealo e Trovaprezzi',
          description:
            'Feed TXT automatici per comparatori prezzi italiani',
          iconName: 'ChartBarSquareIcon',
        },
        {
          title: 'Eprice e Kelkoo',
          description:
            'Integrazione marketplace e comparatori europei',
          iconName: 'GlobeEuropeAfricaIcon',
        },
        {
          title: 'Category matching',
          description:
            'Mappatura automatica e manuale categorie per ogni marketplace',
          iconName: 'ArrowsPointingOutIcon',
        },
      ],
    },
    {
      id: 'catalogo',
      name: 'Gestione Catalogo',
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
      features: [
        {
          title: 'Preparazione dati B2B/B2C',
          description:
            'Configurazione prodotti con attributi specifici per canale',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Categorie e sottocategorie',
          description:
            'Struttura gerarchica merceologica con ereditarieta attributi',
          iconName: 'FolderIcon',
        },
        {
          title: 'Parametri pubblicazione',
          description:
            'Regole per pubblicazione automatica prodotti per canale',
          iconName: 'AdjustmentsHorizontalIcon',
        },
        {
          title: 'Stato prodotti',
          description:
            'Visibile, invisibile, esaurito, in arrivo con gestione automatica',
          iconName: 'EyeIcon',
        },
        {
          title: 'Filtri estrazione',
          description:
            'Criteri avanzati per selezionare prodotti da pubblicare',
          iconName: 'FunnelIcon',
        },
        {
          title: 'Immagini e media',
          description:
            'Gestione multi-immagine con cache automatica e ottimizzazione',
          iconName: 'PhotoIcon',
        },
      ],
    },
    {
      id: 'multi-sito',
      name: 'Multi-Sito e Multi-Magazzino',
      icon: '🏬',
      iconName: 'BuildingOffice2Icon',
      features: [
        {
          title: 'Gestione multi-sito',
          description:
            'Piu negozi online gestiti da unico pannello centralizzato',
          iconName: 'Squares2X2Icon',
        },
        {
          title: 'Configurazione per dominio',
          description:
            'Impostazioni specifiche per ogni sito: logo, colori, contenuti',
          iconName: 'ComputerDesktopIcon',
        },
        {
          title: 'Giacenze separate o condivise',
          description:
            'Scelta tra magazzini dedicati o disponibilita aggregata',
          iconName: 'CubeIcon',
        },
        {
          title: 'Drop-shipping',
          description:
            'Ordini evadibili da fornitore senza giacenza in magazzino',
          iconName: 'TruckIcon',
        },
        {
          title: 'Backorder automatico',
          description:
            'Ordini su prodotti esauriti con consegna futura garantita',
          iconName: 'ClockIcon',
        },
        {
          title: 'Multi-lingua',
          description:
            'Contenuti localizzati per mercati internazionali',
          iconName: 'LanguageIcon',
        },
      ],
    },
    {
      id: 'prezzi',
      name: 'Prezzi e Listini',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
      features: [
        {
          title: 'Listini B2B e B2C',
          description:
            'Prezzi differenziati per clienti privati e rivenditori',
          iconName: 'UserGroupIcon',
        },
        {
          title: 'Coefficienti ricarico',
          description:
            'Markup automatico per punto vendita o canale',
          iconName: 'CalculatorIcon',
        },
        {
          title: 'Validazione margini',
          description:
            'Controllo automatico margine minimo prima pubblicazione',
          iconName: 'ShieldCheckIcon',
        },
        {
          title: 'Prezzi promozionali',
          description:
            'Sconti temporanei con date inizio/fine automatiche',
          iconName: 'SparklesIcon',
        },
        {
          title: 'Sconti per canale',
          description:
            'Prezzi specifici per Amazon, eBay, sito proprio',
          iconName: 'TagIcon',
        },
        {
          title: 'Multi-valuta',
          description:
            'Gestione prezzi in EUR, USD, GBP con conversione automatica',
          iconName: 'BanknotesIcon',
        },
      ],
    },
    {
      id: 'ordini',
      name: 'Ordini e Sincronizzazione',
      icon: '📦',
      iconName: 'InboxStackIcon',
      features: [
        {
          title: 'Import ordini marketplace',
          description:
            'Ordini da Amazon, eBay e altri importati automaticamente in Daisy',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Sincronizzazione giacenze',
          description:
            'Disponibilita aggiornata real-time su tutti i canali',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Cronjob pianificati',
          description:
            'Sincronizzazioni automatiche con frequenza configurabile',
          iconName: 'ClockIcon',
        },
        {
          title: 'Tracking spedizioni',
          description:
            'Codici tracking inviati automaticamente a clienti e marketplace',
          iconName: 'MapPinIcon',
        },
        {
          title: 'Notifiche stock',
          description:
            'Alert automatici quando giacenza scende sotto soglia',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Export contabilita',
          description:
            'Vendite online registrate automaticamente in prima nota',
          iconName: 'DocumentArrowUpIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Ordini online diventano documenti Daisy con evasione da cassa',
      benefits: [
        'Ordini web in lista evadibili',
        'Fatturazione automatica',
        'Scontrino elettronico ordini',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Sincronizzazione giacenze real-time bidirezionale',
      benefits: [
        'Giacenze sempre allineate',
        'Alert esaurimento scorte',
        'Multi-magazzino aggregato',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'import-export',
      name: 'Import/Export',
      description:
        'Interscambio dati con piattaforme esterne e feed automatici',
      benefits: [
        'Feed marketplace automatici',
        'Import ordini batch',
        'Export catalogo XML/CSV',
      ],
      icon: '🔄',
      iconName: 'ArrowsRightLeftIcon',
      relatedModuleSlug: 'import-export',
    },
    {
      id: 'webservice',
      name: 'Webservice API',
      description:
        'API REST per integrazioni custom con piattaforme terze',
      benefits: [
        'API documentate',
        'Webhook eventi',
        'Integrazioni custom',
      ],
      icon: '🔌',
      iconName: 'CodeBracketIcon',
      relatedModuleSlug: 'webservice',
    },
    {
      id: 'liste-regalo',
      name: 'Liste Regalo',
      description:
        'Liste regalo condivisibili online con acquisto da ospiti',
      benefits: [
        'Liste nozze online',
        'Condivisione social',
        'Acquisto ospiti',
      ],
      icon: '🎁',
      iconName: 'GiftIcon',
      relatedModuleSlug: 'liste-regalo',
    },
    {
      id: 'banca-dati',
      name: 'Banca Dati Eldomcat',
      description:
        'Catalogo 300k+ prodotti pronti per pubblicazione online',
      benefits: [
        '300k+ articoli con foto',
        'Descrizioni SEO ready',
        'Schede tecniche complete',
      ],
      icon: '📚',
      iconName: 'BookOpenIcon',
      relatedModuleSlug: 'banca-dati-eldomcat',
    },
    {
      id: 'comunicazioni',
      name: 'Comunicazioni',
      description:
        'Email transazionali e marketing automation per e-commerce',
      benefits: [
        'Conferma ordine automatica',
        'Recovery carrello abbandonato',
        'Newsletter prodotti',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/ecommerce-hero.svg',
      alt: 'Dashboard Elecommerce con ordini e statistiche',
      caption: 'Pannello centrale con ordini, vendite e performance canali',
    },
    {
      src: '/screenshots/moduli/ecommerce-marketplace.svg',
      alt: 'Integrazione marketplace Amazon ed eBay',
      caption: 'Gestione inserzioni e ordini da marketplace esterni',
    },
    {
      src: '/screenshots/moduli/ecommerce-catalogo.svg',
      alt: 'Gestione catalogo prodotti online',
      caption: 'Preparazione dati e pubblicazione per canale',
    },
    {
      src: '/screenshots/moduli/ecommerce-ordini.svg',
      alt: 'Gestione ordini e-commerce',
      caption: 'Ordini da tutti i canali con stato e tracking',
    },
  ],

  benefits: [
    {
      title: 'Canale vendita nuovo',
      metric: '+150% fatturato',
      description:
        'Clienti che attivano e-commerce vedono +150% fatturato dopo il primo anno. Nuovo bacino clienti fuori zona.',
    },
    {
      title: 'Gestione unificata',
      metric: '8+ canali in 1',
      description:
        'Vendi su sito proprio, Amazon, eBay e comparatori gestendo tutto da un unico pannello Daisy.',
    },
    {
      title: 'Zero doppio lavoro',
      metric: '-90% tempo',
      description:
        'Ordini online e offline nello stesso sistema: un solo magazzino, un solo gestionale, zero doppioni.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Negozio elettronica apre multi-canale',
    customer: 'Negozio elettronica (1 punto vendita fisico)',
    challenge:
      'Fatturato stagionale con picchi natalizi e cali estivi. Necessita di aprire canale vendita online senza aumentare personale e complessita gestionale. Volonta di vendere su Amazon ed eBay oltre che sito proprio.',
    solution:
      'Lancio Elecommerce integrato con Daisy. Attivazione marketplace Amazon ed eBay. Catalogo online automatico da Eldomcat, ordini che diventano documenti Daisy, giacenze sincronizzate real-time su tutti i canali.',
    results: [
      '+150% fatturato dopo primo anno',
      'E-commerce online in 2 settimane da attivazione',
      'Zero aumento personale: ordini gestiti da personale esistente',
      '40% ordini da clienti fuori zona: nuovo bacino clienti',
      '3 canali di vendita gestiti da unico pannello',
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
        "Gli ordini online vengono importati automaticamente in Daisy come ordini clienti. Puoi evaderli, fatturarli e gestire la spedizione direttamente da Daisy. Le giacenze si sincronizzano in tempo reale bidirezionale su tutti i canali.",
    },
    {
      question: 'Devo inserire manualmente i prodotti online?',
      answer:
        'No! Con Eldomcat attivo, i prodotti si pubblicano automaticamente online con foto, descrizioni e caratteristiche tecniche. Devi solo impostare i prezzi di vendita e le regole di pubblicazione per canale.',
    },
    {
      question: 'Posso usare un CMS esterno invece di Elecommerce?',
      answer:
        'Si, supportiamo integrazione con Magento, Prestashop e Woocommerce. Daisy sincronizza catalogo, prezzi, giacenze e ordini bidirezionalmente con il tuo CMS esistente.',
    },
    {
      question: 'Come funziona il multi-magazzino e drop-shipping?',
      answer:
        'Puoi configurare piu magazzini con giacenze separate o sommate. Per il drop-shipping, gli ordini su prodotti esauriti vengono inoltrati automaticamente al fornitore che spedisce direttamente al cliente.',
    },
    {
      question: 'Quali marketplace sono supportati?',
      answer:
        'Supportiamo Amazon SP-API, eBay Sell Feed API, Google Shopping, Idealo, Trovaprezzi, Eprice, Kelkoo, Bestshopping. Feed automatici in formato XML, JSON o TXT secondo le specifiche di ogni piattaforma.',
    },
    {
      question: 'Come gestisco listini diversi per B2B e B2C?',
      answer:
        'Puoi configurare listini separati per clienti privati (B2C) e rivenditori (B2B). Ogni canale di vendita puo avere un listino dedicato con coefficienti di ricarico e sconti specifici.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
