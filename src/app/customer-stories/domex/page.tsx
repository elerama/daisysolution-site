/**
 * Customer Story: Domex
 *
 * Gestione centralizzata visual merchandising per 200+ associati
 * Expert, ExpertGroup e insegne indipendenti con Fastlabel
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study Domex - 200+ Negozi Sincronizzati | Daisy Solution',
  description:
    'Domex gestisce 200+ associati (Expert, ExpertGroup, indipendenti) con Fastlabel: controllo centralizzato per attivare loghi, layout, slogan e campagne promozionali real-time su tutta la rete contemporaneamente.',
  keywords: [
    'case study Domex',
    'Fastlabel',
    'cartelli elettronici',
    'visual merchandising',
    '200 negozi',
    'Expert',
    'gestione centralizzata',
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
              src="/loghi/domex.png"
              alt="Domex"
              className="h-16 object-contain"
            />
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <Subheading className="text-brand-primary">Case Study</Subheading>
              <p className="text-sm text-gray-600 mt-1">Gruppo d'Acquisto Nazionale</p>
            </div>
          </div>
          <Heading as="h1" className="mt-4 max-w-4xl">
            200+ negozi con visual merchandising sincronizzato in tempo reale
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            <strong className="font-semibold text-gray-950">Domex S.c.r.l.</strong>, gruppo d'acquisto nazionale
            per insegne <strong>Expert, ExpertGroup e negozi indipendenti</strong>, coordina la comunicazione
            in-store di 200+ associati con <strong className="font-semibold text-gray-950">Fastlabel</strong>: la
            centrale attiva loghi, layout, slogan e campagne promozionali per tutta la rete o per singolo punto
            vendita con un click.
          </p>
        </div>
      </Container>
    </div>
  )
}

function Challenge() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading>La sfida</Subheading>
        <Heading as="h2" className="mt-4 max-w-3xl">
          Gestire 200+ negozi con insegne diverse mantenendo coerenza visiva
        </Heading>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <h3 className="text-lg font-semibold text-gray-950">Prima di Fastlabel</h3>
            <ul className="mt-6 space-y-3">
              {[
                'Ogni negozio stampava cartelli autonomamente',
                'Ritardo medio 2-3 giorni per nuove promozioni',
                'Errori frequenti su prezzi barrati e scadenze',
                'Impossibile lanciare campagne nazionali simultanee',
                'Costi elevati: stampante, carta, toner per ogni PV',
                'Nessun controllo centrale su messaggistica brand',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-red-500 mt-0.5">✗</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <h3 className="text-lg font-semibold text-gray-950">Con Fastlabel</h3>
            <ul className="mt-6 space-y-3">
              {[
                'Cartelli elettronici sincronizzati in tempo reale',
                'Attivazione campagne istantanea su tutta rete',
                'Prezzi barrati automatici da listini centrali',
                'Layout e loghi coerenti con brand positioning',
                'Zero costi stampa + eco-sostenibilità',
                'Controllo granulare: rete completa o singolo PV',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-green-600 mt-0.5">✓</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Solution() {
  return (
    <Container className="py-24">
      <Subheading>La soluzione</Subheading>
      <Heading as="h2" className="mt-4 max-w-3xl">
        Fastlabel: gestione centralizzata con flessibilità locale
      </Heading>

      <div className="mt-16 space-y-12">
        {/* Feature 1 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-950">
              Pannello di controllo centrale
            </h3>
            <p className="mt-4 text-gray-600">
              La sede Domex accede a un'interfaccia web da cui gestisce template cartelli, layout
              grafici, loghi insegne (Expert, ExpertGroup, locali), slogan e messaggistica. Con un
              solo click attiva una campagna su <strong>tutta la rete</strong> o seleziona singoli
              punti vendita.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Template multi-insegna (Expert, ExpertGroup, custom)',
                'Biblioteca loghi e font brand-compliant',
                'Schedulazione campagne con data inizio/fine',
                "Anteprima real-time prima dell'attivazione",
              ].map((ft) => (
                <li key={ft} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-brand-primary">→</span>
                  {ft}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-primary/10 to-blue-500/10 p-8">
            <div className="aspect-video flex items-center justify-center text-6xl">
              🖥️
            </div>
            <p className="mt-4 text-center text-sm font-medium text-gray-600">
              Dashboard centrale Fastlabel
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8">
            <div className="aspect-video flex items-center justify-center text-6xl">
              📱
            </div>
            <p className="mt-4 text-center text-sm font-medium text-gray-600">
              Cartelli elettronici nei punti vendita
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold text-gray-950">
              Aggiornamento automatico in-store
            </h3>
            <p className="mt-4 text-gray-600">
              Ogni punto vendita dispone di display elettronici (e-paper, LCD) collegati al cloud
              Fastlabel. Quando la centrale attiva una campagna, i cartelli si aggiornano
              <strong> automaticamente</strong> senza intervento del personale di negozio.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Sincronizzazione real-time via cloud',
                'Supporto multi-formato (e-paper, LCD, totem)',
                'QR code dinamici per landing page promozionali',
                'Integrazione con listini e promozioni Daisy ERP',
              ].map((ft) => (
                <li key={ft} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-brand-primary">→</span>
                  {ft}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

function Results() {
  return (
    <div className="bg-brand-primary py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Subheading className="text-white/90">Risultati misurabili</Subheading>
          <Heading as="h2" className="mt-4 text-white">
            Impatto operativo ed economico
          </Heading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="text-5xl font-bold text-white">2h → 5min</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Tempo attivazione promozione nazionale
            </div>
            <div className="mt-2 text-sm text-white/70">
              Da 2 ore manuali a 5 minuti automatici
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white">100%</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Uniformità messaggistica brand
            </div>
            <div className="mt-2 text-sm text-white/70">
              Zero difformità tra punti vendita
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white">-95%</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Riduzione errori prezzi barrati
            </div>
            <div className="mt-2 text-sm text-white/70">
              Automatizzazione elimina errore umano
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white">€12k/anno</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Risparmio costi stampa per PV
            </div>
            <div className="mt-2 text-sm text-white/70">
              Carta, toner, stampanti, manutenzione
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white">3x</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Aumento frequenza campagne
            </div>
            <div className="mt-2 text-sm text-white/70">
              Da 4 a 12 campagne/mese possibili
            </div>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-white">200+</div>
            <div className="mt-3 text-base font-medium text-white/90">
              Negozi sincronizzati
            </div>
            <div className="mt-2 text-sm text-white/70">
              Expert, ExpertGroup, indipendenti
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-lg text-white/90">
            "Con Fastlabel attiviamo campagne promozionali su 200 negozi in <strong className="text-white">pochi
              minuti</strong>, mantenendo il controllo su messaggistica e brand identity di ogni insegna."
          </p>
          <p className="mt-4 text-sm font-medium text-white/80">
            — Direzione Marketing, Domex S.c.r.l.
          </p>
        </div>
      </Container>
    </div>
  )
}

function UseCases() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Casi d'uso concreti</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Scenari tipici Domex con Fastlabel
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {[
          {
            icon: '🎯',
            titolo: 'Volantino nazionale Expert',
            desc: 'La centrale attiva il volantino quindicinale per tutti i negozi Expert/ExpertGroup. Prezzi barrati automatici, loghi insegna corretti, QR code per catalogo online.',
          },
          {
            icon: '⚡',
            titolo: 'Flash sale weekend',
            desc: 'Venerdì ore 18:00: attivazione promozione last-minute su 50 TV selezionati. Tutti i negozi ricevono cartelli aggiornati in 3 minuti.',
          },
          {
            icon: '🏷️',
            titolo: 'Personalizzazione locale',
            desc: 'Negozio affiliato lancia promozione specifica (es. "Inaugurazione nuova sede"). La centrale prepara template custom, attivabile solo per quel PV.',
          },
          {
            icon: '📅',
            titolo: 'Schedulazione automatica',
            desc: 'Campagne natalizie programmate con 2 settimane anticipo: attivazione automatica 1° dicembre, disattivazione 7 gennaio. Zero intervento manuale.',
          },
        ].map((uc) => (
          <div key={uc.titolo} className="rounded-2xl bg-white p-8 ring-1 ring-gray-950/5">
            <div className="text-4xl mb-4">{uc.icon}</div>
            <h3 className="text-lg font-semibold text-gray-950">{uc.titolo}</h3>
            <p className="mt-3 text-sm text-gray-600">{uc.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function CTA() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading as="h2">
            Vuoi lo stesso controllo sulla tua rete?
          </Heading>
          <p className="mt-6 text-lg text-gray-600">
            Fastlabel è ideale per gruppi d'acquisto, catene, franchising e consorzi che vogliono
            centralizzare la comunicazione visual mantenendo flessibilità locale.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/prodotto/fastlabel">
              Scopri Fastlabel
            </Button>
            <Button href="/contatti" variant="secondary">
              Richiedi Demo Personalizzata
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            <strong className="text-gray-700">2000+ utenti</strong> in tutta Italia si affidano a Fastlabel
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function DomexPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Challenge />
        <Solution />
        <Results />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
