/**
 * Dynamic Module Page Template
 * /prodotto/moduli/[slug]
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { FeatureCategorySection } from '@/components/feature-category-section'
import { FeatureGrid } from '@/components/feature-grid'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { JsonLd } from '@/components/json-ld'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { OptionalConnectionsGrid } from '@/components/optional-connection-card'
import { ScreenshotGallery } from '@/components/screenshot-gallery'
import { StickyCTAMobile } from '@/components/sticky-cta-mobile'
import { Heading, Subheading } from '@/components/text'
import { getModuleBySlug, type CategoryColor } from '@/data/moduleData'
import { moduleNames, moduleSlugs, type ModuleSlug } from '@/data/modulesIndex'
import { CheckIcon } from '@heroicons/react/20/solid'
import * as HeroIcons from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Script from 'next/script'

// Color mapping for category badges (Tailwind JIT requires static classes)
const categoryColorClasses: Record<CategoryColor, string> = {
    emerald: 'bg-emerald-500/10 text-emerald-700',
    pink: 'bg-pink-500/10 text-pink-700',
    violet: 'bg-violet-500/10 text-violet-700',
    indigo: 'bg-indigo-500/10 text-indigo-700',
    blue: 'bg-blue-500/10 text-blue-700',
    amber: 'bg-amber-500/10 text-amber-700',
}

type PageProps = {
    params: Promise<{ slug: string }>
}

// Generate static params for all modules
export async function generateStaticParams() {
    return moduleSlugs.map((slug) => ({
        slug,
    }))
}

// Generate metadata dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params

    if (!moduleSlugs.includes(slug as ModuleSlug)) {
        return {}
    }

    const moduleName = moduleNames[slug as ModuleSlug]
    const moduleData = getModuleData(slug)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.daisysolution.it'
    const pageUrl = `${siteUrl}/prodotto/moduli/${slug}`
    const imageUrl = `${siteUrl}/screenshots/moduli/${slug}-hero.svg`

    // Generate keywords from module data
    const keywords = [
        moduleName,
        `modulo ${moduleName.toLowerCase()}`,
        moduleData.category,
        'gestionale retail',
        'ERP modulare',
        ...moduleData.features.slice(0, 3).map(f => f.title.toLowerCase()),
    ]

    return {
        title: `${moduleName} - Gestionale Retail | Daisy Solution`,
        description: moduleData.tagline || `Scopri il modulo ${moduleName} di Daisy Solution: funzionalità complete, integrazione nativa con ERP, case study e benefici quantificati.`,
        keywords,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: `${moduleName} - Daisy Solution`,
            description: moduleData.tagline,
            url: pageUrl,
            siteName: 'Daisy Solution',
            images: [
                {
                    url: imageUrl,
                    width: 1216,
                    height: 768,
                    alt: `Interfaccia ${moduleName}`,
                },
            ],
            locale: 'it_IT',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${moduleName} - Daisy Solution`,
            description: moduleData.tagline,
            images: [imageUrl],
        },
    }
}

// Get module data from moduleData.ts or fallback to default
function getModuleData(slug: string) {
    // Try to get from real module data
    const moduleData = getModuleBySlug(slug)
    if (moduleData) {
        return moduleData
    }

    // Fallback for modules not yet implemented (complete structure)
    return {
        slug: slug,
        name: moduleNames[slug as ModuleSlug] || 'Modulo',
        tagline: 'Funzionalita complete per la gestione retail',
        category: 'Operazioni Base' as const,
        categoryColor: 'blue',
        icon: '📦',
        tier: 1 as 1 | 2,
        overview: {
            intro: `Il modulo ${moduleNames[slug as ModuleSlug]} fornisce funzionalita avanzate per ottimizzare i processi aziendali.`,
            mainBenefits: [],
            stats: []
        },
        features: [],
        benefits: [],
        useCase: {
            title: 'Caso d\'uso in preparazione',
            customer: '',
            challenge: '',
            solution: '',
            results: []
        },
        integrations: [],
        faq: [],
        // v2 fields (optional)
        featureCategories: undefined,
        optionalConnections: undefined,
        screenshots: undefined,
        // v2.1 hero fields
        heroIcon: undefined,
        heroIntro: undefined,
    }
}

export default async function ModulePage({ params }: PageProps) {
    const { slug } = await params

    // Validate slug
    if (!moduleSlugs.includes(slug as ModuleSlug)) {
        notFound()
    }

    const moduleData = getModuleData(slug)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.daisysolution.it'

    // Breadcrumb data for JSON-LD
    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Prodotto', url: '/prodotto' },
        { name: 'Moduli', url: '/prodotto/moduli' },
        { name: moduleData.name, url: `/prodotto/moduli/${slug}` },
    ]

    // SoftwareApplication schema for JSON-LD
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `Daisy Solution - ${moduleData.name}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '990',
            priceCurrency: 'EUR',
            priceValidUntil: '2025-12-31',
        },
        description: moduleData.tagline,
        url: `${siteUrl}/prodotto/moduli/${slug}`,
        image: `${siteUrl}/screenshots/moduli/${slug}-hero.svg`,
        aggregateRating: moduleData.overview.stats?.[0] ? {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '150',
        } : undefined,
        featureList: moduleData.features.slice(0, 5).map(f => f.title).join(', '),
    }

    // Get HeroIcon component dynamically
    const HeroIcon = moduleData.heroIcon
        ? (HeroIcons as Record<string, React.ComponentType<{ className?: string }>>)[moduleData.heroIcon]
        : null

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Split Layout */}
            <div className="relative">
                <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
                <Container className="relative">
                    <Navbar />
                    <div className="pb-16 pt-16 sm:pb-24 sm:pt-24 md:pb-32 md:pt-32">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex items-center gap-2 text-sm text-gray-600">
                                {breadcrumbs.map((crumb, index) => (
                                    <li key={crumb.url} className="flex items-center gap-2">
                                        {index < breadcrumbs.length - 1 ? (
                                            <>
                                                <Link href={crumb.url} className="hover:text-brand-primary transition-colors">
                                                    {crumb.name}
                                                </Link>
                                                <span aria-hidden="true">/</span>
                                            </>
                                        ) : (
                                            <span aria-current="page" className="font-medium text-gray-950">
                                                {crumb.name}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        {/* Split Layout: Content + Screenshot */}
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            {/* LEFT: Content */}
                            <div>
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${categoryColorClasses[moduleData.categoryColor as CategoryColor] || categoryColorClasses.blue}`}>
                                        {moduleData.category}
                                    </span>
                                </div>

                                {/* Icon + Title */}
                                <div className="flex items-center gap-4 mb-4">
                                    {HeroIcon ? (
                                        <HeroIcon className="h-12 w-12 text-brand-primary" />
                                    ) : (
                                        <span className="text-5xl">{moduleData.icon}</span>
                                    )}
                                    <Heading as="h1" className="!text-4xl sm:!text-5xl">{moduleData.name}</Heading>
                                </div>

                                {/* Intro (heroIntro or tagline) */}
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {moduleData.heroIntro || moduleData.tagline}
                                </p>

                                {/* Main Benefits - Checkmark list */}
                                {moduleData.overview.mainBenefits.length > 0 && (
                                    <ul className="space-y-3 mb-8">
                                        {moduleData.overview.mainBenefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckIcon className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-gray-800">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* CTA Buttons */}
                                <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                                    <Button href={`/contatti?modulo=${slug}&source=module-hero-cta`}>
                                        Richiedi Demo
                                    </Button>
                                    <Button href="#funzionalita" variant="secondary">
                                        Esplora Funzionalità
                                    </Button>
                                </div>
                            </div>

                            {/* RIGHT: Screenshot */}
                            <div className="relative hidden lg:block">
                                <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-950/10">
                                    <Image
                                        src={`/screenshots/moduli/${slug}-hero.svg`}
                                        alt={`Interfaccia ${moduleData.name}`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <main>
                {/* Stats Grid Section */}
                {moduleData.overview.stats && moduleData.overview.stats.length > 0 && (
                    <div className="bg-gray-50 py-16">
                        <Container>
                            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                                {moduleData.overview.stats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center p-6 bg-white rounded-xl ring-1 ring-gray-950/5"
                                    >
                                        <div className="text-3xl sm:text-4xl font-bold text-brand-primary">
                                            {stat.value}
                                        </div>
                                        <div className="mt-2 text-sm font-semibold text-gray-900">
                                            {stat.label}
                                        </div>
                                        <div className="mt-1 text-xs text-gray-500">
                                            {stat.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </div>
                )}

                {/* Screenshot Gallery (v2) */}
                {moduleData.screenshots && moduleData.screenshots.length > 0 && (
                    <div className="py-16">
                        <Container>
                            <Subheading className="text-center">Interfaccia</Subheading>
                            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto mb-12">
                                Scopri l'interfaccia del modulo
                            </Heading>
                        </Container>
                        <ScreenshotGallery screenshots={moduleData.screenshots} />
                    </div>
                )}

                {/* Features Section */}
                {/* v2: FeatureCategories with tabs/accordion */}
                {moduleData.featureCategories && moduleData.featureCategories.length > 0 ? (
                    <div id="funzionalita" className="bg-gray-50 py-24 scroll-mt-16">
                        <Container>
                            <Subheading className="text-center">Funzionalita principali</Subheading>
                            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                                Tutto quello che ti serve, organizzato per categoria
                            </Heading>

                            <div className="mt-16">
                                <FeatureCategorySection categories={moduleData.featureCategories} />
                            </div>
                        </Container>
                    </div>
                ) : moduleData.features.length > 0 ? (
                    /* v1 fallback: flat features grid */
                    <div id="funzionalita" className="bg-gray-50 py-24 scroll-mt-16">
                        <Container>
                            <Subheading className="text-center">Funzionalita principali</Subheading>
                            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                                Tutto quello che ti serve per gestire al meglio
                            </Heading>

                            <div className="mt-16">
                                <FeatureGrid features={moduleData.features} columns={3} />
                            </div>
                        </Container>
                    </div>
                ) : null}

                {/* Optional Connections Section (v2) */}
                {moduleData.optionalConnections && moduleData.optionalConnections.length > 0 && (
                    <Container className="py-24">
                        <Subheading className="text-center">Estendi le funzionalita</Subheading>
                        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                            Collegamenti opzionali per potenziare il modulo
                        </Heading>
                        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                            Integra {moduleData.name} con applicazioni e servizi esterni per massimizzare l'efficienza operativa.
                        </p>

                        <div className="mt-16">
                            <OptionalConnectionsGrid connections={moduleData.optionalConnections} />
                        </div>
                    </Container>
                )}

                {/* Screenshot Hero (legacy - shown only if no gallery) */}
                {(!moduleData.screenshots || moduleData.screenshots.length === 0) && (
                    <Container className="py-24">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-5xl">
                                <div className="absolute -inset-2 rounded-2xl shadow-xl ring-1 ring-black/5" />
                                <Image
                                    src={`/screenshots/moduli/${slug}-hero.svg`}
                                    alt={`Interfaccia ${moduleData.name}`}
                                    width={1216}
                                    height={768}
                                    className="relative w-full h-auto rounded-2xl shadow-2xl ring-1 ring-gray-950/10"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <p className="mt-6 text-center text-sm text-gray-500">
                            Interfaccia principale del modulo {moduleData.name}
                        </p>
                    </Container>
                )}

                {/* Benefits Section - RIMOSSA (Fase 4: informazioni ridondanti con mainBenefits nell'Hero)
                   Il campo benefits[] rimane nei dati per retrocompatibilita con altri moduli */}

                {/* Integrations Section */}
                {moduleData.integrations && moduleData.integrations.length > 0 && (
                    <Container className="py-24" id="integrazioni">
                        <Subheading className="text-center">Integrazioni native</Subheading>
                        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                            Si integra perfettamente con altri moduli
                        </Heading>

                        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
                            {moduleData.integrations.map((integration, idx) => (
                                <Link
                                    key={idx}
                                    href={`/prodotto/moduli/${integration.slug}`}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-xl ring-1 ring-gray-950/5 hover:ring-brand-primary/50 hover:shadow-lg transition-all group"
                                    aria-label={`Vai al modulo ${integration.name}`}
                                >
                                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform" role="img" aria-label={integration.name}>
                                        🔗
                                    </div>
                                    <div className="text-sm font-semibold text-gray-950 text-center">
                                        {integration.name}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Back to modules link */}
                        <div className="mt-12 text-center">
                            <Link
                                href="/prodotto/moduli"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline"
                            >
                                ← Torna a tutti i moduli
                            </Link>
                        </div>
                    </Container>
                )}

                {/* FAQ Section - Split Layout */}
                {moduleData.faq && moduleData.faq.length > 0 && (
                    <div className="bg-gray-50 py-24">
                        <Container>
                            <Subheading className="text-center">Domande frequenti</Subheading>
                            <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                                Domande frequenti su {moduleData.name}
                            </Heading>

                            {/* Split Layout: FAQ + Contact Box */}
                            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                                {/* FAQ Accordion - 2 columns */}
                                <div className="lg:col-span-2">
                                    <FAQAccordion items={moduleData.faq} />
                                </div>

                                {/* Contact Box - 1 column */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white rounded-2xl p-8 text-center ring-1 ring-gray-950/5 sticky top-24">
                                        <HeroIcons.ChatBubbleLeftRightIcon className="w-12 h-12 text-brand-primary mx-auto" />
                                        <h3 className="mt-4 text-lg font-semibold text-gray-950">
                                            Hai altre domande?
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            Il nostro team e a disposizione per rispondere a qualsiasi dubbio su {moduleData.name}.
                                        </p>
                                        <Button
                                            href={`/contatti?modulo=${slug}&source=faq`}
                                            className="mt-6 w-full justify-center"
                                        >
                                            Contattaci
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                )}

                {/* CTA Final */}
                <div className="bg-gradient-to-br from-brand-primary to-blue-700 py-24">
                    <Container>
                        <div className="max-w-3xl mx-auto text-center">
                            <Heading as="h2" className="text-white">
                                Pronto a provare {moduleData.name}?
                            </Heading>
                            <p className="mt-6 text-lg text-white/90">
                                Richiedi una demo personalizzata e scopri come questo modulo può trasformare il tuo business.
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                                {/* Primary CTA: Solid white button */}
                                <Link
                                    href={`/contatti?modulo=${slug}&type=demo`}
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-gray-950 font-semibold shadow-lg hover:bg-gray-100 transition-colors"
                                >
                                    Richiedi Demo Personalizzata
                                </Link>
                                {/* Secondary CTA: Ghost button */}
                                <Link
                                    href="/prezzi"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-white font-semibold ring-1 ring-white/30 hover:bg-white/10 transition-colors"
                                >
                                    Vedi Prezzi
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </main>

            {/* JSON-LD Structured Data */}
            <JsonLd type="breadcrumb" data={{ breadcrumbs }} />
            {moduleData.faq && moduleData.faq.length > 0 && (
                <JsonLd type="faq" data={{ faqs: moduleData.faq }} />
            )}
            <Script
                id="software-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />

            <Footer />

            {/* Sticky CTA Mobile */}
            <StickyCTAMobile
                href={`/contatti?modulo=${slug}&source=sticky-mobile`}
                label="Richiedi Demo"
            />
        </div>
    )
}
