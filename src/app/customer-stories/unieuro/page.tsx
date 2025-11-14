/**
 * Customer Story: Unieuro 1Company
 *
 * Case study flagship: 270 negozi affiliati, 900 postazioni, 400 casse
 * Progetto partito nel 2018 con gestionale verticale per rete franchising
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study Unieuro 1Company - 270 Negozi Affiliati | Daisy Solution',
  description:
    'Progetto 1Company: 270 negozi affiliati Unieuro gestiti con Daisy Solution. 900 postazioni, 400 casse, integrazione completa centrale-affiliati. Sincronizzazione ordini, listini, giacenze real-time.',
  keywords: [
    'case study Unieuro',
    'gestionale franchising',
    '270 negozi',
    'retail network',
    'centrale affiliati',
    'Unieuro affiliati',
    'Daisy Solution Unieuro',
  ],
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/loghi/unieuro.png"
              alt="Unieuro"
              className="h-16 object-contain"
            />
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <Subheading className="text-brand-primary">Case Study</Subheading>
              <p className="text-sm text-gray-600 mt-1">Progetto 1Company - Dal 2018</p>
            </div>
          </div>
          <Heading as="h1" className="mt-4 max-w-4xl">
            270 negozi affiliati Unieuro gestiti con un'unica piattaforma
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Il progetto <strong className="font-semibold text-gray-950">1Company</strong> fornisce a tutti i negozi affiliati
            Unieuro una soluzione gestionale verticale completa: cassa, vendite, magazzino, acquisti, promozioni,
            cartelli, RAEE, riparazioni. Interconnessione diretta con la centrale per ordini, listini,
            giacenze e sell-out real-time.
          </p>
        </div>
      </Container>
    </div>
  )
}

function StatsGrid() {
  return (
    <div className="bg-brand-primary py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div>
            <div className="text-6xl font-bold text-white">270</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Negozi affiliati attivi
            </div>
            <div className="mt-2 text-sm text-white/70">
              Rete nazionale capillare
            </div>
          </div>
          <div>
            <div className="text-6xl font-bold text-white">900+</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Postazioni operative
            </div>
            <div className="mt-2 text-sm text-white/70">
              Media 3-4 postazioni per negozio
            </div>
          </div>
          <div>
            <div className="text-6xl font-bold text-white">400+</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Casse collegate
            </div>
            <div className="mt-2 text-sm text-white/70">
              Scontrini fiscali sincronizzati
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Dal <strong className="font-semibold text-white">2018</strong>, Daisy Solution supporta la crescita
            della rete affiliati Unieuro con una piattaforma scalabile, stabile e sempre aggiornata.
          </p>
        </div>
      </Container>
    </div>
  )
}

function SolutionDetails() {
  return (
    <Container className="py-24">
      <Subheading>La soluzione</Subheading>
      <Heading as="h2" className="mt-4 max-w-3xl">
        Pacchetto verticale Unieuro con interconnessione centrale
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Moduli Inclusi */}
        <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-950">Moduli attivi</h3>
          <ul className="mt-6 space-y-3">
            {[
              'Cassa e scontrini fiscali',
              'Vendite (preventivi, ordini, fatture)',
              'Magazzino multi-sede con giacenze real-time',
              'Acquisti con integrazione EDI centrale',
              'Promozioni sincronizzate con volantino Unieuro',
              'Stampa cartelli con prezzi e caratteristiche',
              'RAEE compliance automatica',
              'Riparazioni e laboratorio',
              'Fidelity card e punti programma',
            ].map((modulo) => (
              <li key={modulo} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-brand-primary">✓</span>
                <span className="text-sm text-gray-700">{modulo}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interconnessione Centrale */}
        <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
          <h3 className="text-xl font-semibold text-gray-950">Integrazione centrale-affiliato</h3>
          <ul className="mt-6 space-y-3">
            {[
              'Ricezione bolle di carico automatiche',
              'Accesso catalogo completo centrale (85.000+ SKU)',
              'Visualizzazione listini e giacenze magazzini Unieuro',
              'Effettuazione ordini con tracciamento stato',
              'Ricezione variazioni prezzo in tempo reale',
              'Attivazione volantini/promozioni con un click',
              'Attivazione e gestione garanzie convenzionali',
              'Assegnazione e redimere punti fidelity card',
              'Scontistiche e coupon centralizzati',
              'Invio quotidiano dati vendita e giacenze per sell-out',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="flex-shrink-0 text-green-600">→</span>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

function Benefits() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">Benefici misurabili</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          Risultati tangibili per la rete franchising
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-brand-primary/10 text-3xl mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Velocità operativa</h3>
            <p className="mt-3 text-sm text-gray-600">
              Riduzione <strong className="text-gray-900">80% tempo</strong> gestione sell-out quotidiano
              grazie a invio automatico dati vendita/giacenze
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-green-500/10 text-3xl mb-4">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Sincronizzazione promozioni</h3>
            <p className="mt-3 text-sm text-gray-600">
              <strong className="text-gray-900">1 click</strong> per attivare volantino nazionale
              su tutti i 270 negozi contemporaneamente
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-blue-500/10 text-3xl mb-4">
              📊
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Visibilità giacenze</h3>
            <p className="mt-3 text-sm text-gray-600">
              Accesso real-time a giacenze <strong className="text-gray-900">magazzini centrali</strong> per
              ottimizzare ordini e ridurre rotture stock
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-orange-500/10 text-3xl mb-4">
              🔄
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Zero duplicazioni</h3>
            <p className="mt-3 text-sm text-gray-600">
              Catalogo, listini, garanzie gestiti <strong className="text-gray-900">centralmente</strong>.
              Affiliati non inseriscono dati manualmente
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-purple-500/10 text-3xl mb-4">
              🛡️
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Compliance automatica</h3>
            <p className="mt-3 text-sm text-gray-600">
              Gestione RAEE integrata con <strong className="text-gray-900">reportistica obbligatoria</strong> centralizzata
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center size-16 rounded-full bg-red-500/10 text-3xl mb-4">
              💪
            </div>
            <h3 className="text-lg font-semibold text-gray-950">Scalabilità provata</h3>
            <p className="mt-3 text-sm text-gray-600">
              Rete cresciuta da <strong className="text-gray-900">150 a 270 negozi</strong> senza
              necessità di re-platforming
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Timeline() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Timeline progetto</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Dal 2018 ad oggi: crescita continua
      </Heading>

      <div className="mt-16 max-w-3xl mx-auto">
        <div className="space-y-8">
          {[
            {
              anno: '2018',
              titolo: 'Avvio progetto 1Company',
              desc: 'Primi 50 negozi affiliati migrati su Daisy Solution con pacchetto verticale Unieuro',
            },
            {
              anno: '2019-2020',
              titolo: 'Espansione rete',
              desc: 'Rollout progressivo fino a 150 negozi. Integrazione EDI centrale completata.',
            },
            {
              anno: '2021-2022',
              titolo: 'Consolidamento nazionale',
              desc: 'Superata quota 200 negozi. Attivazione moduli promozioni sincronizzate e cartelli.',
            },
            {
              anno: '2023-2024',
              titolo: '270 negozi attivi',
              desc: 'Rete completa gestita con Daisy. 900+ postazioni operative, 400+ casse collegate.',
            },
            {
              anno: '2025',
              titolo: 'Evoluzione continua',
              desc: 'Nuove funzionalità rilasciate: fidelity card avanzata, analytics predittivi, app mobile DaisyCheck.',
            },
          ].map((milestone, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex size-16 items-center justify-center rounded-full bg-brand-primary text-white font-bold">
                  {milestone.anno.split('-')[0].slice(2)}
                </div>
              </div>
              <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-8">
                <h3 className="text-lg font-semibold text-gray-950">{milestone.titolo}</h3>
                <p className="mt-2 text-sm text-gray-600">{milestone.desc}</p>
                <p className="mt-1 text-xs font-medium text-brand-primary">{milestone.anno}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function CTA() {
  return (
    <div className="bg-gradient-to-br from-brand-primary to-blue-700 py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading as="h2" className="text-white">
            Vuoi replicare il successo di Unieuro?
          </Heading>
          <p className="mt-6 text-lg text-white/90">
            Daisy Solution è la scelta giusta per reti franchising, catene e gruppi d'acquisto
            che vogliono centralizzare la gestione mantenendo autonomia locale.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contatti" variant="secondary">
              Richiedi Demo per Rete Franchising
            </Button>
            <Button
              href="/customer-stories"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              Altri Case Study
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function UnieuroPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <StatsGrid />
        <SolutionDetails />
        <Benefits />
        <Timeline />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
