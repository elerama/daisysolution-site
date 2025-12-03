import type { ModuleData } from '../types'

export const garanzieModule: ModuleData = {
  slug: 'garanzie',
  name: 'Garanzie',
  tagline: 'Registro garanzie con alert scadenza e gestione estensioni',
  category: 'Compliance e Amministrazione',
  categoryColor: 'indigo',
  icon: '🛡️',
  tier: 2,
  overview: {
    intro:
      'Il modulo Garanzie è il registro completo di tutte le garanzie prodotti venduti. Registrazione automatica garanzia a vendita, certificati, alert scadenze, vendita estensioni garanzia, gestione resi in garanzia, storico interventi per seriale. Report statistiche difettosità per brand/modello per ottimizzare assortimento.',
    mainBenefits: [
      'Nessuna garanzia persa o dimenticata',
      'Up-sell estensioni garanzia per revenue extra',
      'Tracciabilità completa per audit e contenziosi',
      'Riduzione contenziosi con storico completo',
    ],
  },
  features: [
    {
      title: 'Registrazione automatica',
      description:
        'Garanzia registrata automaticamente alla vendita con durata standard',
      icon: '📝',
    },
    {
      title: 'Certificati garanzia',
      description:
        'Genera e stampa certificati garanzia personalizzati per clienti',
      icon: '📜',
    },
    {
      title: 'Alert scadenze',
      description:
        'Notifiche automatiche quando garanzie convenzionali stanno per scadere',
      icon: '⏰',
    },
    {
      title: 'Vendita estensioni',
      description:
        'Sistema up-sell per proporre estensioni garanzia a clienti',
      icon: '💰',
    },
    {
      title: 'Gestione resi',
      description:
        'Traccia resi in garanzia con motivo, esito, intervento effettuato',
      icon: '🔄',
    },
    {
      title: 'Storico per seriale',
      description:
        'Cronologia completa interventi garanzia per numero seriale prodotto',
      icon: '🔍',
    },
    {
      title: 'Report difettosità',
      description:
        'Statistiche difetti per brand/modello per ottimizzare assortimento',
      icon: '📊',
    },
    {
      title: 'Integrazione riparazioni',
      description:
        'Collega interventi riparazione a garanzie per tracciabilità completa',
      icon: '🔗',
    },
  ],
  benefits: [
    {
      title: 'Zero garanzie perse',
      metric: '100% tracciabilità',
      description:
        'Ogni prodotto venduto ha la sua garanzia registrata. Impossibile perdere o dimenticare garanzie, anche a distanza di anni.',
    },
    {
      title: 'Revenue estensioni',
      metric: '+8% per vendita',
      description:
        "La proposta sistematica di estensioni garanzia genera revenue extra pari all'8% del valore vendita.",
    },
    {
      title: 'Contenziosi ridotti',
      metric: '-60% dispute',
      description:
        'Lo storico completo riduce i contenziosi del 60%. In caso di dispute, hai tutte le prove necessarie.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Rivenditore elettrodomestici con 300 vendite/mese',
    customer: 'Negozio specializzato grandi elettrodomestici',
    challenge:
      'Clienti tornavano dopo mesi per un problema, ma il negozio non trovava traccia della vendita o della garanzia. Nessun up-sell di estensioni garanzia. Contenziosi frequenti per assenza di documentazione.',
    solution:
      'Implementato modulo Garanzie con registrazione automatica a vendita. Alert 15 giorni prima della scadenza garanzia convenzionale per proporre estensione. Storico completo interventi per ogni seriale. Report difettosità per brand.',
    results: [
      'Zero garanzie perse: 100% tracciabilità da anno 2015',
      'Up-sell estensioni: +€24k/anno di revenue extra',
      'Contenziosi ridotti del 65% con documentazione completa',
      'Ottimizzazione assortimento: rimossi 2 brand problematici',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Riparazioni', slug: 'riparazioni' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
  ],
  faq: [
    {
      question: 'Le garanzie vengono registrate automaticamente?',
      answer:
        'Sì, alla vendita di un prodotto il sistema registra automaticamente la garanzia con durata standard (es. 24 mesi per elettrodomestici). Puoi personalizzare durate per categoria prodotto.',
    },
    {
      question: 'Come funziona la vendita delle estensioni garanzia?',
      answer:
        "Al momento della vendita, il sistema può proporre automaticamente estensioni garanzia (es. +2 anni). L'estensione viene registrata e il certificato aggiunto alla garanzia base.",
    },
    {
      question: 'Posso tracciare tutti gli interventi su un prodotto?',
      answer:
        'Sì, ogni prodotto con numero seriale ha uno storico completo: vendita, interventi in garanzia, riparazioni, sostituzioni. Utile per contenziosi o per analizzare affidabilità prodotti.',
    },
    {
      question: 'I report di difettosità come aiutano il business?',
      answer:
        "Vedendo quali brand/modelli hanno più interventi in garanzia, puoi ottimizzare l'assortimento. Rimuovi prodotti problematici, premi brand affidabili. Alcuni clienti hanno ridotto i resi del 40%.",
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
