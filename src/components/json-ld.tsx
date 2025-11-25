import { ADDRESS, COMPANY, CONTACTS } from '@/data/siteStats';
import Script from 'next/script';

/**
 * JSON-LD Structured Data Component
 * Implements Organization, BreadcrumbList, FAQPage schemas for SEO
 * Reference: schema.org vocabulary for search engine optimization
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  type: 'organization' | 'breadcrumb' | 'faq';
  data?: {
    breadcrumbs?: BreadcrumbItem[];
    faqs?: FAQItem[];
  };
}

export function JsonLd({ type, data }: JsonLdProps) {
  const baseUrl = 'https://daisysolution.it'; // TODO: Replace with actual production URL

  // Organization Schema (for all pages via layout)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    alternateName: COMPANY.fullName,
    url: baseUrl,
    logo: `${baseUrl}/logo-daisy-solution.png`,
    description:
      'Gestionale ERP modulare per retail elettronica, elettrodomestici, catene GDO. Multi-tenant, SaaS o on-premise, integrazioni native eBay/Amazon/ESL.',
    foundingDate: String(COMPANY.foundedYear),
    founder: {
      '@type': 'Organization',
      name: COMPANY.parentCompany,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.province,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: CONTACTS.phone,
      email: CONTACTS.emailSales,
      availableLanguage: 'Italian',
    },
    sameAs: [
      'https://www.linkedin.com/company/elettrorama',
      'https://www.facebook.com/daisysolution',
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data?.breadcrumbs?.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  // FAQPage Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data?.faqs?.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  let schema;
  switch (type) {
    case 'organization':
      schema = organizationSchema;
      break;
    case 'breadcrumb':
      schema = breadcrumbSchema;
      break;
    case 'faq':
      schema = faqSchema;
      break;
    default:
      return null;
  }

  return (
    <Script
      id={`json-ld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Pre-configured breadcrumbs for common paths
 */
export const commonBreadcrumbs = {
  settori: [
    { name: 'Home', url: '/' },
    { name: 'Settori', url: '/settori' },
  ],
  settoriNegoziSingoli: [
    { name: 'Home', url: '/' },
    { name: 'Settori', url: '/settori' },
    { name: 'Negozi Singoli', url: '/settori/negozi-singoli' },
  ],
  settoriCatene: [
    { name: 'Home', url: '/' },
    { name: 'Settori', url: '/settori' },
    { name: 'Catene & Affiliazioni', url: '/settori/catene' },
  ],
  settoriDistribuzione: [
    { name: 'Home', url: '/' },
    { name: 'Settori', url: '/settori' },
    { name: 'Distribuzione Organizzata', url: '/settori/distribuzione' },
  ],
  settoriAltri: [
    { name: 'Home', url: '/' },
    { name: 'Settori', url: '/settori' },
    { name: 'Altri Settori', url: '/settori/altri-settori' },
  ],
  customerStories: [
    { name: 'Home', url: '/' },
    { name: 'Settori', url: '/settori' },
    { name: 'Customer Stories', url: '/settori/customer-stories' },
  ],
  tecnologie: [
    { name: 'Home', url: '/' },
    { name: 'Tecnologie', url: '/tecnologie' },
  ],
  prodotto: [
    { name: 'Home', url: '/' },
    { name: 'Prodotto', url: '/prodotto' },
  ],
  prodottoModuli: [
    { name: 'Home', url: '/' },
    { name: 'Prodotto', url: '/prodotto' },
    { name: 'Moduli', url: '/prodotto/moduli' },
  ],
  prodottoIntegrazioni: [
    { name: 'Home', url: '/' },
    { name: 'Prodotto', url: '/prodotto' },
    { name: 'Integrazioni', url: '/prodotto/integrazioni' },
  ],
  prodottoPerche: [
    { name: 'Home', url: '/' },
    { name: 'Prodotto', url: '/prodotto' },
    { name: 'Perché Daisy', url: '/prodotto/perche-daisy' },
  ],
  prezzi: [
    { name: 'Home', url: '/' },
    { name: 'Prezzi', url: '/prezzi' },
  ],
  contatti: [
    { name: 'Home', url: '/' },
    { name: 'Contatti', url: '/contatti' },
  ],
};
