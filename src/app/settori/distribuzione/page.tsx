import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Gradient } from '@/components/gradient';
import { JsonLd, commonBreadcrumbs } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { Heading, Subheading } from '@/components/text';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Distribuzione Organizzata - Piattaforma Centrale & Affiliati | Daisy Solution',
  description:
    'Soluzione ERP per centrali d\'acquisto, piattaforme logistiche, gruppi affiliati. Sell-out real-time, EDI integrato, portale B2B. Case study Domex, Gaer.',
  openGraph: {
    title: 'Distribuzione Organizzata - Centrale & Affiliati | Daisy Solution',
    description:
      'Piattaforma unificata per gestione rete affiliati: visibilità sell-out, integrazioni EDI, portale B2B 24/7. Onboarding rapido, standardizzazione processi.',
  },
};

/**
 * Distribuzione Organizzata Detail Page
 * Target: centrali d'acquisto, piattaforme logistiche, gruppi affiliati
 * Content: pain points, unified platform solution, EDI integrations, Domex/Gaer cases
 * Implements B2B supply chain management FNC requirements
 */
export default function DistribuzioneOrganizzataPage() {
  return (
    <>
      <JsonLd type="organization" />
      <JsonLd type="breadcrumb" data={{ breadcrumbs: commonBreadcrumbs.settoriDistribuzione }} />
      <Navbar />
      <main>
        <Gradient className="relative">
          {/* Hero Section */}
          <Container className="relative py-24">
            <div className="max-w-3xl">
              <Heading as="h1" className="mb-6">
                Piattaforma per Distribuzione Organizzata
              </Heading>
              <Subheading className="mb-8">
                Gestisci centrale d&rsquo;acquisto, piattaforma logistica o gruppo affiliati? Daisy
                Solution è la piattaforma ERP unificata per controllare sell-out real-time,
                standardizzare processi rete, integrare gestionali eterogenei, accelerare
                onboarding nuovi affiliati.
              </Subheading>
              <div className="flex flex-wrap gap-4">
                <Button href="/contatti">Richiedi Demo Piattaforma</Button>
                <Button href="#benefits" variant="secondary">
                  Vedi Benefici
                </Button>
              </div>
            </div>
          </Container>
        </Gradient>

        {/* Pain Points Section */}
        <Container className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Le Sfide della Distribuzione Organizzata</Subheading>
            <Heading as="h2" className="mb-6">
              Complessità gestione rete affiliati
            </Heading>
            <p className="text-lg text-gray-600">
              Centrali d&rsquo;acquisto e piattaforme logistiche devono coordinare decine o centinaia di
              affiliati con sistemi eterogenei. Senza piattaforma unificata, emergono colli di
              bottiglia strategici.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PainPointCard
              icon="📊"
              title="Visibilità limitata su sell-out affiliati"
              description="Dati vendita arrivano a fine mese via Excel, impossibile reagire a trend emergenti, decisioni di approvvigionamento ritardate."
            />
            <PainPointCard
              icon="🔧"
              title="Complessità integrazione gestionali eterogenei"
              description="Affiliati usano sistemi diversi (SAP, Oracle, custom), integrazioni EDI richiedono sviluppi custom 30-50k€ per affiliato."
            />
            <PainPointCard
              icon="📦"
              title="Gestione assortimenti differenziati"
              description="Filiali Lombardia necessitano prodotti diversi da Sicilia, centrale non ha strumenti per personalizzare listini per zona/insegna."
            />
            <PainPointCard
              icon="🚀"
              title="Onboarding lento nuovi affiliati"
              description="Inserire nuovo affiliato richiede 3-6 mesi (setup IT, training, integrazione), ritardo time-to-market espansione rete."
            />
            <PainPointCard
              icon="📋"
              title="Standardizzazione processi difficile"
              description="Ogni affiliato opera con processi propri, controllo governance debole, conformità brand a rischio, audit complessi."
            />
          </div>
        </Container>

        {/* Solution Section */}
        <div className="bg-gray-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">La Soluzione Daisy Platform</Subheading>
              <Heading as="h2" className="mb-6">
                Piattaforma unificata per tutta la rete
              </Heading>
              <p className="text-lg text-gray-600">
                Centralizza controllo governance, standardizza processi operativi, integra
                automatismi EDI, mantieni flessibilità affiliati. Un unico sistema per centrale +
                affiliati.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Unified Platform Features */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Piattaforma Unificata
                </h3>
                <ul className="space-y-4">
                  <SolutionItem
                    title="Stessa soluzione per tutti affiliati"
                    description="Deployment standardizzato Daisy su rete: formazione una tantum, supporto centralizzato, aggiornamenti sincroni."
                  />
                  <SolutionItem
                    title="Database centrale + segregazione affiliati"
                    description="Visibilità dati: centrale accede a consolidato rete, affiliato vede solo propri dati (GDPR-compliant)."
                  />
                  <SolutionItem
                    title="Rollout rapido nuovi PV"
                    description="Nuovo affiliato operativo in 2-3 giorni: provisioning automatico, import catalogo, configurazione permessi."
                  />
                  <SolutionItem
                    title="Controllo versione software unificato"
                    description="Tutti affiliati su stessa versione Daisy, zero frammentazione, compatibilità integrazioni garantita."
                  />
                </ul>
              </div>

              {/* EDI & Integration */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Integrazioni EDI Native
                </h3>
                <ul className="space-y-4">
                  <SolutionItem
                    title="Web service RESTful"
                    description="API JSON per integrazione AS400 centrale, SAP, Oracle. Autenticazione OAuth2, documentazione OpenAPI."
                  />
                  <SolutionItem
                    title="Import/Export automatici"
                    description="Batch XML/CSV schedulati: ordini, bolle, listini, variazioni prezzi. Standard EDIFACT/ANSI X12 supportati."
                  />
                  <SolutionItem
                    title="Portale B2B Elecommerce"
                    description="Affiliati ordinano prodotti 24/7 da catalogo centrale online, disponibilità real-time, conferma automatica."
                  />
                  <SolutionItem
                    title="Tracciamento spedizioni integrato"
                    description="Stati ordine (preparazione, spedito, consegnato) sincronizzati, notifiche email/SMS automatiche."
                  />
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Dashboard & Analytics */}
        <Container className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Dashboard Centrale</Subheading>
            <Heading as="h2" className="mb-6">
              Sell-out real-time & statistiche aggregate
            </Heading>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 ring-1 ring-blue-200">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Centrale d&rsquo;Acquisto vede:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">📊</span>
                    <span>Sell-out giornaliero aggregato per insegna/regione/categoria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">📈</span>
                    <span>Trend vendite settimanali/mensili/stagionali con confronto anno-1</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">🎯</span>
                    <span>Top 100 prodotti rete + underperforming per decisioni assortimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">📦</span>
                    <span>Stock disponibile magazzino centrale + in transito verso affiliati</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">💰</span>
                    <span>Marginalità per affiliato + drill-down per categoria merceologica</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Affiliato vede:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Proprie vendite & magazzino (segregazione ID_COMPANY)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Catalogo centrale con disponibilità aggiornata ogni 15min</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Storico ordini + tracciamento spedizioni da centrale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Report statistiche locali (top vendite, clienti, margini)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Promozioni nazionali attive + listini differenziati per zona</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        {/* Benefits Table */}
        <div id="benefits" className="bg-gray-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">Benefici Misurabili</Subheading>
              <Heading as="h2" className="mb-6">
                ROI piattaforma unificata vs sistemi eterogenei
              </Heading>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100">
                    <th className="p-4 text-left font-semibold text-gray-900">Aspetto</th>
                    <th className="p-4 text-left font-semibold text-gray-900">
                      Sistemi Eterogenei
                    </th>
                    <th className="p-4 text-left font-semibold text-brand-primary">
                      Daisy Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Onboarding nuovo affiliato</td>
                    <td className="p-4 text-gray-600">3-6 mesi (setup IT custom)</td>
                    <td className="p-4 font-semibold text-green-700">
                      2-3 giorni (deployment standard)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">
                      Costo integrazione EDI per affiliato
                    </td>
                    <td className="p-4 text-gray-600">€30-50k (sviluppo middleware)</td>
                    <td className="p-4 font-semibold text-green-700">
                      €0 (API native incluse)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Visibilità sell-out</td>
                    <td className="p-4 text-gray-600">Fine mese (Excel aggregati)</td>
                    <td className="p-4 font-semibold text-green-700">
                      Real-time (dashboard live)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Gestione assortimenti zona</td>
                    <td className="p-4 text-gray-600">
                      Manuale (listini Excel per regione)
                    </td>
                    <td className="p-4 font-semibold text-green-700">
                      Automatica (listini differenziati)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Controllo governance brand</td>
                    <td className="p-4 text-gray-600">
                      Debole (ogni affiliato processi diversi)
                    </td>
                    <td className="p-4 font-semibold text-green-700">
                      Forte (standardizzazione processi)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">Supporto tecnico</td>
                    <td className="p-4 text-gray-600">
                      Frammentato (N fornitori diversi)
                    </td>
                    <td className="p-4 font-semibold text-green-700">
                      Centralizzato (1 interlocutore)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">
                      Time-to-market nuove feature
                    </td>
                    <td className="p-4 text-gray-600">6-12 mesi (sviluppo coordinato)</td>
                    <td className="p-4 font-semibold text-green-700">
                      1-2 mesi (deployment sincrono)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
              <p className="text-gray-700">
                <strong>Caso studio TCO:</strong> Rete 50 affiliati con sistemi eterogenei:
                integrazione EDI €1.5M (50 x €30k), supporto frammentato €500k/anno. Piattaforma
                Daisy unificata: integrazione inclusa, supporto centralizzato €80k/anno.
                <span className="font-bold text-brand-primary"> Risparmio 5 anni: €2.9M.</span>
              </p>
            </div>
          </Container>
        </div>

        {/* Case Studies Section */}
        <Container className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Casi Studio Distribuzione</Subheading>
            <Heading as="h2" className="mb-6">
              Domex & Gaer: eccellenza nella gestione rete
            </Heading>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Domex Case */}
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="mb-6 flex items-center gap-4">
                <div className="text-5xl">🏪</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Domex</h3>
                  <div className="text-brand-primary">200+ negozi affiliati</div>
                </div>
              </div>

              <h4 className="mb-3 text-lg font-semibold text-gray-900">Profilo</h4>
              <p className="mb-6 text-gray-600">
                Rete affiliazione nazionale elettronica ed elettrodomestici. Centrale d&rsquo;acquisto
                coordina assortimento, promozioni, visual marketing per affiliati.
              </p>

              <h4 className="mb-3 text-lg font-semibold text-gray-900">Implementazione Daisy</h4>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>• Piattaforma multi-tenant per 200+ PV</li>
                <li>• Gestione FastLabel centralizzata: layout promozioni brand-compliant</li>
                <li>• Integrazione EDI AS400 centrale per listini & ordini</li>
                <li>• Dashboard sell-out aggregato per CEO</li>
                <li>• Rollout nuovi affiliati 2-3 giorni (vs 6 mesi precedente)</li>
              </ul>

              <h4 className="mb-3 text-lg font-semibold text-gray-900">Risultati</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>
                    Promozioni attive su tutta rete in meno di 1 ora (vs 2 giorni manuale)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Standardizzazione processi: conformità brand 100% affiliati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>
                    Riduzione supporto IT: 1 team centrale vs N team locali (risparmio 40%)
                  </span>
                </li>
              </ul>

              <Link
                href="/settori/customer-stories"
                className="mt-6 inline-block text-brand-primary hover:underline"
              >
                Leggi case study completo Domex →
              </Link>
            </div>

            {/* Gaer Case */}
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="mb-6 flex items-center gap-4">
                <div className="text-5xl">🌐</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Gaer</h3>
                  <div className="text-brand-primary">Portale B2B 24/7 + Totem PV</div>
                </div>
              </div>

              <h4 className="mb-3 text-lg font-semibold text-gray-900">Profilo</h4>
              <p className="mb-6 text-gray-600">
                Gruppo affiliazione con portale prodotti online per affiliati. Totem interattivi
                touch-screen nei punti vendita per ordini diretti da centrale.
              </p>

              <h4 className="mb-3 text-lg font-semibold text-gray-900">Implementazione Daisy</h4>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>• Modulo Elecommerce B2B: catalogo centrale 50k+ SKU</li>
                <li>• Totem PV integrati: cliente ordina, affiliato conferma, centrale spedisce</li>
                <li>• Disponibilità real-time magazzino centrale</li>
                <li>• Pick & pay: cliente ritira merce in 24-48h</li>
                <li>• Statistiche ordini per affiliato + drill-down categoria</li>
              </ul>

              <h4 className="mb-3 text-lg font-semibold text-gray-900">Risultati</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Ordini B2B cresciuti 240% anno 1 (accessibilità 24/7)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Tempo medio ordine: 3 minuti (vs 20 minuti telefono/email)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Riduzione errori ordine 95% (validazione automatica disponibilità)</span>
                </li>
              </ul>

              <Link
                href="/settori/customer-stories"
                className="mt-6 inline-block text-brand-primary hover:underline"
              >
                Leggi case study completo Gaer →
              </Link>
            </div>
          </div>
        </Container>

        {/* Governance & Permissions */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">Governance & Permessi</Subheading>
              <Heading as="h2" className="mb-6">
                Controllo granulare ruoli centrale vs affiliati
              </Heading>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Ruolo Centrale</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Visualizza consolidato rete</li>
                  <li>✓ Configura listini & promozioni</li>
                  <li>✓ Approva nuovi affiliati</li>
                  <li>✓ Gestisce catalogo centrale</li>
                  <li>✓ Genera report audit compliance</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Ruolo Affiliato</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Accede solo propri dati PV</li>
                  <li>✓ Genera ordini a centrale</li>
                  <li>✓ Visualizza catalogo disponibile</li>
                  <li>✓ Consulta promozioni attive</li>
                  <li>✓ Report statistiche locali</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Audit & Conformità</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Log accessi & modifiche</li>
                  <li>✓ Trail ordini completo</li>
                  <li>✓ Backup automatici giornalieri</li>
                  <li>✓ Conformità GDPR (segregazione)</li>
                  <li>✓ Report ISO 27001 ready</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Final CTA */}
        <Container className="py-24">
          <div className="rounded-3xl bg-gradient-to-br from-brand-primary to-blue-700 px-8 py-16 text-center text-white shadow-2xl">
            <Heading as="h2" className="mb-6 text-white">
              Pronto a unificare la tua rete distributiva?
            </Heading>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Richiedi demo personalizzata per centrale d&rsquo;acquisto e scopri come Daisy Platform
              può ridurre TCO del 60%, accelerare onboarding affiliati da 6 mesi a 3 giorni,
              fornire visibilità sell-out real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contatti" variant="secondary">
                Richiedi Demo Piattaforma
              </Button>
              <Button href="/settori/customer-stories" className="bg-white text-brand-primary">
                Leggi Case Study Domex & Gaer
              </Button>
              <Button href="/prezzi" variant="outline" className="border-white text-white">
                Calcola ROI Piattaforma Unificata
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

// Helper Components
function PainPointCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-red-100">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function SolutionItem({ title, description }: { title: string; description: string }) {
  return (
    <li>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-600">{description}</div>
    </li>
  );
}
