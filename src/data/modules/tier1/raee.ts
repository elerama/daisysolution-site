import { CLIENTS, SLA } from '@/data/siteStats'
import type { ModuleData } from '../types'

export const raeeModule: ModuleData = {
  slug: 'raee',
  name: 'RAEE',
  tagline: 'Gestione contributi ambientali con tracciabilita e reportistica CDC',
  category: 'Amministrazione',
  categoryColor: 'indigo',
  icon: '♻️',
  tier: 1,

  // Hero migliorata v2.1
  heroIcon: 'ArrowPathRoundedSquareIcon',
  heroIntro:
    'Gestione completa del ciclo RAEE: dalla registrazione del ritiro cliente alla consegna ai centri di raccolta, con DDT automatici, tracking completo e reportistica per compliance normativa D.Lgs 49/2014.',

  overview: {
    intro:
      'Il modulo RAEE garantisce la compliance normativa sui rifiuti elettronici (D.Lgs 49/2014). Applicazione automatica contributi RAEE a vendita, registro ritiro da clienti, tracking smaltimento presso CDC (Centri Di Coordinamento), reportistica obbligatoria. Gestione multi-CDC: Ecodom, Remedia, Ecolight, etc.',
    mainBenefits: [
      'Compliance normativa automatica D.Lgs 49/2014',
      'Zero sanzioni per mancate dichiarazioni',
      'Tracciabilita completa ritiri e smaltimenti',
      'Riduzione oneri amministrativi del 70%',
    ],
    stats: [
      {
        label: 'CDC gestiti',
        value: '10+',
        description: 'Ecodom, Remedia, Ecolight...',
      },
      {
        label: 'Compliance',
        value: '100%',
        description: 'normativa D.Lgs 49/2014',
      },
      {
        label: 'Punti vendita attivi',
        value: `${CLIENTS.totalStores}+`,
        description: 'usano il modulo RAEE',
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
      title: 'Contributi automatici',
      description:
        'Applica contributi RAEE alla vendita in base alla categoria prodotto',
      icon: '💰',
      iconName: 'CurrencyEuroIcon',
    },
    {
      title: 'Registro ritiri',
      description:
        'Registra ritiro RAEE dai clienti con peso, tipologia e data',
      icon: '📋',
      iconName: 'ClipboardDocumentListIcon',
    },
    {
      title: 'Tracking CDC',
      description:
        'Traccia smaltimento presso Centri Di Coordinamento autorizzati',
      icon: '🚛',
      iconName: 'TruckIcon',
    },
    {
      title: 'Multi-CDC',
      description:
        'Gestisci comunicazioni con Ecodom, Remedia, Ecolight e altri consorzi',
      icon: '🏢',
      iconName: 'BuildingOffice2Icon',
    },
    {
      title: 'Alert scadenze',
      description:
        'Notifiche automatiche per scadenze comunicazioni obbligatorie',
      icon: '⏰',
      iconName: 'BellAlertIcon',
    },
    {
      title: 'Calcolo per categoria',
      description:
        'Contributi differenziati per R1, R2, R3, R4, R5 secondo normativa',
      icon: '📊',
      iconName: 'CalculatorIcon',
    },
    {
      title: 'Reportistica obbligatoria',
      description:
        'Export dati per dichiarazioni periodiche ai CDC e autorita',
      icon: '📄',
      iconName: 'DocumentChartBarIcon',
    },
    {
      title: 'Storico completo',
      description:
        'Archivio storico ritiri e smaltimenti per audit e verifiche ispettive',
      icon: '🗄️',
      iconName: 'ArchiveBoxIcon',
    },
    {
      title: 'DDT RAEE automatico',
      description:
        'Generazione automatica documenti di trasporto per consegna a centri raccolta',
      icon: '📑',
      iconName: 'DocumentDuplicateIcon',
    },
    {
      title: 'Trasferimenti tra negozi',
      description:
        'Gestione ritiri RAEE trasferiti tra punti vendita della rete',
      icon: '🔄',
      iconName: 'ArrowsRightLeftIcon',
    },
  ],

  // Feature Categories v2.1
  featureCategories: [
    {
      id: 'codici-cer',
      name: 'Gestione Codici C.E.R.',
      icon: '🏷️',
      iconName: 'TagIcon',
      features: [
        {
          title: 'Anagrafica codici C.E.R.',
          description:
            'Gestione completa codici europei rifiuto con descrizione e parametri',
          iconName: 'QueueListIcon',
        },
        {
          title: 'Classificazione pericolosita',
          description:
            'Distinzione automatica tra rifiuti pericolosi e non pericolosi',
          iconName: 'ExclamationTriangleIcon',
        },
        {
          title: 'Peso standard per tipologia',
          description:
            'Configurazione peso di riferimento per ogni codice C.E.R.',
          iconName: 'ScaleIcon',
        },
        {
          title: 'Associazione a categorie',
          description:
            'Collegamento automatico codice RAEE a categorie prodotto (R1-R5)',
          iconName: 'LinkIcon',
        },
        {
          title: 'Listini contributi RAEE',
          description:
            'Import e gestione listini contributi ambientali per categoria',
          iconName: 'ArrowDownTrayIcon',
        },
      ],
    },
    {
      id: 'ritiro-raee',
      name: 'Ritiro RAEE',
      icon: '📥',
      iconName: 'InboxArrowDownIcon',
      features: [
        {
          title: 'Ritiro da vendita (1-vs-1)',
          description:
            'Registrazione automatica ritiro RAEE associato ad acquisto nuovo apparecchio',
          iconName: 'ShoppingCartIcon',
        },
        {
          title: 'Ritiro servizio clienti',
          description:
            'Registrazione ritiro RAEE senza acquisto (servizio al cliente)',
          iconName: 'UserIcon',
        },
        {
          title: 'Collegamento cliente',
          description:
            'Associazione ritiro a scheda cliente con storico completo',
          iconName: 'IdentificationIcon',
        },
        {
          title: 'ID tracking univoco',
          description:
            'Generazione codice univoco per tracciare ogni ritiro RAEE',
          iconName: 'QrCodeIcon',
        },
        {
          title: 'Stati ritiro',
          description:
            'Workflow completo: prenotato, confermato, scaricato, trasferito',
          iconName: 'ArrowPathIcon',
        },
        {
          title: 'Ricevute di ritiro',
          description:
            'Generazione automatica ricevuta di presa in carico RAEE da consegnare al cliente',
          iconName: 'ReceiptRefundIcon',
        },
      ],
    },
    {
      id: 'trasporto-scarico',
      name: 'Trasporto e Scarico',
      icon: '🚚',
      iconName: 'TruckIcon',
      features: [
        {
          title: 'Anagrafica trasportatori',
          description:
            'Gestione vettori autorizzati con codice albo ambientale',
          iconName: 'BuildingStorefrontIcon',
        },
        {
          title: 'Gestione targhe',
          description:
            'Registro targhe mezzi per ogni trasportatore con targa default',
          iconName: 'TicketIcon',
        },
        {
          title: 'DDT RAEE automatico',
          description:
            'Generazione documento di trasporto per consegna a CDC',
          iconName: 'DocumentArrowUpIcon',
        },
        {
          title: 'Tracking consegna',
          description:
            'Monitoraggio stato spedizione fino a conferma ricezione CDC',
          iconName: 'MagnifyingGlassIcon',
        },
        {
          title: 'Conferma scarico',
          description:
            'Registrazione peso effettivo e conferma consegna a centro raccolta',
          iconName: 'CheckBadgeIcon',
        },
        {
          title: 'DDT con modulo firme',
          description:
            'Documento di trasporto con campi firma per vettore, destinatario, utente e distributore/installatore',
          iconName: 'PencilSquareIcon',
        },
        {
          title: 'Estremi Albo ambientale',
          description:
            'Riferimenti comunicazione Albo e autorizzazioni trasportatore su DDT',
          iconName: 'DocumentCheckIcon',
        },
      ],
    },
    {
      id: 'centri-raccolta',
      name: 'Centri di Raccolta',
      icon: '🏭',
      iconName: 'BuildingOffice2Icon',
      features: [
        {
          title: 'Anagrafica CDC',
          description:
            'Gestione centri raccolta: Ecodom, Ecoped, Remedia, Ecolight, ERP',
          iconName: 'BuildingLibraryIcon',
        },
        {
          title: 'Contatti referenti',
          description:
            'Indirizzi, telefoni e referenti per ogni centro di raccolta',
          iconName: 'PhoneIcon',
        },
        {
          title: 'Associazione per categoria',
          description:
            'Configurazione CDC di riferimento per ogni categoria RAEE',
          iconName: 'AdjustmentsHorizontalIcon',
        },
        {
          title: 'Storico consegne',
          description:
            'Cronologia completa consegne per centro con pesi e date',
          iconName: 'ClockIcon',
        },
      ],
    },
    {
      id: 'compliance-reporting',
      name: 'Compliance e Reportistica',
      icon: '📊',
      iconName: 'ChartBarSquareIcon',
      features: [
        {
          title: 'Registro carico/scarico',
          description:
            'Schedario RAEE con numerazione progressiva per ogni punto vendita',
          iconName: 'ClipboardDocumentListIcon',
        },
        {
          title: 'Dichiarazioni trimestrali',
          description:
            'Export dati aggregati nel formato richiesto dai consorzi',
          iconName: 'DocumentTextIcon',
        },
        {
          title: 'Alert scadenze',
          description:
            'Notifiche automatiche 15 giorni prima delle scadenze comunicazioni',
          iconName: 'BellAlertIcon',
        },
        {
          title: 'Report audit',
          description:
            'Documentazione completa per verifiche ispettive CDC e autorita',
          iconName: 'DocumentMagnifyingGlassIcon',
        },
        {
          title: 'Export Excel',
          description:
            'Esportazione dati in formato Excel compatibile con tutti i consorzi',
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
        'Integrazione per applicazione automatica contributi e ritiro 1-vs-1',
      benefits: [
        'Contributi RAEE automatici in vendita',
        'Registrazione ritiro da scontrino',
        'Regola 1-vs-1 automatizzata',
      ],
      icon: '🛒',
      iconName: 'ShoppingCartIcon',
      relatedModuleSlug: 'vendite-cassa',
    },
    {
      id: 'magazzino',
      name: 'Modulo Magazzino',
      description:
        'Collegamento per gestione deposito temporaneo RAEE',
      benefits: [
        'Area stoccaggio RAEE dedicata',
        'Tracking giacenze per categoria',
        'Inventario rifiuti in deposito',
      ],
      icon: '📦',
      iconName: 'CubeIcon',
      relatedModuleSlug: 'magazzino',
    },
    {
      id: 'banca-dati',
      name: 'Banca Dati Eldomcat',
      description:
        'Classificazione RAEE automatica per ogni articolo del catalogo',
      benefits: [
        'Codice C.E.R. precompilato',
        'Categoria R1-R5 automatica',
        'Contributo RAEE aggiornato',
      ],
      icon: '📚',
      iconName: 'CircleStackIcon',
      relatedModuleSlug: 'banca-dati-eldomcat',
    },
    {
      id: 'contabilita',
      name: 'Modulo Contabilita',
      description:
        'Integrazione per contabilizzazione contributi RAEE incassati',
      benefits: [
        'Registrazione contributi automatica',
        'Riconciliazione con consorzi',
        'Report fiscali RAEE',
      ],
      icon: '📒',
      iconName: 'CalculatorIcon',
      relatedModuleSlug: 'contabilita',
    },
    {
      id: 'ecodom',
      name: 'Consorzio Ecodom',
      description:
        'Integrazione con il principale consorzio RAEE italiano',
      benefits: [
        'Export formato Ecodom',
        'Comunicazioni trimestrali',
        'Aggiornamento listini',
      ],
      icon: '🌿',
      iconName: 'GlobeEuropeAfricaIcon',
      externalLink: 'https://www.ecodom.it',
    },
    {
      id: 'remedia',
      name: 'Consorzio Remedia',
      description:
        'Collegamento con consorzio per RAEE e pile',
      benefits: [
        'Export formato Remedia',
        'Gestione pile e accumulatori',
        'Tracciabilita completa',
      ],
      icon: '🔋',
      iconName: 'BoltIcon',
      externalLink: 'https://www.consorzioremedia.it',
    },
  ],

  screenshots: [
    {
      src: '/screenshots/moduli/raee-hero.svg',
      alt: 'Dashboard ritiri RAEE',
      caption: 'Riepilogo ritiri con stati, totali e filtri per periodo',
    },
    {
      src: '/screenshots/moduli/raee-ritiro.svg',
      alt: 'Form registrazione ritiro RAEE',
      caption: 'Inserimento ritiro con cliente, codice C.E.R. e peso',
    },
    {
      src: '/screenshots/moduli/raee-ddt.svg',
      alt: 'DDT RAEE generato',
      caption: 'Documento di trasporto per consegna a centro raccolta',
    },
    {
      src: '/screenshots/moduli/raee-report.svg',
      alt: 'Report compliance RAEE',
      caption: 'Statistiche e export per dichiarazioni ai consorzi',
    },
  ],

  benefits: [
    {
      title: 'Compliance garantita',
      metric: '100% normativa',
      description:
        'Il sistema applica automaticamente la normativa D.Lgs 49/2014. Nessun rischio di sanzioni per mancate dichiarazioni.',
    },
    {
      title: 'Tempo amministrativo',
      metric: '-70% ore',
      description:
        'Automatizzazione di registrazioni, DDT e reportistica riduce il lavoro amministrativo del 70%.',
    },
    {
      title: 'Tracciabilita audit-ready',
      metric: 'Real-time',
      description:
        'Storico completo di ritiri, trasferimenti e consegne sempre disponibile per ispezioni CDC e audit.',
    },
  ],

  useCase: {
    title: 'Caso cliente: Catena 12 negozi elettrodomestici',
    customer: 'Rivenditore specializzato grandi elettrodomestici',
    challenge:
      'Gestire manualmente i contributi RAEE per 12 punti vendita causava errori di applicazione, ritardi nelle comunicazioni ai CDC e rischio sanzioni. Il commercialista spendeva 2 giorni/mese per reportistica RAEE. I DDT venivano compilati a mano con frequenti errori.',
    solution:
      'Implementato modulo RAEE con applicazione automatica contributi a vendita e registro centralizzato ritiri. Regola 1-vs-1 gestita automaticamente alla cassa. DDT RAEE generati con un click. Export automatico dati per dichiarazioni CDC trimestrali. Trasferimenti tra negozi tracciati.',
    results: [
      "Zero sanzioni per mancate dichiarazioni (prima 2-3 all'anno)",
      'Tempo amministrativo ridotto da 16 a 5 ore/mese',
      'DDT RAEE generati automaticamente senza errori',
      'Contributi RAEE applicati correttamente su 100% vendite',
      'Trasferimenti tra punti vendita tracciati in tempo reale',
    ],
  },

  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
    { name: 'Contabilita', slug: 'contabilita' },
  ],

  faq: [
    {
      question: 'Come vengono applicati i contributi RAEE alla vendita?',
      answer:
        'Il sistema classifica automaticamente ogni articolo nella categoria RAEE corretta (R1-R5) e applica il contributo ambientale vigente alla vendita. Il contributo appare come voce separata in fattura.',
    },
    {
      question: 'Devo registrare manualmente ogni ritiro RAEE dal cliente?',
      answer:
        'Si, ma e molto rapido. Al momento della vendita o consegna, registri il ritiro RAEE (tipologia e peso stimato). Il sistema tiene traccia di tutto per le comunicazioni ai CDC.',
    },
    {
      question: 'Quali CDC sono supportati?',
      answer:
        'Il modulo gestisce tutti i principali consorzi: Ecodom, Remedia, Ecolight, Ecoped, ERP, RAEE-point. Puoi configurare piu CDC se lavori con consorzi diversi per categorie diverse.',
    },
    {
      question: 'Come viene generata la reportistica obbligatoria?',
      answer:
        'Il sistema prepara automaticamente i dati aggregati per le dichiarazioni trimestrali ai CDC. Puoi esportare file nel formato richiesto da ogni consorzio o generare report PDF per il commercialista.',
    },
    {
      question: 'Come funziona la regola 1-vs-1?',
      answer:
        'Quando il cliente acquista un nuovo apparecchio elettrico, ha diritto al ritiro gratuito del vecchio equivalente (1-vs-1). Il sistema registra automaticamente il ritiro associandolo alla vendita, con generazione del documento di presa in carico.',
    },
    {
      question: 'Posso trasferire RAEE tra diversi punti vendita?',
      answer:
        'Si, il modulo supporta trasferimenti tra negozi. Il RAEE ritirato in un punto vendita puo essere trasferito a un magazzino centralizzato o a un altro negozio prima della consegna al centro di raccolta. Ogni trasferimento e tracciato con DDT.',
    },
  ],

  _meta: {
    isComplete: true,
    version: 'v2.1',
    lastUpdated: '2025-01-15',
  },
}
