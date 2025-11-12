# Information Architecture - Daisy Site

> **Documento generato il**: 2025-11-10
> **Fonte**: Analisi repository `elerama-site` > **Scopo**: Definire struttura e contenuti per sito Daisy Solution dedicato

---

## Struttura Sito Proposta

```
Home
├── Prodotto
│   ├── Panoramica
│   ├── Moduli & Funzionalità
│   │   ├── Vendite & Cassa
│   │   ├── Acquisti & Fornitori
│   │   ├── Magazzino & Inventari
│   │   ├── Promozioni & Marketing
│   │   ├── E-commerce & Liste Regalo
│   │   ├── Riparazioni & RAEE
│   │   └── Statistiche & Business Intelligence
│   ├── Integrazioni
│   │   ├── Eldomcat (Banca Dati)
│   │   ├── Elecommerce (E-commerce)
│   │   ├── Fastlabel (Stampa Cartelli)
│   │   └── App Mobile (DaisyApp, DaisyCheck)
│   ├── Perché Daisy Solution
│   └── Demo / Prova Gratuita
├── Settori & Casi d'Uso
│   ├── Negozi Singoli
│   ├── Catene & Affiliazioni
│   │   ├── Progetto Unieuro 1Company
│   │   └── Reti Expert/Domex/Gaer
│   ├── Distribuzione Organizzata
│   └── Altri Settori
├── Customer Stories
│   ├── Unieuro (270 affiliati)
│   ├── Model Assistance
│   ├── Gaer/Expert
│   ├── Domex
│   └── Altri case study
├── Tecnologie & Sicurezza
│   ├── Architettura Web-Based
│   ├── SaaS vs. On-Premise
│   ├── Sicurezza & Permessi
│   ├── Compatibilità & Integrabilità
│   └── Scalabilità & Performance
├── Prezzi / Modelli di Adozione
│   ├── Modalità SaaS (Cloud)
│   ├── Modalità On-Premise
│   ├── Modularità & Pacchetti
│   └── Richiedi Preventivo
├── Risorse
│   ├── Brochure
│   ├── Video & Tutorial
│   ├── Documentazione Tecnica
│   └── FAQ
└── Contatti / Richiedi Demo
```

---

## Dettaglio Pagine

### Home

**Obiettivo:** Comunicare immediatamente value proposition, catturare lead qualificati

**Contenuto richiesto:**

#### Hero Section (Above the fold)

- **Headline emozionale:**
  - "Il gestionale che cresce con la tua rete"
  - "Dalla cassa al cloud: gestisci ogni punto vendita in un'unica piattaforma"
- **Sub-headline:** "Modulare, SaaS, integrazioni native. Dal negozio singolo alla rete di 270 punti vendita."
- **Visual:** Video intro (30-60 sec) o immagine hero con UI gestionale
- **CTA primaria:** Pulsante "Richiedi Demo"
- **CTA secondaria:** Link "Scopri i moduli"

#### Section: 4 Benefit Pillars

Card layout con icona + titolo + descrizione breve:

1. **Modulare** - "Parti da ciò che serve. Aggiungi funzionalità crescendo."
2. **SaaS** - "Hosting gestito. Backup automatici. Costi prevedibili."
3. **Integrazioni** - "Eldomcat, Elecommerce, Fastlabel. Ecosistema completo."
4. **Multi-punto vendita** - "Da 1 a 1000 negozi con stessa piattaforma."

#### Section: Social Proof

- **Loghi clienti:** Unieuro, Expert, Domex, Gaer, Trend, Model Assistance, Eurocom, Elettroingros
- **Numeri:** 270 affiliati Unieuro | 200+ Expert/Domex | 2000+ clienti totali | 20 anni esperienza

#### Section: Chi sceglie Daisy

- **Testimonianza breve** (1-2 frasi) + foto punto vendita
- **Link:** "Leggi tutti i case study"

#### Section: Ecosistema Prodotti

- **4 card con immagini:**
  - Daisy Solution (gestionale)
  - Eldomcat (banca dati)
  - Elecommerce (e-commerce)
  - Fastlabel (stampa cartelli)
- **CTA:** "Scopri l'ecosistema completo"

**Call to Action:**

- Richiedi Demo (primario, ripetuto 2-3 volte nella pagina)
- Scarica Brochure (secondario)
- Guarda Video (terziario)

---

### Prodotto → Panoramica

**Obiettivo:** Spiegare cosa è Daisy Solution e perché è diverso

**Contenuto richiesto:**

#### Definizione

"Gestionale modulare web-based per retail e distribuzione organizzata"

#### Tre Pillar (Visual con icone)

1. **Completo** - Tutti i moduli: vendite, cassa, magazzino, acquisti, statistiche, e-commerce
2. **Economico** - SaaS: zero investimento infrastruttura, canone mensile prevedibile
3. **Scalabile** - Multi-azienda: da 1 negozio a rete nazionale

#### Infografica

Schema funzionale interconnessioni:

```
[Fornitori] → Acquisti → Magazzino → Vendite → [Clienti]
                              ↓
                [Statistiche & BI]
                              ↓
                    [Integrazioni]
                    (Eldomcat, Elecommerce, Fastlabel)
```

#### Comparazione Veloce (Tabella)

| Aspetto        | Gestionale Tradizionale | Daisy Solution     |
| -------------- | ----------------------- | ------------------ |
| Installazione  | Su ogni PC              | Web browser        |
| Costi iniziali | €€€ server + licenze    | Canone mensile     |
| Aggiornamenti  | A pagamento             | Automatici inclusi |
| Mobilità       | Limitata                | App mobile native  |
| Multi-sede     | Complesso               | Nativo             |

#### Testimonianze Brevi

- 2-3 citazioni clienti (1 frase ciascuna)

**Call to Action:**

- Esplora i Moduli
- Richiedi Preventivo
- Scarica Brochure

---

### Prodotto → Moduli & Funzionalità

**Struttura:** Pagina indice + 7 pagine dedicate per modulo

#### Pagina Indice Moduli

- Grid 3 colonne con card moduli
- Ogni card: icona, titolo, descrizione 2 righe, link "Scopri di più"
- Moduli elencati:
    1. Vendite & Cassa
    2. Acquisti & Fornitori
    3. Magazzino & Inventari
    4. Promozioni & Marketing
    5. E-commerce & Liste Regalo
    6. Riparazioni & RAEE
    7. Statistiche & Business Intelligence

#### Template Pagina Singolo Modulo (es. Vendite & Cassa)

**Contenuto:**

1. **Introduzione**

    - Descrizione modulo (2-3 frasi)
    - A chi serve

2. **Funzionalità Chiave**

    - Lista bullet (8-12 item) con icone
    - Es. Vendite & Cassa:
        - Preventivi, ordini, fatture
        - Scontrini con POS integrato
        - Gestione acconti e mezzi pagamento
        - Buoni spesa e fidelity card
        - Chiusura cassa giornaliera
        - Modalità offline
        - ecc.

3. **Screenshot Interfaccia**

    - 3-5 immagini UI rappresentative
    - Con didascalie
    - Lightbox per ingrandimento

4. **Benefici Specifici**

    - Box evidenziato con 3-4 benefici
    - Es. per Cassa: "Continua a vendere anche senza Internet grazie a modalità offline"

5. **Integrazioni Correlate**

    - Box con link ai prodotti correlati
    - Es. Cassa integra: DaisyEDI (POS), FastLabel (cartelli), Fidelity card

6. **Caso d'Uso Concreto**

    - Mini case study (150-200 parole)
    - Es. "Come il negozio Carrubba gestisce 50 scontrini/giorno con 2 casse collegate"

7. **FAQ Modulo**
    - 3-4 domande frequenti specifiche

**Call to Action:**

- Richiedi Demo del Modulo (form pre-compilato con modulo selezionato)
- Vedi Moduli Correlati
- Scarica Scheda Tecnica PDF

---

### Prodotto → Integrazioni

**Obiettivo:** Comunicare valore ecosistema integrato

**Contenuto richiesto:**

#### Schema Visuale Ecosistema

- Infografica centrale con Daisy Solution al centro
- Intorno: Eldomcat, Elecommerce, Fastlabel, App Mobile, Centrali
- Frecce che indicano flusso dati

#### Sezione: Eldomcat (Banca Dati)

- **Titolo:** "300.000+ prodotti con foto e caratteristiche tecniche"
- **Descrizione:** Integrazione catalogo eldom, personalizzazione caratteristiche, export multi-formato
- **Beneficio:** "Zero digitazione manuale schede prodotto. Sempre aggiornato con novità marchi."
- **CTA:** Link a pagina Eldomcat dedicata

#### Sezione: Elecommerce (E-commerce)

- **Titolo:** "Vendi online, gestisci dal gestionale"
- **Descrizione:** Sincronizzazione catalogo/prezzi/giacenze, gestione ordini web, emissione documenti automatica
- **Beneficio:** "Un'unica fonte dati. Ordini web trattati come ordini in negozio."
- **CTA:** Link a pagina Elecommerce

#### Sezione: Fastlabel (Stampa Cartelli)

- **Titolo:** "Stampa cartelli con controllo centralizzato"
- **Descrizione:** Layout gestiti da centrale, stampa sincronizzata rete, promozioni coordinate
- **Beneficio:** "Attiva campagne su 100 negozi con un click. Visual omogeneo."
- **CTA:** Link a pagina Fastlabel

#### Sezione: App Mobile

- **DaisyApp:** Catalogo in mobilità, giacenze real-time, stampa cartelli da smartphone
- **DaisyCheck:** Inventari rapidi con barcode scanner
- **Beneficio:** "Inventario in 15 minuti vs. 2 ore manuale"
- **Video:** Embed YouTube DaisyApp + DaisyCheck
- **CTA:** Download da store (link Play Store)

#### Sezione: Centrali/Piattaforme

- **Loghi:** Unieuro, Expert, Domex, Gaer, Trend
- **Descrizione:** Carico bolle automatico, ordini diretti, sell-out real-time
- **Beneficio:** "270 affiliati Unieuro ricevono bolle in automatico ogni giorno"

#### Beneficio Chiave Finale

Box evidenziato: "Un'unica fonte dati. Zero duplicazioni. Massima efficienza."

**Call to Action:**

- Scopri Eldomcat
- Scopri Elecommerce
- Scopri Fastlabel
- Richiedi Integrazione Custom

---

### Prodotto → Perché Daisy Solution

**Obiettivo:** Differenziazione vs. competitor, gestire obiezioni

**Contenuto richiesto:**

#### Tabella Comparativa Dettagliata

| Aspetto               | Gestionale Generico | Gestionale Verticale Competitor | Daisy Solution                        |
| --------------------- | ------------------- | ------------------------------- | ------------------------------------- |
| Settore               | Multi-industria     | Spesso non Italia               | **Verticale retail Italia 20 anni**   |
| Integrazioni centrali | Custom              | Limitate                        | **Unieuro, Expert, Domex native**     |
| E-commerce            | Terze parti         | Separato                        | **Elecommerce integrato**             |
| Banca dati            | Manuale             | Feed esterni                    | **Eldomcat 300k+ incluso**            |
| Deployment            | Rigido              | SaaS only                       | **Scelta: SaaS o on-premise**         |
| Reti multi-sede       | Addon               | Complesso                       | **Progettato per reti (270 Unieuro)** |

#### 8 Motivi per Sceglierlo

Riprendere i box dalla pagina attuale `daisy_solution.php`:

1. **Modulare** - Espandi funzionalità al bisogno
2. **Economico, SaaS** - Paghi solo cosa usi
3. **Sicuro** - Permessi granulari per ruolo
4. **Multiaziendale/Multilingua** - Gestisci più società
5. **Web based** - Accesso da browser, zero installazioni
6. **Versatile, cloud** - SaaS gestito o on-premise
7. **Multibrowser** - PC, tablet, smartphone
8. **Multidatabase** - MySQL, Oracle, SQL Server

Ogni box con: icona, titolo, descrizione 2-3 righe

#### Esperienza Settore

- 20 anni retail
- 270 affiliati Unieuro (caso flagship)
- Leader settore eldom
- 2000+ clienti Italia

#### Testimonianze Clienti

- 3-4 citazioni con foto/logo cliente

#### Garanzie

- Supporto help desk incluso
- Aggiornamenti continui
- Formazione iniziale
- Migrazione assistita da altri gestionali

**Call to Action:**

- Richiedi Confronto Personalizzato (vs. tuo gestionale attuale)
- Parla con un Esperto
- Leggi Case Study Completi

---

### Prodotto → Demo / Prova Gratuita

**Obiettivo:** Conversione lead caldi

**Contenuto richiesto:**

#### Form Richiesta Accesso Demo

Campi:

- Nome \*
- Email \*
- Telefono \*
- Azienda \*
- N. punti vendita
- Settore (dropdown: Elettrodomestici, Elettronica, Informatica, Altro)
- Moduli di interesse (checkbox multipla)
- Messaggio

#### Descrizione Demo

- **Cosa include:**

  - Ambiente sandbox con dati esempio
  - Accesso 30 giorni
  - Tour guidato iniziale (webinar 1 ora)
  - Assistenza setup via email/telefono

- **Cosa potrai fare:**
  - Esplorare tutti i moduli
  - Caricare prodotti test
  - Simulare vendite e inventari
  - Generare report statistiche

#### Video "Come Funziona la Demo"

- Embed YouTube (2 min)
- Panoramica interfaccia
- Funzionalità principali

#### Testimonianze "Dopo la Demo"

- 2-3 citazioni clienti che hanno convertito dopo demo

**Call to Action:**

- Compila Form Demo (primario)
- Prenota Sessione Live (secondario - calendario integrato)

---

### Settori & Casi d'Uso → Negozi Singoli

**Obiettivo:** Far riconoscere pain point e soluzione

**Contenuto richiesto:**

#### Profilo Target

"Gestisci un negozio di elettronica/elettrodomestici/informatica? Sei nel posto giusto."

#### Pain Point (Box evidenziati con icona problema)

1. Costi gestionali elevati (server, licenze, consulente IT)
2. Difficoltà inventari (conteggi manuali, errori)
3. Nessuna visibilità vendite real-time
4. Impossibilità vendere online
5. Reportistica scarsa o assente

#### Soluzione Daisy (Box con icona soluzione)

- **Moduli essenziali:** Vendite, Cassa, Magazzino, Statistiche
- **Opzionale:** E-commerce, Banca Dati, Stampa Cartelli
- **Modalità:** SaaS (hosting gestito)
- **Costo:** Da €X/mese (indicativo, link a preventivo)

#### Pacchetto Consigliato

Tabella riepilogativa:

| Modulo | Cosa Include | Beneficio |
|--------|-------------|-----------|
| Vendite & Cassa | Scontrini, fatture, POS | Gestione completa punto vendita |
| Magazzino | Carichi, giacenze, inventari | Controllo stock real-time |
| Statistiche | Dashboard, top vendite | Decisioni basate su dati |

#### Caso Studio: Carrubba S.r.l

- **Profilo:** 2 punti vendita affiliati Unieuro
- **Sfida:** Gestione completa retail + integrazione centrale
- **Soluzione:** Daisy Solution completo (vendite, cassa, magazzino, acquisti, riparazioni)
- **Risultato:** Operatività efficiente, zero errori carico bolle
- **Link:** "Leggi case study completo"

#### Pricing Indicativo

"Pacchetto Starter da €X/mese per negozio singolo"
(Con disclaimer: "Prezzi variano in base a moduli e personalizzazioni. Richiedi preventivo.")

**Call to Action:**

- Richiedi Preventivo Negozio Singolo
- Leggi Case Study Completo
- Prenota Consulenza

---

### Settori & Casi d'Uso → Catene & Affiliazioni

**Obiettivo:** Posizionare Daisy come soluzione enterprise per reti

**Contenuto richiesto:**

#### Profilo Target

"Gestisci 5+ punti vendita o sei affiliato a un'insegna? Daisy Solution è progettato per reti."

#### Pain Point

1. Coordinamento promozioni complesso
2. Gestione stock multi-sede inefficiente
3. Integrazione con centrale onerosa
4. Visual marketing disomogeneo tra negozi
5. Statistiche rete faticose da consolidare

#### Soluzione Daisy

- **Multi-azienda:** Gestisci 10-100-1000 negozi da un'unica istanza
- **Condivisione giacenze:** Vendita cross-store
- **Ordini a centrale:** Automatici con controllo disponibilità
- **FastLabel centralizzato:** Attiva promozioni su rete con un click
- **Statistiche aggregate:** Dashboard consolidata

#### Sottopagine Dedicate

##### Progetto Unieuro 1Company

**Link a pagina dedicata con:**

- Storia progetto (2018, selezione Elettrorama)
- Numeri: 270 affiliati, 900 postazioni, 400 casse
- Funzionalità: cassa, vendita, magazzino, acquisti, promozioni, stampa cartelli, RAEE, riparazioni
- Interconnessione: carico bolle automatico, catalogo centrale, listini, ordini, variazioni prezzo, volantini, garanzie, fidelity, sell-out giornaliero
- Citazione cliente (se disponibile)
- Video/foto

##### Reti Expert/Domex/Gaer

**Link a pagina con case study:**

- **Domex:** 200+ negozi, gestione visual FastLabel centralizzata
- **Gaer:** Portale prodotti, totem interattivi, pick & pay
- Benefici: standardizzazione, rollout rapido, controllo governance

#### Moduli Chiave per Reti

- Ordini a centrale
- Promozioni sincronizzate
- Import/Export (EDI)
- Web service / API
- Multi-azienda

#### Architettura Rete (Schema visuale)

```
[Centrale]
    ↓ (ordini, listini, promozioni)
[Daisy Solution Multi-Azienda]
    ↓
[Affiliato 1] [Affiliato 2] ... [Affiliato N]
```

**Call to Action:**

- Scarica Case Study Unieuro PDF
- Prenota Demo Rete Multi-Sede
- Richiedi Integrazione con la Tua Centrale

---

### Settori & Casi d'Uso → Distribuzione Organizzata

**Obiettivo:** Attrarre centrali d'acquisto, piattaforme logistiche

**Contenuto richiesto:**

#### Profilo Target

"Gestisci una centrale d'acquisto, piattaforma logistica, gruppo affiliati? Daisy Solution è la piattaforma per la tua rete."

#### Pain Point

1. Visibilità limitata su sell-out affiliati
2. Complessità integrazione gestionali eterogenei
3. Gestione assortimenti differenziati per zona/insegna
4. Onboarding lento nuovi affiliati
5. Standardizzazione processi difficile

#### Soluzione Daisy

- **Piattaforma unificata:** Stessa soluzione per tutti affiliati
- **Integrazioni EDI:** Web service, import/export automatici
- **Portale B2B:** Elecommerce per ordini affiliati 24/7
- **Statistiche aggregate:** Dashboard centrale con sell-out real-time
- **Controllo governance:** Permessi differenziati centrale/affiliato

#### Benefici per Centrali

1. **Roll-out rapido:** Nuovo affiliato operativo in giorni
2. **Standardizzazione:** Processi uniformi, formazione semplificata
3. **Controllo:** Visibilità vendite/giacenze, audit trail
4. **Efficienza:** Invio sell-out automatico per rivalutazioni

#### Casi Studio

- **Domex:** 200+ negozi, gestione visual centralizzata
- **Gaer:** Portale B2B, totem, integrazione logistica

**Call to Action:**

- Prenota Consulenza Strategica
- Richiedi Architettura di Rete Personalizzata
- Scarica Brochure Enterprise

---

### Customer Stories

**Struttura:** Pagina indice + pagine individuali per ogni case study

#### Pagina Indice Case Study

Grid con card:

- Foto/logo cliente
- Nome azienda
- Settore
- Descrizione 1 riga ("270 affiliati Unieuro gestiti con Daisy")
- Link "Leggi case study"

#### Template Pagina Singolo Case Study

**Contenuto:**

1. **Scheda Cliente** (box evidenziato)

    - Nome azienda
    - Settore
    - Dimensione (N negozi, N dipendenti, N clienti)
    - Sito web (link)

2. **Sfide Iniziali**

    - 3-5 pain point pre-Daisy
    - Citazione cliente (problema chiave)

3. **Soluzione Implementata**

    - Moduli Daisy utilizzati
    - Integrazioni attivate (Eldomcat, Elecommerce, Fastlabel)
    - Personalizzazioni specifiche

4. **Risultati Quantificati**

    - N punti vendita gestiti
    - N postazioni/utenti
    - N transazioni/giorno (se disponibile)
    - Tempi risparmiati (es. inventario da 2h a 15min)
    - Altri KPI

5. **Citazione Cliente**

    - Testimonianza (3-5 frasi)
    - Foto responsabile/punto vendita

6. **Screenshot/Video**

    - Se disponibili
    - Interfaccia personalizzata cliente

7. **Moduli/Prodotti Correlati**
    - Link a moduli utilizzati nel case
    - Link a integrazioni

**Case Study Prioritari:**

1. **Unieuro 1Company** - Flagship (270 affiliati)
2. **Model Assistance** - B2B distribuzione (2000+ clienti)
3. **Gaer/Expert** - Portale + totem innovativi
4. **Domex** - Gestione visual 200+ negozi
5. **Carrubba S.r.l.** - Negozio singolo
6. **Te.se.c./Tesec** - E-commerce B2C integrato
7. **Upset Design** - Settore non-eldom (illuminazione)

**Call to Action:**

- Leggi Altri Case Study
- Richiedi Soluzione Simile
- Prenota Consulenza

---

### Tecnologie & Sicurezza

#### Pagina: Architettura Web-Based

**Contenuto:**

- **Spiegazione "web-based":** Nessuna installazione client, sempre aggiornato, accessibile ovunque
- **Compatibilità browser:** Chrome, Firefox, Safari, Edge (con versioni minime)
- **Responsive:** Funziona su PC (≥1024px), tablet (768-1023px), smartphone (≤767px)
- **Tecnologie:** Stack moderno (senza dettagli eccessivi: "PHP, MySQL, framework enterprise-grade")
- **Vantaggi vs. client desktop:**
  - Aggiornamenti automatici
  - Zero manutenzione postazioni
  - Lavoro remoto nativamente
  - Accesso da qualsiasi dispositivo

**Call to Action:**

- Richiedi Demo Online
- Scarica Specifiche Tecniche PDF

#### Pagina: SaaS vs. On-Premise

**Contenuto:**

**Tabella comparativa:**

| Aspetto               | SaaS (Cloud)                    | On-Premise                   |
| --------------------- | ------------------------------- | ---------------------------- |
| **Hosting**           | Gestito da Elettrorama          | Server cliente               |
| **Backup**            | Automatici giornalieri          | Responsabilità cliente       |
| **Costi iniziali**    | Zero investimento infra         | Server + licenze             |
| **Costi ricorrenti**  | Canone mensile                  | Manutenzione annuale         |
| **Aggiornamenti**     | Automatici inclusi              | Pianificati, possibile costo |
| **IT interno**        | Non richiesto                   | Necessario                   |
| **Scalabilità**       | Immediata (aggiungi utenti)     | Richiede hardware            |
| **Disaster recovery** | Incluso (ridondanza geografica) | Da implementare              |

**Modello Ibrido:**

- Server locale + replica cloud per backup
- Massimo controllo + sicurezza cloud

**Certificazioni/Compliance SaaS:**

- Data center certificati ISO 27001
- Backup geograficamente ridondanti
- Uptime 99.9%

**FAQ:**

- "I miei dati sono sicuri nel cloud?" → Sì, spiegazione
- "Posso passare da SaaS a on-premise?" → Sì, migrazione possibile
- "Cosa succede se interrompo il canone?" → Export dati garantito

**Call to Action:**

- Valuta la Soluzione Adatta (quiz interattivo?)
- Richiedi Consulenza Infrastrutturale

#### Pagina: Sicurezza & Permessi

**Contenuto:**

**Sistema Permessi:**

- Granulare: per utente, ruolo, modulo, funzione
- Ruoli predefiniti: cassiere, magazziniere, buyer, amministratore
- Personalizzazione profili

**Audit Trail:**

- Log operazioni critiche (sconti manuali, rettifiche magazzino, eliminazioni)
- Report conformità
- Ricerca e filtro log

**Backup:**

- SaaS: automatici giornalieri, conservazione 30 giorni
- On-premise: configurazione personalizzata

**Protezione Accessi:**

- Password policy configurabile
- Logout automatico inattività
- IP whitelisting (opzionale)
- Autenticazione a due fattori (opzionale)

**Conformità GDPR:**

- Gestione consensi clienti
- Diritto oblio
- Export dati personali

**Call to Action:**

- Scarica Documento Sicurezza PDF

#### Pagina: Compatibilità & Integrabilità

**Contenuto:**

**Database supportati:**

- MySQL (≥5.7)
- Oracle (≥12c)
- SQL Server (≥2016)

**Integrazioni native:**

- Eldomcat, Elecommerce, Fastlabel
- DaisyEDI (POS, bilance, stampanti etichette)
- Centrali: Unieuro, Expert, Domex, Gaer, Trend

**API/Web service:**

- REST API disponibili
- Documentazione tecnica
- Ambiente sandbox per test

**Import/Export:**

- CSV, XML, Excel
- Formati personalizzabili
- Schedulazione automatica

**Migrazione da altri gestionali:**

- Servizio assistito
- Analisi dati esistenti
- Mappatura campi
- Test parallelo pre-switch

**Call to Action:**

- Verifica Compatibilità con i Tuoi Sistemi (form)
- Richiedi Migrazione Assistita
- Scarica Documentazione API

#### Pagina: Scalabilità & Performance

**Contenuto:**

**Multi-azienda:**

- Da 1 a 1000 punti vendita
- Nessun cambio piattaforma crescendo

**Architettura:**

- Progettata per reti
- Caso Unieuro: 270 negozi, 900 postazioni, 400 casse simultanee

**Performance:**

- Operazioni ad alto volume ottimizzate
- Chiusure cassa veloci
- Inventari con migliaia articoli

**Disaster Recovery (SaaS):**

- Ridondanza geografica data center
- Failover automatico
- RTO < 1 ora

**Call to Action:**

- Richiedi Stress Test

---

### Prezzi / Modelli di Adozione

**Obiettivo:** Guidare verso contatto commerciale, dare trasparenza parziale

**Contenuto:**

#### Filosofia Pricing

"Paghi solo i moduli che usi. Scalabilità senza sorprese."

#### Modalità SaaS (Cloud)

- **Struttura:** Canone mensile per utente/postazione
- **Include:** Hosting, backup, aggiornamenti, assistenza help desk
- **Vantaggio:** Zero investimento iniziale, costi prevedibili

#### Modalità On-Premise

- **Struttura:** Licenza perpetua o a tempo
- **Include:** Software, installazione, formazione
- **Opzionale:** Manutenzione annuale (aggiornamenti, supporto)

#### Pacchetti Pre-Configurati

**Tabella comparativa:**

| Pacchetto        | Moduli Inclusi                        | Ideal Per           | Da         |
| ---------------- | ------------------------------------- | ------------------- | ---------- |
| **Starter**      | Vendite, Cassa, Magazzino             | Negozio singolo     | €X/mese    |
| **Professional** | + Acquisti, Statistiche, Promozioni   | Negozio avanzato    | €Y/mese    |
| **Enterprise**   | + Multi-azienda, Ordini Centrale, API | Rete multi-sede     | Preventivo |
| **Custom**       | Moduli à la carte                     | Esigenze specifiche | Preventivo |

#### Add-On (Prezzi separati)

- Eldomcat (banca dati): da €Z/mese
- Elecommerce (e-commerce): preventivo
- Fastlabel (stampa cartelli): da €W/mese
- App Mobile (DaisyApp, DaisyCheck): incluse o opzionali

#### Trial Gratuito

- 30 giorni accesso demo completo
- Nessuna carta credito richiesta
- Assistenza inclusa

#### Form Richiesta Preventivo

Campi:

- Azienda \*
- Email \*
- Telefono \*
- N. punti vendita \*
- N. utenti stimati \*
- Moduli interesse (checkbox)
- Modalità preferita (SaaS / On-premise)
- Note

**Call to Action:**

- Richiedi Preventivo Personalizzato (primario)
- Prenota Consulenza Commerciale
- Attiva Trial Gratuito 30 Giorni

---

### Risorse

#### Pagina: Brochure

**Contenuto:**

Lista download PDF con form lead capture leggero (email, azienda):

1. **Brochure Daisy Solution** (6-8 pagine)

    - Panoramica prodotto
    - Moduli principali
    - Casi studio
    - Contatti

2. **Schede Tecniche Moduli** (1 PDF per modulo)

    - Vendite & Cassa
    - Acquisti & Fornitori
    - Magazzino & Inventari
    - ecc.

3. **Case Study PDF**

    - Unieuro 1Company
    - Model Assistance
    - Gaer/Expert
    - Domex

4. **Guida Confronto: Daisy vs. Gestionale Tradizionale**

**Call to Action:**

- Download (dopo form)

#### Pagina: Video & Tutorial

**Contenuto:**

Playlist organizzata:

1. **Video Panoramica Daisy Solution** (2-3 min)

    - <https://www.youtube.com/watch?v=_eUJGcriSpk>

2. **Video DaisyApp**

    - <https://youtu.be/fjJC21VUaNY>

3. **Video DaisyCheck**

    - <https://www.youtube.com/watch?v=3azDJiw_vZ0>

4. **Video Tour Moduli** (da produrre, 1 min ciascuno)

    - Vendite & Cassa
    - Magazzino
    - Statistiche

5. **Webinar Registrati** (se disponibili)
    - "Come scegliere un gestionale retail"
    - "Integrazione e-commerce + gestionale"

**Call to Action:**

- Iscriviti al Canale YouTube Elettrorama
- Richiedi Webinar Live Personalizzato

#### Pagina: Documentazione Tecnica

**Contenuto:**

Download riservati (registrazione con email aziendale):

1. **Requisiti Sistema (On-Premise)**

    - Hardware: CPU, RAM, storage
    - OS: Linux, Windows Server
    - Database: versioni supportate

2. **Specifiche Tecniche**

    - Architettura software
    - Protocolli comunicazione
    - Standard sicurezza

3. **Guida Integrazioni**

    - API REST: endpoint, autenticazione
    - EDI: formati supportati
    - Import/Export: specifiche file

4. **Roadmap Prodotto** (high-level)
    - Prossime funzionalità previste
    - Timeline indicativa

**Call to Action:**

- Scarica Documento (con registrazione)
- Richiedi Supporto Tecnico Pre-Sales

#### Pagina: FAQ

**Contenuto:**

Domande frequenti categorizzate con accordion:

**Funzionalità**

- Quali moduli include Daisy Solution?
- Posso gestire più punti vendita?
- Funziona offline?
- È compatibile con il mio POS?

**Prezzi**

- Quanto costa Daisy Solution?
- Posso iniziare con pochi moduli e aggiungerne dopo?
- C'è un canone minimo?
- Cosa include il canone SaaS?

**Tecnologia**

- Serve installare qualcosa sui PC?
- Funziona su Mac?
- Quali browser supporta?
- Posso accedere da smartphone?

**Supporto**

- Che assistenza offrite?
- C'è formazione inclusa?
- Quanto dura l'implementazione?
- Offrite migrazione da altro gestionale?

**Sicurezza**

- I miei dati sono al sicuro?
- Che backup fate?
- È conforme GDPR?

**Call to Action:**

- Non trovi risposta? Contattaci

---

### Contatti / Richiedi Demo

**Obiettivo:** Massimizzare conversione lead

**Contenuto:**

#### Tabs o Sezioni

**1. Richiedi Demo**

Form:

- Nome \*
- Email \*
- Telefono \*
- Azienda \*
- N. punti vendita \*
- Settore (dropdown)
- Moduli interesse (checkbox)
- Messaggio

**2. Contatto Generico**

Form:

- Nome \*
- Email \*
- Oggetto \*
- Messaggio \*

**3. Prenota Consulenza**

- Calendario integrato (es. Calendly)
- Slot disponibili commerciale
- Durata: 30 min / 60 min

**4. Help Desk**

Distinguere:

- **Pre-sales** (domande prodotto): form contatto commerciale
- **Supporto clienti** (assistenza tecnica):
  - Tel: +39 011 9203522 int. 1
  - Email: <helpdesk@elettrorama.com>
  - Orari: Lun-Ven 9-13 / 14.30-19.30, Sab 9-13

#### Sede

- Indirizzo Elettrorama
- Mappa Google Maps embedded
- Indicazioni stradali

#### Canali Social

- LinkedIn Elettrorama
- YouTube Elettrorama

**Call to Action:**

- Invia Richiesta
- Chiama Ora (click to call mobile)
- Prenota Slot Calendario

---

## Priorità Implementazione

### Fase 1 - MVP (Minimum Viable Product)

1. Home
2. Prodotto → Panoramica
3. Prodotto → Moduli (indice + 3 moduli chiave: Vendite, Magazzino, Statistiche)
4. Settori → Negozi Singoli
5. Customer Stories → Unieuro (flagship)
6. Contatti / Richiedi Demo

### Fase 2 - Completamento Core

7. Prodotto → Integrazioni
8. Prodotto → Perché Daisy Solution
9. Settori → Catene & Affiliazioni
10. Customer Stories → 3 case aggiuntivi
11. Prezzi / Modelli
12. Risorse → Brochure + Video

### Fase 3 - Approfondimento

13. Prodotto → Moduli restanti (4 pagine)
14. Settori → Distribuzione Organizzata
15. Tecnologie & Sicurezza (4 pagine)
16. Risorse → Documentazione Tecnica + FAQ
17. Customer Stories → case rimanenti

---

**Documento redatto da:** Analisi repository elerama-site
**Prossima revisione:** Dopo wireframe e design
