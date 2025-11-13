/**
 * Prodotto → Integrazioni
 *
 * Ecosistema integrato Daisy Solution:
 * - Schema visuale centrale
 * - Eldomcat (banca dati 300k+ prodotti)
 * - Elecommerce (e-commerce sincronizzato)
 * - Fastlabel (stampa cartelli controllo centralizzato)
 * - App Mobile (DaisyApp, DaisyCheck)
 * - Centrali/Piattaforme (Unieuro, Expert, Domex, eBay, Amazon)
 * - Grid 3x3 integrazioni (strategy row 179)
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Icon } from '@/components/icon'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrazioni - Daisy Solution | Ecosistema Completo',
  description:
    'Ecosistema integrato: Eldomcat (300k+ prodotti), Elecommerce (e-commerce sincronizzato), Fastlabel (stampa cartelli), eBay, Amazon, ESL, centrali Unieuro/Expert. Setup 2 giorni.',
  keywords: [
    'integrazioni gestionale',
    'Eldomcat',
    'Elecommerce',
    'Fastlabel',
    'eBay integrazione',
    'Amazon marketplace',
    'etichette elettroniche',
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
          <Subheading className="text-brand-primary">Integrazioni</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl">
            Un&rsquo;unica fonte dati, zero duplicazioni
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Ecosistema completo: banca dati prodotti, e-commerce sincronizzato, stampa cartelli
            centralizzata, marketplace eBay/Amazon, app mobile, centrali Unieuro/Expert/Domex.
            <strong className="font-semibold text-gray-950"> Setup in 2 giorni, non mesi</strong>.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Schema Ecosistema Visuale
 * Infografica con Daisy al centro + integrazioni attorno
 */
function EcosystemDiagram() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Ecosistema</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Daisy Solution al centro, tutto sincronizzato
      </Heading>

      <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* TODO: Sostituire con infografica SVG reale */}
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl ring-1 ring-gray-950/5 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center size-32 rounded-full bg-brand-primary text-white text-3xl font-bold mb-4">
                Daisy
              </div>
              <p className="text-lg text-gray-700 max-w-md mx-auto">
                Integrazioni native con Eldomcat, Elecommerce, Fastlabel, eBay, Amazon,
                ESL, App Mobile, Centrali. Flusso dati bidirezionale real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          <strong className="text-gray-900">Architettura API-first</strong>:
          ogni integrazione comunica via REST API o webhook real-time. Catalogo, prezzi,
          giacenze, ordini sempre sincronizzati. Zero digitazione manuale.
        </p>
      </div>
    </Container>
  )
}

/**
 * Grid 3x3 Integrazioni Principali
 * Strategy row 179: Centered 2x2 grid responsive
 */
function IntegrationsGrid() {
  const integrazioni = [
    {
      icon: '📚',
      nome: 'Eldomcat',
      pitch: '300.000+ prodotti con foto e caratteristiche tecniche',
      href: '#eldomcat',
    },
    {
      icon: '🛍️',
      nome: 'Elecommerce',
      pitch: 'E-commerce sincronizzato: ordini web trattati come ordini negozio',
      href: '#elecommerce',
    },
    {
      icon: '🏷️',
      nome: 'Fastlabel',
      pitch: 'Stampa cartelli con controllo centralizzato su 100+ negozi',
      href: '#fastlabel',
    },
    {
      icon: '🌐',
      nome: 'eBay',
      pitch: 'Setup in 2 giorni: sincronizza catalogo, ordini, giacenze',
      href: '#ebay',
    },
    {
      icon: '📦',
      nome: 'Amazon',
      pitch: 'Marketplace integrato: gestisci ordini Amazon da Daisy',
      href: '#amazon',
    },
    {
      icon: '🔖',
      nome: 'ESL Etichette',
      pitch: 'Etichette elettroniche: aggiorna prezzi 270 negozi in tempo reale',
      href: '#esl',
    },
    {
      icon: '📱',
      nome: 'App Mobile',
      pitch: 'DaisyApp + DaisyCheck: catalogo, giacenze, inventari da smartphone',
      href: '#app-mobile',
    },
    {
      icon: '🏢',
      nome: 'Centrali',
      pitch: 'Unieuro, Expert, Domex: bolle automatiche, ordini diretti, sell-out',
      href: '#centrali',
    },
    {
      icon: '⚖️',
      nome: 'Comparatori',
      pitch: 'Sincronizza prezzi con Trovaprezzi, Idealo, Google Shopping',
      href: '#comparatori',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">9 integrazioni native</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          Ecosistema completo per il retail moderno
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrazioni.map((int) => (
            <div
              key={int.nome}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl ring-1 ring-gray-950/5 hover:ring-brand-primary/20 transition-all"
            >
              <div className="text-4xl mb-4">{int.icon}</div>
              <h3 className="text-lg font-semibold text-gray-950">{int.nome}</h3>
              <p className="mt-2 text-sm text-gray-600">{int.pitch}</p>
              <Link
                href={int.href}
                className="mt-4 text-sm font-semibold text-brand-primary hover:underline"
              >
                Scopri →
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * Sezione Eldomcat - With Product Screenshot Panel
 * Strategy row 180: descrizione + screenshot interfaccia catalogo
 */
function EldomcatSection() {
  const compilations = [
    { name: 'Scheda articolo', desc: 'Caratteristiche discorsive lettura facilitata' },
    { name: 'Specifiche tecniche', desc: 'Tabelle confronto categorie' },
    { name: 'Ricerca avanzata', desc: 'Filtri per caratteristiche' },
    { name: 'Descrizioni gestionali', desc: 'Ordini e fatture aggregate' },
    { name: 'Descrizioni SEO', desc: 'Ottimizzate per motori ricerca' },
    { name: 'Cartelli prezzo', desc: 'Stampa in-store formattata' },
    { name: 'Volantini', desc: 'Cataloghi prodotti marketing' },
    { name: 'Descrizioni discorsive', desc: 'Presentazione testuale integrata' },
  ]

  return (
    <Container className="py-24">
      <div id="eldomcat" className="space-y-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Testo */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <Icon name="book-open" className="size-10 text-[#0081BE]" />
              <Subheading>Eldomcat</Subheading>
            </div>
            <Heading as="h2">
              300.000+ prodotti con foto e caratteristiche
            </Heading>
            <p className="mt-6 text-lg text-gray-700">
              Banca dati italiana più grande settore eldom. Integrazione catalogo nativa con Daisy Solution.
              <strong> Zero digitazione manuale schede prodotto</strong>. 8 compilazioni personalizzabili.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <div className="text-[#0081BE]"><Icon name="sparkles" className="size-6" /></div>
                <div>
                  <h4 className="font-semibold text-gray-950">Sempre aggiornato</h4>
                  <p className="text-sm text-gray-600">
                    Novità marchi automatiche. Foto HD, descrizioni, caratteristiche tecniche.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#0081BE]"><Icon name="paintbrush" className="size-6" /></div>
                <div>
                  <h4 className="font-semibold text-gray-950">Personalizzazione totale</h4>
                  <p className="text-sm text-gray-600">
                    Modifica descrizioni, aggiungi campi custom, composizione contenuti SEO unici.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[#0081BE]"><Icon name="cube" className="size-6" /></div>
                <div>
                  <h4 className="font-semibold text-gray-950">Prodotti su richiesta</h4>
                  <p className="text-sm text-gray-600">
                    Servizio on-demand: caricamento dati prodotti non presenti per copertura 100% catalogo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Screenshot */}
          <div className="flex items-center">
            <div className="rounded-2xl border-4 border-gray-200 shadow-2xl overflow-hidden">
              <Screenshot
                width={1216}
                height={768}
                src="/screenshots/eldomcat-catalogo.png"
                className="w-full"
                alt="Interfaccia Eldomcat con filtri e catalogo prodotti"
              />
            </div>
            {/* TODO: Sostituire con screenshot reale interfaccia Eldomcat */}
          </div>
        </div>

        {/* 8 Compilazioni Grid */}
        <div>
          <Heading as="h3" className="text-2xl mb-6 text-center">
            8 Compilazioni Multiple per Ogni Esigenza
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {compilations.map((comp, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-sm font-semibold text-gray-900">{comp.name}</div>
                <div className="mt-1 text-xs text-gray-600">{comp.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            Risparmi <strong>75.000 ore</strong> vs inserimento manuale (300k articoli × 15min/articolo)
          </p>
        </div>
      </div>
    </Container>
  )
}

/**
 * Sezione App Mobile - Centered con beneficio chiave
 */
function AppMobileSection() {
  return (
    <div id="app-mobile" className="bg-brand-primary py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="text-5xl mb-6">📱</div>
          <Heading as="h2" className="text-white">
            DaisyApp + DaisyCheck: il gestionale in tasca
          </Heading>
          <p className="mt-6 text-lg text-white/90">
            <strong className="font-semibold text-white">DaisyApp</strong>: catalogo in mobilità,
            giacenze real-time, stampa cartelli da smartphone.
            <br />
            <strong className="font-semibold text-white">DaisyCheck</strong>: inventari rapidi
            con barcode scanner. <strong className="text-white">Inventario in 15 minuti vs. 2 ore manuale</strong>.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="https://play.google.com/store"
              className="bg-white text-brand-primary hover:bg-gray-100"
            >
              Download Play Store
            </Button>
            <Button
              href="#video-demo-app"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Guarda Video Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Centrali/Piattaforme - Logo Cloud
 * 270 affiliati Unieuro ricevono bolle in automatico
 */
function CentraliSection() {
  return (
    <Container className="py-24">
      <div id="centrali" className="text-center">
        <Subheading>Centrali & Piattaforme</Subheading>
        <Heading as="h2" className="mt-4 max-w-3xl mx-auto">
          Integrazione nativa reti Unieuro, Expert, Domex, Gaer, Trend
        </Heading>

        <LogoCloud className="mt-12">
          {/* TODO: Loghi Unieuro, Expert, Domex, Gaer, Trend */}
        </LogoCloud>

        <p className="mt-12 text-lg text-gray-700 max-w-2xl mx-auto">
          <strong className="text-gray-950">270 affiliati Unieuro</strong> ricevono bolle carico
          automatico ogni giorno. Ordini diretti, sell-out real-time, promozioni coordinate.
          Zero digitazione manuale, massima efficienza.
        </p>

        <div className="mt-10">
          <Button href="/customer-stories" variant="outline">
            Leggi Case Study Unieuro →
          </Button>
        </div>
      </div>
    </Container>
  )
}

/**
 * CTA Finale
 */
function FinalCTA() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-2 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <Subheading>Pronto per integrare?</Subheading>
          <Heading as="h2" className="mt-4">
            Setup in 2 giorni, supporto dedicato incluso
          </Heading>
          <p className="mt-6 text-lg text-gray-700">
            Team tecnico esperto ti affianca dall&rsquo;analisi al go-live. eBay operativo in 48h,
            Eldomcat in 24h. Formazione inclusa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contatti" className="btn-primary">
              Richiedi Demo Integrazioni
            </Button>
            <Button href="/prodotto/perche-daisy" variant="secondary">
              Perché Scegliere Daisy
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function IntegrazioniPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <EcosystemDiagram />
        <IntegrationsGrid />
        <EldomcatSection />
        <AppMobileSection />
        <CentraliSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
