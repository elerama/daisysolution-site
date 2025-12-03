import type { ModuleData } from '../types'

export const riparazioniModule: ModuleData = {
  slug: 'riparazioni',
  name: 'Riparazioni',
  tagline: 'Gestisci il laboratorio con tracking interventi, ricambi e Model Assistance',
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '🔧',
  tier: 1,
  overview: {
    intro:
      'Il modulo Riparazioni trasforma il tuo laboratorio in un centro assistenza professionale. Gestisci accettazioni, diagnosi, riparazioni, ricambi e manodopera. Integrazione diretta con Model Assistance (2000+ clienti help desk) per ticket assistenza e gestione garanzie convenzionali ed estese. Notifiche SMS automatiche ai clienti.',
    mainBenefits: [
      'Tracking completo stato riparazioni real-time',
      'Clienti sempre informati con notifiche automatiche',
      'Integrazione Model Assistance per 2000+ utenti',
      'Report redditività laboratorio per ricambi e assistenza',
    ],
    stats: [
      {
        label: 'Clienti Model Assistance',
        value: '2000+',
        description: 'help desk integrato con ticket',
      },
      {
        label: 'Tempo medio riparazione',
        value: '-40%',
        description: 'con tracking ottimizzato',
      },
    ],
  },
  features: [
    {
      title: 'Accettazione rapida',
      description:
        'Registra diagnosi iniziale e crea ticket riparazione in pochi secondi',
      icon: '📝',
    },
    {
      title: 'Stati riparazione',
      description:
        'Ricevuto, diagnosi, riparato, pronto: visibilità totale del processo',
      icon: '🔄',
    },
    {
      title: 'Gestione ricambi',
      description:
        'Scarico automatico ricambi da magazzino con tracking costi',
      icon: '⚙️',
    },
    {
      title: 'Preventivi cliente',
      description:
        'Genera preventivi riparazione con manodopera e ricambi',
      icon: '💰',
    },
    {
      title: 'Model Assistance',
      description:
        'Integrazione con piattaforma help desk per 2000+ clienti',
      icon: '🎧',
    },
    {
      title: 'Garanzie integrate',
      description:
        'Gestione riparazioni in garanzia convenzionale ed estesa',
      icon: '🛡️',
    },
    {
      title: 'Alert SLA',
      description:
        'Notifiche automatiche se i tempi di riparazione superano la soglia',
      icon: '⏰',
    },
    {
      title: 'SMS notifiche',
      description:
        'Avvisa automaticamente i clienti quando la riparazione è completata',
      icon: '📱',
    },
  ],
  benefits: [
    {
      title: 'Clienti informati',
      metric: '95% soddisfazione',
      description:
        'Le notifiche automatiche tengono i clienti aggiornati, riducendo chiamate e aumentando la soddisfazione.',
    },
    {
      title: 'Laboratorio efficiente',
      metric: '-40% tempi',
      description:
        'Il tracking ottimizzato riduce i tempi medi di riparazione del 40%.',
    },
    {
      title: 'Revenue assistenza',
      metric: '+25% margine',
      description:
        'Gestione professionale aumenta revenue da ricambi e manodopera del 25%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Centro assistenza con 150 riparazioni/mese',
    customer: 'Rivenditore multi-brand elettrodomestici',
    challenge:
      'Il centro assistenza gestiva riparazioni su fogli Excel. Clienti chiamavano continuamente per sapere lo stato, tecnici perdevano tempo in attività amministrative invece che riparare.',
    solution:
      'Implementato modulo Riparazioni con integrazione Model Assistance e SMS automatici. Ogni riparazione ha un tracking completo con stati, ricambi usati e tempi intervento. I clienti ricevono SMS quando la riparazione è pronta.',
    results: [
      'Chiamate clienti ridotte del 70% grazie alle notifiche automatiche',
      'Tempi riparazione ridotti del 40% con processi ottimizzati',
      'Revenue laboratorio +25% per gestione professionale',
      '2000+ ticket assistenza gestiti tramite Model Assistance',
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
        "Model Assistance è una piattaforma help desk usata da 2000+ clienti. L'integrazione consente di creare ticket riparazione direttamente da Daisy, sincronizzare stati e gestire comunicazioni centralizzate.",
    },
    {
      question: 'I clienti ricevono notifiche automatiche?',
      answer:
        'Sì, puoi configurare SMS automatici per avvisare i clienti quando la riparazione è completata, quando è necessaria autorizzazione per costi extra, o per altri eventi del processo.',
    },
    {
      question: 'Posso gestire garanzie convenzionali ed estese?',
      answer:
        "Sì, il modulo si integra con il registro Garanzie per verificare automaticamente se un prodotto è coperto da garanzia convenzionale o estesa al momento dell'accettazione.",
    },
    {
      question: 'Come gestisco i ricambi usati nelle riparazioni?',
      answer:
        'Ogni riparazione può avere una lista di ricambi. Il sistema scarica automaticamente i ricambi dal magazzino e ne traccia i costi per calcolare la redditività del laboratorio.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
