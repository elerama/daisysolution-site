import type { ModuleData } from '../types'

export const contrattiModule: ModuleData = {
  slug: 'contratti',
  name: 'Contratti',
  tagline: 'Gestione contratti assistenza e abbonamenti con rinnovi automatici',
  category: 'Amministrazione',
  categoryColor: 'indigo',
  icon: '📄',
  tier: 2,

  // Hero v2.1
  heroIcon: 'DocumentTextIcon',
  heroIntro:
    'Gestisci contratti di assistenza, noleggio e abbonamenti con rinnovi automatici, fatturazione ricorrente, SLA e alert scadenze.',
  overview: {
    intro:
      'Il modulo Contratti gestisce contratti di assistenza, noleggio, abbonamenti con rinnovi automatici e fatturazione ricorrente. Gestisci scadenze, SLA (Service Level Agreement), storico interventi per contratto. Alert automatici per scadenze, fatturazione periodica automatica, report redditività contratti. Revenue ricorrente gestito in modo professionale.',
    mainBenefits: [
      'Revenue ricorrente gestito automaticamente',
      'Zero contratti dimenticati o scaduti',
      'Fatturazione periodica automatica',
      'Visibilità scadenze anticipata con alert',
    ],
  },
  features: [
    {
      title: 'Creazione contratti',
      description:
        'Crea contratti servizio, manutenzione, noleggio con termini personalizzati',
      icon: '📝',
      iconName: 'PencilSquareIcon',
    },
    {
      title: 'Rinnovi automatici',
      description:
        'Gestione rinnovi automatici con tacito rinnovo o conferma esplicita',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Fatturazione ricorrente',
      description:
        'Fatture periodiche generate automaticamente (mensile, trimestrale, annuale)',
      icon: '💳',
      iconName: 'CreditCardIcon',
    },
    {
      title: 'Alert scadenze',
      description:
        'Notifiche automatiche 30/15/7 giorni prima della scadenza contratto',
      icon: '⏰',
      iconName: 'ClockIcon',
    },
    {
      title: 'Storico interventi',
      description:
        'Tracciamento interventi e riparazioni associate a ogni contratto',
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
    },
    {
      title: 'Gestione SLA',
      description:
        'Tempi di intervento garantiti con alert se SLA viene superato',
      icon: '⚡',
      iconName: 'BoltIcon',
    },
    {
      title: 'Report redditività',
      description:
        'Analisi margine contratti, revenue mensile ricorrente (MRR)',
      icon: '📊',
      iconName: 'ChartBarIcon',
    },
    {
      title: 'Template contratti',
      description:
        'Template personalizzabili per diverse tipologie di contratto',
      icon: '📄',
      iconName: 'DocumentDuplicateIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'gestione',
      name: 'Gestione Contratti',
      icon: '📄',
      iconName: 'DocumentTextIcon',
      features: [
        {
          title: 'Creazione contratti',
          description:
            'Wizard guidato per creare contratti servizio, manutenzione, noleggio',
          iconName: 'PencilSquareIcon',
        },
        {
          title: 'Template personalizzabili',
          description:
            'Modelli preconfigurati per diverse tipologie di contratto',
          iconName: 'DocumentDuplicateIcon',
        },
        {
          title: 'Clausole e condizioni',
          description:
            'Gestione clausole standard e personalizzate per ogni contratto',
          iconName: 'ListBulletIcon',
        },
        {
          title: 'Allegati e documenti',
          description:
            'Archiviazione documenti e allegati associati ai contratti',
          iconName: 'PaperClipIcon',
        },
        {
          title: 'Firma digitale',
          description:
            'Integrazione con sistemi di firma elettronica per contratti',
          iconName: 'FingerPrintIcon',
        },
        {
          title: 'Versioning contratti',
          description:
            'Storico modifiche e versioni precedenti del contratto',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'rinnovi',
      name: 'Rinnovi e Scadenze',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
      features: [
        {
          title: 'Rinnovo automatico',
          description:
            'Tacito rinnovo con generazione automatica nuovo contratto',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Rinnovo con conferma',
          description:
            'Workflow di conferma cliente prima del rinnovo',
          iconName: 'CheckCircleIcon',
        },
        {
          title: 'Alert scadenze',
          description:
            'Notifiche configurabili 30/15/7 giorni prima della scadenza',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Calendario scadenze',
          description:
            'Vista calendario di tutti i contratti in scadenza',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Disdette',
          description:
            'Gestione disdette con motivo e data effettiva',
          iconName: 'XCircleIcon',
        },
        {
          title: 'Storico rinnovi',
          description:
            'Cronologia completa dei rinnovi per ogni contratto',
          iconName: 'ClipboardDocumentListIcon',
        },
      ],
    },
    {
      id: 'fatturazione',
      name: 'Fatturazione Ricorrente',
      icon: '💳',
      iconName: 'CreditCardIcon',
      features: [
        {
          title: 'Periodicità flessibile',
          description:
            'Fatturazione mensile, trimestrale, semestrale, annuale',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Generazione automatica',
          description:
            'Fatture generate automaticamente alla scadenza periodo',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Invio automatico',
          description:
            'Email fattura al cliente con PDF allegato',
          iconName: 'EnvelopeIcon',
        },
        {
          title: 'Adeguamento prezzi',
          description:
            'Gestione aumenti ISTAT o variazioni prezzo a rinnovo',
          iconName: 'ArrowTrendingUpIcon',
        },
        {
          title: 'Preavviso fattura',
          description:
            'Notifica cliente prima della generazione fattura',
          iconName: 'BellIcon',
        },
        {
          title: 'Solleciti automatici',
          description:
            'Reminder per fatture non pagate da contratti',
          iconName: 'ExclamationTriangleIcon',
        },
      ],
    },
    {
      id: 'sla',
      name: 'SLA e Performance',
      icon: '⚡',
      iconName: 'BoltIcon',
      features: [
        {
          title: 'Definizione SLA',
          description:
            'Configura tempi di risposta e risoluzione garantiti',
          iconName: 'ClockIcon',
        },
        {
          title: 'Monitoraggio SLA',
          description:
            'Tracciamento real-time rispetto degli SLA',
          iconName: 'ChartBarIcon',
        },
        {
          title: 'Alert SLA',
          description:
            'Notifiche quando un intervento sta per sforare lo SLA',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Report SLA',
          description:
            'Statistiche mensili sul rispetto degli SLA',
          iconName: 'DocumentChartBarIcon',
        },
        {
          title: 'Penali automatiche',
          description:
            'Calcolo automatico penali per SLA non rispettati',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Dashboard performance',
          description:
            'Vista aggregata performance su tutti i contratti SLA',
          iconName: 'PresentationChartLineIcon',
        },
      ],
    },
    {
      id: 'analytics',
      name: 'Analytics e Report',
      icon: '📊',
      iconName: 'ChartBarIcon',
      features: [
        {
          title: 'MRR Dashboard',
          description:
            'Monthly Recurring Revenue con trend e previsioni',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'Redditività contratti',
          description:
            'Analisi margine per contratto (ricavi vs costi interventi)',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Churn rate',
          description:
            'Tasso di abbandono contratti e analisi cause',
          iconName: 'ArrowTrendingDownIcon',
        },
        {
          title: 'Lifetime value',
          description:
            'Valore cliente nel tempo basato su contratti',
          iconName: 'UserIcon',
        },
        {
          title: 'Forecast rinnovi',
          description:
            'Previsione revenue da rinnovi prossimi mesi',
          iconName: 'SparklesIcon',
        },
        {
          title: 'Export report',
          description:
            'Export dati contratti in Excel, CSV, PDF',
          iconName: 'ArrowUpTrayIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'riparazioni',
      name: 'Modulo Riparazioni',
      description:
        'Collega interventi tecnici ai contratti di assistenza',
      benefits: [
        'Interventi associati a contratto',
        'Verifica copertura contrattuale',
        'Storico interventi per contratto',
      ],
      icon: '🔧',
      iconName: 'WrenchScrewdriverIcon',
      relatedModuleSlug: 'riparazioni',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilità',
      description:
        'Fatturazione ricorrente automatica integrata',
      benefits: [
        'Fatture generate automaticamente',
        'Scadenzario incassi',
        'Prima nota automatica',
      ],
      icon: '🧮',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche automatiche a clienti su scadenze e rinnovi',
      benefits: [
        'Alert scadenza via email',
        'Conferma rinnovo automatica',
        'Invio fatture PDF',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
    {
      id: 'clienti',
      name: 'Anagrafica Clienti',
      description:
        'Gestione clienti con contratti multipli',
      benefits: [
        'Vista contratti per cliente',
        'Storico rapporto commerciale',
        'Segmentazione clienti',
      ],
      icon: '👥',
      iconName: 'UserGroupIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'statistiche',
      name: 'Modulo Statistiche',
      description:
        'Dashboard MRR e analytics contratti',
      benefits: [
        'KPI revenue ricorrente',
        'Trend rinnovi',
        'Forecast incassi',
      ],
      icon: '📊',
      iconName: 'ChartBarIcon',
      relatedModuleSlug: 'statistiche',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/contratti-hero.svg',
      alt: 'Dashboard contratti con scadenze',
      caption: 'Vista contratti attivi con alert scadenze e rinnovi',
    },
    {
      src: '/screenshots/moduli/contratti-fatturazione.svg',
      alt: 'Fatturazione ricorrente',
      caption: 'Generazione automatica fatture periodiche da contratti',
    },
    {
      src: '/screenshots/moduli/contratti-sla.svg',
      alt: 'Monitoraggio SLA',
      caption: 'Dashboard SLA con tempi di intervento e performance',
    },
    {
      src: '/screenshots/moduli/contratti-mrr.svg',
      alt: 'Dashboard MRR',
      caption: 'Monthly Recurring Revenue e previsioni',
    },
  ],

  benefits: [
    {
      title: 'Revenue ricorrente',
      metric: '+€15k/mese',
      description:
        'I contratti generano revenue prevedibile e ricorrente. Cliente medio con 50 contratti attivi genera €15k/mese automaticamente.',
    },
    {
      title: 'Zero dimenticanze',
      description:
        'Gli alert automatici garantiscono che nessun contratto in scadenza venga dimenticato. Fatturazione ricorrente elimina il rischio di mancati incassi.',
    },
    {
      title: 'Clienti fidelizzati',
      metric: '92% rinnovo',
      description:
        'I contratti aumentano il lifetime value del cliente. Tasso di rinnovo medio del 92% con gestione professionale.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Centro assistenza con contratti manutenzione',
    customer: 'Rivenditore con servizio assistenza per aziende',
    challenge:
      'Gestiva 80 contratti manutenzione annuali su Excel. Spesso dimenticava scadenze, perdeva rinnovi, fatturava in ritardo. Cliente doveva chiamare per sollecitare fattura. Nessuna visibilità sulla revenue ricorrente.',
    solution:
      'Implementato modulo Contratti con rinnovi automatici e fatturazione ricorrente. Alert 30 giorni prima della scadenza, fatture generate automaticamente il giorno del rinnovo. Dashboard MRR (Monthly Recurring Revenue) per previsioni.',
    results: [
      'Tasso rinnovo contratti da 65% a 92%',
      'Zero fatture dimenticate o in ritardo',
      'MRR prevedibile: €12k/mese da contratti',
      'Tempo gestione contratti ridotto da 10 a 2 ore/mese',
    ],
  },
  integrations: [
    { name: 'Riparazioni', slug: 'riparazioni' },
    { name: 'Contabilità', slug: 'contabilita' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
  ],
  faq: [
    {
      question: 'Come funzionano i rinnovi automatici?',
      answer:
        'Puoi configurare contratti con tacito rinnovo (si rinnova automaticamente se il cliente non disdice) o rinnovo esplicito (cliente deve confermare). Il sistema invia alert e genera fattura al rinnovo.',
    },
    {
      question: 'La fatturazione ricorrente è completamente automatica?',
      answer:
        'Sì, configuri periodicità (mensile, trimestrale, annuale) e il sistema genera le fatture automaticamente alla scadenza. Puoi anche inviare le fatture via email automaticamente.',
    },
    {
      question: 'Posso tracciare interventi associati a un contratto?',
      answer:
        'Sì, ogni contratto può avere interventi collegati (dal modulo Riparazioni). Vedi lo storico completo degli interventi, verifica se stai rispettando i tempi SLA, calcola la redditività del contratto.',
    },
    {
      question: 'Come gestisco contratti con SLA garantiti?',
      answer:
        'Definisci il tempo massimo di intervento (es. "risoluzione entro 48h"). Il sistema monitora i ticket e invia alert se stai per superare la soglia SLA. Report SLA mensili mostrano performance.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
