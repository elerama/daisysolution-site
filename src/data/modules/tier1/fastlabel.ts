import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const fastlabelModule: ModuleData = {
  slug: 'fastlabel',
  name: 'Label',
  tagline:
    'Stampa cartelli e gestione etichette elettroniche ESL per prezzi sempre aggiornati',
  category: 'Crescita & Marketing',
  categoryColor: 'violet',
  icon: '🏷️',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'TagIcon',
  heroIntro:
    'Sistema completo per la pubblicazione dinamica dei prezzi: cartelli professionali personalizzabili e etichette elettroniche ESL con aggiornamento in tempo reale su SES Imagotag e Delphi.',

  overview: {
    intro:
      'Il Modulo Label e un sistema automatico e professionale per la pubblicazione dinamica dei prezzi di vendita e delle informazioni promozionali. Gestisce sia la stampa di cartelli ed etichette cartacee personalizzabili, sia l\'aggiornamento istantaneo delle etichette elettroniche (ESL). Grazie all\'integrazione con Eldomcat, genera cartelli completi di contenuti tecnici aggiornati, garantendo precisione e conformita normativa.',
    mainBenefits: [
      '2000+ negozi utilizzatori in Italia',
      'Template professionali personalizzabili',
      'Etichette elettroniche ESL in tempo reale',
      'Conformita normative RAEE ed etichettatura energetica',
    ],
    stats: [
      {
        label: 'Utilizzatori attivi',
        value: '2.000+',
        description: 'negozi in tutta Italia',
      },
      {
        label: 'Cartelli stampati/anno',
        value: '5M+',
        description: 'milioni di cartelli',
      },
      {
        label: 'Punti vendita',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano il modulo Label',
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
      title: 'Template professionali',
      description:
        'Scegli tra decine di template professionali o crea il tuo custom',
      icon: '🎨',
      iconName: 'SwatchIcon',
    },
    {
      title: 'Caratteristiche Eldomcat',
      description:
        'Caratteristiche tecniche inserite automaticamente da database Eldomcat',
      icon: '📋',
      iconName: 'DocumentTextIcon',
    },
    {
      title: 'Barcode e QR code',
      description:
        'Stampa barcode EAN e QR code per link schede prodotto online',
      icon: '📱',
      iconName: 'QrCodeIcon',
    },
    {
      title: 'Promozioni visibili',
      description:
        'Evidenzia promozioni con grafica accattivante e countdown scadenza',
      icon: '🎯',
      iconName: 'TagIcon',
    },
    {
      title: 'Stampa massiva',
      description:
        'Stampa centinaia di cartelli per reparto o selezione articoli in pochi minuti',
      icon: '🖨️',
      iconName: 'PrinterIcon',
    },
    {
      title: 'Etichettatura energetica',
      description: 'Template conformi normativa etichettatura energetica UE',
      icon: '⚡',
      iconName: 'BoltIcon',
    },
    {
      title: 'RAEE compliance',
      description: 'Simboli RAEE e informazioni smaltimento secondo normativa',
      icon: '♻️',
      iconName: 'ArrowPathIcon',
    },
    {
      title: 'Multi-formato',
      description: 'Supporto formati A4, A5, A6, 10x15cm e formati custom',
      icon: '📏',
      iconName: 'RectangleStackIcon',
    },
    {
      title: 'Etichette elettroniche ESL',
      description:
        'Gestione etichette ESL con aggiornamento prezzi in tempo reale',
      icon: '📺',
      iconName: 'DeviceTabletIcon',
    },
    {
      title: 'Multi-provider ESL',
      description: 'Supporto SES Imagotag, Delphi e altri provider certificati',
      icon: '🔗',
      iconName: 'ServerStackIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'template-design',
      name: 'Template e Design',
      icon: '🎨',
      iconName: 'SwatchIcon',
      features: [
        {
          title: 'Personalizzazione template',
          description:
            'Template completamente personalizzabili con logo, colori, font e layout',
          iconName: 'PaintBrushIcon',
        },
        {
          title: 'Gestione slogan',
          description:
            'Messaggi e slogan personalizzati con salvataggio in cloud',
          iconName: 'ChatBubbleBottomCenterTextIcon',
        },
        {
          title: 'Loghi aziendali',
          description:
            'Gestione avanzata loghi aziendali adattabili ai vari layout',
          iconName: 'PhotoIcon',
        },
        {
          title: 'Layout su richiesta',
          description:
            'Possibilita di realizzare layout personalizzati su richiesta',
          iconName: 'RectangleGroupIcon',
        },
        {
          title: 'Anteprima real-time',
          description:
            'Visualizza anteprima cartello prima della stampa con tutti i dati',
          iconName: 'EyeIcon',
        },
      ],
    },
    {
      id: 'stampa-cartacea',
      name: 'Stampa Cartacea',
      icon: '🖨️',
      iconName: 'PrinterIcon',
      features: [
        {
          title: 'Stampa massiva',
          description:
            'Stampa centinaia di cartelli per reparto o selezione in pochi minuti',
          iconName: 'PrinterIcon',
        },
        {
          title: 'Barcode e QR code',
          description:
            'Generazione automatica barcode articolo e QR code informativi',
          iconName: 'QrCodeIcon',
        },
        {
          title: 'Prezzi promozionali',
          description:
            'Gestione prezzo di vendita, prezzo barrato e countdown promozioni',
          iconName: 'TagIcon',
        },
        {
          title: 'Stampa per listini',
          description:
            'Stampa automatizzata differenziata per listini aziendali e punto vendita',
          iconName: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Multi-formato',
          description:
            'Supporto formati A4, A5, A6, 10x15cm e formati personalizzati',
          iconName: 'RectangleStackIcon',
        },
        {
          title: 'Compatibilita stampanti',
          description:
            'Compatibile con la maggior parte delle etichettatrici e stampanti',
          iconName: 'PrinterIcon',
        },
      ],
    },
    {
      id: 'etichette-esl',
      name: 'Etichette Elettroniche (ESL)',
      icon: '📺',
      iconName: 'DeviceTabletIcon',
      features: [
        {
          title: 'Associazione articolo-ESL',
          description:
            'Gestione semplice dell\'associazione articoli a etichette elettroniche',
          iconName: 'LinkIcon',
        },
        {
          title: 'Aggiornamento tempo reale',
          description:
            'Sincronizzazione automatica prezzi e promozioni con ESL',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Provider SES Imagotag',
          description:
            'Integrazione certificata con SES Imagotag (Vusion) per reti Unieuro',
          iconName: 'BuildingStorefrontIcon',
        },
        {
          title: 'Provider Delphi',
          description:
            'Supporto completo etichette Delphi Display con configurazione dedicata',
          iconName: 'ServerIcon',
        },
        {
          title: 'Riepilogo stato ESL',
          description:
            'Dashboard con stato etichette, prezzi pubblicati e template in uso',
          iconName: 'TableCellsIcon',
        },
        {
          title: 'Anteprima ESL',
          description:
            'Visualizzazione anteprima etichetta prima della pubblicazione',
          iconName: 'EyeIcon',
        },
      ],
    },
    {
      id: 'integrazione-dati',
      name: 'Integrazione Dati',
      icon: '📊',
      iconName: 'CircleStackIcon',
      features: [
        {
          title: 'Caratteristiche Eldomcat',
          description:
            'Contenuti tecnici aggiornati automaticamente da banca dati Eldomcat',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Disponibilita e promozioni',
          description:
            'Visualizzazione completa disponibilita e promozioni in corso',
          iconName: 'ShoppingCartIcon',
        },
        {
          title: 'Variazioni prezzo',
          description:
            'Segnalazione e analisi dettagliata delle variazioni di prezzo',
          iconName: 'ArrowTrendingUpIcon',
        },
        {
          title: 'Storico stampe',
          description:
            'Memorizzazione informazioni ultima stampa effettuata per articolo',
          iconName: 'ClockIcon',
        },
        {
          title: 'Banche dati esterne',
          description:
            'Integrazione con banche dati esterne per contenuti tecnici',
          iconName: 'GlobeAltIcon',
        },
      ],
    },
    {
      id: 'compliance-normative',
      name: 'Compliance e Normative',
      icon: '✅',
      iconName: 'ShieldCheckIcon',
      features: [
        {
          title: 'Etichettatura energetica',
          description:
            'Template conformi normativa etichettatura energetica UE',
          iconName: 'BoltIcon',
        },
        {
          title: 'RAEE compliance',
          description:
            'Simboli RAEE e informazioni smaltimento secondo normativa',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Caratteristiche conformi',
          description:
            'Descrizioni e specifiche tecniche conformi alle normative',
          iconName: 'DocumentCheckIcon',
        },
        {
          title: 'Report variazioni',
          description:
            'Report e analisi variazioni prezzo per audit e controllo',
          iconName: 'ChartBarIcon',
        },
      ],
    },
  ],

  optionalConnections: [
    {
      id: 'banca-dati',
      name: 'Banca Dati Eldomcat',
      description:
        'Caratteristiche tecniche automatiche per cartelli professionali',
      benefits: [
        'Specifiche tecniche aggiornate',
        'Immagini prodotto ufficiali',
        'Categorie merceologiche corrette',
      ],
      icon: '📚',
      iconName: 'BookOpenIcon',
      relatedModuleSlug: 'banca-dati-eldomcat',
    },
    {
      id: 'vendite',
      name: 'Modulo Vendite',
      description:
        'Stampa cartelli direttamente da documenti vendita e scontrini',
      benefits: [
        'Stampa da ricevimento merce',
        'Cartelli per articoli venduti',
        'Integrazione carrello Label',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'promozioni',
      name: 'Modulo Promozioni',
      description:
        'Sincronizzazione automatica prezzi promozionali su cartelli ed ESL',
      benefits: [
        'Prezzi promo automatici',
        'Countdown scadenza promo',
        'Grafica promozionale dedicata',
      ],
      icon: '🎯',
      iconName: 'TagIcon',
      relatedModuleSlug: 'promozioni',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Visualizzazione disponibilita e giacenze su cartelli ed ESL',
      benefits: [
        'Disponibilita in tempo reale',
        'Alert scorte minime',
        'Stampa per ricevimento merce',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'daisyapp',
      name: 'App DaisyApp',
      description:
        'Gestione cartelli ed ESL direttamente da dispositivo mobile',
      benefits: [
        'Stampa da smartphone',
        'Verifica prezzi sul campo',
        'Associazione ESL mobile',
      ],
      icon: '📱',
      iconName: 'DevicePhoneMobileIcon',
      externalLink: 'https://www.elettrorama.com/',
    },
    {
      id: 'ses-imagotag',
      name: 'SES Imagotag',
      description:
        'Integrazione certificata con provider leader ESL per retail',
      benefits: [
        'Protocollo Vusion certificato',
        'Supporto reti Unieuro',
        'Aggiornamento real-time',
      ],
      icon: '🏷️',
      iconName: 'TagIcon',
      externalLink: 'https://www.ses-imagotag.com/',
    },
    {
      id: 'delphi',
      name: 'Etichette Delphi',
      description:
        'Supporto completo etichette elettroniche Delphi Display',
      benefits: [
        'Configurazione ID Installation',
        'Template dedicati',
        'Webservice HTTPS',
      ],
      icon: '📺',
      iconName: 'DeviceTabletIcon',
      externalLink: 'https://www.delphi-display.com/',
    },
    {
      id: 'eldomcat',
      name: 'Eldomcat',
      description:
        'Banca dati articoli elettrodomestici per caratteristiche complete',
      benefits: [
        '300.000+ articoli',
        'Specifiche tecniche dettagliate',
        'Aggiornamento quotidiano',
      ],
      icon: '🗄️',
      iconName: 'CircleStackIcon',
      externalLink: 'https://www.eldomcat.it/',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/label-hero.svg',
      alt: 'Dashboard principale modulo Label',
      caption: 'Gestione cartelli e etichette ESL da un\'unica interfaccia',
    },
    {
      src: '/screenshots/moduli/label-template.svg',
      alt: 'Editor template cartello',
      caption: 'Personalizzazione layout con logo, slogan e caratteristiche',
    },
    {
      src: '/screenshots/moduli/label-esl.svg',
      alt: 'Gestione etichette elettroniche ESL',
      caption: 'Dashboard ESL con stato, associazioni e anteprima template',
    },
    {
      src: '/screenshots/moduli/label-stampa.svg',
      alt: 'Stampa massiva cartelli',
      caption: 'Selezione articoli e anteprima prima della stampa',
    },
  ],

  benefits: [
    {
      title: 'Look professionale',
      metric: '+45% brand',
      description:
        'Negozi con cartelli Label aumentano la percezione di professionalita del 45%.',
    },
    {
      title: 'Risparmio tempo',
      metric: '-90%',
      description:
        'Stampa massiva di cartelli per reparto e sincronizzazione ESL automatica.',
    },
    {
      title: 'Prezzi sempre allineati',
      metric: '100% accuracy',
      description:
        'ESL e cartelli sincronizzati con gestionale: zero errori di prezzo.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Catena 12 negozi elettronica con ESL',
    customer: 'Catena elettronica (12 punti vendita)',
    challenge:
      'Stampa cartelli manuale con Word: tempo enorme, risultato non professionale, caratteristiche prodotti spesso errate. Ogni cartello richiedeva 15 minuti. Le etichette elettroniche ESL richiedevano aggiornamento manuale con errori frequenti tra prezzo esposto e gestionale.',
    solution:
      'Attivazione Label con template custom brandizzati. Integrazione Eldomcat per caratteristiche automatiche. Stampa massiva per reparto. Attivazione ESL SES Imagotag con sincronizzazione automatica prezzi ogni 15 minuti. Dashboard unificata per cartelli ed ESL.',
    results: [
      '-90% tempo stampa cartelli (da 8 ore a 45 minuti)',
      'Look uniforme e professionale su tutti i 12 negozi',
      'Caratteristiche tecniche sempre aggiornate da Eldomcat',
      'Etichette ESL sempre allineate con prezzi gestionale',
      'Zero errori di prezzo tra cartello/ESL/gestionale',
    ],
  },

  integrations: [
    { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
    { name: 'Promozioni', slug: 'promozioni' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'RAEE', slug: 'raee' },
  ],

  faq: [
    {
      question: 'Posso personalizzare i template dei cartelli?',
      answer:
        'Si, puoi creare template completamente personalizzati con logo, colori aziendali, font e layout. Oppure parti dai template pronti e li modifichi a piacimento. Puoi anche richiedere layout custom realizzati su misura.',
    },
    {
      question: 'Come vengono inserite le caratteristiche tecniche?',
      answer:
        'Con Eldomcat attivo, le caratteristiche si inseriscono automaticamente nel cartello. Il sistema sa quali caratteristiche mostrare per ogni categoria merceologica (es: TV mostra pollici, risoluzione, HDR). I dati sono sempre aggiornati.',
    },
    {
      question: 'Quali stampanti sono supportate?',
      answer:
        'Label supporta tutte le stampanti A4 standard (inkjet, laser) e stampanti fotografiche 10x15cm. E compatibile con la maggior parte delle etichettatrici professionali. Configurazione automatica con driver Windows.',
    },
    {
      question: 'Posso stampare cartelli con promozioni a tempo?',
      answer:
        'Si, il sistema mostra automaticamente il prezzo promozionale e puo aggiungere countdown "Promo valida fino al..." per creare senso di urgenza. Le promozioni si sincronizzano con il modulo Promozioni.',
    },
    {
      question: 'Come funzionano le etichette elettroniche ESL?',
      answer:
        'Le etichette ESL si associano agli articoli tramite codice etichetta. Il sistema sincronizza automaticamente prezzi, promozioni e informazioni con il provider (SES Imagotag, Delphi). Un cronjob aggiorna le etichette ogni 15 minuti o in tempo reale via webservice.',
    },
    {
      question: 'Quali provider ESL sono supportati?',
      answer:
        'Supportiamo SES Imagotag (Vusion) per reti Unieuro e altre catene, e Delphi Display. Ogni provider ha configurazione specifica (orientamento, template, API). Il sistema gestisce automaticamente il protocollo di comunicazione.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
