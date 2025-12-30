/**
 * Prodotto → Funzionalità
 *
 * Griglia unificata con tutte le 19 funzionalità
 * Filtri per categoria, stessa dignità visiva per tutti
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { moduleSlugs } from '@/data/modules'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { ModuliGridWithFilters } from './moduli-grid-filters'

export const metadata: Metadata = {
  title: 'Funzionalità - Daisy Solution ERP Retail',
  description:
    '19 funzionalità per gestire ogni aspetto del retail: vendite, cassa, magazzino, acquisti, e-commerce con 300k articoli Eldomcat, laboratorio riparazioni, cartelli e etichette, promozioni, RAEE, liste regalo. Architettura modulare: attiva solo ciò che serve.',
  keywords: [
    'funzionalità gestionale retail',
    'ERP modulare',
    'vendite cassa POS',
    'magazzino multi-sede',
    'e-commerce integrato',
    'Eldomcat 300k articoli',
    'etichette elettroniche',
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
          <Subheading className="text-brand-primary">Funzionalità</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl">
            {moduleSlugs.length} funzionalità per gestire ogni aspetto del retail
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Da vendite e cassa a magazzino multi-sede, acquisti con centrali integrate, e-commerce con 300k+ articoli Eldomcat,
            laboratorio riparazioni, cartelli ed etichette elettroniche. <strong className="font-semibold text-gray-950">Architettura modulare:</strong> attiva
            solo ciò che ti serve, espandi quando cresci. Zero costi per funzionalità non utilizzate.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Griglia Funzionalità Unificata
 * Tutte le 19 funzionalità in un'unica griglia con filtri per categoria
 */
function ModuliGrid() {
  return (
    <Container className="py-24">
      <ModuliGridWithFilters />

      <div className="mt-12 text-center">
        <Button href="/contatti" variant="outline">
          Richiedi demo personalizzata
        </Button>
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
            <h3 className="text-lg font-semibold text-gray-950">Aggiungi funzionalità</h3>
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
              Eldomcat, e-commerce, etichette ESL. Dati sempre sincronizzati.
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
          <strong>Eldomcat</strong> (300k+ articoli), <strong>etichette ESL</strong> (SES Imagotag, Delphi), <strong>e-commerce</strong> (marketplace Amazon/eBay),
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
