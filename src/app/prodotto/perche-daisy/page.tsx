/**
 * Prodotto → Perché Daisy Solution
 *
 * Differenziazione vs competitor con:
 * - Tabella comparativa dettagliata (strategy row 185)
 * - 8 motivi per sceglierlo (box iconizzati)
 * - Esperienza settore (20 anni, 270 Unieuro, 2000+ clienti)
 * - Testimonianze clienti
 * - Garanzie (supporto, aggiornamenti, formazione, migrazione)
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perché Daisy Solution - Differenziazione vs Competitor',
  description:
    '20 anni retail Italia, 270 Unieuro, integrazioni native centrali, Eldomcat incluso, SaaS o on-premise, multi-sede nativo. Confronto dettagliato vs gestionale generico e competitor.',
  keywords: [
    'confronto gestionale',
    'perché Daisy',
    'gestionale retail verticale',
    'SaaS vs on-premise',
    'multi-sede nativo',
    'integrazioni Unieuro Expert',
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
          <Subheading className="text-brand-primary">Perché Daisy Solution</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl">
            20 anni di esperienza retail, 270 Unieuro, 2000+ clienti
          </Heading>
          <p className="mt-6 max-w-3xl text-xl/8 font-medium text-gray-950/75">
            Verticale retail Italia. Integrazioni native Unieuro, Expert, Domex.
            Eldomcat 300k+ incluso. SaaS o on-premise a scelta. Multi-sede nativo per reti
            fino a 270 punti vendita. <strong className="font-semibold text-gray-950">Progettato per il retail italiano</strong>.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Tabella Comparativa Dettagliata
 * Strategy row 185: 12 criteri side-by-side
 */
function DetailedComparisonTable() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Confronto dettagliato</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Perché Daisy Solution è diverso
      </Heading>

      <div className="mt-16 overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="py-4 px-6 text-left text-base font-semibold text-gray-900">
                Aspetto
              </th>
              <th className="py-4 px-6 text-left text-base font-semibold text-gray-600">
                Gestionale Generico
              </th>
              <th className="py-4 px-6 text-left text-base font-semibold text-gray-600">
                Competitor Verticale
              </th>
              <th className="py-4 px-6 text-left text-base font-semibold text-brand-primary">
                Daisy Solution
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Settore</td>
              <td className="py-4 px-6 text-sm text-gray-600">Multi-industria</td>
              <td className="py-4 px-6 text-sm text-gray-600">Spesso non Italia</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Verticale retail Italia 20 anni
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Integrazioni centrali</td>
              <td className="py-4 px-6 text-sm text-gray-600">Custom, mesi</td>
              <td className="py-4 px-6 text-sm text-gray-600">Limitate</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Unieuro, Expert, Domex native
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">E-commerce</td>
              <td className="py-4 px-6 text-sm text-gray-600">Terze parti, disaccoppiato</td>
              <td className="py-4 px-6 text-sm text-gray-600">Separato</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Elecommerce integrato
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Banca dati prodotti</td>
              <td className="py-4 px-6 text-sm text-gray-600">Manuale</td>
              <td className="py-4 px-6 text-sm text-gray-600">Feed esterni a pagamento</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Eldomcat 300k+ incluso
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Deployment</td>
              <td className="py-4 px-6 text-sm text-gray-600">Solo on-premise</td>
              <td className="py-4 px-6 text-sm text-gray-600">Solo SaaS</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Scelta: SaaS o on-premise
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Reti multi-sede</td>
              <td className="py-4 px-6 text-sm text-gray-600">Addon complesso</td>
              <td className="py-4 px-6 text-sm text-gray-600">Complesso</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Progettato per reti (270 Unieuro)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Installazione</td>
              <td className="py-4 px-6 text-sm text-gray-600">Su ogni PC, giorni</td>
              <td className="py-4 px-6 text-sm text-gray-600">SaaS: veloce ma rigido</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Web browser, 10 minuti
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Licenze</td>
              <td className="py-4 px-6 text-sm text-gray-600">Per postazione, €€€</td>
              <td className="py-4 px-6 text-sm text-gray-600">Lock-in contrattuale</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Modulare da 990€/anno
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Manutenzione</td>
              <td className="py-4 px-6 text-sm text-gray-600">A carico cliente</td>
              <td className="py-4 px-6 text-sm text-gray-600">Inclusa ma vincolante</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Automatica, backup inclusi
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Scalabilità</td>
              <td className="py-4 px-6 text-sm text-gray-600">Limitata, re-ingegnerizzazione</td>
              <td className="py-4 px-6 text-sm text-gray-600">Fino a ~50 negozi</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ 1 a 270+ negozi provato
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Costi TCO</td>
              <td className="py-4 px-6 text-sm text-gray-600">Server, licenze, consulenze</td>
              <td className="py-4 px-6 text-sm text-gray-600">Medio-alto</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ -60% vs tradizionale
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Aggiornamenti</td>
              <td className="py-4 px-6 text-sm text-gray-600">A pagamento, settimane downtime</td>
              <td className="py-4 px-6 text-sm text-gray-600">Automatici ma forzati</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Continui, zero downtime
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Supporto</td>
              <td className="py-4 px-6 text-sm text-gray-600">Ticket, giorni risposta</td>
              <td className="py-4 px-6 text-sm text-gray-600">Email, orari limitati</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Help desk dedicato italiano
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Backup</td>
              <td className="py-4 px-6 text-sm text-gray-600">Manuale cliente</td>
              <td className="py-4 px-6 text-sm text-gray-600">Incluso ma recovery lento</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ Automatico, recovery immediato
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900">Mobile</td>
              <td className="py-4 px-6 text-sm text-gray-600">Non disponibile</td>
              <td className="py-4 px-6 text-sm text-gray-600">Web responsive basic</td>
              <td className="py-4 px-6 text-sm font-semibold text-gray-900">
                ✓ App native DaisyApp + DaisyCheck
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

/**
 * 8 Motivi per Scegliere Daisy
 * Box iconizzati 4x2 grid
 */
function EightReasonsSection() {
  const motivi = [
    {
      icon: '🧩',
      title: 'Modulare',
      description: 'Espandi funzionalità al bisogno. 41 moduli indipendenti, attiva solo quello che serve.',
    },
    {
      icon: '💰',
      title: 'Economico, SaaS',
      description: 'Paghi solo cosa usi. Da 990€/anno per modulo base. Zero investimento infrastruttura.',
    },
    {
      icon: '🔐',
      title: 'Sicuro',
      description: 'Permessi granulari RBAC 4 dimensioni: ruolo, società, punto vendita, modulo.',
    },
    {
      icon: '🌍',
      title: 'Multiaziendale/Multilingua',
      description: 'Gestisci più società, filiali, lingue, valute. Consolidato multi-tenant nativo.',
    },
    {
      icon: '🌐',
      title: 'Web based',
      description: 'Accesso da browser, zero installazioni. PC, tablet, smartphone. Sempre aggiornato.',
    },
    {
      icon: '☁️',
      title: 'Versatile, cloud',
      description: 'SaaS gestito da noi o on-premise self-hosted. Tu scegli deployment.',
    },
    {
      icon: '📱',
      title: 'Multibrowser',
      description: 'Chrome, Firefox, Safari, Edge. Ottimizzato mobile-first, responsive nativo.',
    },
    {
      icon: '🗄️',
      title: 'Multidatabase',
      description: 'MySQL, Oracle, SQL Server, PostgreSQL. Scegli il DB che preferisci.',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">8 motivi</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          Perché 2000+ clienti scelgono Daisy Solution
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {motivi.map((motivo) => (
            <div
              key={motivo.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl ring-1 ring-gray-950/5"
            >
              <div className="text-4xl mb-4">{motivo.icon}</div>
              <h3 className="text-lg font-semibold text-gray-950">{motivo.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{motivo.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * Esperienza Settore + Stats
 */
function ExperienceSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Esperienza retail</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        20 anni al servizio del retail italiano
      </Heading>

      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
        <div>
          <div className="text-5xl font-bold text-brand-primary">20</div>
          <div className="mt-2 text-sm font-medium text-gray-700">
            Anni di esperienza
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Dal 2005 nel retail elettronica
          </p>
        </div>
        <div>
          <div className="text-5xl font-bold text-brand-primary">270</div>
          <div className="mt-2 text-sm font-medium text-gray-700">
            Affiliati Unieuro
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Caso flagship multi-sede
          </p>
        </div>
        <div>
          <div className="text-5xl font-bold text-brand-primary">2000+</div>
          <div className="mt-2 text-sm font-medium text-gray-700">
            Clienti totali
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Negozi, catene, distribuzione
          </p>
        </div>
        <div>
          <div className="text-5xl font-bold text-brand-primary">300k</div>
          <div className="mt-2 text-sm font-medium text-gray-700">
            Prodotti Eldomcat
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Leader banca dati elettronica
          </p>
        </div>
      </div>

      <p className="mt-12 text-center text-lg text-gray-700 max-w-3xl mx-auto">
        Elettrorama S.r.l., fondata nel 2005, è leader nel software gestionale per retail
        elettronica, telefonia, informatica. <strong className="text-gray-950">Partner certificato
          delle principali reti italiane</strong>: Unieuro, Expert, Domex, Gaer, Trend.
      </p>
    </Container>
  )
}

/**
 * Garanzie
 */
function GuaranteesSection() {
  return (
    <div className="bg-brand-primary py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <Heading as="h2" className="text-white">
            Garanzie incluse
          </Heading>
          <p className="mt-6 text-lg text-white/90">
            Supporto help desk dedicato, aggiornamenti continui, formazione iniziale,
            migrazione assistita da altri gestionali. <strong className="text-white">Zero rischi</strong>.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="text-left p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-white">Supporto help desk</h3>
              <p className="mt-2 text-sm text-white/80">
                Team italiano dedicato. Ticket, telefono, remote assistance. Orari estesi.
              </p>
            </div>

            <div className="text-left p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-white">Aggiornamenti continui</h3>
              <p className="mt-2 text-sm text-white/80">
                Bug fix, feature, integrazioni nuove centrali. Sempre inclusi, zero costi extra.
              </p>
            </div>

            <div className="text-left p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-white">Formazione iniziale</h3>
              <p className="mt-2 text-sm text-white/80">
                Onboarding guidato 10 minuti. Training operatori. Documentazione completa.
              </p>
            </div>

            <div className="text-left p-6 bg-white/10 rounded-xl">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-semibold text-white">Migrazione assistita</h3>
              <p className="mt-2 text-sm text-white/80">
                Import dati da altro gestionale. Mapping automatico. Test pre-go-live.
              </p>
            </div>
          </div>
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
        <Subheading>Pronto per la demo?</Subheading>
        <Heading as="h2" className="mt-4">
          Richiedi confronto personalizzato vs. tuo gestionale attuale
        </Heading>
        <p className="mt-6 text-lg text-gray-700">
          Analisi gratuita: mappiamo i tuoi processi attuali, mostriamo come Daisy li migliora.
          Nessun impegno, solo valore.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contatti" className="btn-primary">
            Richiedi Confronto Gratuito
          </Button>
          <Button href="/customer-stories" variant="secondary">
            Leggi Case Study
          </Button>
          <Button href="/prezzi" variant="outline">
            Vedi Prezzi
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function PercheDaisyPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <DetailedComparisonTable />
        <EightReasonsSection />
        <ExperienceSection />
        <GuaranteesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
