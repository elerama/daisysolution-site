---
description: "Prompt per generare il sito Daisy Solution in Next.js 15 con Tailwind CSS 4, basato sul documento strategico v1.1."
mode: agent
model: Claude Sonnet 4.5 (copilot)
tools: ['runCommands', 'runTasks', 'edit', 'runNotebooks', 'search', 'new', 'extensions', 'todos', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo']
---

# Daisy Site Builder — Next.js 15 + Tailwind CSS 4 + Vercel

## 🎯 Obiettivo

Generare il sito **Daisy Solution** partendo dal template **Radiant** di Tailwind CSS Plus **già integrato nel repository**.

Usiamo quindi:

* **Next.js 15 (App Router + TypeScript)**
* **Tailwind CSS 4**
* **Struttura e componenti esistenti di Radiant** (cartelle `app/`, `components/`, `sanity/`, `styles/`, ecc.) come base da adattare
* **Vercel** come target di deploy
* **Design e contenuti** basati esclusivamente su `20-daisy-tailwind-template-and-components-strategy.md` (v1.1).

Il sito deve essere:

* responsive (mobile-first),
* SEO-ready,
* performance-optimized (Lighthouse ≥90),
* conforme alla brand identity Daisy,
* privo di codice morto ereditato da Radiant non più coerente con Daisy.

---

## ⚙️ Regole operative

1. Lavora in **micro-step numerati**.
   Ogni step genera **solo il codice o la struttura richiesta** (non tutto il sito insieme).

2. Esegui uno step alla volta solo quando ricevi l’istruzione:

   ```
   ESEGUI SITE-STEP X
   ```

3. Ogni step deve produrre **file completi e validi**, con TypeScript, sintassi Next.js 15 aggiornata e commenti esplicativi.

4. Nessun placeholder testuale inventato:

   * i testi provengono dai documenti Daisy (brand, IA, content bridge, strategy) contenuti i `docs/intelligence/`;
   * dove i contenuti mancano, indica `// TODO: inserire copy da marketing`.

5. Struttura ogni output come file markdown con blocchi di codice (TSX, CSS, JSON).

---

## 🧩 SITE-STEP 0 — Analisi base Radiant

**Trigger:** `ESEGUI SITE-STEP 0`

Attività (non creare nuovo boilerplate, lavora su quello esistente):

* Analizza la struttura attuale del progetto (cartelle `app/`, `components/`, `sanity/`, `styles/`, ecc.) importata dal template Radiant.
* Elenca i file chiave da riutilizzare/adattare per Daisy (navbar, footer, hero, logo-cloud, testimonials, pricing, layout, sanity schema, ecc.).
* Identifica i file/route "generici" del demo Radiant (blog, company, studio, login, ecc.) da:

  * rinominare,
  * riutilizzare per sezioni Daisy,
  * oppure segnare come da rimuovere.

Output atteso:

* Una lista sintetica in markdown con 3 sezioni:

  1. `Componenti riutilizzabili così come sono`
  2. `Componenti da adattare per Daisy`
  3. `Componenti/route da rimuovere o archiviare`
* Conclusione: `SITE-STEP 0 completato. Pronto per SITE-STEP 1`.

---

## 🧱 SITE-STEP 1 — Adattamento Layout & Global Components

**Trigger:** `ESEGUI SITE-STEP 1`

Partendo dai file Radiant esistenti (`app/layout.tsx`, `components/navbar.tsx`, `components/footer.tsx`, `styles/tailwind.css` o equivalenti):

1. **`app/layout.tsx`**

   * Aggiorna metadata globali con nome e payoff Daisy Solution.
   * Imposta `lang="it"`.
   * Mantieni la struttura base Radiant ma sostituisci branding, favicon, font se necessario secondo v1.1.

2. **Header / Navbar**

   * Adatta `components/navbar.tsx` (o equivalente) per:

     * Logo Daisy + "by Elettrorama".
     * Menu: Prodotto▾, Settori▾, Customer Stories, Tecnologie▾, Prezzi, Risorse▾, Contatti.
     * CTA "Richiedi Demo" prominente.
     * Flyout menu per Prodotto basato sulle sezioni definite in strategy v1.1.

3. **Footer**

   * Adatta `components/footer.tsx` per:

     * Sezioni link: Prodotto, Settori, Azienda, Legale.
     * Newsletter signup (anche solo markup iniziale, backend TODO).
     * Copy finale con Daisy Solution + by Elettrorama.

4. **Stili globali**

   * In `styles/tailwind.css` o equivalente, integra i token brand (blu `#0F4C81`, arancione `#F59E0B`) come CSS vars, senza rompere la configurazione Radiant.

Output:

* Diff logico (descrizione modifiche) + snippet aggiornati per `layout`, `navbar`, `footer`.
* Conclusione: `SITE-STEP 1 completato. Pronto per SITE-STEP 2`.

---

## 🏠 SITE-STEP 2 — Homepage

**Trigger:** `ESEGUI SITE-STEP 2`

Crea `app/page.tsx` basata su mappa componenti sezione **HOME** (v1.1):

1. Hero principale → “Split with screenshot” ⭐

   * Headline: "Tutto quello che serve per gestire il tuo retail"
   * CTA: “Richiedi Demo”, “Guarda Video”, “Scarica Brochure”

2. 4 Benefit Pillars → “Centered 2x2 grid” ⭐

   * 4 card (Modulare, SaaS, Integrazioni, Multi-PV)

3. Social Proof → “Simple with heading” ⭐

   * Loghi Unieuro, Expert, Domex, Gaer, Trend, Model Assistance

4. Numeri impatto → “Simple grid”

   * 4 metriche da 14-content-bridge.md

5. USP bento grid → “Three column bento grid” ⭐

   * 6 card USP con valori concreti

6. CTA finale → “Simple centered on brand” ⭐

   * Input email + CTA “Richiedi Demo Gratuita 30 Giorni”

Output:

* File `page.tsx` completo con import componenti modulari da `/components`
* Commenti `// TODO: import immagini reali` dove necessario

---

## 🧮 SITE-STEP 3 — Pagine prodotto

**Trigger:** `ESEGUI SITE-STEP 3`

Crea:

* `/app/prodotto/page.tsx` → panoramica
* `/app/prodotto/moduli/page.tsx`
* `/app/prodotto/integrazioni/page.tsx`
* `/app/prodotto/perche-daisy/page.tsx`

Usa componenti:

* `FeatureSections` (“With product screenshot”, “With large screenshot”)
* `ContentSections` (“Two columns with screenshot”)
* `PricingSections` (“With comparison table”)

Assicurati che:

* ogni pagina abbia un `<SectionHeader>` coerente,
* link interni funzionino (Next `<Link>`),
* SEO metadata per pagina siano definiti (`generateMetadata` API Next.js 15).

---

## 💰 SITE-STEP 4 — Prezzi & Form Demo

**Trigger:** `ESEGUI SITE-STEP 4`

Crea:

* `/app/prezzi/page.tsx` con i blocchi:

  * “Three tiers with emphasized tier” ⭐
  * “Two tiers with extra tier” (SaaS vs On-premise)
  * “FAQ prezzi” (Two columns)
  * CTA “Richiedi Preventivo” form

* `/app/contatti/page.tsx` con:

  * “Split with pattern” ⭐ (form + trust icons)
  * “Four-column contacts” (telefono, email, helpdesk, orari)

Form backend:

* Collegamento con **Sanity CMS** per raccolta dati form.
* Validazione con React Hook Form + Zod.
* Azione: salvataggio → webhook email (Resend / Sendgrid).

---

## 🧠 SITE-STEP 5 — Settori, Customer Stories, Tecnologie

**Trigger:** `ESEGUI SITE-STEP 5`

Crea:

* `/app/settori/` con sottopagine (negozi, catene, distribuzione)
* `/app/customer-stories/` con griglia + dettagli Unieuro, Model Assistance
* `/app/tecnologia/` con sottopagine:

  * Architettura, SaaS vs On-Premise, Sicurezza, Compatibilità, Scalabilità

Usa componenti:

* `HeaderSections` (“With cards”)
* `ContentSections` (“Split with image”)
* `Testimonials` (“With large avatar”)
* `StatsSections` (“Split with image”)
* `FeatureSections` (“With code example panel”)

---

## 🧾 SITE-STEP 6 — Ottimizzazione finale

**Trigger:** `ESEGUI SITE-STEP 6`

Attività:

* Implementare metadata JSON-LD (Organization, Product, FAQ)
* Aggiungere sitemap XML + robots.txt (`next-sitemap`)
* Implementare lazy loading immagini + `<Image>` component
* Configurare GA4 via `next/script`
* Setup file `.env` (Vercel environment vars)
* Verifica Lighthouse ≥90 (performance, accessibility, SEO)

Output:

* Configurazione `next.config.mjs` + `vercel.json`
* File `README.md` aggiornato con build instructions + deployment steps

---

## 🧩 SITE-STEP 7 — QA & Deployment

**Trigger:** `ESEGUI SITE-STEP 7`

* Esegui QA checklist da §5.4 v1.1.
* Deploy automatico su Vercel (`vercel deploy --prod`).
* Concludi con output:
  **"✅ DaisySolution site generated and deployed successfully to Vercel."**

---

## 📘 Requisiti di qualità

* Codice conforme TypeScript strict mode
* ESLint + Prettier integrati
* Tailwind classes pulite (nessun inline style)
* Componenti riutilizzabili e documentati (`/** DaisyHero component */`)
* Accessibilità minima WCAG AA
* Tutti i testi in italiano (fallback EN opzionale con `lang="it"` metadata)

---

**Inizia solo quando ricevi istruzione:**

```
ESEGUI SITE-STEP 0
```
