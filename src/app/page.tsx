/**
 * Homepage Daisy Solution
 *
 * Struttura (da strategy v1.1 Section 3.2):
 * 1. Hero Split with Screenshot
 * 2. 4 Benefit Pillars Grid (2x2)
 * 3. Logo Cloud Social Proof
 * 4. Stats Grid (numeri impatto)
 * 5. USP Bento Grid (6 cards)
 * 6. CTA finale Demo Request
 */

import {
    BookOpenIcon,
    CloudIcon,
    CogIcon,
    LinkIcon,
    ShoppingBagIcon,
    TagIcon,
} from '@heroicons/react/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import {
    CLIENTS,
    COMPANY,
    INFRASTRUCTURE,
    METRICS,
    PRICING,
    PRODUCTS,
    SLA,
    formatNumber,
} from '@/data/siteStats'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Daisy Solution - Gestionale Web per Retail',
    description:
        'Il gestionale web modulare per negozi di elettronica, telefonia, informatica. SaaS, integrazioni native, scalabile da 1 a 1000+ punti vendita. Scelto da Unieuro, Expert, Domex.',
    keywords: [
        'gestionale retail',
        'ERP negozi',
        'software punto vendita',
        'gestionale web',
        'SaaS retail',
        'multi-sede',
        'gestionale elettronica',
    ],
}

/**
 * Hero Section - Split with Screenshot
 * Headline + 3 CTA (Demo, Video, Brochure) + Screenshot dashboard
 */
function Hero() {
    return (
        <div className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
                <Navbar />
                <div className="grid grid-cols-1 gap-14 pt-16 pb-24 sm:pt-24 sm:pb-32 md:grid-cols-2 md:gap-16 md:pt-32 md:pb-48">
                    {/* Left: Testo + CTA */}
                    <div className="flex flex-col justify-center">
                        <Subheading className="text-brand-primary">
                            Software gestionale per retail
                        </Subheading>
                        <h1 className="mt-4 font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[0.9] md:text-7xl/[0.9]">
                            Il gestionale cloud che cresce con te
                        </h1>
                        <p className="mt-6 max-w-xl text-xl/8 font-medium text-gray-950/75">
                            Modulare, SaaS, integrazioni native e scalabile su più negozi.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                            <Button href="/contatti" className="btn-primary">
                                Richiedi Info
                            </Button>
                            {/* TODO: Inserire brochure.pdf in /public/brochure.pdf */}
                            <Button variant="secondary" href="/brochure.pdf" target="_blank">
                                Scarica Brochure
                            </Button>
                        </div>
                    </div>

                    {/* Right: Screenshot Dashboard */}
                    {/* TODO: Sostituire /placeholders/dashboard-homepage.svg con foto homepage.png */}
                    <div className="flex items-center">
                        <Screenshot
                            width={1216}
                            height={768}
                            src="/placeholders/dashboard-homepage.svg"
                            className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-950/10"
                            alt="Dashboard Daisy Solution ERP"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

/**
 * 4 Benefit Pillars - Centered 2x2 Grid
 * Moduli: Modulare, SaaS/Cloud, Integrazioni, Multi-PV
 */
function BenefitPillarsSection() {
    return (
        <Container className="py-24">
            <Subheading className="text-center">I 4 pilastri</Subheading>
            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Progettato per crescere con il tuo business
            </Heading>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
                {/* Pillar 1: Modulare */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white mb-6">
                        <CogIcon className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        Modulare
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        Attiva solo i moduli che ti servono, a partire da €{PRICING.monthlyBase},00 al mese.
                    </p>
                </div>

                {/* Pillar 2: SaaS/Cloud */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white mb-6">
                        <CloudIcon className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        SaaS e sempre aggiornato
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        Niente installazioni, niente aggiornamenti manuali. Accedi da
                        qualsiasi dispositivo, ovunque sei. {SLA.uptimePercent}% uptime garantito.
                    </p>
                </div>

                {/* Pillar 3: Integrazioni */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white mb-6">
                        <LinkIcon className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        Integrazioni native
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        eBay, Amazon, Aruba, etichette elettroniche, Eldomcat, FastLabel, comparatori prezzi.
                        Setup in {SLA.integrationSetupDays} giorni, non mesi.
                    </p>
                </div>

                {/* Pillar 4: Multi-PV */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white mb-6">
                        <BuildingStorefrontIcon className="size-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        Scala da 1 a ∞ negozi
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        Architettura multi-tenant. Gestisci filiali, franchising e affiliati.
                    </p>
                </div>
            </div>
        </Container>
    )
}

/**
 * Social Proof - Logo Cloud
 * Clienti: Unieuro, Expert, Domex, Gaer, Trend, Model Assistance
 */
function SocialProofSection() {
    return (
        <Container className="py-24">
            <Subheading className="text-center">Scelto dai leader retail italiani</Subheading>
            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Scelto da più di {CLIENTS.totalStores} punti vendita
            </Heading>

            <LogoCloud className="mt-16">
                {/* Carousel animato con loghi clienti */}
            </LogoCloud>

            <p className="mt-12 text-center text-base text-gray-600 max-w-2xl mx-auto">
                {CLIENTS.unieuroAffiliates}+ affiliati Unieuro, {CLIENTS.expertAffiliates}+ affiliati Expert, {CLIENTS.greAffiliates}+ affiliati gruppo GRE.
                Ogni giorno oltre {INFRASTRUCTURE.dailyWorkstations}+ postazioni lavorano utilizzando DaisySolution.
            </p>
        </Container>
    )
}

/**
 * Stats Grid - Numeri Impatto
 * Dati reali estratti da analisi elerama-site:
 * - 270 affiliati Unieuro gestiti
 * - 900 postazioni attive
 * - 20+ anni esperienza Elettrorama
 * - 300k+ articoli banca dati Eldomcat
 */
function StatsSection() {
    return (
        <div className="bg-brand-primary py-24">
            <Container>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
                    <div>
                        <div className="text-5xl font-bold text-white">{CLIENTS.unieuroAffiliates}+</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Affiliati Unieuro attivi
                        </div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-white">{INFRASTRUCTURE.dailyWorkstations}+</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Postazioni gestite
                        </div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-white">{COMPANY.yearsExperience}</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Anni esperienza retail
                        </div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-white">{formatNumber(METRICS.yearlySalesManaged)}</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Vendite gestite ogni anno
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

/**
 * Ecosistema Prodotti - 3 Pilastri
 * Eldomcat, Elecommerce, Fastlabel con numeri reali
 */
function EcosystemSection() {
    return (
        <Container className="py-24">
            <Subheading className="text-center">Ecosistema integrato</Subheading>
            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Tre prodotti che potenziano Daisy Solution
            </Heading>
            <p className="mt-6 text-center text-lg text-gray-700 max-w-2xl mx-auto">
                Banca dati articoli, e-commerce sincronizzato, cartelli intelligenti. Tutto integrato nativamente con l'ERP.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Eldomcat */}
                <div className="flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-blue-500/10 mb-4">
                        <BookOpenIcon className="size-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">Eldomcat</h3>
                    <p className="mt-2 text-sm text-gray-600">Banca dati italiana più grande</p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">{formatNumber(PRODUCTS.eldomcatArticles)}</span>
                            <span className="text-sm text-gray-700">Articoli con foto e caratteristiche tecniche</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">{PRODUCTS.eldomcatCompilations}</span>
                            <span className="text-sm text-gray-700">Compilazioni diverse: SEO, volantini, cartelli, schede</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">✓</span>
                            <span className="text-sm text-gray-700">Risparmio {PRODUCTS.hoursSavedManualEntry.toLocaleString('it-IT')} ore inserimento manuale</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link href="/prodotto/integrazioni#eldomcat" className="text-sm font-semibold text-brand-primary hover:underline">
                            Scopri Eldomcat →
                        </Link>
                    </div>
                </div>

                {/* Elecommerce */}
                <div className="flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-green-500/10 mb-4">
                        <ShoppingBagIcon className="size-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">Elecommerce</h3>
                    <p className="mt-2 text-sm text-gray-600">E-commerce cloud integrato</p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">B2B+B2C</span>
                            <span className="text-sm text-gray-700">Doppio canale con listini differenziati</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">Amazon+eBay</span>
                            <span className="text-sm text-gray-700">Marketplace automatici con sync ordini</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">✓</span>
                            <span className="text-sm text-gray-700">Comparatori prezzi: Google Shopping, Trovaprezzi</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link href="/prodotto/integrazioni#elecommerce" className="text-sm font-semibold text-brand-primary hover:underline">
                            Scopri Elecommerce →
                        </Link>
                    </div>
                </div>

                {/* Fastlabel */}
                <div className="flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-orange-500/10 mb-4">
                        <TagIcon className="size-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">Fastlabel</h3>
                    <p className="mt-2 text-sm text-gray-600">Stampa cartelli centralizzata</p>
                    <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">{CLIENTS.fastlabelClients}+</span>
                            <span className="text-sm text-gray-700">Clienti attivi in 6 settori diversi</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">Multi-sede</span>
                            <span className="text-sm text-gray-700">Gestione centralizzata per reti e insegne</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-brand-primary font-bold">✓</span>
                            <span className="text-sm text-gray-700">Campagne promozionali sincronizzate real-time</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link href="/prodotto/integrazioni#fastlabel" className="text-sm font-semibold text-brand-primary hover:underline">
                            Scopri Fastlabel →
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Button href="/prodotto/integrazioni" variant="outline">
                    Vedi tutte le integrazioni
                </Button>
            </div>
        </Container>
    )
}

/**
 * USP Bento Grid - 6 Cards
 * Pricing modulare, Multi-tenant, Integrazioni, Deploy rapido, RBAC, Performance
 */
function USPBentoSection() {
    return (
        <Container className="py-24">
            <Subheading className="text-center">Perché scegliere Daisy</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl mx-auto text-center">
                Valore concreto, non promesse
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3">
                {/* USP 1: Modulare - pricing flessibile */}
                <BentoCard
                    eyebrow="Pricing"
                    title="Modulare ed economico"
                    description={`A partire da €${PRICING.monthlyBase}/mese, nessun costo nascosto. Paghi solo quello che usi.`}
                    graphic={
                        <div className="flex flex-col items-center justify-center h-80">
                            <div className="text-sm text-gray-500">da</div>
                            <div className="text-6xl font-bold text-brand-primary">{PRICING.monthlyBase}€</div>
                            <div className="text-lg text-gray-600">/ mese</div>
                        </div>
                    }
                    fade={['bottom']}
                    className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:rounded-bl-4xl"
                />

                {/* USP 2: Saving -60% */}
                <BentoCard
                    eyebrow="Saving"
                    title={`Riduci i costi del ${PRICING.tcoSavingsPercent}%`}
                    description="Elimina i server, non le performance."
                    graphic={
                        <div className="flex items-center justify-center h-80 text-5xl font-bold text-green-600">
                            -{PRICING.tcoSavingsPercent}%
                        </div>
                    }
                    fade={['bottom']}
                    className=""
                />

                {/* USP 3: Customer Service GRATIS */}
                <BentoCard
                    eyebrow="Customer Service"
                    title={`Assistenza clienti ${SLA.supportDaysPerWeek}/${SLA.supportDaysPerWeek}`}
                    description="Inclusa nel canone mensile, nessun costo aggiuntivo."
                    graphic={
                        <div className="flex flex-col items-center justify-center h-80">
                            <div className="text-5xl font-bold text-brand-primary">GRATIS</div>
                            <div className="text-lg text-gray-600 mt-2">{SLA.supportDaysPerWeek} giorni su {SLA.supportDaysPerWeek}</div>
                        </div>
                    }
                    fade={['bottom']}
                    className="max-lg:rounded-b-4xl lg:rounded-tr-4xl lg:rounded-br-4xl"
                />
            </div>
        </Container>
    )
}

/**
 * CTA Finale - Demo Request
 * Input email + CTA "Richiedi Demo Gratuita 30 Giorni"
 */
function FinalCTASection() {
    return (
        <div className="relative py-32">
            <Gradient className="absolute inset-2 rounded-4xl ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
                <div className="max-w-2xl mx-auto text-center">
                    <Subheading>Pronto per iniziare?</Subheading>
                    <Heading as="h2" className="mt-4">
                        Richiedi un contatto
                    </Heading>
                    <p className="mt-6 text-lg text-gray-700">
                        Supporto dedicato in italiano.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <input
                            type="email"
                            placeholder="La tua email aziendale"
                            className="w-full sm:w-96 px-6 py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            aria-label="Email per contatto"
                        />
                        <Button href="/contatti" className="btn-primary px-8 py-4 text-lg">
                            Richiedi Info
                        </Button>
                    </div>

                    <p className="mt-6 text-sm text-gray-600">
                        oppure{' '}
                        <Link href="/prezzi" className="underline text-brand-primary">
                            guarda i piani e prezzi
                        </Link>
                    </p>
                </div>
            </Container>
        </div>
    )
}

function BentoSection() {
    return (
        <Container>
            <Subheading>Sales</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl">
                Know more about your customers than they do.
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <BentoCard
                    eyebrow="Insight"
                    title="Get perfect clarity"
                    description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
                    graphic={
                        <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
                    }
                    fade={['bottom']}
                    className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
                />
                <BentoCard
                    eyebrow="Analysis"
                    title="Undercut your competitors"
                    description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
                    graphic={
                        <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
                    }
                    fade={['bottom']}
                    className="lg:col-span-3 lg:rounded-tr-4xl"
                />
                <BentoCard
                    eyebrow="Speed"
                    title="Built for power users"
                    description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
                    graphic={
                        <div className="flex size-full pt-10 pl-10">
                            <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
                        </div>
                    }
                    className="lg:col-span-2 lg:rounded-bl-4xl"
                />
                <BentoCard
                    eyebrow="Source"
                    title="Get the furthest reach"
                    description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
                    graphic={<LogoCluster />}
                    className="lg:col-span-2"
                />
                <BentoCard
                    eyebrow="Limitless"
                    title="Sell globally"
                    description="Radiant helps you sell in locations currently under international embargo."
                    graphic={<Map />}
                    className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
                />
            </div>
        </Container>
    )
}

/**
 * Homepage Default Export
 * Compone tutte le sezioni in ordine secondo strategy v1.1
 */
export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <BenefitPillarsSection />
                <SocialProofSection />
                <StatsSection />
                <EcosystemSection />
                <USPBentoSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    )
}
