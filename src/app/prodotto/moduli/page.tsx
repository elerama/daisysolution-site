/**
 * Prodotto → Moduli & Funzionalità
 *
 * Grid 3x2 con 6 moduli principali (strategy row 176)
 * Link "Vedi tutti i 41 moduli" per espansione futura
 * Ogni card: icona, titolo, descrizione, link scopri
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Moduli & Funzionalità - Daisy Solution',
  description:
    '41 moduli funzionali per gestire ogni aspetto del retail: vendite, cassa, magazzino, acquisti, promozioni, e-commerce, riparazioni, statistiche. Attiva solo quello che serve.',
  keywords: [
    'moduli gestionale',
    'vendite retail',
    'magazzino',
    'acquisti fornitori',
    'cassa POS',
    'statistiche BI',
    'e-commerce',
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
            41 moduli per gestire ogni aspetto del retail
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Da vendite e cassa a magazzino, acquisti, promozioni, e-commerce, riparazioni,
            statistiche. Architettura modulare HMVC: attiva solo ciò che ti serve, espandi
            quando cresci. <strong className="font-semibold text-gray-950">Zero costi per feature non necessarie</strong>.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * 6 Moduli Hero - Simple 3x2 Grid
 * Strategy row 176: Vendite, Magazzino, Acquisti, Cassa/POS, Statistiche, Liste Regalo
 */
function ModuliGrid() {
  const moduli = [
    {
      icon: '🛒',
      title: 'Vendite & Cassa',
      description:
        'Preventivi, ordini, fatture. Scontrini POS integrato. Gestione acconti, mezzi pagamento, buoni spesa, fidelity card. Modalità offline per continuità.',
      href: '#vendite',
    },
    {
      icon: '📦',
      title: 'Magazzino & Inventari',
      description:
        'Giacenze real-time multi-sede. Movimenti automatici, inventari rapidi con DaisyCheck. Ubicazioni, lotti, seriali, etichette. Rifornimenti automatici.',
      href: '#magazzino',
    },
    {
      icon: '🏭',
      title: 'Acquisti & Fornitori',
      description:
        'Ordini fornitori, bolle carico, fatture acquisto. Integrazione centrali Unieuro/Expert/Domex. Gestione reso, sconti, condizioni pagamento.',
      href: '#acquisti',
    },
    {
      icon: '💳',
      title: 'Cassa & POS',
      description:
        'Scontrini fiscali, chiusura cassa, gestione turni. DaisyEDI integrazione POS bancari. Modalità offline: vendi anche senza connessione.',
      href: '#cassa',
    },
    {
      icon: '📊',
      title: 'Statistiche & Analytics',
      description:
        'Report vendite, marginalità, rotazione, top/flop prodotti. Dashboard real-time. Export multi-formato. Analisi ABC, comparazioni periodo.',
      href: '#statistiche',
    },
    {
      icon: '🎁',
      title: 'Liste Regalo',
      description:
        'Gestione completa liste nozze. Tracking regali consegnati, ritirati, disponibili. Stampa buoni, inviti, cartellini. Integrazione e-commerce.',
      href: '#liste-regalo',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading className="text-center">I 6 moduli core</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Funzionalità essenziali per ogni negozio
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {moduli.map((modulo) => (
          <div
            key={modulo.title}
            className="flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5 hover:ring-gray-950/10 transition-shadow"
          >
            <div className="text-5xl mb-6">{modulo.icon}</div>
            <h3 className="text-xl font-semibold text-gray-950">
              {modulo.title}
            </h3>
            <p className="mt-4 text-base text-gray-700 flex-1">
              {modulo.description}
            </p>
            <div className="mt-6">
              <Link
                href={modulo.href}
                className="text-sm font-semibold text-brand-primary hover:underline"
              >
                Scopri di più →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Oltre ai 6 moduli core, Daisy Solution offre altri <strong>35 moduli specializzati</strong>:
          promozioni, marketplace, riparazioni, RAEE, EDI, etichette elettroniche, confronto prezzi,
          B2B, secondhand, e molto altro.
        </p>
        <Button href="/contatti" variant="outline">
          Richiedi lista completa 41 moduli
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
              Replica configurazione su filiali. Gestisci 270+ negozi.
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
          eBay, Amazon, etichette elettroniche, Fastlabel, comparatori prezzi, centrali Unieuro/Expert.
          Setup in 2 giorni, non mesi.
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
