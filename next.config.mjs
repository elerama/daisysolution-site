/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect /prodotto to /funzionalita
      {
        source: '/prodotto',
        destination: '/funzionalita',
        permanent: true,
      },
      // Redirect /prodotto/moduli to /funzionalita
      {
        source: '/prodotto/moduli',
        destination: '/funzionalita',
        permanent: true,
      },
      // Redirect /prodotto/moduli/:slug to /funzionalita/:slug
      {
        source: '/prodotto/moduli/:slug',
        destination: '/funzionalita/:slug',
        permanent: true,
      },
      // Redirect /prodotto/perche-daisy to /perche-daisy
      {
        source: '/prodotto/perche-daisy',
        destination: '/perche-daisy',
        permanent: true,
      },
      // Redirect old module slugs to new ones
      {
        source: '/funzionalita/statistiche-bi',
        destination: '/funzionalita/statistiche',
        permanent: true,
      },
      {
        source: '/funzionalita/webservice',
        destination: '/funzionalita/connessione-omnicanale',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
