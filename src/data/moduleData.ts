/**
 * Dati strutturati moduli Daisy Solution
 * Source: docs/intelligence/16-moduli-completi-daisy.md
 * Total: 19 moduli (12 Tier 1 + 7 Tier 2)
 */

import { formatNumber, INFRASTRUCTURE, METRICS, SLA } from '@/data/siteStats'

export type ModuleCategory =
    | 'Operazioni Base'
    | 'Crescita e Sviluppo'
    | 'Eccellenza Operativa'
    | 'Intelligence e Ottimizzazione'
    | 'Integrazione e Automazione'
    | 'Compliance e Amministrazione'

export type CategoryColor = 'emerald' | 'pink' | 'violet' | 'indigo' | 'blue' | 'amber'

export interface ModuleData {
    slug: string
    name: string
    tagline: string
    category: ModuleCategory
    categoryColor: CategoryColor
    icon: string
    tier: 1 | 2
    overview: {
        intro: string
        mainBenefits: string[]
        stats?: {
            label: string
            value: string
            description: string
        }[]
    }
    features: {
        title: string
        description: string
        icon: string          // Emoji legacy (retrocompatibilita)
        iconName?: string     // Nome Heroicon (es: 'ClipboardDocumentListIcon')
    }[]
    benefits: {
        title: string
        metric?: string
        description: string
    }[]
    useCase: {
        title: string
        customer?: string
        challenge: string
        solution: string
        results: string[]
    }
    integrations: {
        name: string
        slug: string
    }[]
    faq: {
        question: string
        answer: string
    }[]

    // Nuovi campi opzionali (v2) - retrocompatibili
    featureCategories?: FeatureCategory[]
    optionalConnections?: OptionalConnection[]
    screenshots?: ScreenshotItem[]

    // Hero migliorata (v2.1)
    heroIcon?: string      // Nome Heroicon (es: 'ShoppingCartIcon')
    heroIntro?: string     // Intro breve per hero (max 2-3 righe)
}

// ==================== Nuove Interface v2 ====================

export interface FeatureItem {
    title: string
    description: string
    icon?: string         // Emoji legacy (retrocompatibilita)
    iconName?: string     // Nome Heroicon (es: 'ClipboardDocumentListIcon')
}

export interface FeatureCategory {
    id: string
    name: string
    icon: string          // Emoji legacy (retrocompatibilita)
    iconName?: string     // Nome Heroicon (es: 'DocumentTextIcon')
    features: FeatureItem[]
}

export interface OptionalConnection {
    id: string
    name: string
    description: string
    benefits: string[]
    icon: string          // Emoji legacy (retrocompatibilita)
    iconName?: string     // Nome Heroicon (es: 'BoltIcon')
    externalLink?: string
    relatedModuleSlug?: string
}

export interface ScreenshotItem {
    src: string
    alt: string
    caption: string
}

export const modules: Record<string, ModuleData> = {

    // ==================== TIER 1 - Core Operations ====================

    'vendite-cassa': {
        slug: 'vendite-cassa',
        name: 'Vendite & Cassa',
        tagline: 'Gestisci l\'intero ciclo di vendita, da preventivo a scontrino fiscale',
        category: 'Operazioni Base',
        categoryColor: 'emerald',
        icon: '🛒',
        tier: 1,

        // Hero migliorata v2.1
        heroIcon: 'ShoppingCartIcon',
        heroIntro: 'Il cuore operativo del tuo negozio: gestisci vendite, scontrini, fatture e fidelity card in un unico sistema. Funziona anche offline.',

        overview: {
            intro: 'Il modulo Vendite & Cassa e il cuore operativo di Daisy Solution. Gestisce l\'intero ciclo di vendita: preventivi, ordini clienti, documenti di trasporto, fatture immediate e differite, scontrini fiscali con POS integrato. Sistema di fidelity card e modalita offline per garantire continuita operativa anche senza connessione Internet.',
            mainBenefits: [
                'Ciclo vendita completo integrato',
                'Modalita offline: vendi sempre, anche senza Internet',
                'Fidelizzazione clienti con punti fedelta',
                'Report vendite real-time per articolo/cliente'
            ],
            stats: [
                { label: 'Vendite elaborate', value: `${formatNumber(METRICS.yearlySalesManaged)}`, description: 'nell\'ultimo anno' },
                { label: 'Postazioni gestite', value: `${INFRASTRUCTURE.dailyCashRegisters}+`, description: 'attive ogni giorno' },
                { label: 'Tempo medio', value: `${METRICS.avgSaleSeconds} secondi`, description: 'per eseguire una vendita' },
                { label: 'Uptime garantito', value: `${SLA.uptimePercent}%`, description: 'disponibilita del servizio' }
            ]
        },
        features: [
            { title: 'Preventivi veloci', description: 'Crea preventivi professionali e convertili in ordini con un click', icon: '📋', iconName: 'ClipboardDocumentListIcon' },
            { title: 'Ordini clienti', description: 'Gestisci ordini B2B e B2C con tracking completo evasione', icon: '📦', iconName: 'CubeIcon' },
            { title: 'DDT e fatture', description: 'Emetti documenti di trasporto e fatture immediate o differite', icon: '📄', iconName: 'DocumentTextIcon' },
            { title: 'Scontrini POS', description: 'Registratore di cassa fiscale integrato con chiusura giornaliera', icon: '🧾', iconName: 'ReceiptPercentIcon' },
            { title: 'Modalità offline', description: 'Vendi sempre, anche senza connessione Internet', icon: '🔌', iconName: 'BoltSlashIcon' },
            { title: 'Fidelity card', description: 'Sistema punti fedeltà per premiare clienti abituali', icon: '🎯', iconName: 'UserGroupIcon' },
            { title: 'Pagamenti multipli', description: 'Contante, carta, bonifico, finanziamento in un solo ordine', icon: '💳', iconName: 'CreditCardIcon' },
            { title: 'Buoni e gift card', description: 'Gestione buoni spesa e gift card ricaricabili', icon: '🎁', iconName: 'GiftIcon' }
        ],
        benefits: [
            { title: 'Zero perdite vendite', metric: '100% operatività', description: 'La modalità offline garantisce che tu possa vendere sempre, anche con Internet assente.' },
            { title: 'Ciclo vendita completo', description: 'Da preventivo a fattura, tutto è integrato. Zero doppia digitazione, zero errori di trascrizione.' },
            { title: 'Clienti fidelizzati', metric: '+35% ritorno', description: 'Sistema punti fedeltà aumenta il tasso di ritorno clienti del 35%.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena Unieuro 270 affiliati',
            customer: 'Unieuro (270 negozi affiliati)',
            challenge: 'Gestire 900 postazioni vendita con continuità operativa anche in caso di problemi di connessione Internet. Necessità di avere giacenze aggiornate in tempo reale tra tutti i negozi.',
            solution: 'Implementazione modulo Vendite con modalità offline e sincronizzazione cloud. Ogni postazione può operare autonomamente e sincronizza automaticamente quando la connessione è disponibile.',
            results: [
                '100% uptime operativo (zero perdite vendite)',
                '900 postazioni attive gestite centralmente',
                'Sincronizzazione giacenze real-time tra negozi',
                'Report vendite consolidati per tutta la rete'
            ]
        },
        integrations: [
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Contabilità', slug: 'contabilita' },
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Statistiche BI', slug: 'statistiche-bi' }
        ],
        faq: [
            {
                question: 'Come funziona la modalità offline?',
                answer: 'Il sistema salva localmente tutte le transazioni quando Internet non è disponibile. Appena la connessione torna, sincronizza automaticamente tutto con il cloud senza perdere nessun dato.'
            },
            {
                question: 'Posso gestire più casse contemporaneamente?',
                answer: 'Sì, puoi gestire un numero illimitato di postazioni vendita. Tutte sincronizzano giacenze e clienti in tempo reale.'
            },
            {
                question: 'Il sistema fidelity è personalizzabile?',
                answer: 'Completamente. Puoi definire regole punti, soglie premi, promozioni esclusive per clienti fedeli e molto altro.'
            },
            {
                question: 'Quali stampanti fiscali sono supportate?',
                answer: 'Supportiamo tutte le principali stampanti fiscali certificate (Epson, Custom, RCH). Configurazione automatica tramite driver.'
            }
        ],

        // ==================== Nuovi dati v2 ====================
        featureCategories: [
            {
                id: 'documenti',
                name: 'Documenti di Vendita',
                icon: '📄',
                iconName: 'DocumentTextIcon',
                features: [
                    { title: 'Gestione preventivi', description: 'Crea preventivi professionali e convertili in ordini con un click', iconName: 'ClipboardDocumentListIcon' },
                    { title: 'Ordini clienti B2B/B2C', description: 'Gestisci ordini clienti provenienti anche da siti e-commerce B2B e B2C', iconName: 'CubeIcon' },
                    { title: 'Gestione acconti', description: 'Registra e traccia acconti su ordini clienti', iconName: 'BanknotesIcon' },
                    { title: 'DDT', description: 'Emetti documenti di trasporto per le vendite con consegna', iconName: 'TruckIcon' },
                    { title: 'Fatture immediate e differite', description: 'Emetti fatture immediate o differite con generazione automatica file XML', iconName: 'DocumentDuplicateIcon' },
                    { title: 'Fatture di servizi', description: 'Gestisci fatturazione per servizi aggiuntivi (garanzie, riparazioni, consulenze)', iconName: 'WrenchScrewdriverIcon' },
                    { title: 'Scontrini fiscali', description: 'Emissione scontrini con registratore di cassa fiscale integrato e chiusura giornaliera', iconName: 'ReceiptPercentIcon' }
                ]
            },
            {
                id: 'incassi',
                name: 'Incassi e Pagamenti',
                icon: '💳',
                iconName: 'CreditCardIcon',
                features: [
                    { title: 'Modalita incasso multiple', description: 'Contanti, POS, bonifici bancari, finanziamenti in un solo ordine', iconName: 'CurrencyEuroIcon' },
                    { title: 'Gift card e buoni', description: 'Accetta pagamenti con gift card, buoni spesa e altre soluzioni', iconName: 'GiftIcon' },
                    { title: 'Gestione crediti clienti', description: 'Traccia crediti clienti con scadenziario e incassi differiti', iconName: 'ClockIcon' }
                ]
            },
            {
                id: 'fidelizzazione',
                name: 'Fidelizzazione',
                icon: '🎯',
                iconName: 'HeartIcon',
                features: [
                    { title: 'Fidelity card', description: 'Sistema punti fedelta per premiare clienti abituali con regole personalizzabili', iconName: 'IdentificationIcon' },
                    { title: 'Gift card', description: 'Gestione gift card ricaricabili per aumentare le vendite', iconName: 'GiftIcon' },
                    { title: 'Buoni di spesa', description: 'Emetti e gestisci buoni spesa per promozioni e resi', iconName: 'TicketIcon' }
                ]
            },
            {
                id: 'resi-servizi',
                name: 'Resi e Servizi',
                icon: '🔄',
                iconName: 'ArrowPathIcon',
                features: [
                    { title: 'Gestione resi', description: 'Elabora resi con restituzione denaro o emissione buono di spesa', iconName: 'ArrowUturnLeftIcon' },
                    { title: 'Vendita servizi', description: 'Vendi garanzie supplementari, ricariche telefoniche e altri servizi', iconName: 'ShieldCheckIcon' }
                ]
            },
            {
                id: 'reporting',
                name: 'Reporting e Controllo',
                icon: '📊',
                iconName: 'ChartBarIcon',
                features: [
                    { title: 'Riepilogo vendite', description: 'Monitora in modo chiaro ogni operazione con dettaglio vendite', iconName: 'ClipboardDocumentCheckIcon' },
                    { title: 'Controllo cassa', description: 'Verifica operazioni di cassa per maggiore sicurezza e trasparenza', iconName: 'CalculatorIcon' },
                    { title: 'Esportazioni Excel', description: 'Esporta dati per analisi e reportistica personalizzata', iconName: 'ArrowDownTrayIcon' },
                    { title: 'Statistiche avanzate', description: 'Analisi dettagliate ordini e vendite per articolo, cliente, operatore', iconName: 'PresentationChartLineIcon' }
                ]
            },
            {
                id: 'offline',
                name: 'Modalita Offline',
                icon: '🔌',
                iconName: 'BoltSlashIcon',
                features: [
                    { title: 'Scontrini offline', description: 'Emetti scontrini anche senza connessione Internet', iconName: 'SignalSlashIcon' },
                    { title: 'Chiusura cassa offline', description: 'Chiudi la cassa con salvataggio sicuro dei dati, sincronizzazione automatica al ripristino connessione', iconName: 'CloudArrowUpIcon' }
                ]
            }
        ],

        optionalConnections: [
            {
                id: 'daisyfast',
                name: 'DaisyFast',
                description: 'Applicazione per vendite veloci anche in assenza di connessione Internet',
                benefits: [
                    'Vendite rapide',
                    'Funziona offline con sincronizzazione automatica',
                    'Ideale per fiere, eventi e vendite fuori sede'
                ],
                icon: '⚡',
                iconName: 'BoltIcon'
            },
            {
                id: 'ecommerce-orders',
                name: 'Ordini E-commerce',
                description: 'Collegamento ordini da siti e-commerce B2B e B2C',
                benefits: [
                    'Importazione automatica ordini online',
                    'Sincronizzazione giacenze in tempo reale',
                    'Gestione unificata ordini fisici e digitali'
                ],
                icon: '🌐',
                iconName: 'GlobeAltIcon',
                relatedModuleSlug: 'ecommerce'
            },
            {
                id: 'contabilita-link',
                name: 'Contabilita',
                description: 'Collegamento diretto alla contabilita per corrispettivi e fatture',
                benefits: [
                    'Registrazione automatica corrispettivi',
                    'Contabilizzazione fatture con modalita incasso',
                    'Eliminazione doppia digitazione'
                ],
                icon: '📒',
                iconName: 'CalculatorIcon',
                relatedModuleSlug: 'contabilita'
            },
            {
                id: 'liste-regalo',
                name: 'Lista Regali',
                description: 'Collegamento con modulo lista regali per eventi speciali',
                benefits: [
                    'Gestione liste nozze e battesimi',
                    'Prenotazione articoli da lista',
                    'Report contributi ricevuti'
                ],
                icon: '🎁',
                iconName: 'GiftIcon',
                relatedModuleSlug: 'liste-regalo'
            },
            {
                id: 'pos-integration',
                name: 'POS',
                description: 'Collegamento con terminali POS per scambio importo automatico',
                benefits: [
                    'Invio automatico importo al POS',
                    'Conferma pagamento in tempo reale',
                    'Eliminazione errori di digitazione'
                ],
                icon: '💳',
                iconName: 'CreditCardIcon'
            },
            {
                id: 'casse-automatiche',
                name: 'Casse Automatiche',
                description: 'Integrazione con casse automatiche per pagamenti self-service',
                benefits: [
                    'Pagamenti automatizzati senza operatore',
                    'Riduzione code alla cassa',
                    'Gestione resto automatica'
                ],
                icon: '🏧',
                iconName: 'BanknotesIcon'
            },
            {
                id: 'aruba',
                name: 'Aruba',
                description: 'Collegamento con Aruba per invio automatico fatture elettroniche',
                benefits: [
                    'Invio automatico al Sistema di Interscambio',
                    'Conservazione digitale a norma',
                    'Notifiche stato fatture'
                ],
                icon: '📤',
                iconName: 'CloudArrowUpIcon',
                externalLink: 'https://www.aruba.it/fatturazione-elettronica.aspx'
            }
        ],

        screenshots: [
            {
                src: '/screenshots/moduli/vendite-cassa-hero.svg',
                alt: 'Schermata principale del modulo Vendite e Cassa',
                caption: 'Dashboard vendite con riepilogo giornaliero'
            },
            {
                src: '/screenshots/moduli/vendite-cassa-scontrino.svg',
                alt: 'Emissione scontrino fiscale',
                caption: 'Emissione scontrino con pagamenti multipli'
            },
            {
                src: '/screenshots/moduli/vendite-cassa-fidelity.svg',
                alt: 'Gestione fidelity card',
                caption: 'Sistema fidelity con accumulo punti'
            },
            {
                src: '/screenshots/moduli/vendite-cassa-fattura.svg',
                alt: 'Emissione fattura elettronica',
                caption: 'Fatturazione elettronica con invio automatico'
            }
        ]
    },

    'magazzino': {
        slug: 'magazzino',
        name: 'Magazzino Multi-Sede',
        tagline: 'Gestisci giacenze, movimenti e inventari su più sedi in tempo reale',
        category: 'Operazioni Base',
        categoryColor: 'emerald',
        icon: '📦',
        tier: 1,
        overview: {
            intro: 'Sistema di gestione magazzino avanzato con supporto multi-sede, tracking seriali, gestione ubicazioni e inventari periodici. Movimenti automatici da documenti vendita/acquisto, alert giacenze sotto scorta, transfer inter-sede con tracking completo.',
            mainBenefits: [
                'Giacenze real-time su tutte le sedi',
                'Transfer automatici tra magazzini',
                'Alert giacenze sotto scorta',
                'Inventari con pistola barcode'
            ],
            stats: [
                { label: 'Seriali tracciati', value: '1M+', description: 'per garanzie e compliance' },
                { label: 'Sedi gestite', value: '50+', description: 'per singolo cliente catena' }
            ]
        },
        features: [
            { title: 'Multi-sede real-time', description: 'Gestisci giacenze di decine di punti vendita con aggiornamenti istantanei', icon: '🏪' },
            { title: 'Tracking seriali', description: 'Traccia ogni prodotto serializzato per garanzie e compliance', icon: '🔢' },
            { title: 'Ubicazioni magazzino', description: 'Organizza il magazzino con scaffali, ripiani e celle per trovare subito la merce', icon: '📍' },
            { title: 'Transfer inter-sede', description: 'Sposta merce tra negozi con tracking completo e firma digitale', icon: '🚚' },
            { title: 'Inventari periodici', description: 'Esegui inventari con pistola barcode e riconciliazione automatica', icon: '📊' },
            { title: 'Alert scorte', description: 'Ricevi notifiche quando un articolo scende sotto scorta minima', icon: '⚠️' },
            { title: 'Carico automatico', description: 'Carico merce automatico da ricezione ordini fornitori', icon: '⬇️' },
            { title: 'Scarico automatico', description: 'Scarico automatico da vendite e scontrini fiscali', icon: '⬆️' }
        ],
        benefits: [
            { title: 'Visibilità completa', metric: '100% giacenze', description: 'Conosci sempre la disponibilità reale su tutte le sedi in tempo reale.' },
            { title: 'Inventario rapido', metric: '-80% tempo', description: 'Con pistola barcode riduci l\'inventario da giorni a ore.' },
            { title: 'Zero rotture stock', description: 'Alert automatici garantiscono che non resti mai senza merce in vendita.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena Expert 18 negozi',
            customer: 'Catena Expert (18 punti vendita)',
            challenge: 'Gestione di 18 magazzini con necessità di visibilità unificata e transfer rapidi tra negozi per evadere ordini clienti.',
            solution: 'Implementazione modulo Magazzino multi-sede con transfer automatici e alert condivisi. Ogni negozio vede le giacenze degli altri e può richiedere merce con un click.',
            results: [
                '18 magazzini sincronizzati in tempo reale',
                '-65% transfer manuali grazie ad alert intelligenti',
                '+40% ordini evasi da magazzino alternativo',
                'Inventario annuale completato in 2 giorni invece di 8'
            ]
        },
        integrations: [
            { name: 'Vendite', slug: 'vendite-cassa' },
            { name: 'Acquisti EDI', slug: 'acquisti-edi' },
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Statistiche BI', slug: 'statistiche-bi' }
        ],
        faq: [
            {
                question: 'Come funzionano i transfer tra sedi?',
                answer: 'Puoi creare una richiesta transfer da un negozio all\'altro. Il sistema genera automaticamente i documenti di scarico/carico e traccia la spedizione. Il destinatario riceve notifica e può firmare digitalmente la ricezione.'
            },
            {
                question: 'Posso gestire più magazzini fisici nello stesso negozio?',
                answer: 'Sì, ogni sede può avere più magazzini (es: punto vendita, deposito, magazzino esterno). Puoi anche definire ubicazioni interne (scaffali, ripiani).'
            },
            {
                question: 'Come funziona l\'inventario con pistola barcode?',
                answer: 'Scannerizzi i prodotti con pistola barcode, il sistema confronta le quantità rilevate con quelle teoriche e genera automaticamente i documenti di rettifica giacenze.'
            },
            {
                question: 'Posso impostare scorte minime diverse per negozio?',
                answer: 'Sì, ogni articolo può avere scorte minime personalizzate per ogni sede. Gli alert sono specifici per magazzino.'
            }
        ]
    },

    'acquisti-edi': {
        slug: 'acquisti-edi',
        name: 'Acquisti & EDI',
        tagline: 'Gestione ordini fornitori e integrazione EDI con centrali d\'acquisto',
        category: 'Operazioni Base',
        categoryColor: 'emerald',
        icon: '��',
        tier: 1,
        overview: {
            intro: 'Modulo completo per gestione ciclo acquisti: ordini a fornitori con condizioni commerciali, ricezione merce, fatture passive, resi fornitori. Integrazione EDI nativa con centrali d\'acquisto (Unieuro, Expert, Domex, Gaer) per ordini automatici e listini aggiornati.',
            mainBenefits: [
                'Integrazione diretta centrali acquisto',
                'Zero inserimento manuale listini',
                'Proposte ordine automatiche da giacenze',
                'Controllo costi acquisto real-time'
            ],
            stats: [
                { label: 'Centrali integrate', value: '15+', description: 'Unieuro, Expert, Domex, Gaer e altre' },
                { label: 'Ordini EDI al giorno', value: '5.000+', description: 'processati automaticamente' }
            ]
        },
        features: [
            { title: 'Ordini fornitori', description: 'Crea ordini con condizioni commerciali personalizzate per fornitore', icon: '📝' },
            { title: 'Ricezione merce', description: 'Ricevi merce con generazione automatica bolle carico magazzino', icon: '📥' },
            { title: 'Integrazione EDI', description: 'Ordini automatici a centrali Unieuro, Expert, Domex, Gaer', icon: '🔗' },
            { title: 'Import listini', description: 'Importazione automatica listini fornitori in Excel, CSV, XML', icon: '📊' },
            { title: 'Fatture passive', description: 'Registrazione fatture acquisto e note credito con controllo prezzi', icon: '📄' },
            { title: 'Resi fornitori', description: 'Gestione resi e sostituzioni merce difettosa', icon: '↩️' },
            { title: 'Proposte ordine', description: 'Sistema suggerisce ordini basandosi su giacenze e vendite storiche', icon: '🤖' },
            { title: 'Controllo sconti', description: 'Verifica automatica sconti quantità e condizioni pagamento', icon: '💰' }
        ],
        benefits: [
            { title: 'Integrazione centrali', metric: '-90% tempo', description: 'Ordini EDI automatici eliminano il 90% del lavoro manuale di inserimento ordini.' },
            { title: 'Listini aggiornati', metric: 'Tempo reale', description: 'Import automatico listini fornitori: prezzi sempre aggiornati senza errori.' },
            { title: 'Proposte intelligenti', description: 'Il sistema suggerisce cosa ordinare basandosi su vendite e giacenze, riducendo rotture di stock del 75%.' }
        ],
        useCase: {
            title: 'Caso cliente: Affiliato Unieuro 3 punti vendita',
            customer: 'Affiliato Unieuro (3 negozi)',
            challenge: 'Gestione manuale ordini a Centrale Unieuro con invio fax ed errori frequenti. Listini cartacei obsoleti dopo pochi giorni.',
            solution: 'Attivazione integrazione EDI Unieuro con ordini automatici e sincronizzazione listini giornaliera. Sistema propone automaticamente ordini basandosi su vendite e giacenze.',
            results: [
                '-95% tempo gestione ordini (da 4 ore a 15 minuti al giorno)',
                'Zero errori inserimento codici articolo',
                'Listini sempre aggiornati automaticamente',
                '+25% rotazione magazzino grazie a proposte ordine intelligenti'
            ]
        },
        integrations: [
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Contabilità', slug: 'contabilita' },
            { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
            { name: 'Import/Export', slug: 'webservice' }
        ],
        faq: [
            {
                question: 'Quali centrali d\'acquisto sono supportate?',
                answer: 'Supportiamo le principali centrali: Unieuro, Expert, Domex, Gaer, Euronics, Trony, Darty e altre. L\'integrazione EDI è certificata e testata quotidianamente.'
            },
            {
                question: 'Come funzionano le proposte ordine automatiche?',
                answer: 'Il sistema analizza le vendite degli ultimi mesi, le giacenze attuali e le scorte minime impostate. Genera automaticamente una proposta di ordine ottimizzata che puoi confermare con un click.'
            },
            {
                question: 'Posso gestire ordini anche a fornitori non EDI?',
                answer: 'Sì, per fornitori tradizionali puoi creare ordini manuali che vengono poi stampati o inviati via email. Il carico merce funziona allo stesso modo per tutti i fornitori.'
            },
            {
                question: 'Come vengono importati i listini fornitori?',
                answer: 'Supportiamo Excel, CSV, XML e formati EDI standard. Puoi impostare import automatici programmati (es: ogni notte) o manuali on-demand.'
            }
        ]
    },

    'banca-dati-eldomcat': {
        slug: 'banca-dati-eldomcat',
        name: 'Banca Dati & Eldomcat',
        tagline: '300.000+ articoli pronti con foto e caratteristiche tecniche',
        category: 'Integrazione e Automazione',
        categoryColor: 'pink',
        icon: '🗄️',
        tier: 1,
        overview: {
            intro: 'Anagrafica articoli completa integrata con Eldomcat: 300.000+ prodotti elettronica ed elettrodomestici con foto professionali, schede tecniche strutturate, multi-barcode. Gestione brand, categorie, varianti, codici alternativi e articoli equivalenti. Sincronizzazione automatica dati con centrali d\'acquisto.',
            mainBenefits: [
                '300.000+ articoli pronti con Eldomcat',
                'Risparmio 75.000 ore inserimento dati',
                'Foto e caratteristiche aggiornate automaticamente',
                'Ricerca avanzata per caratteristiche tecniche'
            ],
            stats: [
                { label: 'Articoli Eldomcat', value: '300k+', description: 'pronti con foto e schede tecniche' },
                { label: 'Ore risparmiate', value: '75.000', description: 'su inserimento manuale dati' }
            ]
        },
        features: [
            { title: 'Integrazione Eldomcat', description: '300.000+ articoli con foto professionali e schede tecniche complete', icon: '🏷️' },
            { title: 'Multi-barcode', description: 'Gestione multipla codici barcode: EAN, UPC, codici interni e alternativi', icon: '📊' },
            { title: 'Schede tecniche', description: 'Caratteristiche strutturate per ogni prodotto con ricerca avanzata', icon: '📋' },
            { title: 'Gestione brand', description: 'Organizzazione articoli per brand, categorie e sottocategorie merceologiche', icon: '🏢' },
            { title: 'Varianti prodotto', description: 'Gestione taglie, colori e varianti tramite griglie configurabili', icon: '🎨' },
            { title: 'Import massivo', description: 'Importazione massiva dati da fornitori e centrali in formato Excel/CSV/XML', icon: '📥' },
            { title: 'Articoli equivalenti', description: 'Gestione codici alternativi e prodotti sostitutivi', icon: '🔄' },
            { title: 'Sincronizzazione', description: 'Aggiornamento automatico foto e caratteristiche da Eldomcat', icon: '🔄' }
        ],
        benefits: [
            { title: 'Risparmio tempo enorme', metric: '75.000 ore', description: 'Con Eldomcat risparmi 75.000 ore di inserimento manuale dati e foto prodotti.' },
            { title: 'Catalogo sempre aggiornato', description: 'Caratteristiche tecniche e foto si sincronizzano automaticamente: catalogo online e cartelli sempre aggiornati.' },
            { title: 'Ricerca potente', metric: '+60% velocità', description: 'Trova articoli per caratteristiche tecniche: "TV 55 pollici OLED sotto 1000€" funziona!' }
        ],
        useCase: {
            title: 'Caso cliente: Nuova apertura negozio elettronica',
            customer: 'Nuovo punto vendita elettronica',
            challenge: 'Avvio negozio nuovo: necessità di catalogare 15.000 prodotti con foto e schede tecniche per vendita e e-commerce. Tempistiche strette (2 settimane).',
            solution: 'Attivazione Eldomcat con importazione massiva codici articoli. In pochi click attivati 300.000 articoli pronti con foto e caratteristiche. Focus solo su listini prezzi.',
            results: [
                '15.000 articoli catalogati in 3 giorni invece di 6 mesi',
                'Risparmio stimato 75.000€ di lavoro manuale',
                'E-commerce online con catalogo completo in 1 settimana',
                'Cartelli prezzo con foto professionali dal primo giorno'
            ]
        },
        integrations: [
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Fastlabel', slug: 'fastlabel' },
            { name: 'Vendite', slug: 'vendite-cassa' },
            { name: 'Acquisti EDI', slug: 'acquisti-edi' }
        ],
        faq: [
            {
                question: 'Cos\'è Eldomcat e come funziona?',
                answer: 'Eldomcat è il database più completo d\'Italia di prodotti elettronica ed elettrodomestici. Include 300.000+ articoli con foto professionali, schede tecniche strutturate e caratteristiche complete. Si sincronizza automaticamente con Daisy.'
            },
            {
                question: 'Quanto costa Eldomcat?',
                answer: 'Eldomcat ha un costo di circa 200€/mese. Considerando che sostituisce 75.000 ore di lavoro manuale (valore ~750.000€), il ROI è immediato. Include anche foto professionali che singolarmente costerebbero 10€ ciascuna.'
            },
            {
                question: 'Posso aggiungere articoli non presenti in Eldomcat?',
                answer: 'Sì, puoi inserire liberamente articoli personalizzati. Il sistema gestisce sia articoli Eldomcat che articoli custom in modo unificato.'
            },
            {
                question: 'Come funziona la sincronizzazione automatica?',
                answer: 'Ogni notte il sistema sincronizza automaticamente foto, caratteristiche e informazioni aggiornate da Eldomcat. Non devi fare nulla: il catalogo si aggiorna da solo.'
            }
        ]
    },

    'ecommerce': {
        slug: 'ecommerce',
        name: 'E-commerce B2B/B2C',
        tagline: 'Negozio online integrato con giacenze real-time e marketplace',
        category: 'Crescita e Sviluppo',
        categoryColor: 'violet',
        icon: '🛍️',
        tier: 1,
        overview: {
            intro: 'Piattaforma e-commerce completa B2B e B2C con integrazione nativa Daisy. Giacenze sincronizzate in tempo reale, carrello abbandonato, marketplace Amazon/eBay, feed automatici Google Shopping. Design responsive e ottimizzato SEO con contenuti Eldomcat. Gestione ordini online unificata con negozio fisico.',
            mainBenefits: [
                'Zero doppia gestione ordini online/offline',
                'Giacenze sincronizzate real-time',
                'Marketplace Amazon/eBay automatici',
                '300k+ prodotti pronti per vendita online'
            ],
            stats: [
                { label: 'Incremento vendite', value: '+150%', description: 'dopo primo anno e-commerce' },
                { label: 'Prodotti online', value: '300k+', description: 'con Eldomcat pronti subito' }
            ]
        },
        features: [
            { title: 'Integrazione Daisy', description: 'Ordini online diventano automaticamente documenti Daisy: zero doppio lavoro', icon: '🔗' },
            { title: 'Giacenze real-time', description: 'Disponibilità prodotti sincronizzata istantaneamente tra negozio e online', icon: '⚡' },
            { title: 'Marketplace Amazon', description: 'Pubblica automaticamente su Amazon con sync giacenze e ordini', icon: '📦' },
            { title: 'Marketplace eBay', description: 'Gestione automatica inserzioni eBay con template personalizzabili', icon: '🏷️' },
            { title: 'Google Shopping', description: 'Feed automatici per Google Shopping e comparatori prezzi', icon: '🔍' },
            { title: 'Carrello abbandonato', description: 'Email automatiche per recuperare carrelli abbandonati', icon: '🛒' },
            { title: 'B2B e B2C', description: 'Gestione listini diversificati per clienti privati e rivenditori', icon: '👥' },
            { title: 'Design responsive', description: 'Sito ottimizzato mobile-first per acquisti da smartphone', icon: '📱' }
        ],
        benefits: [
            { title: 'Canale vendita nuovo', metric: '+150% fatturato', description: 'Clienti che attivano e-commerce vedono +150% fatturato dopo il primo anno.' },
            { title: 'Gestione unificata', description: 'Ordini online e offline nello stesso sistema: un solo magazzino, un solo gestionale, zero doppioni.' },
            { title: 'Marketplace automatici', metric: '3 canali in 1', description: 'Vendi su sito proprio, Amazon ed eBay gestendo tutto da un unico pannello.' }
        ],
        useCase: {
            title: 'Caso cliente: Negozio elettronica apre e-commerce',
            customer: 'Negozio elettronica (1 punto vendita fisico)',
            challenge: 'Fatturato stagionale con picchi natalizi e cali estivi. Necessità di aprire canale vendita online senza aumentare personale e complessità gestionale.',
            solution: 'Lancio e-commerce Elecommerce integrato con Daisy. Catalogo online automatico da Eldomcat, ordini che diventano documenti Daisy, giacenze sincronizzate. Attivazione marketplace Amazon.',
            results: [
                '+150% fatturato dopo primo anno',
                'E-commerce online in 2 settimane dall\'attivazione',
                'Zero aumento personale: ordini gestiti da personale esistente',
                '40% ordini da clienti fuori zona: nuovo bacino clienti'
            ]
        },
        integrations: [
            { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
            { name: 'Vendite', slug: 'vendite-cassa' },
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Comunicazioni', slug: 'comunicazioni' }
        ],
        faq: [
            {
                question: 'Come funziona l\'integrazione con Daisy?',
                answer: 'Gli ordini online vengono importati automaticamente in Daisy come ordini clienti. Puoi evaderli, fatturarli e gestire la spedizione direttamente da Daisy. Le giacenze si sincronizzano in tempo reale bidirezionale.'
            },
            {
                question: 'Devo inserire manualmente i prodotti online?',
                answer: 'No! Con Eldomcat attivo, i prodotti si pubblicano automaticamente online con foto, descrizioni e caratteristiche tecniche. Devi solo impostare i prezzi di vendita.'
            },
            {
                question: 'Quanto costa aprire l\'e-commerce?',
                answer: 'Elecommerce è in modalità SaaS con canone mensile da 99€. Include hosting, dominio, certificato SSL, template responsive e assistenza. Setup iniziale gratuito.'
            },
            {
                question: 'Posso vendere anche su Amazon?',
                answer: 'Sì, l\'integrazione Amazon è nativa. Pubblichi i prodotti su Amazon e gli ordini vengono importati automaticamente in Daisy come ordini normali.'
            }
        ]
    },

    'fastlabel': {
        slug: 'fastlabel',
        name: 'Cartelli Fastlabel',
        tagline: 'Stampa cartelli prezzo professionali con caratteristiche e promozioni',
        category: 'Crescita e Sviluppo',
        categoryColor: 'violet',
        icon: '🏷️',
        tier: 1,
        overview: {
            intro: 'Sistema di stampa cartelli prezzo professionale utilizzato da 2000+ negozi. Template personalizzabili, caratteristiche tecniche da Eldomcat, barcode, promozioni, QR code. Stampa massiva per reparti o selezioni articoli. Cartelli in conformità normativa (etichettatura energetica, RAEE).',
            mainBenefits: [
                '2000+ negozi utilizzatori in Italia',
                'Template professionali personalizzabili',
                'Caratteristiche tecniche automatiche da Eldomcat',
                'Conformità normative RAEE ed etichettatura energetica'
            ],
            stats: [
                { label: 'Utilizzatori attivi', value: '2.000+', description: 'negozi in tutta Italia' },
                { label: 'Cartelli stampati/anno', value: '5M+', description: 'milioni di cartelli' }
            ]
        },
        features: [
            { title: 'Template professionali', description: 'Scegli tra decine di template professionali o crea il tuo custom', icon: '🎨' },
            { title: 'Caratteristiche Eldomcat', description: 'Caratteristiche tecniche inserite automaticamente da database Eldomcat', icon: '📋' },
            { title: 'Barcode e QR code', description: 'Stampa barcode EAN e QR code per link schede prodotto online', icon: '📱' },
            { title: 'Promozioni visibili', description: 'Evidenzia promozioni con grafica accattivante e countdown scadenza', icon: '🎯' },
            { title: 'Stampa massiva', description: 'Stampa centinaia di cartelli per reparto o selezione articoli in pochi minuti', icon: '🖨️' },
            { title: 'Etichettatura energetica', description: 'Template conformi normativa etichettatura energetica UE', icon: '⚡' },
            { title: 'RAEE compliance', description: 'Simboli RAEE e informazioni smaltimento secondo normativa', icon: '♻️' },
            { title: 'Multi-formato', description: 'Supporto formati A4, A5, A6, 10x15cm e formati custom', icon: '📏' }
        ],
        benefits: [
            { title: 'Look professionale', metric: '+45% brand', description: 'Negozi con cartelli Fastlabel aumentano la percezione di professionalità del 45%.' },
            { title: 'Risparmio tempo', metric: '-90%', description: 'Stampa massiva di cartelli per reparto: da ore a minuti.' },
            { title: 'Caratteristiche corrette', description: 'Con Eldomcat le caratteristiche tecniche sono sempre aggiornate e corrette: zero errori.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena 12 negozi elettronica',
            customer: 'Catena elettronica (12 punti vendita)',
            challenge: 'Stampa cartelli manuale con Word: tempo enorme, risultato non professionale, caratteristiche prodotti spesso errate o obsolete. Ogni cartello richiedeva 15 minuti.',
            solution: 'Attivazione Fastlabel con template custom brandizzati. Integrazione Eldomcat per caratteristiche automatiche. Stampa massiva per reparto con aggiornamento settimanale prezzi.',
            results: [
                '-90% tempo stampa cartelli (da 8 ore a 45 minuti)',
                'Look uniforme e professionale su tutti i 12 negozi',
                'Caratteristiche tecniche sempre aggiornate da Eldomcat',
                'Compliance normativa etichettatura energetica automatica'
            ]
        },
        integrations: [
            { name: 'Banca Dati', slug: 'banca-dati-eldomcat' },
            { name: 'Promozioni', slug: 'promozioni' },
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'RAEE', slug: 'raee' }
        ],
        faq: [
            {
                question: 'Posso personalizzare i template dei cartelli?',
                answer: 'Sì, puoi creare template completamente personalizzati con logo, colori aziendali, font e layout. Oppure parti dai template pronti e li modifichi a piacimento.'
            },
            {
                question: 'Come vengono inserite le caratteristiche tecniche?',
                answer: 'Con Eldomcat attivo, le caratteristiche si inseriscono automaticamente nel cartello. Il sistema sa quali caratteristiche mostrare per ogni categoria merceologica (es: TV mostra pollici, risoluzione, HDR).'
            },
            {
                question: 'Quali stampanti sono supportate?',
                answer: 'Fastlabel supporta tutte le stampanti A4 standard (inkjet, laser) e stampanti fotografiche 10x15cm. Configurazione automatica con driver Windows.'
            },
            {
                question: 'Posso stampare cartelli con promozioni a tempo?',
                answer: 'Sì, il sistema mostra automaticamente il prezzo promozionale e può aggiungere countdown "Promo valida fino al..." per creare senso di urgenza.'
            }
        ]
    },

    'riparazioni': {
        slug: 'riparazioni',
        name: 'Riparazioni',
        tagline: 'Gestisci il laboratorio con tracking interventi, ricambi e Model Assistance',
        category: 'Operazioni Base',
        categoryColor: 'emerald',
        icon: '🔧',
        tier: 1,
        overview: {
            intro: 'Il modulo Riparazioni trasforma il tuo laboratorio in un centro assistenza professionale. Gestisci accettazioni, diagnosi, riparazioni, ricambi e manodopera. Integrazione diretta con Model Assistance (2000+ clienti help desk) per ticket assistenza e gestione garanzie convenzionali ed estese. Notifiche SMS automatiche ai clienti.',
            mainBenefits: [
                'Tracking completo stato riparazioni real-time',
                'Clienti sempre informati con notifiche automatiche',
                'Integrazione Model Assistance per 2000+ utenti',
                'Report redditività laboratorio per ricambi e assistenza'
            ],
            stats: [
                { label: 'Clienti Model Assistance', value: '2000+', description: 'help desk integrato con ticket' },
                { label: 'Tempo medio riparazione', value: '-40%', description: 'con tracking ottimizzato' }
            ]
        },
        features: [
            { title: 'Accettazione rapida', description: 'Registra diagnosi iniziale e crea ticket riparazione in pochi secondi', icon: '📝' },
            { title: 'Stati riparazione', description: 'Ricevuto, diagnosi, riparato, pronto: visibilità totale del processo', icon: '🔄' },
            { title: 'Gestione ricambi', description: 'Scarico automatico ricambi da magazzino con tracking costi', icon: '⚙️' },
            { title: 'Preventivi cliente', description: 'Genera preventivi riparazione con manodopera e ricambi', icon: '💰' },
            { title: 'Model Assistance', description: 'Integrazione con piattaforma help desk per 2000+ clienti', icon: '🎧' },
            { title: 'Garanzie integrate', description: 'Gestione riparazioni in garanzia convenzionale ed estesa', icon: '🛡️' },
            { title: 'Alert SLA', description: 'Notifiche automatiche se i tempi di riparazione superano la soglia', icon: '⏰' },
            { title: 'SMS notifiche', description: 'Avvisa automaticamente i clienti quando la riparazione è completata', icon: '📱' }
        ],
        benefits: [
            { title: 'Clienti informati', metric: '95% soddisfazione', description: 'Le notifiche automatiche tengono i clienti aggiornati, riducendo chiamate e aumentando la soddisfazione.' },
            { title: 'Laboratorio efficiente', metric: '-40% tempi', description: 'Il tracking ottimizzato riduce i tempi medi di riparazione del 40%.' },
            { title: 'Revenue assistenza', metric: '+25% margine', description: 'Gestione professionale aumenta revenue da ricambi e manodopera del 25%.' }
        ],
        useCase: {
            title: 'Caso cliente: Centro assistenza con 150 riparazioni/mese',
            customer: 'Rivenditore multi-brand elettrodomestici',
            challenge: 'Il centro assistenza gestiva riparazioni su fogli Excel. Clienti chiamavano continuamente per sapere lo stato, tecnici perdevano tempo in attività amministrative invece che riparare.',
            solution: 'Implementato modulo Riparazioni con integrazione Model Assistance e SMS automatici. Ogni riparazione ha un tracking completo con stati, ricambi usati e tempi intervento. I clienti ricevono SMS quando la riparazione è pronta.',
            results: [
                'Chiamate clienti ridotte del 70% grazie alle notifiche automatiche',
                'Tempi riparazione ridotti del 40% con processi ottimizzati',
                'Revenue laboratorio +25% per gestione professionale',
                '2000+ ticket assistenza gestiti tramite Model Assistance'
            ]
        },
        integrations: [
            { name: 'Garanzie', slug: 'garanzie' },
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Comunicazioni', slug: 'comunicazioni' },
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' }
        ],
        faq: [
            {
                question: 'Come funziona l\'integrazione con Model Assistance?',
                answer: 'Model Assistance è una piattaforma help desk usata da 2000+ clienti. L\'integrazione consente di creare ticket riparazione direttamente da Daisy, sincronizzare stati e gestire comunicazioni centralizzate.'
            },
            {
                question: 'I clienti ricevono notifiche automatiche?',
                answer: 'Sì, puoi configurare SMS automatici per avvisare i clienti quando la riparazione è completata, quando è necessaria autorizzazione per costi extra, o per altri eventi del processo.'
            },
            {
                question: 'Posso gestire garanzie convenzionali ed estese?',
                answer: 'Sì, il modulo si integra con il registro Garanzie per verificare automaticamente se un prodotto è coperto da garanzia convenzionale o estesa al momento dell\'accettazione.'
            },
            {
                question: 'Come gestisco i ricambi usati nelle riparazioni?',
                answer: 'Ogni riparazione può avere una lista di ricambi. Il sistema scarica automaticamente i ricambi dal magazzino e ne traccia i costi per calcolare la redditività del laboratorio.'
            }
        ]
    },

    'promozioni': {
        slug: 'promozioni',
        name: 'Promozioni',
        tagline: 'Campagne promozionali multi-canale con sconti, bundle e prezzi barrati',
        category: 'Crescita e Sviluppo',
        categoryColor: 'violet',
        icon: '🎯',
        tier: 1,
        overview: {
            intro: 'Il modulo Promozioni è il motore delle tue campagne commerciali. Crea promozioni articolo, categoria o brand con sconti percentuali, prezzi fissi, bundle (3x2, seconda merce -50%), prezzi barrati automatici. Sincronizzazione multi-canale: negozio, e-commerce, cartelli Fastlabel, volantini. Tracking ROI per ogni campagna.',
            mainBenefits: [
                'Campagne sincronizzate automaticamente su tutti i canali',
                'Prezzi promozionali applicati in tempo reale',
                'Bundle e offerte complesse (3x2, -50% su secondo)',
                'Report performance e ROI per ogni campagna'
            ],
            stats: [
                { label: 'Canali sincronizzati', value: '4+', description: 'negozio, web, cartelli, volantini' },
                { label: 'Incremento vendite', value: '+45%', description: 'durante campagne promozionali' }
            ]
        },
        features: [
            { title: 'Campagne periodo', description: 'Definisci promozioni con data inizio/fine, attivazione e disattivazione automatica', icon: '📅' },
            { title: 'Sconti articolo/categoria', description: 'Applica sconti a singoli articoli, categorie o brand completi', icon: '💸' },
            { title: 'Bundle e offerte', description: 'Crea offerte complesse: 3x2, seconda merce -50%, bundle prodotti', icon: '🎁' },
            { title: 'Prezzi barrati', description: 'Prezzi originali barrati automaticamente su cartelli ed e-commerce', icon: '🏷️' },
            { title: 'Gestione volantini', description: 'Cataloghi promozionali con articoli evidenziati e prezzi speciali', icon: '📰' },
            { title: 'Promozioni fidelity', description: 'Sconti esclusivi per clienti con carta fedeltà o livelli premium', icon: '⭐' },
            { title: 'Coupon e codici', description: 'Genera codici sconto usa-e-getta o multi-uso per campagne mirate', icon: '🎫' },
            { title: 'Report ROI', description: 'Analisi vendite pre/durante/post campagna con calcolo ritorno investimento', icon: '📊' }
        ],
        benefits: [
            { title: 'Sincronizzazione multi-canale', metric: '100% coerenza', description: 'Prezzi promozionali identici su negozio, web, cartelli e volantini. Zero discordanze, zero contestazioni.' },
            { title: 'Stimolo vendite mirato', metric: '+45% vendite', description: 'Le campagne promozionali aumentano le vendite del 45% sui prodotti target durante il periodo attivo.' },
            { title: 'ROI tracciabile', description: 'Ogni campagna ha metriche precise: vendite incrementali, margine, costo campagna. Sai esattamente cosa funziona.' }
        ],
        useCase: {
            title: 'Caso cliente: Campagna Black Friday multi-canale',
            customer: 'Catena 8 negozi elettrodomestici + e-commerce',
            challenge: 'Durante il Black Friday, gestire manualmente sconti su 500+ articoli tra negozi ed e-commerce causava errori, ritardi e discordanze di prezzo. Clienti confusi tra prezzo online e negozio.',
            solution: 'Implementato modulo Promozioni con campagna Black Friday centralizzata. 500 articoli in promo con prezzi barrati sincronizzati automaticamente su tutti i canali. Cartelli Fastlabel stampati in automatico, e-commerce aggiornato in real-time.',
            results: [
                'Vendite Black Friday +62% rispetto anno precedente',
                'Zero discordanze prezzo tra canali',
                'Tempo setup campagna ridotto da 3 giorni a 2 ore',
                'ROI campagna tracciato: margine netto +38%'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Fastlabel', slug: 'fastlabel' },
            { name: 'Statistiche & BI', slug: 'statistiche-bi' }
        ],
        faq: [
            {
                question: 'Posso creare offerte 3x2 o "seconda merce a metà prezzo"?',
                answer: 'Sì, il sistema supporta bundle complessi: 3x2, 2x1, seconda merce scontata, bundle prodotti. Puoi anche combinare più regole (es. sconto 10% + omaggio).'
            },
            {
                question: 'Come vengono sincronizzati i prezzi su tutti i canali?',
                answer: 'Quando attivi una campagna, il sistema aggiorna automaticamente i prezzi su vendite, e-commerce, cartelli Fastlabel. La sincronizzazione avviene in tempo reale (web) o al prossimo aggiornamento (cartelli).'
            },
            {
                question: 'Posso limitare promozioni a clienti con fidelity card?',
                answer: 'Sì, puoi creare promozioni esclusive per clienti con carta fedeltà o per livelli specifici (es. solo Gold). Ottimo per fidelizzare i tuoi clienti migliori.'
            },
            {
                question: 'Come traccio il ROI di una campagna promozionale?',
                answer: 'Il sistema genera report con vendite incrementali (rispetto a periodo precedente), margine generato, costi campagna (sconti applicati), ROI netto. Puoi confrontare più campagne per capire cosa funziona meglio.'
            }
        ]
    },

    'raee': {
        slug: 'raee',
        name: 'RAEE',
        tagline: 'Gestione contributi ambientali con tracciabilità e reportistica CDC',
        category: 'Compliance e Amministrazione',
        categoryColor: 'indigo',
        icon: '♻️',
        tier: 1,
        overview: {
            intro: 'Il modulo RAEE garantisce la compliance normativa sui rifiuti elettronici (D.Lgs 49/2014). Applicazione automatica contributi RAEE a vendita, registro ritiro da clienti, tracking smaltimento presso CDC (Centri Di Coordinamento), reportistica obbligatoria. Gestione multi-CDC: Ecodom, Remedia, Ecolight, etc.',
            mainBenefits: [
                'Compliance normativa automatica D.Lgs 49/2014',
                'Zero sanzioni per mancate dichiarazioni',
                'Tracciabilità completa ritiri e smaltimenti',
                'Riduzione oneri amministrativi del 70%'
            ],
            stats: [
                { label: 'CDC gestiti', value: '10+', description: 'Ecodom, Remedia, Ecolight...' },
                { label: 'Sanzioni evitate', value: '0', description: 'compliance automatica 100%' }
            ]
        },
        features: [
            { title: 'Contributi automatici', description: 'Applica contributi RAEE alla vendita in base alla categoria prodotto', icon: '💰' },
            { title: 'Registro ritiri', description: 'Registra ritiro RAEE dai clienti con peso, tipologia e data', icon: '📋' },
            { title: 'Tracking CDC', description: 'Traccia smaltimento presso Centri Di Coordinamento autorizzati', icon: '🚛' },
            { title: 'Multi-CDC', description: 'Gestisci comunicazioni con Ecodom, Remedia, Ecolight e altri consorzi', icon: '🏢' },
            { title: 'Alert scadenze', description: 'Notifiche automatiche per scadenze comunicazioni obbligatorie', icon: '⏰' },
            { title: 'Calcolo per categoria', description: 'Contributi differenziati per R1, R2, R3, R4, R5 secondo normativa', icon: '📊' },
            { title: 'Reportistica obbligatoria', description: 'Export dati per dichiarazioni periodiche ai CDC e autorità', icon: '📄' },
            { title: 'Storico completo', description: 'Archivio storico ritiri e smaltimenti per audit e verifiche ispettive', icon: '🗄️' }
        ],
        benefits: [
            { title: 'Compliance garantita', metric: '100% normativa', description: 'Il sistema applica automaticamente la normativa vigente. Nessun rischio di errori o dimenticanze che causano sanzioni.' },
            { title: 'Tempo amministrativo', metric: '-70% ore', description: 'Automatizzazione riduce il tempo dedicato a registrazioni manuali e reportistica del 70%.' },
            { title: 'Tracciabilità audit-ready', description: 'Storico completo di ritiri e smaltimenti sempre disponibile per ispezioni e audit dei consorzi.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena 12 negozi elettrodomestici',
            customer: 'Rivenditore specializzato grandi elettrodomestici',
            challenge: 'Gestire manualmente i contributi RAEE per 12 punti vendita causava errori di applicazione, ritardi nelle comunicazioni ai CDC e rischio sanzioni. Il commercialista spendeva 2 giorni/mese per reportistica RAEE.',
            solution: 'Implementato modulo RAEE con applicazione automatica contributi a vendita e registro centralizzato ritiri. Export automatico dati per dichiarazioni CDC trimestrali. Alert 15 giorni prima delle scadenze.',
            results: [
                'Zero sanzioni per mancate dichiarazioni (prima 2-3 all\'anno)',
                'Tempo amministrativo ridotto da 16 a 5 ore/mese',
                'Tracciabilità completa per audit CDC',
                'Contributi RAEE applicati correttamente su 100% vendite'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
            { name: 'Contabilità', slug: 'contabilita' }
        ],
        faq: [
            {
                question: 'Come vengono applicati i contributi RAEE alla vendita?',
                answer: 'Il sistema classifica automaticamente ogni articolo nella categoria RAEE corretta (R1-R5) e applica il contributo ambientale vigente alla vendita. Il contributo appare come voce separata in fattura.'
            },
            {
                question: 'Devo registrare manualmente ogni ritiro RAEE dal cliente?',
                answer: 'Sì, ma è molto rapido. Al momento della vendita o consegna, registri il ritiro RAEE (tipologia e peso stimato). Il sistema tiene traccia di tutto per le comunicazioni ai CDC.'
            },
            {
                question: 'Quali CDC sono supportati?',
                answer: 'Il modulo gestisce tutti i principali consorzi: Ecodom, Remedia, Ecolight, Ecoped, ERP, Raee-point. Puoi configurare più CDC se lavori con consorzi diversi per categorie diverse.'
            },
            {
                question: 'Come viene generata la reportistica obbligatoria?',
                answer: 'Il sistema prepara automaticamente i dati aggregati per le dichiarazioni trimestrali ai CDC. Puoi esportare file nel formato richiesto da ogni consorzio o generare report PDF per il commercialista.'
            }
        ]
    },

    'liste-regalo': {
        slug: 'liste-regalo',
        name: 'Liste Regalo',
        tagline: 'Liste nozze e nascita con portale web per invitati e tracking acquisti',
        category: 'Crescita e Sviluppo',
        categoryColor: 'violet',
        icon: '🎁',
        tier: 1,
        overview: {
            intro: 'Il modulo Liste Regalo trasforma ogni evento in un\'opportunità di revenue ricorrente. Gestisci liste nozze, nascita, compleanno con portale web pubblico per invitati. Gli sposi selezionano prodotti, gli invitati acquistano con contributi parziali o totali. Tracking real-time articoli acquistati/rimanenti, notifiche automatiche, integrazione e-commerce per acquisti online.',
            mainBenefits: [
                'Fidelizzazione clienti per eventi importanti',
                'Revenue ricorrente da liste con margini elevati',
                'Esperienza digitale moderna per invitati',
                'Gestione centralizzata multi-negozio'
            ],
            stats: [
                { label: 'Scontrino medio liste', value: '3.5x', description: 'superiore rispetto vendite normali' },
                { label: 'Tasso conversione liste', value: '85%', description: 'degli invitati effettua acquisto' }
            ]
        },
        features: [
            { title: 'Creazione liste', description: 'Crea liste online o in negozio con selezione prodotti e quantità', icon: '📝' },
            { title: 'Portale invitati', description: 'Portale web pubblico dove gli invitati visualizzano e acquistano regali', icon: '🌐' },
            { title: 'Contributi parziali', description: 'Gli invitati possono contribuire parzialmente per regali costosi', icon: '💰' },
            { title: 'Tracking real-time', description: 'Sposi vedono in tempo reale quali articoli sono stati acquistati', icon: '📊' },
            { title: 'Notifiche automatiche', description: 'Avvisi sposi quando un invitato acquista un regalo dalla lista', icon: '🔔' },
            { title: 'Ritiro regalo', description: 'Sistema codice lista per ritiro regali in negozio senza scontrino', icon: '🎁' },
            { title: 'Integrazione e-commerce', description: 'Invitati possono acquistare regali online con consegna diretta', icon: '🛒' },
            { title: 'Report liste', description: 'Statistiche contributi, articoli più popolari, revenue per evento', icon: '📈' }
        ],
        benefits: [
            { title: 'Revenue elevata', metric: '3.5x scontrino', description: 'Lo scontrino medio per acquisti liste è 3.5 volte superiore rispetto alle vendite normali. Margini elevati su prodotti regalo.' },
            { title: 'Fidelizzazione eventi', metric: '85% conversione', description: 'L\'85% degli invitati che visualizza una lista effettua un acquisto. Il portale web aumenta il tasso di conversione del 40% rispetto alle liste tradizionali.' },
            { title: 'Clienti lifetime', description: 'Una coppia che crea la lista nozze da te torna per lista nascita, compleanni, anniversari. Fidelizzazione per anni.' }
        ],
        useCase: {
            title: 'Caso cliente: Negozio specializzato casalinghi',
            customer: 'Rivenditore casalinghi e piccoli elettrodomestici',
            challenge: 'Gestiva liste nozze su fogli carta. Gli invitati dovevano venire in negozio per vedere la lista, molti rinunciavano per distanza. Sposi non sapevano cosa era stato acquistato fino al giorno del ritiro. Revenue liste in calo.',
            solution: 'Implementato modulo Liste Regalo con portale web pubblico. Sposi creano la lista online o in negozio, invitati accedono al portale da casa, acquistano online o prenotano per ritiro. Notifiche real-time agli sposi.',
            results: [
                'Revenue liste +120% in un anno',
                'Tasso conversione invitati da 45% a 85%',
                'Scontrino medio liste: €285 (prima €140)',
                '60% invitati acquista online, 40% ritira in negozio'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Comunicazioni', slug: 'comunicazioni' },
            { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' }
        ],
        faq: [
            {
                question: 'Gli invitati possono acquistare regali online?',
                answer: 'Sì, il portale liste è integrato con l\'e-commerce. Gli invitati possono acquistare online con consegna diretta agli sposi o ritiro in negozio. Pagamento sicuro con carta di credito.'
            },
            {
                question: 'Come funzionano i contributi parziali?',
                answer: 'Per articoli costosi (es. lavatrice €600), più invitati possono contribuire parzialmente. Il primo mette €100, il secondo €150, etc. Quando si raggiunge il 100%, l\'articolo viene marcato come acquistato.'
            },
            {
                question: 'Gli sposi vedono chi ha comprato cosa?',
                answer: 'Dipende dalla configurazione. Puoi mostrare solo "3 invitati hanno contribuito per la lavatrice" oppure "Mario Rossi ha acquistato il set pentole". Gli sposi scelgono il livello di privacy.'
            },
            {
                question: 'Posso gestire liste per altri eventi oltre nozze?',
                answer: 'Assolutamente sì! Il sistema supporta liste nozze, nascita, compleanni, anniversari, comunioni. Ogni tipologia può avere template e regole diverse.'
            }
        ]
    },

    'statistiche-bi': {
        slug: 'statistiche-bi',
        name: 'Statistiche & BI',
        tagline: 'Dashboard analytics e report per decisioni data-driven',
        category: 'Intelligence e Ottimizzazione',
        categoryColor: 'blue',
        icon: '📊',
        tier: 1,
        overview: {
            intro: 'Il modulo Statistiche & BI è il centro di intelligence del tuo business. Dashboard real-time con KPI vendite, margini, giacenze, performance. Report avanzati per articolo, cliente, operatore, periodo. Analisi ABC, rotazione stock, trend vendite, forecast. Export per analisi esterne, grafici interattivi, alert automatici su metriche critiche.',
            mainBenefits: [
                'Visibilità KPI real-time per decisioni rapide',
                'Report avanzati con drill-down su ogni dimensione',
                'Analisi predittive con forecast vendite',
                'Export dati per BI esterni (Power BI, Excel)'
            ],
            stats: [
                { label: 'Dashboard configurabili', value: '20+', description: 'per ruolo e reparto' },
                { label: 'Metriche tracciate', value: '100+', description: 'KPI vendite, margini, stock' }
            ]
        },
        features: [
            { title: 'Dashboard real-time', description: 'KPI principali aggiornati in tempo reale: vendite, margini, giacenze', icon: '📈' },
            { title: 'Report vendite', description: 'Analisi vendite per articolo, cliente, operatore, negozio, periodo', icon: '📊' },
            { title: 'Analisi ABC', description: 'Classificazione articoli per valore vendite e margine contributo', icon: '🎯' },
            { title: 'Rotazione stock', description: 'Indici rotazione magazzino, giorni giacenza, articoli a lento movimento', icon: '🔄' },
            { title: 'Trend e forecast', description: 'Analisi trend storici e previsioni vendite con algoritmi predittivi', icon: '📉' },
            { title: 'Performance operatori', description: 'Classifica venditori per fatturato, margine, numero transazioni', icon: '👥' },
            { title: 'Alert automatici', description: 'Notifiche quando KPI critici superano soglie (es. margine <15%)', icon: '🔔' },
            { title: 'Export flessibile', description: 'Export dati in Excel, CSV, PDF per analisi esterne o Power BI', icon: '📤' }
        ],
        benefits: [
            { title: 'Decisioni data-driven', metric: '3x velocità', description: 'Dashboard real-time consente di prendere decisioni 3 volte più velocemente rispetto a report manuali settimanali.' },
            { title: 'Margini ottimizzati', metric: '+12% margine', description: 'L\'analisi ABC aiuta a focalizzarsi sui prodotti ad alto margine, aumentando il margine medio del 12%.' },
            { title: 'Stock ottimizzato', metric: '-25% capitale', description: 'L\'analisi rotazione riduce il capitale immobilizzato in stock a lento movimento del 25%.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena 6 negozi elettronica',
            customer: 'Rivenditore multi-brand elettronica di consumo',
            challenge: 'Il management riceveva report vendite settimanali su Excel. Nessuna visibilità real-time, analisi limitate, impossibile capire quali prodotti generavano margine. Decisioni su "sensazione" più che su dati.',
            solution: 'Implementato modulo Statistiche & BI con dashboard personalizzate per CEO, direttori negozi, buyer. Dashboard vendite real-time, analisi ABC prodotti, report performance per operatore. Alert automatici su margini sotto soglia.',
            results: [
                'Visibilità KPI real-time vs. report settimanali a postumi',
                'Margine medio aumentato del 12% focalizzandosi su prodotti ABC',
                'Stock ottimizzato: -25% capitale immobilizzato',
                'Decisioni buyer basate su dati oggettivi, non sensazioni'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Acquisti & EDI', slug: 'acquisti-edi' },
            { name: 'Promozioni', slug: 'promozioni' }
        ],
        faq: [
            {
                question: 'Posso creare dashboard personalizzate per ruolo?',
                answer: 'Sì, puoi configurare dashboard diverse per CEO (KPI generali), direttori negozio (performance punto vendita), buyer (analisi acquisti), venditori (obiettivi personali). Ogni utente vede solo i dati rilevanti.'
            },
            {
                question: 'Come funziona l\'analisi ABC?',
                answer: 'L\'analisi ABC classifica gli articoli in base al principio di Pareto: classe A (20% articoli, 80% vendite), B (30% articoli, 15% vendite), C (50% articoli, 5% vendite). Ti aiuta a focalizzarti sui prodotti che contano davvero.'
            },
            {
                question: 'Posso esportare dati per analisi esterne in Power BI?',
                answer: 'Sì, puoi esportare dati in Excel, CSV o connetterti via API REST per integrare con Power BI, Tableau o altri strumenti di BI esterni. Export schedulati automatici disponibili.'
            },
            {
                question: 'Gli alert automatici come funzionano?',
                answer: 'Configuri soglie su KPI critici (es. "margine giornaliero <15%", "giacenza prodotto X <10"). Quando la soglia viene superata, ricevi notifica email o SMS. Puoi agire immediatamente invece che scoprirlo a fine mese.'
            }
        ]
    },

    'webservice': {
        slug: 'webservice',
        name: 'Webservice',
        tagline: 'API REST per integrazioni B2B, marketplace e sistemi terzi',
        category: 'Integrazione e Automazione',
        categoryColor: 'pink',
        icon: '🔌',
        tier: 1,
        overview: {
            intro: 'Il modulo Webservice espone l\'intero ecosistema Daisy tramite API REST moderne. Integra sistemi terzi, marketplace, app mobile, portali B2B. Endpoint CRUD per articoli, clienti, ordini, giacenze. Webhook per eventi real-time. Autenticazione OAuth2, documentazione Swagger, rate limiting, SDK client. L\'ecosistema diventa estendibile all\'infinito.',
            mainBenefits: [
                'Integrazioni semplificate con sistemi terzi',
                'Sviluppo app custom facilitato con API moderne',
                'Automazione processi B2B end-to-end',
                'Ecosistema estendibile senza limiti'
            ],
            stats: [
                { label: 'Endpoint API', value: '150+', description: 'per gestire tutte le entità' },
                { label: 'Chiamate API/giorno', value: '100k+', description: 'gestite con rate limiting' }
            ]
        },
        features: [
            { title: 'API REST moderne', description: 'Endpoint RESTful con autenticazione OAuth2 e API Key', icon: '🌐' },
            { title: 'CRUD completo', description: 'Crea, leggi, aggiorna, elimina articoli, clienti, ordini, giacenze', icon: '📝' },
            { title: 'Webhook eventi', description: 'Ricevi notifiche push per eventi: nuovo ordine, giacenza sotto scorta, etc.', icon: '🔔' },
            { title: 'Documentazione Swagger', description: 'Documentazione interattiva OpenAPI per testare endpoint dal browser', icon: '📚' },
            { title: 'Rate limiting', description: 'Throttling automatico per proteggere il sistema da abusi', icon: '⏱️' },
            { title: 'Versioning API', description: 'Gestione versioni API (v1, v2) per retrocompatibilità', icon: '🔢' },
            { title: 'SDK client', description: 'Librerie client PHP, JavaScript, Python per integrazioni rapide', icon: '💻' },
            { title: 'Log audit', description: 'Tracciamento completo chiamate API per debug e audit sicurezza', icon: '🔍' }
        ],
        benefits: [
            { title: 'Integrazioni semplificate', metric: '-80% tempo dev', description: 'Le API REST riducono il tempo di sviluppo integrazioni dell\'80% rispetto a soluzioni custom.' },
            { title: 'Ecosistema estendibile', description: 'Sviluppa app mobile, integra marketplace, connetti CRM esterni. L\'ecosistema diventa estendibile senza limiti tecnici.' },
            { title: 'Automazione B2B', metric: '100% processi', description: 'Automatizza completamente ordini B2B da portali clienti con sincronizzazione real-time giacenze e prezzi.' }
        ],
        useCase: {
            title: 'Caso cliente: Integrazione marketplace e portale B2B',
            customer: 'Distributore elettronica con 200 rivenditori B2B',
            challenge: 'I rivenditori chiamavano per conoscere disponibilità articoli e piazzare ordini. Nessuna integrazione con marketplace Amazon/eBay. Gestione manuale ordini causava ritardi ed errori. Impossibile scalare il business.',
            solution: 'Implementato modulo Webservice con API per portale B2B (rivenditori verificano giacenze e inviano ordini) e integrazione marketplace (pubblicazione automatica catalogo, sincronizzazione ordini). Webhook notificano ordini in tempo reale.',
            results: [
                'Portale B2B: 200 rivenditori piazzano ordini autonomamente',
                'Chiamate telefoniche ridotte del 90%',
                'Marketplace: 15k prodotti pubblicati automaticamente',
                'Revenue marketplace +€450k/anno con gestione automatica'
            ]
        },
        integrations: [
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' },
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' }
        ],
        faq: [
            {
                question: 'Quali endpoint API sono disponibili?',
                answer: 'Oltre 150 endpoint per gestire articoli, clienti, fornitori, ordini, giacenze, fatture, movimenti magazzino, prezzi, promozioni. La documentazione Swagger interattiva mostra tutti gli endpoint con esempi di richiesta/risposta.'
            },
            {
                question: 'Come funzionano i webhook per eventi real-time?',
                answer: 'Configuri URL endpoint del tuo sistema e selezioni eventi (es. "nuovo ordine"). Quando l\'evento si verifica, Daisy invia una richiesta POST al tuo endpoint con i dati dell\'evento. Utile per integrazioni real-time.'
            },
            {
                question: 'Le API sono sicure?',
                answer: 'Sì, autenticazione OAuth2 o API Key, HTTPS obbligatorio, rate limiting per prevenire abusi, log audit completo di tutte le chiamate. Puoi anche limitare accesso API per IP o per utente specifico.'
            },
            {
                question: 'Posso sviluppare una app mobile con queste API?',
                answer: 'Assolutamente sì! Le API REST sono perfette per app mobile. Diversi clienti hanno sviluppato app per agenti di vendita, app per clienti B2B, app per inventario magazzino con scanner barcode.'
            }
        ]
    },

    // ==================== TIER 2 - Support Modules ====================

    'contabilita': {
        slug: 'contabilita',
        name: 'Contabilità',
        tagline: 'Contabilità generale con IVA e registrazioni automatiche',
        category: 'Compliance e Amministrazione',
        categoryColor: 'indigo',
        icon: '📒',
        tier: 2,
        overview: {
            intro: 'Il modulo Contabilità gestisce la contabilità generale con registrazioni automatiche da cicli attivo/passivo. Piano dei conti personalizzabile, prima nota partita doppia, liquidazione IVA periodica, scadenzari fornitori/clienti. Export per commercialista in formati standard. Riconciliazione bancaria automatica per zero discordanze.',
            mainBenefits: [
                'Contabilità sempre aggiornata in tempo reale',
                'Zero doppia digitazione tra gestionale e contabilità',
                'Visibilità cash-flow e scadenzari immediata',
                'Export commercialista in formati standard'
            ]
        },
        features: [
            { title: 'Piano dei conti', description: 'Piano dei conti personalizzabile per ogni tipologia di attività', icon: '📋' },
            { title: 'Prima nota', description: 'Registrazioni contabili con partita doppia automatica', icon: '✍️' },
            { title: 'Registrazione automatica', description: 'Fatture attive/passive registrate automaticamente in contabilità', icon: '🤖' },
            { title: 'Liquidazione IVA', description: 'Calcolo automatico liquidazione IVA mensile/trimestrale', icon: '💰' },
            { title: 'Scadenzari', description: 'Gestione scadenze fornitori/clienti con alert pagamenti', icon: '📅' },
            { title: 'Movimenti bancari', description: 'Registrazione movimenti bancari e riconciliazione automatica', icon: '🏦' },
            { title: 'Export commercialista', description: 'Export in formati standard per software commercialista', icon: '📤' },
            { title: 'Report fiscali', description: 'Bilancino, situazione contabile, registri IVA', icon: '📊' }
        ],
        benefits: [
            { title: 'Contabilità real-time', description: 'Ogni fattura emessa o ricevuta viene registrata automaticamente in contabilità. Situazione sempre aggiornata, nessun ritardo.' },
            { title: 'Zero doppia digitazione', metric: '-90% tempo', description: 'Le registrazioni automatiche eliminano la doppia digitazione fatture. Tempo dedicato alla contabilità ridotto del 90%.' },
            { title: 'Cash-flow sotto controllo', description: 'Scadenzari fornitori/clienti sempre aggiornati. Sai esattamente quando devi pagare e quando riceverai pagamenti.' }
        ],
        useCase: {
            title: 'Caso cliente: Rivenditore con commercialista esterno',
            customer: 'Negozio elettrodomestici con 200 fatture/mese',
            challenge: 'Il commercialista riceveva le fatture a fine mese e le registrava manualmente. Contabilità sempre in ritardo, impossibile conoscere la situazione IVA in tempo reale. Doppia digitazione tra gestionale e contabilità.',
            solution: 'Implementato modulo Contabilità con registrazioni automatiche. Ogni fattura emessa/ricevuta viene registrata automaticamente. Export mensile in formato Teamsystem per il commercialista. Liquidazione IVA disponibile in tempo reale.',
            results: [
                'Contabilità aggiornata in tempo reale vs. ritardo 1 mese',
                'Tempo commercialista ridotto da 8 a 2 ore/mese',
                'Zero errori di doppia digitazione',
                'Visibilità cash-flow immediata per decisioni finanziarie'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'Acquisti & EDI', slug: 'acquisti-edi' },
            { name: 'RAEE', slug: 'raee' }
        ],
        faq: [
            {
                question: 'Le fatture vengono registrate automaticamente in contabilità?',
                answer: 'Sì, ogni fattura emessa (ciclo attivo) o ricevuta (ciclo passivo) viene registrata automaticamente con la causale contabile corretta. Zero doppia digitazione.'
            },
            {
                question: 'Posso esportare i dati per il mio commercialista?',
                answer: 'Sì, puoi esportare in formati standard compatibili con i principali software commercialisti (Teamsystem, Zucchetti, Buffetti). Export mensile o trimestrale con un click.'
            },
            {
                question: 'Come funziona la riconciliazione bancaria?',
                answer: 'Importi i movimenti bancari dal conto corrente (file CSV o integrazione API banca) e il sistema li riconcilia automaticamente con pagamenti fatture e movimenti registrati. Evidenzia discordanze per verifica.'
            },
            {
                question: 'Posso calcolare la liquidazione IVA in tempo reale?',
                answer: 'Sì, il sistema calcola in tempo reale IVA a debito, IVA a credito e saldo IVA. Puoi sapere in ogni momento la tua posizione IVA prima della scadenza trimestrale.'
            }
        ]
    },

    'contratti': {
        slug: 'contratti',
        name: 'Contratti',
        tagline: 'Gestione contratti assistenza e abbonamenti con rinnovi automatici',
        category: 'Compliance e Amministrazione',
        categoryColor: 'indigo',
        icon: '📄',
        tier: 2,
        overview: {
            intro: 'Il modulo Contratti gestisce contratti di assistenza, noleggio, abbonamenti con rinnovi automatici e fatturazione ricorrente. Gestisci scadenze, SLA (Service Level Agreement), storico interventi per contratto. Alert automatici per scadenze, fatturazione periodica automatica, report redditività contratti. Revenue ricorrente gestito in modo professionale.',
            mainBenefits: [
                'Revenue ricorrente gestito automaticamente',
                'Zero contratti dimenticati o scaduti',
                'Fatturazione periodica automatica',
                'Visibilità scadenze anticipata con alert'
            ]
        },
        features: [
            { title: 'Creazione contratti', description: 'Crea contratti servizio, manutenzione, noleggio con termini personalizzati', icon: '📝' },
            { title: 'Rinnovi automatici', description: 'Gestione rinnovi automatici con tacito rinnovo o conferma esplicita', icon: '🔄' },
            { title: 'Fatturazione ricorrente', description: 'Fatture periodiche generate automaticamente (mensile, trimestrale, annuale)', icon: '💳' },
            { title: 'Alert scadenze', description: 'Notifiche automatiche 30/15/7 giorni prima della scadenza contratto', icon: '⏰' },
            { title: 'Storico interventi', description: 'Tracciamento interventi e riparazioni associate a ogni contratto', icon: '📋' },
            { title: 'Gestione SLA', description: 'Tempi di intervento garantiti con alert se SLA viene superato', icon: '⚡' },
            { title: 'Report redditività', description: 'Analisi margine contratti, revenue mensile ricorrente (MRR)', icon: '📊' },
            { title: 'Template contratti', description: 'Template personalizzabili per diverse tipologie di contratto', icon: '📄' }
        ],
        benefits: [
            { title: 'Revenue ricorrente', metric: '+€15k/mese', description: 'I contratti generano revenue prevedibile e ricorrente. Cliente medio con 50 contratti attivi genera €15k/mese automaticamente.' },
            { title: 'Zero dimenticanze', description: 'Gli alert automatici garantiscono che nessun contratto in scadenza venga dimenticato. Fatturazione ricorrente elimina il rischio di mancati incassi.' },
            { title: 'Clienti fidelizzati', metric: '92% rinnovo', description: 'I contratti aumentano il lifetime value del cliente. Tasso di rinnovo medio del 92% con gestione professionale.' }
        ],
        useCase: {
            title: 'Caso cliente: Centro assistenza con contratti manutenzione',
            customer: 'Rivenditore con servizio assistenza per aziende',
            challenge: 'Gestiva 80 contratti manutenzione annuali su Excel. Spesso dimenticava scadenze, perdeva rinnovi, fatturava in ritardo. Cliente doveva chiamare per sollecitare fattura. Nessuna visibilità sulla revenue ricorrente.',
            solution: 'Implementato modulo Contratti con rinnovi automatici e fatturazione ricorrente. Alert 30 giorni prima della scadenza, fatture generate automaticamente il giorno del rinnovo. Dashboard MRR (Monthly Recurring Revenue) per previsioni.',
            results: [
                'Tasso rinnovo contratti da 65% a 92%',
                'Zero fatture dimenticate o in ritardo',
                'MRR prevedibile: €12k/mese da contratti',
                'Tempo gestione contratti ridotto da 10 a 2 ore/mese'
            ]
        },
        integrations: [
            { name: 'Riparazioni', slug: 'riparazioni' },
            { name: 'Contabilità', slug: 'contabilita' },
            { name: 'Comunicazioni', slug: 'comunicazioni' }
        ],
        faq: [
            {
                question: 'Come funzionano i rinnovi automatici?',
                answer: 'Puoi configurare contratti con tacito rinnovo (si rinnova automaticamente se il cliente non disdice) o rinnovo esplicito (cliente deve confermare). Il sistema invia alert e genera fattura al rinnovo.'
            },
            {
                question: 'La fatturazione ricorrente è completamente automatica?',
                answer: 'Sì, configuri periodicità (mensile, trimestrale, annuale) e il sistema genera le fatture automaticamente alla scadenza. Puoi anche inviare le fatture via email automaticamente.'
            },
            {
                question: 'Posso tracciare interventi associati a un contratto?',
                answer: 'Sì, ogni contratto può avere interventi collegati (dal modulo Riparazioni). Vedi lo storico completo degli interventi, verifica se stai rispettando i tempi SLA, calcola la redditività del contratto.'
            },
            {
                question: 'Come gestisco contratti con SLA garantiti?',
                answer: 'Definisci il tempo massimo di intervento (es. "risoluzione entro 48h"). Il sistema monitora i ticket e invia alert se stai per superare la soglia SLA. Report SLA mensili mostrano performance.'
            }
        ]
    },

    'comunicazioni': {
        slug: 'comunicazioni',
        name: 'Comunicazioni',
        tagline: 'Sistema notifiche multi-canale verso clienti e staff',
        category: 'Integrazione e Automazione',
        categoryColor: 'pink',
        icon: '📧',
        tier: 2,
        overview: {
            intro: 'Il modulo Comunicazioni è il sistema nervoso delle notifiche Daisy. Invia email transazionali, SMS, messaggistica interna tra punti vendita. Alert automatici per giacenze, ordini urgenti, scadenze. Template personalizzabili per ogni tipo di comunicazione. Tracciamento invii e statistiche aperture per ottimizzare le campagne.',
            mainBenefits: [
                'Automazione comunicazioni clienti e staff',
                'Riduzione chiamate per info ordini/stato',
                'Alert proattivi per operatori',
                'Miglioramento customer experience'
            ]
        },
        features: [
            { title: 'Email transazionali', description: 'Conferme ordini, fatture, promemoria, benvenuto clienti', icon: '📧' },
            { title: 'SMS notifiche', description: 'Notifiche rapide per arrivo merce, promozioni, scadenze', icon: '📱' },
            { title: 'Messaggistica interna', description: 'Chat tra punti vendita per coordinamento operativo', icon: '💬' },
            { title: 'Alert automatici', description: 'Notifiche giacenze sotto scorta, ordini urgenti, anomalie', icon: '🔔' },
            { title: 'Template personalizzabili', description: 'Editor visuale per creare template email/SMS branded', icon: '🎨' },
            { title: 'Tracciamento invii', description: 'Log completo comunicazioni inviate con stato consegna', icon: '📊' },
            { title: 'Statistiche aperture', description: 'Tasso apertura email, click link, conversioni da campagne', icon: '📈' },
            { title: 'Segmentazione clienti', description: 'Invia comunicazioni mirate per segmento/categoria cliente', icon: '🎯' }
        ],
        benefits: [
            { title: 'Clienti informati', metric: '-70% chiamate', description: 'Le notifiche automatiche riducono le chiamate clienti del 70%. "Dov\'è il mio ordine?" diventa un ricordo del passato.' },
            { title: 'Operatività efficiente', description: 'Gli alert interni consentono coordinamento real-time tra punti vendita. Trasferimenti merce, ordini urgenti gestiti in tempo reale.' },
            { title: 'Customer experience', metric: '+40% NPS', description: 'Comunicazioni proattive aumentano il Net Promoter Score del 40%. I clienti si sentono seguiti e informati.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena 5 negozi con trasferimenti merce',
            customer: 'Rivenditore informatica multi-sede',
            challenge: 'Clienti chiamavano continuamente per sapere se un ordine era arrivato. I negozi non comunicavano tra loro, causando ritardi nei trasferimenti merce. Nessuna notifica automatica, tutto gestito manualmente.',
            solution: 'Implementato modulo Comunicazioni con email automatiche per conferma ordine, spedizione, arrivo. SMS quando merce è pronta per ritiro. Messaggistica interna per coordinare trasferimenti tra sedi in tempo reale.',
            results: [
                'Chiamate clienti ridotte del 70%',
                'Tasso ritiro ordini in tempo: da 60% a 95%',
                'Tempo coordinamento trasferimenti: da ore a minuti',
                'NPS (soddisfazione clienti) aumentato del 42%'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Liste Regalo', slug: 'liste-regalo' },
            { name: 'Riparazioni', slug: 'riparazioni' }
        ],
        faq: [
            {
                question: 'Quali comunicazioni possono essere automatizzate?',
                answer: 'Email conferma ordine, spedizione, arrivo merce, fatture inviate, promemoria pagamenti, benvenuto nuovi clienti, SMS per promozioni o ordini pronti, alert interni per giacenze sotto scorta o ordini urgenti.'
            },
            {
                question: 'Posso personalizzare i template email con il mio brand?',
                answer: 'Sì, l\'editor visuale consente di creare template email personalizzati con logo, colori aziendali, footer. Puoi avere template diversi per tipologia comunicazione (ordini, promozioni, assistenza).'
            },
            {
                question: 'Come funziona la messaggistica interna tra negozi?',
                answer: 'Ogni punto vendita ha una chat interna. Puoi inviare messaggi a un negozio specifico o broadcast a tutti. Utile per "Chi ha disponibile articolo X?" o "Trasferimento urgente di merce".'
            },
            {
                question: 'Posso tracciare se i clienti aprono le email?',
                answer: 'Sì, il sistema traccia consegna, apertura, click su link nelle email. Le statistiche ti aiutano a ottimizzare oggetto, contenuto e timing delle comunicazioni per massimizzare engagement.'
            }
        ]
    },

    'garanzie': {
        slug: 'garanzie',
        name: 'Garanzie',
        tagline: 'Registro garanzie con alert scadenza e gestione estensioni',
        category: 'Compliance e Amministrazione',
        categoryColor: 'indigo',
        icon: '🛡️',
        tier: 2,
        overview: {
            intro: 'Il modulo Garanzie è il registro completo di tutte le garanzie prodotti venduti. Registrazione automatica garanzia a vendita, certificati, alert scadenze, vendita estensioni garanzia, gestione resi in garanzia, storico interventi per seriale. Report statistiche difettosità per brand/modello per ottimizzare assortimento.',
            mainBenefits: [
                'Nessuna garanzia persa o dimenticata',
                'Up-sell estensioni garanzia per revenue extra',
                'Tracciabilità completa per audit e contenziosi',
                'Riduzione contenziosi con storico completo'
            ]
        },
        features: [
            { title: 'Registrazione automatica', description: 'Garanzia registrata automaticamente alla vendita con durata standard', icon: '📝' },
            { title: 'Certificati garanzia', description: 'Genera e stampa certificati garanzia personalizzati per clienti', icon: '📜' },
            { title: 'Alert scadenze', description: 'Notifiche automatiche quando garanzie convenzionali stanno per scadere', icon: '⏰' },
            { title: 'Vendita estensioni', description: 'Sistema up-sell per proporre estensioni garanzia a clienti', icon: '💰' },
            { title: 'Gestione resi', description: 'Traccia resi in garanzia con motivo, esito, intervento effettuato', icon: '🔄' },
            { title: 'Storico per seriale', description: 'Cronologia completa interventi garanzia per numero seriale prodotto', icon: '🔍' },
            { title: 'Report difettosità', description: 'Statistiche difetti per brand/modello per ottimizzare assortimento', icon: '📊' },
            { title: 'Integrazione riparazioni', description: 'Collega interventi riparazione a garanzie per tracciabilità completa', icon: '🔗' }
        ],
        benefits: [
            { title: 'Zero garanzie perse', metric: '100% tracciabilità', description: 'Ogni prodotto venduto ha la sua garanzia registrata. Impossibile perdere o dimenticare garanzie, anche a distanza di anni.' },
            { title: 'Revenue estensioni', metric: '+8% per vendita', description: 'La proposta sistematica di estensioni garanzia genera revenue extra pari all\'8% del valore vendita.' },
            { title: 'Contenziosi ridotti', metric: '-60% dispute', description: 'Lo storico completo riduce i contenziosi del 60%. In caso di dispute, hai tutte le prove necessarie.' }
        ],
        useCase: {
            title: 'Caso cliente: Rivenditore elettrodomestici con 300 vendite/mese',
            customer: 'Negozio specializzato grandi elettrodomestici',
            challenge: 'Clienti tornavano dopo mesi per un problema, ma il negozio non trovava traccia della vendita o della garanzia. Nessun up-sell di estensioni garanzia. Contenziosi frequenti per assenza di documentazione.',
            solution: 'Implementato modulo Garanzie con registrazione automatica a vendita. Alert 15 giorni prima della scadenza garanzia convenzionale per proporre estensione. Storico completo interventi per ogni seriale. Report difettosità per brand.',
            results: [
                'Zero garanzie perse: 100% tracciabilità da anno 2015',
                'Up-sell estensioni: +€24k/anno di revenue extra',
                'Contenziosi ridotti del 65% con documentazione completa',
                'Ottimizzazione assortimento: rimossi 2 brand problematici'
            ]
        },
        integrations: [
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'Riparazioni', slug: 'riparazioni' },
            { name: 'Banca Dati Eldomcat', slug: 'banca-dati-eldomcat' }
        ],
        faq: [
            {
                question: 'Le garanzie vengono registrate automaticamente?',
                answer: 'Sì, alla vendita di un prodotto il sistema registra automaticamente la garanzia con durata standard (es. 24 mesi per elettrodomestici). Puoi personalizzare durate per categoria prodotto.'
            },
            {
                question: 'Come funziona la vendita delle estensioni garanzia?',
                answer: 'Al momento della vendita, il sistema può proporre automaticamente estensioni garanzia (es. +2 anni). L\'estensione viene registrata e il certificato aggiunto alla garanzia base.'
            },
            {
                question: 'Posso tracciare tutti gli interventi su un prodotto?',
                answer: 'Sì, ogni prodotto con numero seriale ha uno storico completo: vendita, interventi in garanzia, riparazioni, sostituzioni. Utile per contenziosi o per analizzare affidabilità prodotti.'
            },
            {
                question: 'I report di difettosità come aiutano il business?',
                answer: 'Vedendo quali brand/modelli hanno più interventi in garanzia, puoi ottimizzare l\'assortimento. Rimuovi prodotti problematici, premi brand affidabili. Alcuni clienti hanno ridotto i resi del 40%.'
            }
        ]
    },

    'navigator': {
        slug: 'navigator',
        name: 'Navigator',
        tagline: 'Dashboard personalizzabili e navigazione rapida funzionalità',
        category: 'Eccellenza Operativa',
        categoryColor: 'amber',
        icon: '🧭',
        tier: 2,
        overview: {
            intro: 'Il modulo Navigator è la tua dashboard home personalizzabile. KPI principali a colpo d\'occhio, widgets configurabili per ruolo, accesso rapido funzioni frequenti, notifiche e alert in-app, grafici real-time. Scorciatoie tastiera per power-user, layout personalizzato. Ogni utente ha il suo Navigator ottimizzato.',
            mainBenefits: [
                'Produttività utenti aumentata con accessi rapidi',
                'Visibilità KPI sempre a portata di mano',
                'Onboarding facilitato per nuovi utenti',
                'UX personalizzata per ogni ruolo aziendale'
            ]
        },
        features: [
            { title: 'Dashboard home', description: 'Pagina iniziale con KPI principali: vendite giorno, margine, giacenze critiche', icon: '🏠' },
            { title: 'Widgets configurabili', description: 'Scegli quali widget mostrare: vendite, ordini, alert, calendario, task', icon: '📊' },
            { title: 'Accesso rapido', description: 'Link veloci alle funzioni più usate: nuova vendita, nuovo ordine, inventario', icon: '⚡' },
            { title: 'Notifiche in-app', description: 'Alert real-time per eventi importanti: nuovo ordine, giacenza sotto scorta', icon: '🔔' },
            { title: 'Grafici real-time', description: 'Trend vendite/margini aggiornati in tempo reale con grafici interattivi', icon: '📈' },
            { title: 'Scorciatoie tastiera', description: 'Comandi rapidi da tastiera per power-user (es. Ctrl+V = nuova vendita)', icon: '⌨️' },
            { title: 'Layout personalizzato', description: 'Ogni utente configura il suo layout: drag&drop widgets, salva preferenze', icon: '🎨' },
            { title: 'Widget calendario', description: 'Calendario ordini in arrivo, scadenze, task da completare', icon: '📅' }
        ],
        benefits: [
            { title: 'Produttività aumentata', metric: '+30% efficienza', description: 'Accessi rapidi e scorciatoie tastiera aumentano la produttività degli utenti del 30%. Meno click, più vendite.' },
            { title: 'KPI sempre visibili', description: 'Dashboard home mostra sempre i KPI critici. Nessun bisogno di aprire report per sapere com\'è andato il giorno.' },
            { title: 'Onboarding facilitato', metric: '-50% tempo training', description: 'Nuovi utenti vedono subito cosa è importante per il loro ruolo. Tempo di training ridotto del 50%.' }
        ],
        useCase: {
            title: 'Caso cliente: Catena 4 negozi con 15 operatori',
            customer: 'Rivenditore multi-sede con staff misto',
            challenge: 'Ogni operatore apriva sempre le stesse 3-4 funzioni, ma ci voleva tempo per navigare i menu. Nessuna visibilità immediata su KPI giornalieri. Nuovi operatori perdevano tempo a cercare funzioni.',
            solution: 'Implementato Navigator con layout personalizzati per ruolo: venditori vedono dashboard vendite + accesso rapido a nuova vendita; magazzinieri vedono giacenze + accesso inventario; manager vedono KPI completi. Scorciatoie tastiera per funzioni frequenti.',
            results: [
                'Tempo medio per nuova vendita ridotto da 8 a 3 click',
                'Produttività operatori +28% per accessi rapidi',
                'Onboarding nuovi operatori: da 2 settimane a 5 giorni',
                'Soddisfazione utenti +85% per UX personalizzata'
            ]
        },
        integrations: [
            { name: 'Tutti i moduli', slug: 'vendite-cassa' }
        ],
        faq: [
            {
                question: 'Posso personalizzare i widget mostrati nella dashboard?',
                answer: 'Sì, ogni utente può scegliere quali widget mostrare, riordinarli con drag&drop, ridimensionarli. Le preferenze sono salvate automaticamente.'
            },
            {
                question: 'I layout possono essere diversi per ruolo?',
                answer: 'Assolutamente sì! Puoi configurare layout predefiniti per ruolo (venditore, magazziniere, manager). Ogni utente può poi personalizzare ulteriormente il suo layout.'
            },
            {
                question: 'Le scorciatoie tastiera sono personalizzabili?',
                answer: 'Sì, puoi configurare scorciatoie personalizzate per funzioni frequenti. Es: Ctrl+V = nuova vendita, Ctrl+I = inventario rapido, Ctrl+R = report giornaliero.'
            },
            {
                question: 'Le notifiche in-app come funzionano?',
                answer: 'Quando si verifica un evento importante (nuovo ordine, giacenza sotto scorta, ordine evaso), appare una notifica in-app. Click sulla notifica per aprire direttamente il dettaglio.'
            }
        ]
    },

    'ordini': {
        slug: 'ordini',
        name: 'Ordini',
        tagline: 'Gestione ordini clienti con tracking stato ed evasione parziale',
        category: 'Operazioni Base',
        categoryColor: 'emerald',
        icon: '📋',
        tier: 2,
        overview: {
            intro: 'Il modulo Ordini gestisce l\'intero ciclo ordini clienti B2B e B2C. Inserimento rapido con barcode, gestione ordini da portale B2B, stati ordine (inserito, confermato, evaso, consegnato), evasione parziale con backorder automatico, tracking spedizioni integrato corrieri. Generazione DDT e fatture da ordini, report ordini inevasi o in ritardo.',
            mainBenefits: [
                'Visibilità completa pipeline ordini in tempo reale',
                'Zero ordini dimenticati con tracking automatico',
                'Clienti sempre informati su stato ordine',
                'Riduzione contestazioni e dispute del 70%'
            ]
        },
        features: [
            { title: 'Inserimento rapido', description: 'Crea ordini velocemente con scanner barcode o ricerca articoli', icon: '⚡' },
            { title: 'Ordini B2B', description: 'Gestisci ordini da portale clienti B2B con import automatico', icon: '🏢' },
            { title: 'Stati ordine', description: 'Tracking stati: inserito, confermato, in preparazione, evaso, consegnato', icon: '🔄' },
            { title: 'Evasione parziale', description: 'Evadi ordini parzialmente, sistema crea backorder automatico per merce mancante', icon: '📦' },
            { title: 'Tracking corrieri', description: 'Integrazione corrieri per tracking spedizioni real-time', icon: '🚚' },
            { title: 'Gestione acconti', description: 'Richiedi acconti su ordini, traccia saldo da incassare', icon: '💰' },
            { title: 'Genera DDT/fatture', description: 'Crea DDT e fatture direttamente da ordini con un click', icon: '📄' },
            { title: 'Report inevasi', description: 'Report ordini inevasi, in ritardo, backorder per azione immediata', icon: '⚠️' }
        ],
        benefits: [
            { title: 'Pipeline visibile', metric: '100% controllo', description: 'Vedi in tempo reale tutti gli ordini e il loro stato. Nessun ordine può essere dimenticato o perso.' },
            { title: 'Clienti informati', metric: '-70% chiamate', description: 'I clienti vedono lo stato ordine real-time. Le chiamate "dov\'è il mio ordine?" si riducono del 70%.' },
            { title: 'Evasione ottimizzata', metric: '+40% efficienza', description: 'Evasione parziale e backorder automatici ottimizzano il magazzino. Efficienza picking +40%.' }
        ],
        useCase: {
            title: 'Caso cliente: Distributore B2B con 150 ordini/giorno',
            customer: 'Distributore elettronica con 200 clienti B2B',
            challenge: 'Ordini gestiti su Excel. Impossibile sapere quali ordini erano evasi, quali in ritardo. Clienti chiamavano continuamente per info. Nessuna evasione parziale, si aspettava merce completa causando ritardi.',
            solution: 'Implementato modulo Ordini con stati tracking completo. Portale B2B per clienti per inserire ordini e vedere stato. Evasione parziale automatica con backorder. Integrazione corrieri per tracking. Email automatiche a clienti.',
            results: [
                'Chiamate clienti ridotte del 75%',
                'Ordini inevasi sempre visibili: zero ordini dimenticati',
                'Evasione parziale: tempi consegna -35%',
                'Soddisfazione clienti B2B aumentata del 60%'
            ]
        },
        integrations: [
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'E-commerce', slug: 'ecommerce' },
            { name: 'Webservice', slug: 'webservice' }
        ],
        faq: [
            {
                question: 'Come funziona l\'evasione parziale?',
                answer: 'Se evadi un ordine con solo parte della merce disponibile, il sistema crea automaticamente un backorder per gli articoli mancanti. Quando la merce arriva, il backorder diventa evadibile.'
            },
            {
                question: 'I clienti possono vedere lo stato dei loro ordini?',
                answer: 'Sì, se integrato con e-commerce o portale B2B, i clienti vedono real-time lo stato ordine: confermato, in preparazione, spedito con tracking corriere.'
            },
            {
                question: 'Posso generare DDT e fatture da ordini?',
                answer: 'Sì, quando evadi un ordine puoi generare DDT (se spedisci merce) o fattura diretta. Il sistema riporta automaticamente tutti i dati dell\'ordine nei documenti.'
            },
            {
                question: 'Come gestisco gli acconti sugli ordini?',
                answer: 'Puoi richiedere acconti (es. 30%) alla conferma ordine. Il sistema traccia acconto pagato e saldo da incassare a consegna. Report acconti in sospeso sempre disponibile.'
            }
        ]
    },

    'planning': {
        slug: 'planning',
        name: 'Planning',
        tagline: 'Pianificazione ordini fornitori e previsione fabbisogni',
        category: 'Intelligence e Ottimizzazione',
        categoryColor: 'blue',
        icon: '📅',
        tier: 2,
        overview: {
            intro: 'Il modulo Planning è il cervello dell\'approvvigionamento. Analisi rotazione stock ABC, calcolo scorte minime, previsione fabbisogni da venduto storico, generazione automatica proposte ordine fornitori. Simulazione scenari, gestione lead time fornitori, alert articoli sotto scorta, report copertura stock. Ottimizza il capitale circolante riducendo scorte inutili.',
            mainBenefits: [
                'Riduzione capitale immobilizzato in stock',
                'Zero rotture stock su articoli strategici',
                'Ordini fornitori ottimizzati automaticamente',
                'Riduzione obsolescenza merce del 45%'
            ]
        },
        features: [
            { title: 'Analisi ABC', description: 'Classifica articoli per valore: A (20% articoli, 80% vendite), B, C', icon: '📊' },
            { title: 'Scorte minime', description: 'Calcola scorte minime per articolo in base a venduto e lead time fornitore', icon: '📉' },
            { title: 'Previsione fabbisogni', description: 'Algoritmi predittivi per stimare fabbisogni futuri da storico vendite', icon: '🔮' },
            { title: 'Proposte ordine', description: 'Genera automaticamente proposte ordine a fornitori per mantenere scorte ottimali', icon: '📝' },
            { title: 'Simulazione scenari', description: 'Simula impatto di ordini su giacenze e capitale per decisioni informate', icon: '🎮' },
            { title: 'Lead time fornitori', description: 'Gestisce tempi consegna per fornitore per calcolo scorte minime accurate', icon: '⏱️' },
            { title: 'Alert sotto scorta', description: 'Notifiche automatiche quando articoli critici scendono sotto scorta minima', icon: '⚠️' },
            { title: 'Copertura stock', description: 'Report giorni di copertura stock: quanti giorni reggi con giacenza attuale', icon: '📅' }
        ],
        benefits: [
            { title: 'Capitale ottimizzato', metric: '-30% stock', description: 'L\'analisi ABC e le scorte minime riducono il capitale immobilizzato del 30% eliminando stock inutile su articoli C.' },
            { title: 'Zero rotture stock', metric: '98% disponibilità', description: 'Gli alert e le proposte automatiche mantengono disponibilità del 98% su articoli strategici A e B.' },
            { title: 'Obsolescenza ridotta', metric: '-45% write-off', description: 'Scorte ottimizzate riducono l\'obsolescenza del 45%. Meno merce ferma che diventa invendibile.' }
        ],
        useCase: {
            title: 'Caso cliente: Distributore con 5000 SKU e €800k stock',
            customer: 'Distributore elettronica consumer',
            challenge: '€800k di capitale immobilizzato in stock, di cui 40% articoli a lento movimento. Rotture stock frequenti su best-seller. Ordini a fornitori "a sensazione". Obsolescenza €60k/anno su merce ferma.',
            solution: 'Implementato Planning con analisi ABC di 5000 SKU. Configurate scorte minime per articoli A e B, ridotte per C. Proposte ordine automatiche settimanali. Alert sotto scorta per articoli critici. Simulazione scenari prima di ordinare.',
            results: [
                'Stock ridotto da €800k a €560k (-30%) senza perdere vendite',
                'Rotture stock su best-seller da 12% a 2%',
                'Obsolescenza ridotta da €60k a €30k/anno',
                'Tempo buyer per pianificazione da 15 a 3 ore/settimana'
            ]
        },
        integrations: [
            { name: 'Magazzino', slug: 'magazzino' },
            { name: 'Acquisti & EDI', slug: 'acquisti-edi' },
            { name: 'Vendite & Cassa', slug: 'vendite-cassa' },
            { name: 'Statistiche & BI', slug: 'statistiche-bi' }
        ],
        faq: [
            {
                question: 'Come funziona l\'analisi ABC?',
                answer: 'Il sistema classifica gli articoli in 3 classi secondo il principio di Pareto: A (pochi articoli, alto valore vendite), B (valore medio), C (molti articoli, basso valore). Ti aiuta a focalizzare risorse su ciò che conta.'
            },
            {
                question: 'Le scorte minime sono calcolate automaticamente?',
                answer: 'Sì, il sistema calcola scorte minime in base a: venduto medio giornaliero × lead time fornitore × fattore sicurezza. Puoi personalizzare i parametri per categoria prodotto.'
            },
            {
                question: 'Le proposte ordine considerano i lotti minimi d\'acquisto?',
                answer: 'Sì, il sistema conosce i lotti minimi e multipli per fornitore (es. "minimo 50 pezzi, multipli di 10"). Le proposte rispettano automaticamente questi vincoli.'
            },
            {
                question: 'Posso simulare scenari prima di ordinare?',
                answer: 'Sì, la funzione "Simula ordine" ti mostra l\'impatto su giacenze, capitale immobilizzato e copertura stock prima di inviare l\'ordine al fornitore. Puoi fare "what-if" per ottimizzare.'
            }
        ]
    }
}

// Helper per ottenere un modulo per slug
export function getModuleBySlug(slug: string): ModuleData | undefined {
    return modules[slug]
}
