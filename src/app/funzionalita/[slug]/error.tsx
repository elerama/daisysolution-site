'use client'

/**
 * Error Boundary for Module Pages
 * Handles runtime errors gracefully with user-friendly message
 */

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Module page error:', error)
  }, [error])

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
        <Container className="relative">
          <Navbar />
          <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-6xl mb-8">⚠️</div>

              <Subheading className="text-brand-primary">Errore</Subheading>
              <Heading as="h1" className="mt-4">
                Qualcosa è andato storto
              </Heading>

              <p className="mt-6 text-lg text-gray-700">
                Si è verificato un errore durante il caricamento di questa pagina.
                Puoi provare a ricaricare o tornare alla lista completa dei moduli.
              </p>

              {process.env.NODE_ENV === 'development' && error.message && (
                <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <p className="text-sm font-mono text-red-800">
                    {error.message}
                  </p>
                </div>
              )}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button onClick={reset}>
                  Riprova
                </Button>
                <Button href="/prodotto/moduli" variant="secondary">
                  Torna ai moduli
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
