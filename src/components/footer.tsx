import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { COMPANY, CONTACTS } from '@/data/siteStats'
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function NewsletterSignup() {
  return (
    <div className="relative pt-16 pb-12 sm:py-20">
      <div className="max-w-2xl mx-auto text-center">
        <Subheading className="text-gray-100">Rimani aggiornato</Subheading>
        <p className="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
          Ricevi novità, guide e best practices per il tuo business retail
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="La tua email aziendale"
            className="w-full sm:w-80 px-4 py-3 text-base border border-slate-600 bg-slate-800 text-white placeholder:text-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0081BE] focus:border-transparent"
            aria-label="Email per newsletter"
          />
          <Button className="bg-[#0081BE] hover:bg-[#006E9F] text-white sm:w-auto">
            Iscriviti
          </Button>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Nessuno spam. Cancellati quando vuoi. Leggi la nostra{' '}
          <Link href="/privacy" className="text-[#0081BE] hover:text-[#33A3D1] underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-slate-400">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-slate-300 hover:text-white transition-colors"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      {/* Column 1: Prodotto */}
      <div>
        <SitemapHeading>Prodotto</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/funzionalita">Funzionalità & Moduli</SitemapLink>
          <SitemapLink href="/prodotto/integrazioni">Integrazioni</SitemapLink>
          <SitemapLink href="/perche-daisy">Perché Daisy</SitemapLink>
          <SitemapLink href="/tecnologie">Tecnologie</SitemapLink>
        </SitemapLinks>
      </div>

      {/* Column 2: Settori */}
      <div>
        <SitemapHeading>Settori</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/settori/negozi-singoli">Negozi Singoli</SitemapLink>
          <SitemapLink href="/settori/catene">Catene & Reti</SitemapLink>
          <SitemapLink href="/customer-stories">Customer Stories</SitemapLink>
        </SitemapLinks>
      </div>

      {/* Column 3: Azienda */}
      <div>
        <SitemapHeading>Azienda</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/chi-siamo">Chi Siamo</SitemapLink>
          <SitemapLink href="/blog">Blog</SitemapLink>
          <SitemapLink href="/customer-stories">Customer Stories</SitemapLink>
          <SitemapLink href="/contatti">Contatti</SitemapLink>
        </SitemapLinks>
      </div>

      {/* Column 4: Legale */}
      <div>
        <SitemapHeading>Legale</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/privacy">Privacy Policy</SitemapLink>
          <SitemapLink href="/cookie-policy">Cookie Policy</SitemapLink>
          <SitemapLink href="/termini-e-condizioni">Termini e Condizioni</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-slate-400 hover:text-white transition-colors"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        aria-label="Visit us on X"
        className="text-slate-400 hover:text-white transition-colors"
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-slate-400 hover:text-white transition-colors"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-slate-300 flex items-center gap-2">
      <Logo variant="with-by" className="h-6" color="white" />
      <span className="text-slate-600">|</span>
      <span>&copy; {new Date().getFullYear()} {COMPANY.parentCompany} - P.IVA {CONTACTS.vatNumber}</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Modern radial accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0081BE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0081BE]/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <NewsletterSignup />
        <PlusGrid className="pb-16">
          <PlusGridRow>
            <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
              <div className="col-span-2 flex">
                <PlusGridItem className="pt-6 lg:pb-6">
                  <Logo className="h-9" color="white" />
                </PlusGridItem>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                <Sitemap />
              </div>
            </div>
          </PlusGridRow>
          <PlusGridRow className="flex justify-between">
            <div>
              <PlusGridItem className="py-3">
                <Copyright />
              </PlusGridItem>
            </div>
            <div className="flex">
              <PlusGridItem className="flex items-center gap-8 py-3">
                <SocialLinks />
              </PlusGridItem>
            </div>
          </PlusGridRow>
        </PlusGrid>
      </Container>
    </footer>
  )
}
