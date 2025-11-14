/**
 * Customer Stories Index Page
 *
 * Showcase dei clienti Daisy Solution con case study dettagliati
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
  title: 'Case Study Clienti - 270 Negozi Unieuro, 200+ Domex | Daisy Solution',
  description:
    'Scopri come Unieuro (270 affiliati), Domex (200+ associati), Gaer e Model Assistance hanno trasformato il retail con Daisy Solution. Case study, numeri reali, testimonianze.',
  keywords: [
    'case study Daisy',
    'clienti Unieuro',
    'Domex Expert',
    'gestionale retail',
    'success stories',
    'franchising',
  ],
}

const caseStudies = [
  {
    slug: 'unieuro',
    logo: '/loghi/unieuro.png',
    titolo: 'Unieuro 1Company',
    sottotitolo: '270 negozi affiliati gestiti',
    descrizione:
      'Progetto nazionale per affiliati Unieuro: 900+ postazioni, 400+ casse, sincronizzazione centrale-affiliati real-time per ordini, listini, promozioni, sell-out.',
    settore: 'Elettronica & Elettrodomestici',
    dimensione: 'Grande rete (270 PV)',
    moduli: ['Vendite', 'Magazzino', 'Acquisti', 'Promozioni', 'RAEE', 'Riparazioni'],
    anno: '2018',
    tag: ['Franchising', 'Nazionale', 'EDI'],
  },
  {
    slug: 'domex',
    logo: '/loghi/domex.png',
    titolo: 'Domex',
    sottotitolo: '200+ associati sincronizzati',
    descrizione:
      "Gruppo d'acquisto per insegne Expert ed ExpertGroup: gestione centralizzata visual merchandising con Fastlabel. Attivazione campagne promozionali real-time su tutta la rete.",
    settore: 'Elettrodomestici Multi-Insegna',
    dimensione: 'Gruppo acquisto (200+ PV)',
    moduli: ['Fastlabel', 'Cartelli', 'Promozioni'],
    anno: '2020',
    tag: ['Gruppo Acquisto', 'Visual Merchandising', 'Expert'],
  },
  {
    slug: 'gaer',
    logo: '/loghi/gaer.png',
    titolo: 'Gruppo Gaer',
    sottotitolo: '200+ negozi con totem interattivo',
    descrizione:
      'Catena elettrodomestici con innovazione cross-canale: totem interattivi nei PV collegati a Elecommerce per catalogo virtuale, pick & pay, assistenza vendita.',
    settore: 'Elettrodomestici',
    dimensione: 'Catena (200+ PV)',
    moduli: ['Elecommerce', 'Totem', 'Vendite', 'Magazzino'],
    anno: '2021',
    tag: ['Innovazione', 'Totem', 'Cross-canale'],
  },
  {
    slug: 'model-assistance',
    logo: '/loghi/model_assistance.png',
    titolo: 'Model Assistance',
    sottotitolo: '2000+ clienti Italia/estero',
    descrizione:
      'Distributore internazionale settore modellismo: portale B2B Daisy Cloud con catalogo online, caratteristiche tecniche, manuali, dichiarazioni conformità. Prova flessibilità piattaforma anche in settori non-eldom.',
    settore: 'Modellismo & Hobby',
    dimensione: 'Distribuzione B2B (2000+ clienti)',
    moduli: ['Portale B2B', 'Catalogo', 'Gestione ordini', 'Help desk'],
    anno: '2019',
    tag: ['B2B', 'Internazionale', 'Non-eldom'],
  },
]

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32">
          <Subheading>Customer Stories</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl">
            Storie di successo: dai piccoli negozi alle reti nazionali
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Da oltre <strong className="font-semibold text-gray-950">20 anni</strong> supportiamo la crescita
            di reti franchising, gruppi d'acquisto, catene e negozi indipendenti nel settore retail.
            Scopri come hanno trasformato il loro business con Daisy Solution.
          </p>
        </div>
      </Container>
    </div>
  )
}

function StatsBar() {
  return (
    <div className="bg-brand-primary py-12">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          <div>
            <div className="text-4xl font-bold text-white">270+</div>
            <div className="mt-2 text-sm text-white/90">Negozi Unieuro</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">200+</div>
            <div className="mt-2 text-sm text-white/90">Associati Domex</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">2000+</div>
            <div className="mt-2 text-sm text-white/90">Clienti Fastlabel</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white">20+</div>
            <div className="mt-2 text-sm text-white/90">Anni esperienza</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CaseStudyGrid() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Case Study Dettagliati</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Progetti reali, numeri verificabili
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/customer-stories/${cs.slug}`}
            className="group block rounded-2xl bg-white p-8 ring-1 ring-gray-950/5 transition hover:ring-gray-950/10"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img src={cs.logo} alt={cs.titolo} className="h-12 object-contain" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-950 group-hover:text-brand-primary transition">
                  {cs.titolo}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{cs.sottotitolo}</p>
              </div>
              <div className="text-gray-400 group-hover:text-brand-primary transition">
                →
              </div>
            </div>

            {/* Descrizione */}
            <p className="text-sm text-gray-700 leading-relaxed">{cs.descrizione}</p>

            {/* Metadata */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="font-medium text-gray-500">Settore</div>
                <div className="mt-1 text-gray-900">{cs.settore}</div>
              </div>
              <div>
                <div className="font-medium text-gray-500">Dimensione</div>
                <div className="mt-1 text-gray-900">{cs.dimensione}</div>
              </div>
            </div>

            {/* Moduli */}
            <div className="mt-4">
              <div className="text-xs font-medium text-gray-500 mb-2">Moduli principali</div>
              <div className="flex flex-wrap gap-2">
                {cs.moduli.map((mod) => (
                  <span
                    key={mod}
                    className="inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-primary"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.tag.map((t) => (
                <span
                  key={t}
                  className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 text-sm font-medium text-brand-primary group-hover:underline">
              Leggi il case study completo →
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}

function Testimonials() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">Cosa dicono i clienti</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          Testimonianze dirette
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <p className="text-gray-700 italic">
              "Con Daisy Solution abbiamo digitalizzato <strong>270 affiliati</strong> mantenendo
              controllo centrale su listini, promozioni e sell-out. Interconnessione perfetta."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/loghi/unieuro.png" alt="Unieuro" className="h-8 object-contain" />
              <div>
                <div className="text-sm font-semibold text-gray-950">Progetto 1Company</div>
                <div className="text-xs text-gray-600">Unieuro Affiliati</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <p className="text-gray-700 italic">
              "Fastlabel ci permette di attivare campagne promozionali su <strong>200+ negozi</strong> in
              pochi minuti. Controllo totale, zero errori."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/loghi/domex.png" alt="Domex" className="h-8 object-contain" />
              <div>
                <div className="text-sm font-semibold text-gray-950">Direzione Marketing</div>
                <div className="text-xs text-gray-600">Domex S.c.r.l.</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <p className="text-gray-700 italic">
              "Il totem interattivo collegato a Elecommerce ha rivoluzionato l'esperienza in-store.
              I clienti apprezzano la possibilità di esplorare tutto il catalogo."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/loghi/gaer.png" alt="Gaer" className="h-8 object-contain" />
              <div>
                <div className="text-sm font-semibold text-gray-950">Responsabile Innovazione</div>
                <div className="text-xs text-gray-600">Gruppo Gaer</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <p className="text-gray-700 italic">
              "Flessibilità unica: gestiamo <strong>2000+ clienti internazionali</strong> con portale B2B
              Daisy, anche in un settore specializzato come il modellismo."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/loghi/model_assistance.png"
                alt="Model Assistance"
                className="h-8 object-contain"
              />
              <div>
                <div className="text-sm font-semibold text-gray-950">CEO</div>
                <div className="text-xs text-gray-600">Model Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTA() {
  return (
    <div className="bg-gradient-to-br from-brand-primary to-blue-700 py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading as="h2" className="text-white">
            Diventa il prossimo success story
          </Heading>
          <p className="mt-6 text-lg text-white/90">
            Che tu gestisca 1 negozio o 270, Daisy Solution scala con te. Parliamo del tuo progetto.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contatti" variant="secondary">
              Richiedi Demo Personalizzata
            </Button>
            <Button
              href="/prodotto/moduli"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              Esplora i Moduli
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
        <StatsBar />
        <CaseStudyGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
