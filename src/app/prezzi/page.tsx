/**
 * Prezzi - Daisy Solution
 *
 * Struttura (strategy v1.1 Section 3 rows 202-208):
 * 1. Hero Pricing "Centered with eyebrow"
 * 2. Three tiers with emphasized tier ⭐ (Starter/Professional/Enterprise)
 * 3. Two tiers with extra tier (SaaS vs On-premise + Ibrido)
 * 4. FAQ Prezzi "Two columns with centered introduction"
 * 5. CTA Richiedi Preventivo
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prezzi - Daisy Solution | Paga Solo Ciò Che Usi',
  description:
    'Prezzi trasparenti e modulari: Starter da 990€/anno, Professional 2500€/anno, Enterprise custom. SaaS o on-premise. Nessun lock-in, massima flessibilità.',
  keywords: [
    'prezzi gestionale',
    'costi Daisy',
    '990 euro anno',
    'SaaS prezzi',
    'on-premise costi',
    'preventivo gestionale',
  ],
}

/**
 * Hero Pricing
 */
function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32 text-center">
          <Subheading className="text-brand-primary">Prezzi</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl mx-auto">
            Paga solo per ciò che usi
          </Heading>
          <p className="mt-6 max-w-3xl mx-auto text-xl/8 font-medium text-gray-950/75">
            <strong className="font-semibold text-gray-950">Modularità e trasparenza</strong>.
            Parti da 990€/anno, aggiungi moduli quando cresci. Zero lock-in, massima flessibilità.
            SaaS o on-premise: tu scegli.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Three Tiers with Emphasized Tier ⭐
 * Strategy row 204: Starter (990€), Professional (emphasized), Enterprise (custom)
 */
function ThreeTiersPricing() {
  const tiers = [
    {
      name: 'Starter',
      tagline: 'Per negozi singoli',
      price: '990€',
      period: '/anno',
      description: '3 moduli base per iniziare velocemente',
      features: [
        'Vendite & Cassa',
        'Magazzino & Inventari',
        'Acquisti & Fornitori',
        '1 punto vendita',
        '3 postazioni incluse',
        'Supporto email',
        'Aggiornamenti inclusi',
        'Backup automatici',
      ],
      cta: 'Inizia con Starter',
      ctaHref: '/contatti?piano=starter',
      emphasized: false,
    },
    {
      name: 'Professional',
      tagline: 'Più scelto',
      price: '2.500€',
      period: '/anno',
      description: '10 moduli completi per negozi in crescita',
      features: [
        'Tutti i moduli Starter',
        'Statistiche & Analytics',
        'Promozioni & Marketing',
        'E-commerce integrato',
        'Liste Regalo',
        'App Mobile (DaisyApp)',
        'Fino a 3 punti vendita',
        '10 postazioni incluse',
        'Supporto prioritario telefono',
        'Integrazioni eBay/Amazon',
        'Formazione avanzata',
      ],
      cta: 'Scegli Professional',
      ctaHref: '/contatti?piano=professional',
      emphasized: true,
    },
    {
      name: 'Enterprise',
      tagline: 'Per reti e catene',
      price: 'Custom',
      period: '',
      description: 'Soluzione completa per reti multi-sede',
      features: [
        'Tutti i moduli Professional',
        'Moduli RAEE, B2B, Secondhand',
        'Riparazioni & Assistenza',
        'Etichette elettroniche ESL',
        'Integrazioni centrali Unieuro/Expert',
        'Punti vendita illimitati',
        'Postazioni illimitate',
        'Account manager dedicato',
        'SLA personalizzato',
        'Training on-site',
        'Personalizzazioni custom',
      ],
      cta: 'Richiedi Preventivo',
      ctaHref: '/contatti?piano=enterprise',
      emphasized: false,
    },
  ]

  return (
    <Container className="py-24">
      <Subheading className="text-center">Pacchetti</Subheading>
      <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
        Scegli il piano perfetto per il tuo business
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col p-8 rounded-3xl ${tier.emphasized
                ? 'bg-brand-primary text-white ring-4 ring-brand-primary/20 scale-105 shadow-2xl'
                : 'bg-white text-gray-950 ring-1 ring-gray-950/5'
              }`}
          >
            {tier.emphasized && (
              <div className="mb-4 inline-flex self-center px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-white/20 text-white rounded-full">
                {tier.tagline}
              </div>
            )}
            {!tier.emphasized && tier.tagline && (
              <div className="mb-4 inline-flex self-center px-4 py-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 text-gray-700 rounded-full">
                {tier.tagline}
              </div>
            )}

            <h3 className={`text-2xl font-bold ${tier.emphasized ? 'text-white' : 'text-gray-950'}`}>
              {tier.name}
            </h3>

            <div className="mt-4 flex items-baseline gap-2">
              <span className={`text-5xl font-bold ${tier.emphasized ? 'text-white' : 'text-brand-primary'}`}>
                {tier.price}
              </span>
              {tier.period && (
                <span className={`text-lg ${tier.emphasized ? 'text-white/80' : 'text-gray-600'}`}>
                  {tier.period}
                </span>
              )}
            </div>

            <p className={`mt-4 text-sm ${tier.emphasized ? 'text-white/90' : 'text-gray-600'}`}>
              {tier.description}
            </p>

            <ul className="mt-8 space-y-3 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3 items-start">
                  <span className={`text-lg ${tier.emphasized ? 'text-white' : 'text-brand-primary'}`}>
                    ✓
                  </span>
                  <span className={`text-sm ${tier.emphasized ? 'text-white/90' : 'text-gray-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href={tier.ctaHref}
                className={
                  tier.emphasized
                    ? 'w-full bg-white text-brand-primary hover:bg-gray-100'
                    : 'w-full btn-primary'
                }
              >
                {tier.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-gray-600 max-w-2xl mx-auto">
        Tutti i piani includono: hosting SaaS gestito, backup automatici, aggiornamenti continui,
        migrazione assistita da altro gestionale, formazione iniziale operatori.
      </p>
    </Container>
  )
}

/**
 * Two Tiers with Extra Tier (SaaS vs On-premise + Ibrido)
 * Strategy row 206
 */
function DeploymentOptions() {
  const deployments = [
    {
      name: 'SaaS Cloud',
      description: 'Hosting gestito da Elettrorama',
      icon: '☁️',
      benefits: [
        'Zero investimento hardware',
        'Backup automatici giornalieri',
        'Aggiornamenti continui inclusi',
        'Accesso ovunque, sempre',
        'Disaster recovery geografico',
        'Scalabilità immediata',
      ],
      pricing: 'Da 990€/anno',
    },
    {
      name: 'On-Premise',
      description: 'Server in-house cliente',
      icon: '🖥️',
      benefits: [
        'Controllo totale dati',
        'Personalizzazioni avanzate',
        'Integrazione network esistente',
        'Licenza perpetua opzionale',
        'Performance ottimizzate HW dedicato',
        'Manutenzione annuale opzionale',
      ],
      pricing: 'Licenza perpetua custom',
    },
    {
      name: 'Ibrido',
      description: 'Management SaaS + Dati On-Premise',
      icon: '🔄',
      benefits: [
        'Gestione cloud + dati locali',
        'Massima flessibilità',
        'Backup ridondante cloud+local',
        'Complianza normative specifiche',
        'Failover automatico cloud',
        'Best of both worlds',
      ],
      pricing: 'Quotazione personalizzata',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">Modalità deployment</Subheading>
        <Heading as="h2" className="mt-4 text-center max-w-3xl mx-auto">
          SaaS, on-premise o ibrido: tu scegli
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {deployments.map((deployment) => (
            <div
              key={deployment.name}
              className="flex flex-col p-8 bg-white rounded-2xl ring-1 ring-gray-950/5"
            >
              <div className="text-5xl mb-4">{deployment.icon}</div>
              <h3 className="text-xl font-bold text-gray-950">{deployment.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{deployment.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {deployment.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 items-start">
                    <span className="text-brand-primary text-sm">✓</span>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="text-sm font-semibold text-brand-primary">
                  {deployment.pricing}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-700 mb-6">
            Non sicuro quale modalità sia la migliore per te? Ti aiutiamo noi.
          </p>
          <Button href="/contatti" variant="outline">
            Richiedi Consulenza Gratuita
          </Button>
        </div>
      </Container>
    </div>
  )
}

/**
 * FAQ Prezzi - Two Columns with Centered Introduction
 * Strategy row 207: 10 FAQ accordion
 */
function FAQPrezzi() {
  const faqs = [
    {
      question: 'Qual è il costo minimo per iniziare?',
      answer: 'Il piano Starter parte da 990€/anno e include 3 moduli base (Vendite, Magazzino, Acquisti) per 1 punto vendita e 3 postazioni. È perfetto per negozi singoli che vogliono iniziare con il gestionale web.',
    },
    {
      question: 'Posso aggiungere moduli successivamente?',
      answer: 'Sì, assolutamente. Daisy è progettato con architettura modulare HMVC. Puoi attivare nuovi moduli (e-commerce, analytics, marketplace, etc.) in qualsiasi momento. I costi aggiuntivi dipendono dai moduli scelti.',
    },
    {
      question: 'Il supporto è incluso nel prezzo?',
      answer: 'Sì. Starter include supporto via email, Professional include supporto prioritario via telefono, Enterprise include account manager dedicato con SLA personalizzato. Tutti i piani includono formazione iniziale.',
    },
    {
      question: 'C\'è una prova gratuita?',
      answer: 'Sì, offriamo demo gratuita di 30 giorni con ambiente sandbox completo. Puoi testare tutti i moduli, importare dati di prova, e verificare integrazioni. Nessuna carta di credito richiesta.',
    },
    {
      question: 'Qual è la politica di rimborso?',
      answer: 'Offriamo garanzia soddisfatto o rimborsato entro 30 giorni dall\'attivazione. Se Daisy non soddisfa le tue aspettative, ti rimborsiamo l\'intero importo senza domande.',
    },
    {
      question: 'Ci sono sconti per volumi o reti?',
      answer: 'Sì, per reti con 5+ punti vendita o 20+ postazioni applichiamo sconti progressivi fino al 30%. I piani Enterprise hanno sempre pricing personalizzato. Contattaci per una quotazione dedicata.',
    },
    {
      question: 'Qual è la durata minima del contratto?',
      answer: 'I piani SaaS hanno canone annuale (pagamento anticipato o rateizzato). Rinnovo automatico annuale, cancellabile con 30 giorni preavviso. On-premise ha licenza perpetua opzionale.',
    },
    {
      question: 'Quali metodi di pagamento accettate?',
      answer: 'Bonifico bancario (SEPA), carta di credito (Visa, Mastercard, Amex), RID bancario per canoni ricorrenti, Stripe per pagamenti online. Fatturazione elettronica B2B inclusa.',
    },
    {
      question: 'Posso fare upgrade/downgrade del piano?',
      answer: 'Sì, puoi cambiare piano in qualsiasi momento. Upgrade immediato con costo pro-rata. Downgrade effettivo al termine del periodo corrente con credito applicato al rinnovo.',
    },
    {
      question: 'Avete pricing personalizzato per casi speciali?',
      answer: 'Sì, per reti complesse, gruppi franchising, distributori, o necessità particolari (multi-lingua, multi-valuta, customizzazioni) creiamo sempre preventivi ad-hoc. Contattaci per analisi gratuita.',
    },
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Domande frequenti</Subheading>
        <Heading as="h2" className="mt-4 max-w-3xl mx-auto">
          Tutto quello che devi sapere sui prezzi
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-950 mb-3">
              {faq.question}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-base text-gray-700 mb-6">
          Altre domande? Il nostro team commerciale è a disposizione.
        </p>
        <Button href="/contatti" variant="secondary">
          Contatta il Team Vendite
        </Button>
      </div>
    </Container>
  )
}

/**
 * CTA Finale Preventivo
 */
function FinalCTA() {
  return (
    <div className="relative py-24 bg-brand-primary">
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Subheading className="text-white">Pronto per iniziare?</Subheading>
          <Heading as="h2" className="mt-4 text-white">
            Richiedi preventivo personalizzato gratuito
          </Heading>
          <p className="mt-6 text-lg text-white/90">
            Analizziamo insieme le tue esigenze: numero punti vendita, postazioni, moduli necessari,
            integrazioni. Ti prepariamo quotazione su misura in 24 ore. Nessun impegno.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contatti" className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Richiedi Preventivo Gratuito
            </Button>
            <Button href="/contatti?tipo=demo" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Prenota Demo Live
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/80">
            Oppure chiamaci: <a href="tel:+390123456789" className="underline font-semibold">+39 012 345 6789</a>
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function PrezziPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ThreeTiersPricing />
        <DeploymentOptions />
        <FAQPrezzi />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
