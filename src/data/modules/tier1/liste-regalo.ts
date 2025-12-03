import type { ModuleData } from '../types'

export const listeRegaloModule: ModuleData = {
  slug: 'liste-regalo',
  name: 'Liste Regalo',
  tagline: 'Liste nozze e nascita con portale web per invitati e tracking acquisti',
  category: 'Crescita e Sviluppo',
  categoryColor: 'violet',
  icon: '🎁',
  tier: 1,
  overview: {
    intro:
      "Il modulo Liste Regalo trasforma ogni evento in un'opportunità di revenue ricorrente. Gestisci liste nozze, nascita, compleanno con portale web pubblico per invitati. Gli sposi selezionano prodotti, gli invitati acquistano con contributi parziali o totali. Tracking real-time articoli acquistati/rimanenti, notifiche automatiche, integrazione e-commerce per acquisti online.",
    mainBenefits: [
      'Fidelizzazione clienti per eventi importanti',
      'Revenue ricorrente da liste con margini elevati',
      'Esperienza digitale moderna per invitati',
      'Gestione centralizzata multi-negozio',
    ],
    stats: [
      {
        label: 'Scontrino medio liste',
        value: '3.5x',
        description: 'superiore rispetto vendite normali',
      },
      {
        label: 'Tasso conversione liste',
        value: '85%',
        description: 'degli invitati effettua acquisto',
      },
    ],
  },
  features: [
    {
      title: 'Creazione liste',
      description:
        'Crea liste online o in negozio con selezione prodotti e quantità',
      icon: '📝',
    },
    {
      title: 'Portale invitati',
      description:
        'Portale web pubblico dove gli invitati visualizzano e acquistano regali',
      icon: '🌐',
    },
    {
      title: 'Contributi parziali',
      description:
        'Gli invitati possono contribuire parzialmente per regali costosi',
      icon: '💰',
    },
    {
      title: 'Tracking real-time',
      description:
        'Sposi vedono in tempo reale quali articoli sono stati acquistati',
      icon: '📊',
    },
    {
      title: 'Notifiche automatiche',
      description:
        'Avvisi sposi quando un invitato acquista un regalo dalla lista',
      icon: '🔔',
    },
    {
      title: 'Ritiro regalo',
      description:
        'Sistema codice lista per ritiro regali in negozio senza scontrino',
      icon: '🎁',
    },
    {
      title: 'Integrazione e-commerce',
      description:
        'Invitati possono acquistare regali online con consegna diretta',
      icon: '🛒',
    },
    {
      title: 'Report liste',
      description:
        'Statistiche contributi, articoli più popolari, revenue per evento',
      icon: '📈',
    },
  ],
  benefits: [
    {
      title: 'Revenue elevata',
      metric: '3.5x scontrino',
      description:
        'Lo scontrino medio per acquisti liste è 3.5 volte superiore rispetto alle vendite normali. Margini elevati su prodotti regalo.',
    },
    {
      title: 'Fidelizzazione eventi',
      metric: '85% conversione',
      description:
        "L'85% degli invitati che visualizza una lista effettua un acquisto. Il portale web aumenta il tasso di conversione del 40% rispetto alle liste tradizionali.",
    },
    {
      title: 'Clienti lifetime',
      description:
        'Una coppia che crea la lista nozze da te torna per lista nascita, compleanni, anniversari. Fidelizzazione per anni.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Negozio specializzato casalinghi',
    customer: 'Rivenditore casalinghi e piccoli elettrodomestici',
    challenge:
      'Gestiva liste nozze su fogli carta. Gli invitati dovevano venire in negozio per vedere la lista, molti rinunciavano per distanza. Sposi non sapevano cosa era stato acquistato fino al giorno del ritiro. Revenue liste in calo.',
    solution:
      'Implementato modulo Liste Regalo con portale web pubblico. Sposi creano la lista online o in negozio, invitati accedono al portale da casa, acquistano online o prenotano per ritiro. Notifiche real-time agli sposi.',
    results: [
      'Revenue liste +120% in un anno',
      'Tasso conversione invitati da 45% a 85%',
      'Scontrino medio liste: €285 (prima €140)',
      '60% invitati acquista online, 40% ritira in negozio',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
  ],
  faq: [
    {
      question: 'Gli invitati possono acquistare regali online?',
      answer:
        "Sì, il portale liste è integrato con l'e-commerce. Gli invitati possono acquistare online con consegna diretta agli sposi o ritiro in negozio. Pagamento sicuro con carta di credito.",
    },
    {
      question: 'Come funzionano i contributi parziali?',
      answer:
        "Per articoli costosi (es. lavatrice €600), più invitati possono contribuire parzialmente. Il primo mette €100, il secondo €150, etc. Quando si raggiunge il 100%, l'articolo viene marcato come acquistato.",
    },
    {
      question: 'Gli sposi vedono chi ha comprato cosa?',
      answer:
        'Dipende dalla configurazione. Puoi mostrare solo "3 invitati hanno contribuito per la lavatrice" oppure "Mario Rossi ha acquistato il set pentole". Gli sposi scelgono il livello di privacy.',
    },
    {
      question: 'Posso gestire liste per altri eventi oltre nozze?',
      answer:
        'Assolutamente sì! Il sistema supporta liste nozze, nascita, compleanni, anniversari, comunioni. Ogni tipologia può avere template e regole diverse.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
