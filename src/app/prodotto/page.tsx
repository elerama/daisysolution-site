/**
 * Prodotto - Panoramica
 *
 * Pagina overview del prodotto Daisy Solution con:
 * - Hero con eyebrow + headline + subheading
 * - Sezione modularità spiegata (with product screenshot)
 * - 3 pillar value proposition
 * - Tabella comparazione veloce (Tradizionale vs Daisy)
 * - CTA esplora moduli e richiedi demo
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Prodotto - Daisy Solution | Gestionale Web Modulare',
    description:
        'Gestionale modulare web-based per retail e distribuzione organizzata. Completo, economico, scalabile. Da 1 negozio a rete nazionale con 270 punti vendita.',
    keywords: [
        'gestionale modulare',
        'software retail',
        'ERP web-based',
        'gestionale completo',
        'multi-sede',
        'SaaS retail',
    ],
}

/**
 * Hero Section con Eyebrow
 */
function Hero() {
    return (
        <div className="relative">
            <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
            <Container className="relative">
                <Navbar />
                <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
                    <Subheading className="text-brand-primary">Prodotto</Subheading>
                    <Heading as="h1" className="mt-4 max-w-4xl">
                        Il gestionale web che cresce con te
                    </Heading>
                    <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
                        <strong className="font-semibold text-gray-950">41 moduli componibili</strong>.
                        Dal punto vendita singolo alla rete nazionale.
                        Modulare, SaaS, integrazioni native. Tutto quello che serve per gestire
                        vendite, magazzino, acquisti, e-commerce, analytics.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button href="/prodotto/moduli" className="btn-primary">
                            Esplora i Moduli
                        </Button>
                        <Button variant="secondary" href="/contatti">
                            Richiedi Demo
                        </Button>
                        <Button variant="outline" href="/risorse/brochure">
                            Scarica Brochure
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

/**
 * Sezione Modularità Spiegata
 * With Product Screenshot layout (strategy row 173)
 */
function ModularitySection() {
    return (
        <Container className="py-24">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                {/* Left: Testo */}
                <div className="flex flex-col justify-center">
                    <Subheading>Modularità</Subheading>
                    <Heading as="h2" className="mt-4">
                        Attiva solo i moduli che ti servono
                    </Heading>
                    <p className="mt-6 text-lg text-gray-700">
                        Daisy Solution è composto da <strong>41 moduli funzionali indipendenti</strong>.
                        Non paghi per funzionalità che non utilizzi.
                    </p>

                    <div className="mt-8 space-y-4">
                        <div className="flex gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                ✓
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-950">Parti dal base</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Punto vendita + magazzino da 990€/anno. Aggiungi moduli quando cresci.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                ✓
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-950">Estendi l&rsquo;ecosistema</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    E-commerce, analytics, marketplace, riparazioni. Attiva quando serve.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                                ✓
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-950">Scala senza limiti</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Da 1 negozio a 270 punti vendita. Stessa piattaforma, zero riscritture.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <Button href="/prodotto/moduli" variant="outline">
                            Vedi tutti i 41 moduli →
                        </Button>
                    </div>
                </div>

                {/* Right: Screenshot pannello admin moduli */}
                <div className="flex items-center">
                    <Screenshot
                        width={1216}
                        height={768}
                        src="/screenshots/admin-moduli-panel.png"
                        className="w-full rounded-2xl shadow-2xl ring-1 ring-gray-950/10"
                        alt="Pannello amministrazione moduli Daisy Solution con toggle on/off"
                    />
                    {/* TODO: Sostituire con screenshot reale pannello admin moduli */}
                </div>
            </div>
        </Container>
    )
}

/**
 * 3 Pillar Value Proposition
 * Centered 3-column grid
 */
function ThreePillarSection() {
    return (
        <div className="bg-gray-50 py-24">
            <Container>
                <Subheading className="text-center">Progettato per il retail</Subheading>
                <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                    Tre pilastri per gestire il tuo business
                </Heading>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Pillar 1: Completo */}
                    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl ring-1 ring-gray-950/5">
                        <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-3xl mb-6">
                            📦
                        </div>
                        <h3 className="text-xl font-semibold text-gray-950">
                            Completo
                        </h3>
                        <p className="mt-4 text-base text-gray-700">
                            Tutti i moduli: vendite, cassa, magazzino, acquisti, promozioni,
                            e-commerce, riparazioni, statistiche, liste regalo. Ecosistema unico.
                        </p>
                    </div>

                    {/* Pillar 2: Economico */}
                    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl ring-1 ring-gray-950/5">
                        <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-3xl mb-6">
                            💰
                        </div>
                        <h3 className="text-xl font-semibold text-gray-950">
                            Economico
                        </h3>
                        <p className="mt-4 text-base text-gray-700">
                            SaaS: zero investimento infrastruttura. Canone mensile prevedibile da 990€/anno.
                            Backup automatici, aggiornamenti continui inclusi.
                        </p>
                    </div>

                    {/* Pillar 3: Scalabile */}
                    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl ring-1 ring-gray-950/5">
                        <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white text-3xl mb-6">
                            📈
                        </div>
                        <h3 className="text-xl font-semibold text-gray-950">
                            Scalabile
                        </h3>
                        <p className="mt-4 text-base text-gray-700">
                            Multi-azienda nativo: da 1 negozio a rete nazionale. Gestisci filiali,
                            franchising, affiliati. 270 Unieuro, 200+ Expert senza problemi.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

/**
 * Comparazione Veloce - Tabella
 * Gestionale Tradizionale vs Daisy Solution
 */
function ComparisonTable() {
    return (
        <Container className="py-24">
            <Subheading className="text-center">Confronto</Subheading>
            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Perché scegliere Daisy Solution
            </Heading>

            <div className="mt-16 overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                                Aspetto
                            </th>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">
                                Gestionale Tradizionale
                            </th>
                            <th className="py-4 px-6 text-left text-sm font-semibold text-brand-primary">
                                Daisy Solution
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">Installazione</td>
                            <td className="py-4 px-6 text-sm text-gray-600">Su ogni PC</td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900">Web browser</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">Costi iniziali</td>
                            <td className="py-4 px-6 text-sm text-gray-600">€€€ server + licenze</td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900">Canone mensile da 990€/anno</td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">Aggiornamenti</td>
                            <td className="py-4 px-6 text-sm text-gray-600">A pagamento</td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900">Automatici inclusi</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">Mobilità</td>
                            <td className="py-4 px-6 text-sm text-gray-600">Limitata</td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900">App mobile native (DaisyApp)</td>
                        </tr>
                        <tr>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">Multi-sede</td>
                            <td className="py-4 px-6 text-sm text-gray-600">Complesso, addon costosi</td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900">Nativo, gestisci 270+ negozi</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900">Integrazioni</td>
                            <td className="py-4 px-6 text-sm text-gray-600">Custom, settimane/mesi</td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900">Native: eBay, Amazon, ESL (2 giorni)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-12 flex justify-center">
                <Button href="/prodotto/perche-daisy" variant="outline">
                    Leggi confronto completo →
                </Button>
            </div>
        </Container>
    )
}

/**
 * CTA Finale
 */
function FinalCTA() {
    return (
        <div className="relative py-24 bg-brand-primary">
            <Container className="relative">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <Heading as="h2" className="text-white">
                        Scopri tutti i moduli e le integrazioni
                    </Heading>
                    <p className="mt-6 text-lg text-white/90">
                        41 moduli funzionali. Ecosistema integrato con Eldomcat, Elecommerce,
                        Fastlabel. Scopri come Daisy Solution può trasformare il tuo retail.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button href="/prodotto/moduli" className="bg-white text-brand-primary hover:bg-gray-100">
                            Esplora Moduli
                        </Button>
                        <Button href="/prodotto/integrazioni" variant="outline" className="border-white text-white hover:bg-white/10">
                            Vedi Integrazioni
                        </Button>
                        <Button href="/contatti" variant="secondary">
                            Richiedi Demo
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default function ProdottoPage() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <main>
                <ModularitySection />
                <ThreePillarSection />
                <ComparisonTable />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    )
}
