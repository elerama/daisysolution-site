/**
 * Customer Stories - Daisy Solution
 *
 * Struttura (strategy v1.1 rows 192-194):
 * 1. Hero Customer Stories grid
 * 2. Case Study Unieuro (flagship 270 affiliati)
 * 3. Case Study Model Assistance (testimonial con large avatar)
 * 4. Altri case studies grid
 * 5. CTA Richiedi Soluzione Simile
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Icon } from '@/components/icon'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Stories - Daisy Solution | Case Study Unieuro, Expert, Domex',
  description: '270 affiliati Unieuro, Expert, Domex, Gaer: scopri come catene e distribuzione organizzata gestiscono vendite, magazzino, e-commerce con Daisy Solution. Case study reali.',
  keywords: [
    'case study Unieuro',
    'customer stories retail',
    '270 negozi Daisy',
    'testimonianze clienti',
    'success story gestionale',
    'Elettrorama referenze',
  ],
}

/**
 * Hero Customer Stories
 */
function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32 text-center">
          <Subheading className="text-brand-primary">Customer Stories</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl mx-auto">
            2000+ clienti si affidano a Daisy Solution
          </Heading>
          <p className="mt-6 max-w-3xl mx-auto text-xl/8 font-medium text-gray-950/75">
            Da <strong className="font-semibold text-gray-950">negozi singoli a catene con 270 punti vendita</strong>.
            Scopri come Unieuro, Expert, Domex, Gaer gestiscono vendite, magazzino, marketplace con Daisy.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Case Study Unieuro - Flagship
 * Strategy row 193: "Prominent with grid" (UI Blocks)
 */
function UnieuroCaseStudy() {
  const stats = [
    { number: '270', label: 'Affiliati Unieuro' },
    { number: '900', label: 'Postazioni Attive' },
    { number: '400', label: 'Casse Simultanee' },
    { number: '99.9%', label: 'Uptime Garantito' },
  ]

  const modules = [
    'Vendite & Cassa',
    'Magazzino & Inventari',
    'Acquisti Fornitori',
    'Promozioni & Marketing',
    'Stampa Cartelli Prezzi',
    'RAEE (Rifiuti Elettrici)',
    'Riparazioni & Assistenza',
    'Liste Regalo',
  ]

  const integrations = [
    'Carico bolle automatico da centrale',
    'Catalogo prodotti sincronizzato',
    'Listini prezzi real-time',
    'Ordini a centrale con disponibilità',
    'Variazioni prezzi volantino',
    'Gestione garanzie estese',
    'Fidelity card nazionale',
    'Sell-out giornaliero automatico',
  ]

  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
            <Icon name="trophy" className="size-5" />
            Flagship Case Study
          </div>

          <Heading as="h2" className="mb-6">
            Progetto Unieuro 1Company: 270 affiliati su piattaforma unica
          </Heading>

          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-950">Unieuro</strong>, leader della grande distribuzione organizzata nel
              settore elettronica ed elettrodomestici in Italia, gestisce la propria rete di <strong>150+ punti vendita
                diretti</strong> e <strong>80+ affiliati</strong> su un'unica installazione Daisy Solution.
            </p>
            <p>
              Il progetto <strong className="text-gray-950">"Unieuro 1Company"</strong>, avviato nel 2018 da Elettrorama,
              ha unificato la gestione retail di centinaia di negozi indipendenti con un sistema centralizzato,
              garantendo omogeneità operativa e scalabilità.
            </p>
            <p>
              Ogni affiliato utilizza quotidianamente Daisy per vendite, magazzino, cassa, acquisti, riparazioni,
              RAEE, promozioni, con interconnessione automatica alla centrale per ordini, listini, bolle.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-primary">{stat.number}</div>
                <div className="mt-1 text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-950 mb-4">Moduli Utilizzati</h3>
            <div className="grid grid-cols-2 gap-2">
              {modules.map((module) => (
                <div key={module} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-brand-primary">✓</span>
                  {module}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-950 mb-4">Interconnessione Centrale</h3>
            <ul className="space-y-2">
              {integrations.map((integration) => (
                <li key={integration} className="flex gap-3 items-start">
                  <span className="text-brand-primary text-sm mt-0.5">→</span>
                  <span className="text-sm text-gray-700">{integration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-700 italic">
              "La piattaforma Daisy ci permette di gestire 270 affiliati con la stessa efficienza operativa
              dei punti vendita diretti. Automazione totale su ordini, listini, promozioni."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">
                U
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-950">Responsabile IT Unieuro</div>
                <div className="text-xs text-gray-600">2018-presente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

/**
 * Case Study Model Assistance - Testimonial con Large Avatar
 * Strategy row 194: "With large avatar" (UI Blocks)
 */
function ModelAssistanceCaseStudy() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Subheading>Innovazione B2B</Subheading>
            <Heading as="h2">Model Assistance: totem interattivi e portale 2000+ clienti</Heading>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 ring-1 ring-gray-950/5">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Large Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-4xl font-bold ring-4 ring-white shadow-xl">
                  MA
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl font-medium text-gray-950 leading-relaxed mb-6">
                  "Daisy Solution è il cuore del nostro business B2B. Gestiamo 2000+ clienti, 85.000 SKU,
                  portale e-commerce, totem interattivi in negozio. Tutto integrato, zero duplicazioni dati."
                </blockquote>

                <div className="mb-6">
                  <div className="font-semibold text-gray-950">CEO Model Assistance</div>
                  <div className="text-sm text-gray-600">
                    Distribuzione B2B Elettronica & Telefonia
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">2000+</div>
                    <div className="text-xs text-gray-600 mt-1">Clienti B2B</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">85k</div>
                    <div className="text-xs text-gray-600 mt-1">SKU Gestiti</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">24/7</div>
                    <div className="text-xs text-gray-600 mt-1">Portale Ordini</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-950 mb-4">Funzionalità Chiave</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <span className="text-brand-primary">→</span>
                  <span className="text-sm text-gray-700">
                    <strong>Totem interattivi</strong>: Pick & Pay self-service con sincronizzazione real-time
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand-primary">→</span>
                  <span className="text-sm text-gray-700">
                    <strong>Portale B2B 24/7</strong>: Ordini clienti con disponibilità live e carrello
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand-primary">→</span>
                  <span className="text-sm text-gray-700">
                    <strong>Integrazione Eldomcat</strong>: Banca dati 300k prodotti automatica
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-brand-primary">→</span>
                  <span className="text-sm text-gray-700">
                    <strong>Multi-listino</strong>: Prezzi personalizzati per ogni cliente B2B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Altri Case Studies Grid
 */
function OtherCaseStudies() {
  const cases = [
    {
      icon: 'building' as const,
      client: 'Domex',
      sector: 'Distribuzione Organizzata',
      description: '200+ negozi affiliati gestiti con FastLabel centralizzato per visual marketing omogeneo.',
      highlights: ['200+ affiliati', 'Stampa cartelli centralizzata', 'Rollout rapido promozioni'],
    },
    {
      icon: 'wrench' as const,
      client: 'Gaer',
      sector: 'Centrale D\'Acquisto',
      description: 'Portale B2B prodotti, totem interattivi pick & pay, integrazione logistica.',
      highlights: ['Portale 24/7', 'Totem self-service', 'Controllo governance'],
    },
    {
      icon: 'shopping-bag' as const,
      client: 'Carrubba S.r.l.',
      sector: 'Affiliato Unieuro',
      description: '2 punti vendita con gestione completa retail + integrazione centrale automatica.',
      highlights: ['Vendite + Cassa', 'Carico bolle automatico', 'Zero errori inventario'],
    },
    {
      icon: 'globe' as const,
      client: 'Te.se.c.',
      sector: 'E-commerce B2C',
      description: 'Integrazione Elecommerce per vendita online con sincronizzazione giacenze real-time.',
      highlights: ['E-commerce integrato', 'Magazzino unico', 'Ordini web→cassa'],
    },
    {
      icon: 'lightbulb' as const,
      client: 'Upset Design',
      sector: 'Illuminazione',
      description: 'Settore non-eldom con personalizzazioni verticali per catalogo illuminotecnica.',
      highlights: ['Settore custom', 'Catalogo personalizzato', 'Multi-magazzino'],
    },
    {
      icon: 'chart-pie' as const,
      client: 'Elettrorama',
      sector: 'GDO Elettronica',
      description: 'Deployment multi-anno con uptime 99.9% garantito. Partner storico Elettrorama.',
      highlights: ['20 anni esperienza', '99.9% uptime', 'Supporto dedicato'],
    },
  ]

  return (
    <Container className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Subheading>Altri clienti</Subheading>
        <Heading as="h2">Storie di successo in diversi settori retail</Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseStudy) => (
          <div
            key={caseStudy.client}
            className="flex flex-col p-6 bg-white rounded-2xl ring-1 ring-gray-950/5"
          >
            <div className="text-[#0081BE] mb-4">
              <Icon name={caseStudy.icon} className="size-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-950 mb-2">{caseStudy.client}</h3>
            <div className="text-xs text-brand-primary font-semibold mb-3">{caseStudy.sector}</div>
            <p className="text-sm text-gray-700 mb-6 flex-1">{caseStudy.description}</p>

            <ul className="space-y-2 border-t border-gray-200 pt-4">
              {caseStudy.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 items-start">
                  <span className="text-brand-primary text-xs">✓</span>
                  <span className="text-xs text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
          <Subheading className="text-white">Vuoi risultati simili?</Subheading>
          <Heading as="h2" className="mt-4 text-white">
            Richiedi soluzione personalizzata per il tuo business
          </Heading>
          <p className="mt-6 text-lg text-white/90">
            Analizziamo il tuo caso specifico e ti proponiamo architettura, moduli, integrazioni ottimali.
            Consulenza gratuita, preventivo in 24 ore.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contatti"
              className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Richiedi Consulenza Gratuita
            </Button>
            <Button
              href="/prezzi"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Vedi Prezzi & Piani
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function CustomerStoriesPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <UnieuroCaseStudy />
        <ModelAssistanceCaseStudy />
        <OtherCaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
