import type { ModuleData } from '../types'

export const navigatorModule: ModuleData = {
  slug: 'navigator',
  name: 'Navigator',
  tagline: 'Dashboard personalizzabili e navigazione rapida funzionalità',
  category: 'Eccellenza Operativa',
  categoryColor: 'amber',
  icon: '🧭',
  tier: 2,
  overview: {
    intro:
      "Il modulo Navigator è la tua dashboard home personalizzabile. KPI principali a colpo d'occhio, widgets configurabili per ruolo, accesso rapido funzioni frequenti, notifiche e alert in-app, grafici real-time. Scorciatoie tastiera per power-user, layout personalizzato. Ogni utente ha il suo Navigator ottimizzato.",
    mainBenefits: [
      'Produttività utenti aumentata con accessi rapidi',
      'Visibilità KPI sempre a portata di mano',
      'Onboarding facilitato per nuovi utenti',
      'UX personalizzata per ogni ruolo aziendale',
    ],
  },
  features: [
    {
      title: 'Dashboard home',
      description:
        'Pagina iniziale con KPI principali: vendite giorno, margine, giacenze critiche',
      icon: '🏠',
    },
    {
      title: 'Widgets configurabili',
      description:
        'Scegli quali widget mostrare: vendite, ordini, alert, calendario, task',
      icon: '📊',
    },
    {
      title: 'Accesso rapido',
      description:
        'Link veloci alle funzioni più usate: nuova vendita, nuovo ordine, inventario',
      icon: '⚡',
    },
    {
      title: 'Notifiche in-app',
      description:
        'Alert real-time per eventi importanti: nuovo ordine, giacenza sotto scorta',
      icon: '🔔',
    },
    {
      title: 'Grafici real-time',
      description:
        'Trend vendite/margini aggiornati in tempo reale con grafici interattivi',
      icon: '📈',
    },
    {
      title: 'Scorciatoie tastiera',
      description:
        'Comandi rapidi da tastiera per power-user (es. Ctrl+V = nuova vendita)',
      icon: '⌨️',
    },
    {
      title: 'Layout personalizzato',
      description:
        'Ogni utente configura il suo layout: drag&drop widgets, salva preferenze',
      icon: '🎨',
    },
    {
      title: 'Widget calendario',
      description:
        'Calendario ordini in arrivo, scadenze, task da completare',
      icon: '📅',
    },
  ],
  benefits: [
    {
      title: 'Produttività aumentata',
      metric: '+30% efficienza',
      description:
        'Accessi rapidi e scorciatoie tastiera aumentano la produttività degli utenti del 30%. Meno click, più vendite.',
    },
    {
      title: 'KPI sempre visibili',
      description:
        "Dashboard home mostra sempre i KPI critici. Nessun bisogno di aprire report per sapere com'è andato il giorno.",
    },
    {
      title: 'Onboarding facilitato',
      metric: '-50% tempo training',
      description:
        'Nuovi utenti vedono subito cosa è importante per il loro ruolo. Tempo di training ridotto del 50%.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Catena 4 negozi con 15 operatori',
    customer: 'Rivenditore multi-sede con staff misto',
    challenge:
      'Ogni operatore apriva sempre le stesse 3-4 funzioni, ma ci voleva tempo per navigare i menu. Nessuna visibilità immediata su KPI giornalieri. Nuovi operatori perdevano tempo a cercare funzioni.',
    solution:
      'Implementato Navigator con layout personalizzati per ruolo: venditori vedono dashboard vendite + accesso rapido a nuova vendita; magazzinieri vedono giacenze + accesso inventario; manager vedono KPI completi. Scorciatoie tastiera per funzioni frequenti.',
    results: [
      'Tempo medio per nuova vendita ridotto da 8 a 3 click',
      'Produttività operatori +28% per accessi rapidi',
      'Onboarding nuovi operatori: da 2 settimane a 5 giorni',
      'Soddisfazione utenti +85% per UX personalizzata',
    ],
  },
  integrations: [{ name: 'Tutti i moduli', slug: 'vendite-cassa' }],
  faq: [
    {
      question: 'Posso personalizzare i widget mostrati nella dashboard?',
      answer:
        'Sì, ogni utente può scegliere quali widget mostrare, riordinarli con drag&drop, ridimensionarli. Le preferenze sono salvate automaticamente.',
    },
    {
      question: 'I layout possono essere diversi per ruolo?',
      answer:
        'Assolutamente sì! Puoi configurare layout predefiniti per ruolo (venditore, magazziniere, manager). Ogni utente può poi personalizzare ulteriormente il suo layout.',
    },
    {
      question: 'Le scorciatoie tastiera sono personalizzabili?',
      answer:
        'Sì, puoi configurare scorciatoie personalizzate per funzioni frequenti. Es: Ctrl+V = nuova vendita, Ctrl+I = inventario rapido, Ctrl+R = report giornaliero.',
    },
    {
      question: 'Le notifiche in-app come funzionano?',
      answer:
        'Quando si verifica un evento importante (nuovo ordine, giacenza sotto scorta, ordine evaso), appare una notifica in-app. Click sulla notifica per aprire direttamente il dettaglio.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
