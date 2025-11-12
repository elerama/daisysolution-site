---
description: "Prompt per selezionare template e componenti Tailwind CSS Plus per il sito Daisy Solution, basandosi su analisi di brand, prodotto e architettura informativa."
mode: agent
model: Claude Sonnet 4.5 (copilot)
tools: ['runCommands', 'runTasks', 'edit', 'runNotebooks', 'search', 'new', 'extensions', 'todos', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo']
---

ESEGUI REVISIONE AVANZATA SU `docs/intelligence/20-daisy-tailwind-template-and-components-strategy.md`

## OBIETTIVO

Correggi e integra il documento già esistente completando le parti mancanti e aggiornando le decisioni finali.

Questa attività comprende **due azioni principali**:

1. **Riesecuzione sistematica del fetch Tailwind UI Blocks**
2. **Aggiornamento delle risposte e dei parametri approvati da Marketing, Legal e Tech Lead**

---

## 1️⃣ FETCH E SELEZIONE COMPONENTI (rev. obbligatoria)

**Problema:** il documento elenca solo le categorie di blocchi Tailwind, ma non specifica quali *componenti effettivi* sono stati scelti (ogni pagina contiene 3+ varianti).

**Azione richiesta:**

1. Riesegui (anche in modo sintetico se necessario) il **fetch sistematico** delle seguenti pagine Tailwind CSS Plus:

   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/heroes
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/cta-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/bento-grids
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/pricing
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/header
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/newsletter-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/stats-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/testimonials
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/blog-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/contact-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/team-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/content-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/logo-clouds
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/faq-sections
   - https://tailwindcss.com/plus/ui-blocks/marketing/sections/footers
   - https://tailwindcss.com/plus/ui-blocks/marketing/elements/headers
   - https://tailwindcss.com/plus/ui-blocks/marketing/elements/flyout-menus
   - https://tailwindcss.com/plus/ui-blocks/marketing/elements/banners
   - https://tailwindcss.com/plus/ui-blocks/marketing/feedback/404-pages
   - https://tailwindcss.com/plus/ui-blocks/marketing/page-examples/landing-pages
   - https://tailwindcss.com/plus/ui-blocks/marketing/page-examples/pricing-pages
   - https://tailwindcss.com/plus/ui-blocks/marketing/page-examples/about-pages

2. Per ogni categoria:
   - elenca tutte le varianti di blocchi visualizzate;
   - **seleziona 1–2 componenti specifici** realmente utilizzabili per Daisy Solution;
   - indica il **nome identificativo** o una breve descrizione (es. “Split hero with screenshot”, “Centered feature grid with icons”, ecc.);
   - aggiungi una **motivazione di scelta** (coerenza con layout Daisy, tipo di contenuto, tono visuale, o supporto alla lead generation).

3. Sostituisci o aggiorna la tabella `3.2 Tabella Mapping Componenti UI Blocks` includendo:
   - **colonna nuova:** “Componente specifico scelto”;
   - **colonna nuova:** “Motivo della selezione (breve)”;
   - evidenzia (⭐) i blocchi provenienti dal template *Radiant*.

Output:
- Tabella aggiornata, verificabile e chiara (nessuna categoria vuota o con solo nome generico).
- Conclusione con nota: “Selezione componenti verificata e completata”.

---

## 2️⃣ INTEGRAZIONE RISPOSTE E VALIDAZIONI FINALI

Aggiorna la sezione **“8.4 Domande Aperte (Decisioni Necessarie)”** con le risposte ufficiali e con la mia correzione nel punto “CHATGPT”.

### ✅ Marketing / Product Owner
1. Palette colori finale → **APPROVATO:** Blu corporate `#0F4C81` + Arancione CTA `#F59E0B`
2. Tone of voice esempi copy → **R:** *Usare la versione più diretta e orientata al valore: “Tutto quello che serve per gestire il tuo retail”*.
   (*Motivazione: più focalizzata sul beneficio e più facilmente comprensibile da retail manager non tecnici.*)
3. Pricing pubblico vs preventivo → **R:** Entrambi in mockup → si parte solo con “Richiedi preventivo” nella fase iniziale.
4. Chat widget live → **R:** Form statico sufficiente per il primo rilascio; chat live da introdurre solo dopo validazione funnel.

### ✅ Legal
1. Autorizzazioni loghi → **R:** Già ottenute; nessuna azione legale necessaria.
2. GDPR compliance → **R:** Implementazione con **Iubenda**, configurazione pending.

### ✅ Tech Lead
1. Form backend → **R:** **Sanity CMS** gestirà la raccolta e validazione dei form (incluso nel template Tailwind).
2. Analytics stack → **R:** Google Analytics 4 sufficiente per ora; Mixpanel/Amplitude opzionali fase 2.

---

## 3️⃣ OUTPUT ATTESO

- Versione aggiornata del file `docs/intelligence/20-daisy-tailwind-template-and-components-strategy.md` (v1.1).
- Sezione 3.2 sostituita con nuova tabella completa (con blocchi effettivi scelti e motivazioni).
- Sezione 8.4 aggiornata con risposte e motivazioni.
- Nota in fondo al documento:

Changelog v1.1

- Aggiunta colonna “Componente specifico scelto” in tabella mapping UI.
- Aggiornata sezione 8.4 con risposte validate Marketing/Legal/Tech Lead.
- Confermata palette colori e tone of voice definitivo.
- Integrata fonte backend Sanity CMS e strategia analytics GA4.
- Marcata completezza fetch componenti Tailwind (verifica manuale OK).
