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
            19 moduli per gestire ogni aspetto del retail
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
 * Dati da intelligence docs: numeri reali, integrazioni specifiche, claim supportati
 */
function ModuliGrid() {
  const moduli = [
    {
      icon: '🛒',
      title: 'Vendite & Cassa',
      description:
        'Preventivi, ordini, DDT, fatture, scontrini POS. Fidelity card, buoni spesa, acconti. Modalità offline: vendi anche senza connessione internet.',
      href: '#vendite',
    },
    {
      icon: '📦',
      title: 'Magazzino Multi-Sede',
      description:
        'Giacenze real-time per negozio/magazzino. Inventari rapidi con barcode scanner. Trasferimenti inter-sede, ubicazioni, lotti, seriali. Rifornimenti automatici.',
      href: '#magazzino',
    },
    {
      icon: '🏭',
      title: 'Acquisti & EDI',
      description:
        'Ordini fornitori con integrazione EDI centrali Unieuro, Expert, Domex, Gaer. Ricezione merce automatica, fatture passive, gestione resi.',
      href: '#acquisti',
    },
    {
      icon: '🗄️',
      title: 'Banca Dati & Eldomcat',
      description:
        '300.000+ articoli con foto e caratteristiche tecniche. 8 compilazioni diverse: schede prodotto, SEO, volantini, cartelli. Aggiornamento automatico.',
      href: '#banca-dati',
    },
    {
      icon: '🛍️',
      title: 'E-commerce B2B/B2C',
      description:
        'Elecommerce integrato con ERP. Marketplace Amazon/eBay automatici. Feed comparatori prezzi. Pagamenti Banca Sella, PayPal. Catalogo sincronizzato.',
      href: '#ecommerce',
    },
    {
      icon: '🏷️',
      title: 'Cartelli Fastlabel',
      description:
        '2000+ clienti attivi. Stampa cartelli con caratteristiche Eldomcat, prezzi barrati, promozioni. Campagne sincronizzate multi-sede. Gestione centralizzata insegne.',
      href: '#fastlabel',
    },
    {
      icon: '🔧',
      title: 'Riparazioni & Laboratorio',
      description:
        'Accettazione, tracking interventi, ricambi, preventivi. Integrazione Model Assistance (2000+ clienti help desk). Garanzie convenzionali/estese. SMS notifiche.',
      href: '#riparazioni',
    },
    {
      icon: '🎯',
      title: 'Promozioni Multi-Canale',
      description:
        'Campagne promozionali sincronizzate: negozi, e-commerce, marketplace. Sconti, bundle 3x2, prezzi barrati automatici. Coupon e codici sconto.',
      href: '#promozioni',
    },
    {
      icon: '♻️',
      title: 'RAEE & Compliance',
      description:
        'Gestione contributi ambientali automatica. Registro ritiro, smaltimento CDC. Reportistica obbligatoria. Alert scadenze. Multi-CDC (Ecodom, Remedia).',
      href: '#raee',
    },
    {
      icon: '🎁',
      title: 'Liste Regalo',
      description:
        'Liste nozze, nascita, eventi con portale web. Tracking contributi, articoli acquistati/rimanenti. Notifiche sposi. Integrazione e-commerce.',
      href: '#liste-regalo',
    },
    {
      icon: '📊',
      title: 'Statistiche & BI',
      description:
        'Dashboard real-time KPI. Report vendite, marginalità, rotazione. Analisi ABC, top/flop prodotti. Export Excel, PDF. Comparazioni periodo.',
      href: '#statistiche',
    },
    {
      icon: '🔄',
      title: 'Import/Export & Webservice',
      description:
        'API REST per integrazioni B2B. Import listini fornitori automatici. Export fatture elettroniche XML. Webhook eventi. Documentazione Swagger.',
      href: '#webservice',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading className="text-center">I 12 moduli principali</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Funzionalità complete per gestire il retail moderno
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
          Oltre ai 12 moduli principali, Daisy Solution include <strong>7 moduli aggiuntivi</strong>:
          Contabilità (prima nota, IVA, scadenzari), Contratti (assistenza ricorrente), Comunicazioni (email/SMS automatici),
          Garanzie (registro certificati), Navigator (dashboard personalizzabili), Ordini (B2B tracking), Planning (previsione fabbisogni ABC).
        </p>
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
