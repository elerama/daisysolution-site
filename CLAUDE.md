# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Daisy Solution website - a Next.js 15 site for a retail management software (ERP) company. Built with Tailwind CSS 4 and Sanity CMS for the blog.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Build
npm run build        # Production build
npm run start        # Serve production build

# Code Quality
npm run lint         # ESLint with next/core-web-vitals

# Sanity CMS
npm run typegen      # Regenerate TypeScript types from Sanity schema
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 with PostCSS
- **CMS**: Sanity (embedded studio at /studio)
- **Language**: TypeScript with strict mode
- **UI**: Headless UI, Framer Motion, Heroicons

### Directory Structure
```
src/
├── app/               # Next.js App Router pages
│   ├── blog/          # Blog pages (Sanity-powered)
│   ├── prodotto/      # Product pages (moduli/ has dynamic routes)
│   ├── settori/       # Sector-specific pages
│   ├── studio/        # Sanity Studio (embedded)
│   └── ...
├── components/        # React components
├── data/              # Static data (moduleData.ts, modulesIndex.ts)
├── sanity/            # Sanity configuration
│   ├── schemaTypes/   # Content schemas (post, author, category)
│   ├── queries.ts     # GROQ queries
│   ├── client.ts      # Sanity client
│   └── live.ts        # Live preview setup
└── styles/            # Tailwind CSS entry
```

### Path Aliases
- `@/*` maps to `./src/*`

### Sanity CMS
- **Project ID**: awo9j8b4
- **Studio URL**: /studio
- Schema types: post, author, category, blockContent
- GROQ queries centralized in `src/sanity/queries.ts`
- After schema changes: run `npm run typegen`

### Environment Configuration
- `.env.local` - Local development (production dataset)
- `.env.staging` - Staging (staging dataset)
- `.env.production` - Production

Required env vars:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SITE_URL`

### Module System
Product modules defined in `src/data/`:
- `modulesIndex.ts` - Slug list and name mapping
- `moduleData.ts` - Full module content
- Dynamic route: `/prodotto/moduli/[slug]`

## Key Patterns

- Server Components by default (Next.js App Router)
- Client components marked with 'use client' directive
- Italian language content throughout the site
- Sanity live preview via `SanityLive` component in layout
