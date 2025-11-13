import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Gradient } from '@/components/gradient';
import { Icon, type IconName } from '@/components/icon';
import { JsonLd, commonBreadcrumbs } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { Heading, Subheading } from '@/components/text';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Catene & Affiliazioni - Gestionale Multi-Sede Enterprise | Daisy Solution',
    description:
        'Soluzione ERP multi-tenant per catene retail e reti affiliate. Gestisci 10-1000 negozi da unica istanza. Case study Unieuro 270 affiliati, Domex 200+ negozi, Gaer portale B2B.',
    openGraph: {
        title: 'Catene & Affiliazioni - Gestionale Multi-Sede | Daisy Solution',
        description:
            'Piattaforma unificata per reti retail: condivisione giacenze, ordini centrale, promozioni sincronizzate. Caso studio Unieuro 1Company: 270 affiliati, 900 postazioni.',
    },
};

/**
 * Catene e Affiliazioni Detail Page
 * Target: retail chains, franchise networks, affiliated stores (5+ locations)
 * Content: pain points, multi-azienda solution, Unieuro 1Company expanded, network architecture
 * Implements enterprise-level FNC requirements with multi-tenant capabilities
 */
export default function CateneAffiliazioniPage() {
    return (
        <>
            <JsonLd type="organization" />
            <JsonLd type="breadcrumb" data={{ breadcrumbs: commonBreadcrumbs.settoriCatene }} />

            {/* Hero Section */}
            <div className="relative">
                <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
                <Container className="relative">
                    <Navbar />
                    <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32">
                        <div className="max-w-3xl">
                            <Heading as="h1" className="mb-6">
                                Gestionale Enterprise per Catene & Affiliazioni
                            </Heading>
                            <Subheading className="mb-8">
                                Gestisci 5+ punti vendita o sei affiliato a un&rsquo;insegna? Daisy Solution è
                                progettato per reti retail: architettura multi-tenant nativa, condivisione
                                giacenze cross-store, ordini automatici a centrale, promozioni sincronizzate su
                                tutta la rete. Unieuro, Domex, Gaer, Expert si affidano a noi.
                            </Subheading>
                            <div className="flex flex-wrap gap-4">
                                <Button href="/contatti">Richiedi Demo Multi-Sede</Button>
                                <Button href="#unieuro-case" variant="secondary">
                                    Caso Studio Unieuro
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Pain Points Section */}
            <Container className="py-24">
                <div className="mb-16 max-w-2xl">
                    <Subheading className="mb-4">Le Sfide della Gestione Multi-Sede</Subheading>
                    <Heading as="h2" className="mb-6">
                        Complessità delle reti retail
                    </Heading>
                    <p className="text-lg text-gray-600">
                        Coordinare decine o centinaia di negozi richiede piattaforme progettate per scala
                        enterprise. Soluzioni single-tenant tradizionali collassano oltre i 10 punti
                        vendita.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <PainPointCard
                        icon="target"
                        title="Coordinamento promozioni complesso"
                        description="Attivare volantini, sconti flash, offerte Black Friday su 50+ negozi richiede ore di configurazione manuale, rischio errori prezzi."
                    />
                    <PainPointCard
                        icon="cube"
                        title="Gestione stock multi-sede inefficiente"
                        description="Cliente chiede prodotto esaurito nel negozio A ma disponibile in B: nessuna visibilità cross-store, vendita persa."
                    />
                    <PainPointCard
                        icon="globe"
                        title="Integrazione con centrale onerosa"
                        description="Carico bolle da centrale richiede sviluppo EDI custom, costi 30-50k€ per system integrator, manutenzione continua."
                    />
                    <PainPointCard
                        icon="paintbrush"
                        title="Visual marketing disomogeneo"
                        description="Cartellini prezzi stampati localmente con layout diversi, brand identity non rispettata, nessun controllo centrale."
                    />
                    <PainPointCard
                        icon="chart-bar"
                        title="Statistiche rete faticose da consolidare"
                        description="Excel aggregati manualmente da export singoli PV, nessuna dashboard real-time, decisioni ritardate di settimane."
                    />
                </div>
            </Container>

            {/* Solution Section */}
            <div className="bg-gray-50 py-24">
                <Container>
                    <div className="mb-16 max-w-2xl">
                        <Subheading className="mb-4">La Soluzione Daisy Multi-Azienda</Subheading>
                        <Heading as="h2" className="mb-6">
                            Una piattaforma, infinite insegne
                        </Heading>
                        <p className="text-lg text-gray-600">
                            Architettura multi-tenant nativa: gestisci 10-100-1000 negozi da un&rsquo;unica istanza
                            software. Riduzione TCO infrastrutturale del 60% rispetto a deployment separati.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Multi-Tenant Capabilities */}
                        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                                Capacità Multi-Tenant Native
                            </h3>
                            <ul className="space-y-4">
                                <SolutionItem
                                    title="Multi-azienda unificata"
                                    description="Database segregato per ID_COMPANY: ogni negozio vede solo i propri dati, centrale accede a consolidato rete."
                                />
                                <SolutionItem
                                    title="Condivisione giacenze cross-store"
                                    description="Cliente cerca prodotto: sistema mostra disponibilità tutti PV, trasferimento inter-filiale in 1 click."
                                />
                                <SolutionItem
                                    title="Ordini automatici a centrale"
                                    description="PV generano ordini verso magazzino centrale, controllo disponibilità real-time, integrazione EDI/Web Service."
                                />
                                <SolutionItem
                                    title="Configurazione centralizzata"
                                    description="IT Manager attiva nuovi moduli, aggiorna listini, configura permessi da console unica per tutta la rete."
                                />
                            </ul>
                        </div>

                        {/* Visual & Promo Management */}
                        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                                Visual & Promo Management
                            </h3>
                            <ul className="space-y-4">
                                <SolutionItem
                                    title="FastLabel centralizzato"
                                    description="Centrale carica layout promozione, tutti i PV stampano cartellini identici con brand compliance garantita."
                                />
                                <SolutionItem
                                    title="Attivazione promozioni con 1 click"
                                    description="Campagna Black Friday attiva su 200 negozi contemporaneamente, sincronizzazione prezzi automatica."
                                />
                                <SolutionItem
                                    title="ESL (Electronic Shelf Labels)"
                                    description="Integrazione etichette elettroniche IoT: modifica prezzi da centrale, aggiornamento 3000+ tag in 2 minuti."
                                />
                                <SolutionItem
                                    title="Dashboard statistiche aggregate"
                                    description="CEO vede sell-out real-time consolidato rete, drill-down per regione/insegna/PV, export automatizzato."
                                />
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Network Architecture Diagram */}
            <Container className="py-24">
                <div className="mb-16 max-w-2xl">
                    <Subheading className="mb-4">Architettura di Rete</Subheading>
                    <Heading as="h2" className="mb-6">
                        Come funziona la rete multi-sede
                    </Heading>
                </div>

                <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-gray-200 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_0%,rgba(0,129,190,0.08)_0%,transparent_50%)]">
                    <div className="mx-auto max-w-4xl">
                        {/* Centrale Node */}
                        <div className="mb-8 text-center">
                            <div className="mx-auto inline-block rounded-xl bg-brand-primary px-8 py-6 text-white shadow-lg">
                                <div className="text-2xl font-bold">🏢 Centrale d&rsquo;Acquisto</div>
                                <div className="mt-2 text-sm text-blue-100">
                                    Gestione listini • Promozioni • Visual marketing • Statistiche consolidate
                                </div>
                            </div>
                        </div>

                        {/* Arrow Down */}
                        <div className="mb-8 text-center text-4xl text-brand-primary">↓</div>

                        {/* Daisy Multi-Azienda Platform */}
                        <div className="mb-8 text-center">
                            <div className="mx-auto inline-block rounded-xl bg-white px-8 py-6 shadow-lg ring-2 ring-brand-primary">
                                <div className="text-2xl font-bold text-gray-900">
                                    Daisy Solution Multi-Azienda
                                </div>
                                <div className="mt-2 text-sm text-gray-600">
                                    Unica istanza software • Database segregato • API unificate
                                </div>
                            </div>
                        </div>

                        {/* Arrow Down */}
                        <div className="mb-8 text-center text-4xl text-brand-primary">↓</div>

                        {/* Affiliated Stores Grid */}
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg bg-white px-4 py-3 text-center shadow-sm ring-1 ring-gray-200"
                                >
                                    <div className="text-2xl">🏪</div>
                                    <div className="mt-1 text-xs font-medium text-gray-700">PV {i + 1}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            10-100-1000 affiliati su piattaforma unificata
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-blue-50 p-6 ring-1 ring-blue-200">
                    <p className="text-sm text-gray-700">
                        <strong>Beneficio TCO:</strong> Scenario 100 negozi: Daisy Multi-Azienda richiede 1
                        server cluster (€5k/anno). Alternativa istanze separate: 100 deployment x €500/anno
                        = €50k/anno. <strong>Risparmio: 90%</strong>.
                    </p>
                </div>
            </Container>

            {/* Unieuro 1Company Case Study */}
            <div id="unieuro-case" className="bg-gray-900 py-24 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(0,129,190,0.15)_0%,transparent_50%)]">
                <Container>
                    <div className="mb-16">
                        <Subheading className="mb-4 text-blue-300">Caso Studio Enterprise</Subheading>
                        <Heading as="h2" className="mb-6 text-white">
                            Progetto Unieuro 1Company
                        </Heading>
                        <p className="max-w-3xl text-lg text-gray-300">
                            Nel 2018 Unieuro seleziona Elettrorama per progetto strategico: unificare 270
                            affiliati su piattaforma gestionale comune. Implementazione completata in 18 mesi,
                            operativo da 6+ anni.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard number="270" label="Affiliati Unieuro attivi" />
                        <StatCard number="900" label="Postazioni sincronizzate" />
                        <StatCard number="400" label="Casse POS integrate" />
                        <StatCard number="99.9%" label="Uptime SLA garantito" />
                    </div>

                    {/* Functionalities */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-2xl bg-gray-800/50 p-8 ring-1 ring-gray-700">
                            <h3 className="mb-6 text-xl font-semibold text-white">Funzionalità Core</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Cassa POS
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Vendita assistita
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Magazzino real-time
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Acquisti da centrale
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Promozioni nazionali
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Stampa cartelli brand
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> RAEE (rifiuti elettrici)
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-400">✓</span> Riparazioni & Assistenza
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-gray-800/50 p-8 ring-1 ring-gray-700">
                            <h3 className="mb-6 text-xl font-semibold text-white">
                                Interconnessione Centrale-Affiliati
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Carico bolle automatico da AS400 centrale</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Catalogo prodotti sincronizzato (200k+ SKU)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Listini prezzi aggiornati real-time</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Ordini affiliati verso magazzino centrale</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Variazioni prezzi & volantini push</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Garanzie estese & Fidelity card unificata</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400">→</span>
                                    <span>Sell-out giornaliero aggregato centrale</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 rounded-2xl bg-[#006E9F] p-8 text-center text-white relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_60%)]">
                        <blockquote className="text-xl font-medium italic relative z-10">
                            &ldquo;Daisy Solution ha permesso di standardizzare operatività su 270 affiliati
                            mantenendo flessibilità locale. Sistema robusto, supporto reattivo, uptime
                            eccellente.&rdquo;
                        </blockquote>
                        <p className="mt-4 text-sm text-blue-200 relative z-10">
                            — IT Manager, Unieuro Affiliati Network (testimonianza rappresentativa progetto)
                        </p>
                    </div>
                </Container>
            </div>

            {/* Other Networks Section */}
            <Container className="py-24">
                <div className="mb-16 max-w-2xl">
                    <Subheading className="mb-4">Altre Reti Enterprise</Subheading>
                    <Heading as="h2" className="mb-6">
                        Domex, Gaer, Expert si affidano a Daisy
                    </Heading>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Domex Card */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <div className="mb-4 text-4xl">🏪</div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Domex</h3>
                        <div className="mb-4 text-3xl font-bold text-brand-primary">200+ negozi</div>
                        <p className="mb-6 text-gray-600">
                            Rete affiliazione nazionale elettronica. Gestione visual marketing FastLabel
                            centralizzata: promozioni attive su tutta la rete in meno di 1 ora.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>✓ Stampa cartelli sincronizzata</li>
                            <li>✓ Listini centralizzati</li>
                            <li>✓ Dashboard sell-out aggregato</li>
                        </ul>
                        <Link
                            href="/settori/customer-stories"
                            className="mt-6 inline-block text-brand-primary hover:underline"
                        >
                            Leggi case study completo →
                        </Link>
                    </div>

                    {/* Gaer Card */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <div className="mb-4 text-4xl">🌐</div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Gaer</h3>
                        <div className="mb-4 text-3xl font-bold text-brand-primary">Portale B2B 24/7</div>
                        <p className="mb-6 text-gray-600">
                            Portale prodotti con totem interattivi nei punti vendita. Affiliati ordinano
                            online, pick & pay diretto da magazzino centrale.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>✓ Elecommerce integrato</li>
                            <li>✓ Totem PV touch-screen</li>
                            <li>✓ Ordini automatici centrale</li>
                        </ul>
                        <Link
                            href="/settori/customer-stories"
                            className="mt-6 inline-block text-brand-primary hover:underline"
                        >
                            Leggi case study completo →
                        </Link>
                    </div>

                    {/* Expert Card */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <div className="mb-4 text-4xl">⚡</div>
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">Expert</h3>
                        <div className="mb-4 text-3xl font-bold text-brand-primary">
                            Standardizzazione rete
                        </div>
                        <p className="mb-6 text-gray-600">
                            Affiliati Expert utilizzano Daisy per conformità processi nazionali: vendita,
                            magazzino, integrazione centrale. Rollout rapido nuovi PV (2-3 giorni).
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>✓ Deployment standardizzato</li>
                            <li>✓ Integrazione EDI centrale</li>
                            <li>✓ Controllo governance brand</li>
                        </ul>
                        <Link
                            href="/settori/customer-stories"
                            className="mt-6 inline-block text-brand-primary hover:underline"
                        >
                            Esplora casi Expert →
                        </Link>
                    </div>
                </div>
            </Container>

            {/* Key Modules for Networks */}
            <div className="bg-gray-50 py-24">
                <Container>
                    <div className="mb-16 max-w-2xl">
                        <Subheading className="mb-4">Moduli Chiave per Reti</Subheading>
                        <Heading as="h2" className="mb-6">
                            Tecnologie enterprise abilitanti
                        </Heading>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <ModuleCard
                            title="Ordini a Centrale"
                            description="Affiliati generano richieste di approvvigionamento, controllo disponibilità automatico, integrazione AS400/SAP."
                        />
                        <ModuleCard
                            title="Promozioni Sincronizzate"
                            description="Attivazione campagne da console centrale, validità date/orari, applicazione automatica a tutti PV selezionati."
                        />
                        <ModuleCard
                            title="Import/Export EDI"
                            description="Web service RESTful, batch XML/CSV, integrazione middleware MuleSoft/Boomi, standard EDIFACT/ANSI X12."
                        />
                        <ModuleCard
                            title="Web Service API"
                            description="Endpoint JSON per integrazione sistemi terzi, autenticazione OAuth2, rate limiting, documentazione OpenAPI."
                        />
                        <ModuleCard
                            title="Multi-Azienda Segregato"
                            description="Database isolamento per ID_COMPANY, permessi granulari centrale/affiliato, audit trail completo."
                        />
                        <ModuleCard
                            title="FastLabel Visual"
                            description="Layout centralizzati brand-compliant, stampa batch 1000+ cartelli in <10min, integrazione ESL IoT."
                        />
                    </div>
                </Container>
            </div>

            {/* Final CTA */}
            <Container className="py-24">
                <div className="rounded-3xl bg-[#0081BE] px-8 py-16 text-center text-white shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_60%)]">
                    <Heading as="h2" className="mb-6 text-white">
                        Pronto a unificare la tua rete retail?
                    </Heading>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                        Scarica il case study Unieuro 1Company PDF completo o prenota una demo
                        personalizzata per la tua catena. Riduzione TCO del 60%, deployment in 3-6 mesi.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button href="/contatti" variant="secondary">
                            Prenota Demo Multi-Sede
                        </Button>
                        <Button href="#" className="bg-white text-brand-primary">
                            Scarica Case Study Unieuro PDF
                        </Button>
                        <Button href="/prezzi" variant="outline" className="border-white text-white">
                            Richiedi Integrazione Centrale
                        </Button>
                    </div>
                </div>
            </Container>

            <Footer />
        </>
    );
}

// Helper Components
function PainPointCard({
    icon,
    title,
    description,
}: {
    icon: IconName;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-red-100">
            <div className="mb-4">
                <Icon name={icon} className="size-10 text-red-600" />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}

function SolutionItem({ title, description }: { title: string; description: string }) {
    return (
        <li>
            <div className="font-semibold text-gray-900">{title}</div>
            <div className="mt-1 text-sm text-gray-600">{description}</div>
        </li>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="rounded-xl bg-gray-800/50 p-6 text-center ring-1 ring-gray-700">
            <div className="mb-2 text-4xl font-bold text-white">{number}</div>
            <div className="text-sm text-gray-400">{label}</div>
        </div>
    );
}

function ModuleCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
}
