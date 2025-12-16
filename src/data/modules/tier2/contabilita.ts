import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const contabilitaModule: ModuleData = {
  slug: 'contabilita',
  name: 'Contabilita',
  tagline: 'Dalla Prima Nota al Bilancio con IVA, LIPE e registrazioni automatiche',
  category: 'Compliance e Amministrazione',
  categoryColor: 'indigo',
  icon: '📒',
  tier: 2,

  // Hero migliorata v2.1
  heroIcon: 'BookOpenIcon',
  heroIntro:
    'Gestione completa dalla Prima Nota al Bilancio e Liquidazione IVA incluse LIPE. Import automatico fatture elettroniche, controllo partite e scadenze, export per commercialista in formati standard.',

  overview: {
    intro:
      'Il modulo Contabilita offre una gestione completa dalla Prima Nota al Bilancio e Liquidazione IVA incluse LIPE. Massimizza efficienza grazie allimportazione automatica delle fatture elettroniche garantendo il controllo su partite e scadenze. Integrazione con Vendite e Acquisti per registrazione automatica, export in formato Zucchetti e Teamsystem per il commercialista.',
    mainBenefits: [
      'Contabilita sempre aggiornata in tempo reale',
      'Zero doppia digitazione tra gestionale e contabilita',
      'LIPE automatica con file per Agenzia Entrate',
      'Export commercialista in formati standard',
    ],
    stats: [
      {
        label: 'LIPE automatica',
        value: '100%',
        description: 'file XML per Agenzia Entrate',
      },
      {
        label: 'Tempo risparmiato',
        value: '-90%',
        description: 'grazie a registrazioni automatiche',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano la Contabilita',
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
      title: 'Prima nota automatica',
      description:
        'Registrazioni contabili automatiche da fatture vendita e acquisto',
      icon: '✍️',
      iconName: 'DocumentDuplicateIcon',
    },
    {
      title: 'Piano dei conti',
      description:
        'Struttura gerarchica conti personalizzabile con quadratura',
      icon: '📋',
      iconName: 'ListBulletIcon',
    },
    {
      title: 'Liquidazione IVA',
      description:
        'Calcolo automatico IVA mensile/trimestrale con compensi e acconti',
      icon: '💰',
      iconName: 'CalculatorIcon',
    },
    {
      title: 'LIPE',
      description:
        'Generazione automatica file XML per Agenzia delle Entrate',
      icon: '📤',
      iconName: 'DocumentArrowUpIcon',
    },
    {
      title: 'Partite aperte/chiuse',
      description:
        'Gestione crediti e debiti con matching automatico pagamenti',
      icon: '⚖️',
      iconName: 'ScaleIcon',
    },
    {
      title: 'Scadenzario',
      description:
        'Scadenze clienti e fornitori con alert e promemoria',
      icon: '📅',
      iconName: 'CalendarIcon',
    },
    {
      title: 'Registri IVA',
      description:
        'Stampa registri acquisti, vendite e corrispettivi definitivi',
      icon: '🖨️',
      iconName: 'PrinterIcon',
    },
    {
      title: 'Libro giornale',
      description:
        'Stampa definitiva con progressivi e pagine numerate',
      icon: '📖',
      iconName: 'BookOpenIcon',
    },
    {
      title: 'Chiusura bilancio',
      description:
        'Chiusura esercizio con apertura automatica nuovo anno',
      icon: '🔒',
      iconName: 'LockClosedIcon',
    },
    {
      title: 'Export commercialista',
      description:
        'Formato Zucchetti, Teamsystem, Excel per studio commercialista',
      icon: '📊',
      iconName: 'ArrowUpTrayIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'prima-nota',
      name: 'Prima Nota e Registrazioni',
      icon: '✍️',
      iconName: 'PencilSquareIcon',
      features: [
        {
          title: 'Registrazione fattura acquisto',
          description:
            'Contabilizzazione fatture passive con import da SDI automatico',
          iconName: 'DocumentArrowDownIcon',
        },
        {
          title: 'Fattura reverse charge',
          description:
            'Gestione fatture con inversione contabile e IVA indetraibile',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Fattura estera',
          description:
            'Registrazione acquisti da fornitori UE ed extra-UE',
          iconName: 'GlobeEuropeAfricaIcon',
        },
        {
          title: 'Auto-fattura',
          description:
            'Generazione automatica autofatture reverse charge ed estere',
          iconName: 'DocumentPlusIcon',
        },
        {
          title: 'Registrazione incassi',
          description:
            'Contabilizzazione incassi con collegamento a partite clienti',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'Consultazione registrazioni',
          description:
            'Ricerca per causale, conto, cliente, fornitore, protocollo, data',
          iconName: 'MagnifyingGlassIcon',
        },
      ],
    },
    {
      id: 'piano-conti',
      name: 'Piano dei Conti e Causali',
      icon: '📋',
      iconName: 'ListBulletIcon',
      features: [
        {
          title: 'Piano dei conti gerarchico',
          description:
            'Struttura ad albero personalizzabile con conti padre-figli',
          iconName: 'QueueListIcon',
        },
        {
          title: 'Conti soggetti a quadratura',
          description:
            'Marcatura conti che richiedono riconciliazione periodica',
          iconName: 'CheckCircleIcon',
        },
        {
          title: 'Causali contabili',
          description:
            'Configurazione causali con mapping automatico a conti default',
          iconName: 'TagIcon',
        },
        {
          title: 'Associazione registri IVA',
          description:
            'Collegamento causali a registri acquisti, vendite, corrispettivi',
          iconName: 'LinkIcon',
        },
        {
          title: 'Gestione aliquote IVA',
          description:
            'Anagrafica aliquote con percentuali, esenzioni e natura IVA',
          iconName: 'PercentBadgeIcon',
        },
        {
          title: 'Conti speciali',
          description:
            'Configurazione conti clienti, fornitori, IVA, perdite e profitti',
          iconName: 'StarIcon',
        },
      ],
    },
    {
      id: 'iva-adempimenti',
      name: 'IVA e Adempimenti',
      icon: '📊',
      iconName: 'ChartBarSquareIcon',
      features: [
        {
          title: 'Registri IVA',
          description:
            'Gestione registri acquisti, vendite e corrispettivi con LIPE',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Liquidazione IVA',
          description:
            'Calcolo automatico liquidazione mensile o trimestrale',
          iconName: 'CalculatorIcon',
        },
        {
          title: 'LIPE',
          description:
            'Generazione file XML per comunicazione periodica Agenzia Entrate',
          iconName: 'DocumentArrowUpIcon',
        },
        {
          title: 'Competenza mese precedente',
          description:
            'Gestione fatture di competenza mese precedente per liquidazione',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Acconti IVA',
          description:
            'Calcolo e registrazione acconti IVA di dicembre',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Stampa registri definitiva',
          description:
            'Stampa con bollatura e progressivi per conservazione',
          iconName: 'PrinterIcon',
        },
      ],
    },
    {
      id: 'partite-scadenze',
      name: 'Partite e Scadenze',
      icon: '⚖️',
      iconName: 'ScaleIcon',
      features: [
        {
          title: 'Interrogazione partite',
          description:
            'Consultazione partite aperte e chiuse con filtri avanzati',
          iconName: 'MagnifyingGlassCircleIcon',
        },
        {
          title: 'Partite per cliente/fornitore',
          description:
            'Estratto conto clienti e fornitori con saldi e movimenti',
          iconName: 'UserCircleIcon',
        },
        {
          title: 'Partite per data',
          description:
            'Analisi partite per data documento, scadenza o registrazione',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Scadenzario clienti',
          description:
            'Elenco scadenze attive con solleciti automatici',
          iconName: 'ClockIcon',
        },
        {
          title: 'Scadenzario fornitori',
          description:
            'Elenco pagamenti in scadenza con priorita e disponibilita',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'Esposizione finanziaria',
          description:
            'Analisi cash-flow con previsione entrate e uscite',
          iconName: 'ChartBarIcon',
        },
      ],
    },
    {
      id: 'controllo-quadratura',
      name: 'Controllo e Quadratura',
      icon: '✅',
      iconName: 'ShieldCheckIcon',
      features: [
        {
          title: 'Pagamenti squadrati',
          description:
            'Identificazione pagamenti con differenze rispetto a partite',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Partite non associate',
          description:
            'Elenco partite senza collegamento a documento o pagamento',
          iconName: 'QuestionMarkCircleIcon',
        },
        {
          title: 'Pagamenti non associati',
          description:
            'Movimenti bancari non ancora abbinati a partite',
          iconName: 'XCircleIcon',
        },
        {
          title: 'Quadratura sottoconti',
          description:
            'Controllo automatico dare/avere per conti marcati',
          iconName: 'CheckBadgeIcon',
        },
        {
          title: 'Riconciliazione bancaria',
          description:
            'Import movimenti e matching automatico con registrazioni',
          iconName: 'BuildingLibraryIcon',
        },
        {
          title: 'Crosscheck automatico',
          description:
            'Validazione coerenza dare/avere e imponibile/IVA',
          iconName: 'ShieldExclamationIcon',
        },
      ],
    },
    {
      id: 'bilancio-stampe',
      name: 'Bilancio e Stampe',
      icon: '📄',
      iconName: 'DocumentChartBarIcon',
      features: [
        {
          title: 'Bilancio di verifica',
          description:
            'Saldi dare/avere per tutti i conti a una data specifica',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Chiusura esercizio',
          description:
            'Generazione scritture di chiusura conti economici',
          iconName: 'LockClosedIcon',
        },
        {
          title: 'Apertura nuovo esercizio',
          description:
            'Ripresa automatica saldi patrimoniali da anno precedente',
          iconName: 'LockOpenIcon',
        },
        {
          title: 'Stampa mastrini',
          description:
            'Dettaglio movimenti per singolo conto con saldi progressivi',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Stampa libro giornale',
          description:
            'Stampa definitiva con progressivi, pagine e totali di trasporto',
          iconName: 'BookOpenIcon',
        },
        {
          title: 'Export Excel completo',
          description:
            'Esportazione bilancio, liquidazione IVA, partite in Excel',
          iconName: 'ArrowDownTrayIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Registrazione automatica fatture vendita e corrispettivi in prima nota',
      benefits: [
        'Fatture vendita registrate automaticamente',
        'Corrispettivi giornalieri in contabilita',
        'Partite clienti create automaticamente',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'acquisti',
      name: 'Modulo Acquisti',
      description:
        'Import fatture elettroniche da SDI e registrazione automatica',
      benefits: [
        'Import automatico fatture passive',
        'Registrazione IVA corretta',
        'Partite fornitori aggiornate',
      ],
      icon: '📦',
      iconName: 'TruckIcon',
      relatedModuleSlug: 'acquisti',
    },
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Contabilizzazione automatica vendite online con IVA corretta',
      benefits: [
        'Vendite B2C registrate',
        'IVA per paese cliente',
        'Riconciliazione gateway pagamento',
      ],
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'raee',
      name: 'Modulo RAEE',
      description:
        'Contabilizzazione contributi RAEE incassati e versati a consorzi',
      benefits: [
        'Contributi RAEE in contabilita',
        'Riconciliazione con CDC',
        'Report fiscali RAEE',
      ],
      icon: '♻️',
      iconName: 'ArrowPathRoundedSquareIcon',
      relatedModuleSlug: 'raee',
    },
    {
      id: 'statistiche',
      name: 'Statistiche & BI',
      description:
        'Analisi dati contabili per KPI finanziari e dashboard',
      benefits: [
        'Dashboard cash-flow',
        'Trend ricavi e costi',
        'Analisi margini per categoria',
      ],
      icon: '📈',
      iconName: 'PresentationChartLineIcon',
      relatedModuleSlug: 'statistiche-bi',
    },
    {
      id: 'zucchetti',
      name: 'Export Zucchetti',
      description:
        'Integrazione con software commercialista formato Zucchetti',
      benefits: [
        'Export mensile automatico',
        'Formato standard Zucchetti',
        'Zero doppia digitazione',
      ],
      icon: '📊',
      iconName: 'ArrowUpTrayIcon',
      externalLink: 'https://www.zucchetti.it',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/contabilita-hero.svg',
      alt: 'Prima nota con registrazione contabile',
      caption: 'Inserimento registrazione con partita doppia automatica',
    },
    {
      src: '/screenshots/moduli/contabilita-partite.svg',
      alt: 'Gestione partite aperte e chiuse',
      caption: 'Estratto conto con saldi e scadenze per cliente',
    },
    {
      src: '/screenshots/moduli/contabilita-iva.svg',
      alt: 'Liquidazione IVA e LIPE',
      caption: 'Calcolo IVA mensile con generazione file LIPE',
    },
    {
      src: '/screenshots/moduli/contabilita-bilancio.svg',
      alt: 'Bilancio e chiusura esercizio',
      caption: 'Bilancio di verifica con chiusura automatica',
    },
  ],

  benefits: [
    {
      title: 'Contabilita real-time',
      metric: '-90% tempo',
      description:
        'Le registrazioni automatiche da Vendite e Acquisti eliminano la doppia digitazione. Contabilita sempre aggiornata senza lavoro manuale.',
    },
    {
      title: 'LIPE automatica',
      metric: '100% compliance',
      description:
        'File XML generato automaticamente per comunicazione periodica IVA. Nessun rischio di errori o ritardi nelle scadenze fiscali.',
    },
    {
      title: 'Cash-flow sotto controllo',
      metric: 'Real-time',
      description:
        'Scadenzari clienti e fornitori aggiornati in tempo reale. Sai sempre quando devi pagare e quando riceverai incassi.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Rivenditore con commercialista esterno',
    customer: 'Negozio elettrodomestici con 200 fatture/mese',
    challenge:
      'Il commercialista riceveva le fatture a fine mese e le registrava manualmente. Contabilita sempre in ritardo di 30 giorni, impossibile conoscere la situazione IVA in tempo reale. Doppia digitazione tra gestionale e contabilita, errori frequenti.',
    solution:
      'Implementato modulo Contabilita con import automatico fatture elettroniche da SDI. Registrazione automatica vendite e acquisti. Export mensile in formato Zucchetti per il commercialista. Liquidazione IVA e LIPE generate automaticamente.',
    results: [
      'Contabilita aggiornata in tempo reale vs ritardo 30 giorni',
      'Tempo commercialista ridotto da 8 a 2 ore/mese (-75%)',
      'Zero errori da doppia digitazione',
      'LIPE generata automaticamente senza intervento manuale',
      'Visibilita cash-flow per decisioni finanziarie informate',
    ],
  },

  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Acquisti', slug: 'acquisti' },
    { name: 'RAEE', slug: 'raee' },
    { name: 'E-commerce', slug: 'ecommerce' },
  ],

  faq: [
    {
      question: 'Le fatture vengono registrate automaticamente in contabilita?',
      answer:
        'Si, ogni fattura emessa (ciclo attivo) o ricevuta (ciclo passivo) viene registrata automaticamente con la causale contabile corretta. Le fatture passive vengono importate da SDI, quelle attive dalla cassa. Zero doppia digitazione.',
    },
    {
      question: 'Come funziona la generazione LIPE?',
      answer:
        'Il sistema calcola automaticamente i dati per la Liquidazione Periodica IVA dal registro IVA. Genera il file XML nel formato richiesto da Agenzia Entrate, pronto per linvio tramite portale o intermediario.',
    },
    {
      question: 'Posso gestire fatture reverse charge e autofatture?',
      answer:
        'Si, il modulo supporta tutti i tipi di fattura: acquisti nazionali, reverse charge, fatture estere UE ed extra-UE. Le autofatture vengono generate automaticamente quando richiesto dalla normativa.',
    },
    {
      question: 'Come funziona la riconciliazione bancaria?',
      answer:
        'Importi i movimenti bancari dal conto corrente (file CSV o CBI) e il sistema li riconcilia automaticamente con pagamenti fatture e movimenti registrati. Evidenzia discordanze e pagamenti non associati per verifica.',
    },
    {
      question: 'Posso esportare i dati per il commercialista?',
      answer:
        'Si, puoi esportare in formati standard compatibili con i principali software: Zucchetti, Teamsystem, Buffetti, Profis. Export mensile con un click. Il commercialista importa i dati senza redigitare nulla.',
    },
    {
      question: 'Come funziona la chiusura di bilancio?',
      answer:
        'A fine anno il sistema genera automaticamente le scritture di chiusura conti economici a Perdite e Profitti e le scritture di riapertura saldi patrimoniali. Puoi fare una preview prima della chiusura definitiva.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
