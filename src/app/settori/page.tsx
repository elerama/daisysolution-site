/**
 * Settori - Daisy Solution
 *
 * Struttura (strategy v1.1 row 187):
 * 1. Hero "With cards" - 4 settori target
 * 2. Overview benefici cross-settore
 * 3. CTA approfondimenti
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Settori - Daisy Solution | Retail Elettronica, Telefonia, Informatica',
  description:
    'Soluzioni Daisy per ogni tipo di retail: negozi singoli, catene, distribuzione organizzata. Specializzati in elettronica di consumo, telefonia, informatica, casalinghi.',
  keywords: [
    'gestionale retail',
    'negozi elettronica',
    'catene retail',
    'distribuzione organizzata',
    'affiliati Unieuro',
    'gestionale telefonia',
  ],
}

/**
 * Hero con 4 Card Settori
 * Strategy row 187: "With cards" (UI Blocks)
 */
function HeroWithCards() {
  const settori = [
    {
      icon: '🏪',
      title: 'Negozi Singoli',
      description: 'Gestionale completo per punto vendita indipendente. Da €990/anno.',
      href: '/settori/negozi-singoli',
      benefits: ['Setup 2 giorni', 'SaaS gestito', 'Formazione inclusa'],
    },
    {
      icon: '🏢',
      title: 'Catene & Affiliazioni',
      description: '5-270 punti vendita. Multi-sede nativo, condivisione giacenze.',
      href: '/settori/catene',
      benefits: ['270 Unieuro', 'Promozioni sincronizzate', 'Dashboard consolidata'],
    },
    {
      icon: '🏭',
      title: 'Distribuzione Organizzata',
      description: 'Centrali d\'acquisto, piattaforme logistiche, gruppi franchising.',
      href: '/settori/distribuzione',
      benefits: ['Portale B2B', 'EDI automatici', 'Controllo governance'],
    },
    {
      icon: '🔧',
      title: 'Altri Settori',
      description: 'Casalinghi, illuminazione, giocattoli. Personalizzazioni verticali.',
      href: '/settori/altri-settori',
      benefits: ['Moduli custom', 'Integrazione ERP', 'Consulenza dedicata'],
    },
  ]

  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Subheading className="text-brand-primary">Settori & Casi d&rsquo;Uso</Subheading>
            <Heading as="h1" className="mt-4">
              Soluzioni per ogni tipo di retail
            </Heading>
            <p className="mt-6 text-xl/8 font-medium text-gray-950/75">
              20 anni di esperienza nel settore <strong className="font-semibold text-gray-950">elettronica di consumo</strong>.
              Daisy Solution si adatta a negozi singoli, catene multi-sede, distribuzione organizzata.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {settori.map((settore) => (
              <Link
                key={settore.title}
                href={settore.href}
                className="group flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5 hover:ring-brand-primary/30 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{settore.icon}</div>
                <h3 className="text-xl font-bold text-gray-950 mb-3 group-hover:text-brand-primary transition-colors">
                  {settore.title}
                </h3>
                <p className="text-sm text-gray-700 mb-6 flex-1">{settore.description}</p>

                <ul className="space-y-2 mb-6">
                  {settore.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 items-start">
                      <span className="text-brand-primary text-sm">✓</span>
                      <span className="text-xs text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm font-semibold text-brand-primary group-hover:underline">
                  Scopri di più →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Overview Benefici Cross-Settore
 */
function CrossSectorBenefits() {
  const benefits = [
    {
      icon: '🧩',
      title: 'Modulare per Definizione',
      description:
        'Parti con 3 moduli base (Vendite, Magazzino, Cassa), aggiungi e-commerce, marketplace, analytics quando cresci. Nessun costo per funzionalità inutilizzate.',
    },
    {
      icon: '📊',
      title: 'Statistiche Real-Time',
      description:
        'Dashboard vendite, top prodotti, marginalità. Decisioni basate su dati concreti, non su intuizioni. Export Excel per analisi avanzate.',
    },
    {
      icon: '🌐',
      title: 'Multi-Sede Nativo',
      description:
        'Da 1 a 270 negozi su stessa piattaforma. Condivisione giacenze, ordini a centrale, statistiche aggregate. Zero complessità aggiuntiva.',
    },
    {
      icon: '🔐',
      title: 'Permessi Granulari',
      description:
        'RBAC 4 dimensioni: ruolo, società, punto vendita, modulo. Ogni utente vede solo ciò che deve vedere. Audit trail operazioni critiche.',
    },
  ]

  return (
    <Container className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Subheading>Tecnologia comune</Subheading>
        <Heading as="h2">4 vantaggi che accomunano tutti i settori</Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-3xl">
              {benefit.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-950 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

/**
 * Sezione Integrazioni Verticali
 */
function VerticalIntegrations() {
  const integrations = [
    'Eldomcat 300k+ prodotti elettronica',
    'Centrali GDO (Unieuro, Expert, Domex, Gaer, Trend)',
    'Marketplace eBay/Amazon nativi',
    'Etichette elettroniche ESL',
    'POS fiscali, bilance, lettori barcode',
    'E-commerce B2B/B2C (Elecommerce)',
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Subheading>Ecosistema completo</Subheading>
          <Heading as="h2">Integrazioni native per retail tecnologico</Heading>
          <p className="mt-4 text-base text-gray-700">
            Zero sviluppo custom necessario per le integrazioni più comuni del settore elettronica/informatica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="flex items-center gap-3 p-4 bg-white rounded-lg ring-1 ring-gray-950/5"
            >
              <span className="text-brand-primary text-xl">✓</span>
              <span className="text-sm font-medium text-gray-950">{integration}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/prodotto/integrazioni">Vedi Tutte le Integrazioni</Button>
        </div>
      </Container>
    </div>
  )
}

/**
 * CTA Finale
 */
function FinalCTA() {
  return (
    <Container className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Subheading>Non sei sicuro quale soluzione fa per te?</Subheading>
        <Heading as="h2" className="mt-4">
          Parla con un esperto del settore retail
        </Heading>
        <p className="mt-6 text-lg text-gray-700">
          Il nostro team commerciale analizzerà le tue esigenze specifiche (numero negozi, postazioni,
          integrazioni necessarie) e ti proporrà la soluzione ottimale. Consulenza gratuita, nessun impegno.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contatti" className="px-8 py-4 text-lg">
            Richiedi Consulenza Gratuita
          </Button>
          <Button href="/settori/customer-stories" variant="outline" className="px-8 py-4 text-lg">
            Leggi Case Study
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function SettoriPage() {
  return (
    <div className="overflow-hidden">
      <HeroWithCards />
      <main>
        <CrossSectorBenefits />
        <VerticalIntegrations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
