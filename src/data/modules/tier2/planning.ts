import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const planningModule: ModuleData = {
  slug: 'planning',
  name: 'Planning',
  tagline: 'Calendario operativo per consegne, appuntamenti e interventi',
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '📅',
  tier: 2,

  // Hero migliorata v2.1
  heroIcon: 'CalendarDaysIcon',
  heroIntro:
    'Pianifica consegne, riparazioni e appuntamenti con un calendario intelligente integrato con tutti i moduli del gestionale. Visualizza giorno, settimana o mese, gestisci multi-calendario e accedi da mobile.',

  overview: {
    intro:
      'Il modulo Planning e il calendario operativo intelligente di DaisySolution. Calendarizza consegne, interventi di assistenza, appuntamenti commerciali e attivita di vendita. Multi-calendario per tipologia, drag & drop per ripianificazione, integrazione Maps per percorsi ottimizzati. Report dettagliati su interventi, ore lavorate e performance operatori.',
    mainBenefits: [
      'Vista unificata di tutte le attivita aziendali',
      'Ripianificazione drag & drop in tempo reale',
      'App mobile per operatori sul campo',
      'Report dettagliati performance e produttivita',
    ],
    stats: [
      {
        label: 'Efficienza operativa',
        value: '+35%',
        description: 'con pianificazione ottimizzata',
      },
      {
        label: 'Integrazione Maps',
        value: '100%',
        description: 'percorsi ottimizzati',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano Planning',
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
      title: 'Calendario operativo',
      description:
        'Vista giornaliera, settimanale e mensile per tutte le attivita pianificate',
      icon: '📅',
      iconName: 'CalendarDaysIcon',
    },
    {
      title: 'Multi-calendario',
      description:
        'Calendari separati per consegne, riparazioni, appuntamenti e interventi',
      icon: '🗓️',
      iconName: 'Squares2X2Icon',
    },
    {
      title: 'Drag & drop',
      description:
        'Ripianifica velocemente trascinando le attivita su nuove date e orari',
      icon: '✋',
      iconName: 'ArrowsPointingOutIcon',
    },
    {
      title: 'Integrazione Maps',
      description:
        'Visualizza percorso ottimale per consegne e naviga verso destinazione',
      icon: '🗺️',
      iconName: 'MapPinIcon',
    },
    {
      title: 'Gestione consegne',
      description:
        'Pianifica consegne ordini clienti con orario, indirizzo e note',
      icon: '🚚',
      iconName: 'TruckIcon',
    },
    {
      title: 'Appuntamenti commerciali',
      description:
        'Pianifica visite clienti, demo prodotti e incontri commerciali',
      icon: '👥',
      iconName: 'UserGroupIcon',
    },
    {
      title: 'Incasso sul campo',
      description:
        'Registra pagamento saldo alla consegna con ricevuta digitale',
      icon: '💰',
      iconName: 'BanknotesIcon',
    },
    {
      title: 'App mobile',
      description:
        'Accesso completo al planning da smartphone e tablet per operatori',
      icon: '📱',
      iconName: 'DevicePhoneMobileIcon',
    },
    {
      title: 'Allegati e foto',
      description:
        'Upload immagini e documenti direttamente dalle attivita pianificate',
      icon: '📷',
      iconName: 'PhotoIcon',
    },
    {
      title: 'Report attivita',
      description:
        'Statistiche interventi, ore lavorate e performance per operatore',
      icon: '📊',
      iconName: 'ChartBarIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'calendario-viste',
      name: 'Calendario e Viste',
      icon: '📅',
      iconName: 'CalendarIcon',
      features: [
        {
          title: 'Vista giornaliera',
          description:
            'Dettaglio attivita del giorno con fasce orarie e disponibilita',
          iconName: 'SunIcon',
        },
        {
          title: 'Vista settimanale',
          description:
            'Panoramica della settimana con tutte le attivita pianificate',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Vista mensile',
          description:
            'Overview del mese per pianificazione a lungo termine',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Multi-calendario',
          description:
            'Calendari separati per tipologia: consegne, riparazioni, appuntamenti',
          iconName: 'Squares2X2Icon',
        },
        {
          title: 'Filtri avanzati',
          description:
            'Filtra per operatore, tipo attivita, stato e periodo',
          iconName: 'FunnelIcon',
        },
        {
          title: 'Codifica colori',
          description:
            'Colori diversi per tipo attivita e stato per visibilita immediata',
          iconName: 'SwatchIcon',
        },
      ],
    },
    {
      id: 'gestione-consegne',
      name: 'Gestione Consegne',
      icon: '🚚',
      iconName: 'TruckIcon',
      features: [
        {
          title: 'Pianifica da ordine',
          description:
            'Crea consegna direttamente da ordine cliente con dati precompilati',
          iconName: 'DocumentPlusIcon',
        },
        {
          title: 'Percorso Maps',
          description:
            'Calcola percorso ottimizzato e avvia navigazione con un click',
          iconName: 'MapPinIcon',
        },
        {
          title: 'Incasso saldo',
          description:
            'Registra pagamento del saldo alla consegna con ricevuta',
          iconName: 'BanknotesIcon',
        },
        {
          title: 'Firma digitale',
          description:
            'Acquisisci firma del cliente su tablet o smartphone alla consegna',
          iconName: 'PencilSquareIcon',
        },
        {
          title: 'Posticipa appuntamento',
          description:
            'Ripianifica consegna con drag & drop o modifica manuale',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Note consegna',
          description:
            'Aggiungi note, istruzioni speciali e riferimenti per il fattorino',
          iconName: 'ChatBubbleBottomCenterTextIcon',
        },
      ],
    },
    {
      id: 'appuntamenti-interventi',
      name: 'Appuntamenti e Interventi',
      icon: '🔧',
      iconName: 'WrenchScrewdriverIcon',
      features: [
        {
          title: 'Pianifica da riparazione',
          description:
            'Crea intervento tecnico direttamente da ticket riparazione',
          iconName: 'WrenchIcon',
        },
        {
          title: 'Appuntamenti commerciali',
          description:
            'Pianifica visite clienti, demo e presentazioni prodotto',
          iconName: 'UserGroupIcon',
        },
        {
          title: 'Interventi assistenza',
          description:
            'Programma interventi di assistenza tecnica a domicilio',
          iconName: 'HomeModernIcon',
        },
        {
          title: 'Promemoria automatici',
          description:
            'Notifiche SMS/email ai clienti prima degli appuntamenti',
          iconName: 'BellIcon',
        },
        {
          title: 'Assegnazione operatore',
          description:
            'Assegna attivita a tecnici e operatori per zona o competenza',
          iconName: 'UserIcon',
        },
      ],
    },
    {
      id: 'mobile-campo',
      name: 'Mobile e Campo',
      icon: '📱',
      iconName: 'DevicePhoneMobileIcon',
      features: [
        {
          title: 'App responsive',
          description:
            'Interfaccia ottimizzata per smartphone e tablet operatori',
          iconName: 'DevicePhoneMobileIcon',
        },
        {
          title: 'Geolocalizzazione',
          description:
            'Traccia posizione operatori e calcola distanze da destinazione',
          iconName: 'MapPinIcon',
        },
        {
          title: 'Upload foto',
          description:
            'Scatta e allega foto direttamente dalla attivita pianificata',
          iconName: 'CameraIcon',
        },
        {
          title: 'Documenti allegati',
          description:
            'Visualizza e allega documenti PDF, DDT e ricevute',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Notifiche push',
          description:
            'Alert in tempo reale per nuove attivita e modifiche planning',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Modalita offline',
          description:
            'Lavora anche senza connessione con sincronizzazione automatica',
          iconName: 'SignalSlashIcon',
        },
      ],
    },
    {
      id: 'reportistica',
      name: 'Reportistica',
      icon: '📊',
      iconName: 'ChartBarIcon',
      features: [
        {
          title: 'Interventi per periodo',
          description:
            'Report numero interventi completati per giorno, settimana, mese',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Ore lavorate',
          description:
            'Tracking ore lavorate per operatore con calcolo produttivita',
          iconName: 'ClockIcon',
        },
        {
          title: 'Performance operatori',
          description:
            'Classifica operatori per numero attivita e tempi medi',
          iconName: 'TrophyIcon',
        },
        {
          title: 'Attivita per cliente',
          description:
            'Storico attivita pianificate e completate per ogni cliente',
          iconName: 'UserCircleIcon',
        },
        {
          title: 'Export Excel',
          description:
            'Esporta report dettagliati in formato Excel per analisi',
          iconName: 'TableCellsIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Pianifica consegne direttamente dagli ordini clienti',
      benefits: [
        'Crea consegna da ordine',
        'Dati indirizzo precompilati',
        'Incasso saldo automatico',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'riparazioni',
      name: 'Modulo Riparazioni',
      description:
        'Pianifica interventi tecnici da ticket riparazione',
      benefits: [
        'Crea intervento da riparazione',
        'Storico attivita su ticket',
        'Chiusura automatica riparazione',
      ],
      icon: '🔧',
      iconName: 'WrenchScrewdriverIcon',
      relatedModuleSlug: 'riparazioni',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Verifica disponibilita merce per consegne pianificate',
      benefits: [
        'Check giacenza articoli',
        'Alert merce non disponibile',
        'Prenotazione automatica',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilita',
      description:
        'Registrazione automatica incassi effettuati sul campo',
      benefits: [
        'Incassi a prima nota',
        'Riconciliazione automatica',
        'Tracking pagamenti',
      ],
      icon: '📒',
      iconName: 'BookOpenIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'anagrafiche',
      name: 'Modulo Anagrafiche',
      description:
        'Indirizzi clienti per navigazione e pianificazione percorsi',
      benefits: [
        'Indirizzi precompilati',
        'Storico consegne cliente',
        'Preferenze di consegna',
      ],
      icon: '👤',
      iconName: 'UserIcon',
      relatedModuleSlug: 'anagrafiche',
    },
    {
      id: 'comunicazioni',
      name: 'Modulo Comunicazioni',
      description:
        'Notifiche automatiche ai clienti per appuntamenti e consegne',
      benefits: [
        'SMS promemoria appuntamento',
        'Email conferma consegna',
        'Avvisi ritardo o modifica',
      ],
      icon: '📱',
      iconName: 'ChatBubbleLeftRightIcon',
      relatedModuleSlug: 'comunicazioni',
    },
    {
      id: 'statistiche',
      name: 'Statistiche & BI',
      description:
        'Metriche avanzate performance operatori e attivita',
      benefits: [
        'Dashboard KPI operatori',
        'Analisi produttivita',
        'Trend attivita nel tempo',
      ],
      icon: '📈',
      iconName: 'PresentationChartLineIcon',
      relatedModuleSlug: 'statistiche-bi',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/planning-hero.svg',
      alt: 'Calendario settimanale con attivita pianificate',
      caption: 'Vista settimanale con consegne, appuntamenti e interventi',
    },
    {
      src: '/screenshots/moduli/planning-consegne.svg',
      alt: 'Gestione consegne con integrazione Maps',
      caption: 'Pianificazione consegne con percorso ottimizzato',
    },
    {
      src: '/screenshots/moduli/planning-mobile.svg',
      alt: 'App mobile per operatori',
      caption: 'Interfaccia mobile per gestione attivita sul campo',
    },
    {
      src: '/screenshots/moduli/planning-report.svg',
      alt: 'Report attivita e performance',
      caption: 'Statistiche interventi, ore lavorate e produttivita',
    },
  ],

  benefits: [
    {
      title: 'Efficienza operativa',
      metric: '+35% produttivita',
      description:
        'Pianificazione ottimizzata e percorsi Maps riducono i tempi morti e aumentano le attivita completate per giorno.',
    },
    {
      title: 'Clienti soddisfatti',
      metric: '98% puntualita',
      description:
        'Promemoria automatici e tracking real-time garantiscono puntualita nelle consegne e appuntamenti.',
    },
    {
      title: 'Controllo totale',
      metric: '100% visibilita',
      description:
        'Dashboard centralizzata e report dettagliati per monitorare tutte le attivita e la produttivita del team.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Negozio con 30 consegne/giorno',
    customer: 'Rivenditore elettrodomestici con 2 furgoni',
    challenge:
      'Le consegne venivano organizzate su agenda cartacea. I fattorini chiamavano in negozio per verificare indirizzi e orari. Clienti non avvisati in caso di ritardi. Nessun tracciamento delle attivita completate.',
    solution:
      'Implementato Planning con calendari separati per consegne e interventi tecnici. Integrazione Maps per percorsi ottimizzati. App mobile per fattorini con upload foto e firma digitale. Promemoria SMS automatici ai clienti.',
    results: [
      'Consegne giornaliere aumentate da 25 a 35 (+40%)',
      'Chiamate fattorini-negozio ridotte del 90%',
      'Reclami clienti per mancato avviso ridotti del 85%',
      'Tempo pianificazione giornaliera da 45 a 10 minuti',
      'Incassi alla consegna tracciati automaticamente',
    ],
  },

  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Riparazioni', slug: 'riparazioni' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
  ],

  faq: [
    {
      question: 'Posso gestire piu calendari contemporaneamente?',
      answer:
        'Si, il modulo supporta multi-calendario con calendari separati per tipologia (consegne, riparazioni, appuntamenti). Puoi visualizzarli singolarmente o sovrapposti, filtrandoli per operatore o stato attivita.',
    },
    {
      question: "Come funziona l'integrazione con Google Maps?",
      answer:
        "Ogni attivita con indirizzo mostra un pulsante per visualizzare il percorso ottimale. Puoi calcolare la distanza, il tempo di percorrenza e avviare la navigazione con un click direttamente dall'app mobile.",
    },
    {
      question: 'Gli operatori possono vedere il planning da smartphone?',
      answer:
        "Si, l'app e completamente responsive e ottimizzata per smartphone e tablet. Gli operatori vedono le loro attivita, possono aggiornarle, scattare foto e far firmare i clienti direttamente sul dispositivo.",
    },
    {
      question: 'Posso incassare il saldo alla consegna?',
      answer:
        'Si, il modulo consente di registrare il pagamento del saldo alla consegna. Il sistema genera una ricevuta digitale e, se collegato alla Contabilita, registra automaticamente lincasso.',
    },
    {
      question: 'Come si pianifica una consegna da un ordine?',
      answer:
        "Dal modulo Vendite, ogni ordine ha un pulsante 'Pianifica consegna'. I dati del cliente, indirizzo e articoli vengono precompilati automaticamente. Devi solo selezionare data, ora e operatore.",
    },
    {
      question: 'Quali report sono disponibili?',
      answer:
        'Il modulo offre report su: numero interventi per periodo, ore lavorate per operatore, attivita per cliente, performance e produttivita. Tutti i report sono esportabili in Excel per analisi approfondite.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
