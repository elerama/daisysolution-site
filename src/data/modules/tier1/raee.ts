import type { ModuleData } from '../types'

export const raeeModule: ModuleData = {
  slug: 'raee',
  name: 'RAEE',
  tagline: 'Gestione contributi ambientali con tracciabilità e reportistica CDC',
  category: 'Compliance e Amministrazione',
  categoryColor: 'indigo',
  icon: '♻️',
  tier: 1,
  overview: {
    intro:
      'Il modulo RAEE garantisce la compliance normativa sui rifiuti elettronici (D.Lgs 49/2014). Applicazione automatica contributi RAEE a vendita, registro ritiro da clienti, tracking smaltimento presso CDC (Centri Di Coordinamento), reportistica obbligatoria. Gestione multi-CDC: Ecodom, Remedia, Ecolight, etc.',
    mainBenefits: [
      'Compliance normativa automatica D.Lgs 49/2014',
      'Zero sanzioni per mancate dichiarazioni',
      'Tracciabilità completa ritiri e smaltimenti',
      'Riduzione oneri amministrativi del 70%',
    ],
    stats: [
      {
        label: 'CDC gestiti',
        value: '10+',
        description: 'Ecodom, Remedia, Ecolight...',
      },
      {
        label: 'Sanzioni evitate',
        value: '0',
        description: 'compliance automatica 100%',
      },
    ],
  },
  features: [
    {
      title: 'Contributi automatici',
      description:
        'Applica contributi RAEE alla vendita in base alla categoria prodotto',
      icon: '💰',
    },
    {
      title: 'Registro ritiri',
      description:
        'Registra ritiro RAEE dai clienti con peso, tipologia e data',
      icon: '📋',
    },
    {
      title: 'Tracking CDC',
      description:
        'Traccia smaltimento presso Centri Di Coordinamento autorizzati',
      icon: '🚛',
    },
    {
      title: 'Multi-CDC',
      description:
        'Gestisci comunicazioni con Ecodom, Remedia, Ecolight e altri consorzi',
      icon: '🏢',
    },
    {
      title: 'Alert scadenze',
      description:
        'Notifiche automatiche per scadenze comunicazioni obbligatorie',
      icon: '⏰',
    },
    {
      title: 'Calcolo per categoria',
      description:
        'Contributi differenziati per R1, R2, R3, R4, R5 secondo normativa',
      icon: '📊',
    },
    {
      title: 'Reportistica obbligatoria',
      description:
        'Export dati per dichiarazioni periodiche ai CDC e autorità',
      icon: '📄',
    },
    {
      title: 'Storico completo',
      description:
        'Archivio storico ritiri e smaltimenti per audit e verifiche ispettive',
      icon: '🗄️',
    },
  ],
  benefits: [
    {
      title: 'Compliance garantita',
      metric: '100% normativa',
      description:
        'Il sistema applica automaticamente la normativa vigente. Nessun rischio di errori o dimenticanze che causano sanzioni.',
    },
    {
      title: 'Tempo amministrativo',
      metric: '-70% ore',
      description:
        'Automatizzazione riduce il tempo dedicato a registrazioni manuali e reportistica del 70%.',
    },
    {
      title: 'Tracciabilità audit-ready',
      description:
        'Storico completo di ritiri e smaltimenti sempre disponibile per ispezioni e audit dei consorzi.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena 12 negozi elettrodomestici',
    customer: 'Rivenditore specializzato grandi elettrodomestici',
    challenge:
      'Gestire manualmente i contributi RAEE per 12 punti vendita causava errori di applicazione, ritardi nelle comunicazioni ai CDC e rischio sanzioni. Il commercialista spendeva 2 giorni/mese per reportistica RAEE.',
    solution:
      'Implementato modulo RAEE con applicazione automatica contributi a vendita e registro centralizzato ritiri. Export automatico dati per dichiarazioni CDC trimestrali. Alert 15 giorni prima delle scadenze.',
    results: [
      "Zero sanzioni per mancate dichiarazioni (prima 2-3 all'anno)",
      'Tempo amministrativo ridotto da 16 a 5 ore/mese',
      'Tracciabilità completa per audit CDC',
      'Contributi RAEE applicati correttamente su 100% vendite',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
    { name: 'Contabilità', slug: 'contabilita' },
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
        'Sì, ma è molto rapido. Al momento della vendita o consegna, registri il ritiro RAEE (tipologia e peso stimato). Il sistema tiene traccia di tutto per le comunicazioni ai CDC.',
    },
    {
      question: 'Quali CDC sono supportati?',
      answer:
        'Il modulo gestisce tutti i principali consorzi: Ecodom, Remedia, Ecolight, Ecoped, ERP, Raee-point. Puoi configurare più CDC se lavori con consorzi diversi per categorie diverse.',
    },
    {
      question: 'Come viene generata la reportistica obbligatoria?',
      answer:
        'Il sistema prepara automaticamente i dati aggregati per le dichiarazioni trimestrali ai CDC. Puoi esportare file nel formato richiesto da ogni consorzio o generare report PDF per il commercialista.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
