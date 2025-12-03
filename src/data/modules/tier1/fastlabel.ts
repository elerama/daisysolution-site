import type { ModuleData } from '../types'

export const fastlabelModule: ModuleData = {
  slug: 'fastlabel',
  name: 'Cartelli Fastlabel',
  tagline: 'Stampa cartelli prezzo professionali con caratteristiche e promozioni',
  category: 'Crescita e Sviluppo',
  categoryColor: 'violet',
  icon: '🏷️',
  tier: 1,
  overview: {
    intro:
      'Sistema di stampa cartelli prezzo professionale utilizzato da 2000+ negozi. Template personalizzabili, caratteristiche tecniche da Eldomcat, barcode, promozioni, QR code. Stampa massiva per reparti o selezioni articoli. Cartelli in conformità normativa (etichettatura energetica, RAEE).',
    mainBenefits: [
      '2000+ negozi utilizzatori in Italia',
      'Template professionali personalizzabili',
      'Caratteristiche tecniche automatiche da Eldomcat',
      'Conformità normative RAEE ed etichettatura energetica',
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
    ],
  },
  features: [
    {
      title: 'Template professionali',
      description:
        'Scegli tra decine di template professionali o crea il tuo custom',
      icon: '🎨',
    },
    {
      title: 'Caratteristiche Eldomcat',
      description:
        'Caratteristiche tecniche inserite automaticamente da database Eldomcat',
      icon: '📋',
    },
    {
      title: 'Barcode e QR code',
      description:
        'Stampa barcode EAN e QR code per link schede prodotto online',
      icon: '📱',
    },
    {
      title: 'Promozioni visibili',
      description:
        'Evidenzia promozioni con grafica accattivante e countdown scadenza',
      icon: '🎯',
    },
    {
      title: 'Stampa massiva',
      description:
        'Stampa centinaia di cartelli per reparto o selezione articoli in pochi minuti',
      icon: '🖨️',
    },
    {
      title: 'Etichettatura energetica',
      description: 'Template conformi normativa etichettatura energetica UE',
      icon: '⚡',
    },
    {
      title: 'RAEE compliance',
      description: 'Simboli RAEE e informazioni smaltimento secondo normativa',
      icon: '♻️',
    },
    {
      title: 'Multi-formato',
      description: 'Supporto formati A4, A5, A6, 10x15cm e formati custom',
      icon: '📏',
    },
  ],
  benefits: [
    {
      title: 'Look professionale',
      metric: '+45% brand',
      description:
        'Negozi con cartelli Fastlabel aumentano la percezione di professionalità del 45%.',
    },
    {
      title: 'Risparmio tempo',
      metric: '-90%',
      description:
        'Stampa massiva di cartelli per reparto: da ore a minuti.',
    },
    {
      title: 'Caratteristiche corrette',
      description:
        'Con Eldomcat le caratteristiche tecniche sono sempre aggiornate e corrette: zero errori.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena 12 negozi elettronica',
    customer: 'Catena elettronica (12 punti vendita)',
    challenge:
      'Stampa cartelli manuale con Word: tempo enorme, risultato non professionale, caratteristiche prodotti spesso errate o obsolete. Ogni cartello richiedeva 15 minuti.',
    solution:
      'Attivazione Fastlabel con template custom brandizzati. Integrazione Eldomcat per caratteristiche automatiche. Stampa massiva per reparto con aggiornamento settimanale prezzi.',
    results: [
      '-90% tempo stampa cartelli (da 8 ore a 45 minuti)',
      'Look uniforme e professionale su tutti i 12 negozi',
      'Caratteristiche tecniche sempre aggiornate da Eldomcat',
      'Compliance normativa etichettatura energetica automatica',
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
        'Sì, puoi creare template completamente personalizzati con logo, colori aziendali, font e layout. Oppure parti dai template pronti e li modifichi a piacimento.',
    },
    {
      question: 'Come vengono inserite le caratteristiche tecniche?',
      answer:
        'Con Eldomcat attivo, le caratteristiche si inseriscono automaticamente nel cartello. Il sistema sa quali caratteristiche mostrare per ogni categoria merceologica (es: TV mostra pollici, risoluzione, HDR).',
    },
    {
      question: 'Quali stampanti sono supportate?',
      answer:
        'Fastlabel supporta tutte le stampanti A4 standard (inkjet, laser) e stampanti fotografiche 10x15cm. Configurazione automatica con driver Windows.',
    },
    {
      question: 'Posso stampare cartelli con promozioni a tempo?',
      answer:
        'Sì, il sistema mostra automaticamente il prezzo promozionale e può aggiungere countdown "Promo valida fino al..." per creare senso di urgenza.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
