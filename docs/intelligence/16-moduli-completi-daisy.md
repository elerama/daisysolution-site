# Moduli Completi Daisy Solution - Mappatura Dettagliata

> **Versione:** 1.0.0
> **Data:** 2025-11-13
> **Ambito:** Descrizione completa dei 19 moduli core Daisy Solution per il sito

---

## 1. Acquisti

**Descrizione breve:**
Gestione completa ciclo acquisti: ordini fornitori, ricezione merce, fatture passive, gestione reso.

**Funzionalità principali:**

- Ordini a fornitori con gestione condizioni commerciali
- Ricezione merce con generazione bolle carico automatiche
- Registrazione fatture acquisto e note credito
- Integrazione centrali acquisto (Unieuro, Expert, Domex, Gaer)
- Gestione resi fornitori e sostituzione merce difettosa
- Controllo condizioni pagamento e sconti quantità
- Generazione automatica proposte ordine da analisi giacenze

**Benefici:**

- Riduzione errori inserimento ordini
- Visibilità completa merce in arrivo
- Integrazione diretta con centrali
- Controllo costi acquisto real-time

**Integrazione con:**

- Magazzino (carico automatico)
- Contabilità (registrazione fatture)
- Banca dati (Eldomcat per codifiche centrali)

**Riferimenti tecnici:**

- Modulo: `modules/purchasing/`
- Entità: `PUR_ORDERS`, `PUR_INVOICES`, `PUR_SUPPLIERS`

---

## 2. Banca Dati

**Descrizione breve:**
Gestione anagrafica articoli con supporto multi-barcode, brand, categorie e integrazione Eldomcat.

**Funzionalità principali:**

- Anagrafica articoli completa (300k+ prodotti con Eldomcat)
- Multi-barcode (EAN, UPC, codici interni)
- Gestione brand, categorie, sottocategorie merceologiche
- Schede tecniche prodotto con caratteristiche strutturate
- Gestione varianti (taglie, colori) tramite griglie
- Import massivo dati da fornitori/centrali
- Sincronizzazione Eldomcat per foto e caratteristiche
- Gestione codici alternativi e articoli equivalenti

**Benefici:**

- 300.000+ articoli pronti con Eldomcat (risparmio 75.000 ore)
- Aggiornamento automatico foto e caratteristiche
- Ricerca avanzata per caratteristiche tecniche
- Dati sempre aggiornati con centrale

**Integrazione con:**

- Vendite (prezzi, disponibilità)
- Magazzino (giacenze articolo)
- E-commerce (pubblicazione catalogo)
- Label (stampa cartelli con caratteristiche)

**Riferimenti tecnici:**

- Modulo: `modules/admin/controllers/articles.php`
- Entità: `COM_ARTICLES`, `COM_BAR_CODES`, `COM_ARTICLE_PRICES`
- Integrazione: Eldomcat API

---

## 3. Comunicazioni

**Descrizione breve:**
Sistema notifiche e comunicazioni multi-canale verso clienti e staff.

**Funzionalità principali:**

- Invio email transazionali (ordini, conferme, fatture)
- SMS notifiche (arrivo merce, promozioni, scadenze)
- Messaggistica interna tra punti vendita
- Alert automatici (giacenze sotto scorta, ordini urgenti)
- Template personalizzabili per comunicazioni
- Tracciamento invii e statistiche aperture

**Benefici:**

- Automazione comunicazioni clienti
- Riduzione chiamate per info ordini
- Alert proattivi per operatori
- Miglioramento customer experience

**Integrazione con:**

- Vendite (notifiche ordini)
- Magazzino (alert giacenze)
- Liste regalo (notifiche stato lista)

**Riferimenti tecnici:**

- Modulo: `modules/communications/`
- Servizi: Email SMTP, SMS gateway

---

## 4. Contabilità

**Descrizione breve:**
Contabilità generale, IVA, prima nota, registrazioni automatiche da cicli attivo/passivo.

**Funzionalità principali:**

- Piano dei conti personalizzabile
- Prima nota con partita doppia
- Registrazione fatture attive/passive automatica
- Liquidazione IVA periodica
- Scadenzari fornitori/clienti
- Gestione banche e movimenti bancari
- Export per commercialista (formato standard)
- Riconciliazione bancaria automatica

**Benefici:**

- Contabilità sempre aggiornata
- Zero doppia digitazione
- Visibilità cash-flow real-time
- Integrazione diretta commercialista

**Integrazione con:**

- Vendite (fatture attive)
- Acquisti (fatture passive)
- Cassa (movimenti giornalieri)

**Riferimenti tecnici:**

- Modulo: `modules/accounting/`
- Entità: `ACC_LEDGER`, `ACC_INVOICES`, `ACC_BANKS`

---

## 5. Contratti

**Descrizione breve:**
Gestione contratti assistenza, noleggio, abbonamenti con rinnovi automatici.

**Funzionalità principali:**

- Creazione contratti servizio/manutenzione
- Gestione scadenze e rinnovi automatici
- Fatturazione ricorrente periodica
- Alert scadenza contratti
- Storico interventi per contratto
- Gestione SLA (Service Level Agreement)
- Report redditività contratti

**Benefici:**

- Revenue ricorrente gestito automaticamente
- Zero contratti dimenticati
- Visibilità scadenze anticipata
- Fatturazione automatica

**Integrazione con:**

- Riparazioni (interventi su contratto)
- Contabilità (fatturazione periodica)
- Comunicazioni (alert rinnovi)

**Riferimenti tecnici:**

- Modulo: `modules/contracts/`
- Entità: `CON_CONTRACTS`, `CON_RENEWALS`

---

## 6. E-commerce

**Descrizione breve:**
Piattaforma e-commerce B2B/B2C integrata con ERP e banca dati Eldomcat.

**Funzionalità principali:**

- Pubblicazione catalogo automatica da ERP
- Gestione listini multi-livello (cliente/gruppo)
- Promozioni con prezzi barrati automatici
- Carrello e checkout integrato
- Pagamenti sicuri (Banca Sella, Unicredit, PayPal)
- Gestione ordini sincronizzata con ERP
- Integrazione marketplace (Amazon, eBay)
- Feed automatici comparatori prezzi (Google Shopping, Trovaprezzi)
- SEO ottimizzato con contenuti Eldomcat

**Benefici:**

- Zero doppia gestione ordini online/offline
- Giacenze sincronizzate real-time
- Marketplace automatici
- 300k+ prodotti pronti per vendita online

**Integrazione con:**

- Banca dati (catalogo prodotti)
- Vendite (ordini e-commerce → documenti)
- Magazzino (disponibilità real-time)

**Riferimenti tecnici:**

- Prodotto: Elecommerce (SaaS cloud)
- API: REST integrazione Daisy
- Marketplace: Amazon MWS, eBay API

---

## 7. Garanzie

**Descrizione breve:**
Registro garanzie prodotti venduti con alert scadenza e gestione estensioni.

**Funzionalità principali:**

- Registrazione automatica garanzia a vendita
- Gestione certificati garanzia
- Alert scadenza garanzie convenzionali
- Vendita estensioni garanzia
- Gestione resi in garanzia
- Storico interventi garanzia per seriale
- Report statistiche difettosità per brand/modello

**Benefici:**

- Nessuna garanzia persa o dimenticata
- Up-sell estensioni garanzia
- Tracciabilità completa per audit
- Riduzione contenziosi

**Integrazione con:**

- Vendite (registrazione garanzia)
- Riparazioni (interventi in garanzia)
- Banca dati (associazione prodotto-durata)

**Riferimenti tecnici:**

- Modulo: `modules/warranties/`
- Entità: `WAR_REGISTRATIONS`, `WAR_EXTENSIONS`

---

## 8. Import / Export

**Descrizione breve:**
Importazione/esportazione dati massiva da/verso sistemi esterni, EDI centrali.

**Funzionalità principali:**

- Import listini fornitori (Excel, CSV, XML, EDI)
- Export dati per analisi esterne (BI, Excel)
- Integrazione EDI centrali acquisto (Unieuro, Domex, Gaer)
- Import ordini da portali B2B
- Export fatture elettroniche XML (SDI)
- Mapping automatico codifiche articoli
- Scheduling import/export automatici
- Log tracciamento operazioni batch

**Benefici:**

- Zero inserimento manuale listini
- Aggiornamento prezzi automatico
- Integrazione diretta centrali
- Compliance fatturazione elettronica

**Integrazione con:**

- Banca dati (import articoli)
- Acquisti (import ordini EDI)
- Vendite (export fatture SDI)

**Riferimenti tecnici:**

- Modulo: `modules/import_export/`
- Protocolli: EDI X12, EDIFACT, XML, CSV

---

## 9. Label (Fastlabel)

**Descrizione breve:**
Stampa cartelli prezzo con caratteristiche tecniche, promozioni, barcode (2000+ utilizzatori).

**Funzionalità principali:**

- Layout multipli configurabili per formato
- Stampa cartelli con foto e caratteristiche Eldomcat
- Prezzi barrati per promozioni
- Slogan promozionali personalizzabili
- Barcode EAN per autovendita
- Campagne promozionali real-time multi-sede
- Gestione centralizzata per insegne (Admin panel)
- Import automatico dati da gestionale
- Disponibilità negozio/magazzino centrale

**Benefici:**

- 2000+ clienti attivi
- Risparmio tempo stampa manuale
- Coerenza visual merchandising
- Campagne promozionali sincronizzate

**Integrazione con:**

- Banca dati (caratteristiche Eldomcat)
- Vendite (prezzi e promozioni)
- Magazzino (disponibilità articoli)

**Riferimenti tecnici:**

- Prodotto: Fastlabel (standalone + integrato)
- Settori: Elettrodomestici, informatica, telefonia, abbigliamento, ferramenta, farmacia

---

## 10. Lista Regali

**Descrizione breve:**
Gestione liste nozze, nascita, eventi con portale web per invitati e tracking acquisti.

**Funzionalità principali:**

- Creazione liste regalo online/in-negozio
- Portale web pubblico per invitati
- Selezione prodotti con varianti e quantità
- Gestione contributi parziali/totali
- Tracking articoli acquistati/rimanenti
- Notifiche sposi/festeggiati
- Ritiro regalo con codice lista
- Integrazione e-commerce (acquisto online regalo)
- Report contributi e statistiche liste

**Benefici:**

- Fidelizzazione clienti eventi
- Revenue ricorrente da liste
- Esperienza digitale invitati
- Gestione centralizzata multi-negozio

**Integrazione con:**

- Vendite (acquisto articoli lista)
- E-commerce (portale liste online)
- Comunicazioni (notifiche lista)

**Riferimenti tecnici:**

- Modulo: `modules/gift_lists/`
- Entità: `GIF_LISTS`, `GIF_ITEMS`, `GIF_PURCHASES`

---

## 11. Magazzino

**Descrizione breve:**
Gestione giacenze multi-sede, movimenti, inventari, trasferimenti, ubicazioni, lotti/seriali.

**Funzionalità principali:**

- Giacenze real-time per articolo/magazzino
- Movimenti automatici da vendite/acquisti
- Inventari rapidi con DaisyCheck (barcode scanner)
- Trasferimenti inter-sede con tracking
- Gestione ubicazioni magazzino
- Lotti/seriali per tracciabilità
- Rifornimenti automatici da analisi giacenze
- Gestione magazzini transito
- Report rotazione stock, valore magazzino

**Benefici:**

- Visibilità giacenze multi-sede real-time
- Inventari 10x più veloci con barcode
- Riduzione rotture stock
- Ottimizzazione capitale circolante

**Integrazione con:**

- Vendite (impegno/scarico automatico)
- Acquisti (carico automatico)
- Banca dati (articoli gestiti)

**Riferimenti tecnici:**

- Modulo: `modules/store/`
- Entità: `COM_STOCK`, `STO_STORE_MOVEMENTS`, `STO_MOVEMENT_DETAILS`

---

## 12. Navigator

**Descrizione breve:**
Dashboard personalizzabili e navigazione rapida funzionalità con widgets configurabili.

**Funzionalità principali:**

- Dashboard home con KPI principali
- Widgets configurabili per ruolo
- Accesso rapido funzioni frequenti
- Notifiche e alert in-app
- Grafici real-time vendite/margini
- Scorciatoie tastiera per power-user
- Personalizzazione layout per utente
- Widget calendario ordini/scadenze

**Benefici:**

- Produttività utenti aumentata
- Visibilità KPI sempre a portata
- Onboarding facilitato nuovi utenti
- UX personalizzata per ruolo

**Integrazione con:**

- Tutti i moduli (dashboard unificata)

**Riferimenti tecnici:**

- Modulo: `modules/navigator/`
- Tecnologia: Widgets dinamici AJAX

---

## 13. Ordini

**Descrizione breve:**
Gestione ordini clienti (B2B/B2C) con tracking stato, evasione parziale, backorder.

**Funzionalità principali:**

- Inserimento ordini rapido con barcode
- Gestione ordini B2B da portale clienti
- Stati ordine (inserito, confermato, evaso, consegnato)
- Evasione parziale con backorder automatico
- Tracking spedizioni integrato corrieri
- Gestione acconti e saldi
- Generazione DDT e fatture da ordini
- Report ordini inevasi, in ritardo

**Benefici:**

- Visibilità completa pipeline ordini
- Zero ordini dimenticati
- Clienti informati su stato ordine
- Riduzione contestazioni

**Integrazione con:**

- Magazzino (impegno merce)
- Vendite (trasformazione in fattura)
- E-commerce (ordini web)

**Riferimenti tecnici:**

- Modulo: `modules/orders/`
- Entità: `ORD_ORDERS`, `ORD_ITEMS`, `ORD_STATUS`

---

## 14. Planning

**Descrizione breve:**
Pianificazione ordini fornitori, previsione fabbisogni, analisi rotazione, scorte minime.

**Funzionalità principali:**

- Analisi rotazione stock ABC
- Calcolo scorte minime per articolo
- Previsione fabbisogni da venduto storico
- Generazione automatica proposte ordine
- Simulazione scenari approvvigionamento
- Gestione lead time fornitori
- Alert articoli sotto scorta minima
- Report copertura stock (giorni giacenza)

**Benefici:**

- Riduzione capitale immobilizzato
- Zero rotture stock articoli strategici
- Ordini fornitori ottimizzati
- Riduzione obsolescenza merce

**Integrazione con:**

- Magazzino (giacenze e movimenti)
- Acquisti (generazione ordini)
- Vendite (analisi venduto)

**Riferimenti tecnici:**

- Modulo: `modules/planning/`
- Algoritmi: ABC analysis, EOQ (Economic Order Quantity)

---

## 15. Promozioni

**Descrizione breve:**
Gestione campagne promozionali multi-canale con sconti, bundle, prezzi barrati, volantini.

**Funzionalità principali:**

- Creazione campagne promozionali periodo
- Sconti articolo/categoria/brand
- Bundle e offerte 3x2, seconda merce -50%
- Prezzi barrati automatici
- Gestione volantini e cataloghi
- Promozioni fedeltà card
- Coupon sconto e codici promozionali
- Evidenziazione prodotti in promozione (e-commerce, cartelli)
- Report performance campagne

**Benefici:**

- Campagne sincronizzate multi-canale
- Prezzi promozionali automatici
- Stimolo vendite prodotti strategici
- Tracking ROI campagne

**Integrazione con:**

- Vendite (applicazione sconti)
- E-commerce (prezzi barrati web)
- Label (cartelli promozionali)

**Riferimenti tecnici:**

- Modulo: `modules/promotions/`
- Entità: `PRO_CAMPAIGNS`, `PRO_RULES`, `PRO_DISCOUNTS`

---

## 16. RAEE

**Descrizione breve:**
Gestione contributi ambientali RAEE con tracciabilità ritiro, smaltimento, reportistica CDC.

**Funzionalità principali:**

- Applicazione automatica contributi RAEE a vendita
- Registro ritiro RAEE da clienti
- Tracking smaltimento presso CDC (Centri Di Coordinamento)
- Generazione reportistica obbligatoria
- Gestione multi-CDC (Ecodom, Remedia, Ecolight, etc.)
- Alert scadenze comunicazioni
- Calcolo contributi per categoria prodotto
- Export dati per dichiarazioni periodiche

**Benefici:**

- Compliance normativa automatica
- Zero sanzioni per mancate dichiarazioni
- Tracciabilità completa ritiri
- Riduzione oneri amministrativi

**Integrazione con:**

- Vendite (addebito contributi)
- Banca dati (classificazione RAEE articoli)

**Riferimenti tecnici:**

- Modulo: `modules/raee/`
- Entità: `RAEE_COLLECTIONS`, `RAEE_CONTRIBUTIONS`
- Normativa: D.Lgs 49/2014

---

## 17. Riparazioni

**Descrizione breve:**
Gestione laboratorio riparazioni con tracking interventi, ricambi, garanzie, Model Assistance.

**Funzionalità principali:**

- Accettazione riparazioni con diagnosi iniziale
- Tracking stato riparazione (ricevuto, diagnosi, riparato, pronto)
- Gestione ricambi e manodopera
- Preventivi riparazione cliente
- Integrazione Model Assistance (2000+ clienti help desk)
- Garanzie convenzionali/estese
- Alert tempi riparazione SLA
- Report redditività laboratorio
- SMS notifica riparazione completata

**Benefici:**

- Visibilità stato riparazioni real-time
- Clienti sempre informati
- Gestione professionale laboratorio
- Revenue ricambi e assistenza

**Integrazione con:**

- Garanzie (riparazioni in garanzia)
- Magazzino (scarico ricambi)
- Comunicazioni (notifiche clienti)

**Riferimenti tecnici:**

- Modulo: `modules/repairs/`
- Entità: `REP_TICKETS`, `REP_INTERVENTIONS`, `REP_PARTS`
- Integrazione: Model Assistance API

---

## 18. Vendite

**Descrizione breve:**
Ciclo attivo completo: preventivi, ordini, DDT, fatture, scontrini, gestione fidelity.

**Funzionalità principali:**

- Preventivi con conversione ordine
- Ordini clienti con tracking evasione
- DDT trasporto e fatture accompagnatorie
- Fatture immediate/differite
- Scontrini fiscali POS integrato
- Gestione acconti e pagamenti parziali
- Mezzi pagamento multipli (contante, carta, bonifico, finanziamento)
- Fidelity card e punti fedeltà
- Buoni spesa e gift card
- Modalità offline per vendita senza connessione
- Report vendite per articolo/cliente/operatore/periodo

**Benefici:**

- Ciclo vendita completo integrato
- Zero perdite vendite per sistema down (offline)
- Fidelizzazione clienti
- Visibilità performance vendite real-time

**Integrazione con:**

- Magazzino (impegno/scarico automatico)
- Contabilità (registrazione fatture)
- Cassa (scontrini fiscali)

**Riferimenti tecnici:**

- Modulo: `modules/sales/`
- Entità: `SAL_INVOICES`, `SAL_RECEIPTS`, `SAL_CUSTOMERS`

---

## 19. Webservice

**Descrizione breve:**
API REST per integrazioni B2B, marketplace, app mobile, sistemi terzi.

**Funzionalità principali:**

- API REST autenticate (OAuth2, API Key)
- Endpoint CRUD articoli, clienti, ordini, giacenze
- Webhook eventi (nuovo ordine, giacenza sotto scorta)
- Documentazione API Swagger/OpenAPI
- Rate limiting e throttling
- Log chiamate API per audit
- Versioning API (v1, v2)
- SDK client (PHP, JavaScript, Python)

**Benefici:**

- Integrazione semplificata sistemi terzi
- Sviluppo app custom facilitato
- Automazione processi B2B
- Ecosistema estendibile

**Integrazione con:**

- Tutti i moduli (API layer unificato)
- E-commerce (sincronizzazione ordini/giacenze)
- Marketplace (pubblicazione prodotti)

**Riferimenti tecnici:**

- Modulo: `modules/webservices/`
- Tecnologia: REST, JSON, OAuth2
- Documentazione: Swagger UI

---

## Riepilogo Utilizzo per Sito

### Pagina `/prodotto/moduli`

**Struttura suggerita:**

1. **Hero Section**
   - Titolo: "19 moduli per gestire ogni aspetto del retail"
   - Sottotitolo: Architettura modulare HMVC, attiva solo ciò che serve

2. **Moduli Grid (responsive 3 colonne → 2 → 1)**
   - Icona + Nome + Descrizione breve (2 righe)
   - Link "Scopri di più" → sezione dettaglio scroll

3. **Sezioni Dettaglio Moduli**
   - Accordion espandibile per ogni modulo
   - Funzionalità principali (bullet list)
   - Benefici chiave
   - Integrazione con altri moduli
   - CTA: "Richiedi demo modulo X"

4. **Footer CTA**
   - "Hai bisogno di funzionalità custom?"
   - Link a /contatti per consulenza personalizzata

### Keyword SEO per ogni modulo

- Includere in metadata della pagina
- Utilizzare in H2/H3 sezioni dettaglio
- Mappare su search intent cliente

---

**Fine documento** - Pronto per implementazione pagina `/prodotto/moduli`
