import type { ModuleData } from '../types'

export const ordiniModule: ModuleData = {
  slug: 'ordini',
  name: 'Ordini',
  tagline: 'Gestione ordini clienti con tracking stato ed evasione parziale',
  category: 'Operazioni Base',
  categoryColor: 'emerald',
  icon: '📋',
  tier: 2,
  overview: {
    intro:
      "Il modulo Ordini gestisce l'intero ciclo ordini clienti B2B e B2C. Inserimento rapido con barcode, gestione ordini da portale B2B, stati ordine (inserito, confermato, evaso, consegnato), evasione parziale con backorder automatico, tracking spedizioni integrato corrieri. Generazione DDT e fatture da ordini, report ordini inevasi o in ritardo.",
    mainBenefits: [
      'Visibilità completa pipeline ordini in tempo reale',
      'Zero ordini dimenticati con tracking automatico',
      'Clienti sempre informati su stato ordine',
      'Riduzione contestazioni e dispute del 70%',
    ],
  },
  features: [
    {
      title: 'Inserimento rapido',
      description:
        'Crea ordini velocemente con scanner barcode o ricerca articoli',
      icon: '⚡',
    },
    {
      title: 'Ordini B2B',
      description:
        'Gestisci ordini da portale clienti B2B con import automatico',
      icon: '🏢',
    },
    {
      title: 'Stati ordine',
      description:
        'Tracking stati: inserito, confermato, in preparazione, evaso, consegnato',
      icon: '🔄',
    },
    {
      title: 'Evasione parziale',
      description:
        'Evadi ordini parzialmente, sistema crea backorder automatico per merce mancante',
      icon: '📦',
    },
    {
      title: 'Tracking corrieri',
      description:
        'Integrazione corrieri per tracking spedizioni real-time',
      icon: '🚚',
    },
    {
      title: 'Gestione acconti',
      description: 'Richiedi acconti su ordini, traccia saldo da incassare',
      icon: '💰',
    },
    {
      title: 'Genera DDT/fatture',
      description: 'Crea DDT e fatture direttamente da ordini con un click',
      icon: '📄',
    },
    {
      title: 'Report inevasi',
      description:
        'Report ordini inevasi, in ritardo, backorder per azione immediata',
      icon: '⚠️',
    },
  ],
  benefits: [
    {
      title: 'Pipeline visibile',
      metric: '100% controllo',
      description:
        'Vedi in tempo reale tutti gli ordini e il loro stato. Nessun ordine può essere dimenticato o perso.',
    },
    {
      title: 'Clienti informati',
      metric: '-70% chiamate',
      description:
        'I clienti vedono lo stato ordine real-time. Le chiamate "dov\'è il mio ordine?" si riducono del 70%.',
    },
    {
      title: 'Evasione ottimizzata',
      metric: '+40% efficienza',
      description:
        'Evasione parziale e backorder automatici ottimizzano il magazzino. Efficienza picking +40%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Distributore B2B con 150 ordini/giorno',
    customer: 'Distributore elettronica con 200 clienti B2B',
    challenge:
      'Ordini gestiti su Excel. Impossibile sapere quali ordini erano evasi, quali in ritardo. Clienti chiamavano continuamente per info. Nessuna evasione parziale, si aspettava merce completa causando ritardi.',
    solution:
      'Implementato modulo Ordini con stati tracking completo. Portale B2B per clienti per inserire ordini e vedere stato. Evasione parziale automatica con backorder. Integrazione corrieri per tracking. Email automatiche a clienti.',
    results: [
      'Chiamate clienti ridotte del 75%',
      'Ordini inevasi sempre visibili: zero ordini dimenticati',
      'Evasione parziale: tempi consegna -35%',
      'Soddisfazione clienti B2B aumentata del 60%',
    ],
  },
  integrations: [
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Webservice', slug: 'webservice' },
  ],
  faq: [
    {
      question: "Come funziona l'evasione parziale?",
      answer:
        'Se evadi un ordine con solo parte della merce disponibile, il sistema crea automaticamente un backorder per gli articoli mancanti. Quando la merce arriva, il backorder diventa evadibile.',
    },
    {
      question: 'I clienti possono vedere lo stato dei loro ordini?',
      answer:
        'Sì, se integrato con e-commerce o portale B2B, i clienti vedono real-time lo stato ordine: confermato, in preparazione, spedito con tracking corriere.',
    },
    {
      question: 'Posso generare DDT e fatture da ordini?',
      answer:
        "Sì, quando evadi un ordine puoi generare DDT (se spedisci merce) o fattura diretta. Il sistema riporta automaticamente tutti i dati dell'ordine nei documenti.",
    },
    {
      question: 'Come gestisco gli acconti sugli ordini?',
      answer:
        'Puoi richiedere acconti (es. 30%) alla conferma ordine. Il sistema traccia acconto pagato e saldo da incassare a consegna. Report acconti in sospeso sempre disponibile.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
