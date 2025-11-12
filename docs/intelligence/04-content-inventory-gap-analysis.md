# Content Inventory & Gap Analysis

> **Documento generato il**: 2025-11-10
> **Fonte**: Analisi repository `elerama-site` > **Scopo**: Mappare contenuti esistenti, identificare gap per sito Daisy Solution

---

## Legenda Simboli

- ✅ **Completo**: Contenuto utilizzabile direttamente
- ⚠️ **Parziale**: Contenuto disponibile ma da integrare/migliorare
- ❌ **Mancante**: Gap prioritario da colmare

---

## Inventario Contenuti Esistenti

| Contenuto                        | Posizione nel Repo                                   | Stato | Riuso per Sito Daisy                          | Gap da Colmare                                                                                                                    |
| -------------------------------- | ---------------------------------------------------- | ----- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Descrizione Daisy Solution**   | `src/views/daisy_solution.php`                       | ✅    | Homepage value proposition, pagina Panoramica | Nessuno - ottimo contenuto                                                                                                        |
| **8 motivi scegliere Daisy**     | `src/views/daisy_solution.php`                       | ⚠️    | Pagina "Perché Daisy Solution"                | Approfondire benefici SaaS (costi, scalabilità)                                                                                   |
| **Moduli funzionalità (elenco)** | `src/views/daisy_solution.php`                       | ⚠️    | Pagine dettaglio moduli                       | ❌ Mancano screenshot UI, walkthrough, video demo moduli                                                                          |
| **Integrazione Eldomcat**        | `src/views/eldomcat.php`, menzioni varie             | ✅    | Pagina Integrazioni → Eldomcat                | Aggiungere benefit specifico per gestionale                                                                                       |
| **Integrazione Elecommerce**     | `src/views/elecommerce.php`, portfolio               | ✅    | Pagina Integrazioni → Elecommerce             | Enfatizzare gestione ciclo attivo integrata                                                                                       |
| **Integrazione Fastlabel**       | `src/views/fastlabel.php`, menzioni                  | ✅    | Pagina Integrazioni → Fastlabel               | Sottolineare controllo centrale per reti                                                                                          |
| **App Mobile: DaisyApp**         | `src/views/portfolio.php`                            | ⚠️    | Pagina Integrazioni → App Mobile              | ❌ Manca landing dedicata con screenshot, link store                                                                              |
| **App Mobile: DaisyCheck**       | `src/views/portfolio.php`                            | ⚠️    | Pagina Integrazioni → App Mobile              | ❌ Manca landing dedicata con screenshot, link store                                                                              |
| **Case Study Unieuro 1Company**  | `src/views/portfolio.php`                            | ✅    | Customer Stories → Unieuro                    | **Espandere in pagina dedicata con numeri impatto**                                                                               |
| **Case Study Model Assistance**  | `src/views/portfolio.php`                            | ✅    | Customer Stories → Model Assistance           | Aggiungere citazione cliente diretta, foto                                                                                        |
| **Case Study Gaer/Expert**       | `src/views/portfolio.php`                            | ✅    | Customer Stories → Gaer/Expert                | **Ottimo per innovazione (totem)**                                                                                                |
| **Case Study Domex**             | `src/views/portfolio.php`                            | ✅    | Customer Stories → Domex                      | Enfatizzare controllo centrale FastLabel                                                                                          |
| **Case Study Carrubba**          | `src/views/portfolio.php`                            | ✅    | Settori → Negozi Singoli                      | Buon esempio retail singolo                                                                                                       |
| **Case Study Te.se.c./Tesec**    | `src/views/portfolio.php`                            | ✅    | Customer Stories → Tesec                      | Esempio e-commerce B2C integrato completo                                                                                         |
| **Case Study Upset Design**      | `src/views/portfolio.php`                            | ✅    | Settori → Altri Settori                       | Esempio settore non-eldom (illuminazione)                                                                                         |
| **Chi siamo Elettrorama**        | `src/views/chi_siamo.php`                            | ⚠️    | Footer "About" + pagina "Chi è Elettrorama"   | Riadattare focus: da "Elettrorama offre tutto" a "Elettrorama casa madre Daisy, 20 anni retail"                                   |
| **Servizi Elettrorama**          | `src/views/servizi.php`                              | ✅    | Footer "Supporto" + pagina "Assistenza"       | Personalizzare per Daisy Solution                                                                                                 |
| **Loghi clienti**                | `src/views/portfolio.php`                            | ✅    | Homepage social proof                         | Lista disponibile: Unieuro, Expert, Domex, Gaer, Trend, Model Assistance, Eurocom, Elettroingros, Audiocar, Menozzi, Savone, Imec |
| **Video panoramica Daisy**       | <https://www.youtube.com/watch?v=_eUJGcriSpk>        | ✅    | Homepage + Risorse                            | Disponibile, verificare aggiornamento                                                                                             |
| **Video DaisyApp**               | <https://youtu.be/fjJC21VUaNY>                       | ✅    | Integrazioni → App                            | Disponibile                                                                                                                       |
| **Video DaisyCheck**             | <https://www.youtube.com/watch?v=3azDJiw_vZ0>        | ✅    | Integrazioni → App                            | Disponibile                                                                                                                       |
| **Brochure PDF Daisy Solution**  | elettrorama.com/brochure/Brochure-Daisy-Solution.pdf | ✅    | Risorse → Brochure                            | Verificare aggiornamento contenuti                                                                                                |
| **Brochure PDF Eldomcat**        | elettrorama.com/brochure/Brochure-Eldomcat.pdf       | ✅    | Risorse → Integrazioni                        | Disponibile                                                                                                                       |
| **Brochure PDF Elecommerce**     | elettrorama.com/brochure/Brochure-Elecommerce.pdf    | ✅    | Risorse → Integrazioni                        | Disponibile                                                                                                                       |
| **Brochure PDF Fastlabel**       | elettrorama.com/brochure/Brochure-Fastlabel.pdf      | ✅    | Risorse → Integrazioni                        | Disponibile                                                                                                                       |
| **Contatti Helpdesk**            | `src/views/servizi.php`                              | ✅    | Footer + Pagina Contatti                      | Tel, email, orari disponibili                                                                                                     |

---

## Gap Prioritari da Colmare

### ALTO IMPATTO / URGENTE

#### 1. ❌ Pricing Page Strutturata

**Problema:**
Non esiste pagina dedicata ai prezzi. Manca struttura chiara per guidare prospect.

**Cosa serve:**

- **Logica pricing** SaaS vs. on-premise
- **Pacchetti pre-configurati:**
  - Starter (negozio singolo): moduli base + prezzo indicativo
  - Professional (negozio avanzato): + moduli avanzati
  - Enterprise (rete): multi-azienda + API
  - Custom: à la carte
- **Add-on separati:** Eldomcat, Elecommerce, Fastlabel
- **FAQ prezzi:** "Quanto costa?", "C'è canone minimo?", "Posso aggiungere moduli?"
- **Form richiesta preventivo**

**Priorità:** ⭐⭐⭐⭐⭐ (blocco conversione)

**Effort stimato:** 3-5 giorni (raccolta info commerciali + copy + design)

---

#### 2. ❌ Screenshot Interfaccia Moduli

**Problema:**
Nessuna immagine UI del gestionale. Prospect non può "vedere" prodotto.

**Cosa serve:**
Per ogni modulo principale (Vendite, Magazzino, Acquisti, Statistiche, ecc.):

- **3-5 screenshot rappresentativi:**
  - Dashboard modulo
  - Form principale (es. creazione ordine)
  - Elenco/tabella dati
  - Report/statistiche
  - Mobile view (se applicabile)
- **Annotazioni didascalie** per evidenziare funzionalità chiave
- **Lightbox** per ingrandimento

**Priorità:** ⭐⭐⭐⭐⭐ (trust & conversione)

**Effort stimato:** 2-3 giorni (screenshot ambiente demo + editing + ottimizzazione web)

---

#### 3. ❌ Demo Online / Trial Gratuito

**Problema:**
Non esiste processo chiaro per richiedere accesso demo.

**Cosa serve:**

- **Landing dedicata "Richiedi Demo":**
  - Form strutturato (Nome, Email, Telefono, Azienda, N. punti vendita, Settore, Moduli interesse)
  - Descrizione cosa include demo (sandbox, durata 30 giorni, tour guidato, assistenza)
  - Video "Come funziona la demo" (2 min)
  - Testimonianze "Dopo la demo ho scelto Daisy perché..."
- **Follow-up automatico:**
  - Email conferma richiesta
  - Email con credenziali accesso + link video tour
  - Email promemoria scadenza trial
- **CTA prominente:** Su home, pagine prodotto, footer

**Priorità:** ⭐⭐⭐⭐⭐ (lead generation)

**Effort stimato:** 3-4 giorni (pagina + form + automazione email)

---

#### 4. ❌ Pagina Tecnologie & Sicurezza

**Problema:**
Non esiste sezione che rassicuri IT manager/buyer enterprise su aspetti tecnici.

**Cosa serve:**

- **4 sottopagine:**
    1. **Architettura Web-Based:** Browser supportati, responsive, vantaggi vs. desktop
    2. **SaaS vs. On-Premise:** Tabella comparativa, pro/contro, modello ibrido
    3. **Sicurezza & Permessi:** Permessi granulari, audit trail, backup, GDPR
    4. **Compatibilità & Integrabilità:** Database supportati, API, integrazioni native, migrazione
    5. **Scalabilità & Performance:** Multi-azienda, caso Unieuro (270 negozi), disaster recovery
- **Download:** PDF "Documento Sicurezza", "Specifiche Tecniche", "Guida API"

**Priorità:** ⭐⭐⭐⭐ (rassicurazione enterprise)

**Effort stimato:** 4-6 giorni (raccolta info tecniche + copy + design)

---

#### 5. ❌ Roadmap Prodotto

**Problema:**
Non menzionata. Prospect enterprise vuole sapere evoluzione piattaforma.

**Cosa serve:**

- **Pagina Roadmap** (high-level, non date precise):
  - **In Sviluppo:** Funzionalità in beta/test
  - **Prossimi 6 mesi:** Feature pianificate
  - **Backlog:** Miglioramenti futuri
- **Format timeline visuale** (icone + titolo + descrizione breve)
- **Disclaimer:** "Roadmap indicativa, soggetta a variazioni"
- **Form "Suggerisci funzionalità"**

**Priorità:** ⭐⭐⭐⭐ (rassicurazione investimento)

**Effort stimato:** 2-3 giorni (raccolta input prodotto + design timeline)

---

### MEDIO IMPATTO

#### 6. ⚠️ Approfondimento SaaS vs. On-Premise

**Problema:**
Menzionato ma non dettagliato. Serve pagina comparativa chiara.

**Cosa serve:**

- **Tabella comparativa completa** (già abbozzata in documento architettura)
- **Casi d'uso:** "Scegli SaaS se...", "Scegli on-premise se..."
- **Modello ibrido:** Spiegazione + diagram ma
- **FAQ:** "Posso passare da SaaS a on-premise?", "I dati sono sicuri nel cloud?"
- **Quiz interattivo (opzionale):** "Qual è la soluzione adatta a te?" (5 domande → raccomandazione)

**Priorità:** ⭐⭐⭐ (chiarezza offerta)

**Effort stimato:** 2 giorni (espansione contenuto esistente + quiz opzionale)

---

#### 7. ⚠️ Landing App Mobile Dedicate

**Problema:**
DaisyApp e DaisyCheck descritte in portfolio, non valorizzate come prodotti standalone.

**Cosa serve:**
Per DaisyApp e DaisyCheck, pagine dedicate con:

- **Hero:** Screenshot app + headline beneficio
- **Video:** Embed YouTube esistenti
- **Feature list:** 5-6 funzionalità chiave con screenshot
- **Use case:** "Come usare DaisyApp per consulenza in negozio"
- **Download:** Link Google Play Store (badge ufficiale)
- **Integrazione:** Come si collega a Daisy Solution
- **Pricing:** Inclusa o add-on?

**Priorità:** ⭐⭐⭐ (valorizzazione mobilità)

**Effort stimato:** 2-3 giorni (2 pagine + screenshot app)

---

#### 8. ⚠️ FAQ Strutturata

**Problema:**
Non esiste pagina FAQ. Riduce contatti pre-sales ripetitivi.

**Cosa serve:**

- **Categorie:**
  - Funzionalità (10-15 domande)
  - Prezzi (8-10 domande)
  - Tecnologia (8-10 domande)
  - Supporto (6-8 domande)
  - Sicurezza (5-7 domande)
- **Format accordion** (espandi/collassa)
- **Ricerca interna** FAQ
- **Link correlati:** Ogni FAQ può linkare a pagina approfondimento
- **CTA finale:** "Non trovi risposta? Contattaci"

**Priorità:** ⭐⭐⭐ (self-service)

**Effort stimato:** 3-4 giorni (raccolta FAQ comuni + copy + design accordion)

---

#### 9. ⚠️ Testimonianze Clienti Formato Citazione

**Problema:**
Case study molto descrittivi, mancano quote dirette brevi per social proof rapido.

**Cosa serve:**

- **Raccolta citazioni:** Intervistare 5-7 clienti chiave per ottenere quote 2-3 frasi
- **Format standardizzato:**
  - Citazione (2-3 frasi)
  - Nome + Ruolo + Azienda
  - Foto responsabile o logo azienda
- **Utilizzo:**
  - Homepage (2-3 testimonianze)
  - Pagine moduli (testimonianza pertinente)
  - Footer (rotazione casuale)

**Priorità:** ⭐⭐⭐ (social proof veloce)

**Effort stimato:** 5-7 giorni (interviste clienti + approvazioni + foto)

---

#### 10. ⚠️ Confronto Competitor

**Problema:**
Non esiste tabella "Daisy Solution vs. Gestionale X". Serve per differenziazione.

**Cosa serve:**

- **Tabella comparativa:**
  - Daisy Solution vs. Gestionale Generico (SAP, Oracle, desktop tradizionali)
  - Daisy Solution vs. Competitor Verticale (es. TeamSystem, Zucchetti Retail)
- **Aspetti comparati:** 10-12 righe (Settore, Setup, Integrazioni, E-commerce, Deployment, Costi, Reti, Track record)
- **Visual:** Tabella + spunte/croci colorate
- **Disclaimer:** Confronto basato su info pubbliche, aggiornato a [data]

**Priorità:** ⭐⭐⭐ (differenziazione)

**Effort stimato:** 3-4 giorni (ricerca competitor + verifica info + legal review)

---

### BASSO IMPATTO / NICE-TO-HAVE

#### 11. ⚠️ Video Tour Moduli Singoli

**Problema:**
Esistono solo video panoramici. Utile micro-video per modulo.

**Cosa serve:**

- **Video 1-2 min per modulo principale:** Vendite, Magazzino, Acquisti, Statistiche, Cassa
- **Format screencast:** Voiceover + cursor highlight
- **Script:** "In questo modulo puoi fare X, Y, Z. Vediamo come..."
- **Hosting:** YouTube + embed in pagine moduli

**Priorità:** ⭐⭐ (approfondimento)

**Effort stimato:** 5-7 giorni (script + registrazione + editing + voice over)

---

#### 12. ⚠️ Webinar On-Demand

**Problema:**
Non menzionati. Se disponibili, aggiungere in Risorse.

**Cosa serve:**

- **Registrazioni webinar esistenti** (se disponibili):
  - "Come scegliere un gestionale retail"
  - "Integrazione e-commerce + gestionale: best practices"
  - "Gestione reti multi-sede con Daisy Solution"
- **Landing:** Titolo, durata, descrizione, form registrazione per guardare (lead capture)

**Priorità:** ⭐⭐ (content marketing)

**Effort stimato:** 2-3 giorni (se webinar esistono; altrimenti pianificare nuovi)

---

#### 13. ⚠️ Blog / Articoli

**Problema:**
Non esiste sezione content marketing. Considerare per SEO long-tail.

**Cosa serve:**

- **Sezione Blog:** 1-2 articoli/mese
- **Topic:** Best practices retail, guide scelta gestionale, novità settore, case study approfonditi
- **SEO:** Ottimizzare per long-tail ("come scegliere gestionale retail", "integrare e-commerce con gestionale")
- **CTA:** Fine articolo → "Scopri Daisy Solution", "Richiedi Demo"

**Priorità:** ⭐⭐ (SEO lungo termine)

**Effort stimato:** Ongoing (redazione contenuti, 2-3 gg/articolo)

---

#### 14. ⚠️ Calcolatore ROI

**Problema:**
Tool interattivo per stimare risparmio SaaS vs. on-premise assente.

**Cosa serve:**

- **Form input:**
  - N. punti vendita
  - N. utenti
  - Costo attuale gestionale (annuo)
  - Costi IT interno (annuo)
- **Output:**
  - Stima canone Daisy SaaS
  - Risparmio stimato (€ + %)
  - Payback period
- **CTA:** "Richiedi preventivo dettagliato"

**Priorità:** ⭐ (engagement lead nurturing)

**Effort stimato:** 4-5 giorni (logica calcolo + form interattivo + design)

---

## Contenuti Ridondanti / Obsoleti

### Da Ristrutturare

| Contenuto                                              | Problema                              | Azione Consigliata                                                                                                           |
| ------------------------------------------------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Riferimenti misti "Elettrorama" e "Daisy Solution"** | Confusione brand                      | Nel sito Daisy dedicato: sempre "Daisy Solution by Elettrorama". Footer: "Powered by Elettrorama [link www.elettrorama.com]" |
| **Descrizioni testuali molto lunghe**                  | Muro di testo (alcuni case study)     | Riscrivere con: Titolo, Problema (3 bullet), Soluzione (3 bullet), Risultati (numeri), Citazione                             |
| **Mancanza CTA intermedie**                            | Pagine lunghe senza CTA               | Inserire CTA ogni 2-3 scroll (es. "Richiedi Demo", "Scopri Modulo X")                                                        |
| **Loghi clienti sparsi**                               | Non sfruttati come social proof forte | Creare sezione "Trusted by" con loghi grandi homepage + numero totale clienti (2000+)                                        |

---

## Piano di Prioritizzazione

### Sprint 1 (Settimana 1-2) - MVP Blocchi Conversione

**Focus:** Rimuovere friction conversione lead

1. ❌ **Pricing page** → 5 giorni
2. ❌ **Demo/Trial landing** → 4 giorni
3. ❌ **Screenshot UI moduli** (almeno 3 moduli prioritari: Vendite, Magazzino, Statistiche) → 3 giorni

**Output:** Prospect può capire quanto costa e richiedere demo vedendo UI reale.

---

### Sprint 2 (Settimana 3-4) - Rassicurazione Enterprise

**Focus:** Convincere buyer enterprise/IT manager

4. ❌ **Tecnologie & Sicurezza** (4 sottopagine) → 6 giorni
5. ⚠️ **SaaS vs. On-Premise approfondimento** → 2 giorni
6. ⚠️ **FAQ strutturata** → 4 giorni

**Output:** Prospect enterprise ha risposte tecniche, sicurezza, scalabilità.

---

### Sprint 3 (Settimana 5-6) - Social Proof & Differenziazione

**Focus:** Aumentare trust e differenziare da competitor

7. ⚠️ **Testimonianze clienti formato citazione** → 7 giorni (include interviste)
8. ⚠️ **Confronto competitor** → 4 giorni
9. ❌ **Roadmap prodotto** → 3 giorni

**Output:** Prospect ha conferme sociali, vede differenze vs. alternative, sa che prodotto evolve.

---

### Sprint 4 (Settimana 7-8) - Valorizzazione Ecosistema

**Focus:** Mostrare valore integrazioni e mobilità

10. ⚠️ **Landing App Mobile dedicate** (DaisyApp + DaisyCheck) → 3 giorni
11. ❌ **Screenshot UI moduli rimanenti** (4 moduli) → 2 giorni
12. ⚠️ **Espansione case study Unieuro** (pagina dedicata) → 2 giorni

**Output:** Mobilità e integrazioni valorizzate, flagship case espanso.

---

### Backlog Continuo - Content & Engagement

**Ongoing:**

- ⚠️ **Video tour moduli** → Produzione progressiva (1 video/settimana)
- ⚠️ **Blog/articoli** → 2 articoli/mese
- ⚠️ **Webinar on-demand** → Registrazione trimestrale + pubblicazione
- ⚠️ **Calcolatore ROI** → Quando risorse dev disponibili

---

## Checklist Pre-Lancio Sito

### Contenuti Minimi (Must-Have)

- [x] Homepage con value proposition chiara
- [x] Pagina Prodotto → Panoramica
- [x] Almeno 3 moduli dettagliati (Vendite, Magazzino, Statistiche)
- [ ] **Pricing page** (❌ Gap prioritario)
- [ ] **Demo/Trial landing** (❌ Gap prioritario)
- [ ] **Screenshot UI** almeno 3 moduli (❌ Gap prioritario)
- [x] Case study Unieuro (flagship)
- [x] 2-3 case study aggiuntivi
- [x] Pagina Contatti con form + helpdesk
- [x] Footer con link utili + social
- [ ] **FAQ** (⚠️ Gap medio)
- [x] Privacy Policy & Cookie Policy
- [x] Brochure PDF downloadabili

### Contenuti Ottimali (Should-Have)

- [ ] **Tecnologie & Sicurezza** (4 pagine) (❌ Gap prioritario)
- [ ] **Testimonianze clienti** formato citazione (⚠️ Gap medio)
- [ ] **Confronto competitor** (⚠️ Gap medio)
- [x] Tutte le pagine moduli (7 totali)
- [x] Pagina Integrazioni completa
- [x] Settori: Negozi Singoli + Catene + Distribuzione
- [ ] **Landing App Mobile** (⚠️ Gap medio)
- [ ] **Roadmap** (❌ Gap prioritario)

### Contenuti Avanzati (Nice-to-Have)

- [ ] **Video tour moduli** (⚠️ Gap basso)
- [ ] **Webinar on-demand** (⚠️ Gap basso)
- [ ] **Blog attivo** (⚠️ Gap basso)
- [ ] **Calcolatore ROI** (⚠️ Gap basso)
- [ ] Chat live o chatbot
- [ ] Area clienti (login)

---

## Risorse Necessarie

### Team Minimo

**Per colmare gap prioritari (Sprint 1-3):**

1. **Copywriter/Content Strategist:** 1 FTE

- Scrittura pagine pricing, demo, FAQ, tecnologie
- Interviste clienti per testimonianze
- Ricerca competitor

2. **Designer UI/UX:** 0.5 FTE

- Screenshot UI (annotazioni, ottimizzazione)
- Layout pagine nuove
- Infografiche (architettura, comparazioni)

3. **Developer Front-End:** 0.5 FTE

- Implementazione pagine
- Form demo/preventivo
- FAQ accordion
- Integrazione calendario consulenza

4. **Product Manager / Subject Matter Expert:** 0.25 FTE

- Validazione contenuti tecnici
- Pricing structure
- Roadmap definizione

5. **Video Producer (Opzionale Sprint 4+):** Freelance

- Video tour moduli
- Webinar registrazione/editing

### Budget Stimato (Solo contenuti, escluso sviluppo sito completo)

- **Sprint 1-3 (Gap prioritari):** 30-40 giorni/persona totali

  - Copywriter: 15 gg
  - Designer: 10 gg
  - Developer: 8 gg
  - PM/SME: 5 gg

- **Sprint 4 (Valorizzazione):** 10-15 giorni/persona

- **Video produzione (Opzionale):** €2.000-3.000 per 5 video moduli

---

## Conclusioni

### Punti di Forza Esistenti

✅ **Ottimi case study**: Unieuro (270 affiliati), Model Assistance (2000 clienti), Gaer (innovazione totem)
✅ **Ecosistema documentato**: Eldomcat, Elecommerce, Fastlabel ben descritti
✅ **Esperienza settoriale**: 20 anni, linguaggio verticale retail
✅ **Brochure e video**: Materiali marketing già prodotti

### Gap Critici (Blocco Conversione)

❌ **Pricing mancante**: Prospect non sa quanto costa, abbandona
❌ **Screenshot UI assenti**: Nessuna visual del prodotto, trust basso
❌ **Demo flow poco chiaro**: Lead non sa come provare
❌ **Tecnologie non spiegate**: IT manager non ha info per valutazione tecnica

### Raccomandazione Strategica

**Priorità assoluta: Sprint 1-2** (Pricing + Demo + Screenshot + Tecnologie)

Questi 4 gap bloccano conversione. Risolverli **prima di lanciare campagne marketing** o investire in traffico. Un sito senza pricing, demo chiara e visual UI è un "brochureware" che non converte.

Una volta colmati gap critici (Sprint 1-2), il sito Daisy Solution avrà:

- **Trust**: screenshot UI reali, testimonianze, sicurezza documentata
- **Conversione**: pricing trasparente, demo accessibile, CTA chiare
- **Differenziazione**: confronto competitor, roadmap, expertise settoriale

---

**Documento redatto da:** Analisi repository elerama-site
**Prossima revisione:** Dopo completamento Sprint 1-2
