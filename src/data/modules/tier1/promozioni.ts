import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const promozioniModule: ModuleData = {
  slug: 'promozioni',
  name: 'Promozioni',
  tagline: 'Campagne promozionali multi-canale con sconti, bundle e prezzi barrati',
  category: 'Crescita & Marketing',
  categoryColor: 'violet',
  icon: '🎯',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'SparklesIcon',
  heroIntro:
    'Crea e gestisci campagne promozionali multi-canale con sconti intelligenti: sincronizza automaticamente prezzi, bundle e offerte su negozio, e-commerce, cartelli e volantini in tempo reale.',

  overview: {
    intro:
      'Il modulo Promozioni e il motore delle tue campagne commerciali. Crea promozioni articolo, categoria o brand con sconti percentuali, prezzi fissi, bundle (3x2, seconda merce -50%), prezzi barrati automatici. Sincronizzazione multi-canale: negozio, e-commerce, cartelli Fastlabel/ESL, volantini. Tracking ROI per ogni campagna.',
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
      {
        label: 'Punti vendita',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano il modulo Promozioni',
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
      title: 'Campagne periodo',
      description:
        'Definisci promozioni con data inizio/fine, attivazione e disattivazione automatica',
      icon: '📅',
      iconName: 'CalendarDaysIcon',
    },
    {
      title: 'Sconti articolo/categoria',
      description:
        'Applica sconti a singoli articoli, categorie o brand completi',
      icon: '💸',
      iconName: 'ReceiptPercentIcon',
    },
    {
      title: 'Bundle e offerte',
      description:
        'Crea offerte complesse: 3x2, seconda merce -50%, bundle prodotti',
      icon: '🎁',
      iconName: 'GiftIcon',
    },
    {
      title: 'Prezzi barrati',
      description:
        'Prezzi originali barrati automaticamente su cartelli ed e-commerce',
      icon: '🏷️',
      iconName: 'TagIcon',
    },
    {
      title: 'Gestione volantini',
      description:
        'Cataloghi promozionali con articoli evidenziati e prezzi speciali',
      icon: '📰',
      iconName: 'NewspaperIcon',
    },
    {
      title: 'Promozioni fidelity',
      description:
        'Sconti esclusivi per clienti con carta fedelta o livelli premium',
      icon: '⭐',
      iconName: 'StarIcon',
    },
    {
      title: 'Coupon e codici',
      description:
        'Genera codici sconto usa-e-getta o multi-uso per campagne mirate',
      icon: '🎫',
      iconName: 'TicketIcon',
    },
    {
      title: 'Report ROI',
      description:
        'Analisi vendite pre/durante/post campagna con calcolo ritorno investimento',
      icon: '📊',
      iconName: 'ChartBarIcon',
    },
    {
      title: 'Import promozioni',
      description:
        'Importazione campagne da fornitori esterni e centrali acquisto',
      icon: '📥',
      iconName: 'ArrowDownTrayIcon',
    },
    {
      title: 'Sincronizzazione omnicanale',
      description:
        'Prezzi allineati su tutti i touchpoint in tempo reale senza discordanze',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'gestione-campagne',
      name: 'Gestione Campagne',
      icon: '📅',
      iconName: 'CalendarDaysIcon',
      features: [
        {
          title: 'Campagne con validita temporale',
          description:
            'Definisci data inizio/fine con attivazione e disattivazione automatica',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Sospensione campagne',
          description:
            'Sospendi e riprendi campagne con un solo click senza eliminarle',
          iconName: 'PauseCircleIcon',
        },
        {
          title: 'Destinazione clienti/punti vendita',
          description:
            'Indirizza promozioni a clienti specifici o punti vendita selezionati',
          iconName: 'UserGroupIcon',
        },
        {
          title: 'Import da fornitori',
          description:
            'Importazione automatica promozioni da fornitori esterni via file',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Import da centrali',
          description:
            'Campagne da Unieuro, Domex, Gaer caricate automaticamente',
          iconName: 'BuildingOffice2Icon',
        },
        {
          title: 'Dettaglio articoli',
          description:
            'Interfaccia per consultare e gestire articoli in ogni promozione',
          iconName: 'ListBulletIcon',
        },
      ],
    },
    {
      id: 'tipi-sconto',
      name: 'Tipi di Sconto',
      icon: '💸',
      iconName: 'ReceiptPercentIcon',
      features: [
        {
          title: 'Sconto percentuale',
          description:
            'Applica sconti % su articoli, categorie o brand completi',
          iconName: 'ReceiptPercentIcon',
        },
        {
          title: 'Sconto a valore',
          description:
            'Decurtazione di importo fisso dal prezzo originale',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Prezzo fisso',
          description:
            'Imposta un prezzo promozionale fisso per articoli selezionati',
          iconName: 'TagIcon',
        },
        {
          title: 'Prezzi barrati automatici',
          description:
            'Prezzo originale barrato visualizzato su tutti i canali',
          iconName: 'XMarkIcon',
        },
        {
          title: 'Priorita e esclusivita',
          description:
            'Gestione priorita tra promozioni e promozioni esclusive',
          iconName: 'ArrowsUpDownIcon',
        },
      ],
    },
    {
      id: 'offerte-complesse',
      name: 'Offerte Complesse',
      icon: '🎁',
      iconName: 'GiftIcon',
      features: [
        {
          title: 'Bundle 3x2 e 2x1',
          description:
            'Offerte prendi X paghi Y con calcolo automatico sconto',
          iconName: 'ShoppingBagIcon',
        },
        {
          title: 'Seconda merce scontata',
          description:
            'Seconda merce a -50%, -30% o altro sconto configurabile',
          iconName: 'SquaresPlusIcon',
        },
        {
          title: 'Coupon usa-e-getta',
          description:
            'Genera codici sconto monouso per campagne mirate',
          iconName: 'TicketIcon',
        },
        {
          title: 'Coupon multi-uso',
          description:
            'Codici sconto riutilizzabili con tracking utilizzi',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Voucher con validita',
          description:
            'Buoni sconto con date di validita e importo variabile',
          iconName: 'GiftTopIcon',
        },
      ],
    },
    {
      id: 'sincronizzazione',
      name: 'Sincronizzazione Multi-canale',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
      features: [
        {
          title: 'Sincronizzazione negozio',
          description:
            'Prezzi promozionali applicati in tempo reale alle casse',
          iconName: 'BuildingStorefrontIcon',
        },
        {
          title: 'Aggiornamento e-commerce',
          description:
            'Prezzi e promozioni sincronizzati automaticamente con sito web',
          iconName: 'GlobeAltIcon',
        },
        {
          title: 'Integrazione Label/ESL',
          description:
            'Cartelli Fastlabel e etichette ESL aggiornati automaticamente',
          iconName: 'TagIcon',
        },
        {
          title: 'Gestione volantini',
          description:
            'Promozioni per volantini con articoli evidenziati e prezzi speciali',
          iconName: 'NewspaperIcon',
        },
        {
          title: 'Parametri e-commerce',
          description:
            'Configurazione home page, volantino digitale, promo consumatore',
          iconName: 'Cog6ToothIcon',
        },
      ],
    },
    {
      id: 'promozioni-fidelity',
      name: 'Promozioni Fidelity',
      icon: '⭐',
      iconName: 'StarIcon',
      features: [
        {
          title: 'Sconti carta fedelta',
          description:
            'Promozioni esclusive per clienti con fidelity card attiva',
          iconName: 'CreditCardIcon',
        },
        {
          title: 'Livelli premium',
          description:
            'Sconti differenziati per livelli Gold, Silver, Bronze',
          iconName: 'TrophyIcon',
        },
        {
          title: 'Coupon da acquisti',
          description:
            'Generazione automatica coupon da acquisti precedenti',
          iconName: 'ReceiptRefundIcon',
        },
        {
          title: 'Tracking utilizzo',
          description:
            'Monitoraggio utilizzo coupon con stato attivo/usato',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Report ROI campagne',
          description:
            'Analisi vendite incrementali, margine e ritorno investimento',
          iconName: 'ChartBarIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Applicazione automatica sconti e coupon alle vendite in cassa',
      benefits: [
        'Sconti applicati automaticamente',
        'Verifica coupon in tempo reale',
        'Prezzi barrati visibili',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Sincronizzazione prezzi promozionali su siti B2B e B2C',
      benefits: [
        'Prezzi web sempre allineati',
        'Banner promozionali automatici',
        'Codici sconto online',
      ],
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'label',
      name: 'Modulo Label',
      description:
        'Aggiornamento cartelli prezzo e etichette ESL con promozioni',
      benefits: [
        'Prezzi barrati su cartelli',
        'ESL aggiornate in tempo reale',
        'Slogan promozionali automatici',
      ],
      icon: '🏷️',
      iconName: 'TagIcon',
      relatedModuleSlug: 'fastlabel',
    },
    {
      id: 'statistiche',
      name: 'Modulo Statistiche BI',
      description:
        'Report avanzati su performance campagne e ROI',
      benefits: [
        'Dashboard ROI campagne',
        'Confronto pre/durante/post promo',
        'Analisi margini per campagna',
      ],
      icon: '📊',
      iconName: 'ChartBarIcon',
      relatedModuleSlug: 'statistiche',
    },
    {
      id: 'connessione-omnicanale',
      name: 'Connessione Omnicanale',
      description:
        'Import promozioni da file Excel, CSV e sistemi esterni',
      benefits: [
        'Import massivo promozioni',
        'Export campagne per analisi',
        'Integrazione API fornitori',
      ],
      icon: '🔄',
      iconName: 'ArrowsRightLeftIcon',
      relatedModuleSlug: 'connessione-omnicanale',
    },
    {
      id: 'unieuro',
      name: 'Centrale Unieuro',
      description:
        'Import automatico campagne promozionali Unieuro',
      benefits: [
        'Campagne volantino caricate',
        'Prezzi allineati con centrale',
        'Articoli promo aggiornati',
      ],
      icon: '🔵',
      iconName: 'BuildingOffice2Icon',
      externalLink: 'https://www.unieuro.it/',
    },
    {
      id: 'domex',
      name: 'Centrale Domex',
      description:
        'Sincronizzazione promozioni e campagne Domex',
      benefits: [
        'Import campagne periodico',
        'Contributi sellout tracciati',
        'Promozioni condivise rete',
      ],
      icon: '🟠',
      iconName: 'BuildingStorefrontIcon',
      externalLink: 'https://www.domex.it/',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/promozioni-hero.svg',
      alt: 'Dashboard campagne promozionali',
      caption: 'Gestione centralizzata campagne con stato e validita',
    },
    {
      src: '/screenshots/moduli/promozioni-campagna.svg',
      alt: 'Editor campagna promozionale',
      caption: 'Configurazione articoli, sconti e destinazione',
    },
    {
      src: '/screenshots/moduli/promozioni-bundle.svg',
      alt: 'Configurazione bundle e offerte',
      caption: 'Creazione offerte 3x2, seconda merce scontata, voucher',
    },
    {
      src: '/screenshots/moduli/promozioni-report.svg',
      alt: 'Report ROI campagna',
      caption: 'Analisi vendite incrementali e ritorno investimento',
    },
  ],

  benefits: [
    {
      title: 'Sincronizzazione multi-canale',
      metric: '100% coerenza',
      description:
        'Prezzi promozionali identici su negozio, web, cartelli ESL e volantini. Zero discordanze.',
    },
    {
      title: 'Stimolo vendite mirato',
      metric: '+45% vendite',
      description:
        'Le campagne promozionali aumentano le vendite del 45% sui prodotti target durante il periodo attivo.',
    },
    {
      title: 'ROI tracciabile',
      metric: 'Real-time',
      description:
        'Ogni campagna ha metriche precise: vendite incrementali, margine, costo campagna, ROI netto.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Campagna Black Friday multi-canale',
    customer: 'Catena 8 negozi elettrodomestici + e-commerce',
    challenge:
      "Durante il Black Friday, gestire manualmente sconti su 500+ articoli tra negozi ed e-commerce causava errori, ritardi e discordanze di prezzo. Clienti confusi tra prezzo online e negozio. Import manuale promozioni da centrale richiedeva ore.",
    solution:
      'Implementato modulo Promozioni con campagna Black Friday centralizzata. 500 articoli in promo con prezzi barrati sincronizzati automaticamente su tutti i canali. Import automatico promozioni da centrale Unieuro. Cartelli Fastlabel ed etichette ESL aggiornati in real-time, e-commerce allineato.',
    results: [
      'Vendite Black Friday +62% rispetto anno precedente',
      'Zero discordanze prezzo tra canali',
      'Tempo setup campagna ridotto da 3 giorni a 2 ore',
      'ROI campagna tracciato: margine netto +38%',
      'Import promozioni da centrale in 5 minuti',
    ],
  },

  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Label', slug: 'fastlabel' },
    { name: 'Statistiche', slug: 'statistiche' },
  ],

  faq: [
    {
      question: 'Posso creare offerte 3x2 o "seconda merce a meta prezzo"?',
      answer:
        'Si, il sistema supporta bundle complessi: 3x2, 2x1, seconda merce scontata, bundle prodotti. Puoi anche combinare piu regole (es. sconto 10% + omaggio).',
    },
    {
      question: 'Come vengono sincronizzati i prezzi su tutti i canali?',
      answer:
        'Quando attivi una campagna, il sistema aggiorna automaticamente i prezzi su vendite, e-commerce, cartelli Fastlabel ed etichette ESL. La sincronizzazione avviene in tempo reale (web, ESL) o al prossimo aggiornamento (cartelli).',
    },
    {
      question: 'Posso limitare promozioni a clienti con fidelity card?',
      answer:
        'Si, puoi creare promozioni esclusive per clienti con carta fedelta o per livelli specifici (es. solo Gold). Ottimo per fidelizzare i tuoi clienti migliori.',
    },
    {
      question: 'Come traccio il ROI di una campagna promozionale?',
      answer:
        'Il sistema genera report con vendite incrementali (rispetto a periodo precedente), margine generato, costi campagna (sconti applicati), ROI netto. Puoi confrontare piu campagne per capire cosa funziona meglio.',
    },
    {
      question: 'Come importo promozioni da fornitori esterni?',
      answer:
        'Il sistema supporta import automatico da centrali (Unieuro, Domex, Gaer) e manuale da file Excel/CSV. Puoi importare listini promozionali, campagne volantino e sconti periodo. I dati vengono validati e caricati con preview prima della conferma.',
    },
    {
      question: 'Posso sospendere temporaneamente una campagna?',
      answer:
        'Si, con un solo click puoi sospendere ("congelare") una campagna attiva senza eliminarla. La campagna rimane visibile ma non applicata. Puoi riattivarla in qualsiasi momento con lo stesso click.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
