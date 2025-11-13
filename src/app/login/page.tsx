import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Accedi all\'Area Riservata - Daisy Solution ERP',
  description: 'Accedi al tuo gestionale Daisy Solution per gestire vendite, magazzino, acquisti e tutte le funzionalità del tuo punto vendita.',
}

// Redirect immediato al login ERP reale
export default function LoginPage() {
  // Server-side redirect
  if (typeof window === 'undefined') {
    redirect('https://php8-erp.daisysolution.it')
  }

  return (
    <>
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
        <Container className="relative">
          <Navbar />
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-36 md:pt-32 text-center">
            <Subheading className="text-brand-primary">Area Riservata</Subheading>
            <Heading as="h1" className="mt-4 max-w-4xl mx-auto">
              Accedi al tuo gestionale Daisy Solution
            </Heading>
            <p className="mt-6 max-w-3xl mx-auto text-xl/8 font-medium text-gray-950/75">
              Stai per essere reindirizzato all'<strong className="font-semibold text-gray-950">area riservata ERP</strong>.
              Gestisci il tuo punto vendita: vendite, magazzino, clienti, acquisti e tutte le funzionalità del gestionale.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                href="https://php8-erp.daisysolution.it"
                className="bg-brand-primary hover:bg-brand-primary-hover px-8 py-4 text-lg"
              >
                Accedi all'ERP Daisy Solution
              </Button>
              <Button href="/contatti" variant="secondary" className="px-8 py-4 text-lg">
                Richiedi Accesso
              </Button>
            </div>

            <p className="mt-8 text-sm text-gray-600 max-w-2xl mx-auto">
              Se hai dimenticato le credenziali o riscontri problemi di accesso, contatta il supporto tecnico
              o <a href="/contatti" className="text-brand-primary hover:underline font-medium">richiedi assistenza</a>.
            </p>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  )
}
