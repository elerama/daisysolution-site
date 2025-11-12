/**
 * Tecnologie - Daisy Solution
 *
 * Struttura (strategy v1.1 rows 195-200):
 * 1. Hero "Simple with eyebrow"
 * 2. Architettura Web-Based
 * 3. SaaS vs On-Premise comparison
 * 4. Sicurezza & Permessi granulari
 * 5. Compatibilità Database & API
 * 6. Scalabilità Multi-Tenant (case Unieuro)
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tecnologie - Daisy Solution | Architettura Web, SaaS, Sicurezza Enterprise',
  description:
    'Stack tecnologico Daisy: architettura web-based, SaaS o on-premise, multi-database (MySQL/Oracle/SQL Server), RBAC granulare, scalabilità multi-tenant provata su 270 negozi.',
  keywords: [
    'architettura web',
    'SaaS gestionale',
    'on-premise',
    'multi-tenant',
    'MySQL Oracle SQL Server',
    'sicurezza RBAC',
    'scalabilità retail',
  ],
}

/**
 * Hero Tecnologie
 * Strategy row 196: "Simple with eyebrow" (UI Blocks)
 */
function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32 text-center">
          <Subheading className="text-brand-primary">Tecnologie</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl mx-auto">
            Sicurezza e performance enterprise
          </Heading>
          <p className="mt-6 max-w-3xl mx-auto text-xl/8 font-medium text-gray-950/75">
            Stack moderno, affidabilità garantita. <strong className="font-semibold text-gray-950">20 anni di evoluzione</strong> continua
            per un gestionale retail web-based scalabile, sicuro, compatibile con i principali database enterprise.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Architettura Web-Based
 */
function WebBasedArchitecture() {
  const benefits = [
    {
      icon: '🌐',
      title: 'Zero Installazioni Client',
      description:
        'Accesso via browser moderno (Chrome, Firefox, Safari, Edge). Nessun download, nessun aggiornamento manuale.',
    },
    {
      icon: '📱',
      title: 'Multi-Device Responsive',
      description:
        'Funziona su PC desktop (≥1024px), tablet (768-1023px), smartphone (≤767px). Stesso gestionale, ovunque.',
    },
    {
      icon: '🔄',
      title: 'Aggiornamenti Automatici',
      description:
        'Nuove funzionalità e patch sicurezza distribuite automaticamente. Sempre l\'ultima versione disponibile.',
    },
    {
      icon: '🏠',
      title: 'Lavoro Remoto Nativo',
      description:
        'VPN non necessaria. Accesso sicuro da casa, ufficio, negozio, ovunque ci sia internet.',
    },
  ]

  return (
    <Container className="py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Subheading>Architettura</Subheading>
        <Heading as="h2">Web-Based: accessibile ovunque, sempre aggiornato</Heading>
        <p className="mt-4 text-base text-gray-700">
          Nessuna dipendenza da client desktop pesanti. Solo un browser moderno e connessione internet.
        </p>
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

      <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
        <h4 className="font-semibold text-gray-950 mb-4">Compatibilità Browser</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Chrome (≥90)', 'Firefox (≥88)', 'Safari (≥14)', 'Edge (≥90)'].map((browser) => (
            <div key={browser} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-brand-primary">✓</span>
              {browser}
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

/**
 * SaaS vs On-Premise Comparison Table
 */
function DeploymentComparison() {
  const comparison = [
    {
      aspect: 'Hosting',
      saas: 'Gestito da Elettrorama',
      onPremise: 'Server cliente',
    },
    {
      aspect: 'Backup',
      saas: 'Automatici giornalieri',
      onPremise: 'Responsabilità cliente',
    },
    {
      aspect: 'Costi iniziali',
      saas: 'Zero investimento infra',
      onPremise: 'Server + licenze',
    },
    {
      aspect: 'Costi ricorrenti',
      saas: 'Canone mensile',
      onPremise: 'Manutenzione annuale',
    },
    {
      aspect: 'Aggiornamenti',
      saas: 'Automatici inclusi',
      onPremise: 'Pianificati, possibile costo',
    },
    {
      aspect: 'IT interno',
      saas: 'Non richiesto',
      onPremise: 'Necessario',
    },
    {
      aspect: 'Scalabilità',
      saas: 'Immediata (aggiungi utenti)',
      onPremise: 'Richiede hardware',
    },
    {
      aspect: 'Disaster recovery',
      saas: 'Incluso (ridondanza geografica)',
      onPremise: 'Da implementare',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Deployment</Subheading>
          <Heading as="h2">SaaS o On-Premise: tu scegli</Heading>
          <p className="mt-4 text-base text-gray-700">
            Stesso software, modalità di deployment flessibili. O gestione completa cloud, o controllo totale server cliente.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full bg-white rounded-2xl ring-1 ring-gray-950/5 overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-950">Aspetto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-primary">
                  SaaS (Cloud)
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-950">On-Premise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparison.map((row) => (
                <tr key={row.aspect} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-950">{row.aspect}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.saas}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.onPremise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 max-w-3xl mx-auto p-6 bg-white rounded-xl ring-1 ring-gray-950/5">
          <h4 className="font-semibold text-gray-950 mb-3">Modello Ibrido</h4>
          <p className="text-sm text-gray-700 mb-4">
            Combina i vantaggi di entrambi: server locale primario + replica cloud per backup e disaster recovery.
            Massimo controllo operativo + sicurezza ridondanza geografica.
          </p>
          <Button href="/contatti?tipo=consulenza-infra" variant="outline" className="text-sm">
            Valuta Architettura Ibrida
          </Button>
        </div>
      </Container>
    </div>
  )
}

/**
 * Sicurezza & Permessi RBAC
 */
function SecuritySection() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Subheading>Sicurezza</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            Permessi granulari RBAC 4 dimensioni
          </Heading>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              Sistema <strong className="text-gray-950">Role-Based Access Control</strong> con controllo
              su 4 dimensioni: ruolo utente, società, punto vendita, modulo funzionale.
            </p>
            <p>
              Ogni utente vede solo i dati e funzionalità necessari al proprio ruolo. Un cassiere non
              accede a listini acquisto, un buyer non vede vendite altri negozi.
            </p>
            <p>
              <strong className="text-gray-950">Audit trail</strong> completo su operazioni critiche:
              sconti manuali, rettifiche magazzino, eliminazioni. Conformità GDPR integrata.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-950 mb-4">4 Dimensioni RBAC</h4>
            <ul className="space-y-3">
              {[
                '1. Ruolo: cassiere, magazziniere, buyer, amministratore',
                '2. Società: multi-azienda con segregazione dati',
                '3. Punto Vendita: visibilità limitata al negozio assegnato',
                '4. Modulo: accesso granulare per funzione (vendite, acquisti, statistiche)',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-brand-primary text-sm">→</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-xl ring-1 ring-gray-950/5">
            <h4 className="font-semibold text-gray-950 mb-4">Conformità & Certificazioni</h4>
            <div className="grid grid-cols-2 gap-4">
              {['GDPR Ready', 'ISO 27001', 'Backup 30gg', 'Audit Trail'].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-brand-primary">✓</span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

/**
 * Compatibilità Database & API
 */
function CompatibilitySection() {
  const databases = [
    { name: 'MySQL', version: '≥ 5.7', icon: '🐬' },
    { name: 'Oracle', version: '≥ 12c', icon: '🔴' },
    { name: 'SQL Server', version: '≥ 2016', icon: '🟦' },
  ]

  const integrations = [
    'REST API documentate',
    'Import/Export CSV, XML, Excel',
    'Web service SOAP (legacy)',
    'Schedulazione automatica',
    'Migrazione assistita da altri gestionali',
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Compatibilità</Subheading>
          <Heading as="h2">Multi-database enterprise & API aperte</Heading>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-lg font-semibold text-gray-950 mb-6">Database Supportati</h3>
            <div className="space-y-4">
              {databases.map((db) => (
                <div
                  key={db.name}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl ring-1 ring-gray-950/5"
                >
                  <div className="text-3xl">{db.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-950">{db.name}</div>
                    <div className="text-sm text-gray-600">{db.version}</div>
                  </div>
                  <span className="text-brand-primary text-sm">✓</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-950 mb-6">Integrabilità</h3>
            <ul className="space-y-3">
              {integrations.map((integration) => (
                <li key={integration} className="flex gap-3 items-start">
                  <span className="text-brand-primary text-lg">→</span>
                  <span className="text-sm text-gray-700">{integration}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-white rounded-xl ring-1 ring-gray-950/5">
              <h4 className="font-semibold text-gray-950 mb-3">Migrazione Assistita</h4>
              <p className="text-sm text-gray-700 mb-4">
                Servizio di migrazione dati da altri gestionali. Analisi struttura dati, mappatura campi,
                test parallelo pre-switch.
              </p>
              <Button href="/contatti?tipo=migrazione" variant="outline" className="text-sm">
                Richiedi Valutazione Migrazione
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * Scalabilità Multi-Tenant (Case Unieuro)
 * Strategy row 200: "Split with image" (UI Blocks)
 */
function ScalabilitySection() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Subheading>Scalabilità</Subheading>
          <Heading as="h2" className="mt-4 mb-6">
            Multi-tenant: da 1 a 270 negozi su singola istanza
          </Heading>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              Architettura <strong className="text-gray-950">multi-tenant nativa</strong>: gestisci 1
              negozio o 1000 punti vendita sulla stessa piattaforma. Zero cambio tecnologico crescendo.
            </p>
            <p>
              <strong className="text-gray-950">Caso Unieuro</strong>: 270 affiliati, 900 postazioni
              attive, 400 casse simultanee su singola installazione Daisy. Uptime 99.9% garantito.
            </p>
            <p>
              Isolamento dati garantito tra società/negozi. Performance ottimizzate per operazioni ad alto
              volume: chiusure cassa veloci, inventari con decine di migliaia di articoli.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">270</div>
              <div className="text-xs text-gray-600 mt-1">Negozi Unieuro</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">900</div>
              <div className="text-xs text-gray-600 mt-1">Postazioni</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">99.9%</div>
              <div className="text-xs text-gray-600 mt-1">Uptime</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md p-8 bg-gradient-to-br from-brand-primary/10 to-gray-100 rounded-3xl">
            <div className="space-y-6">
              <div className="text-center p-6 bg-white rounded-2xl ring-1 ring-gray-950/5">
                <div className="text-sm font-semibold text-gray-950 mb-2">Centrale / Sede</div>
                <div className="text-xs text-gray-600">Dashboard consolidata</div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-2xl text-brand-primary">↓</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white rounded-lg text-center ring-1 ring-gray-950/5"
                  >
                    <div className="text-xs text-gray-950 font-medium">PV {i + 1}</div>
                  </div>
                ))}
              </div>

              <div className="text-center text-xs text-gray-600 italic">
                ... fino a 270 punti vendita
              </div>
            </div>
          </div>
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
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Subheading>Approfondisci</Subheading>
          <Heading as="h2" className="mt-4">
            Scarica documentazione tecnica completa
          </Heading>
          <p className="mt-6 text-lg text-gray-700">
            Specifiche tecniche dettagliate, requisiti sistema, diagrammi architettura, API reference.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contatti?tipo=doc-tecnica" className="px-8 py-4 text-lg">
              Richiedi Documentazione
            </Button>
            <Button href="/prezzi" variant="outline" className="px-8 py-4 text-lg">
              Vedi Prezzi SaaS/On-Premise
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function TecnologiePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <WebBasedArchitecture />
        <DeploymentComparison />
        <SecuritySection />
        <CompatibilitySection />
        <ScalabilitySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
