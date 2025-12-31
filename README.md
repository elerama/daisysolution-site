# Daisy Solution Website

Sito web istituzionale di Daisy Solution - software gestionale web per retail.

## Stack Tecnologico

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **CMS**: Sanity (blog)
- **Hosting**: Vercel

## Comandi

```bash
# Sviluppo
npm run dev          # Start dev server at http://localhost:3000

# Build
npm run build        # Production build
npm run start        # Serve production build

# Sanity CMS
npm run typegen      # Regenera tipi TypeScript da schema Sanity
```

## Ambienti

- **`.env.local`** - Sviluppo locale
- **`.env.staging`** - Staging (dataset `staging`)
- **`.env.production`** - Produzione

## Sanity Studio

Il CMS è accessibile all'indirizzo [http://localhost:3000/studio](http://localhost:3000/studio).
