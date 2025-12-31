import { CLIENTS, PRODUCTS, SLA, formatNumber } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const bancaDatiEldomcatModule: ModuleData = {
  slug: 'banca-dati-eldomcat',
  name: 'Banca Dati Eldomcat',
  tagline: 'Catalogo 300k+ prodotti con schede tecniche, immagini e energy label',
  category: 'Integrazioni & Dati',
  categoryColor: 'blue',
  icon: '📚',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'CircleStackIcon',
  heroIntro:
    'Eldomcat è il database proprietario Elettrorama con oltre 300.000 articoli, schede tecniche complete, immagini HD, energy label e 8 formati di compilazione per gestionale, web, cartelli prezzo e volantini.',

  overview: {
    intro:
      'Eldomcat è il database proprietario sviluppato da Elettrorama, con oltre 300.000 prodotti di elettronica ed elettrodomestici. Include foto professionali, schede tecniche strutturate, energy label EU e 8 formati di compilazione. Gestione brand, categorie, varianti e ricerca avanzata per caratteristiche. Sincronizzazione automatica con fonti certificate.',
    mainBenefits: [
      '300.000+ articoli pronti con Eldomcat',
      '8 formati compilazione: gestionale, SEO, cartelli, volantini',
      'Energy label EU sempre aggiornate',
      'Ricerca avanzata per caratteristiche tecniche',
    ],
    stats: [
      {
        label: 'Articoli catalogo',
        value: formatNumber(PRODUCTS.eldomcatArticles),
        description: 'pronti con foto e schede tecniche',
      },
      {
        label: 'Formati compilazione',
        value: `${PRODUCTS.eldomcatCompilations}`,
        description: 'per ogni esigenza output',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano Banca Dati',
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
      title: '300k+ articoli',
      description:
        'Catalogo completo elettrodomestici, elettronica, casalinghi pronti alluso',
      icon: '📚',
      iconName: 'CircleStackIcon',
    },
    {
      title: 'Schede tecniche',
      description:
        'Caratteristiche complete strutturate per categoria merceologica',
      icon: '📋',
      iconName: 'DocumentTextIcon',
    },
    {
      title: 'Immagini HD',
      description:
        'Foto prodotto alta risoluzione con gallery multi-immagine',
      icon: '🖼️',
      iconName: 'PhotoIcon',
    },
    {
      title: 'Energy label',
      description:
        'Etichette energetiche EU sempre aggiornate (vecchio e nuovo formato)',
      icon: '⚡',
      iconName: 'BoltIcon',
    },
    {
      title: '8 compilazioni',
      description:
        'Gestionale, web SEO, cartelli prezzo, volantini, discorsive',
      icon: '📄',
      iconName: 'DocumentDuplicateIcon',
    },
    {
      title: 'Ricerca avanzata',
      description:
        'Filtri per marca, modello, categoria, articoli da completare',
      icon: '🔍',
      iconName: 'MagnifyingGlassIcon',
    },
    {
      title: 'Aggiornamento auto',
      description:
        'Sync automatica notturna con fonti Icecat e produttori',
      icon: '🔄',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Multi-brand',
      description:
        'Supporto tutti i marchi principali elettrodomestici ed elettronica',
      icon: '🏪',
      iconName: 'BuildingStorefrontIcon',
    },
    {
      title: 'Export formati',
      description:
        'XML, JSON, Excel per integrazioni con piattaforme esterne',
      icon: '📤',
      iconName: 'ArrowDownTrayIcon',
    },
    {
      title: 'API integrazione',
      description:
        'Webservice REST per accesso programmatico al catalogo',
      icon: '🔌',
      iconName: 'CodeBracketIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'schede',
      name: 'Schede Tecniche',
      icon: '📋',
      iconName: 'DocumentTextIcon',
      features: [
        {
          title: 'Creazione schede',
          description:
            'Schede tecniche strutturate per ogni categoria merceologica',
          iconName: 'DocumentPlusIcon',
        },
        {
          title: 'Caratteristiche tecniche',
          description:
            'Specifiche dettagliate con gruppi e sotto-specifiche gerarchiche',
          iconName: 'ListBulletIcon',
          highlighted: true,
        },
        {
          title: 'Template personalizzabili',
          description:
            'Modelli scheda configurabili per categoria prodotto',
          iconName: 'RectangleGroupIcon',
        },
        {
          title: 'Validazione dati',
          description:
            'Controllo automatico campi obbligatori e formati corretti',
          iconName: 'ShieldCheckIcon',
        },
        {
          title: 'Storico modifiche',
          description:
            'Audit trail completo con versioning delle schede',
          iconName: 'ClockIcon',
        },
        {
          title: 'Modello commerciale',
          description:
            'Configurazione descrizioni commerciali per canale vendita',
          iconName: 'TagIcon',
        },
      ],
    },
    {
      id: 'immagini',
      name: 'Immagini e Media',
      icon: '🖼️',
      iconName: 'PhotoIcon',
      features: [
        {
          title: 'Immagini HD multiple',
          description:
            'Foto prodotto alta risoluzione con gallery ordinabile',
          iconName: 'PhotoIcon',
          highlighted: true,
        },
        {
          title: 'Posizionamento gallery',
          description:
            'Ordinamento personalizzato immagini per ogni articolo',
          iconName: 'Squares2X2Icon',
        },
        {
          title: 'Energy label EU',
          description:
            'Etichette energetiche vecchio e nuovo formato europeo',
          iconName: 'BoltIcon',
          highlighted: true,
        },
        {
          title: 'Ricerca senza immagine',
          description:
            'Identifica articoli mancanti di foto per completamento',
          iconName: 'PhotoIcon',
        },
        {
          title: 'Ricerca senza energy label',
          description:
            'Trova articoli senza etichetta energetica obbligatoria',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Import automatico',
          description:
            'Download immagini da Icecat e fonti produttori certificati',
          iconName: 'CloudArrowDownIcon',
        },
      ],
    },
    {
      id: 'composizioni',
      name: 'Composizioni Output',
      icon: '📄',
      iconName: 'DocumentDuplicateIcon',
      features: [
        {
          title: 'Scheda articolo',
          description:
            'Formato discorsivo per lettura facilitata dati tecnici',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Specifiche tecniche',
          description:
            'Formato tabellare per confronto tra articoli categoria',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Descrizioni gestionali',
          description:
            'Testo sintetico per gestionale, ordini e fatture',
          iconName: 'DocumentIcon',
        },
        {
          title: 'Descrizioni web SEO',
          description:
            'Testo ottimizzato per indicizzazione motori di ricerca',
          iconName: 'GlobeAltIcon',
          highlighted: true,
        },
        {
          title: 'Cartelli prezzo',
          description:
            'Caratteristiche formattate per stampa scaffali negozio',
          iconName: 'TagIcon',
        },
        {
          title: 'Volantini e cataloghi',
          description:
            'Descrizioni adeguate per materiale promozionale stampato',
          iconName: 'NewspaperIcon',
        },
      ],
    },
    {
      id: 'ricerca',
      name: 'Ricerca e Filtri',
      icon: '🔍',
      iconName: 'MagnifyingGlassIcon',
      features: [
        {
          title: 'Ricerca marca/modello',
          description:
            'Trova articoli per brand, codice modello o descrizione',
          iconName: 'MagnifyingGlassIcon',
          highlighted: true,
        },
        {
          title: 'Filtro classificazione',
          description:
            'Navigazione per categoria e sottocategoria merceologica',
          iconName: 'FolderIcon',
        },
        {
          title: 'Articoli da completare',
          description:
            'Elenco articoli con schede tecniche incomplete',
          iconName: 'ClipboardDocumentCheckIcon',
        },
        {
          title: 'Filtri personalizzabili',
          description:
            'Crea e salva filtri ricerca per utente o gruppo',
          iconName: 'AdjustmentsHorizontalIcon',
        },
        {
          title: 'Ricerca barcode/EAN',
          description:
            'Trova articolo da codice a barre, EAN o codice interno',
          iconName: 'QrCodeIcon',
        },
        {
          title: 'Export risultati',
          description:
            'Esporta risultati ricerca in Excel, CSV o PDF',
          iconName: 'ArrowDownTrayIcon',
        },
      ],
    },
    {
      id: 'gestione',
      name: 'Gestione Dati',
      icon: '⚙️',
      iconName: 'Cog6ToothIcon',
      features: [
        {
          title: 'Inserimento manuale',
          description:
            'Interfaccia per inserimento dati tecnici articoli custom',
          iconName: 'PencilSquareIcon',
        },
        {
          title: 'Trascodifica valori',
          description:
            'Conversione automatica formati e unita di misura',
          iconName: 'ArrowsRightLeftIcon',
        },
        {
          title: 'Variabili articolo',
          description:
            'Campi personalizzabili per esigenze specifiche azienda',
          iconName: 'VariableIcon',
        },
        {
          title: 'Richieste completamento',
          description:
            'Workflow per segnalare articoli da arricchire',
          iconName: 'ChatBubbleLeftEllipsisIcon',
        },
        {
          title: 'Statistiche copertura',
          description:
            'Report completezza dati per categoria e brand',
          iconName: 'ChartPieIcon',
        },
        {
          title: 'Multi-barcode',
          description:
            'Gestione EAN, UPC, codici interni e alternativi',
          iconName: 'QrCodeIcon',
        },
      ],
    },
    {
      id: 'integrazioni',
      name: 'Integrazioni',
      icon: '🔌',
      iconName: 'PuzzlePieceIcon',
      features: [
        {
          title: 'Sync Icecat/Eldomcat',
          description:
            'Aggiornamento automatico notturno da fonti certificate',
          iconName: 'ArrowPathIcon',
          highlighted: true,
        },
        {
          title: 'Import produttori',
          description:
            'Importazione dati XML/JSON da fornitori e centrali',
          iconName: 'ArrowDownTrayIcon',
        },
        {
          title: 'Export e-commerce',
          description:
            'Feed automatici per piattaforme vendita online',
          iconName: 'ArrowUpTrayIcon',
        },
        {
          title: 'Integrazione Label',
          description:
            'Generazione cartelli prezzo ed ESL da schede tecniche',
          iconName: 'TagIcon',
        },
        {
          title: 'API REST',
          description:
            'Webservice documentato per accesso programmatico',
          iconName: 'CodeBracketIcon',
        },
        {
          title: 'Webhook eventi',
          description:
            'Notifiche automatiche su aggiornamenti catalogo',
          iconName: 'BellIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'label',
      name: 'Modulo Label',
      description:
        'Generazione etichette e cartelli prezzo con dati da schede tecniche',
      benefits: [
        'Cartelli con caratteristiche tecniche',
        'Energy label automatiche',
        'ESL Electronic Shelf Labels',
      ],
      icon: '🏷️',
      iconName: 'TagIcon',
      relatedModuleSlug: 'label',
    },
    {
      id: 'ecommerce',
      name: 'Modulo E-commerce',
      description:
        'Pubblicazione automatica prodotti con descrizioni SEO ottimizzate',
      benefits: [
        '300k+ articoli pronti online',
        'Descrizioni SEO automatiche',
        'Immagini HD sincronizzate',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'ecommerce',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Descrizioni gestionali su scontrini, fatture e documenti vendita',
      benefits: [
        'Descrizioni sintetiche documenti',
        'Ricerca articoli veloce',
        'Caratteristiche in cassa',
      ],
      icon: '💶',
      iconName: 'CurrencyEuroIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'acquisti',
      name: 'Modulo Acquisti',
      description:
        'Schede tecniche su ordini fornitori e documenti di acquisto',
      benefits: [
        'Specifiche in ordini',
        'Verifica articoli ricevuti',
        'Confronto caratteristiche',
      ],
      icon: '📦',
      iconName: 'TruckIcon',
      relatedModuleSlug: 'acquisti',
    },
    {
      id: 'import-export',
      name: 'Import/Export',
      description:
        'Interscambio dati catalogo con piattaforme esterne e partner',
      benefits: [
        'Export XML/JSON/Excel',
        'Import massivo fornitori',
        'Feed automatici',
      ],
      icon: '🔄',
      iconName: 'ArrowsRightLeftIcon',
      relatedModuleSlug: 'import-export',
    },
    {
      id: 'connessione-omnicanale',
      name: 'Connessione Omnicanale',
      description:
        'API REST per accesso programmatico al catalogo articoli',
      benefits: [
        'API documentate',
        'Autenticazione sicura',
        'Rate limiting configurabile',
      ],
      icon: '🔌',
      iconName: 'CodeBracketIcon',
      relatedModuleSlug: 'connessione-omnicanale',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/banca-dati-hero.svg',
      alt: 'Catalogo prodotti con ricerca avanzata',
      caption: 'Ricerca articoli per marca, modello e caratteristiche',
    },
    {
      src: '/screenshots/moduli/banca-dati-scheda.svg',
      alt: 'Scheda tecnica articolo completa',
      caption: 'Caratteristiche strutturate con gruppi e sotto-specifiche',
    },
    {
      src: '/screenshots/moduli/banca-dati-composizioni.svg',
      alt: 'Formati di compilazione output',
      caption: '8 formati: gestionale, SEO, cartelli, volantini, discorsive',
    },
    {
      src: '/screenshots/moduli/banca-dati-immagini.svg',
      alt: 'Gallery immagini e energy label',
      caption: 'Foto HD multiple con etichette energetiche EU',
    },
  ],

  benefits: [
    {
      title: 'Risparmio tempo enorme',
      metric: '75.000 ore',
      description:
        'Con Eldomcat risparmi 75.000 ore di inserimento manuale dati e foto prodotti. ROI immediato.',
    },
    {
      title: 'Catalogo sempre aggiornato',
      metric: 'Sync notturna',
      description:
        'Caratteristiche tecniche, foto e energy label si sincronizzano automaticamente ogni notte.',
    },
    {
      title: '8 formati output',
      metric: 'Multi-canale',
      description:
        'Una sola scheda tecnica genera descrizioni per gestionale, web, cartelli, volantini e cataloghi.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Nuova apertura negozio elettronica',
    customer: 'Nuovo punto vendita elettronica',
    challenge:
      'Avvio negozio nuovo: necessita di catalogare 15.000 prodotti con foto, schede tecniche e energy label per vendita, e-commerce e cartelli prezzo. Tempistiche strette (2 settimane).',
    solution:
      'Attivazione Eldomcat con importazione massiva codici articoli. In pochi click attivati 300.000 articoli pronti con foto, caratteristiche e energy label. Generazione automatica cartelli prezzo e descrizioni SEO per e-commerce.',
    results: [
      '15.000 articoli catalogati in 3 giorni invece di 6 mesi',
      'Risparmio stimato 75.000 euro di lavoro manuale',
      'E-commerce online con catalogo completo in 1 settimana',
      'Cartelli prezzo con foto e energy label dal primo giorno',
      '8 formati descrizione generati automaticamente',
    ],
  },

  integrations: [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Label', slug: 'label' },
    { name: 'Vendite', slug: 'vendite-cassa' },
    { name: 'Acquisti', slug: 'acquisti' },
  ],

  faq: [
    {
      question: 'Quanti articoli sono disponibili nel catalogo?',
      answer:
        'Eldomcat, il database proprietario sviluppato da Elettrorama, contiene oltre 300.000 articoli di elettronica, elettrodomestici e casalinghi. Il catalogo include tutti i principali marchi con foto professionali, schede tecniche complete e energy label EU aggiornate.',
    },
    {
      question: 'Come funziona aggiornamento automatico dei dati?',
      answer:
        'Ogni notte il sistema sincronizza automaticamente foto, caratteristiche ed energy label da Icecat e fonti produttori certificate. Non devi fare nulla: il catalogo si aggiorna da solo mantenendo i dati sempre corretti.',
    },
    {
      question: 'Quali formati di compilazione sono disponibili?',
      answer:
        'Sono disponibili 8 formati: scheda articolo discorsiva, specifiche tecniche tabellari, descrizioni gestionali sintetiche, descrizioni web SEO, cartelli prezzo, volantini promozionali, descrizioni discorsive e filtri ricerca avanzata.',
    },
    {
      question: 'Come gestisco le energy label?',
      answer:
        'Le energy label EU sono gestite automaticamente: il sistema importa sia il vecchio che il nuovo formato europeo. Puoi cercare articoli senza energy label per completare il catalogo e garantire la conformita normativa.',
    },
    {
      question: 'Posso personalizzare le schede tecniche?',
      answer:
        'Si, puoi creare template scheda personalizzati per ogni categoria merceologica. Definisci gruppi, sotto-specifiche, campi obbligatori e formati di validazione. Le schede custom convivono con quelle Eldomcat.',
    },
    {
      question: 'Come integro i dati con il mio e-commerce?',
      answer:
        'Il modulo genera automaticamente descrizioni SEO ottimizzate per i motori di ricerca. Puoi esportare in XML, JSON o Excel oppure usare le API REST per integrazione diretta con qualsiasi piattaforma e-commerce.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
