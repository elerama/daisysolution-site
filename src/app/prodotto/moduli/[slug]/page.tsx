/**
 * Dynamic Module Page Template
 * /prodotto/moduli/[slug]
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { JsonLd } from '@/components/json-ld'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { StickyCTAMobile } from '@/components/sticky-cta-mobile'
import { Heading, Subheading } from '@/components/text'
import { type CategoryColor, getModuleBySlug } from '@/data/moduleData'
import { moduleNames, moduleSlugs, type ModuleSlug } from '@/data/modulesIndex'
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
    tagline: 'Funzionalità complete per la gestione retail',
    category: 'Operazioni Base' as const,
    categoryColor: 'blue',
    icon: '📦',
    tier: 1 as 1 | 2,
    overview: {
      intro: `Il modulo ${moduleNames[slug as ModuleSlug]} fornisce funzionalità avanzate per ottimizzare i processi aziendali.`,
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
        <Container className="relative">
          <Navbar />
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32">
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

            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${categoryColorClasses[moduleData.categoryColor as CategoryColor] || categoryColorClasses.blue}`}>
                {moduleData.category}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-6 mb-6">
              <div className="text-7xl">{moduleData.icon}</div>
              <div className="flex-1">
                <Heading as="h1">{moduleData.name}</Heading>
                <p className="mt-4 text-xl/8 font-medium text-gray-950/75 max-w-3xl">
                  {moduleData.tagline}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button href={`/contatti?modulo=${slug}&source=module-hero-cta`}>
                Richiedi Demo Modulo
              </Button>
              <Button href="#integrazioni" variant="secondary">
                Vedi Integrazioni
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <main>
        {/* Overview Section */}
        <Container className="py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {moduleData.overview.intro}
              </p>
            </div>

            {/* Right: Stats */}
            {moduleData.overview.stats && moduleData.overview.stats.length > 0 && (
              <div className="bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-2xl p-8">
                {moduleData.overview.stats.map((stat, idx) => (
                  <div key={idx} className={idx > 0 ? 'mt-8 pt-8 border-t border-brand-primary/20' : ''}>
                    <div className="text-sm font-semibold text-brand-primary uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-4xl font-bold text-gray-950">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>

        {/* Features Grid */}
        {moduleData.features.length > 0 && (
          <div className="bg-gray-50 py-24">
            <Container>
              <Subheading className="text-center">Funzionalità principali</Subheading>
              <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Tutto quello che ti serve per gestire al meglio
              </Heading>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {moduleData.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col p-6 bg-white rounded-xl ring-1 ring-gray-950/5"
                  >
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        )}

        {/* Screenshot Hero */}
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

        {/* Benefits Section */}
        {moduleData.benefits.length > 0 && (
          <div className="bg-gray-50 py-24">
            <Container>
              <Subheading className="text-center">Benefici concreti</Subheading>
              <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Risultati misurabili per il tuo business
              </Heading>

              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {moduleData.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600 text-2xl">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-950">
                        {benefit.title}
                      </h3>
                      {benefit.metric && (
                        <div className="mt-2 text-2xl font-bold text-brand-primary">
                          {benefit.metric}
                        </div>
                      )}
                      <p className="mt-3 text-gray-700">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        )}

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

        {/* FAQ Section */}
        {moduleData.faq && moduleData.faq.length > 0 && (
          <div className="bg-gray-50 py-24">
            <Container>
              <Subheading className="text-center">Domande frequenti</Subheading>
              <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
                Tutto quello che devi sapere
              </Heading>

              <div className="mt-16 max-w-3xl mx-auto">
                <FAQAccordion items={moduleData.faq} />
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
                <Button href={`/contatti?modulo=${slug}&type=demo`} variant="secondary">
                  Richiedi Demo Personalizzata
                </Button>
                <Button
                  href="/prodotto/moduli"
                  className="bg-white/10 text-white border-white hover:bg-white/20"
                >
                  Vedi Tutti i Moduli
                </Button>
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
