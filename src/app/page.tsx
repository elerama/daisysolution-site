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

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Daisy Solution - Gestionale Web per Retail',
    description:
        'Il gestionale web modulare per negozi di elettronica, telefonia, informatica. SaaS, integrazioni native, scalabile da 1 a 270+ punti vendita. Scelto da Unieuro, Expert, Domex.',
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
                            Il gestionale web che cresce con te
                        </h1>
                        <p className="mt-6 max-w-xl text-xl/8 font-medium text-gray-950/75">
                            Modulare, SaaS, integrazioni native. Dal negozio singolo alla rete
                            di 270 punti vendita. Tutto quello che serve per gestire il tuo
                            retail.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
                            <Button href="/contatti" className="btn-primary">
                                Richiedi Demo
                            </Button>
                            <Button variant="secondary" href="#video-demo">
                                Guarda Video
                            </Button>
                            <Button variant="outline" href="/risorse/brochure">
                                Scarica Brochure
                            </Button>
                        </div>
                    </div>

                    {/* Right: Screenshot Dashboard */}
                    <div className="flex items-center">
                        <Screenshot
                            width={1216}
                            height={768}
                            src="/screenshots/daisy-dashboard.png"
                            className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-950/10"
                            alt="Dashboard Daisy Solution ERP"
                        />
                        {/* TODO: Sostituire con screenshot reale dashboard Daisy */}
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
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
                        M
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        Modulare
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        Attiva solo i moduli che ti servono. Da 990€/anno per il punto vendita
                        base fino alla suite completa con e-commerce e analytics.
                    </p>
                </div>

                {/* Pillar 2: SaaS/Cloud */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
                        ☁
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        SaaS e sempre aggiornato
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        Niente installazioni, niente aggiornamenti manuali. Accedi da
                        qualsiasi dispositivo, ovunque sei. 99.7% uptime garantito.
                    </p>
                </div>

                {/* Pillar 3: Integrazioni */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
                        🔗
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        Integrazioni native
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        eBay, Amazon, etichette elettroniche, FastLabel, comparatori prezzi.
                        Setup in 2 giorni, non mesi.
                    </p>
                </div>

                {/* Pillar 4: Multi-PV */}
                <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-950/5">
                    <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
                        📍
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                        Scala da 1 a 270+ negozi
                    </h3>
                    <p className="mt-4 text-base text-gray-700 max-w-sm">
                        Architettura multi-tenant nativa. Gestisci filiali, franchising,
                        affiliati. 270 Unieuro, 200+ Expert, 85.000 SKU senza problemi.
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
                La fiducia di oltre 270 punti vendita
            </Heading>

            <LogoCloud className="mt-16">
                {/* TODO: Sostituire con loghi reali clienti Daisy */}
                {/* Unieuro, Expert, Domex, Gaer, Trend, Model Assistance */}
            </LogoCloud>

            <p className="mt-12 text-center text-base text-gray-600 max-w-2xl mx-auto">
                Da negozi indipendenti a reti nazionali con 270 affiliati. Ogni giorno
                migliaia di utenti lavorano con Daisy per gestire vendite, magazzino,
                e-commerce e analytics.
            </p>
        </Container>
    )
}

/**
 * Stats Grid - Numeri Impatto
 * 270 negozi | 200+ utenti | 20 anni | 85k SKU
 */
function StatsSection() {
    return (
        <div className="bg-brand-primary py-24">
            <Container>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
                    <div>
                        <div className="text-5xl font-bold text-white">270+</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Punti vendita gestiti
                        </div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-white">200+</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Utenti concorrenti
                        </div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-white">20</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            Anni di esperienza
                        </div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-white">85k</div>
                        <div className="mt-2 text-sm font-medium text-white/80">
                            SKU gestiti per cliente
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

/**
 * USP Bento Grid - 6 Cards
 * Pricing modulare, Multi-tenant, Integrazioni, Deploy rapido, RBAC, Performance
 */
function USPBentoSection() {
    return (
        <Container className="py-24">
            <Subheading>Perché scegliere Daisy</Subheading>
            <Heading as="h3" className="mt-2 max-w-3xl">
                Valore concreto, non promesse
            </Heading>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                {/* USP 1: Modulare - pricing flessibile */}
                <BentoCard
                    eyebrow="Pricing"
                    title="Modulare e accessibile"
                    description="Da 990€/anno per modulo base punto vendita. Nessun lock-in, nessun costo nascosto. Paghi solo quello che usi."
                    graphic={
                        <div className="flex items-center justify-center h-80 text-6xl font-bold text-brand-primary">
                            990€
                        </div>
                    }
                    fade={['bottom']}
                    className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
                />

                {/* USP 2: Multi-Tenant TCO -60% */}
                <BentoCard
                    eyebrow="Architettura"
                    title="Multi-tenant nativo"
                    description="TCO ridotto del 60% vs soluzioni tradizionali on-premise. Nessun server da gestire, nessun backup manuale."
                    graphic={
                        <div className="flex items-center justify-center h-80 text-5xl font-bold text-green-600">
                            -60% TCO
                        </div>
                    }
                    fade={['bottom']}
                    className="lg:col-span-3 lg:rounded-tr-4xl"
                />

                {/* USP 3: Integrazioni setup veloce */}
                <BentoCard
                    eyebrow="Integrazioni"
                    title="Setup eBay in 2 giorni"
                    description="Integrazioni native senza middleware custom. eBay, Amazon, etichette elettroniche pronti in giorni, non mesi."
                    graphic={
                        <div className="flex items-center justify-center h-full text-4xl">
                            🔗 eBay + Amazon
                        </div>
                    }
                    className="lg:col-span-2 lg:rounded-bl-4xl"
                />

                {/* USP 4: Deploy rapido 10min onboard */}
                <BentoCard
                    eyebrow="Onboarding"
                    title="Operativo in 10 minuti"
                    description="Configurazione guidata, import dati automatico, training incluso. Non settimane di consulenze."
                    graphic={
                        <div className="flex items-center justify-center h-full text-4xl">
                            ⚡ 10 min
                        </div>
                    }
                    className="lg:col-span-2"
                />

                {/* USP 5: RBAC 4 dimensioni */}
                <BentoCard
                    eyebrow="Sicurezza"
                    title="Permessi granulari"
                    description="RBAC su 4 dimensioni: ruolo, società, punto vendita, modulo. Controllo totale su chi vede cosa."
                    graphic={
                        <div className="flex items-center justify-center h-full text-4xl">
                            🔐 4D RBAC
                        </div>
                    }
                    className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
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
                        Richiedi una demo gratuita di 30 giorni
                    </Heading>
                    <p className="mt-6 text-lg text-gray-700">
                        Nessuna carta di credito richiesta. Setup guidato incluso. Supporto
                        dedicato in italiano.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <input
                            type="email"
                            placeholder="La tua email aziendale"
                            className="w-full sm:w-96 px-6 py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            aria-label="Email per demo"
                        />
                        <Button href="/contatti" className="btn-primary px-8 py-4 text-lg">
                            Richiedi Demo
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

function DarkBentoSection() {
    return (
        <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
            <Container>
                <Subheading dark>Outreach</Subheading>
                <Heading as="h3" dark className="mt-2 max-w-3xl">
                    Customer outreach has never been easier.
                </Heading>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    <BentoCard
                        dark
                        eyebrow="Networking"
                        title="Sell at the speed of light"
                        description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
                        graphic={
                            <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
                        }
                        fade={['top']}
                        className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Integrations"
                        title="Meet leads where they are"
                        description="With thousands of integrations, no one will be able to escape your cold outreach."
                        graphic={<LogoTimeline />}
                        // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
                        className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Meetings"
                        title="Smart call scheduling"
                        description="Automatically insert intro calls into your leads' calendars without their consent."
                        graphic={<LinkedAvatars />}
                        className="lg:col-span-2 lg:rounded-bl-4xl"
                    />
                    <BentoCard
                        dark
                        eyebrow="Engagement"
                        title="Become a thought leader"
                        description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
                        graphic={
                            <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
                        }
                        fade={['top']}
                        className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
                    />
                </div>
            </Container>
        </div>
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
                <USPBentoSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    )
}
