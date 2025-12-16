import { CLIENTS, METRICS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const acquistiModule: ModuleData = {
  slug: 'acquisti',
  name: 'Acquisti',
  tagline: "Gestione completa ordini a fornitori e centrali d'acquisto",
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '🛒',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'ShoppingBagIcon',
  heroIntro:
    'Pianificazione intelligente e controllo totale sugli acquisti: gestisci ordini a fornitori e centrali, calcola fabbisogni, genera proposte automatiche e quadra documenti con un unico sistema integrato.',

  overview: {
    intro:
      "Il Modulo Acquisti di DaisySolution ottimizza ogni fase del processo di approvvigionamento, dalla creazione degli ordini alla quadratura finale dei documenti. Inserisci e gestisci ordini a fornitori e centrali d'acquisto, controlla scadenze e debiti, applica sconti o maggiorazioni e invia ordini in modo rapido e sicuro, anche da piu account contemporaneamente.",
    mainBenefits: [
      'Integrazione diretta centrali acquisto',
      'Proposte ordine automatiche da giacenze e venduto',
      'Quadratura documenti fattura/carico/ordine',
      'Controllo costi e scadenziario fornitori',
    ],
    stats: [
      {
        label: 'Riduzione errori',
        value: `${METRICS.orderErrorReductionPercent}%`,
        description: 'grazie a ordini automatici',
      },
      {
        label: 'Tempo medio ordine',
        value: `${METRICS.avgOrderTimeMinutes} min`,
        description: 'per creare e inviare',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano il modulo Acquisti',
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
      title: 'Ordini fornitori',
      description:
        'Crea ordini con condizioni commerciali personalizzate per fornitore',
      icon: '📝',
      iconName: 'ClipboardDocumentListIcon',
    },
    {
      title: 'Ricezione merce',
      description:
        'Ricevi merce con generazione automatica bolle carico magazzino',
      icon: '📥',
      iconName: 'InboxArrowDownIcon',
    },
    {
      title: 'Ordini a centrale',
      description: 'Ordini automatici a centrali Unieuro, Expert, Domex, Gaer',
      icon: '🔗',
      iconName: 'LinkIcon',
    },
    {
      title: 'Import listini',
      description:
        'Importazione automatica listini fornitori in Excel, CSV, XML',
      icon: '📊',
      iconName: 'ArrowDownTrayIcon',
    },
    {
      title: 'Fatture passive',
      description:
        'Registrazione fatture acquisto e note credito con controllo prezzi',
      icon: '📄',
      iconName: 'DocumentTextIcon',
    },
    {
      title: 'Resi fornitori',
      description: 'Gestione resi e sostituzioni merce difettosa',
      icon: '↩️',
      iconName: 'ArrowUturnLeftIcon',
    },
    {
      title: 'Proposte ordine',
      description:
        'Sistema suggerisce ordini basandosi su giacenze e vendite storiche',
      icon: '🤖',
      iconName: 'SparklesIcon',
    },
    {
      title: 'Controllo sconti',
      description:
        'Verifica automatica sconti quantita e condizioni pagamento',
      icon: '💰',
      iconName: 'ReceiptPercentIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'ordini-fornitori',
      name: 'Ordini Fornitori',
      icon: '📝',
      iconName: 'ClipboardDocumentListIcon',
      features: [
        {
          title: 'Gestione ordini a fornitori',
          description:
            'Crea ordini di acquisto con condizioni commerciali personalizzate per ogni fornitore',
          iconName: 'DocumentPlusIcon',
        },
        {
          title: 'Ordini a centrale acquisto',
          description:
            'Invio ordini automatico a centrali Unieuro, Expert, GRE, Domex e altre',
          iconName: 'BuildingOffice2Icon',
        },
        {
          title: 'Inserimento multi-account',
          description:
            'Memorizza e invia ordini da piu account diversi contemporaneamente',
          iconName: 'UserGroupIcon',
        },
        {
          title: 'Gestione sconti e maggiorazioni',
          description:
            'Applica sconti quantita, maggiorazioni e condizioni speciali agli ordini',
          iconName: 'ReceiptPercentIcon',
        },
        {
          title: 'Riepilogo ordini inviati',
          description:
            'Cruscotto con stato aggiornato di tutti gli ordini: salvato, inviato, elaborato',
          iconName: 'QueueListIcon',
        },
        {
          title: 'Tracciamento per articolo',
          description:
            'Dettaglio e storico acquisti per singolo articolo con gestione back order',
          iconName: 'MagnifyingGlassIcon',
        },
      ],
    },
    {
      id: 'previsione-fabbisogni',
      name: 'Previsione Fabbisogni',
      icon: '📊',
      iconName: 'ChartBarSquareIcon',
      features: [
        {
          title: 'Reintegro prodotti venduti',
          description:
            'Calcolo automatico quantita da riordinare in base al venduto recente',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Fabbisogno periodico',
          description:
            'Analisi fabbisogno prodotti venduti/ordinati su base giornaliera, settimanale o mensile',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Controllo sovra scorte',
          description:
            'Identifica articoli con eccesso di stock rispetto al venduto per ottimizzare gli acquisti',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Calcolo scorte minime',
          description:
            'Definizione automatica livelli scorta minima basati su rotazione e lead time',
          iconName: 'ArrowTrendingDownIcon',
        },
        {
          title: 'Previsione da venduto storico',
          description:
            'Algoritmo predittivo che analizza lo storico vendite per stimare i fabbisogni futuri',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Proposte ordine automatiche',
          description:
            'Generazione automatica proposte ordini a fornitori con un click di conferma',
          iconName: 'SparklesIcon',
        },
      ],
    },
    {
      id: 'documenti-acquisto',
      name: 'Documenti Acquisto',
      icon: '📄',
      iconName: 'DocumentTextIcon',
      features: [
        {
          title: 'Ricezione merce',
          description:
            'Registrazione bolle di carico con controllo automatico su ordine originale',
          iconName: 'InboxArrowDownIcon',
        },
        {
          title: 'Fatture passive',
          description:
            'Registrazione fatture acquisto con verifica prezzi e condizioni contrattuali',
          iconName: 'DocumentCheckIcon',
        },
        {
          title: 'Note di credito',
          description:
            'Gestione note credito fornitore con associazione a fatture originali',
          iconName: 'DocumentMinusIcon',
        },
        {
          title: 'Resi fornitori',
          description:
            'Gestione resi e sostituzioni merce difettosa con tracking stato',
          iconName: 'ArrowUturnLeftIcon',
        },
        {
          title: 'Rivalutazioni',
          description:
            'Gestione rivalutazioni prezzi e aggiornamenti condizioni post-fattura',
          iconName: 'ArrowTrendingUpIcon',
        },
        {
          title: 'Quadratura documenti',
          description:
            'Associazione e riconciliazione documenti acquisto a fatture/note credito/resi',
          iconName: 'CheckBadgeIcon',
        },
      ],
    },
    {
      id: 'scadenziario',
      name: 'Scadenziario e Pagamenti',
      icon: '💰',
      iconName: 'BanknotesIcon',
      features: [
        {
          title: 'Scadenziario fornitori',
          description:
            'Gestione completa scadenze pagamento con alert automatici',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Gestione contributi sellout',
          description:
            'Tracciamento premi, incentivi e contributi commerciali da fornitori',
          iconName: 'GiftIcon',
        },
        {
          title: 'Controllo debiti',
          description:
            'Visibilita completa su debiti verso fornitori con situazione contabile',
          iconName: 'CurrencyEuroIcon',
        },
      ],
    },
    {
      id: 'ordini-centrale',
      name: 'Ordini a Centrale',
      icon: '🔗',
      iconName: 'LinkIcon',
      features: [
        {
          title: 'Collegamento centrali acquisto',
          description:
            'Integrazione nativa con Unieuro, Expert, GRE, Domex, Gaer e altre centrali',
          iconName: 'BuildingLibraryIcon',
        },
        {
          title: 'Ordini automatici',
          description:
            'Invio ordini in formato elettronico con conferma automatica ricezione',
          iconName: 'PaperAirplaneIcon',
        },
        {
          title: 'Import listini fornitori',
          description:
            'Importazione automatica listini in Excel, CSV, XML con aggiornamento prezzi',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Sincronizzazione catalogo',
          description:
            'Allineamento automatico anagrafica articoli con catalogo centrale',
          iconName: 'ArrowsRightLeftIcon',
        },
      ],
    },
    {
      id: 'reporting',
      name: 'Reporting e Analisi',
      icon: '📈',
      iconName: 'PresentationChartLineIcon',
      features: [
        {
          title: 'Report acquisti',
          description:
            'Analisi dettagliate acquisti per fornitore, categoria, periodo',
          iconName: 'ChartBarIcon',
        },
        {
          title: 'Export Excel e PDF',
          description:
            'Esportazione riepilogativa e dettagliata di tutti i report del modulo',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Statistiche fornitori',
          description:
            'Confronto performance fornitori: puntualita, prezzi, qualita merce',
          iconName: 'UsersIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Collegamento diretto per carico automatico merce e gestione giacenze',
      benefits: [
        'Carico automatico da ricezione ordini',
        'Verifica disponibilita in tempo reale',
        'Gestione ubicazioni e lotti',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilita',
      description:
        'Integrazione per contabilizzazione automatica fatture passive',
      benefits: [
        'Registrazione automatica fatture acquisto',
        'Gestione scadenzario integrato',
        'Riconciliazione pagamenti fornitori',
      ],
      icon: '📒',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'webservice',
      name: 'Modulo Import/Export',
      description: 'Importazione listini e scambio dati con sistemi esterni',
      benefits: [
        'Import listini Excel, CSV, XML',
        'Export ordini per sistemi terzi',
        'Integrazione API fornitori',
      ],
      icon: '🔄',
      iconName: 'ArrowsRightLeftIcon',
      relatedModuleSlug: 'webservice',
    },
    {
      id: 'centrale-unieuro',
      name: 'Centrale Unieuro',
      description:
        'Collegamento certificato con centrale Unieuro per ordini e listini',
      benefits: [
        'Ordini automatici a centrale',
        'Ricezione conferme in tempo reale',
        'Aggiornamento listini giornaliero',
      ],
      icon: '🔵',
      iconName: 'BuildingOffice2Icon',
      externalLink: 'https://www.unieuro.it/',
    },
    {
      id: 'centrale-expert',
      name: 'Centrale Expert/GRE',
      description:
        'Integrazione con gruppi Expert e GRE per ordini centralizzati',
      benefits: [
        'Supporto multi-centrale',
        'Gestione codici articolo centrale',
        'Tracking stato ordini',
      ],
      icon: '🟢',
      iconName: 'BuildingStorefrontIcon',
      externalLink: 'https://www.expert.it/',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/acquisti-hero.svg',
      alt: 'Dashboard principale modulo Acquisti',
      caption: 'Cruscotto ordini con stato e riepilogo fornitori',
    },
    {
      src: '/screenshots/moduli/acquisti-ordine.svg',
      alt: 'Creazione ordine fornitore',
      caption: 'Inserimento ordine con condizioni commerciali',
    },
    {
      src: '/screenshots/moduli/acquisti-fabbisogno.svg',
      alt: 'Calcolo fabbisogno e proposte ordine',
      caption: 'Analisi fabbisogni e generazione proposte automatiche',
    },
    {
      src: '/screenshots/moduli/acquisti-quadratura.svg',
      alt: 'Quadratura documenti acquisto',
      caption: 'Riconciliazione fatture con documenti di carico',
    },
  ],

  benefits: [
    {
      title: 'Integrazione centrali',
      metric: `-${METRICS.orderErrorReductionPercent}% errori`,
      description:
        'Ordini automatici eliminano errori di codifica e riducono drasticamente il lavoro manuale.',
    },
    {
      title: 'Listini aggiornati',
      metric: 'Tempo reale',
      description:
        'Import automatico listini fornitori: prezzi sempre aggiornati senza errori di trascrizione.',
    },
    {
      title: 'Proposte intelligenti',
      metric: '+30% rotazione',
      description:
        'Il sistema suggerisce cosa ordinare basandosi su vendite e giacenze, riducendo rotture di stock.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Rete Expert 12 punti vendita',
    customer: 'Rete affiliati Expert (12 negozi)',
    challenge:
      "Gestione manuale ordini a Centrale Expert con invio tramite portale web, errori frequenti di codifica articoli e difficolta nel prevedere i fabbisogni. Listini cartacei obsoleti e impossibilita di tracciare lo stato degli ordini inviati.",
    solution:
      'Attivazione modulo Acquisti con collegamento a centrale Expert e calcolo fabbisogni automatico. Sistema propone ordini basandosi su vendite storiche e scorte minime, con invio diretto a centrale e tracking stato in tempo reale. Import automatico listini ogni notte.',
    results: [
      '-95% errori inserimento ordini grazie a codifica automatica',
      'Tempo ordine ridotto da 30 a 3 minuti per singolo ordine',
      'Listini sempre aggiornati con import automatico notturno',
      '+30% rotazione magazzino grazie a proposte ordine intelligenti',
      'Quadratura documenti da 4 ore a 30 minuti settimanali',
    ],
  },

  integrations: [
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Contabilita', slug: 'contabilita' },
    { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
    { name: 'Import/Export', slug: 'webservice' },
  ],

  faq: [
    {
      question: "Quali centrali d'acquisto sono supportate?",
      answer:
        "Supportiamo le principali centrali: Unieuro, Expert, Domex, Gaer, Euronics, Trony, GRE e altre. L'integrazione e certificata e testata quotidianamente con invio automatico ordini e ricezione conferme.",
    },
    {
      question: 'Come funzionano le proposte ordine automatiche?',
      answer:
        "Il sistema analizza le vendite degli ultimi mesi, le giacenze attuali, le scorte minime e i lead time fornitori. Genera automaticamente una proposta di ordine ottimizzata che puoi confermare, modificare o inviare con un click.",
    },
    {
      question: 'Posso gestire ordini anche a fornitori tradizionali?',
      answer:
        'Si, per fornitori non collegati alle centrali puoi creare ordini manuali che vengono poi stampati, esportati in PDF o inviati via email. Il carico merce e la quadratura documenti funzionano allo stesso modo per tutti i fornitori.',
    },
    {
      question: 'Come vengono importati i listini fornitori?',
      answer:
        'Supportiamo Excel, CSV, XML e formati standard delle centrali. Puoi impostare import automatici programmati (es: ogni notte) o manuali on-demand. Il sistema aggiorna prezzi, condizioni e disponibilita mantenendo lo storico.',
    },
    {
      question: 'Come funziona la quadratura documenti?',
      answer:
        'Il sistema associa automaticamente i documenti di carico (bolle) agli ordini originali, poi le fatture ai carichi. Evidenzia discrepanze su prezzi, quantita e condizioni per una verifica rapida prima della contabilizzazione.',
    },
    {
      question: "E' possibile gestire piu account per la stessa centrale?",
      answer:
        "Si, puoi configurare piu account per ogni centrale (es: account per punto vendita diversi o per categorie merceologiche). Il sistema memorizza le credenziali e permette di selezionare l'account al momento dell'invio ordine.",
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
