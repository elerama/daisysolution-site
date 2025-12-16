import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const comunicazioniModule: ModuleData = {
  slug: 'comunicazioni',
  name: 'Comunicazioni',
  tagline: 'Messaggistica interna, news e notifiche per team multi-sede',
  category: 'Integrazione e Automazione',
  categoryColor: 'pink',
  icon: '📧',
  tier: 2,

  // Hero migliorata v2.1
  heroIcon: 'ChatBubbleLeftRightIcon',
  heroIntro:
    'Comunica efficacemente con tutto il team grazie a messaggi interni, news aziendali e notifiche automatiche. Organizza le comunicazioni in 5 caselle, raggiungi amministratori, supervisori o utenti con un click e personalizza ogni messaggio con editor avanzato, allegati e immagini.',

  overview: {
    intro:
      'Il modulo Comunicazioni centralizza tutta la messaggistica aziendale: messaggi interni multi-utente e multi-azienda, news con scadenza programmata, notifiche automatiche. 5 caselle organizzate (Ricevuti, Inviati, Da leggere, Cancellati, Salvati), gruppi destinatari gerarchici, editor avanzato con formattazione, allegati e immagini. Archiviazione cloud con storicita completa.',
    mainBenefits: [
      'Messaggistica interna multi-utente e multi-azienda',
      '5 caselle organizzate per ogni tipo di comunicazione',
      'News e notifiche con visibilita programmata',
      'Editor avanzato con allegati e formattazione',
    ],
    stats: [
      {
        label: 'Caselle organizzate',
        value: '5',
        description: 'Ricevuti, Inviati, Da leggere, Cancellati, Salvati',
      },
      {
        label: 'Tipi comunicazione',
        value: '3',
        description: 'Messaggi, News, Notifiche',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano Comunicazioni',
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
      title: 'Messaggi interni',
      description:
        'Comunicazione multi-utente e multi-azienda con threading conversazioni',
      icon: '💬',
      iconName: 'ChatBubbleLeftRightIcon',
    },
    {
      title: 'News aziendali',
      description:
        'Pubblicazione news con visibilita programmata e scadenza automatica',
      icon: '📰',
      iconName: 'NewspaperIcon',
    },
    {
      title: 'Notifiche push',
      description:
        'Alert automatici per eventi, scadenze e comunicazioni urgenti',
      icon: '🔔',
      iconName: 'BellIcon',
    },
    {
      title: '5 caselle',
      description:
        'Ricevuti, Inviati, Da leggere, Cancellati, Salvati sempre organizzati',
      icon: '📥',
      iconName: 'InboxIcon',
    },
    {
      title: 'Gruppi destinatari',
      description:
        'Invia ad Amministratori, Supervisori o Utenti semplici con un click',
      icon: '👥',
      iconName: 'UserGroupIcon',
    },
    {
      title: 'Etichette custom',
      description:
        'Organizza messaggi con tag personalizzabili per categoria',
      icon: '🏷️',
      iconName: 'TagIcon',
    },
    {
      title: 'Editor avanzato',
      description:
        'Formattazione testo ricca, evidenziazioni e preview messaggi',
      icon: '✏️',
      iconName: 'PencilSquareIcon',
    },
    {
      title: 'Allegati dinamici',
      description:
        'File, immagini e documenti allegati ai messaggi e alle news',
      icon: '📎',
      iconName: 'PaperClipIcon',
    },
    {
      title: 'Scadenza messaggi',
      description:
        'Visibilita programmata con date inizio e fine automatiche',
      icon: '⏰',
      iconName: 'ClockIcon',
    },
    {
      title: 'Archiviazione cloud',
      description:
        'Storicita completa con ricerca avanzata e backup automatico',
      icon: '☁️',
      iconName: 'CloudIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'messaggi',
      name: 'Messaggi Interni',
      icon: '💬',
      iconName: 'ChatBubbleLeftRightIcon',
      features: [
        {
          title: 'Multi-utente',
          description:
            'Invio messaggi a singoli utenti o gruppi allinterno dellazienda',
          iconName: 'UserIcon',
        },
        {
          title: 'Multi-azienda',
          description:
            'Comunicazione tra aziende diverse nello stesso ambiente',
          iconName: 'BuildingOffice2Icon',
        },
        {
          title: 'Threading',
          description:
            'Conversazioni organizzate con risposte collegate al messaggio originale',
          iconName: 'ChatBubbleLeftEllipsisIcon',
        },
        {
          title: 'Risposte e inoltro',
          description:
            'Rispondi direttamente o inoltra messaggi ad altri destinatari',
          iconName: 'ArrowUturnLeftIcon',
        },
        {
          title: 'Broadcast',
          description:
            'Invia comunicazioni a tutti gli utenti con un solo click',
          iconName: 'MegaphoneIcon',
        },
        {
          title: 'Messaggi privati',
          description:
            'Comunicazioni riservate visibili solo a mittente e destinatario',
          iconName: 'LockClosedIcon',
        },
      ],
    },
    {
      id: 'news',
      name: 'News e Notifiche',
      icon: '📰',
      iconName: 'NewspaperIcon',
      features: [
        {
          title: 'Creazione news',
          description:
            'Pubblica news aziendali visibili a tutti o gruppi selezionati',
          iconName: 'NewspaperIcon',
        },
        {
          title: 'Notifiche automatiche',
          description:
            'Alert generati da eventi di sistema (ordini, scadenze, anomalie)',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Programmazione visibilita',
          description:
            'Imposta data inizio e fine per news e comunicazioni temporanee',
          iconName: 'CalendarDaysIcon',
        },
        {
          title: 'Scadenza automatica',
          description:
            'Contenuti rimossi automaticamente dopo la data di fine validita',
          iconName: 'ClockIcon',
        },
        {
          title: 'Notifiche real-time',
          description:
            'Avvisi immediati per comunicazioni urgenti e prioritarie',
          iconName: 'BoltIcon',
        },
        {
          title: 'Priorita e urgenza',
          description:
            'Classifica messaggi per importanza con evidenziazione visiva',
          iconName: 'ExclamationTriangleIcon',
        },
      ],
    },
    {
      id: 'caselle',
      name: 'Gestione Caselle',
      icon: '📥',
      iconName: 'InboxIcon',
      features: [
        {
          title: 'Casella Ricevuti',
          description:
            'Tutti i messaggi ricevuti con contatore non letti in evidenza',
          iconName: 'InboxIcon',
        },
        {
          title: 'Casella Inviati',
          description:
            'Storico messaggi inviati con stato di lettura destinatari',
          iconName: 'PaperAirplaneIcon',
        },
        {
          title: 'Casella Da leggere',
          description:
            'Messaggi non ancora aperti raggruppati per priorita',
          iconName: 'EnvelopeIcon',
        },
        {
          title: 'Casella Cancellati',
          description:
            'Messaggi eliminati recuperabili entro 30 giorni',
          iconName: 'TrashIcon',
        },
        {
          title: 'Casella Salvati',
          description:
            'Messaggi importanti salvati per consultazione rapida',
          iconName: 'BookmarkIcon',
        },
        {
          title: 'Contatori',
          description:
            'Badge con numero messaggi non letti per ogni casella',
          iconName: 'HashtagIcon',
        },
      ],
    },
    {
      id: 'gruppi',
      name: 'Gruppi e Destinatari',
      icon: '👥',
      iconName: 'UserGroupIcon',
      features: [
        {
          title: 'Amministratori',
          description:
            'Gruppo predefinito per comunicazioni al management aziendale',
          iconName: 'ShieldCheckIcon',
        },
        {
          title: 'Supervisori',
          description:
            'Responsabili di reparto e coordinatori punti vendita',
          iconName: 'UserCircleIcon',
        },
        {
          title: 'Utenti semplici',
          description:
            'Operatori di cassa e addetti vendita di base',
          iconName: 'UserIcon',
        },
        {
          title: 'Gruppi punti vendita',
          description:
            'Raggruppa negozi per area geografica o tipologia',
          iconName: 'BuildingStorefrontIcon',
        },
        {
          title: 'Gruppi clienti',
          description:
            'Segmenta clienti per comunicazioni marketing mirate',
          iconName: 'UsersIcon',
        },
        {
          title: 'Etichette personalizzabili',
          description:
            'Crea tag custom per organizzare messaggi per progetto o tema',
          iconName: 'TagIcon',
        },
      ],
    },
    {
      id: 'editor',
      name: 'Editor e Contenuti',
      icon: '✏️',
      iconName: 'PencilSquareIcon',
      features: [
        {
          title: 'Editor WYSIWYG',
          description:
            'Interfaccia visuale per comporre messaggi formattati',
          iconName: 'PencilSquareIcon',
        },
        {
          title: 'Formattazione testo',
          description:
            'Grassetto, corsivo, elenchi, titoli e colori personalizzati',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Inserimento immagini',
          description:
            'Aggiungi foto e grafici direttamente nel corpo del messaggio',
          iconName: 'PhotoIcon',
        },
        {
          title: 'Allegati dinamici',
          description:
            'Carica file PDF, Excel, documenti da condividere',
          iconName: 'PaperClipIcon',
        },
        {
          title: 'Testi in evidenza',
          description:
            'Evidenzia porzioni di testo importanti con colori e box',
          iconName: 'SparklesIcon',
        },
        {
          title: 'Preview messaggi',
          description:
            'Anteprima del messaggio prima dellinvio definitivo',
          iconName: 'EyeIcon',
        },
      ],
    },
    {
      id: 'archiviazione',
      name: 'Archiviazione e Storicita',
      icon: '☁️',
      iconName: 'CloudIcon',
      features: [
        {
          title: 'Conservazione cloud',
          description:
            'Tutti i messaggi salvati in cloud con accesso da qualsiasi dispositivo',
          iconName: 'CloudIcon',
        },
        {
          title: 'Ricerca full-text',
          description:
            'Trova messaggi per parole chiave, mittente o data',
          iconName: 'MagnifyingGlassIcon',
        },
        {
          title: 'Filtri categoria',
          description:
            'Filtra per tipo (messaggio, news, notifica) ed etichetta',
          iconName: 'FunnelIcon',
        },
        {
          title: 'Filtri data',
          description:
            'Ricerca per intervallo temporale o periodo specifico',
          iconName: 'CalendarIcon',
        },
        {
          title: 'Export storico',
          description:
            'Esporta conversazioni in PDF o Excel per archivio',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Backup automatico',
          description:
            'Salvataggio periodico garantito per disaster recovery',
          iconName: 'ServerIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Notifiche automatiche per ordini, spedizioni e promozioni ai clienti online',
      benefits: [
        'Conferma ordine automatica',
        'Tracking spedizioni',
        'Promozioni personalizzate',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Alert per vendite importanti, chiusure cassa e anomalie operative',
      benefits: [
        'Alert vendite soglia',
        'Notifica chiusura cassa',
        'Segnalazione anomalie',
      ],
      icon: '💶',
      iconName: 'CurrencyEuroIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Notifiche per giacenze sotto scorta, arrivo merce e trasferimenti',
      benefits: [
        'Alert sottoscorta',
        'Conferma arrivo merce',
        'Richieste trasferimento',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'liste-regalo',
      name: 'Modulo Liste Regalo',
      description:
        'Comunicazioni per eventi, contributi ricevuti e aggiornamenti lista',
      benefits: [
        'Notifica contributi',
        'Aggiornamento lista',
        'Promemoria eventi',
      ],
      icon: '🎁',
      iconName: 'GiftIcon',
      relatedModuleSlug: 'liste-regalo',
    },
    {
      id: 'riparazioni',
      name: 'Modulo Riparazioni',
      description:
        'Aggiornamenti stato riparazioni ai clienti via SMS o email',
      benefits: [
        'Stato riparazione',
        'Pronto per ritiro',
        'Preventivo approvazione',
      ],
      icon: '🔧',
      iconName: 'WrenchScrewdriverIcon',
      relatedModuleSlug: 'riparazioni',
    },
    {
      id: 'statistiche',
      name: 'Modulo Statistiche',
      description:
        'Report comunicazioni inviate, tassi apertura e engagement',
      benefits: [
        'Messaggi inviati/letti',
        'Tasso apertura',
        'Trend comunicazioni',
      ],
      icon: '📊',
      iconName: 'ChartBarIcon',
      relatedModuleSlug: 'statistiche',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/comunicazioni-hero.svg',
      alt: 'Dashboard messaggi con caselle organizzate',
      caption: 'Vista principale con 5 caselle e contatori non letti',
    },
    {
      src: '/screenshots/moduli/comunicazioni-editor.svg',
      alt: 'Editor avanzato per messaggi',
      caption: 'Composizione messaggi con formattazione e allegati',
    },
    {
      src: '/screenshots/moduli/comunicazioni-caselle.svg',
      alt: 'Vista 5 caselle organizzate',
      caption: 'Ricevuti, Inviati, Da leggere, Cancellati, Salvati',
    },
    {
      src: '/screenshots/moduli/comunicazioni-gruppi.svg',
      alt: 'Gestione gruppi destinatari',
      caption: 'Amministratori, Supervisori e Utenti semplici',
    },
  ],

  benefits: [
    {
      title: 'Comunicazione centralizzata',
      metric: '5 caselle',
      description:
        'Tutti i messaggi organizzati in caselle dedicate: Ricevuti, Inviati, Da leggere, Cancellati, Salvati. Mai piu comunicazioni perse.',
    },
    {
      title: 'Team sempre informato',
      metric: '-70% chiamate',
      description:
        'News e notifiche automatiche riducono le chiamate tra sedi del 70%. Tutti sanno cosa succede in tempo reale.',
    },
    {
      title: 'Messaggi professionali',
      metric: 'Editor avanzato',
      description:
        'Crea comunicazioni ricche con formattazione, immagini e allegati. Ogni messaggio e professionale e completo.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Rete 8 negozi multi-azienda',
    customer: 'Gruppo retail elettronica 8 punti vendita',
    challenge:
      'Rete di 8 negozi con 3 ragioni sociali diverse. Comunicazioni frammentate tra WhatsApp personali, email e telefonate. News aziendali non raggiungevano tutti. Nessuno sapeva chi aveva letto cosa. Informazioni importanti perse nel caos.',
    solution:
      'Implementato modulo Comunicazioni con accesso multi-azienda. Gruppi destinatari per Direttori, Responsabili e Addetti vendita. News con scadenza per promozioni temporanee. Editor avanzato per comunicazioni professionali con allegati listini e immagini prodotti.',
    results: [
      'Comunicazioni centralizzate per tutte e 3 le aziende',
      'Tempo coordinamento sedi: da ore a minuti',
      '100% tracciabilita lettura messaggi importanti',
      'News promozioni raggiungono tutti in tempo reale',
      'Riduzione 70% chiamate tra negozi per informazioni',
    ],
  },

  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Liste Regalo', slug: 'liste-regalo' },
    { name: 'Riparazioni', slug: 'riparazioni' },
    { name: 'E-commerce', slug: 'ecommerce' },
  ],

  faq: [
    {
      question: 'Come funziona la messaggistica interna multi-azienda?',
      answer:
        'Il sistema supporta comunicazioni tra aziende diverse nello stesso ambiente. Ogni utente vede solo i messaggi delle aziende a cui ha accesso. Puoi inviare a colleghi della stessa azienda o, se autorizzato, a utenti di altre ragioni sociali del gruppo.',
    },
    {
      question: 'Quali tipi di comunicazione sono supportati?',
      answer:
        'Il modulo supporta 3 tipi: Messaggi standard per comunicazioni dirette tra utenti, News per annunci aziendali visibili a tutti o gruppi selezionati, Notifiche automatiche generate da eventi di sistema come ordini, scadenze o anomalie.',
    },
    {
      question: 'Come organizzo i messaggi nelle 5 caselle?',
      answer:
        'I messaggi si organizzano automaticamente: Ricevuti per messaggi in arrivo, Inviati per quelli spediti, Da leggere per i non aperti, Cancellati per quelli eliminati (recuperabili 30 giorni), Salvati per quelli importanti che vuoi conservare.',
    },
    {
      question: 'Come imposto una scadenza di visibilita ai messaggi?',
      answer:
        'Quando crei un messaggio o una news puoi impostare data di inizio e data di fine visibilita. Il contenuto appare solo nel periodo impostato e scompare automaticamente alla scadenza. Ideale per promozioni temporanee o comunicazioni a termine.',
    },
    {
      question: 'Posso creare gruppi destinatari personalizzati?',
      answer:
        'Si, oltre ai gruppi predefiniti (Amministratori, Supervisori, Utenti) puoi creare gruppi personalizzati per punti vendita, aree geografiche o progetti specifici. Puoi anche usare etichette custom per organizzare i messaggi per tema.',
    },
    {
      question: 'Leditor supporta immagini e allegati?',
      answer:
        'Leditor WYSIWYG supporta formattazione completa: grassetto, corsivo, elenchi, colori. Puoi inserire immagini nel corpo del messaggio e allegare file PDF, Excel, documenti. Preview disponibile prima dellinvio per verificare il risultato finale.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
