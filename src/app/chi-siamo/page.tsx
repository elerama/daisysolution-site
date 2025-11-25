/**
 * Chi Siamo - Storia Elettrorama e Daisy Solution
 *
 * Contenuto basato su analisi elerama-site (2025-11-12):
 * - Fondata 2001, 20+ anni esperienza retail
 * - Mission: facilitare attività professionista, aiutare consumatore
 * - 3 pilastri: Know-how approfondito, Attenzione cliente, Innovazione progettuale
 * - Team giovane e dinamico
 * - Processo servizio 4 fasi
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
    CLIENTS,
    COMPANY,
    CONTACTS,
    HOURS,
    PRODUCTS,
    formatNumber,
} from '@/data/siteStats'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo - Elettrorama e Daisy Solution',
  description:
    'Elettrorama: fondata nel 2001, oltre 25 anni di esperienza nello sviluppo di soluzioni software per retail. Casa madre di Daisy Solution, la piattaforma scelta da 250+ affiliati Unieuro.',
  keywords: ['elettrorama', 'daisy solution', 'storia', 'chi siamo', 'esperienza retail'],
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="text-center">
              <Subheading className="text-brand-primary">
                La storia di Elettrorama
              </Subheading>
              <Heading as="h1" className="mt-4">
                {COMPANY.yearsExperience} anni di innovazione per il retail italiano
              </Heading>
              <Lead className="mt-6 max-w-3xl mx-auto">
                Nata nel 2001 dall'unione di professionisti con esperienza
                pluriennale nell'informatica e nel commercio, Elettrorama è oggi
                leader nello sviluppo di soluzioni software per il settore retail
                e distribuzione organizzata.
              </Lead>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function MissionSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 ring-1 ring-gray-950/5 sm:p-12">
          <Subheading className="text-brand-primary">La nostra mission</Subheading>
          <Heading as="h2" className="mt-4">
            Facilitare l'attività del professionista e aiutare il consumatore
          </Heading>
          <p className="mt-6 text-lg text-gray-700">
            Il nostro obiettivo è progettare <strong>soluzioni software innovative</strong> in grado di rispondere oggi alle richieste del mercato di domani.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Grazie a una struttura ben organizzata e all'utilizzo di strumenti web, Elettrorama si è affermata nella produzione di software di ultima generazione e nella gestione di una banca dati dedicata al settore degli elettrodomestici, il tutto supportato da un eccellente servizio di assistenza online e da un brillante staff commerciale.
          </p>
        </div>
      </div>
    </Container>
  )
}

function ThreePillarsSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <Subheading>Perché siamo differenti</Subheading>
        <Heading as="h2" className="mt-4">
          I nostri tre pilastri
        </Heading>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {/* Pilastro 1: Know-how */}
        <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-950/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
            🎓
          </div>
          <h3 className="text-xl font-semibold text-gray-950">
            Know-how approfondito
          </h3>
          <p className="mt-4 text-base text-gray-700">
            L'esperienza pluriennale e un know-how approfondito ci permettono di sviluppare soluzioni apprezzate da clienti in tutta Italia. Con la <strong>banca dati italiana più grande del settore Eldom</strong> (Eldomcat, {formatNumber(PRODUCTS.eldomcatArticles)} prodotti), siamo oggi leader nello sviluppo di prodotti per la gestione informatica del settore elettrodomestici.
          </p>
        </div>

        {/* Pilastro 2: Attenzione cliente */}
        <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-950/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
            🤝
          </div>
          <h3 className="text-xl font-semibold text-gray-950">
            Attenzione al cliente
          </h3>
          <p className="mt-4 text-base text-gray-700">
            Elettrorama si distingue per la consulenza professionale e l'assistenza sempre puntuale ed efficace. Seguiamo attentamente tutti i clienti prima, durante e dopo l'acquisto. Una serie di servizi dedicati, come il nostro <strong>help desk gestito da un team di esperti</strong>, ti accompagnano per qualsiasi necessità.
          </p>
        </div>

        {/* Pilastro 3: Innovazione */}
        <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-950/5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white text-2xl font-bold mb-6">
            💡
          </div>
          <h3 className="text-xl font-semibold text-gray-950">
            Innovazione progettuale
          </h3>
          <p className="mt-4 text-base text-gray-700">
            Progetti sempre nuovi e soluzioni inedite. Elettrorama studia oggi soluzioni in grado di rispondere efficacemente alle richieste di domani. Progettiamo e sviluppiamo di continuo, insieme ai nostri clienti, <strong>nuovi prodotti che soddisfano le loro richieste</strong> e le aspettative del consumatore.
          </p>
        </div>
      </div>
    </Container>
  )
}

function TeamSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <Subheading>Il nostro team</Subheading>
          <Heading as="h2" className="mt-4">
            Una realtà ricca e stimolante
          </Heading>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Elettrorama è un <strong>gruppo giovane e dinamico</strong>, una realtà ricca e stimolante da un punto di vista sia culturale che tecnologico. Investiamo continuamente nella formazione del nostro staff di tecnici e sviluppatori e crediamo che il benessere nell'organizzazione sia fondamentale per l'inventiva e lo sviluppo di prodotti nuovi.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Collaborare con Elettrorama significa interagire con un vero <strong>team di persone abituate a creare soluzioni informatiche</strong> in uno scenario di costanti cambiamenti.
          </p>
        </div>
      </Container>
    </div>
  )
}

function ServiceProcessSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <Subheading>Il nostro processo</Subheading>
        <Heading as="h2" className="mt-4">
          4 fasi per il successo del tuo progetto
        </Heading>
        <p className="mt-6 text-lg text-gray-700">
          Per ottenere risultati importanti e garantire soluzioni software che vanno oltre la semplice produzione, curiamo ogni aspetto del progetto.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Fase 1 */}
        <div className="flex gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-950">
              Analisi e Consulenza
            </h3>
            <p className="mt-2 text-base text-gray-700">
              Analisi tecnica preliminare del contesto, delle esigenze da soddisfare e dei problemi da risolvere per suggerire la soluzione migliore.
            </p>
          </div>
        </div>

        {/* Fase 2 */}
        <div className="flex gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-950">Progettazione</h3>
            <p className="mt-2 text-base text-gray-700">
              Sulla base dell'analisi, progettiamo la soluzione ideale: personalizzazione di software esistenti o sviluppo di una soluzione del tutto nuova.
            </p>
          </div>
        </div>

        {/* Fase 3 */}
        <div className="flex gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-950">Realizzazione</h3>
            <p className="mt-2 text-base text-gray-700">
              Implementazione, installazione e testing del prodotto software. Seguimento passo dopo passo durante l'installazione. Attenzione particolare nel collaudo per analizzare e correggere in tempi rapidi eventuali errori.
            </p>
          </div>
        </div>

        {/* Fase 4 */}
        <div className="flex gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white text-xl font-bold">
            4
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-950">
              Manutenzione e Assistenza
            </h3>
            <p className="mt-2 text-base text-gray-700">
              Cura attenta di ogni prodotto dopo il rilascio. Aggiornamenti necessari e manutenzione richiesta. Tecnici a disposizione per risolvere problemi riducendo al massimo i tempi di attesa.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

function HelpDeskSection() {
  return (
    <div className="bg-brand-primary py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Servizio clienti sempre disponibile
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Il nostro team è a vostra disposizione per informazioni e per risolvere eventuali problemi tecnici
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 text-left">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Help Desk</h3>
              <p className="mt-2 text-white/90">
                Tel: <strong>{CONTACTS.phoneHelpdesk}</strong>
              </p>
              <p className="mt-1 text-white/90">
                Email: <strong>{CONTACTS.emailHelpdesk}</strong>
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white">Disponibilità</h3>
              <p className="mt-2 text-white/90">
                <strong>{HOURS.weekdays}:</strong> {HOURS.weekdayMorning} / {HOURS.weekdayAfternoon}
              </p>
              <p className="mt-1 text-white/90">
                <strong>Sabato:</strong> {HOURS.saturday}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/contatti" variant="secondary">
              Contattaci
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <Subheading>I numeri di Elettrorama</Subheading>
        <Heading as="h2" className="mt-4">
          L'esperienza al servizio del retail
        </Heading>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
        <div>
          <div className="text-5xl font-bold text-brand-primary">{COMPANY.yearsExperience}</div>
          <div className="mt-2 text-sm font-medium text-gray-600">
            Anni di esperienza
          </div>
        </div>
        <div>
          <div className="text-5xl font-bold text-brand-primary">{CLIENTS.unieuroAffiliates}+</div>
          <div className="mt-2 text-sm font-medium text-gray-600">
            Affiliati Unieuro gestiti
          </div>
        </div>
        <div>
          <div className="text-5xl font-bold text-brand-primary">{CLIENTS.totalClients}+</div>
          <div className="mt-2 text-sm font-medium text-gray-600">
            Clienti serviti
          </div>
        </div>
        <div>
          <div className="text-5xl font-bold text-brand-primary">{formatNumber(PRODUCTS.eldomcatArticles)}</div>
          <div className="mt-2 text-sm font-medium text-gray-600">
            Articoli banca dati Eldomcat
          </div>
        </div>
      </div>
    </Container>
  )
}

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Heading as="h2">Scopri come possiamo aiutarti</Heading>
        <p className="mt-6 text-lg text-gray-700">
          Contattaci per conoscere meglio la nostra gamma di software. Il nostro team
          di esperti sarà felice di studiare la soluzione adatta alle tue esigenze.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contatti">Richiedi Informazioni</Button>
          <Button variant="secondary" href="/prodotto">
            Scopri Daisy Solution
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function ChiSiamoPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Hero />
      <MissionSection />
      <ThreePillarsSection />
      <TeamSection />
      <ServiceProcessSection />
      <StatsSection />
      <HelpDeskSection />
      <CTASection />
      <Footer />
    </main>
  )
}
