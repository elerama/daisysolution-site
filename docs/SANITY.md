# Sanity CMS - Guida Rapida

## Configurazione Completata ✅

- **Project ID**: `awo9j8b4`
- **Dataset**: `production`
- **Organization**: Elettrorama
- **Studio URL**: <http://localhost:3000/studio>
- **Blog URL**: <http://localhost:3000/blog>

## Contenuti Iniziali Creati

Lo script `scripts/seed-sanity.ts` ha popolato Sanity con:

### Autore

- **Team Daisy Solution** - Account team per articoli ufficiali

### Categorie (4)

1. **Case Study** - Storie di successo clienti
2. **Guide ERP** - Guide pratiche retail
3. **E-commerce** - Contenuti Elecommerce
4. **Compliance** - RAEE e normative

### Post (5)

1. **Come Unieuro gestisce 270 negozi affiliati** - Case study 1Company
2. **Domex sincronizza 200+ negozi con Fastlabel** - Visual merchandising
3. **Eldomcat: 300.000+ articoli** - Banca dati centralizzata
4. **RAEE compliance automatica** - Guida normativa
5. **Elecommerce: vendita su marketplace** - Multi-canale

## Comandi Utili

```bash
# Avvia dev server
npm run dev

# Accedi a Sanity Studio
# http://localhost:3000/studio

# Rigenera tipi TypeScript da schema
npm run typegen

# Ri-popola contenuti (attenzione: non controlla duplicati)
npx sanity exec scripts/seed-sanity.ts --with-user-token

# Deploy Sanity Studio in produzione
npx sanity deploy
```

## Gestione Contenuti

### Creare un nuovo post

1. Vai su <http://localhost:3000/studio>
2. Clicca su "Post" nel menu laterale
3. Clicca "+ Create" → "Post"
4. Compila:
   - **Title**: Titolo articolo
   - **Slug**: Auto-generato da title (click "Generate")
   - **Author**: Seleziona "Team Daisy Solution"
   - **Main Image**: Upload immagine (opzionale)
   - **Categories**: Seleziona 1+ categorie
   - **Published At**: Data/ora pubblicazione
   - **Body**: Contenuto rich text
5. Clicca "Publish"

### Modificare schema

Modifica i file in `src/sanity/schemaTypes/`:

- `postType.ts` - Schema post blog
- `authorType.ts` - Schema autori
- `categoryType.ts` - Schema categorie
- `blockContentType.ts` - Rich text config

Dopo aver modificato lo schema:

```bash
npm run typegen  # Rigenera tipi TypeScript
```

## Integrazione Next.js

### Query Sanity da componenti

```typescript
import { sanityFetch } from '@/sanity/lib/live'
import { GET_ALL_POSTS_QUERY } from '@/sanity/queries'

// In server component
const { data: posts } = await sanityFetch({
  query: GET_ALL_POSTS_QUERY,
})
```

### Aggiungere nuove query

Modifica `src/sanity/queries.ts`:

```typescript
export const MY_CUSTOM_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    // ... altri campi
  }
`)
```

## CORS e Domini

CORS già configurato per:

- `http://localhost:3000` (development)

Per aggiungere domini production:

```bash
npx sanity cors add https://daisysolution.it --credentials
```

## Backup e Migrazione

### Export dataset

```bash
npx sanity dataset export production backup.tar.gz
```

### Import dataset

```bash
npx sanity dataset import backup.tar.gz production
```

## Troubleshooting

### "Missing environment variable"

Verifica `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=awo9j8b4
NEXT_PUBLIC_SANITY_DATASET=production
```

### "You must login first"

```bash
npx sanity login
```

### Cache problemi

```bash
rm -rf .next
npm run dev
```

## Risorse

- [Sanity Documentation](https://www.sanity.io/docs)
- [next-sanity GitHub](https://github.com/sanity-io/next-sanity)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
