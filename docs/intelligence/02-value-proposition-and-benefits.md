# Value Proposition and Benefits

> **Documento generato il**: 2025-11-10
> **Fonte**: Analisi repository `elerama-site` > **Scopo**: Dettagliare feature core e benefici per segmento per il sito Daisy Solution

---

## Feature Core

### Architettura e Tecnologia

#### Web Based

-   Accesso via browser (Chrome, Firefox, Safari, Edge)
-   Zero installazioni client
-   Interfaccia responsive: funziona su PC, tablet, smartphone
-   Sempre aggiornato: nuove funzionalità disponibili automaticamente

#### SaaS / Cloud

-   **Hosting gestito** da Elettrorama (elerama.com): server, backup, sicurezza inclusi
-   **On-premise opzionale**: installazione su server cliente quando necessario
-   **Modello ibrido**: server locale + replica cloud per disaster recovery

#### Modulare

-   20+ moduli attivabili indipendentemente
-   Acquisti solo ciò che serve
-   Espansione funzionalità senza reinstallazioni

#### Multiaziendale

-   Gestione più società/punti vendita con un'unica istanza
-   Condivisione dati configurabile (giacenze, prezzi, cataloghi)
-   Consolidamento statistiche rete

#### Multilingua

-   Interfaccia localizzabile
-   Documenti in diverse lingue

#### Multidatabase

-   Supporto MySQL, Oracle, SQL Server
-   Migrazioni da database esistenti

#### Multibrowser e Responsive

-   Compatibile tutti i principali browser
-   Layout adattivo: desktop, tablet, smartphone
-   Touch-friendly per device mobili

---

### Sicurezza e Controllo

#### Gestione Permessi Granulare

-   **Per utente**: autorizzazioni individuali
-   **Per ruolo**: profili standard (cassiere, magazziniere, buyer, amministratore)
-   **Per modulo**: accesso selettivo alle funzionalità
-   **Per funzione**: controllo operazioni specifiche (es. sconti, rettifiche)

#### Audit Trail

-   Log automatico operazioni critiche
-   Tracciabilità modifiche (chi, cosa, quando)
-   Report conformità

#### Backup e Disaster Recovery

-   **SaaS**: backup automatici giornalieri, ridondanza geografica
-   **On-premise**: pianificazione backup personalizzata
-   Restore point-in-time

---

## Moduli Gestionali Principali

### Vendite

#### Ciclo Attivo Completo

-   **Preventivi**: creazione, invio, conversione in ordine
-   **Ordini clienti**: gestione stato, tracking evasione
-   **Fatture**: emissione manuale o automatica, fatturazione elettronica
-   **Scontrini**: collegamento POS/registratore fiscale
-   **DDT**: documenti trasporto integrati con magazzino

#### Gestione Commerciale

-   **Mezzi pagamento**: contanti, carta, bonifico, finanziamento, buoni
-   **Acconti**: gestione caparre e saldi
-   **Buoni spesa**: emissione, utilizzo, tracking
-   **Fidelity card**: punti, sconti clienti abituali
-   **Coupon**: sconti temporanei, codici promozionali

#### Punto Vendita

-   **Vendita al banco**: interfaccia rapida per retail
-   **Chiusura cassa**: controllo giornaliero incassi
-   **Scontrino parlante**: dettaglio caratteristiche prodotto
-   **Modalità offline**: continua a vendere senza connessione

#### Statistiche Vendita

-   Real-time dashboard
-   Analisi per periodo, articolo, marca, classificazione
-   Top vendite, flop, trend

---

### Acquisti

#### Ordini Fornitori

-   **Creazione ordini**: manuale o automatica (reintegro)
-   **Gestione sconti**: cascata sconti/maggiorazioni articolata
-   **Backorder**: gestione rotture stock per fornitore/magazzino
-   **Integrazione centrale**: ordini diretti a piattaforma logistica con controllo disponibilità

#### Ricezione Merci

-   **Controllo bolle**: incrocio con ordini
-   **Carico automatico**: da centrale d'acquisto (EDI)
-   **Note credito**: gestione resi e contestazioni
-   **Fatture passive**: controllo vs. carichi

#### Scadenziario

-   Pagamenti fornitori
-   Promemoria scadenze
-   Simulazione flussi cassa

---

### Magazzino

#### Movimentazione

-   **Carichi**: da fornitori, da centrale, da trasferimenti
-   **Scarichi**: vendite, resi, perdite
-   **Rettifiche**: correzioni positive/negative
-   **Trasferimenti**: tra punti vendita con DDT

#### Inventario

-   **Rilevazione fisica**: con app mobile DaisyCheck + lettore barcode
-   **Gestione differenze**: analisi scostamenti, rettifiche
-   **Inventario rotativo**: conteggio periodico settori

#### Gestione Avanzata

-   **Rivalutazioni**: contributi sell-out da centrale
-   **Resi fornitori**: gestione logistica inversa
-   **Magazzino fiscale**: conformità normativa
-   **Lotti e seriali**: tracking dettagliato

#### Statistiche Magazzino

-   Giacenze per punto vendita
-   Rotazione stock (indice turnover)
-   Articoli a rotazione lenta/fermi
-   Analisi sotto-scorta

---

### Cassa / POS

#### Punto Cassa

-   **Vendita al banco**: interfaccia touch-friendly
-   **Registratore fiscale**: collegamento via DaisyEDI
-   **Scanner barcode**: lettura veloce prodotti
-   **Bilance**: integrazione per prodotti a peso variabile

#### Promozioni Real-Time

-   Applicazione automatica sconti attivi
-   Prezzi speciali per gruppi clienti
-   Fidelity card: calcolo punti, premi

#### Gestione Pagamenti

-   Multi-metodo (contanti, carta, buoni, finanziamenti)
-   Split payment (pagamento parziale)
-   Acconti e saldi

#### Modalità Offline

-   **Cassa off-line**: continua a funzionare senza rete
-   Sincronizzazione automatica al ripristino connessione
-   Affidabilità garantita

---

## Moduli Specialistici

### Liste Regalo

#### Gestione Eventi

-   Creazione liste personalizzabili (matrimonio, nascita, compleanno)
-   Buoni partecipazione e quote
-   Tracking regali acquistati

#### Integrazione E-commerce

-   Area invitati: consultazione lista online
-   Area festeggiati: gestione preferenze
-   Ordini e-commerce collegati a lista

#### Logistica

-   Spedizioni a festeggiati
-   Gestione evasione ordini da lista

---

### Riparazioni

#### Presa in Carico

-   Registrazione prodotto da riparare
-   Rilascio ricevuta cliente
-   Scheda diagnostica
-   Foto e documentazione allegata

#### Gestione Centri Assistenza

-   Invio prodotti con DDT
-   Tracking stato riparazione
-   Ricezione prodotti riparati
-   Gestione tempistiche (SLA)

#### Portale Web Clienti

-   Consultazione stato riparazione online
-   Notifiche automatiche (SMS/email)

---

### RAEE (Rifiuti Elettrici)

#### Conformità Normativa

-   **Classificazione C.E.R.**: codici rifiuto
-   **Registro carico/scarico**: automatico da movimenti
-   **DDT rifiuti**: emissione conforme

#### Gestione Operativa

-   Ritiro rifiuto con DDT
-   Conferimento centro raccolta
-   Tracking quantità per categoria

---

### Promozioni

#### Pianificazione Campagne

-   **Temporizzazione**: data inizio/fine automatica
-   **Segmentazione**: per classificazione, marca, articolo
-   **Targeting**: per cliente, gruppo clienti, tutti

#### Tipologie Sconto

-   Percentuale
-   Importo fisso
-   Prezzo barrato
-   3x2, bundle, sottocosto

#### Attivazione Rete

-   **Volantini**: attivazione con "un click" da centrale
-   **Sincronizzazione**: tutti i punti vendita allineati
-   **Visual marketing**: integrazione FastLabel per cartelli

---

### Banca Dati

#### Gestione Catalogo

-   **Caratteristiche tecniche**: struttura personalizzabile per categoria
-   **Foto prodotti**: multiple per articolo, zoom, 360°
-   **Classificazioni**: gerarchiche e trasversali
-   **Attributi ricercabili**: per filtri avanzati

#### Integrazione Eldomcat

-   Accesso a 300.000+ articoli settore eldom
-   Caratteristiche strutturate e foto professionali
-   Aggiornamento automatico novità

#### Utilizzo Multi-Canale

-   Gestionale (descrizioni documenti)
-   E-commerce (schede prodotto)
-   Stampa cartelli (FastLabel)
-   App mobile (DaisyApp)

---

### Import / Export

#### Pianificazione Automatica

-   **Schedulazione**: esecuzioni periodiche (giornaliere, settimanali)
-   **Monitoraggio**: log successo/errori
-   **Notifiche**: alert in caso anomalie

#### Tipologie Dati

-   Anagrafiche clienti/fornitori
-   Cataloghi prodotti
-   Listini prezzi
-   Movimenti magazzino
-   Documenti ciclo attivo/passivo

#### Transcodifiche

-   Mappatura automatica codici (es. codice centrale ↔ codice interno)
-   Gestione multimarca
-   Interfaccia configurazione visuale

---

### Statistiche

#### Dashboard Real-Time

-   KPI principali (vendite giorno, giacenze, margine)
-   Grafici trend
-   Alert anomalie

#### Analisi Vendite

-   Per periodo (giorno, settimana, mese, anno)
-   Per articolo/marca/classificazione
-   Per punto vendita (confronto performance)
-   Per venditore
-   Analisi marginalità

#### Analisi Magazzino

-   Giacenze per punto vendita
-   Rotazione stock
-   Copertura giorni
-   Articoli sotto-scorta

#### Export e Reportistica

-   Excel, PDF
-   Report personalizzabili
-   Invio automatico via email

---

### Altri Moduli

#### E-commerce

-   Integrazione nativa con Elecommerce
-   Sincronizzazione catalogo, prezzi, giacenze
-   Gestione ordini web da gestionale
-   Emissione documenti automatica

#### Ordini a Centrale

-   Interfaccia diretta con piattaforma logistica
-   Controllo disponibilità real-time
-   Ricezione variazioni prezzo/promozioni
-   Invio sell-out per rivalutazioni

#### Stampa Cartelli Prezzo

-   Integrazione FastLabel
-   Layout centralizzati
-   Stampa massiva o selettiva

#### Gestione Layout Cartelli

-   Editor visuale
-   Template predefiniti per settore
-   Personalizzazione loghi/slogan

#### Comunicazioni

-   Notifiche interne operatori
-   Avvisi urgenti
-   Bacheca aziendale

#### Web Service / API

-   Integrazioni custom con sistemi terzi
-   Endpoint REST
-   Documentazione tecnica

---

## Benefici per Segmento

### Negozi Singoli

#### Operativi

**Semplicità gestione**

-   Interfaccia intuitiva, linguaggio del retailer
-   Nessuna competenza IT avanzata richiesta
-   Formazione rapida personale

**Mobilità**

-   Accesso ovunque: casa, fiera, appuntamenti fornitori
-   App mobile DaisyApp: consulta catalogo e giacenze in negozio senza PC
-   App mobile DaisyCheck: inventari rapidi con smartphone + lettore barcode

**Autonomia**

-   Self-service per operazioni quotidiane
-   Report e statistiche senza consulente
-   Gestione promozioni in autonomia

#### Economici

**Investimento contenuto**

-   SaaS: nessun server da acquistare
-   Nessun costo infrastruttura (hosting, backup, sicurezza inclusi)
-   Modularità: parti con €X, aggiungi moduli dopo

**Costi prevedibili**

-   Canone mensile fisso (vs. sorprese manutenzione)
-   Aggiornamenti inclusi (no upgrade a pagamento)
-   Scalabilità: aggiungi utenti/moduli al bisogno

**ROI veloce**

-   Riduzione tempo operazioni (es. inventario da 2 ore a 15 min con DaisyCheck)
-   Meno errori manuali (costi correzione)
-   Visibilità vendite real-time (decisioni più rapide)

#### Commerciali

**Integrazione e-commerce**

-   Vendi online con Elecommerce
-   Gestisci ordini web da gestionale (no doppia digitazione)
-   Sincronizzazione catalogo/prezzi/giacenze automatica

**Statistiche vendita**

-   Scopri prodotti top/flop
-   Ottimizza assortimento
-   Pianifica acquisti su dati reali

**Gestione clienti**

-   Fidelity card
-   Storico acquisti
-   Marketing targetizzato

---

### Catene / Gruppi d'Acquisto

#### Scalabilità

**Multi-punto vendita**

-   Gestisci da 5 a 500 negozi con stessa piattaforma
-   Nessun cambio software crescendo
-   Costi scalabili con dimensione rete

**Condivisione giacenze**

-   Vendita cross-store (vendi prodotto di altro negozio)
-   Trasferimenti semplificati tra punti vendita
-   Visibilità stock complessivo rete

**Rollout rapido**

-   Nuovi punti vendita attivi in giorni
-   Zero installazioni (web-based)
-   Formazione remota via webinar

#### Coordinamento

**Visual marketing centralizzato**

-   FastLabel: attiva campagne promozioni su tutta rete con un click
-   Cartelli prezzi sincronizzati
-   Loghi/slogan gestiti da centrale, punti vendita stampano solo ciò che è autorizzato

**Promozioni sincronizzate**

-   Attivazione volantini simultanea su rete
-   Prezzi speciali per zona/insegna
-   Modifiche real-time (no attesa aggiornamenti)

**Statistiche aggregate**

-   Dashboard consolidata rete
-   Benchmarking tra punti vendita
-   Analisi performance per zona/insegna

#### Integrazione Centrale

**Ordini automatici**

-   Punto vendita ordina da centrale con controllo disponibilità
-   Ricezione ordini in automatico (no conferma telefonica/email)
-   Backorder gestito

**Carico bolle automatico**

-   Bolle da piattaforma logistica arrivano in automatico
-   Zero digitazione manuale
-   Incrocio con ordini

**Listini e promozioni**

-   Ricezione variazioni prezzo in tempo reale
-   Attivazione promozioni da centrale
-   Garanzie/fidelity centralizzate

**Invio sell-out**

-   Dati vendita/giacenza inviati giornalmente a centrale
-   Rivalutazioni automatiche
-   Contributi sell-out applicati

#### Governance

**Permessi differenziati**

-   Centrale: visibilità e controllo su tutta rete
-   Affiliato: operatività limitata a proprio punto vendita
-   Auditabilità: chi ha fatto cosa, quando

**Controllo qualità**

-   Standardizzazione processi
-   Verifica conformità operazioni
-   Report anomalie

**Reportistica direzionale**

-   Consolidato economico rete
-   Analisi profittabilità per punto vendita
-   Previsioni e budget

---

### Retail Organizzato / Piattaforme Distributive

#### Controllo Rete

**Visibilità real-time**

-   Sell-out aggiornato ogni giorno da tutti affiliati
-   Dashboard aggregata (vendite, giacenze, margini)
-   Alert anomalie (rotture stock, performance sotto soglia)

**Business Intelligence**

-   Analisi sell-out vs. sell-in
-   Previsioni reintegro basate su storico
-   Individuazione trend categorie/marche

**Gestione Assortimenti**

-   Listini differenziati per zona/insegna
-   Cataloghi personalizzati per tipologia punto vendita
-   Pricing dinamico

#### Logistica e Rifornimento

**Ottimizzazione rifornimenti**

-   Reintegro automatico basato su venduto affiliati
-   Trasferimenti inter-filiali per bilanciare stock
-   Riduzione out-of-stock

**Sincronizzazione stock**

-   Allineamento fisico/contabile
-   Inventari coordinati rete
-   Gestione resi centralizzata

**Sistema backorder**

-   Affiliato ordina anche prodotti non disponibili
-   Evasione automatica a disponibilità

#### Ecosistema Integrato

**Portale B2B affiliati**

-   Elecommerce: affiliati ordinano online 24/7
-   Catalogo sempre aggiornato
-   Tracking ordini

**Banca dati condivisa**

-   Eldomcat: caratteristiche tecniche e foto per tutti affiliati
-   Aggiornamenti centralizz ati
-   Personalizzazioni per punto vendita

**Strumenti marketing coordinati**

-   FastLabel: controllo visual tutti negozi
-   Campagne promozionali sincronizzate
-   Materiale POP digitalizzato

#### Scalabilità e Onboarding

**Onboarding rapido affiliati**

-   Setup nuovo punto vendita in giorni, non mesi
-   Template configurazione per tipologia negozio
-   Formazione a distanza

**Standardizzazione processi**

-   Procedure operative uniformi
-   Riduzione errori
-   Facilita supporto

**Gestione crescita**

-   Passa da 10 a 1000 affiliati senza cambio piattaforma
-   Architettura scalabile
-   Costi lineari con crescita rete

---

## Differenziatori vs. Gestionale Generico

| Aspetto                   | Gestionale Generico                                 | Daisy Solution                                             |
| ------------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| **Settore**               | Orizzontale, richiede customizzazione               | Verticale retail/eldom, pronto all'uso                     |
| **Setup**                 | Mesi (configurazione, personalizzazione)            | Settimane (moduli preconfigurat i)                         |
| **Integrazioni Centrali** | Da sviluppare caso per caso (costi €€€)             | Nativa per Unieuro, Expert, Domex, Gaer, Trend             |
| **E-commerce**            | Add-on terze parti, integrazione complessa          | Elecommerce integrato nativamente                          |
| **Banca Dati Prodotti**   | Gestione manuale (caricamento foto/caratteristiche) | Integrazione Eldomcat (300k+ prodotti eldom)               |
| **Stampa Cartelli**       | Reporting generico, layout manuali                  | FastLabel integrato con gestione centralizzata visual      |
| **Mobile**                | Spesso assente o limitato                           | App native: DaisyApp (catalogo), DaisyCheck (inventari)    |
| **Deployment**            | Solo on-premise O solo cloud                        | Scelta cliente: SaaS, on-premise, ibrido                   |
| **Costi**                 | License €€€ + consulenza €€€ + manutenzione €€      | Modularità + SaaS = costi contenuti e prevedibili          |
| **Affiliazioni**          | Non gestisce logica centrale-affiliato              | Progettato per reti (270 affiliati Unieuro live)           |
| **Assistenza**            | Ticketing generico, tempi lunghi                    | Help desk settoriale, expertise retail                     |
| **Aggiornamenti**         | A pagamento, migrazioni complesse                   | Inclusi (SaaS), automatici, zero downtime                  |
| **Esperienza Retail**     | Team IT generico                                    | 20+ anni retail & distribuzione organizzata                |
| **Track Record**          | Installazioni varie industrie                       | 270 affiliati Unieuro, 200+ Expert/Domex, 2000+ clienti    |
| **Linguaggio**            | Tecnico (ERP, SCM, CRM)                             | Del retailer (vendita al banco, chiusura cassa, reintegro) |

---

## Proof Points Quantitativi

### Scalabilità Provata

-   **270 affiliati Unieuro** attivi con Daisy Solution
-   **900 postazioni** simultanee (caso Unieuro)
-   **400 casse** collegate (caso Unieuro)
-   **200+ negozi** Expert/Domex con FastLabel integrato
-   **2000+ clienti** Model Assistance gestiti con portale B2B

### Operatività

-   **Inventario in 15 minuti** con DaisyCheck (vs. 2 ore manuale)
-   **Attivazione promozioni con 1 click** su tutta rete
-   **Carico bolle automatico** da centrale: zero digitazione
-   **Backup giornalieri** automatici (SaaS)

### Copertura

-   **300.000+ articoli** Eldomcat integrati
-   **20+ moduli** disponibili
-   **5 centrali** integrate (Unieuro, Expert, Domex, Gaer, Trend)
-   **20 anni** esperienza settore

---

## Modello di Adozione

### Starter (Negozio Singolo)

**Moduli inclusi:**

-   Vendite & Cassa
-   Magazzino
-   Statistiche base

**Ideal per:**

-   Retail singolo che parte
-   Transizione da gestione manuale/Excel
-   Budget contenuto

**Espandibile con:**

-   Acquisti & Fornitori
-   E-commerce (Elecommerce)
-   Banca Dati (Eldomcat)
-   Stampa Cartelli (FastLabel)

### Professional (Negozio Avanzato)

**Moduli inclusi:**

-   Tutto Starter +
-   Acquisti & Fornitori
-   Promozioni
-   Import/Export
-   Riparazioni o RAEE (opzionale)

**Ideal per:**

-   Retail consolidato
-   Necessità reportistica avanzata
-   Integrazione con fornitori

### Enterprise (Rete Multi-Sede)

**Moduli inclusi:**

-   Tutto Professional +
-   Multi-azienda
-   Ordini a Centrale
-   Web Service / API
-   FastLabel (gestione centralizzata)

**Ideal per:**

-   Catene 5+ punti vendita
-   Affiliazioni
-   Centrali d'acquisto

### Custom

**Moduli à la carte:**

-   Scegli solo ciò che serve
-   Aggiungi/rimuovi moduli nel tempo
-   Personalizzazioni specifiche

**Ideal per:**

-   Esigenze particolari
-   Settori non-standard
-   Integrazioni complesse

---

## Next Steps

### Per Negozio Singolo

1. **Richiedi Demo**: prova 30 giorni gratuita
2. **Scegli pacchetto**: Starter o Professional
3. **Formazione**: webinar 2 ore
4. **Go-live**: operativo in 2 settimane

### Per Catena/Affiliazione

1. **Consulenza preliminare**: analisi esigenze rete
2. **Progetto pilota**: 1-2 punti vendita test
3. **Rollout**: estensione graduale rete
4. **Supporto continuo**: help desk dedicato

### Per Centrale/Piattaforma

1. **Workshop strategico**: definizione architettura
2. **Integrazione centrale**: EDI, web service
3. **Onboarding affiliati**: piano formazione rete
4. **Governance**: definizione permessi e processi

---

**Documento redatto da:** Analisi repository elerama-site
**Prossima revisione:** Dopo validazione commerciale
