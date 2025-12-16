import type { ModuleData } from '../types'

export const planningModule: ModuleData = {
  slug: 'planning',
  name: 'Planning',
  tagline: 'Pianificazione ordini fornitori e previsione fabbisogni',
  category: 'Intelligence e Ottimizzazione',
  categoryColor: 'blue',
  icon: '📅',
  tier: 2,
  overview: {
    intro:
      "Il modulo Planning è il cervello dell'approvvigionamento. Analisi rotazione stock ABC, calcolo scorte minime, previsione fabbisogni da venduto storico, generazione automatica proposte ordine fornitori. Simulazione scenari, gestione lead time fornitori, alert articoli sotto scorta, report copertura stock. Ottimizza il capitale circolante riducendo scorte inutili.",
    mainBenefits: [
      'Riduzione capitale immobilizzato in stock',
      'Zero rotture stock su articoli strategici',
      'Ordini fornitori ottimizzati automaticamente',
      'Riduzione obsolescenza merce del 45%',
    ],
  },
  features: [
    {
      title: 'Analisi ABC',
      description:
        'Classifica articoli per valore: A (20% articoli, 80% vendite), B, C',
      icon: '📊',
    },
    {
      title: 'Scorte minime',
      description:
        'Calcola scorte minime per articolo in base a venduto e lead time fornitore',
      icon: '📉',
    },
    {
      title: 'Previsione fabbisogni',
      description:
        'Algoritmi predittivi per stimare fabbisogni futuri da storico vendite',
      icon: '🔮',
    },
    {
      title: 'Proposte ordine',
      description:
        'Genera automaticamente proposte ordine a fornitori per mantenere scorte ottimali',
      icon: '📝',
    },
    {
      title: 'Simulazione scenari',
      description:
        'Simula impatto di ordini su giacenze e capitale per decisioni informate',
      icon: '🎮',
    },
    {
      title: 'Lead time fornitori',
      description:
        'Gestisce tempi consegna per fornitore per calcolo scorte minime accurate',
      icon: '⏱️',
    },
    {
      title: 'Alert sotto scorta',
      description:
        'Notifiche automatiche quando articoli critici scendono sotto scorta minima',
      icon: '⚠️',
    },
    {
      title: 'Copertura stock',
      description:
        'Report giorni di copertura stock: quanti giorni reggi con giacenza attuale',
      icon: '📅',
    },
  ],
  benefits: [
    {
      title: 'Capitale ottimizzato',
      metric: '-30% stock',
      description:
        "L'analisi ABC e le scorte minime riducono il capitale immobilizzato del 30% eliminando stock inutile su articoli C.",
    },
    {
      title: 'Zero rotture stock',
      metric: '98% disponibilità',
      description:
        'Gli alert e le proposte automatiche mantengono disponibilità del 98% su articoli strategici A e B.',
    },
    {
      title: 'Obsolescenza ridotta',
      metric: '-45% write-off',
      description:
        "Scorte ottimizzate riducono l'obsolescenza del 45%. Meno merce ferma che diventa invendibile.",
    },
  ],
  useCase: {
    title: 'Caso cliente: Distributore con 5000 SKU e €800k stock',
    customer: 'Distributore elettronica consumer',
    challenge:
      '€800k di capitale immobilizzato in stock, di cui 40% articoli a lento movimento. Rotture stock frequenti su best-seller. Ordini a fornitori "a sensazione". Obsolescenza €60k/anno su merce ferma.',
    solution:
      'Implementato Planning con analisi ABC di 5000 SKU. Configurate scorte minime per articoli A e B, ridotte per C. Proposte ordine automatiche settimanali. Alert sotto scorta per articoli critici. Simulazione scenari prima di ordinare.',
    results: [
      'Stock ridotto da €800k a €560k (-30%) senza perdere vendite',
      'Rotture stock su best-seller da 12% a 2%',
      'Obsolescenza ridotta da €60k a €30k/anno',
      'Tempo buyer per pianificazione da 15 a 3 ore/settimana',
    ],
  },
  integrations: [
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Acquisti', slug: 'acquisti' },
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Statistiche & BI', slug: 'statistiche-bi' },
  ],
  faq: [
    {
      question: "Come funziona l'analisi ABC?",
      answer:
        "Il sistema classifica gli articoli in 3 classi secondo il principio di Pareto: A (pochi articoli, alto valore vendite), B (valore medio), C (molti articoli, basso valore). Ti aiuta a focalizzare risorse su ciò che conta.",
    },
    {
      question: 'Le scorte minime sono calcolate automaticamente?',
      answer:
        'Sì, il sistema calcola scorte minime in base a: venduto medio giornaliero × lead time fornitore × fattore sicurezza. Puoi personalizzare i parametri per categoria prodotto.',
    },
    {
      question: "Le proposte ordine considerano i lotti minimi d'acquisto?",
      answer:
        'Sì, il sistema conosce i lotti minimi e multipli per fornitore (es. "minimo 50 pezzi, multipli di 10"). Le proposte rispettano automaticamente questi vincoli.',
    },
    {
      question: 'Posso simulare scenari prima di ordinare?',
      answer:
        'Sì, la funzione "Simula ordine" ti mostra l\'impatto su giacenze, capitale immobilizzato e copertura stock prima di inviare l\'ordine al fornitore. Puoi fare "what-if" per ottimizzare.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
