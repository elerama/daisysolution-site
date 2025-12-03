import { formatNumber, INFRASTRUCTURE, METRICS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const venditeCassaModule: ModuleData = {
  slug: 'vendite-cassa',
  name: 'Vendite & Cassa',
  tagline: "Gestisci l'intero ciclo di vendita, da preventivo a scontrino fiscale",
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '🛒',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'ShoppingCartIcon',
  heroIntro:
    'Il cuore operativo del tuo negozio: gestisci vendite, scontrini, fatture e fidelity card in un unico sistema. Funziona anche offline.',

  overview: {
    intro:
      "Il modulo Vendite & Cassa e il cuore operativo di Daisy Solution. Gestisce l'intero ciclo di vendita: preventivi, ordini clienti, documenti di trasporto, fatture immediate e differite, scontrini fiscali con POS integrato. Sistema di fidelity card e modalita offline per garantire continuita operativa anche senza connessione Internet.",
    mainBenefits: [
      'Ciclo vendita completo integrato',
      'Modalita offline: vendi sempre, anche senza Internet',
      'Fidelizzazione clienti con punti fedelta',
      'Report vendite real-time per articolo/cliente',
    ],
    stats: [
      {
        label: 'Vendite elaborate',
        value: `${formatNumber(METRICS.yearlySalesManaged)}`,
        description: "nell'ultimo anno",
      },
      {
        label: 'Postazioni gestite',
        value: `${INFRASTRUCTURE.dailyCashRegisters}+`,
        description: 'attive ogni giorno',
      },
      {
        label: 'Tempo medio',
        value: `${METRICS.avgSaleSeconds} secondi`,
        description: 'per eseguire una vendita',
      },
      {
        label: 'Uptime garantito',
        value: `${SLA.uptimePercent}%`,
        description: 'disponibilita del servizio',
      },
    ],
  },
  features: [
    {
      title: 'Preventivi veloci',
      description:
        'Crea preventivi professionali e convertili in ordini con un click',
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
    },
    {
      title: 'Ordini clienti',
      description:
        'Gestisci ordini B2B e B2C con tracking completo evasione',
      icon: '📦',
      iconName: 'CubeIcon',
    },
    {
      title: 'DDT e fatture',
      description:
        'Emetti documenti di trasporto e fatture immediate o differite',
      icon: '📄',
      iconName: 'DocumentTextIcon',
    },
    {
      title: 'Scontrini POS',
      description:
        'Registratore di cassa fiscale integrato con chiusura giornaliera',
      icon: '🧾',
      iconName: 'ReceiptPercentIcon',
    },
    {
      title: 'Modalità offline',
      description: 'Vendi sempre, anche senza connessione Internet',
      icon: '🔌',
      iconName: 'BoltSlashIcon',
    },
    {
      title: 'Fidelity card',
      description: 'Sistema punti fedeltà per premiare clienti abituali',
      icon: '🎯',
      iconName: 'UserGroupIcon',
    },
    {
      title: 'Pagamenti multipli',
      description:
        'Contante, carta, bonifico, finanziamento in un solo ordine',
      icon: '💳',
      iconName: 'CreditCardIcon',
    },
    {
      title: 'Buoni e gift card',
      description: 'Gestione buoni spesa e gift card ricaricabili',
      icon: '🎁',
      iconName: 'GiftIcon',
    },
  ],
  benefits: [
    {
      title: 'Zero perdite vendite',
      metric: '100% operatività',
      description:
        'La modalità offline garantisce che tu possa vendere sempre, anche con Internet assente.',
    },
    {
      title: 'Ciclo vendita completo',
      description:
        'Da preventivo a fattura, tutto è integrato. Zero doppia digitazione, zero errori di trascrizione.',
    },
    {
      title: 'Clienti fidelizzati',
      metric: '+35% ritorno',
      description:
        'Sistema punti fedeltà aumenta il tasso di ritorno clienti del 35%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena Unieuro 270 affiliati',
    customer: 'Unieuro (270 negozi affiliati)',
    challenge:
      "Gestire 900 postazioni vendita con continuità operativa anche in caso di problemi di connessione Internet. Necessità di avere giacenze aggiornate in tempo reale tra tutti i negozi.",
    solution:
      "Implementazione modulo Vendite con modalità offline e sincronizzazione cloud. Ogni postazione può operare autonomamente e sincronizza automaticamente quando la connessione è disponibile.",
    results: [
      '100% uptime operativo (zero perdite vendite)',
      '900 postazioni attive gestite centralmente',
      'Sincronizzazione giacenze real-time tra negozi',
      'Report vendite consolidati per tutta la rete',
    ],
  },
  integrations: [
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Contabilità', slug: 'contabilita' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Statistiche BI', slug: 'statistiche-bi' },
  ],
  faq: [
    {
      question: 'Come funziona la modalità offline?',
      answer:
        "Il sistema salva localmente tutte le transazioni quando Internet non è disponibile. Appena la connessione torna, sincronizza automaticamente tutto con il cloud senza perdere nessun dato.",
    },
    {
      question: 'Posso gestire più casse contemporaneamente?',
      answer:
        'Sì, puoi gestire un numero illimitato di postazioni vendita. Tutte sincronizzano giacenze e clienti in tempo reale.',
    },
    {
      question: 'Il sistema fidelity è personalizzabile?',
      answer:
        'Completamente. Puoi definire regole punti, soglie premi, promozioni esclusive per clienti fedeli e molto altro.',
    },
    {
      question: 'Quali stampanti fiscali sono supportate?',
      answer:
        'Supportiamo tutte le principali stampanti fiscali certificate (Epson, Custom, RCH). Configurazione automatica tramite driver.',
    },
  ],

  // Dati v2
  featureCategories: [
    {
      id: 'documenti',
      name: 'Documenti di Vendita',
      icon: '📄',
      iconName: 'DocumentTextIcon',
      features: [
        {
          title: 'Gestione preventivi',
          description:
            'Crea preventivi professionali e convertili in ordini con un click',
          iconName: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Ordini clienti B2B/B2C',
          description:
            'Gestisci ordini clienti provenienti anche da siti e-commerce B2B e B2C',
          iconName: 'CubeIcon',
        },
        {
          title: 'Gestione acconti',
          description: 'Registra e traccia acconti su ordini clienti',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'DDT',
          description:
            'Emetti documenti di trasporto per le vendite con consegna',
          iconName: 'TruckIcon',
        },
        {
          title: 'Fatture immediate e differite',
          description:
            'Emetti fatture immediate o differite con generazione automatica file XML',
          iconName: 'DocumentDuplicateIcon',
        },
        {
          title: 'Fatture di servizi',
          description:
            'Gestisci fatturazione per servizi aggiuntivi (garanzie, riparazioni, consulenze)',
          iconName: 'WrenchScrewdriverIcon',
        },
        {
          title: 'Scontrini fiscali',
          description:
            'Emissione scontrini con registratore di cassa fiscale integrato e chiusura giornaliera',
          iconName: 'ReceiptPercentIcon',
        },
      ],
    },
    {
      id: 'incassi',
      name: 'Incassi e Pagamenti',
      icon: '💳',
      iconName: 'CreditCardIcon',
      features: [
        {
          title: 'Modalita incasso multiple',
          description:
            'Contanti, POS, bonifici bancari, finanziamenti in un solo ordine',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Gift card e buoni',
          description:
            'Accetta pagamenti con gift card, buoni spesa e altre soluzioni',
          iconName: 'GiftIcon',
        },
        {
          title: 'Gestione crediti clienti',
          description:
            'Traccia crediti clienti con scadenziario e incassi differiti',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'fidelizzazione',
      name: 'Fidelizzazione',
      icon: '🎯',
      iconName: 'HeartIcon',
      features: [
        {
          title: 'Fidelity card',
          description:
            'Sistema punti fedelta per premiare clienti abituali con regole personalizzabili',
          iconName: 'IdentificationIcon',
        },
        {
          title: 'Gift card',
          description:
            'Gestione gift card ricaricabili per aumentare le vendite',
          iconName: 'GiftIcon',
        },
        {
          title: 'Buoni di spesa',
          description: 'Emetti e gestisci buoni spesa per promozioni e resi',
          iconName: 'TicketIcon',
        },
      ],
    },
    {
      id: 'resi-servizi',
      name: 'Resi e Servizi',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
      features: [
        {
          title: 'Gestione resi',
          description:
            'Elabora resi con restituzione denaro o emissione buono di spesa',
          iconName: 'ArrowUturnLeftIcon',
        },
        {
          title: 'Vendita servizi',
          description:
            'Vendi garanzie supplementari, ricariche telefoniche e altri servizi',
          iconName: 'ShieldCheckIcon',
        },
      ],
    },
    {
      id: 'reporting',
      name: 'Reporting e Controllo',
      icon: '📊',
      iconName: 'ChartBarIcon',
      features: [
        {
          title: 'Riepilogo vendite',
          description:
            'Monitora in modo chiaro ogni operazione con dettaglio vendite',
          iconName: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'Controllo cassa',
          description:
            'Verifica operazioni di cassa per maggiore sicurezza e trasparenza',
          iconName: 'CalculatorIcon',
        },
        {
          title: 'Esportazioni Excel',
          description: 'Esporta dati per analisi e reportistica personalizzata',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Statistiche avanzate',
          description:
            'Analisi dettagliate ordini e vendite per articolo, cliente, operatore',
          iconName: 'PresentationChartLineIcon',
        },
      ],
    },
    {
      id: 'offline',
      name: 'Modalita Offline',
      icon: '🔌',
      iconName: 'BoltSlashIcon',
      features: [
        {
          title: 'Scontrini offline',
          description: 'Emetti scontrini anche senza connessione Internet',
          iconName: 'SignalSlashIcon',
        },
        {
          title: 'Chiusura cassa offline',
          description:
            'Chiudi la cassa con salvataggio sicuro dei dati, sincronizzazione automatica al ripristino connessione',
          iconName: 'CloudArrowUpIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'daisyfast',
      name: 'DaisyFast',
      description:
        'Applicazione per vendite veloci anche in assenza di connessione Internet',
      benefits: [
        'Vendite rapide',
        'Funziona offline con sincronizzazione automatica',
        'Ideale per fiere, eventi e vendite fuori sede',
      ],
      icon: '⚡',
      iconName: 'BoltIcon',
    },
    {
      id: 'ecommerce-orders',
      name: 'Ordini E-commerce',
      description: 'Collegamento ordini da siti e-commerce B2B e B2C',
      benefits: [
        'Importazione automatica ordini online',
        'Sincronizzazione giacenze in tempo reale',
        'Gestione unificata ordini fisici e digitali',
      ],
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'contabilita-link',
      name: 'Contabilita',
      description:
        'Collegamento diretto alla contabilita per corrispettivi e fatture',
      benefits: [
        'Registrazione automatica corrispettivi',
        'Contabilizzazione fatture con modalita incasso',
        'Eliminazione doppia digitazione',
      ],
      icon: '📒',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'liste-regalo',
      name: 'Lista Regali',
      description: 'Collegamento con modulo lista regali per eventi speciali',
      benefits: [
        'Gestione liste nozze e battesimi',
        'Prenotazione articoli da lista',
        'Report contributi ricevuti',
      ],
      icon: '🎁',
      iconName: 'GiftIcon',
      relatedModuleSlug: 'liste-regalo',
    },
    {
      id: 'pos-integration',
      name: 'POS',
      description:
        'Collegamento con terminali POS per scambio importo automatico',
      benefits: [
        'Invio automatico importo al POS',
        'Conferma pagamento in tempo reale',
        'Eliminazione errori di digitazione',
      ],
      icon: '💳',
      iconName: 'CreditCardIcon',
    },
    {
      id: 'casse-automatiche',
      name: 'Casse Automatiche',
      description:
        'Integrazione con casse automatiche per pagamenti self-service',
      benefits: [
        'Pagamenti automatizzati senza operatore',
        'Riduzione code alla cassa',
        'Gestione resto automatica',
      ],
      icon: '🏧',
      iconName: 'BanknotesIcon',
    },
    {
      id: 'aruba',
      name: 'Aruba',
      description:
        'Collegamento con Aruba per invio automatico fatture elettroniche',
      benefits: [
        'Invio automatico al Sistema di Interscambio',
        'Conservazione digitale a norma',
        'Notifiche stato fatture',
      ],
      icon: '📤',
      iconName: 'CloudArrowUpIcon',
      externalLink: 'https://www.aruba.it/fatturazione-elettronica.aspx',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/vendite-cassa-hero.svg',
      alt: 'Schermata principale del modulo Vendite e Cassa',
      caption: 'Dashboard vendite con riepilogo giornaliero',
    },
    {
      src: '/screenshots/moduli/vendite-cassa-scontrino.svg',
      alt: 'Emissione scontrino fiscale',
      caption: 'Emissione scontrino con pagamenti multipli',
    },
    {
      src: '/screenshots/moduli/vendite-cassa-fidelity.svg',
      alt: 'Gestione fidelity card',
      caption: 'Sistema fidelity con accumulo punti',
    },
    {
      src: '/screenshots/moduli/vendite-cassa-fattura.svg',
      alt: 'Emissione fattura elettronica',
      caption: 'Fatturazione elettronica con invio automatico',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2024-12-01',
  },
}
