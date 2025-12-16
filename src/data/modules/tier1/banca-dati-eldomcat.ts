import type { ModuleData } from '../types'

export const bancaDatiEldomcatModule: ModuleData = {
  slug: 'banca-dati-eldomcat',
  name: 'Banca Dati & Eldomcat',
  tagline: '300.000+ articoli pronti con foto e caratteristiche tecniche',
  category: 'Integrazione e Automazione',
  categoryColor: 'pink',
  icon: '🗄️',
  tier: 1,
  overview: {
    intro:
      "Anagrafica articoli completa integrata con Eldomcat: 300.000+ prodotti elettronica ed elettrodomestici con foto professionali, schede tecniche strutturate, multi-barcode. Gestione brand, categorie, varianti, codici alternativi e articoli equivalenti. Sincronizzazione automatica dati con centrali d'acquisto.",
    mainBenefits: [
      '300.000+ articoli pronti con Eldomcat',
      'Risparmio 75.000 ore inserimento dati',
      'Foto e caratteristiche aggiornate automaticamente',
      'Ricerca avanzata per caratteristiche tecniche',
    ],
    stats: [
      {
        label: 'Articoli Eldomcat',
        value: '300k+',
        description: 'pronti con foto e schede tecniche',
      },
      {
        label: 'Ore risparmiate',
        value: '75.000',
        description: 'su inserimento manuale dati',
      },
    ],
  },
  features: [
    {
      title: 'Integrazione Eldomcat',
      description:
        '300.000+ articoli con foto professionali e schede tecniche complete',
      icon: '🏷️',
    },
    {
      title: 'Multi-barcode',
      description:
        'Gestione multipla codici barcode: EAN, UPC, codici interni e alternativi',
      icon: '📊',
    },
    {
      title: 'Schede tecniche',
      description:
        'Caratteristiche strutturate per ogni prodotto con ricerca avanzata',
      icon: '📋',
    },
    {
      title: 'Gestione brand',
      description:
        'Organizzazione articoli per brand, categorie e sottocategorie merceologiche',
      icon: '🏢',
    },
    {
      title: 'Varianti prodotto',
      description:
        'Gestione taglie, colori e varianti tramite griglie configurabili',
      icon: '🎨',
    },
    {
      title: 'Import massivo',
      description:
        'Importazione massiva dati da fornitori e centrali in formato Excel/CSV/XML',
      icon: '📥',
    },
    {
      title: 'Articoli equivalenti',
      description: 'Gestione codici alternativi e prodotti sostitutivi',
      icon: '🔄',
    },
    {
      title: 'Sincronizzazione',
      description:
        'Aggiornamento automatico foto e caratteristiche da Eldomcat',
      icon: '🔄',
    },
  ],
  benefits: [
    {
      title: 'Risparmio tempo enorme',
      metric: '75.000 ore',
      description:
        'Con Eldomcat risparmi 75.000 ore di inserimento manuale dati e foto prodotti.',
    },
    {
      title: 'Catalogo sempre aggiornato',
      description:
        'Caratteristiche tecniche e foto si sincronizzano automaticamente: catalogo online e cartelli sempre aggiornati.',
    },
    {
      title: 'Ricerca potente',
      metric: '+60% velocità',
      description:
        'Trova articoli per caratteristiche tecniche: "TV 55 pollici OLED sotto 1000€" funziona!',
    },
  ],
  useCase: {
    title: 'Caso cliente: Nuova apertura negozio elettronica',
    customer: 'Nuovo punto vendita elettronica',
    challenge:
      'Avvio negozio nuovo: necessità di catalogare 15.000 prodotti con foto e schede tecniche per vendita e e-commerce. Tempistiche strette (2 settimane).',
    solution:
      'Attivazione Eldomcat con importazione massiva codici articoli. In pochi click attivati 300.000 articoli pronti con foto e caratteristiche. Focus solo su listini prezzi.',
    results: [
      '15.000 articoli catalogati in 3 giorni invece di 6 mesi',
      'Risparmio stimato 75.000€ di lavoro manuale',
      'E-commerce online con catalogo completo in 1 settimana',
      'Cartelli prezzo con foto professionali dal primo giorno',
    ],
  },
  integrations: [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Fastlabel', slug: 'fastlabel' },
    { name: 'Vendite', slug: 'vendite-cassa' },
    { name: 'Acquisti', slug: 'acquisti' },
  ],
  faq: [
    {
      question: "Cos'è Eldomcat e come funziona?",
      answer:
        "Eldomcat è il database più completo d'Italia di prodotti elettronica ed elettrodomestici. Include 300.000+ articoli con foto professionali, schede tecniche strutturate e caratteristiche complete. Si sincronizza automaticamente con Daisy.",
    },
    {
      question: 'Quanto costa Eldomcat?',
      answer:
        "Eldomcat ha un costo di circa 200€/mese. Considerando che sostituisce 75.000 ore di lavoro manuale (valore ~750.000€), il ROI è immediato. Include anche foto professionali che singolarmente costerebbero 10€ ciascuna.",
    },
    {
      question: 'Posso aggiungere articoli non presenti in Eldomcat?',
      answer:
        'Sì, puoi inserire liberamente articoli personalizzati. Il sistema gestisce sia articoli Eldomcat che articoli custom in modo unificato.',
    },
    {
      question: 'Come funziona la sincronizzazione automatica?',
      answer:
        'Ogni notte il sistema sincronizza automaticamente foto, caratteristiche e informazioni aggiornate da Eldomcat. Non devi fare nulla: il catalogo si aggiorna da solo.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
