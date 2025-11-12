import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Gradient } from '@/components/gradient';
import { JsonLd, commonBreadcrumbs } from '@/components/json-ld';
import { Navbar } from '@/components/navbar';
import { Heading, Subheading } from '@/components/text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Altri Settori - Soluzioni Retail Personalizzate | Daisy Solution',
  description:
    'Daisy Solution ERP per settori oltre elettronica: illuminazione, casalinghi, ferramenta, farmacia. Case study Upset Design. Personalizzazioni verticali, consulenza strategica.',
  openGraph: {
    title: 'Altri Settori - Soluzioni Retail Personalizzate | Daisy Solution',
    description:
      'ERP modulare adattabile a qualsiasi retail: illuminazione, casalinghi, ferramenta. Personalizzazioni verticali catalogo, integrazione ERP, consulenza strategica.',
  },
};

/**
 * Altri Settori Detail Page
 * Target: retail sectors beyond eldom (illuminazione, casalinghi, ferramenta, farmacia, etc.)
 * Content: sector flexibility, Upset Design case study, vertical customizations, strategic consulting
 * Implements FNC requirements for customizable retail solutions
 */
export default function AltriSettoriPage() {
  return (
    <>
      <JsonLd type="organization" />
      <JsonLd type="breadcrumb" data={{ breadcrumbs: commonBreadcrumbs.settoriAltri }} />
      <Navbar />
      <main>
        <Gradient className="relative">
          {/* Hero Section */}
          <Container className="relative py-24">
            <div className="max-w-3xl">
              <Heading as="h1" className="mb-6">
                Soluzioni Retail per Altri Settori
              </Heading>
              <Subheading className="mb-8">
                Daisy Solution non si limita a elettronica ed elettrodomestici. Architettura
                modulare flessibile si adatta a illuminazione, casalinghi, ferramenta, farmacia,
                abbigliamento e altri settori retail. Personalizzazioni verticali catalogo,
                integrazioni ERP, consulenza strategica.
              </Subheading>
              <div className="flex flex-wrap gap-4">
                <Button href="/contatti">Richiedi Consulenza Personalizzata</Button>
                <Button href="#upset-case" variant="secondary">
                  Caso Studio Illuminazione
                </Button>
              </div>
            </div>
          </Container>
        </Gradient>

        {/* Target Profile Section */}
        <Container className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Profilo Target</Subheading>
            <Heading as="h2" className="mb-6">
              Retail specializzato che necessita gestione completa
            </Heading>
            <p className="text-lg text-gray-600">
              Gestisci un negozio o catena in settori non-eldom e cerchi gestionale modulare,
              personalizzabile, senza vincoli vendor lock-in? Daisy Solution può essere adattato
              alle tue esigenze specifiche.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Sector Cards */}
            <SectorCard
              icon="💡"
              title="Illuminazione"
              description="Gestione catalogo complesso: lampadine, lampade, sistemi LED, dimmer, ricambi. Configuratore prodotto customizzabile."
              example="Upset Design: 5k+ SKU settore lighting"
            />
            <SectorCard
              icon="🏡"
              title="Casalinghi & Ferramenta"
              description="Inventari articoli multipli: utensili, materiali edilizia, attrezzature. Gestione lotti & scadenze."
              example="Ferramenta specializzata: 10k+ SKU"
            />
            <SectorCard
              icon="💊"
              title="Farmacia & Parafarmacia"
              description="Conformità normativa AIFA, gestione ricette elettroniche, scadenze farmaci, tracciabilità lotti."
              example="Parafarmacia: integrazione Tessera Sanitaria"
            />
            <SectorCard
              icon="👕"
              title="Abbigliamento & Accessori"
              description="Gestione taglie/colori, collezioni stagionali, saldi programmati, barcode EAN multi-variante."
              example="Boutique: 3k+ SKU fashion"
            />
            <SectorCard
              icon="📚"
              title="Libreria & Cartoleria"
              description="Gestione ISBN, editori, rese, ordini distributori, sottoscrizioni periodici."
              example="Libreria: integrazione AIE"
            />
            <SectorCard
              icon="🎨"
              title="Altri Settori Specializzati"
              description="Giocattoli, articoli sportivi, ottica, gioielleria, hobbistica. Moduli personalizzabili per esigenze verticali."
              example="Consulenza case-by-case"
            />
          </div>
        </Container>

        {/* Why Daisy for Non-Eldom */}
        <div className="bg-gray-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">Perché Daisy per Settori Non-Eldom?</Subheading>
              <Heading as="h2" className="mb-6">
                Flessibilità architetturale + esperienza retail
              </Heading>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Flexibility */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Architettura Adattabile
                </h3>
                <ul className="space-y-4">
                  <SolutionItem
                    title="Moduli core retail universali"
                    description="Vendite, cassa, magazzino, statistiche funzionano per qualsiasi settore merceologico. Zero costi riscrittura software."
                  />
                  <SolutionItem
                    title="Personalizzazione verticale catalogo"
                    description="Campi custom: dimensioni lampadine (lumen, watt, temperatura colore), taglie abbigliamento, composizione farmaci."
                  />
                  <SolutionItem
                    title="Integrazione ERP terzi"
                    description="API REST per sincronizzazione con software settore-specifici (es. Pharmalink per farmacie, AIE per librerie)."
                  />
                  <SolutionItem
                    title="Consulenza strategica inclusa"
                    description="Team Elettrorama analizza requisiti verticali, propone configurazione ottimale, segue implementazione."
                  />
                </ul>
              </div>

              {/* Experience */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900">
                  Esperienza Retail 15+ Anni
                </h3>
                <ul className="space-y-4">
                  <SolutionItem
                    title="Competenza multi-settore"
                    description="Implementazioni elettronica (core), illuminazione (Upset Design), casalinghi, gioielleria. Portfolio diversificato."
                  />
                  <SolutionItem
                    title="Best practices consolidate"
                    description="Processi vendita, magazzino, clienti, statistiche derivano da 15 anni esperienza retail reale (Elettrorama + clienti)."
                  />
                  <SolutionItem
                    title="Supporto tecnico responsive"
                    description="Hotline telefonica/email, ticket system, interventi on-site (Italia). Non abbandoniamo clienti post-vendita."
                  />
                  <SolutionItem
                    title="Costi trasparenti, no sorprese"
                    description="SaaS mensile o licenza perpetua. Personalizzazioni quotate preventivamente. Zero costi nascosti post-implementazione."
                  />
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Upset Design Case Study */}
        <Container id="upset-case" className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Caso Studio: Settore Illuminazione</Subheading>
            <Heading as="h2" className="mb-6">
              Upset Design - 5000+ SKU Lighting Gestiti con Daisy
            </Heading>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg ring-1 ring-amber-200 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="text-6xl">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Upset Design</h3>
                    <p className="text-amber-700">Settore Illuminazione Specializzata</p>
                  </div>
                </div>

                <h4 className="mb-3 text-lg font-semibold text-gray-900">Profilo Cliente</h4>
                <ul className="mb-6 space-y-2 text-gray-700">
                  <li>• Rivenditore illuminazione: lampadine, lampade, LED, sistemi domotici</li>
                  <li>• 5000+ SKU catalogo: 300 brand, 50 categorie merceologiche</li>
                  <li>• E-commerce B2C + punto vendita fisico</li>
                  <li>• Clienti B2B: studi illuminotecnici, architetti, installatori</li>
                </ul>

                <h4 className="mb-3 text-lg font-semibold text-gray-900">La Sfida</h4>
                <p className="mb-4 text-gray-700">
                  Catalogo complesso con attributi verticali illuminazione:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Lumen, watt, efficienza energetica (lm/W)</li>
                  <li>✓ Temperatura colore (K), CRI (indice resa cromatica)</li>
                  <li>✓ Dimensioni attacco (E27, E14, GU10, ...)</li>
                  <li>✓ Compatibilità dimmer, smart home integration</li>
                  <li>✓ Certificazioni (CE, RoHS, Energy Star)</li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h4 className="mb-3 text-lg font-semibold text-gray-900">
                  Implementazione Daisy
                </h4>
                <div className="mb-6 space-y-3 text-gray-700">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <strong className="text-brand-primary">Modulo Banca Dati Custom</strong>
                    <p className="mt-1 text-sm">
                      Integrazione database produttori lighting: import automatico schede tecniche
                      con campi verticali (lumen, watt, temp. colore).
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <strong className="text-brand-primary">Configuratore Prodotto Web</strong>
                    <p className="mt-1 text-sm">
                      Filtri e-commerce per ricerca: attacco, wattaggio, temperatura colore,
                      dimmerabile. Navigazione intuitiva 5k+ SKU.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <strong className="text-brand-primary">Integrazione ERP Fornitori</strong>
                    <p className="mt-1 text-sm">
                      API sincronizzazione disponibilità 20+ fornitori lighting, ordini automatici,
                      drop-shipping.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <strong className="text-brand-primary">Portale B2B Progettisti</strong>
                    <p className="mt-1 text-sm">
                      Elecommerce dedicato con listini professionali, documenti tecnici, calcoli
                      fotometrici online.
                    </p>
                  </div>
                </div>

                <h4 className="mb-3 text-lg font-semibold text-gray-900">Risultati</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-3xl font-bold text-brand-primary">40%</div>
                    <div className="mt-1 text-xs text-gray-600">Crescita vendite B2C anno 1</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-3xl font-bold text-brand-primary">60h/mese</div>
                    <div className="mt-1 text-xs text-gray-600">Risparmio gestione catalogo</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-3xl font-bold text-brand-primary">Zero</div>
                    <div className="mt-1 text-xs text-gray-600">Errori sincronizzazione SKU</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                    <div className="text-3xl font-bold text-brand-primary">95%</div>
                    <div className="mt-1 text-xs text-gray-600">Clienti soddisfatti (NPS)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <blockquote className="text-lg italic text-gray-700">
                &ldquo;Daisy Solution ci ha permesso di gestire catalogo illuminazione con complessità
                tecnica verticale senza sviluppare gestionale custom da zero. Investimento 10x
                inferiore a software proprietario, flessibilità superiore a piattaforme SaaS
                rigide.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-gray-600">
                — Proprietario, Upset Design (testimonianza rappresentativa progetto)
              </p>
            </div>
          </div>
        </Container>

        {/* Customization Options */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
          <Container>
            <div className="mb-16 max-w-2xl">
              <Subheading className="mb-4">Opzioni Personalizzazione</Subheading>
              <Heading as="h2" className="mb-6">
                Come adattiamo Daisy al tuo settore
              </Heading>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CustomizationCard
                title="Campi Custom Catalogo"
                description="Aggiungiamo attributi verticali specifici settore: composizione materiali, certificazioni, dimensioni tecniche, compatibilità."
                estimate="1-2 settimane sviluppo"
              />
              <CustomizationCard
                title="Integrazione Database Settore"
                description="Connettori API verso banche dati verticali (es. Pharmalink farmaci, AIE libri, database produttori lighting)."
                estimate="2-4 settimane sviluppo"
              />
              <CustomizationCard
                title="Workflow Processi Custom"
                description="Adattiamo flussi vendita/magazzino per conformità normative settore (es. ricette elettroniche, tracciabilità lotti)."
                estimate="1-3 settimane configurazione"
              />
              <CustomizationCard
                title="Layout Stampa Documenti"
                description="Personalizzazione fatture, DDT, etichette con loghi, layout brand, informazioni obbligatorie settore."
                estimate="3-5 giorni design"
              />
              <CustomizationCard
                title="E-commerce B2C/B2B Verticale"
                description="Configuratore prodotto settore-specifico, filtri navigazione avanzati, documenti tecnici scaricabili."
                estimate="3-6 settimane sviluppo"
              />
              <CustomizationCard
                title="Dashboard KPI Settore"
                description="Report statistiche specifici: rotazione collezioni (moda), scadenze farmaci, efficienza energetica (lighting)."
                estimate="1-2 settimane sviluppo"
              />
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 text-center shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Processo Consulenza Strategica
              </h3>
              <div className="mx-auto max-w-4xl">
                <div className="grid gap-6 md:grid-cols-4">
                  <ProcessStep number="1" title="Analisi" description="Workshop esigenze (2h)" />
                  <ProcessStep
                    number="2"
                    title="Proposta"
                    description="Documento customizzazioni (3gg)"
                  />
                  <ProcessStep
                    number="3"
                    title="Sviluppo"
                    description="Implementazione moduli (2-8 sett)"
                  />
                  <ProcessStep
                    number="4"
                    title="Go-Live"
                    description="Training + assistenza (1 sett)"
                  />
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Investimento tipico personalizzazioni verticali: €5k-25k (one-time) + licenza/SaaS
                standard Daisy.
              </p>
            </div>
          </Container>
        </div>

        {/* Integration Capabilities */}
        <Container className="py-24">
          <div className="mb-16 max-w-2xl">
            <Subheading className="mb-4">Capacità Integrazioni</Subheading>
            <Heading as="h2" className="mb-6">
              Connessioni con ecosistema software verticale
            </Heading>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="ERP Gestionali Settore"
              systems="SAP Business One, Oracle NetSuite, Microsoft Dynamics, TeamSystem"
              method="Web Service REST/SOAP, batch XML"
            />
            <IntegrationCard
              title="Database Prodotti Verticali"
              systems="Eldomcat (elettronica), Pharmalink (farmaci), AIE (libri), produttori lighting"
              method="Import automatico API/CSV"
            />
            <IntegrationCard
              title="E-commerce Multi-Canale"
              systems="WooCommerce, Magento, Shopify, PrestaShop custom"
              method="Sincronizzazione real-time catalogo"
            />
            <IntegrationCard
              title="Marketplace Verticali"
              systems="Amazon Handmade, Etsy (artigianato), Zalando (fashion), eBay Motors"
              method="Export catalogo + import ordini"
            />
            <IntegrationCard
              title="Software Contabilità"
              systems="Zucchetti, TeamSystem, Passpartout, Teamsystem"
              method="Export fatture XML, prima nota"
            />
            <IntegrationCard
              title="POS Hardware"
              systems="Terminali Ingenico, Verifone, SumUp, lettori barcode/RFID"
              method="Driver nativi, integrazione seriale"
            />
          </div>
        </Container>

        {/* Final CTA */}
        <Container className="py-24">
          <div className="rounded-3xl bg-gradient-to-br from-brand-primary to-blue-700 px-8 py-16 text-center text-white shadow-2xl">
            <Heading as="h2" className="mb-6 text-white">
              Pronto a esplorare Daisy per il tuo settore?
            </Heading>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
              Richiedi consulenza strategica gratuita: analizziamo esigenze specifiche del tuo
              settore retail, proponiamo configurazione personalizzata Daisy, valutiamo
              integrazioni necessarie. Zero impegno, massima trasparenza costi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contatti" variant="secondary">
                Richiedi Consulenza Personalizzata
              </Button>
              <Button href="/settori/customer-stories" className="bg-white text-brand-primary">
                Leggi Caso Studio Upset Design
              </Button>
              <Button href="/prodotto" variant="outline" className="border-white text-white">
                Esplora Moduli Disponibili
              </Button>
            </div>
            <p className="mt-8 text-sm text-blue-200">
              Settori già implementati: Elettronica, Illuminazione, Casalinghi, Gioielleria. Altri
              settori: consulenza case-by-case disponibile.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

// Helper Components
function SectorCard({
  icon,
  title,
  description,
  example,
}: {
  icon: string;
  title: string;
  description: string;
  example: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-500">
        <strong>Es:</strong> {example}
      </p>
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

function CustomizationCard({
  title,
  description,
  estimate,
}: {
  title: string;
  description: string;
  estimate: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <div className="text-xs text-brand-primary">
        <strong>Tempi:</strong> {estimate}
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white">
        {number}
      </div>
      <h4 className="mb-1 font-semibold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}

function IntegrationCard({
  title,
  systems,
  method,
}: {
  title: string;
  systems: string;
  method: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mb-3 text-sm text-gray-600">
        <strong>Sistemi:</strong> {systems}
      </p>
      <p className="text-xs text-gray-500">
        <strong>Metodo:</strong> {method}
      </p>
    </div>
  );
}
