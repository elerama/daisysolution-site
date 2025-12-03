import type { ModuleData } from '../types'

export const webserviceModule: ModuleData = {
  slug: 'webservice',
  name: 'Webservice',
  tagline: 'API REST per integrazioni B2B, marketplace e sistemi terzi',
  category: 'Integrazione e Automazione',
  categoryColor: 'pink',
  icon: '🔌',
  tier: 1,
  overview: {
    intro:
      "Il modulo Webservice espone l'intero ecosistema Daisy tramite API REST moderne. Integra sistemi terzi, marketplace, app mobile, portali B2B. Endpoint CRUD per articoli, clienti, ordini, giacenze. Webhook per eventi real-time. Autenticazione OAuth2, documentazione Swagger, rate limiting, SDK client. L'ecosistema diventa estendibile all'infinito.",
    mainBenefits: [
      'Integrazioni semplificate con sistemi terzi',
      'Sviluppo app custom facilitato con API moderne',
      'Automazione processi B2B end-to-end',
      'Ecosistema estendibile senza limiti',
    ],
    stats: [
      {
        label: 'Endpoint API',
        value: '150+',
        description: 'per gestire tutte le entità',
      },
      {
        label: 'Chiamate API/giorno',
        value: '100k+',
        description: 'gestite con rate limiting',
      },
    ],
  },
  features: [
    {
      title: 'API REST moderne',
      description:
        'Endpoint RESTful con autenticazione OAuth2 e API Key',
      icon: '🌐',
    },
    {
      title: 'CRUD completo',
      description:
        'Crea, leggi, aggiorna, elimina articoli, clienti, ordini, giacenze',
      icon: '📝',
    },
    {
      title: 'Webhook eventi',
      description:
        'Ricevi notifiche push per eventi: nuovo ordine, giacenza sotto scorta, etc.',
      icon: '🔔',
    },
    {
      title: 'Documentazione Swagger',
      description:
        'Documentazione interattiva OpenAPI per testare endpoint dal browser',
      icon: '📚',
    },
    {
      title: 'Rate limiting',
      description:
        'Throttling automatico per proteggere il sistema da abusi',
      icon: '⏱️',
    },
    {
      title: 'Versioning API',
      description:
        'Gestione versioni API (v1, v2) per retrocompatibilità',
      icon: '🔢',
    },
    {
      title: 'SDK client',
      description:
        'Librerie client PHP, JavaScript, Python per integrazioni rapide',
      icon: '💻',
    },
    {
      title: 'Log audit',
      description:
        'Tracciamento completo chiamate API per debug e audit sicurezza',
      icon: '🔍',
    },
  ],
  benefits: [
    {
      title: 'Integrazioni semplificate',
      metric: '-80% tempo dev',
      description:
        "Le API REST riducono il tempo di sviluppo integrazioni dell'80% rispetto a soluzioni custom.",
    },
    {
      title: 'Ecosistema estendibile',
      description:
        "Sviluppa app mobile, integra marketplace, connetti CRM esterni. L'ecosistema diventa estendibile senza limiti tecnici.",
    },
    {
      title: 'Automazione B2B',
      metric: '100% processi',
      description:
        'Automatizza completamente ordini B2B da portali clienti con sincronizzazione real-time giacenze e prezzi.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Integrazione marketplace e portale B2B',
    customer: 'Distributore elettronica con 200 rivenditori B2B',
    challenge:
      'I rivenditori chiamavano per conoscere disponibilità articoli e piazzare ordini. Nessuna integrazione con marketplace Amazon/eBay. Gestione manuale ordini causava ritardi ed errori. Impossibile scalare il business.',
    solution:
      'Implementato modulo Webservice con API per portale B2B (rivenditori verificano giacenze e inviano ordini) e integrazione marketplace (pubblicazione automatica catalogo, sincronizzazione ordini). Webhook notificano ordini in tempo reale.',
    results: [
      'Portale B2B: 200 rivenditori piazzano ordini autonomamente',
      'Chiamate telefoniche ridotte del 90%',
      'Marketplace: 15k prodotti pubblicati automaticamente',
      'Revenue marketplace +€450k/anno con gestione automatica',
    ],
  },
  integrations: [
    { name: 'E-commerce', slug: 'ecommerce' },
    { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
    { name: 'Magazzino', slug: 'magazzino' },
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
  ],
  faq: [
    {
      question: 'Quali endpoint API sono disponibili?',
      answer:
        'Oltre 150 endpoint per gestire articoli, clienti, fornitori, ordini, giacenze, fatture, movimenti magazzino, prezzi, promozioni. La documentazione Swagger interattiva mostra tutti gli endpoint con esempi di richiesta/risposta.',
    },
    {
      question: 'Come funzionano i webhook per eventi real-time?',
      answer:
        "Configuri URL endpoint del tuo sistema e selezioni eventi (es. \"nuovo ordine\"). Quando l'evento si verifica, Daisy invia una richiesta POST al tuo endpoint con i dati dell'evento. Utile per integrazioni real-time.",
    },
    {
      question: 'Le API sono sicure?',
      answer:
        'Sì, autenticazione OAuth2 o API Key, HTTPS obbligatorio, rate limiting per prevenire abusi, log audit completo di tutte le chiamate. Puoi anche limitare accesso API per IP o per utente specifico.',
    },
    {
      question: 'Posso sviluppare una app mobile con queste API?',
      answer:
        'Assolutamente sì! Le API REST sono perfette per app mobile. Diversi clienti hanno sviluppato app per agenti di vendita, app per clienti B2B, app per inventario magazzino con scanner barcode.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
