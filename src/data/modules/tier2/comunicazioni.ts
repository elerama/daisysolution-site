import type { ModuleData } from '../types'

export const comunicazioniModule: ModuleData = {
  slug: 'comunicazioni',
  name: 'Comunicazioni',
  tagline: 'Sistema notifiche multi-canale verso clienti e staff',
  category: 'Integrazione e Automazione',
  categoryColor: 'pink',
  icon: '📧',
  tier: 2,
  overview: {
    intro:
      'Il modulo Comunicazioni è il sistema nervoso delle notifiche Daisy. Invia email transazionali, SMS, messaggistica interna tra punti vendita. Alert automatici per giacenze, ordini urgenti, scadenze. Template personalizzabili per ogni tipo di comunicazione. Tracciamento invii e statistiche aperture per ottimizzare le campagne.',
    mainBenefits: [
      'Automazione comunicazioni clienti e staff',
      'Riduzione chiamate per info ordini/stato',
      'Alert proattivi per operatori',
      'Miglioramento customer experience',
    ],
  },
  features: [
    {
      title: 'Email transazionali',
      description:
        'Conferme ordini, fatture, promemoria, benvenuto clienti',
      icon: '📧',
    },
    {
      title: 'SMS notifiche',
      description:
        'Notifiche rapide per arrivo merce, promozioni, scadenze',
      icon: '📱',
    },
    {
      title: 'Messaggistica interna',
      description: 'Chat tra punti vendita per coordinamento operativo',
      icon: '💬',
    },
    {
      title: 'Alert automatici',
      description:
        'Notifiche giacenze sotto scorta, ordini urgenti, anomalie',
      icon: '🔔',
    },
    {
      title: 'Template personalizzabili',
      description: 'Editor visuale per creare template email/SMS branded',
      icon: '🎨',
    },
    {
      title: 'Tracciamento invii',
      description: 'Log completo comunicazioni inviate con stato consegna',
      icon: '📊',
    },
    {
      title: 'Statistiche aperture',
      description:
        'Tasso apertura email, click link, conversioni da campagne',
      icon: '📈',
    },
    {
      title: 'Segmentazione clienti',
      description:
        'Invia comunicazioni mirate per segmento/categoria cliente',
      icon: '🎯',
    },
  ],
  benefits: [
    {
      title: 'Clienti informati',
      metric: '-70% chiamate',
      description:
        'Le notifiche automatiche riducono le chiamate clienti del 70%. "Dov\'è il mio ordine?" diventa un ricordo del passato.',
    },
    {
      title: 'Operatività efficiente',
      description:
        'Gli alert interni consentono coordinamento real-time tra punti vendita. Trasferimenti merce, ordini urgenti gestiti in tempo reale.',
    },
    {
      title: 'Customer experience',
      metric: '+40% NPS',
      description:
        'Comunicazioni proattive aumentano il Net Promoter Score del 40%. I clienti si sentono seguiti e informati.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena 5 negozi con trasferimenti merce',
    customer: 'Rivenditore informatica multi-sede',
    challenge:
      "Clienti chiamavano continuamente per sapere se un ordine era arrivato. I negozi non comunicavano tra loro, causando ritardi nei trasferimenti merce. Nessuna notifica automatica, tutto gestito manualmente.",
    solution:
      'Implementato modulo Comunicazioni con email automatiche per conferma ordine, spedizione, arrivo. SMS quando merce è pronta per ritiro. Messaggistica interna per coordinare trasferimenti tra sedi in tempo reale.',
    results: [
      'Chiamate clienti ridotte del 70%',
      'Tasso ritiro ordini in tempo: da 60% a 95%',
      'Tempo coordinamento trasferimenti: da ore a minuti',
      'NPS (soddisfazione clienti) aumentato del 42%',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Liste Regalo', slug: 'liste-regalo' },
    { name: 'Riparazioni', slug: 'riparazioni' },
  ],
  faq: [
    {
      question: 'Quali comunicazioni possono essere automatizzate?',
      answer:
        'Email conferma ordine, spedizione, arrivo merce, fatture inviate, promemoria pagamenti, benvenuto nuovi clienti, SMS per promozioni o ordini pronti, alert interni per giacenze sotto scorta o ordini urgenti.',
    },
    {
      question: 'Posso personalizzare i template email con il mio brand?',
      answer:
        "L'editor visuale consente di creare template email personalizzati con logo, colori aziendali, footer. Puoi avere template diversi per tipologia comunicazione (ordini, promozioni, assistenza).",
    },
    {
      question: 'Come funziona la messaggistica interna tra negozi?',
      answer:
        'Ogni punto vendita ha una chat interna. Puoi inviare messaggi a un negozio specifico o broadcast a tutti. Utile per "Chi ha disponibile articolo X?" o "Trasferimento urgente di merce".',
    },
    {
      question: 'Posso tracciare se i clienti aprono le email?',
      answer:
        'Sì, il sistema traccia consegna, apertura, click su link nelle email. Le statistiche ti aiutano a ottimizzare oggetto, contenuto e timing delle comunicazioni per massimizzare engagement.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
