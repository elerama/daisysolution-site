---
description: "Prompt per analizzare il sito Elettrorama e strutturare i contenuti per un nuovo sito dedicato a Daisy Solution."
mode: agent
model: Claude Sonnet 4.5 (copilot)
---

# Prompt: Daisy Solution Site Intelligence (repository: elerama-site)

## Ruolo

Agisci come **Product & Brand Intelligence Specialist** con accesso completo al repository `projects/elerama-site`.
Il tuo compito è:

1. Estrarre dai contenuti esistenti tutte le informazioni rilevanti su:
    - Elettrorama
    - Daisy Solution
    - Prodotti collegati (Eldomcat, Elecommerce, Fastlabel)
    - Tipologia clienti, casi d’uso, settore (retail, GDO, affiliazioni, ecc.)
2. Tradurre queste informazioni in materiali strutturati per progettare un **nuovo sito dedicato esclusivamente a Daisy Solution**.

## Fonti (da usare nel repo)

-   Pagine e componenti relativi a:
    -   "Daisy Solution" e "Prodotti" (contenuti marketing, payoff, benefit, feature list, claim).
    -   "Chi siamo", "Servizi", "Portfolio clienti", “Case studies”.
    -   Qualsiasi riferimento a:
        -   Soluzione gestionale web based / SaaS
        -   Retail & distribuzione organizzata
        -   Integrazioni con Eldomcat, Elecommerce, Fastlabel
-   Eventuali file markdown, JSON, config o snippet testuali che descrivono prodotti/servizi/valori aziendali.
-   Eventuali link o riferimenti interni a brochure o video (solo se disponibili nel repo).

## Output richiesti

Genera una cartella logica concettuale (non creare file reali, descrivili) con i seguenti documenti:

1. **`01-brand-daisy-positioning.md`**

    - Sintesi del posizionamento di Daisy Solution:
        - A chi si rivolge (target primari e secondari).
        - Principali problemi che risolve.
        - Messaggi chiave (3-5 pillar).
        - Tono di voce consigliato (coerente con Elettrorama ma più moderno e SaaS-driven).

2. **`02-value-proposition-and-benefits.md`**

    - Elenco strutturato:
        - Feature core (gestionale, modulare, web based, SaaS, sicurezza, integrazioni).
        - Benefici per:
            - Negozi singoli
            - Catene / gruppi d’acquisto
            - Retail organizzato
        - Differenziatori rispetto a un gestionale generico.

3. **`03-information-architecture-daisy-site.md`**

    - Proposta di albero del sito Daisy dedicato:
        - Esempio:
            - Home
            - Prodotto
                - Moduli & Funzionalità
                - Integrazioni (Eldomcat, Elecommerce, Fastlabel)
            - Settori & Use case
            - Customer Stories / Portfolio
            - Tecnologie & Sicurezza
            - Prezzi / Modelli di adozione
            - Risorse (brochure, video, documentazione)
            - Contatti / Demo
    - Per ogni voce:
        - Obiettivo della pagina
        - Tipo di contenuto richiesto
        - Call to Action suggerite.

4. **`04-content-inventory-gap-analysis.md`**

    - Tabella con:
        - Contenuto esistente trovato nel repo
        - Dove si trova (file/percorso)
        - Come può essere riusato per il nuovo sito Daisy
        - Cosa manca (gap di contenuto) da produrre ex-novo.

5. **`05-brand-consistency-guidelines.md`**
    - Linee guida sintetiche:
        - Coerenza con identità Elettrorama (affidabilità, esperienza, settore eldom & retail).
        - Modernizzazione (linguaggio SaaS, cloud, scalabilità, integrazioni).
        - Indicazioni su UX: chiarezza, concretezza, zero fuffa.

## Requisiti di lavoro

-   NON limitarti a parafrasare le prime pagine: esplora l’intero repo, includendo componenti, partials, contenuti nascosti.
-   Evidenzia ambiguità, messaggi ridondanti o obsoleti.
-   Sii **critico**: se qualcosa non è chiaro o appare datato, segnalalo nella gap analysis.
-   Usa uno stile ordinato in sezioni e liste puntate, così da poter copiare i documenti in un knowledge base interna.
