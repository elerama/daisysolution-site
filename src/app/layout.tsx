import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    title: {
        template: '%s - Daisy Solution',
        default: 'Daisy Solution - Tutto quello che serve per gestire il tuo retail',
    },
    description:
        'Il gestionale web modulare per negozi, catene e distribuzione. SaaS o On-Premise. Da 990€/anno. Prova gratuita 30 giorni.',
    keywords: [
        'gestionale retail',
        'ERP negozi',
        'software negozio elettronica',
        'gestionale web',
        'SaaS retail',
        'gestionale catene',
        'gestionale multi-sede',
        'software punto vendita',
    ],
    authors: [{ name: 'Daisy Solution by Elettrorama' }],
    creator: 'Elettrorama S.r.l.',
    publisher: 'Elettrorama S.r.l.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'it_IT',
        siteName: 'Daisy Solution',
        title: 'Daisy Solution - Il gestionale web che cresce con te',
        description:
            'Gestionale modulare per retail: 41 moduli componibili, SaaS o On-Premise, integrazioni eBay/Amazon. 270 negozi Unieuro lo hanno scelto.',
        // TODO: Aggiungere OG image quando disponibile
        // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Daisy Solution - Il gestionale web che cresce con te',
        description:
            'Gestionale modulare per retail: 41 moduli componibili, SaaS o On-Premise. Prova gratuita 30 giorni.',
        // TODO: Aggiungere Twitter image quando disponibile
        // images: ['/twitter-image.jpg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="it">
            <head>
                {/* Google Fonts - Inter (primary) + Switzer (fallback) */}

                {/* Google Analytics 4 */}
                {process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}');
                            `}
                        </Script>
                    </>
                )}
            </head>
            <body className="text-gray-950 antialiased">
                {children}
                <SanityLive revalidateSyncTags={revalidateSyncTags} />
            </body>
        </html>
    )
}
