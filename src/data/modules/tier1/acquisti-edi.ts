import type { ModuleData } from '../types'

export const acquistiEdiModule: ModuleData = {
  slug: 'acquisti-edi',
  name: 'Acquisti & EDI',
  tagline: "Gestione ordini fornitori e integrazione EDI con centrali d'acquisto",
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '🛒',
  tier: 1,
  overview: {
    intro:
      "Modulo completo per gestione ciclo acquisti: ordini a fornitori con condizioni commerciali, ricezione merce, fatture passive, resi fornitori. Integrazione EDI nativa con centrali d'acquisto (Unieuro, Expert, Domex, Gaer) per ordini automatici e listini aggiornati.",
    mainBenefits: [
      'Integrazione diretta centrali acquisto',
      'Zero inserimento manuale listini',
      'Proposte ordine automatiche da giacenze',
      'Controllo costi acquisto real-time',
    ],
    stats: [
      {
        label: 'Centrali integrate',
        value: '15+',
        description: 'Unieuro, Expert, Domex, Gaer e altre',
      },
      {
        label: 'Ordini EDI al giorno',
        value: '5.000+',
        description: 'processati automaticamente',
      },
    ],
  },
  features: [
    {
      title: 'Ordini fornitori',
      description:
        'Crea ordini con condizioni commerciali personalizzate per fornitore',
      icon: '📝',
    },
    {
      title: 'Ricezione merce',
      description:
        'Ricevi merce con generazione automatica bolle carico magazzino',
      icon: '📥',
    },
    {
      title: 'Integrazione EDI',
      description: 'Ordini automatici a centrali Unieuro, Expert, Domex, Gaer',
      icon: '🔗',
    },
    {
      title: 'Import listini',
      description:
        'Importazione automatica listini fornitori in Excel, CSV, XML',
      icon: '📊',
    },
    {
      title: 'Fatture passive',
      description:
        'Registrazione fatture acquisto e note credito con controllo prezzi',
      icon: '📄',
    },
    {
      title: 'Resi fornitori',
      description: 'Gestione resi e sostituzioni merce difettosa',
      icon: '↩️',
    },
    {
      title: 'Proposte ordine',
      description:
        'Sistema suggerisce ordini basandosi su giacenze e vendite storiche',
      icon: '🤖',
    },
    {
      title: 'Controllo sconti',
      description:
        'Verifica automatica sconti quantità e condizioni pagamento',
      icon: '💰',
    },
  ],
  benefits: [
    {
      title: 'Integrazione centrali',
      metric: '-90% tempo',
      description:
        "Ordini EDI automatici eliminano il 90% del lavoro manuale di inserimento ordini.",
    },
    {
      title: 'Listini aggiornati',
      metric: 'Tempo reale',
      description:
        'Import automatico listini fornitori: prezzi sempre aggiornati senza errori.',
    },
    {
      title: 'Proposte intelligenti',
      description:
        'Il sistema suggerisce cosa ordinare basandosi su vendite e giacenze, riducendo rotture di stock del 75%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Affiliato Unieuro 3 punti vendita',
    customer: 'Affiliato Unieuro (3 negozi)',
    challenge:
      'Gestione manuale ordini a Centrale Unieuro con invio fax ed errori frequenti. Listini cartacei obsoleti dopo pochi giorni.',
    solution:
      'Attivazione integrazione EDI Unieuro con ordini automatici e sincronizzazione listini giornaliera. Sistema propone automaticamente ordini basandosi su vendite e giacenze.',
    results: [
      '-95% tempo gestione ordini (da 4 ore a 15 minuti al giorno)',
      'Zero errori inserimento codici articolo',
      'Listini sempre aggiornati automaticamente',
      '+25% rotazione magazzino grazie a proposte ordine intelligenti',
    ],
  },
  integrations: [
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Contabilità', slug: 'contabilita' },
    { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
    { name: 'Import/Export', slug: 'webservice' },
  ],
  faq: [
    {
      question: "Quali centrali d'acquisto sono supportate?",
      answer:
        "Supportiamo le principali centrali: Unieuro, Expert, Domex, Gaer, Euronics, Trony, Darty e altre. L'integrazione EDI è certificata e testata quotidianamente.",
    },
    {
      question: 'Come funzionano le proposte ordine automatiche?',
      answer:
        "Il sistema analizza le vendite degli ultimi mesi, le giacenze attuali e le scorte minime impostate. Genera automaticamente una proposta di ordine ottimizzata che puoi confermare con un click.",
    },
    {
      question: 'Posso gestire ordini anche a fornitori non EDI?',
      answer:
        'Sì, per fornitori tradizionali puoi creare ordini manuali che vengono poi stampati o inviati via email. Il carico merce funziona allo stesso modo per tutti i fornitori.',
    },
    {
      question: 'Come vengono importati i listini fornitori?',
      answer:
        'Supportiamo Excel, CSV, XML e formati EDI standard. Puoi impostare import automatici programmati (es: ogni notte) o manuali on-demand.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
