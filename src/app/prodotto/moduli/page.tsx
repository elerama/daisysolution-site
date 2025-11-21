/**
 * Prodotto → Moduli & Funzionalità
 *
 * Grid 3x2 con 6 moduli principali (strategy row 176)
 * Link "Vedi tutti i 41 moduli" per espansione futura
 * Ogni card: icona, titolo, descrizione, link scopri
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { modules } from '@/data/moduleData'
import { moduleSlugs } from '@/data/modulesIndex'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { ModuliGridWithFilters } from './moduli-grid-filters'

export const metadata: Metadata = {
  title: 'Moduli & Funzionalità - Daisy Solution ERP Retail',
  description:
    '19 moduli funzionali per gestire ogni aspetto del retail: vendite, cassa, magazzino, acquisti, e-commerce (300k articoli Eldomcat), riparazioni (Model Assistance), cartelli Fastlabel (2000+ clienti), promozioni, RAEE, liste regalo. Architettura modulare HMVC.',
  keywords: [
    'moduli gestionale retail',
    'ERP modulare',
    'vendite cassa POS',
    'magazzino multi-sede',
    'e-commerce integrato',
    'Eldomcat 300k articoli',
    'Fastlabel cartelli',
    'riparazioni laboratorio',
    'RAEE compliance',
  ],
}

/**
 * Hero Section
 */
function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32">
          <Subheading className="text-brand-primary">Moduli & Funzionalità</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl">
            {moduleSlugs.length} moduli per gestire ogni aspetto del retail
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Da vendite e cassa a magazzino multi-sede, acquisti con centrali integrate, e-commerce con 300k+ articoli Eldomcat,
            riparazioni Model Assistance, cartelli Fastlabel. <strong className="font-semibold text-gray-950">Architettura modulare HMVC:</strong> attiva
            solo ciò che ti serve, espandi quando cresci. Zero costi per moduli non utilizzati.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * 12 Moduli Principali - Grid 3x4
 * Con filtri interattivi per categoria
 */
function ModuliGrid() {
  return (
    <Container className="py-24">
      <ModuliGridWithFilters />

      {/* Tier 2 - 7 Moduli Aggiuntivi */}
      <div className="mt-24">
        <Subheading className="text-center">Altri {moduleSlugs.filter(slug => modules[slug].tier === 2).length} moduli specializzati</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          Funzionalità avanzate per ottimizzare ogni processo
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {moduleSlugs.filter(slug => modules[slug].tier === 2).map((slug) => {
            const moduleData = modules[slug]
            return {
              icon: moduleData.icon,
              title: moduleData.name,
              description: moduleData.tagline,
              href: `/prodotto/moduli/${slug}`,
            }
          }).map((modulo) => (
            <div
              key={modulo.title}
              className="flex flex-col p-6 bg-white rounded-xl ring-1 ring-gray-950/5 hover:ring-gray-950/10 transition-shadow"
            >
              <div className="text-4xl mb-4" role="img" aria-label={modulo.title}>{modulo.icon}</div>
              <h3 className="text-lg font-semibold text-gray-950">
                {modulo.title}
              </h3>
              <p className="mt-3 text-sm text-gray-700 flex-1">
                {modulo.description}
              </p>
              <div className="mt-4">
                <Link
                  href={modulo.href}
                  className="text-sm font-semibold text-brand-primary hover:underline"
                  aria-label={`Scopri il modulo ${modulo.title}`}
                >
                  Scopri di più →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contatti" variant="outline">
            Richiedi demo personalizzata
          </Button>
        </div>
      </div>
    </Container>
  )
}

/**
 * Sezione Benefici Modularità
 */
function BenefitsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">Vantaggi architettura modulare</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          Paga solo quello che usi, espandi quando serve
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Parti dal base</h3>
            <p className="mt-2 text-sm text-gray-600">
              Punto vendita + magazzino da 990€/anno. Operativo in 10 minuti.
            </p>
          </div>

          <div className="text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Aggiungi moduli</h3>
            <p className="mt-2 text-sm text-gray-600">
              E-commerce, marketplace, riparazioni. Attivi in 2 giorni.
            </p>
          </div>

          <div className="text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Scala la rete</h3>
            <p className="mt-2 text-sm text-gray-600">
              Replica configurazione su filiali. Case study Unieuro: 270 affiliati, 900 postazioni, 400 casse.
            </p>
          </div>

          <div className="text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary text-2xl font-bold mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Integra ecosistema</h3>
            <p className="mt-2 text-sm text-gray-600">
              Eldomcat, Elecommerce, Fastlabel. Dati sempre sincronizzati.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * CTA Integrazioni
 */
function IntegrationsCTA() {
  return (
    <Container className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Subheading>Ecosistema integrato</Subheading>
        <Heading as="h2" className="mt-4">
          Potenzia Daisy con integrazioni native
        </Heading>
        <p className="mt-6 text-lg text-gray-700">
          <strong>Eldomcat</strong> (300k+ articoli), <strong>Fastlabel</strong> (2000+ clienti cartelli), <strong>Elecommerce</strong> (marketplace Amazon/eBay),
          centrali Unieuro/Expert/Domex/Gaer, comparatori prezzi Google Shopping/Trovaprezzi. Setup in 2 giorni, non mesi.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/prodotto/integrazioni" className="btn-primary">
            Scopri Integrazioni
          </Button>
          <Button href="/contatti" variant="secondary">
            Richiedi Demo
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function ModuliPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ModuliGrid />
        <BenefitsSection />
        <IntegrationsCTA />
      </main>
      <Footer />
    </div>
  )
}
