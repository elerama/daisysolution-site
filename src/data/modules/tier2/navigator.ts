import type { ModuleData } from '../types'

export const navigatorModule: ModuleData = {
  slug: 'navigator',
  name: 'Navigator',
  tagline: 'Dashboard personalizzabili e navigazione rapida funzionalità',
  category: 'Integrazioni & Dati',
  categoryColor: 'blue',
  icon: '🧭',
  tier: 2,

  // Hero v2.1
  heroIcon: 'MapIcon',
  heroIntro:
    'Dashboard home personalizzabile con KPI a colpo d\'occhio, widgets configurabili, accesso rapido funzioni frequenti e scorciatoie tastiera per power-user.',
  overview: {
    intro:
      "Il modulo Navigator è la tua dashboard home personalizzabile. KPI principali a colpo d'occhio, widgets configurabili per ruolo, accesso rapido funzioni frequenti, notifiche e alert in-app, grafici real-time. Scorciatoie tastiera per power-user, layout personalizzato. Ogni utente ha il suo Navigator ottimizzato.",
    mainBenefits: [
      'Produttività utenti aumentata con accessi rapidi',
      'Visibilità KPI sempre a portata di mano',
      'Onboarding facilitato per nuovi utenti',
      'UX personalizzata per ogni ruolo aziendale',
    ],
  },
  features: [
    {
      title: 'Dashboard home',
      description:
        'Pagina iniziale con KPI principali: vendite giorno, margine, giacenze critiche',
      icon: '🏠',
      iconName: 'HomeIcon',
    },
    {
      title: 'Widgets configurabili',
      description:
        'Scegli quali widget mostrare: vendite, ordini, alert, calendario, task',
      icon: '📊',
      iconName: 'Squares2X2Icon',
    },
    {
      title: 'Accesso rapido',
      description:
        'Link veloci alle funzioni più usate: nuova vendita, nuovo ordine, inventario',
      icon: '⚡',
      iconName: 'BoltIcon',
    },
    {
      title: 'Notifiche in-app',
      description:
        'Alert real-time per eventi importanti: nuovo ordine, giacenza sotto scorta',
      icon: '🔔',
      iconName: 'BellIcon',
    },
    {
      title: 'Grafici real-time',
      description:
        'Trend vendite/margini aggiornati in tempo reale con grafici interattivi',
      icon: '📈',
      iconName: 'ArrowTrendingUpIcon',
    },
    {
      title: 'Scorciatoie tastiera',
      description:
        'Comandi rapidi da tastiera per power-user (es. Ctrl+V = nuova vendita)',
      icon: '⌨️',
      iconName: 'CommandLineIcon',
    },
    {
      title: 'Layout personalizzato',
      description:
        'Ogni utente configura il suo layout: drag&drop widgets, salva preferenze',
      icon: '🎨',
      iconName: 'SwatchIcon',
    },
    {
      title: 'Widget calendario',
      description:
        'Calendario ordini in arrivo, scadenze, task da completare',
      icon: '📅',
      iconName: 'CalendarDaysIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'dashboard',
      name: 'Dashboard e KPI',
      icon: '🏠',
      iconName: 'HomeIcon',
      features: [
        {
          title: 'Dashboard home',
          description:
            'Pagina iniziale con overview business del giorno',
          iconName: 'HomeIcon',
          highlighted: true,
        },
        {
          title: 'KPI vendite',
          description:
            'Venduto oggi, progressivo mese, confronto anno precedente',
          iconName: 'CurrencyEuroIcon',
        },
        {
          title: 'KPI margini',
          description:
            'Margine giorno/mese con trend e obiettivi',
          iconName: 'ChartBarIcon',
        },
        {
          title: 'Alert giacenze',
          description:
            'Prodotti sotto scorta e da riordinare',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Ordini aperti',
          description:
            'Ordini in attesa di evasione o conferma',
          iconName: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Refresh automatico',
          description:
            'Dati aggiornati automaticamente senza refresh manuale',
          iconName: 'ArrowPathIcon',
        },
      ],
    },
    {
      id: 'widgets',
      name: 'Widgets Configurabili',
      icon: '📊',
      iconName: 'Squares2X2Icon',
      features: [
        {
          title: 'Libreria widgets',
          description:
            'Scegli tra 20+ widget disponibili per la tua dashboard',
          iconName: 'Squares2X2Icon',
        },
        {
          title: 'Drag and drop',
          description:
            'Sposta e riordina widgets con trascinamento',
          iconName: 'CursorArrowRaysIcon',
          highlighted: true,
        },
        {
          title: 'Ridimensiona',
          description:
            'Widgets con dimensione flessibile (piccolo, medio, grande)',
          iconName: 'ArrowsPointingOutIcon',
        },
        {
          title: 'Grafici interattivi',
          description:
            'Charts con zoom, filtri e drill-down',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Widget task',
          description:
            'Lista attività da completare oggi',
          iconName: 'CheckCircleIcon',
        },
        {
          title: 'Widget calendario',
          description:
            'Eventi, scadenze e appuntamenti',
          iconName: 'CalendarDaysIcon',
        },
      ],
    },
    {
      id: 'accesso',
      name: 'Accesso Rapido',
      icon: '⚡',
      iconName: 'BoltIcon',
      features: [
        {
          title: 'Quick actions',
          description:
            'Bottoni per azioni frequenti: nuova vendita, ordine, cliente',
          iconName: 'PlusCircleIcon',
          highlighted: true,
        },
        {
          title: 'Funzioni recenti',
          description:
            'Accesso rapido alle ultime funzioni utilizzate',
          iconName: 'ClockIcon',
        },
        {
          title: 'Preferiti',
          description:
            'Aggiungi funzioni ai preferiti per accesso immediato',
          iconName: 'StarIcon',
        },
        {
          title: 'Ricerca globale',
          description:
            'Cerca qualsiasi cosa: clienti, prodotti, documenti',
          iconName: 'MagnifyingGlassIcon',
          highlighted: true,
        },
        {
          title: 'Menu contestuale',
          description:
            'Azioni rapide accessibili con click destro',
          iconName: 'EllipsisVerticalIcon',
        },
        {
          title: 'Breadcrumb navigation',
          description:
            'Navigazione contestuale con percorso sempre visibile',
          iconName: 'MapIcon',
        },
      ],
    },
    {
      id: 'scorciatoie',
      name: 'Scorciatoie e Produttività',
      icon: '⌨️',
      iconName: 'CommandLineIcon',
      features: [
        {
          title: 'Shortcuts tastiera',
          description:
            'Comandi rapidi configurabili per ogni funzione',
          iconName: 'CommandLineIcon',
        },
        {
          title: 'Command palette',
          description:
            'Ctrl+K per aprire qualsiasi funzione digitando',
          iconName: 'MagnifyingGlassIcon',
          highlighted: true,
        },
        {
          title: 'Hotkeys personalizzati',
          description:
            'Definisci le tue scorciatoie preferite',
          iconName: 'CogIcon',
        },
        {
          title: 'Cheat sheet',
          description:
            'Vista rapida di tutte le scorciatoie disponibili',
          iconName: 'QuestionMarkCircleIcon',
        },
        {
          title: 'Multi-monitor',
          description:
            'Supporto per configurazioni multi-schermo',
          iconName: 'ComputerDesktopIcon',
        },
        {
          title: 'Auto-save',
          description:
            'Salvataggio automatico preferenze utente',
          iconName: 'CloudArrowUpIcon',
        },
      ],
    },
    {
      id: 'notifiche',
      name: 'Notifiche e Alert',
      icon: '🔔',
      iconName: 'BellIcon',
      features: [
        {
          title: 'Notifiche real-time',
          description:
            'Alert istantanei per eventi importanti',
          iconName: 'BellAlertIcon',
          highlighted: true,
        },
        {
          title: 'Centro notifiche',
          description:
            'Storico notifiche con filtri per tipo',
          iconName: 'InboxIcon',
        },
        {
          title: 'Notifiche desktop',
          description:
            'Alert anche quando app in background',
          iconName: 'ComputerDesktopIcon',
        },
        {
          title: 'Priorità notifiche',
          description:
            'Classifica notifiche per importanza',
          iconName: 'FlagIcon',
        },
        {
          title: 'Silenzia notifiche',
          description:
            'Modalità non disturbare per concentrazione',
          iconName: 'BellSlashIcon',
        },
        {
          title: 'Badge contatori',
          description:
            'Contatori su menu per notifiche non lette',
          iconName: 'ExclamationCircleIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'statistiche',
      name: 'Modulo Statistiche',
      description:
        'KPI e grafici da statistiche nella dashboard',
      benefits: [
        'Widget vendite real-time',
        'Grafici margini',
        'Alert KPI critici',
      ],
      icon: '📊',
      iconName: 'ChartBarIcon',
      relatedModuleSlug: 'statistiche',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite & Cassa',
      description:
        'Quick action per nuova vendita e scontrino rapido',
      benefits: [
        'Nuova vendita 1-click',
        'KPI vendite giorno',
        'Alert chiusure cassa',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Alert giacenze e accesso rapido inventario',
      benefits: [
        'Widget sotto scorta',
        'Quick inventario',
        'Alert riordino',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'ordini',
      name: 'Modulo Ordini',
      description:
        'Widget ordini aperti e quick action nuovo ordine',
      benefits: [
        'Ordini da evadere',
        'Nuovo ordine rapido',
        'Alert conferme',
      ],
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
      relatedModuleSlug: 'ordini',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche in-app e centro messaggi',
      benefits: [
        'Alert email/SMS',
        'Centro notifiche',
        'Badge non letti',
      ],
      icon: '📧',
      iconName: 'EnvelopeIcon',
      relatedModuleSlug: 'comunicazioni',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/navigator-hero.svg',
      alt: 'Dashboard Navigator con KPI',
      caption: 'Dashboard home personalizzabile con KPI e widgets',
    },
    {
      src: '/screenshots/moduli/navigator-widgets.svg',
      alt: 'Configurazione widgets',
      caption: 'Libreria widgets con drag-and-drop',
    },
    {
      src: '/screenshots/moduli/navigator-shortcuts.svg',
      alt: 'Scorciatoie tastiera',
      caption: 'Command palette e shortcuts per power-user',
    },
    {
      src: '/screenshots/moduli/navigator-notifiche.svg',
      alt: 'Centro notifiche',
      caption: 'Notifiche real-time e centro messaggi',
    },
  ],

  benefits: [
    {
      title: 'Produttività aumentata',
      metric: '+30% efficienza',
      description:
        'Accessi rapidi e scorciatoie tastiera aumentano la produttività degli utenti del 30%. Meno click, più vendite.',
    },
    {
      title: 'KPI sempre visibili',
      description:
        "Dashboard home mostra sempre i KPI critici. Nessun bisogno di aprire report per sapere com'è andato il giorno.",
    },
    {
      title: 'Onboarding facilitato',
      metric: '-50% tempo training',
      description:
        'Nuovi utenti vedono subito cosa è importante per il loro ruolo. Tempo di training ridotto del 50%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena 4 negozi con 15 operatori',
    customer: 'Rivenditore multi-sede con staff misto',
    challenge:
      'Ogni operatore apriva sempre le stesse 3-4 funzioni, ma ci voleva tempo per navigare i menu. Nessuna visibilità immediata su KPI giornalieri. Nuovi operatori perdevano tempo a cercare funzioni.',
    solution:
      'Implementato Navigator con layout personalizzati per ruolo: venditori vedono dashboard vendite + accesso rapido a nuova vendita; magazzinieri vedono giacenze + accesso inventario; manager vedono KPI completi. Scorciatoie tastiera per funzioni frequenti.',
    results: [
      'Tempo medio per nuova vendita ridotto da 8 a 3 click',
      'Produttività operatori +28% per accessi rapidi',
      'Onboarding nuovi operatori: da 2 settimane a 5 giorni',
      'Soddisfazione utenti +85% per UX personalizzata',
    ],
  },
  integrations: [{ name: 'Tutti i moduli', slug: 'vendite-cassa' }],
  faq: [
    {
      question: 'Posso personalizzare i widget mostrati nella dashboard?',
      answer:
        'Sì, ogni utente può scegliere quali widget mostrare, riordinarli con drag&drop, ridimensionarli. Le preferenze sono salvate automaticamente.',
    },
    {
      question: 'I layout possono essere diversi per ruolo?',
      answer:
        'Assolutamente sì! Puoi configurare layout predefiniti per ruolo (venditore, magazziniere, manager). Ogni utente può poi personalizzare ulteriormente il suo layout.',
    },
    {
      question: 'Le scorciatoie tastiera sono personalizzabili?',
      answer:
        'Sì, puoi configurare scorciatoie personalizzate per funzioni frequenti. Es: Ctrl+V = nuova vendita, Ctrl+I = inventario rapido, Ctrl+R = report giornaliero.',
    },
    {
      question: 'Le notifiche in-app come funzionano?',
      answer:
        'Quando si verifica un evento importante (nuovo ordine, giacenza sotto scorta, ordine evaso), appare una notifica in-app. Click sulla notifica per aprire direttamente il dettaglio.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
