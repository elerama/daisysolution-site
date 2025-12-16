import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const magazzinoModule: ModuleData = {
  slug: 'magazzino',
  name: 'Magazzino Multi-Sede',
  tagline: 'Gestisci giacenze, movimenti e inventari su più sedi in tempo reale',
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '📦',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'CubeIcon',
  heroIntro:
    'Gestione completa e automatizzata di tutte le operazioni logistiche: multi-magazzino, trasferimenti, inventari, tracking seriali e sincronizzazione e-commerce in tempo reale.',

  overview: {
    intro:
      "Il Modulo Magazzino offre una gestione completa, automatizzata e sempre sotto controllo di tutte le operazioni logistiche, dalle multi-sedi alla singola ubicazione. Monitora seriali, gestisci inventari periodici, trasferimenti tra magazzini e resi ai fornitori con rientri e note di credito in modo semplice e strutturato.",
    mainBenefits: [
      'Giacenze real-time su tutte le sedi',
      'Transfer automatici tra magazzini',
      'Alert giacenze sotto scorta',
      'Inventari con pistola barcode e app DaisyCheck',
    ],
    stats: [
      {
        label: 'Seriali tracciati',
        value: '1M+',
        description: 'per garanzie e compliance',
      },
      {
        label: 'Sedi gestite',
        value: '50+',
        description: 'per singolo cliente catena',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano il modulo Magazzino',
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
      title: 'Multi-sede real-time',
      description:
        'Gestisci giacenze di decine di punti vendita con aggiornamenti istantanei',
      icon: '🏪',
      iconName: 'BuildingStorefrontIcon',
    },
    {
      title: 'Tracking seriali',
      description:
        'Traccia ogni prodotto serializzato per garanzie e compliance',
      icon: '🔢',
      iconName: 'QrCodeIcon',
    },
    {
      title: 'Ubicazioni magazzino',
      description:
        'Organizza il magazzino con scaffali, ripiani e celle per trovare subito la merce',
      icon: '📍',
      iconName: 'MapPinIcon',
    },
    {
      title: 'Transfer inter-sede',
      description:
        'Sposta merce tra negozi con tracking completo e firma digitale',
      icon: '🚚',
      iconName: 'TruckIcon',
    },
    {
      title: 'Inventari periodici',
      description:
        'Esegui inventari con pistola barcode e riconciliazione automatica',
      icon: '📊',
      iconName: 'ClipboardDocumentCheckIcon',
    },
    {
      title: 'Alert scorte',
      description:
        'Ricevi notifiche quando un articolo scende sotto scorta minima',
      icon: '⚠️',
      iconName: 'BellAlertIcon',
    },
    {
      title: 'Carico automatico',
      description: 'Carico merce automatico da ricezione ordini fornitori',
      icon: '⬇️',
      iconName: 'ArrowDownOnSquareIcon',
    },
    {
      title: 'Scarico automatico',
      description: 'Scarico automatico da vendite e scontrini fiscali',
      icon: '⬆️',
      iconName: 'ArrowUpOnSquareIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'gestione-giacenze',
      name: 'Gestione Giacenze',
      icon: '📦',
      iconName: 'CubeIcon',
      features: [
        {
          title: 'Multi-magazzino e multi-sede',
          description:
            'Gestisci giacenze di piu magazzini e punti vendita con visibilita unificata',
          iconName: 'BuildingStorefrontIcon',
        },
        {
          title: 'Giacenze in tempo reale',
          description:
            'Ricalcolo immediato delle disponibilita ad ogni movimento di magazzino',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Avvisi scorte minime',
          description:
            'Alert automatici quando articoli critici scendono sotto la scorta configurata',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Sincronizzazione e-commerce',
          description:
            'Aggiornamento automatico giacenze sui siti B2B e B2C in tempo reale',
          iconName: 'GlobeAltIcon',
        },
        {
          title: 'Gestione ubicazioni',
          description:
            'Organizza scaffali, ripiani e celle per localizzare rapidamente la merce',
          iconName: 'MapPinIcon',
        },
        {
          title: 'Limitazioni utenti',
          description:
            'Controllo permessi per operazioni di carico, scarico e trasferimenti',
          iconName: 'LockClosedIcon',
        },
      ],
    },
    {
      id: 'movimenti-magazzino',
      name: 'Movimenti Magazzino',
      icon: '📥',
      iconName: 'ArrowsUpDownIcon',
      features: [
        {
          title: 'Gestione carichi/scarichi',
          description:
            'Movimenti di carico e scarico con causali personalizzabili e tracciabilita',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Evasione ordini fornitore',
          description:
            'Ricezione merce da ordini con gestione sconti e maggiorazioni',
          iconName: 'InboxArrowDownIcon',
        },
        {
          title: 'Import massivo Excel',
          description:
            'Caricamento multiplo di movimenti e rettifiche da file Excel',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Rivalutazioni',
          description:
            'Gestione rivalutazioni con ricalcolo automatico dei costi di acquisto',
          iconName: 'ArrowTrendingUpIcon',
        },
        {
          title: 'Gestione sellout',
          description:
            'Registrazione vendite sell-out per contributi e premi fornitori',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'Storicita movimentazioni',
          description:
            'Analisi completa dello storico movimenti per ogni articolo',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'trasferimenti',
      name: 'Trasferimenti',
      icon: '🚚',
      iconName: 'TruckIcon',
      features: [
        {
          title: 'Richieste trasferimento',
          description:
            'Creazione richieste di merce tra sedi con notifiche e alert interni',
          iconName: 'PaperAirplaneIcon',
        },
        {
          title: 'Trasferimenti semplificati',
          description:
            'Procedura guidata per spostare merce tra magazzini con un click',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Tracking spedizioni',
          description:
            'Monitoraggio stato trasferimento con firma digitale alla ricezione',
          iconName: 'TruckIcon',
        },
        {
          title: 'Documenti automatici',
          description:
            'Generazione automatica bolle di scarico e carico per ogni trasferimento',
          iconName: 'DocumentDuplicateIcon',
        },
      ],
    },
    {
      id: 'resi-rettifiche',
      name: 'Resi e Rettifiche',
      icon: '↩️',
      iconName: 'ArrowUturnLeftIcon',
      features: [
        {
          title: 'Resi ai fornitori',
          description:
            'Gestione resi con controllo sui rientri merce e tracking stato',
          iconName: 'ArrowUturnLeftIcon',
        },
        {
          title: 'Rientri con nota credito',
          description:
            'Associazione automatica resi a note credito fornitore',
          iconName: 'DocumentMinusIcon',
        },
        {
          title: 'Rettifiche giacenze',
          description:
            'Rettifiche positive e negative con causali e approvazione',
          iconName: 'AdjustmentsHorizontalIcon',
        },
        {
          title: 'Controllo merci',
          description:
            'Verifica merce in entrata e uscita anche tramite app DaisyCheck',
          iconName: 'CheckBadgeIcon',
        },
      ],
    },
    {
      id: 'inventari-seriali',
      name: 'Inventari e Seriali',
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
      features: [
        {
          title: 'Inventari periodici',
          description:
            'Procedura semplificata per inventari parziali o completi di magazzino',
          iconName: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'App DaisyCheck',
          description:
            'Inventari e verifica merce direttamente sul campo con app mobile',
          iconName: 'DevicePhoneMobileIcon',
        },
        {
          title: 'Tracking seriali',
          description:
            'Tracciamento numeri seriali in entrata e uscita per garanzie',
          iconName: 'QrCodeIcon',
        },
        {
          title: 'Riconciliazione automatica',
          description:
            'Confronto giacenze teoriche vs rilevate con generazione rettifiche',
          iconName: 'ScaleIcon',
        },
      ],
    },
    {
      id: 'valorizzazioni-chiusure',
      name: 'Valorizzazioni e Chiusure',
      icon: '💰',
      iconName: 'CalculatorIcon',
      features: [
        {
          title: 'Valorizzazione magazzino',
          description:
            'Calcolo valore giacenze con costo ultimo, medio o LIFO',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Chiusure annuali',
          description:
            'Procedura guidata per chiusura fiscale e storicizzazione costi',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Statistiche sell-in/sell-out',
          description:
            'Analisi complete con margini, giacenze iniziali/finali e rotazione',
          iconName: 'ChartBarIcon',
        },
        {
          title: 'Analisi fatturato',
          description:
            'Report fatturato fornitori e clienti con drill-down dettagliato',
          iconName: 'PresentationChartLineIcon',
        },
        {
          title: 'Export Excel completo',
          description:
            'Esportazione riepilogativa e dettagliata di tutte le funzioni',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Allegati documenti',
          description:
            'Integrazione allegati digitali ai documenti di magazzino',
          iconName: 'PaperClipIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Scarico automatico giacenze da vendite e scontrini fiscali',
      benefits: [
        'Scarico immediato alla vendita',
        'Verifica disponibilita in cassa',
        'Prenotazione merce per clienti',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'acquisti',
      name: 'Modulo Acquisti',
      description:
        'Carico automatico merce da ricezione ordini fornitori',
      benefits: [
        'Carico da evasione ordine',
        'Controllo prezzi e condizioni',
        'Quadratura documenti',
      ],
      icon: '🛒',
      iconName: 'ShoppingBagIcon',
      relatedModuleSlug: 'acquisti',
    },
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Sincronizzazione giacenze con siti B2B e B2C in tempo reale',
      benefits: [
        'Aggiornamento automatico disponibilita',
        'Prenotazione stock per ordini web',
        'Gestione multi-canale',
      ],
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'statistiche',
      name: 'Modulo Statistiche BI',
      description:
        'Analisi rotazione, valorizzazioni e performance magazzino',
      benefits: [
        'Dashboard giacenze real-time',
        'Analisi ABC articoli',
        'Report rotazione e obsolescenza',
      ],
      icon: '📊',
      iconName: 'ChartBarIcon',
      relatedModuleSlug: 'statistiche-bi',
    },
    {
      id: 'riparazioni',
      name: 'Modulo Riparazioni',
      description:
        'Gestione magazzino ricambi e tracking seriali riparati',
      benefits: [
        'Scarico ricambi per riparazioni',
        'Tracking seriali in assistenza',
        'Gestione resi in garanzia',
      ],
      icon: '🔧',
      iconName: 'WrenchScrewdriverIcon',
      relatedModuleSlug: 'riparazioni',
    },
    {
      id: 'daisycheck',
      name: 'App DaisyCheck',
      description:
        'App mobile per inventari, verifica merce e controllo spedizioni',
      benefits: [
        'Inventari con barcode scanner',
        'Verifica merce in entrata',
        'Firma digitale ricezione',
      ],
      icon: '📱',
      iconName: 'DevicePhoneMobileIcon',
      externalLink: 'https://www.elettrorama.com/',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilita',
      description:
        'Valorizzazione fiscale e registrazione movimenti contabili',
      benefits: [
        'Valorizzazione per bilancio',
        'Storicizzazione costi fiscali',
        'Riconciliazione inventariale',
      ],
      icon: '📒',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/magazzino-hero.svg',
      alt: 'Dashboard principale modulo Magazzino',
      caption: 'Cruscotto giacenze multi-sede con alert scorte minime',
    },
    {
      src: '/screenshots/moduli/magazzino-transfer.svg',
      alt: 'Trasferimento inter-sede',
      caption: 'Gestione trasferimenti con tracking e firma digitale',
    },
    {
      src: '/screenshots/moduli/magazzino-inventario.svg',
      alt: 'Inventario con app DaisyCheck',
      caption: 'Procedura inventario con barcode scanner e riconciliazione',
    },
    {
      src: '/screenshots/moduli/magazzino-valorizzazione.svg',
      alt: 'Valorizzazione magazzino',
      caption: 'Report valorizzazione con metodi costo ultimo, medio e LIFO',
    },
  ],

  benefits: [
    {
      title: 'Visibilità completa',
      metric: '100% giacenze',
      description:
        'Conosci sempre la disponibilita reale su tutte le sedi in tempo reale.',
    },
    {
      title: 'Inventario rapido',
      metric: '-80% tempo',
      description: "Con pistola barcode e app DaisyCheck riduci l'inventario da giorni a ore.",
    },
    {
      title: 'Zero rotture stock',
      metric: '98% disponibilita',
      description:
        'Alert automatici garantiscono che non resti mai senza merce in vendita.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Catena Expert 18 negozi',
    customer: 'Catena Expert (18 punti vendita)',
    challenge:
      'Gestione di 18 magazzini con necessita di visibilita unificata e transfer rapidi tra negozi per evadere ordini clienti. Inventari manuali che richiedevano 8 giorni per tutta la rete. Nessuna tracciabilita seriali per garanzie.',
    solution:
      'Implementazione modulo Magazzino multi-sede con transfer automatici e alert condivisi. Ogni negozio vede le giacenze degli altri e puo richiedere merce con un click. Inventari con app DaisyCheck e barcode scanner. Tracking seriali integrato per ogni prodotto.',
    results: [
      '18 magazzini sincronizzati in tempo reale',
      '-65% transfer manuali grazie ad alert intelligenti',
      '+40% ordini evasi da magazzino alternativo',
      'Inventario annuale completato in 2 giorni invece di 8',
      '100% tracciabilita seriali per garanzie',
    ],
  },

  integrations: [
    { name: 'Vendite', slug: 'vendite-cassa' },
    { name: 'Acquisti', slug: 'acquisti' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Statistiche BI', slug: 'statistiche-bi' },
  ],

  faq: [
    {
      question: 'Come funzionano i transfer tra sedi?',
      answer:
        "Puoi creare una richiesta transfer da un negozio all'altro. Il sistema genera automaticamente i documenti di scarico/carico e traccia la spedizione. Il destinatario riceve notifica e puo firmare digitalmente la ricezione tramite app DaisyCheck.",
    },
    {
      question: 'Posso gestire più magazzini fisici nello stesso negozio?',
      answer:
        'Si, ogni sede puo avere piu magazzini (es: punto vendita, deposito, magazzino esterno). Puoi anche definire ubicazioni interne (scaffali, ripiani, celle) per localizzare rapidamente la merce.',
    },
    {
      question: "Come funziona l'inventario con pistola barcode?",
      answer:
        'Scannerizzi i prodotti con pistola barcode o app DaisyCheck, il sistema confronta le quantita rilevate con quelle teoriche e genera automaticamente i documenti di rettifica giacenze. Puoi fare inventari parziali per categoria o zona.',
    },
    {
      question: 'Posso impostare scorte minime diverse per negozio?',
      answer:
        'Si, ogni articolo puo avere scorte minime personalizzate per ogni sede. Gli alert sono specifici per magazzino e puoi configurare notifiche email o push per il responsabile.',
    },
    {
      question: 'Come funziona la valorizzazione magazzino?',
      answer:
        'Il sistema supporta tre metodi di valorizzazione: costo ultimo (ultimo prezzo di acquisto), costo medio ponderato e LIFO. Puoi generare report di valorizzazione per sede, categoria o articolo singolo, ideali per il bilancio fiscale.',
    },
    {
      question: "Come si integra con l'e-commerce?",
      answer:
        'Le giacenze vengono sincronizzate in tempo reale con i tuoi siti B2B e B2C. Quando vendi online, lo stock viene prenotato immediatamente. Puoi configurare buffer di sicurezza e gestire disponibilita diverse per canale.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
