import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const listeRegaloModule: ModuleData = {
  slug: 'liste-regalo',
  name: 'Liste Regalo',
  tagline: 'Gestione completa liste regalo per matrimoni, nascite e ogni evento speciale',
  category: 'Crescita e Sviluppo',
  categoryColor: 'violet',
  icon: '🎁',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'GiftIcon',
  heroIntro:
    'Crea e gestisci liste regalo per matrimoni, nascite, compleanni e ogni evento speciale. Portale online per invitati con pagamenti integrati e tracking quote in tempo reale.',

  overview: {
    intro:
      'Il modulo Liste Regalo trasforma ogni evento in opportunita di revenue ricorrente. Gestisci liste nozze, nascita, compleanno, battesimo, laurea, anniversario con portale web pubblico per invitati. Quote parziali o totali, pagamenti online integrati, tracking real-time, messaggi auguri e impegno automatico giacenze.',
    mainBenefits: [
      'Fidelizzazione clienti per eventi importanti',
      'Revenue ricorrente da liste con margini elevati',
      'Portale online per invitati con pagamenti integrati',
      'Impegno automatico giacenze e multi-punto vendita',
    ],
    stats: [
      {
        label: 'Tipi evento',
        value: '6+',
        description: 'matrimoni, nascite, compleanni e altri',
      },
      {
        label: 'Tracking quote',
        value: 'Real-time',
        description: 'aggiornamento istantaneo online',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano Liste Regalo',
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
      title: 'Gestione eventi',
      description:
        'Matrimoni, nascite, compleanni, battesimi, lauree, anniversari e eventi personalizzati',
      icon: '📅',
      iconName: 'CalendarDaysIcon',
    },
    {
      title: 'Articoli con quote',
      description:
        'Gestione articoli con importo coperto/residuo, quantita e prezzo bloccabile',
      icon: '📦',
      iconName: 'CubeIcon',
    },
    {
      title: 'Portale invitati',
      description:
        'Link dedicato per visualizzazione catalogo e acquisto quote online',
      icon: '🌐',
      iconName: 'GlobeAltIcon',
    },
    {
      title: 'Pagamenti online',
      description:
        'PayPal, bonifico, contrassegno con tracking automatico transazioni',
      icon: '💳',
      iconName: 'CreditCardIcon',
    },
    {
      title: 'Messaggi auguri',
      description:
        'Invitati lasciano messaggi personalizzati visibili ai festeggiati',
      icon: '💬',
      iconName: 'ChatBubbleLeftRightIcon',
    },
    {
      title: 'Blocco prezzi',
      description:
        'Prezzi bloccati per tutta la durata evento, nessuna sorpresa',
      icon: '🔒',
      iconName: 'LockClosedIcon',
    },
    {
      title: 'Impegno merce',
      description:
        'Riserva automatica giacenza su quote pagate, nessun sold-out',
      icon: '📥',
      iconName: 'ArchiveBoxIcon',
    },
    {
      title: 'Calcolo voucher',
      description:
        'Buoni regalo in percentuale o valore fisso sulle quote versate',
      icon: '🎫',
      iconName: 'ReceiptPercentIcon',
    },
    {
      title: 'Report incassi',
      description:
        'Riepilogo per evento, articolo, periodo con analisi marginalita',
      icon: '📊',
      iconName: 'ChartBarIcon',
    },
    {
      title: 'Multi-punto vendita',
      description:
        'Liste condivise tra piu negozi della rete con gestione centralizzata',
      icon: '🏪',
      iconName: 'BuildingStorefrontIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'eventi',
      name: 'Gestione Eventi',
      icon: '📅',
      iconName: 'CalendarDaysIcon',
      features: [
        {
          title: 'Tipi evento',
          description:
            'Matrimonio, nascita, compleanno, battesimo, laurea, anniversario e personalizzati',
          iconName: 'SparklesIcon',
        },
        {
          title: 'Nome e data evento',
          description:
            'Configurazione nome lista e data celebrazione per countdown',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Festeggiati',
          description:
            'Uno o due festeggiati con anagrafica e recapiti completi',
          iconName: 'UserGroupIcon',
        },
        {
          title: 'Note personalizzate',
          description:
            'Note pubbliche per invitati e riservate per il negozio',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Stato evento',
          description:
            'In gestione, Aperto per invitati, Chiuso con riepilogo finale',
          iconName: 'FlagIcon',
        },
        {
          title: 'Auto-chiusura',
          description:
            'Chiusura automatica liste dopo 180 giorni da data evento',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'articoli',
      name: 'Gestione Articoli',
      icon: '📦',
      iconName: 'CubeIcon',
      features: [
        {
          title: 'Aggiunta articoli',
          description:
            'Da catalogo Daisy, banca dati Eldomcat o inserimento manuale',
          iconName: 'PlusCircleIcon',
        },
        {
          title: 'Dettagli articolo',
          description:
            'Descrizione, immagine, prezzo unitario e quantita richiesta',
          iconName: 'InformationCircleIcon',
        },
        {
          title: 'Prezzo bloccato',
          description:
            'Blocca prezzo per evitare variazioni durante evento',
          iconName: 'LockClosedIcon',
        },
        {
          title: 'Ordinamento articoli',
          description:
            'Riordina articoli per priorita e preferenza festeggiati',
          iconName: 'Bars3BottomLeftIcon',
        },
        {
          title: 'Duplicazione',
          description:
            'Duplica articoli esistenti per velocizzare inserimento',
          iconName: 'DocumentDuplicateIcon',
        },
        {
          title: 'Kit e componenti',
          description:
            'Supporto articoli composti e kit regalo con piu prodotti',
          iconName: 'Squares2X2Icon',
        },
      ],
    },
    {
      id: 'quote',
      name: 'Quote e Pagamenti',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
      features: [
        {
          title: 'Quote parziali',
          description:
            'Invitati versano importi parziali fino a copertura totale',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Importo coperto/residuo',
          description:
            'Tracking automatico quota gia versata e rimanente per articolo',
          iconName: 'ScaleIcon',
        },
        {
          title: 'Scadenza prenotazioni',
          description:
            'Termine giorni per conferma pagamento quote prenotate',
          iconName: 'ClockIcon',
        },
        {
          title: 'Incasso parziale/totale',
          description:
            'Registrazione incassi da cassa con collegamento a quote',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'Calcolo voucher',
          description:
            'Buoni regalo in percentuale o valore fisso su quote versate',
          iconName: 'ReceiptPercentIcon',
        },
        {
          title: 'Storico pagamenti',
          description:
            'Cronologia completa versamenti per articolo e invitato',
          iconName: 'ClipboardDocumentListIcon',
        },
      ],
    },
    {
      id: 'portale',
      name: 'Portale Online',
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      features: [
        {
          title: 'Pubblicazione automatica',
          description:
            'Lista pubblicata su link dedicato accessibile agli invitati',
          iconName: 'CloudArrowUpIcon',
        },
        {
          title: 'Accesso web',
          description:
            'Via codice univoco oppure nome festeggiato + data evento',
          iconName: 'KeyIcon',
        },
        {
          title: 'Catalogo articoli',
          description:
            'Visualizzazione articoli disponibili con foto e prezzi',
          iconName: 'RectangleStackIcon',
        },
        {
          title: 'Carrello acquisti',
          description:
            'Selezione articoli e quote con riepilogo prima del checkout',
          iconName: 'ShoppingCartIcon',
        },
        {
          title: 'Checkout pagamento',
          description:
            'PayPal, bonifico bancario o pagamento differito in negozio',
          iconName: 'CreditCardIcon',
        },
        {
          title: 'Conferma ordine',
          description:
            'Ricevuta automatica via email con dettaglio acquisti',
          iconName: 'CheckCircleIcon',
        },
      ],
    },
    {
      id: 'messaggi',
      name: 'Messaggi e Notifiche',
      icon: '💬',
      iconName: 'ChatBubbleLeftRightIcon',
      features: [
        {
          title: 'Messaggi auguri',
          description:
            'Invitati lasciano messaggi personalizzati ai festeggiati',
          iconName: 'ChatBubbleOvalLeftEllipsisIcon',
        },
        {
          title: 'Note riservate',
          description:
            'Annotazioni visibili solo al negozio per gestione interna',
          iconName: 'EyeSlashIcon',
        },
        {
          title: 'Notifiche prenotazioni',
          description:
            'Alert automatici quando un invitato prenota una quota',
          iconName: 'BellIcon',
        },
        {
          title: 'Email conferma',
          description:
            'Conferma pagamento automatica a invitato e festeggiati',
          iconName: 'EnvelopeIcon',
        },
        {
          title: 'Alert scadenze',
          description:
            'Promemoria per quote in scadenza non ancora pagate',
          iconName: 'ExclamationTriangleIcon',
        },
      ],
    },
    {
      id: 'report',
      name: 'Report e Statistiche',
      icon: '📊',
      iconName: 'ChartBarIcon',
      features: [
        {
          title: 'Riepilogo evento',
          description:
            'Totale incassato, quote pagate/pendenti, articoli completati',
          iconName: 'DocumentChartBarIcon',
        },
        {
          title: 'Dettaglio articoli',
          description:
            'Analisi per singolo articolo con lista contribuenti',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Analisi periodo',
          description:
            'Report liste per intervallo date con confronto periodi',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Marginalita negozio',
          description:
            'Calcolo margine su articoli venduti tramite liste regalo',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Storico pagamenti',
          description:
            'Cronologia completa transazioni con filtri avanzati',
          iconName: 'ClockIcon',
        },
        {
          title: 'Export Excel',
          description:
            'Esportazione dati liste e statistiche in formato Excel',
          iconName: 'ArrowDownTrayIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Impegno automatico giacenze quando una quota viene pagata',
      benefits: [
        'Riserva automatica stock',
        'Nessun sold-out su articoli prenotati',
        'Aggiornamento giacenze real-time',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Generazione scontrini e fatture direttamente da liste regalo',
      benefits: [
        'Emissione documenti da lista',
        'Collegamento quote a transazioni',
        'Gestione ritiro articoli',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'acquisti',
      name: 'Modulo Acquisti',
      description:
        'Riordino automatico articoli esauriti o sotto scorta minima',
      benefits: [
        'Alert articoli esauriti',
        'Proposta riordino automatica',
        'Tracking consegne fornitori',
      ],
      icon: '📥',
      iconName: 'TruckIcon',
      relatedModuleSlug: 'acquisti',
    },
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Liste regalo pubblicate e acquistabili sul sito e-commerce',
      benefits: [
        'Portale liste integrato',
        'Pagamenti online nativi',
        'Sync ordini automatica',
      ],
      icon: '🌐',
      iconName: 'GlobeAltIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'comunicazioni',
      name: 'Comunicazioni',
      description:
        'Email automatiche per conferme, notifiche e promemoria',
      benefits: [
        'Email conferma pagamento',
        'Notifiche nuove quote',
        'Promemoria scadenze',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
    {
      id: 'statistiche',
      name: 'Statistiche & BI',
      description:
        'Dashboard analytics dedicate alle performance liste regalo',
      benefits: [
        'KPI liste regalo',
        'Trend conversioni',
        'Analisi marginalita',
      ],
      icon: '📈',
      iconName: 'PresentationChartLineIcon',
      relatedModuleSlug: 'statistiche-bi',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/liste-regalo-hero.svg',
      alt: 'Dashboard gestione liste regalo',
      caption: 'Elenco liste con stato, eventi e quote in tempo reale',
    },
    {
      src: '/screenshots/moduli/liste-regalo-articoli.svg',
      alt: 'Gestione articoli e quote lista',
      caption: 'Articoli con importo coperto, residuo e prenotazioni',
    },
    {
      src: '/screenshots/moduli/liste-regalo-portale.svg',
      alt: 'Portale online per invitati',
      caption: 'Catalogo pubblico con carrello e checkout integrato',
    },
    {
      src: '/screenshots/moduli/liste-regalo-report.svg',
      alt: 'Report incassi e statistiche',
      caption: 'Riepilogo per evento con marginalita e storico pagamenti',
    },
  ],

  benefits: [
    {
      title: 'Revenue elevata',
      metric: '3.5x scontrino',
      description:
        'Lo scontrino medio per acquisti liste e 3.5 volte superiore rispetto alle vendite normali. Margini elevati su prodotti regalo.',
    },
    {
      title: 'Fidelizzazione eventi',
      metric: '85% conversione',
      description:
        "L'85% degli invitati che visualizza una lista effettua un acquisto. Il portale web aumenta il tasso di conversione del 40% rispetto alle liste tradizionali.",
    },
    {
      title: 'Clienti lifetime',
      metric: 'Multi-evento',
      description:
        'Una coppia che crea la lista nozze torna per lista nascita, compleanni, anniversari. Fidelizzazione per anni con revenue ricorrente.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Negozio specializzato casalinghi',
    customer: 'Rivenditore casalinghi e piccoli elettrodomestici',
    challenge:
      'Gestiva liste nozze su fogli carta. Gli invitati dovevano venire in negozio per vedere la lista, molti rinunciavano per distanza. Sposi non sapevano cosa era stato acquistato fino al giorno del ritiro. Revenue liste in calo.',
    solution:
      'Implementato modulo Liste Regalo con portale web pubblico. Sposi creano la lista online o in negozio, invitati accedono al portale da casa, acquistano online con PayPal o bonifico. Tracking real-time quote e messaggi auguri integrati.',
    results: [
      'Revenue liste +120% in un anno',
      'Tasso conversione invitati da 45% a 85%',
      'Scontrino medio liste: 285 euro (prima 140 euro)',
      '60% invitati acquista online, 40% ritira in negozio',
      'Zero sold-out grazie a impegno automatico giacenze',
    ],
  },

  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
    { name: 'Magazzino', slug: 'magazzino' },
  ],

  faq: [
    {
      question: 'Quali tipi di eventi posso gestire?',
      answer:
        'Il sistema supporta matrimoni, nascite, compleanni, battesimi, lauree, anniversari e eventi personalizzati. Ogni tipologia puo avere template e regole diverse per adattarsi alle esigenze specifiche.',
    },
    {
      question: 'Come funziona il portale online per gli invitati?',
      answer:
        'Gli invitati accedono al portale tramite codice univoco o cercando nome festeggiato + data evento. Visualizzano il catalogo articoli disponibili, selezionano le quote da acquistare e completano il pagamento online con PayPal o bonifico.',
    },
    {
      question: 'Quali metodi di pagamento sono supportati?',
      answer:
        'Il portale online supporta PayPal, bonifico bancario e pagamento differito in negozio. In cassa puoi registrare pagamenti in contanti, carta, assegno e tutte le forme previste dal POS.',
    },
    {
      question: 'Posso bloccare i prezzi per tutta la durata evento?',
      answer:
        'Si, ogni articolo puo avere il flag "prezzo bloccato" attivo. In questo modo il prezzo rimane invariato per tutta la durata della lista, anche se il listino cambia. Gli invitati vedono sempre il prezzo concordato.',
    },
    {
      question: 'Come funziona impegno merce sulle quote?',
      answer:
        'Quando un invitato paga una quota, il sistema puo riservare automaticamente la giacenza in magazzino. In questo modo larticolo non va mai in sold-out e i festeggiati sono certi di ricevere il regalo.',
    },
    {
      question: 'Posso gestire liste regalo su piu punti vendita?',
      answer:
        'Si, le liste possono essere condivise tra piu negozi della rete. Un invitato puo acquistare una quota in qualsiasi punto vendita, e i festeggiati possono ritirare i regali dove preferiscono.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
