# SITE-STEP 0 — Analisi Base Radiant Template

**Data:** 2025-11-11
**Versione strategy reference:** v1.1.0

---

## Struttura Template Radiant Esistente

### Directory Layout

```
src/
├── app/
│   ├── blog/           # Route blog demo Radiant
│   ├── company/        # Route company demo Radiant
│   ├── login/          # Route login demo Radiant
│   ├── pricing/        # Route pricing demo Radiant
│   ├── studio/         # Sanity Studio route
│   ├── layout.tsx      # Root layout con metadata
│   ├── page.tsx        # Homepage demo Radiant
│   └── favicon.ico
├── components/
│   ├── animated-number.tsx
│   ├── bento-card.tsx      ⭐ Riutilizzabile per USP cards
│   ├── button.tsx          ⭐ Riutilizzabile
│   ├── container.tsx       ⭐ Riutilizzabile
│   ├── footer.tsx          🔧 Da adattare per Daisy
│   ├── gradient.tsx        ⭐ Riutilizzabile
│   ├── keyboard.tsx        ❌ Non necessario per Daisy
│   ├── link.tsx            ⭐ Riutilizzabile
│   ├── linked-avatars.tsx  🔧 Da adattare per testimonials
│   ├── logo-cloud.tsx      ⭐ Riutilizzabile per clienti (Unieuro, Expert, etc.)
│   ├── logo-cluster.tsx    🔧 Valutare utilizzo
│   ├── logo-timeline.tsx   ❌ Non necessario per Daisy
│   ├── logo.tsx            🔧 DA SOSTITUIRE con logo Daisy
│   ├── map.tsx             🔧 Da adattare per sezione contatti
│   ├── navbar.tsx          🔧 Da adattare per menu Daisy
│   ├── plus-grid.tsx       ⭐ Riutilizzabile (grid system Radiant)
│   ├── screenshot.tsx      ⭐ Riutilizzabile per screenshot dashboard
│   ├── testimonials.tsx    ⭐ Riutilizzabile per customer stories
│   └── text.tsx            ⭐ Riutilizzabile (Heading, Subheading components)
├── sanity/
│   ├── client.ts
│   ├── env.ts
│   ├── image.ts
│   ├── live.ts
│   ├── revalidateSyncTags.ts
│   ├── schema.ts
│   ├── types.ts
│   └── types/              # Schema definitions (author, blog post, etc.)
└── styles/
    └── tailwind.css        🔧 Da estendere con brand colors Daisy

```

---

## 1. Componenti Riutilizzabili Così Come Sono

Questi componenti non richiedono modifiche sostanziali e possono essere usati direttamente per Daisy:

### Layout & Structure
- ✅ `button.tsx` — CTA buttons (primaria, secondaria, terziaria)
- ✅ `container.tsx` — Max-width container system
- ✅ `gradient.tsx` — Background gradient effects
- ✅ `plus-grid.tsx` — Grid system Radiant (mantiene visual consistency)
- ✅ `link.tsx` — Enhanced Next.js Link component
- ✅ `text.tsx` — Typography components (Heading, Subheading, Lead)

### Feature Components
- ✅ `bento-card.tsx` — Perfetto per 6 USP cards homepage
- ✅ `logo-cloud.tsx` — Social proof section (Unieuro, Expert, Domex, Gaer)
- ✅ `screenshot.tsx` — Dashboard screenshots with device mockups
- ✅ `testimonials.tsx` — Customer stories & quotes
- ✅ `animated-number.tsx` — Stats section animations (270 negozi, 200+ utenti, etc.)

### Total: **11 componenti** pronti all'uso

---

## 2. Componenti da Adattare per Daisy

Questi componenti richiedono modifiche per allinearsi a brand/content Daisy:

### Critical Adaptations

#### 🔧 `navbar.tsx`
**Modifiche necessarie:**
- Menu items: `Prodotto▾`, `Settori▾`, `Customer Stories`, `Tecnologie▾`, `Prezzi`, `Risorse▾`, `Contatti`
- Aggiungere flyout menu component per dropdown multi-colonna (Prodotto → 4 sub-sections)
- CTA button "Richiedi Demo" prominente (right-aligned, brand color arancione)
- Logo Daisy + "by Elettrorama" discreto

**Stato:** 🔧 Adatta struttura esistente + aggiungi flyout logic

#### 🔧 `footer.tsx`
**Modifiche necessarie:**
- 4 colonne sitemap: Prodotto, Settori, Azienda, Legale
- Newsletter signup section (top of footer)
- Link corretti: Privacy, Cookie, Termini servizio
- Footer brand: Logo Daisy + "by Elettrorama" bottom
- Rimuovere social links demo Radiant (o sostituire con social Daisy se esistenti)

**Stato:** 🔧 Restructure sitemap + newsletter + brand

#### 🔧 `logo.tsx`
**Modifiche necessarie:**
- Sostituire SVG Radiant con logo Daisy Solution
- Mantenere variant props (dimensioni, colori) per riutilizzo
- Aggiungere optional "by Elettrorama" inline variant

**Stato:** 🔧 Replace SVG asset + maintain API

#### 🔧 `map.tsx`
**Modifiche necessarie:**
- Configurare coordinate sede Elettrorama (se usato in sezione Contatti)
- Opzionale: potrebbe non servire per sito SaaS lead-gen (da valutare con marketing)

**Stato:** 🔧 Configure location data o rimuovere

#### 🔧 `linked-avatars.tsx`
**Modifiche necessarie:**
- Adattare per testimonial avatars (CTO Unieuro, CEO Model Assistance, etc.)
- Potrebbe servire per sezione "Customer Stories" con avatars multipli

**Stato:** 🔧 Adapt for testimonial use case

#### 🔧 `logo-cluster.tsx`
**Modifiche necessarie:**
- Valutare se usare per integrazioni (eBay, Amazon, ESL, Fastlabel logos)
- Alternativa a logo-cloud per layout diverso

**Stato:** 🔧 Evaluate use case + adapt se necessario

### Total: **6 componenti** da adattare

---

## 3. Componenti/Route da Rimuovere o Archiviare

Questi elementi sono specifici del demo Radiant e non servono per Daisy:

### Routes Demo da Rimuovere/Sostituire

#### ❌ `app/blog/`
**Azione:** Rimuovere completamente (Daisy avrà sezione Risorse, non blog tradizionale)
**Alternativa:** Creare `app/risorse/` con griglia risorse (brochure, video, docs, FAQ)

#### ❌ `app/company/`
**Azione:** Rimuovere o riutilizzare struttura per `app/chi-siamo/` (bassa priorità, non in strategy v1.1)
**Status:** Archive for now

#### ❌ `app/login/`
**Azione:** Rimuovere (Daisy site è lead-gen, no user login)
**Nota:** Login sarà su app.daisysolution.it (fuori scope sito marketing)

#### ❌ `app/pricing/`
**Azione:** Sostituire completamente con nuova route `app/prezzi/`
**Contenuto:** 3 tiers (Starter/Professional/Enterprise) + SaaS vs On-Premise comparison + FAQ

#### ✅ `app/studio/`
**Azione:** Mantenere (Sanity Studio per content management)
**Nota:** Access via `/studio` per editor content

### Homepage Demo
#### 🔧 `app/page.tsx`
**Azione:** Riscrivere completamente seguendo strategy v1.1 section HOME
**Contenuto:** Hero split screenshot → 4 Benefit Pillars → Logo cloud → Stats → 6 USP bento → CTA finale

### Components Demo-Specific
#### ❌ `keyboard.tsx`
**Azione:** Rimuovere (component demo Radiant per keyboard shortcuts, non rilevante per Daisy)

#### ❌ `logo-timeline.tsx`
**Azione:** Rimuovere (component demo Radiant per timeline, non usato in strategy v1.1)

### Sanity Schema Types da Rimuovere/Adattare
#### 🔧 `sanity/types/` (author, blog post, etc.)
**Azione:** Rimuovere schema blog-related; creare nuovi schema per:
- Form submissions (demo requests, contact, preventivi)
- Testimonials (cliente, quote, avatar, azienda, settore)
- Case studies (titolo, cliente, challenge, solution, results, metrics)
- Resources (tipo, titolo, description, file/URL, thumbnail)

**Status:** Clean up + create Daisy-specific schemas

### Total: **4 routes** da rimuovere/sostituire + **2 components** da rimuovere + **Sanity schemas** da adattare

---

## 4. Nuovi Componenti da Creare per Daisy

Basandosi su strategy v1.1, questi componenti non esistono in Radiant e vanno creati:

### Feature Sections Components
- `feature-grid.tsx` — Reusable 2x2 / 3x3 grid per moduli, integrazioni
- `feature-split.tsx` — Split layout testo + screenshot (riutilizzabile per Prodotto sections)
- `feature-offset.tsx` — Offset 2x2 grid per "8 motivi per scegliere Daisy"

### Pricing Components
- `pricing-tiers.tsx` — 3-tier cards con emphasized tier (Professional)
- `pricing-comparison.tsx` — Tabella comparazione Gestionale Tradizionale vs Daisy
- `pricing-saas-onprem.tsx` — 2-tier + extra tier (Ibrido)

### Header/Section Components
- `section-header.tsx` — Eyebrow + Headline + Subheading (riutilizzabile per tutte le sezioni)
- `page-hero.tsx` — Hero for internal pages (simpler than homepage hero)

### Form Components
- `demo-request-form.tsx` — Form strutturato (Nome, Email, Tel, N. PV, Settore, Moduli, Note)
- `newsletter-form.tsx` — Simple email input + CTA (footer)
- `preventivo-form.tsx` — Custom pricing request form

### Content Components
- `stats-grid.tsx` — 4-stat grid con animated numbers
- `case-study-card.tsx` — Card per customer stories grid
- `resource-card.tsx` — Card per risorse (brochure, video, docs)
- `code-panel.tsx` — Code example panel per sezione Sicurezza RBAC

### Navigation Components
- `flyout-menu.tsx` — Dropdown multi-column menu per Prodotto/Tecnologie/Risorse
- `breadcrumb.tsx` — Navigation breadcrumb per internal pages

### Total: **~15 nuovi componenti** da creare progressivamente nei SITE-STEPS successivi

---

## 5. Configurazione & Setup Tasks

### Environment Variables da Configurare
```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=<existing>
NEXT_PUBLIC_SANITY_DATASET=<existing>
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-10

# Analytics (SITE-STEP 6)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email (form submissions)
RESEND_API_KEY=<to_configure>
SENDGRID_API_KEY=<alternative>
NOTIFICATION_EMAIL=demo@daisysolution.it
```

### Package Dependencies da Verificare/Aggiungere
```json
{
  "dependencies": {
    "next": "15.x",                    // ✅ Già presente
    "react": "19.x",                   // ✅ Verificare versione
    "tailwindcss": "4.x",              // ✅ Già presente
    "@sanity/client": "latest",        // ✅ Già presente
    "@headlessui/react": "latest",     // ✅ Già presente (flyout menus)
    "framer-motion": "latest",         // ✅ Già presente (animations)
    "@heroicons/react": "latest",      // ✅ Già presente (icons)
    "react-hook-form": "^7.x",         // 🔧 Da aggiungere (form validation)
    "zod": "^3.x",                     // 🔧 Da aggiungere (schema validation)
    "resend": "^3.x"                   // 🔧 Da aggiungere (email service) o Sendgrid
  },
  "devDependencies": {
    "next-sitemap": "^4.x"             // 🔧 Da aggiungere (SITE-STEP 6 - sitemap generation)
  }
}
```

### Brand Assets da Preparare
- Logo Daisy Solution (SVG) — primary + white variant
- Logo Elettrorama mini (per "by Elettrorama")
- Favicon set (16x16, 32x32, 180x180, 192x192, 512x512)
- OG image default (1200x630 per social sharing)
- Loghi clienti: Unieuro, Expert, Domex, Gaer, Trend, Model Assistance (SVG/PNG alta risoluzione)
- Screenshot dashboard Daisy (20+ immagini gap identificato in strategy)

**Status:** 🔴 Gap critico — Screenshot UI moduli priorità assoluta (SITE-STEP 2 blocker)

---

## 6. Tailwind CSS 4 Brand Customization

### Tokens da Aggiungere in `src/styles/tailwind.css`

```css
@theme {
  /* Typography */
  --font-sans: Inter, Switzer, system-ui, sans-serif;

  /* Brand Colors (v1.1 approved) */
  --color-brand-primary: #0F4C81;        /* Blu corporate */
  --color-brand-secondary: #F59E0B;      /* Arancione CTA */

  /* Backgrounds */
  --color-background: #FFFFFF;
  --color-surface: #F8FAFC;              /* slate-50 */

  /* Text */
  --color-text-primary: #0F172A;         /* slate-900 */
  --color-text-secondary: #64748B;       /* slate-500 */

  /* Borders */
  --color-border: #E2E8F0;               /* slate-200 */

  /* Semantic */
  --color-success: #10B981;              /* green-600 */
  --color-warning: #F59E0B;              /* amber-600 */
  --color-error: #DC2626;                /* red-600 */
  --color-info: #3B82F6;                 /* blue-600 */

  /* Radius (mantenere Radiant standard) */
  --radius-4xl: 2rem;
}
```

### Typography Scale (strategy v1.1 §4.2)
```css
/* Scale tipografica custom */
@layer utilities {
  .text-9xl { font-size: 8rem; line-height: 1; }    /* H1 desktop hero */
  .text-8xl { font-size: 6rem; line-height: 1; }    /* H1 mobile hero */
  .text-6xl { font-size: 3.75rem; line-height: 1; } /* H1 interno */
  /* ... etc. — utilizzare scale Tailwind default dove possibile */
}
```

**Azione SITE-STEP 1:** Estendere `tailwind.css` con brand tokens mantenendo compatibilità Radiant base

---

## 7. Priorità Implementation Path

### Immediate (SITE-STEP 1)
1. ✅ Adatta `layout.tsx` → metadata Daisy + lang="it"
2. ✅ Adatta `navbar.tsx` → menu Daisy + CTA "Richiedi Demo"
3. ✅ Adatta `footer.tsx` → sitemap Daisy + newsletter
4. ✅ Sostituisci `logo.tsx` → logo Daisy SVG
5. ✅ Estendi `tailwind.css` → brand colors tokens

### High Priority (SITE-STEP 2-3)
1. Homepage riscrittura completa (`app/page.tsx`)
2. Nuovi componenti: `section-header`, `feature-grid`, `stats-grid`, `demo-request-form`
3. Routes Prodotto: `/app/prodotto/`, `/moduli/`, `/integrazioni/`, `/perche-daisy/`

### Medium Priority (SITE-STEP 4-5)
1. Route Prezzi: `/app/prezzi/`
2. Route Contatti: `/app/contatti/`
3. Routes Settori: `/app/settori/[slug]/`
4. Routes Customer Stories: `/app/customer-stories/`
5. Routes Tecnologia: `/app/tecnologia/`

### Low Priority (SITE-STEP 6-7)
1. Route Risorse: `/app/risorse/`
2. SEO optimization (sitemap, robots.txt, metadata, JSON-LD)
3. Analytics setup (GA4)
4. Performance optimization (Lighthouse ≥90)
5. QA & Deployment

---

## 8. Risk & Blockers Identification

### 🔴 Critical Blockers
1. **Screenshot dashboard mancanti** → impedisce hero sections, feature screenshots, case studies
   - **Impact:** SITE-STEP 2 (Homepage) parzialmente bloccato
   - **Mitigation:** Usare placeholder images + TODO comments fino a delivery screenshot reali
   - **Owner:** Design team + Dev (ambiente demo screenshot)

2. **Logo Daisy SVG non disponibile** → blocca SITE-STEP 1 navbar/footer
   - **Impact:** SITE-STEP 1 appearance non finale
   - **Mitigation:** Usare logo temporaneo Radiant + sostituire appena disponibile
   - **Owner:** Design/Marketing

### 🟡 Medium Risks
1. **Testimonial quotes non raccolte** → customer stories section incompleta
   - **Impact:** SITE-STEP 5 testimonials placeholders
   - **Mitigation:** Copy temporaneo generico → replace post-raccolta
   - **Owner:** Customer Success team

2. **Loghi clienti alta risoluzione** → logo cloud bassa qualità
   - **Impact:** Visual quality compromessa
   - **Mitigation:** Usare loghi esistenti lower quality → upgrade later
   - **Owner:** Marketing (verificare autorizzazioni + file HD)

3. **Content copy finale non disponibile** → testi placeholder
   - **Impact:** Review copy richiesto post-development
   - **Mitigation:** Usare copy dai docs intelligence + TODO where missing
   - **Owner:** Marketing/Content team

### 🟢 Low Risks
1. **Video walkthrough moduli non pronti** → sezione video embed empty
   - **Impact:** Minor — video opzionali
   - **Mitigation:** Link YouTube esistenti (panoramica Daisy, DaisyApp, DaisyCheck) sufficienti per MVP
   - **Owner:** Video production (post-launch)

---

## 9. SITE-STEP 1 Readiness Checklist

Prima di procedere con `ESEGUI SITE-STEP 1`, verificare:

- [x] Template Radiant structure analizzata e compresa
- [x] Componenti riutilizzabili identificati (11 items)
- [x] Componenti da adattare mappati (6 items)
- [x] Componenti da rimuovere identificati (4 routes + 2 components)
- [x] Nuovi componenti da creare elencati (~15 items)
- [x] Brand colors tokens definiti (blu #0F4C81 + arancione #F59E0B)
- [x] Environment variables reviewed
- [x] Dependencies packages reviewed
- [ ] Logo Daisy SVG disponibile ⚠️ (usare temporaneo se non pronto)
- [ ] Brand assets checklist condivisa con design/marketing team ⚠️
- [x] Risk mitigation strategy per screenshot gap definita

**Status:** ✅ Ready to proceed with SITE-STEP 1 (con mitigazioni per logo SVG e screenshot)

---

## Conclusione SITE-STEP 0

### Recap Analisi

**Template Radiant fornisce:**
- ✅ Solid foundation: 11 componenti riutilizzabili senza modifiche
- ✅ Layout system robusto (Container, PlusGrid, Typography)
- ✅ Sanity CMS già integrato (form backend ready)
- ✅ Tailwind CSS 4 configurato
- ✅ Next.js 15 App Router structure
- ✅ Animation/interaction components (Framer Motion ready)

**Adattamenti necessari:**
- 🔧 6 componenti da modificare (navbar, footer, logo, map, avatars, cluster)
- 🔧 4 routes demo da sostituire (blog → risorse, pricing → prezzi, etc.)
- 🔧 ~15 nuovi componenti da creare progressivamente
- 🔧 Brand colors integration in Tailwind config
- 🔧 Sanity schemas da adattare (rimuovere blog, aggiungere forms/testimonials/resources)

**Asset gaps critici:**
- 🔴 Screenshot dashboard UI (20+ immagini) — BLOCKER PARZIALE
- 🟡 Logo Daisy SVG — usare temporaneo se necessario
- 🟡 Testimonial quotes — copy temporaneo OK
- 🟡 Loghi clienti HD — upgrade post-launch acceptable

**Strategia forward:**
- Procedere con SITE-STEP 1 (Layout & Global Components) usando mitigation per assets mancanti
- Placeholder approach per screenshot fino a delivery reali
- Iterative refinement: MVP functional → asset upgrade → content polish → launch

---

**SITE-STEP 0 completato. ✅**

**Pronto per comando:**
```
ESEGUI SITE-STEP 1
```

