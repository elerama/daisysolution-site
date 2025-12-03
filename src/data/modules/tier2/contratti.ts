import type { ModuleData } from '../types'

export const contrattiModule: ModuleData = {
  slug: 'contratti',
  name: 'Contratti',
  tagline: 'Gestione contratti assistenza e abbonamenti con rinnovi automatici',
  category: 'Compliance e Amministrazione',
  categoryColor: 'indigo',
  icon: '📄',
  tier: 2,
  overview: {
    intro:
      'Il modulo Contratti gestisce contratti di assistenza, noleggio, abbonamenti con rinnovi automatici e fatturazione ricorrente. Gestisci scadenze, SLA (Service Level Agreement), storico interventi per contratto. Alert automatici per scadenze, fatturazione periodica automatica, report redditività contratti. Revenue ricorrente gestito in modo professionale.',
    mainBenefits: [
      'Revenue ricorrente gestito automaticamente',
      'Zero contratti dimenticati o scaduti',
      'Fatturazione periodica automatica',
      'Visibilità scadenze anticipata con alert',
    ],
  },
  features: [
    {
      title: 'Creazione contratti',
      description:
        'Crea contratti servizio, manutenzione, noleggio con termini personalizzati',
      icon: '📝',
    },
    {
      title: 'Rinnovi automatici',
      description:
        'Gestione rinnovi automatici con tacito rinnovo o conferma esplicita',
      icon: '🔄',
    },
    {
      title: 'Fatturazione ricorrente',
      description:
        'Fatture periodiche generate automaticamente (mensile, trimestrale, annuale)',
      icon: '💳',
    },
    {
      title: 'Alert scadenze',
      description:
        'Notifiche automatiche 30/15/7 giorni prima della scadenza contratto',
      icon: '⏰',
    },
    {
      title: 'Storico interventi',
      description:
        'Tracciamento interventi e riparazioni associate a ogni contratto',
      icon: '📋',
    },
    {
      title: 'Gestione SLA',
      description:
        'Tempi di intervento garantiti con alert se SLA viene superato',
      icon: '⚡',
    },
    {
      title: 'Report redditività',
      description:
        'Analisi margine contratti, revenue mensile ricorrente (MRR)',
      icon: '📊',
    },
    {
      title: 'Template contratti',
      description:
        'Template personalizzabili per diverse tipologie di contratto',
      icon: '📄',
    },
  ],
  benefits: [
    {
      title: 'Revenue ricorrente',
      metric: '+€15k/mese',
      description:
        'I contratti generano revenue prevedibile e ricorrente. Cliente medio con 50 contratti attivi genera €15k/mese automaticamente.',
    },
    {
      title: 'Zero dimenticanze',
      description:
        'Gli alert automatici garantiscono che nessun contratto in scadenza venga dimenticato. Fatturazione ricorrente elimina il rischio di mancati incassi.',
    },
    {
      title: 'Clienti fidelizzati',
      metric: '92% rinnovo',
      description:
        'I contratti aumentano il lifetime value del cliente. Tasso di rinnovo medio del 92% con gestione professionale.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Centro assistenza con contratti manutenzione',
    customer: 'Rivenditore con servizio assistenza per aziende',
    challenge:
      'Gestiva 80 contratti manutenzione annuali su Excel. Spesso dimenticava scadenze, perdeva rinnovi, fatturava in ritardo. Cliente doveva chiamare per sollecitare fattura. Nessuna visibilità sulla revenue ricorrente.',
    solution:
      'Implementato modulo Contratti con rinnovi automatici e fatturazione ricorrente. Alert 30 giorni prima della scadenza, fatture generate automaticamente il giorno del rinnovo. Dashboard MRR (Monthly Recurring Revenue) per previsioni.',
    results: [
      'Tasso rinnovo contratti da 65% a 92%',
      'Zero fatture dimenticate o in ritardo',
      'MRR prevedibile: €12k/mese da contratti',
      'Tempo gestione contratti ridotto da 10 a 2 ore/mese',
    ],
  },
  integrations: [
    { name: 'Riparazioni', slug: 'riparazioni' },
    { name: 'Contabilità', slug: 'contabilita' },
    { name: 'Comunicazioni', slug: 'comunicazioni' },
  ],
  faq: [
    {
      question: 'Come funzionano i rinnovi automatici?',
      answer:
        'Puoi configurare contratti con tacito rinnovo (si rinnova automaticamente se il cliente non disdice) o rinnovo esplicito (cliente deve confermare). Il sistema invia alert e genera fattura al rinnovo.',
    },
    {
      question: 'La fatturazione ricorrente è completamente automatica?',
      answer:
        'Sì, configuri periodicità (mensile, trimestrale, annuale) e il sistema genera le fatture automaticamente alla scadenza. Puoi anche inviare le fatture via email automaticamente.',
    },
    {
      question: 'Posso tracciare interventi associati a un contratto?',
      answer:
        'Sì, ogni contratto può avere interventi collegati (dal modulo Riparazioni). Vedi lo storico completo degli interventi, verifica se stai rispettando i tempi SLA, calcola la redditività del contratto.',
    },
    {
      question: 'Come gestisco contratti con SLA garantiti?',
      answer:
        'Definisci il tempo massimo di intervento (es. "risoluzione entro 48h"). Il sistema monitora i ticket e invia alert se stai per superare la soglia SLA. Report SLA mensili mostrano performance.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
