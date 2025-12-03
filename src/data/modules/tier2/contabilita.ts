import type { ModuleData } from '../types'

export const contabilitaModule: ModuleData = {
  slug: 'contabilita',
  name: 'Contabilità',
  tagline: 'Contabilità generale con IVA e registrazioni automatiche',
  category: 'Compliance e Amministrazione',
  categoryColor: 'indigo',
  icon: '📒',
  tier: 2,
  overview: {
    intro:
      'Il modulo Contabilità gestisce la contabilità generale con registrazioni automatiche da cicli attivo/passivo. Piano dei conti personalizzabile, prima nota partita doppia, liquidazione IVA periodica, scadenzari fornitori/clienti. Export per commercialista in formati standard. Riconciliazione bancaria automatica per zero discordanze.',
    mainBenefits: [
      'Contabilità sempre aggiornata in tempo reale',
      'Zero doppia digitazione tra gestionale e contabilità',
      'Visibilità cash-flow e scadenzari immediata',
      'Export commercialista in formati standard',
    ],
  },
  features: [
    {
      title: 'Piano dei conti',
      description:
        'Piano dei conti personalizzabile per ogni tipologia di attività',
      icon: '📋',
    },
    {
      title: 'Prima nota',
      description: 'Registrazioni contabili con partita doppia automatica',
      icon: '✍️',
    },
    {
      title: 'Registrazione automatica',
      description:
        'Fatture attive/passive registrate automaticamente in contabilità',
      icon: '🤖',
    },
    {
      title: 'Liquidazione IVA',
      description: 'Calcolo automatico liquidazione IVA mensile/trimestrale',
      icon: '💰',
    },
    {
      title: 'Scadenzari',
      description: 'Gestione scadenze fornitori/clienti con alert pagamenti',
      icon: '📅',
    },
    {
      title: 'Movimenti bancari',
      description:
        'Registrazione movimenti bancari e riconciliazione automatica',
      icon: '🏦',
    },
    {
      title: 'Export commercialista',
      description: 'Export in formati standard per software commercialista',
      icon: '📤',
    },
    {
      title: 'Report fiscali',
      description: 'Bilancino, situazione contabile, registri IVA',
      icon: '📊',
    },
  ],
  benefits: [
    {
      title: 'Contabilità real-time',
      description:
        'Ogni fattura emessa o ricevuta viene registrata automaticamente in contabilità. Situazione sempre aggiornata, nessun ritardo.',
    },
    {
      title: 'Zero doppia digitazione',
      metric: '-90% tempo',
      description:
        'Le registrazioni automatiche eliminano la doppia digitazione fatture. Tempo dedicato alla contabilità ridotto del 90%.',
    },
    {
      title: 'Cash-flow sotto controllo',
      description:
        'Scadenzari fornitori/clienti sempre aggiornati. Sai esattamente quando devi pagare e quando riceverai pagamenti.',
    },
  ],
  useCase: {
    title: 'Caso cliente: Rivenditore con commercialista esterno',
    customer: 'Negozio elettrodomestici con 200 fatture/mese',
    challenge:
      'Il commercialista riceveva le fatture a fine mese e le registrava manualmente. Contabilità sempre in ritardo, impossibile conoscere la situazione IVA in tempo reale. Doppia digitazione tra gestionale e contabilità.',
    solution:
      'Implementato modulo Contabilità con registrazioni automatiche. Ogni fattura emessa/ricevuta viene registrata automaticamente. Export mensile in formato Teamsystem per il commercialista. Liquidazione IVA disponibile in tempo reale.',
    results: [
      'Contabilità aggiornata in tempo reale vs. ritardo 1 mese',
      'Tempo commercialista ridotto da 8 a 2 ore/mese',
      'Zero errori di doppia digitazione',
      'Visibilità cash-flow immediata per decisioni finanziarie',
    ],
  },
  integrations: [
    { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
    { name: 'Acquisti & EDI', slug: 'acquisti-edi' },
    { name: 'RAEE', slug: 'raee' },
  ],
  faq: [
    {
      question: 'Le fatture vengono registrate automaticamente in contabilità?',
      answer:
        'Sì, ogni fattura emessa (ciclo attivo) o ricevuta (ciclo passivo) viene registrata automaticamente con la causale contabile corretta. Zero doppia digitazione.',
    },
    {
      question: 'Posso esportare i dati per il mio commercialista?',
      answer:
        'Sì, puoi esportare in formati standard compatibili con i principali software commercialisti (Teamsystem, Zucchetti, Buffetti). Export mensile o trimestrale con un click.',
    },
    {
      question: 'Come funziona la riconciliazione bancaria?',
      answer:
        'Importi i movimenti bancari dal conto corrente (file CSV o integrazione API banca) e il sistema li riconcilia automaticamente con pagamenti fatture e movimenti registrati. Evidenzia discordanze per verifica.',
    },
    {
      question: 'Posso calcolare la liquidazione IVA in tempo reale?',
      answer:
        'Sì, il sistema calcola in tempo reale IVA a debito, IVA a credito e saldo IVA. Puoi sapere in ogni momento la tua posizione IVA prima della scadenza trimestrale.',
    },
  ],
  _meta: {
    isComplete: true,
    version: 'v2',
    lastUpdated: '2024-12-01',
  },
}
