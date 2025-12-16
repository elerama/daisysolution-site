import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const riparazioniModule: ModuleData = {
  slug: 'riparazioni',
  name: 'Riparazioni',
  tagline: 'Gestisci il laboratorio con tracking interventi, ricambi e Model Assistance',
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '🔧',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'WrenchScrewdriverIcon',
  heroIntro:
    "Gestisci l'intero ciclo di assistenza dalla ricezione alla consegna: tracking completo, documenti automatici DDT, preventivi, garanzie e integrazione con centri riparazione esterni.",

  overview: {
    intro:
      'Il modulo Riparazioni trasforma il tuo laboratorio in un centro assistenza professionale. Gestisci accettazioni, diagnosi, riparazioni, ricambi e manodopera. Integrazione diretta con Model Assistance (2000+ clienti help desk) per ticket assistenza e gestione garanzie convenzionali ed estese. Notifiche SMS automatiche ai clienti.',
    mainBenefits: [
      'Tracking completo stato riparazioni real-time',
      'Clienti sempre informati con notifiche automatiche',
      'Documenti DDT automatici per ogni fase',
      'Report redditivita laboratorio per ricambi e assistenza',
    ],
    stats: [
      {
        label: 'Riduzione tempi',
        value: '-40%',
        description: 'con tracking ottimizzato',
      },
      {
        label: 'Soddisfazione clienti',
        value: '95%',
        description: 'grazie a notifiche automatiche',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano il modulo Riparazioni',
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
      title: 'Accettazione rapida',
      description:
        'Registra diagnosi iniziale e crea ticket riparazione in pochi secondi',
      icon: '📝',
      iconName: 'ClipboardDocumentCheckIcon',
    },
    {
      title: 'Stati riparazione',
      description:
        'Ricevuto, diagnosi, riparato, pronto: visibilita totale del processo',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Gestione ricambi',
      description:
        'Scarico automatico ricambi da magazzino con tracking costi',
      icon: '⚙️',
      iconName: 'CogIcon',
    },
    {
      title: 'Preventivi cliente',
      description:
        'Genera preventivi riparazione con manodopera e ricambi',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
    },
    {
      title: 'Model Assistance',
      description:
        'Integrazione con piattaforma help desk per 2000+ clienti',
      icon: '🎧',
      iconName: 'LifebuoyIcon',
    },
    {
      title: 'Garanzie integrate',
      description:
        'Gestione riparazioni in garanzia convenzionale ed estesa',
      icon: '🛡️',
      iconName: 'ShieldCheckIcon',
    },
    {
      title: 'Alert SLA',
      description:
        'Notifiche automatiche se i tempi di riparazione superano la soglia',
      icon: '⏰',
      iconName: 'BellAlertIcon',
    },
    {
      title: 'SMS notifiche',
      description:
        'Avvisa automaticamente i clienti quando la riparazione e completata',
      icon: '📱',
      iconName: 'DevicePhoneMobileIcon',
    },
    {
      title: 'Documenti DDT automatici',
      description:
        'Generazione automatica DDT invio e rientro per centri assistenza',
      icon: '📄',
      iconName: 'DocumentDuplicateIcon',
    },
    {
      title: 'Navigator riparazioni',
      description:
        'Dashboard centralizzata per tracking e gestione tutte le riparazioni',
      icon: '🗺️',
      iconName: 'MapIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'ricezione-accettazione',
      name: 'Ricezione e Accettazione',
      icon: '📥',
      iconName: 'InboxArrowDownIcon',
      features: [
        {
          title: 'Accettazione merce terzi',
          description:
            'Registra riparazioni di articoli cliente con stampa ricevuta automatica',
          iconName: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'Accettazione merce propria',
          description:
            'Gestisci riparazioni su articoli di magazzino (demo, resi, usato)',
          iconName: 'CubeIcon',
        },
        {
          title: 'Registrazione difetto',
          description:
            'Descrizione dettagliata del problema con foto e note tecniche',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Verifica garanzia automatica',
          description:
            'Controllo immediato copertura garanzia convenzionale o estesa',
          iconName: 'ShieldCheckIcon',
        },
        {
          title: 'Collegamento cliente',
          description:
            'Associazione a scheda cliente esistente con storico riparazioni',
          iconName: 'UserIcon',
        },
        {
          title: 'ID tracking automatico',
          description:
            'Generazione codice univoco per tracciare ogni riparazione',
          iconName: 'QrCodeIcon',
        },
      ],
    },
    {
      id: 'centri-assistenza',
      name: 'Gestione Centri Assistenza',
      icon: '🏭',
      iconName: 'BuildingOffice2Icon',
      features: [
        {
          title: 'Anagrafica riparatori',
          description:
            'Gestione completa centri assistenza con contatti, P.IVA e coordinate',
          iconName: 'BuildingStorefrontIcon',
        },
        {
          title: 'Associazione brand',
          description:
            'Collega centri assistenza a marchi e categorie di competenza',
          iconName: 'TagIcon',
        },
        {
          title: 'Legami logici e fisici',
          description:
            'Configura relazioni gerarchiche tra centri assistenza (principale/secondario)',
          iconName: 'LinkIcon',
        },
        {
          title: 'Garanzie per marchio',
          description:
            'Definisci quali centri gestiscono garanzie ufficiali per ogni brand',
          iconName: 'ShieldExclamationIcon',
        },
        {
          title: 'Storico interventi',
          description:
            'Consulta cronologia e performance di ogni centro assistenza',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'flusso-invio-rientro',
      name: 'Flusso Invio e Rientro',
      icon: '🚚',
      iconName: 'TruckIcon',
      features: [
        {
          title: 'DDT invio automatico',
          description:
            'Genera documento di trasporto per spedizione a centro assistenza',
          iconName: 'DocumentArrowUpIcon',
        },
        {
          title: 'Tracking spedizione',
          description:
            'Monitora stato lavorazione presso il centro riparazione',
          iconName: 'MagnifyingGlassIcon',
        },
        {
          title: 'DDT rientro automatico',
          description:
            'Genera documento di rientro merce dal centro assistenza',
          iconName: 'DocumentArrowDownIcon',
        },
        {
          title: 'Storno e dirottamento',
          description:
            'Trasferisci riparazione a centro alternativo senza rientro',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Marcatura irreparabile',
          description:
            'Gestisci articoli non riparabili con trasferimento a magazzino rotti',
          iconName: 'XCircleIcon',
        },
      ],
    },
    {
      id: 'preventivi-costi',
      name: 'Preventivi e Costi',
      icon: '💰',
      iconName: 'BanknotesIcon',
      features: [
        {
          title: 'Creazione preventivo',
          description:
            'Genera preventivi dettagliati con ricambi, manodopera e tempi',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Gestione accettazione',
          description:
            'Workflow approvazione preventivo con notifica automatica al cliente',
          iconName: 'CheckCircleIcon',
        },
        {
          title: 'Registrazione acconti',
          description:
            'Gestisci pagamenti anticipati con tracking su riparazione',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Tracking costi',
          description:
            'Monitora costi manodopera, materiali e ricambi per intervento',
          iconName: 'CalculatorIcon',
        },
        {
          title: 'Calcolo margine',
          description:
            'Analisi redditivita laboratorio per singola riparazione',
          iconName: 'ChartBarIcon',
        },
      ],
    },
    {
      id: 'consegna-incasso',
      name: 'Consegna e Incasso',
      icon: '✅',
      iconName: 'CheckBadgeIcon',
      features: [
        {
          title: 'Consegna cliente',
          description:
            'Chiusura riparazione con stampa documento di consegna',
          iconName: 'DocumentCheckIcon',
        },
        {
          title: 'Integrazione cassa',
          description:
            'Incasso riparazione direttamente dal modulo vendite',
          iconName: 'ComputerDesktopIcon',
        },
        {
          title: 'Ritiro a domicilio',
          description:
            'Gestisci consegne presso indirizzo cliente con tracking',
          iconName: 'HomeModernIcon',
        },
        {
          title: 'Trasferimento tra PV',
          description:
            'Sposta riparazione tra punti vendita per ritiro in altra sede',
          iconName: 'ArrowsPointingOutIcon',
        },
        {
          title: 'Magazzino articoli rotti',
          description:
            'Trasferisci articoli irreparabili a magazzino dedicato',
          iconName: 'ArchiveBoxXMarkIcon',
        },
      ],
    },
    {
      id: 'assistenza-domicilio',
      name: 'Assistenza a Domicilio',
      icon: '🏠',
      iconName: 'HomeIcon',
      features: [
        {
          title: 'Pianificazione interventi',
          description:
            'Programma interventi tecnici a domicilio con data e orario',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Calendario tecnici',
          description:
            'Assegna interventi ai tecnici con gestione zone geografiche',
          iconName: 'UserGroupIcon',
        },
        {
          title: 'Stati intervento',
          description:
            'Tracking specifico: in attesa, programmato, completato, scaduto',
          iconName: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Alert scadenze',
          description:
            'Notifiche automatiche per interventi in ritardo o scaduti',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Report domiciliari',
          description:
            'Statistiche interventi completati per tecnico e zona',
          iconName: 'PresentationChartLineIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Collegamento per scarico ricambi e gestione articoli rotti',
      benefits: [
        'Scarico automatico ricambi usati',
        'Trasferimento a magazzino rotti',
        'Verifica disponibilita pezzi',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Integrazione cassa per incasso riparazioni e acconti',
      benefits: [
        'Incasso riparazione in cassa',
        'Gestione acconti e saldi',
        'Scontrino e fattura automatici',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'garanzie',
      name: 'Modulo Garanzie',
      description:
        'Verifica automatica copertura garanzia convenzionale ed estesa',
      benefits: [
        'Check garanzia in accettazione',
        'Storico garanzie cliente',
        'Gestione estensioni garanzia',
      ],
      icon: '🛡️',
      iconName: 'ShieldCheckIcon',
      relatedModuleSlug: 'garanzie',
    },
    {
      id: 'planning',
      name: 'Planning Tecnici',
      description:
        'Pianificazione interventi domiciliari e calendario tecnici',
      benefits: [
        'Calendario condiviso tecnici',
        'Assegnazione automatica zone',
        'Ottimizzazione percorsi',
      ],
      icon: '📅',
      iconName: 'CalendarIcon',
      relatedModuleSlug: 'planning',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche SMS, email e WhatsApp ai clienti',
      benefits: [
        'SMS riparazione completata',
        'Email preventivo da approvare',
        'Notifiche automatiche',
      ],
      icon: '📱',
      iconName: 'ChatBubbleLeftRightIcon',
      relatedModuleSlug: 'comunicazioni',
    },
    {
      id: 'model-assistance',
      name: 'Model Assistance',
      description:
        'Piattaforma help desk per gestione ticket assistenza',
      benefits: [
        'Apertura ticket da Daisy',
        'Sincronizzazione stati',
        '2000+ clienti connessi',
      ],
      icon: '🎧',
      iconName: 'LifebuoyIcon',
      externalLink: 'https://modelassistance.it',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/riparazioni-hero.svg',
      alt: 'Navigator riparazioni con lista e stati',
      caption: 'Dashboard centralizzata per tracking tutte le riparazioni',
    },
    {
      src: '/screenshots/moduli/riparazioni-accettazione.svg',
      alt: 'Form accettazione riparazione',
      caption: 'Registrazione cliente, articolo e difetto riscontrato',
    },
    {
      src: '/screenshots/moduli/riparazioni-tracking.svg',
      alt: 'Tracking stato riparazione',
      caption: 'Timeline fasi con DDT e documenti generati',
    },
    {
      src: '/screenshots/moduli/riparazioni-preventivo.svg',
      alt: 'Preventivo riparazione',
      caption: 'Dettaglio costi ricambi, manodopera e totale',
    },
  ],

  benefits: [
    {
      title: 'Clienti sempre informati',
      metric: '95% soddisfazione',
      description:
        'Notifiche automatiche SMS/email tengono i clienti aggiornati, riducendo chiamate e aumentando la soddisfazione.',
    },
    {
      title: 'Laboratorio efficiente',
      metric: '-40% tempi',
      description:
        'Tracking ottimizzato e documenti automatici riducono i tempi medi di riparazione del 40%.',
    },
    {
      title: 'Revenue assistenza',
      metric: '+25% margine',
      description:
        'Gestione professionale con preventivi e tracking costi aumenta il margine del laboratorio del 25%.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Centro assistenza con 150 riparazioni/mese',
    customer: 'Rivenditore multi-brand elettrodomestici',
    challenge:
      'Il centro assistenza gestiva riparazioni su fogli Excel. Clienti chiamavano continuamente per sapere lo stato, tecnici perdevano tempo in attivita amministrative invece che riparare. I DDT venivano compilati a mano con frequenti errori.',
    solution:
      'Implementato modulo Riparazioni con integrazione Model Assistance, SMS automatici e generazione DDT. Ogni riparazione ha tracking completo con stati, ricambi usati e tempi intervento. I clienti ricevono SMS quando la riparazione e pronta. Navigator centralizzato per controllo rete multi-punto vendita.',
    results: [
      'Chiamate clienti ridotte del 70% grazie alle notifiche automatiche',
      'Tempi riparazione ridotti del 40% con processi ottimizzati',
      'Revenue laboratorio +25% per gestione professionale',
      'Errori DDT azzerati con generazione automatica documenti',
      'Trasferimenti tra punti vendita gestiti in tempo reale',
    ],
  },

  integrations: [
    { name: 'Garanzie', slug: 'garanzie' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
  ],

  faq: [
    {
      question: "Come funziona l'integrazione con Model Assistance?",
      answer:
        "Model Assistance e una piattaforma help desk usata da 2000+ clienti. L'integrazione consente di creare ticket riparazione direttamente da Daisy, sincronizzare stati e gestire comunicazioni centralizzate.",
    },
    {
      question: 'I clienti ricevono notifiche automatiche?',
      answer:
        'Si, puoi configurare SMS automatici per avvisare i clienti quando la riparazione e completata, quando e necessaria autorizzazione per costi extra, o per altri eventi del processo.',
    },
    {
      question: 'Posso gestire garanzie convenzionali ed estese?',
      answer:
        "Si, il modulo si integra con il registro Garanzie per verificare automaticamente se un prodotto e coperto da garanzia convenzionale o estesa al momento dell'accettazione.",
    },
    {
      question: 'Come gestisco i ricambi usati nelle riparazioni?',
      answer:
        'Ogni riparazione puo avere una lista di ricambi. Il sistema scarica automaticamente i ricambi dal magazzino e ne traccia i costi per calcolare la redditivita del laboratorio.',
    },
    {
      question: 'Come funziona il flusso documentale DDT?',
      answer:
        'Il sistema genera automaticamente tutti i DDT necessari: documento di ricezione dal cliente, DDT invio al centro assistenza, DDT rientro dal centro e documento di consegna al cliente. Ogni fase e tracciata con data, ora e operatore.',
    },
    {
      question: 'Posso gestire riparazioni per piu punti vendita?',
      answer:
        'Si, il modulo supporta trasferimenti tra punti vendita, permettendo di accettare una riparazione in un negozio e consegnarla in un altro. Il navigator centralizzato mostra tutte le riparazioni della rete con filtri per punto vendita.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
