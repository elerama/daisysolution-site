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
  title: 'Negozi Singoli - Soluzione Gestionale Completa | Daisy Solution',
  description:
    'Soluzione ERP modulare per negozi singoli di elettronica, elettrodomestici, informatica. Vendite, cassa, magazzino, statistiche. Da €990/anno SaaS. Case study Carrubba S.r.l.',
  openGraph: {
    title: 'Negozi Singoli - Gestionale Retail Completo | Daisy Solution',
    description:
      'Gestisci il tuo negozio di elettronica con Daisy Solution: moduli essenziali, costi ridotti, visibilità real-time. Caso studio Carrubba S.r.l. 2 PV affiliati Unieuro.',
  },
};

/**
 * Negozi Singoli Detail Page
 * Target: single retail store owners (elettronica, elettrodomestici, informatica)
 * Content: pain points, solution, package recommendation, Carrubba case study, pricing
 * Implements FNC requirements for sector-specific landing pages
 */
export default function NegoziSingoliPage() {
  return (
    <>
      <JsonLd type="organization" />
      <JsonLd type="breadcrumb" data={{ breadcrumbs: commonBreadcrumbs.settoriNegoziSingoli }} />
      <Navbar />
      <main>
        <Gradient className="relative">
          {/* Hero Section */}
          <Container className="relative py-24">
            <div className="max-w-3xl">
              <Heading as="h1" className="mb-6">
                Gestionale Completo per Negozi Singoli
              </Heading>
              <Subheading className="mb-8">
                Gestisci un negozio di elettronica, elettrodomestici o informatica? Daisy Solution
                è la soluzione ERP modulare progettata per punto vendita indipendente: vendite,
                cassa, magazzino, statistiche. SaaS gestito, costi ridotti, zero server da
                manutenere.
              </Subheading>
              <div className="flex flex-wrap gap-4">
                <Button href="/contatti">Richiedi Preventivo</Button>
                <Button href="#pacchetto-consigliato" variant="secondary">
                  Vedi Pacchetti
                </Button>
              </div>
            </div>
          </Container>
        </Gradient>

        {/* Pain Points Section */}
        <Container className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Le Sfide del Negozio Indipendente</Subheading>
            <Heading as="h2" className="mb-6">
              Problemi che riconoscerai
            </Heading>
            <p className="text-lg text-gray-600">
              Gestire un punto vendita richiede controllo totale su inventari, vendite, clienti.
              Senza gli strumenti giusti, emergono inefficienze costose.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Pain Point Cards */}
            <PainPointCard
              icon="💰"
              title="Costi gestionali elevati"
              description="Server da manutenere, licenze software proprietario, consulente IT esterno. Budget IT fuori controllo per negozio singolo."
            />
            <PainPointCard
              icon="📦"
              title="Difficoltà inventari"
              description="Conteggi manuali mensili, errori tra giacenze fisiche e sistema, nessuna sincronizzazione automatica con fornitori."
            />
            <PainPointCard
              icon="📊"
              title="Nessuna visibilità vendite real-time"
              description="Reportistica a fine mese, impossibile capire trend giornalieri, decisioni basate su percezione non dati."
            />
            <PainPointCard
              icon="🌐"
              title="Impossibilità vendere online"
              description="Nessun canale e-commerce, clienti migrano verso marketplace Amazon/eBay, perdita competitività."
            />
            <PainPointCard
              icon="📈"
              title="Reportistica scarsa o assente"
              description="Excel manuali per analisi vendite, nessuna dashboard real-time, zero previsioni stagionali."
            />
          </div>
        </Container>

        {/* Solution Section */}
        <div className="bg-gray-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">La Soluzione Daisy Solution</Subheading>
              <Heading as="h2" className="mb-6">
                Tutto ciò di cui hai bisogno, niente di superfluo
              </Heading>
              <p className="text-lg text-gray-600">
                Architettura modulare: attivi solo i moduli necessari, paghi solo ciò che usi.
                SaaS hosting gestito, aggiornamenti automatici, backup inclusi.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Essential Modules */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Moduli Essenziali Inclusi
                </h3>
                <ul className="space-y-4">
                  <SolutionItem
                    title="Vendite & Cassa"
                    description="Scontrini, fatture, pagamenti multipli (contanti, carte, finanziamenti), integrazione POS."
                  />
                  <SolutionItem
                    title="Magazzino"
                    description="Carichi automatici bolle fornitori, giacenze real-time, inventari periodici, movimenti tra depositi."
                  />
                  <SolutionItem
                    title="Statistiche"
                    description="Dashboard vendite giornaliere, top prodotti, marginalità, confronto anno precedente."
                  />
                  <SolutionItem
                    title="Amministrazione"
                    description="Gestione permessi utenti, backup automatici, configurazione parametri azienda."
                  />
                </ul>
              </div>

              {/* Optional Modules */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">Moduli Opzionali</h3>
                <ul className="space-y-4">
                  <SolutionItem
                    title="E-commerce B2C"
                    description="Sincronizzazione catalogo online, ordini web in gestionale, disponibilità real-time."
                  />
                  <SolutionItem
                    title="Banca Dati Prodotti"
                    description="Integrazione Eldomcat: 200k+ schede prodotto elettronica aggiornate, import automatico."
                  />
                  <SolutionItem
                    title="Stampa Cartelli"
                    description="Layout personalizzabili, prezzi sincronizzati da gestionale, stampa batch promozioni."
                  />
                  <SolutionItem
                    title="Export Marketplace"
                    description="Sincronizzazione automatica catalogo eBay/Amazon, gestione ordini marketplace in unico sistema."
                  />
                </ul>
                <p className="mt-6 text-sm text-gray-600">
                  Modalità SaaS: hosting gestito su server dedicati, zero manutenzione IT.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Recommended Package Section */}
        <Container id="pacchetto-consigliato" className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Pacchetto Consigliato</Subheading>
            <Heading as="h2" className="mb-6">
              Configurazione ideale per negozio singolo
            </Heading>
            <p className="text-lg text-gray-600">
              Soluzione completa per punto vendita elettronica/elettrodomestici fino a 3
              postazioni.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 bg-gray-50">
                  <th className="p-4 text-left font-semibold text-gray-900">Modulo</th>
                  <th className="p-4 text-left font-semibold text-gray-900">Cosa Include</th>
                  <th className="p-4 text-left font-semibold text-gray-900">Beneficio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Vendite & Cassa</td>
                  <td className="p-4 text-gray-600">
                    Scontrini, fatture, POS, pagamenti rateali, gestione garanzie
                  </td>
                  <td className="p-4 text-gray-600">
                    Gestione completa punto vendita, compliance fiscale
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Magazzino</td>
                  <td className="p-4 text-gray-600">
                    Carichi, giacenze, inventari, ordini fornitori, lotti/seriali
                  </td>
                  <td className="p-4 text-gray-600">
                    Controllo stock real-time, zero rotture di stock
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Statistiche</td>
                  <td className="p-4 text-gray-600">
                    Dashboard vendite, top prodotti, marginalità, analisi ABC
                  </td>
                  <td className="p-4 text-gray-600">
                    Decisioni basate su dati, identificazione prodotti ad alto margine
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">Banca Dati Eldomcat</td>
                  <td className="p-4 text-gray-600">
                    200k+ schede prodotto elettronica, aggiornamenti settimanali
                  </td>
                  <td className="p-4 text-gray-600">
                    Import prodotti in 1 click, catalogo sempre aggiornato
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 p-8 ring-1 ring-blue-200">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                  Pacchetto Starter Negozio Singolo
                </h3>
                <p className="text-gray-600">
                  Include: 4 moduli essenziali + hosting SaaS gestito + backup giornalieri +
                  supporto telefonico/email
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  * Prezzi variano in base a numero postazioni e personalizzazioni. Richiedi
                  preventivo per valutazione specifica.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <div className="mb-2 text-4xl font-bold text-brand-primary">Da €990/anno</div>
                <Button href="/contatti" className="mt-4">
                  Richiedi Preventivo Personalizzato
                </Button>
              </div>
            </div>
          </div>
        </Container>

        {/* Case Study Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">Caso Studio</Subheading>
              <Heading as="h2" className="mb-6">
                Carrubba S.r.l. - 2 Punti Vendita Affiliati Unieuro
              </Heading>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Profilo Cliente</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span>2 punti vendita affiliati Unieuro in Sicilia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span>Settore: elettronica di consumo, elettrodomestici, informatica</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span>5 postazioni totali (2+3 tra i due negozi)</span>
                  </li>
                </ul>

                <h3 className="mb-4 mt-8 text-xl font-semibold text-gray-900">La Sfida</h3>
                <p className="text-gray-600">
                  Necessità di gestione completa retail (vendite, cassa, magazzino, acquisti,
                  riparazioni) con integrazione alla centrale Unieuro per carico bolle automatico,
                  sincronizzazione listini, gestione promozioni nazionali.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">La Soluzione</h3>
                <p className="mb-6 text-gray-600">
                  Implementazione Daisy Solution completo con moduli:
                </p>
                <ul className="mb-8 space-y-2 text-gray-600">
                  <li>• Vendite & Cassa multi-postazione</li>
                  <li>• Magazzino con gestione lotti/seriali</li>
                  <li>• Acquisti con integrazione EDI centrale</li>
                  <li>• Riparazioni & Assistenza</li>
                  <li>• Statistiche aggregate 2 PV</li>
                </ul>

                <h3 className="mb-4 text-xl font-semibold text-gray-900">Risultati</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Operatività efficiente su entrambi i punti vendita</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Zero errori carico bolle da centrale Unieuro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Visibilità real-time giacenze cross-store</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span>Conformità processi affiliazione Unieuro</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/settori/customer-stories"
                    className="text-brand-primary hover:underline"
                  >
                    Leggi case study completo →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Final CTA */}
        <Container className="py-24">
          <div className="rounded-3xl bg-gradient-to-br from-brand-primary to-blue-700 px-8 py-16 text-center text-white shadow-2xl">
            <Heading as="h2" className="mb-6 text-white">
              Pronto a modernizzare il tuo negozio?
            </Heading>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Richiedi un preventivo personalizzato e scopri come Daisy Solution può ridurre i
              costi IT, migliorare il controllo inventari e aumentare le vendite del tuo punto
              vendita.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contatti" variant="secondary">
                Richiedi Preventivo Negozio Singolo
              </Button>
              <Button href="/settori/customer-stories" className="bg-white text-brand-primary">
                Leggi Altri Case Study
              </Button>
              <Button href="/prezzi" variant="outline" className="border-white text-white">
                Prenota Consulenza Gratuita
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
