/**
 * Contatti & Form Demo - Daisy Solution
 *
 * Struttura (strategy v1.1 row 216):
 * 1. Hero Contatti
 * 2. Split with pattern ⭐ (Form left + Trust signals right)
 * 3. Four-column contacts (phone, email, support, office hours)
 *
 * Form Stack: React Hook Form + Zod validation → Sanity CMS (TODO backend)
 */

'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { useState } from 'react'

/**
 * TODO STEP-4: Install form dependencies
 * npm install react-hook-form @hookform/resolvers zod @sanity/client
 *
 * For now, using basic controlled inputs to avoid build errors
 */

/**
 * Hero Contatti
 */
function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32 text-center">
          <Subheading className="text-brand-primary">Contatti</Subheading>
          <Heading as="h1" className="mt-4 max-w-4xl mx-auto">
            Richiedi demo gratuita 30 giorni
          </Heading>
          <p className="mt-6 max-w-3xl mx-auto text-xl/8 font-medium text-gray-950/75">
            Compila il form e sarai ricontattato <strong className="font-semibold text-gray-950">entro 24 ore</strong> dal nostro team commerciale.
            Demo personalizzata sulle tue esigenze con setup guidato incluso.
          </p>
        </div>
      </Container>
    </div>
  )
}

/**
 * Split Form with Pattern ⭐
 * Strategy row 216: Form left (9 fields) + Trust signals right
 */
function SplitFormSection() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    azienda: '',
    numeroPV: '1',
    settore: '',
    moduliInteressati: [] as string[],
    note: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const moduli = [
    'Vendite & Cassa',
    'Magazzino & Inventari',
    'Acquisti Fornitori',
    'E-commerce',
    'Marketplace (eBay/Amazon)',
    'Analytics & Statistiche',
    'Liste Regalo',
    'Riparazioni & Assistenza',
    'Altro',
  ]

  const handleModuloChange = (modulo: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      moduliInteressati: checked
        ? [...prev.moduliInteressati, modulo]
        : prev.moduliInteressati.filter((m) => m !== modulo),
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.nome.trim()) newErrors.nome = 'Nome richiesto'
    if (!formData.cognome.trim()) newErrors.cognome = 'Cognome richiesto'
    if (!formData.email.trim() || !formData.email.includes('@'))
      newErrors.email = 'Email valida richiesta'
    if (!formData.telefono.trim() || formData.telefono.length < 10)
      newErrors.telefono = 'Telefono richiesto (min 10 cifre)'
    if (!formData.azienda.trim()) newErrors.azienda = 'Nome azienda richiesto'
    if (!formData.settore.trim()) newErrors.settore = 'Seleziona un settore'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // TODO STEP-4: Implement Sanity CMS submission
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simula invio per ora
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitSuccess(true)
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        azienda: '',
        numeroPV: '1',
        settore: '',
        moduliInteressati: [],
        note: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Errore invio. Riprova o contattaci via email.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <Container className="py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">✅</div>
          <Heading as="h2" className="text-brand-primary">Richiesta inviata con successo!</Heading>
          <p className="mt-4 text-lg text-gray-700">
            Grazie per il tuo interesse. Il nostro team commerciale ti contatterà entro <strong>24 ore lavorative</strong>.
          </p>
          <p className="mt-6 text-base text-gray-600">
            Nel frattempo puoi esplorare i nostri <a href="/prodotto" className="text-brand-primary underline">41 moduli</a> o
            leggere le <a href="/settori/customer-stories" className="text-brand-primary underline">case study</a>.
          </p>
          <Button href="/" className="mt-8">Torna alla Home</Button>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Form */}
        <div>
          <Subheading>Richiedi informazioni</Subheading>
          <Heading as="h2" className="mt-4 mb-8">
            Compila il form
          </Heading>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-semibold text-gray-950 mb-2">
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                placeholder="Mario"
              />
              {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
            </div>

            {/* Cognome */}
            <div>
              <label htmlFor="cognome" className="block text-sm font-semibold text-gray-950 mb-2">
                Cognome *
              </label>
              <input
                type="text"
                id="cognome"
                value={formData.cognome}
                onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                placeholder="Rossi"
              />
              {errors.cognome && <p className="mt-1 text-sm text-red-600">{errors.cognome}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-950 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                placeholder="mario.rossi@azienda.it"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-gray-950 mb-2">
                Telefono *
              </label>
              <input
                type="tel"
                id="telefono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                placeholder="+39 012 345 6789"
              />
              {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono}</p>}
            </div>

            {/* Azienda */}
            <div>
              <label htmlFor="azienda" className="block text-sm font-semibold text-gray-950 mb-2">
                Azienda *
              </label>
              <input
                type="text"
                id="azienda"
                value={formData.azienda}
                onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                placeholder="Nome negozio o catena"
              />
              {errors.azienda && <p className="mt-1 text-sm text-red-600">{errors.azienda}</p>}
            </div>

            {/* Numero Punti Vendita */}
            <div>
              <label htmlFor="numeroPV" className="block text-sm font-semibold text-gray-950 mb-2">
                Numero Punti Vendita *
              </label>
              <select
                id="numeroPV"
                value={formData.numeroPV}
                onChange={(e) => setFormData({ ...formData, numeroPV: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
              >
                <option value="1">1 (negozio singolo)</option>
                <option value="2-5">2-5 punti vendita</option>
                <option value="6-10">6-10 punti vendita</option>
                <option value="10+">10+ punti vendita</option>
              </select>
            </div>

            {/* Settore */}
            <div>
              <label htmlFor="settore" className="block text-sm font-semibold text-gray-950 mb-2">
                Settore *
              </label>
              <select
                id="settore"
                value={formData.settore}
                onChange={(e) => setFormData({ ...formData, settore: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
              >
                <option value="">Seleziona settore</option>
                <option value="elettronica">Elettronica di Consumo</option>
                <option value="telefonia">Telefonia</option>
                <option value="informatica">Informatica</option>
                <option value="casalinghi">Casalinghi & Piccoli Elettrodomestici</option>
                <option value="multi-settore">Multi-Settore</option>
                <option value="altro">Altro</option>
              </select>
              {errors.settore && <p className="mt-1 text-sm text-red-600">{errors.settore}</p>}
            </div>

            {/* Moduli Interessati */}
            <div>
              <label className="block text-sm font-semibold text-gray-950 mb-3">
                Moduli interessati (opzionale)
              </label>
              <div className="space-y-2">
                {moduli.map((modulo) => (
                  <label key={modulo} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.moduliInteressati.includes(modulo)}
                      onChange={(e) => handleModuloChange(modulo, e.target.checked)}
                      className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                    />
                    <span className="text-sm text-gray-700">{modulo}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Note */}
            <div>
              <label htmlFor="note" className="block text-sm font-semibold text-gray-950 mb-2">
                Note o richieste particolari (opzionale)
              </label>
              <textarea
                id="note"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none resize-none"
                placeholder="Es: Necessito integrazione con centrale Unieuro, 15 negozi affiliati..."
              />
            </div>

            {/* Submit */}
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
              </Button>
              {errors.submit && <p className="mt-2 text-sm text-red-600">{errors.submit}</p>}
            </div>

            <p className="text-xs text-gray-600">
              Inviando accetti la nostra{' '}
              <a href="/privacy" className="text-brand-primary underline">
                privacy policy
              </a>
              . I tuoi dati saranno trattati secondo GDPR e utilizzati solo per ricontattarti in merito alla tua richiesta.
            </p>
          </form>
        </div>

        {/* Right: Trust Signals + Pattern */}
        <div className="relative">
          {/* Pattern decorativo */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-gray-100 rounded-3xl -z-10" />

          <div className="sticky top-24 p-12 space-y-12">
            <div>
              <Subheading>Perché scegliere Daisy</Subheading>
              <Heading as="h3" className="mt-4">
                Assistenza completa in ogni fase
              </Heading>
            </div>

            {/* Trust Icons */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-2xl">
                  🔒
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Dati Sicuri & Protetti</h4>
                  <p className="text-sm text-gray-600">
                    SSL, backup giornalieri, certificazione ISO 27001. Privacy GDPR compliance garantita.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Risposta Entro 24 Ore</h4>
                  <p className="text-sm text-gray-600">
                    Il nostro team commerciale ti ricontatterà entro 24 ore lavorative per analizzare le tue esigenze.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Setup Rapido & Guidato</h4>
                  <p className="text-sm text-gray-600">
                    Operativo in 10 minuti con demo sandbox. Migrazione dati e formazione operatori inclusa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Formazione Completa</h4>
                  <p className="text-sm text-gray-600">
                    Video tutorial, webinar live, documentazione dettagliata, supporto telefono prioritario.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                <strong className="text-gray-950">Oltre 2000 clienti</strong> si affidano a Daisy Solution:
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full border border-gray-200">
                  270 Unieuro
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full border border-gray-200">
                  Expert
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full border border-gray-200">
                  Domex
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full border border-gray-200">
                  Gaer
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-white rounded-full border border-gray-200">
                  Trend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

/**
 * Four-Column Contacts
 * Alternative contact methods
 */
function FourColumnContacts() {
  const contacts = [
    {
      icon: '📞',
      title: 'Telefono Commerciale',
      info: '+39 02 1234 5678',
      note: 'Lun-Ven 9:00-18:00',
    },
    {
      icon: '✉️',
      title: 'Email Vendite',
      info: 'info@daisysolution.it',
      note: 'Risposta entro 24h',
    },
    {
      icon: '🎧',
      title: 'Supporto Clienti',
      info: 'support@daisysolution.it',
      note: 'Help desk esistenti',
    },
    {
      icon: '🏢',
      title: 'Sede Legale',
      info: 'Milano, Italia',
      note: 'Lun-Ven 9:00-13:00, 14:00-18:00',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center mb-12">
          <Subheading>Altri canali</Subheading>
          <Heading as="h2" className="mt-4">
            Contattaci come preferisci
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl ring-1 ring-gray-950/5"
            >
              <div className="text-4xl mb-4">{contact.icon}</div>
              <h3 className="text-base font-semibold text-gray-950 mb-2">{contact.title}</h3>
              <p className="text-sm font-medium text-brand-primary mb-1">{contact.info}</p>
              <p className="text-xs text-gray-600">{contact.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function ContattiPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <SplitFormSection />
        <FourColumnContacts />
      </main>
      <Footer />
    </div>
  )
}
