# Configurazione Sanity CMS per Daisy Solution Blog

## Overview

Il blog di Daisy Solution è gestito tramite Sanity CMS, un headless CMS moderno e flessibile.

## Configurazione Iniziale

### 1. Crea Account Sanity

1. Vai su https://www.sanity.io/
2. Crea un account gratuito (o accedi)
3. Crea un nuovo progetto "Daisy Solution Blog"

### 2. Ottieni Credenziali Progetto

Dopo aver creato il progetto, otterrai:

- **Project ID**: stringa univoca (es. `abc123xy`)
- **Dataset**: generalmente `production` (già configurato)

### 3. Aggiorna Variabili d'Ambiente

Modifica `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
```

**Nota**: Sostituisci `<your-project-id>` con il tuo Project ID reale.

### 4. Deploy Schema Sanity

```bash
# Assicurati di essere nella directory del progetto
cd /home/marcodc92/code/ele/daisy-workspace/projects/daisysolution-site

# Effettua il deploy dello schema
npx sanity deploy
```

Questo comando caricherà gli schemi definiti in `src/sanity/types/` nel tuo progetto Sanity:

- **Post**: articoli blog con titolo, slug, contenuto, immagine, autore, categorie
- **Author**: autori blog con nome, immagine, bio
- **Category**: categorie per organizzare i post
- **Block Content**: rich text editor per contenuti articoli

### 5. Accedi allo Studio Sanity

Lo Studio Sanity è disponibile all'indirizzo:

```
http://localhost:3000/studio
```

oppure in produzione:

```
https://daisysolution.it/studio
```

## Gestione Contenuti

### Creare un Nuovo Post

1. Vai su `/studio`
2. Clicca su "Post" nella sidebar
3. Clicca "Create new Post"
4. Compila i campi:
   - **Title**: Titolo dell'articolo
   - **Slug**: URL-friendly (generato automaticamente dal titolo)
   - **Published At**: Data di pubblicazione
   - **Is Featured**: Spunta per mostrare in homepage (max 3 featured)
   - **Author**: Seleziona/crea autore
   - **Main Image**: Immagine di copertina (+ alt text per SEO)
   - **Categories**: Scegli categorie (es. "Novità", "Guide", "Case Study")
   - **Excerpt**: Breve riassunto (150-200 caratteri)
   - **Body**: Contenuto completo (rich text editor)
5. Clicca "Publish"

### Creare Autori

1. Vai su "Author" nello Studio
2. Crea profili autori con:
   - Nome completo
   - Immagine profilo
   - Bio breve

### Creare Categorie

1. Vai su "Category"
2. Crea categorie suggerite:
   - **Novità Prodotto**: Aggiornamenti funzionalità Daisy
   - **Guide Pratiche**: Tutorial e best practice
   - **Case Study**: Storie successo clienti
   - **Settore Retail**: Trend e insights mercato
   - **Tecnologia**: Approfondimenti tecnici

## Struttura Schema

### Post Type

```typescript
{
  title: string // Titolo articolo
  slug: slug // URL slug (es. "come-gestire-inventario")
  publishedAt: datetime // Data pubblicazione
  isFeatured: boolean // Mostra in homepage (max 3)
  author: reference // Riferimento ad Author
  mainImage: image // Immagine copertina + alt text
  categories: array // Array di riferimenti a Category
  excerpt: text // Riassunto breve
  body: blockContent // Contenuto rich text
}
```

### Validazioni Automatiche

- **Featured Posts**: Massimo 3 post possono essere "featured" contemporaneamente
- **Slug**: Obbligatorio e unico
- **Published At**: Obbligatorio per ordinamento cronologico

## Frontend Blog

### URL Structure

- **Blog Index**: `/blog`
- **Single Post**: `/blog/[slug]`
- **Category Filter**: `/blog?category=novita-prodotto`
- **Pagination**: `/blog?page=2`

### Funzionalità Implementate

- ✅ Lista post con paginazione (5 post/pagina)
- ✅ Featured posts in evidenza (max 3)
- ✅ Filtro per categoria (dropdown)
- ✅ Feed RSS (`/blog/feed.xml`)
- ✅ Metadata SEO ottimizzati per ogni post
- ✅ Immagini ottimizzate tramite Sanity CDN
- ✅ Formattazione date italiana (dayjs)

## Workflow Pubblicazione

### 1. Bozza → Pubblicazione

1. Scrivi post nello Studio Sanity
2. Salva come bozza (Draft)
3. Rivedi e correggi
4. Clicca "Publish" quando pronto

### 2. Visualizzazione Live

Il sito usa **draft mode** per visualizzare bozze:

- Utenti normali: vedono solo post pubblicati
- Admin con draft mode: vedono anche bozze

### 3. Aggiornamenti Contenuto

- Le modifiche a post pubblicati si riflettono immediatamente
- Next.js usa ISR (Incremental Static Regeneration) con revalidation

## Comandi Utili

```bash
# Avvia dev server Next.js (include Studio a /studio)
npm run dev

# Deploy schema Sanity (dopo modifiche a src/sanity/types/)
npx sanity deploy

# Genera TypeScript types da schema Sanity
npm run typegen

# Build produzione
npm run build
```

## Personalizzazioni Schema

Per aggiungere campi custom ai post:

1. Modifica `src/sanity/types/post.ts`
2. Aggiungi il campo con `defineField()`
3. Esegui `npx sanity deploy`
4. Esegui `npm run typegen` per aggiornare types TypeScript

Esempio - Aggiungere campo "Reading Time":

```typescript
defineField({
  name: 'readingTime',
  type: 'number',
  title: 'Tempo di Lettura (minuti)',
  validation: (Rule) => Rule.min(1).max(60),
})
```

## Best Practices

### SEO

- Usa immagini ottimizzate (max 1920px width)
- Compila sempre alt text per immagini
- Excerpt concisi e informativi (150-200 char)
- Titoli chiari e descrittivi (50-60 char)

### Content Strategy

- Pubblica regolarmente (almeno 2-4 post/mese)
- Varia tra guide pratiche, novità prodotto, case study
- Usa featured posts per contenuti strategici
- Mantieni categorie organizzate e coerenti

### Performance

- Sanity CDN ottimizza automaticamente le immagini
- ISR riduce carico server con caching intelligente
- Lazy loading immagini sotto il fold

## Troubleshooting

### "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"

- Verifica che `.env.local` contenga il Project ID corretto
- Riavvia il dev server dopo aver modificato `.env.local`

### Schema non aggiornato

```bash
npx sanity deploy
npm run typegen
```

### Permessi Studio

- Assicurati di essere autenticato con account Sanity corretto
- Verifica ruoli utente nel dashboard Sanity (sanity.io/manage)

## Risorse

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [Next.js + Sanity Integration](https://github.com/sanity-io/next-sanity)

---

**Nota**: Questo setup è ottimizzato per Daisy Solution. Per personalizzazioni avanzate o integrazioni custom, consulta la documentazione Sanity ufficiale.
