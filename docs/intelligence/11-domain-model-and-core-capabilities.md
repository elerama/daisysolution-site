# Modello di Dominio e Capability Core - Daisy Solution ERP

> **Versione:** 1.0.0
> **Data:** 2025-11-10
> **Ambito:** Analisi entità principali e operazioni core per retail/GDO

---

## 1. Entità Principali

### 1.1 Article (COM_ARTICLES)

**Ruolo:** Gestione anagrafica prodotti con supporto multi-barcode, brand e categorizzazione.

**Campi chiave:**

- `ID_ARTICLE` (PK): identificativo univoco
- `ID_UNIQUE_ARTICLE`: codice articolo univoco aziendale
- `MODEL`: modello/codice prodotto
- `DESCRIPTION`: descrizione commerciale
- `ID_BRAND`, `ID_CATEGORY`, `ID_VAT`: relazioni a brand, categoria, aliquota IVA
- `ACTIVE`: flag attivo/disattivo

**Tabelle correlate:**

- `COM_BAR_CODES`: barcode multipli per articolo (EAN, UPC, codici interni)
- `COM_ARTICLE_PRICES`: prezzi per listino
- `COM_STOCK`: giacenze per punto vendita/magazzino
- `COM_ARTICLE_GRIDS`: varianti prodotto (taglie, colori)

**File principali:**

- `models/article_model.php`
- `modules/admin/models/articles_model.php`
- `modules/sales/models/Articles_model.php`
- `libraries/Articles_obj.php`

---

### 1.2 Customer (COM_CUSTOMERS)

**Ruolo:** Anagrafica clienti B2B/B2C con gestione fidi, indirizzi multipli e parametri commerciali.

**Campi chiave:**

- `ID_CUSTOMER` (PK): identificativo univoco
- `C_CUSTOMER`: codice cliente univoco
- `D_CUSTOMER`: denominazione/ragione sociale
- `ADDRESS`, `CITY`, `PROVINCE`, `POST_CODE`: indirizzo principale
- `VAT_NUMBER`, `TAX_CODE`: partita IVA e codice fiscale
- `EMAIL`, `PHONE`, `MOBILE`, `FAX`: contatti
- `CUSTOMER_TYPE`: tipologia cliente
- `WHOLESALE_CUSTOMER`: flag cliente grossista (B2B)
- `FOREIGN_CUSTOMER`: flag cliente estero

**Tabelle correlate:**

- `SAL_CUSTOMERS`: parametri vendita (listini, IVA esposta, fido)
- `COM_CUSTOMER_LISTS_PRICE`: listini personalizzati
- `COM_CUSTOMERS_ADDRESSEES`: indirizzi consegna multipli
- `COM_CUSTOMER_USERS`: utenti portale B2B

**File principali:**

- `modules/admin/models/customers_model.php`
- `modules/sales/models/Customers_model.php`
- `libraries/Customers_obj.php`

---

### 1.3 Store/Warehouse (COM_STORES)

**Ruolo:** Gestione multi-magazzino con movimentazione stock, trasferimenti e inventari.

**Campi chiave:**

- `ID_STORE` (PK): identificativo univoco
- `C_STORE`: codice magazzino
- `D_STORE`: descrizione magazzino
- `T_STORE`: tipologia magazzino
- `ADDRESS`, `CITY`, `PROVINCE`, `POST_CODE`: ubicazione fisica
- `TRANSIT`: flag magazzino transito

**Tabelle correlate:**

- `STO_STORE_MOVEMENTS`: movimenti di magazzino (testata)
- `STO_MOVEMENT_DETAILS`: dettaglio righe movimento
- `COM_STOCK`: giacenze articolo per magazzino (disponibile, impegnato, ordinato)
- `STO_STORE_MOVEMENT_CODES`: causali movimento (acquisto, vendita, trasferimento, inventario, reso)
- `STO_STORE_MOVEMENT_TYPES`: tipi movimento (AM=acquisto merce, VM=vendita, TM=trasferimento)

**File principali:**

- `modules/store/models/Store_movements_model.php`
- `modules/store/models/Inventory_model.php`
- `modules/store/controllers/movements_1.php`
- `libraries/store_utility_model.php`

---

### 1.4 List Price (COM_LISTS_PRICE)

**Ruolo:** Motore dinamico di pricing con 13+ tipologie listino, campagne promozionali e calcolo ricarichi.

**Campi chiave:**

- `ID_LIST_PRICE` (PK): identificativo univoco
- `C_LIST_PRICE`: codice listino
- `D_LIST_PRICE`: descrizione listino
- `T_LIST_PRICE`: tipo listino (0=base, 1=vendita, 2=acquisto, 3=manuale, 4=interno, 5=promo, 6=costo_medio, 7=ultimo_costo, 8=costo_ecommerce, 9=zona, 10=costo_fornitore, 11=suggerito_fornitore, 12=costo_ordine, 13=promo_sellout_tmp)
- `VAT`: flag IVA inclusa/esclusa

**Tabelle correlate:**

- `COM_ARTICLE_PRICES`: prezzi articolo per listino
- `COM_LIST_PRICE_COEFFICIENTS`: regole calcolo ricarico/margine per brand/categoria
- `PRO_PROMOTIONS`: campagne promozionali con periodi validità
- `PRO_PROMOTION_DETAILS`: articoli in promozione con sconti
- `COM_LIST_PRICE_PARAMETERS`: parametri calcolo prezzi dinamici

**File principali:**

- `libraries/List_price.php` (3000+ righe - motore calcolo prezzi)
- `modules/admin/models/lists_price_model.php`
- `modules/promotion/controllers/promotion.php`

---

### 1.5 Order (ORD_ORDERS)

**Ruolo:** Gestione ordini multi-tipo (centrale, trasferimento, fornitore, cliente) con workflow stati.

**Campi chiave:**

- `ID_ORDER` (PK): identificativo univoco
- `ID_TYPE`: tipo ordine (1=ordine_centrale, 2=transfer, 3=fornitore, 4=rete_vendita, 11=cliente)
- `STATUS`: stato ordine (1=memorizzato, 2=inviato, 3=elaborato)
- `ORDER_DATE`: data ordine
- `DOCUMENT_DATE`, `DOCUMENT_NUMBER`: riferimenti documento
- `ID_CUSTOMER`, `ID_SUPPLIER`: cliente/fornitore
- `ID_STORE`: magazzino destinazione

**Tabelle correlate:**

- `ORD_ORDER_DETAILS`: righe ordine (articolo, quantità, costi, sconti)
- `STO_STORE_MOVEMENT_DETAILS`: movimenti magazzino collegati
- `ORD_CHECK_DOCUMENTS`: controllo fatture fornitori

**File principali:**

- `modules/orders/models/orders_model.php`
- `modules/orders/controllers/orders.php`
- `libraries/orders_common_lib.php`

---

### 1.6 Sale (SAL_SALES)

**Ruolo:** Gestione vendite POS con cassa, metodi pagamento, scontrini fiscali e chiusure contanti.

**Campi chiave:**

- `ID_SALE` (PK): identificativo univoco
- `DOCUMENT_DATE`, `DOCUMENT_NUMBER`: data e numero documento
- `ID_DOCUMENT_TYPE`: tipo documento (scontrino, fattura, nota credito)
- `ID_SALE_POINT`: punto vendita
- `ID_STORE`: magazzino collegato
- `ID_CUSTOMER`: cliente (facoltativo)
- `ID_CASHIER`: cassa utilizzata
- `ID_USER`: operatore cassa
- `DOCUMENT_TOTAL`: totale documento
- `SIGN`: segno +1 vendita, -1 reso

**Tabelle correlate:**

- `SAL_SALES_MOVEMENTS`: righe vendita (articolo, quantità, prezzo, IVA)
- `SAL_SALES_PAYMENTS`: metodi pagamento per vendita
- `SAL_CASHIERS`: configurazione casse (password, descrizione)
- `SAL_SALES_CHECK`: chiusure cassa (rilevamento e consolidamento)
- `SAL_CASH_MOVEMENTS`: movimenti contanti (incassi/prelievi extra-vendita)
- `COM_PAYMENTS`: tipologie pagamento (contanti, carta, bonifico, POS, cashmatic)

**File principali:**

- `modules/sales_1/models/Sales_model.php`
- `modules/sales_1/controllers/cash_movements.php`
- `modules/sales_1/models/cashiers_model.php`

---

## 2. Relazioni tra Entità

```
┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│  CUSTOMER   │──────>│  LIST_PRICE  │<──────│   ARTICLE   │
│(COM_CUSTOMERS)│      │(COM_LISTS_PRICE)│   │(COM_ARTICLES)│
└─────────────┘       └──────────────┘       └─────────────┘
       │                      │                       │
       │                      │                       │
       ▼                      ▼                       ▼
┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│    SALE     │       │ ARTICLE_PRICES│       │    STOCK    │
│ (SAL_SALES) │       │(COM_ARTICLE_  │       │ (COM_STOCK) │
│             │       │    PRICES)    │       │             │
└─────────────┘       └──────────────┘       └─────────────┘
       │                                              │
       │                                              │
       ▼                                              ▼
┌─────────────┐                              ┌─────────────┐
│SALES_MOVEMENTS│                            │    STORE    │
│(SAL_SALES_   │                              │(COM_STORES) │
│  MOVEMENTS)  │                              │             │
└─────────────┘                              └─────────────┘
                                                     │
                                                     │
                                                     ▼
                                             ┌─────────────┐
                                             │STORE_MOVEMENT│
                                             │(STO_STORE_  │
                                             │ MOVEMENTS)  │
                                             └─────────────┘
                                                     │
                                                     │
                                                     ▼
                                             ┌─────────────┐
                                             │   ORDER     │
                                             │(ORD_ORDERS) │
                                             └─────────────┘
```

**Relazioni chiave:**

- **Customer → List Price**: cliente associato a listino vendita personalizzato
- **Article → List Price**: articolo con prezzi multipli per listino
- **Article → Stock → Store**: giacenze articolo per magazzino
- **Sale → Customer**: vendita collegata a cliente (B2B) o anonima (B2C)
- **Sale → Article** (via Sales_Movements): righe vendita con articoli
- **Order → Store**: ordine destinato a magazzino
- **Store Movement → Article**: movimenti carico/scarico articoli

---

## 3. Operazioni Core per Entità

### 3.1 Article

**CRUD:**

- Creazione anagrafica con brand, categoria, IVA
- Modifica descrizione, codici, stato attivo/disattivo
- Ricerca per codice, barcode, descrizione, brand, categoria
- Eliminazione logica (flag ACTIVE)

**Operazioni specifiche:**

- Scansione barcode multi-codice (EAN, UPC, interno)
- Calcolo disponibilità: `giacenza - impegnato`
- Gestione varianti prodotto (taglie/colori via grids)
- Associazione listini prezzo multipli
- Storico movimenti magazzino per articolo

---

### 3.2 Customer

**CRUD:**

- Creazione anagrafica B2B/B2C con dati fiscali
- Modifica contatti, indirizzi, parametri commerciali
- Ricerca per codice, denominazione, P.IVA, codice fiscale
- Eliminazione logica

**Operazioni specifiche:**

- Verifica fido cliente e saldo contabile
- Gestione indirizzi consegna multipli
- Assegnazione listini personalizzati
- Differenziazione grossista/dettaglio (WHOLESALE_CUSTOMER)
- Creazione utenti portale B2B collegati
- Gestione condizioni pagamento e scadenze

---

### 3.3 Store/Warehouse

**CRUD:**

- Creazione magazzino con ubicazione fisica
- Modifica parametri, tipologia, flag transito
- Ricerca per codice, descrizione, ubicazione

**Operazioni specifiche:**

- **Carico merce**: movimenti con causale acquisto (AM)
- **Scarico merce**: movimenti con causale vendita (VM)
- **Trasferimenti inter-magazzino**: causale TM
- **Inventario fisico**: rettifica giacenze con causale inventario
- **Calcolo disponibilità**: `STOCK - RESERVED` per articolo/magazzino
- **Movimenti automatici**: da ordini fornitori, vendite POS, trasferimenti
- **Storico movimenti**: tracciabilità completa carico/scarico

---

### 3.4 List Price

**CRUD:**

- Creazione listino con tipo e flag IVA
- Modifica parametri calcolo
- Associazione articoli con prezzi

**Operazioni specifiche:**

- **Calcolo dinamico prezzi**: applicazione ricarichi/margini per brand/categoria
- **Campagne promozionali**: definizione periodi validità, articoli in promo, sconti
- **Pricing a scalare**: prezzi differenziati per quantità/cliente
- **Gestione costi**: ultimo costo, costo medio, costo fornitore, costo ecommerce
- **Listini zona/canale**: prezzi differenziati per area geografica/canale vendita
- **Calcolo automatico**: da costo + markup o da prezzo vendita - margine
- **Validazione prezzi**: controllo coerenza costo/prezzo/margine

---

### 3.5 Order

**CRUD:**

- Creazione ordine con selezione tipo (centrale, fornitore, trasferimento, cliente)
- Modifica righe ordine pre-invio
- Ricerca ordini per tipo, stato, fornitore, periodo

**Operazioni specifiche:**

- **Workflow stati**: Memorizzato → Inviato → Elaborato
- **Invio ordine fornitore**: cambio stato + notifica
- **Elaborazione ordine**: generazione movimenti magazzino automatici
- **Controllo documenti fornitori**: verifica fatture vs ordini (DDT, fattura)
- **Ordini automatici**: da riordino punto vendita o soglia giacenza
- **Trasferimenti inter-magazzino**: ordini tipo 2 con carico/scarico automatico
- **Conversione ordine cliente**: da B2B portale o ecommerce

---

### 3.6 Sale

**CRUD:**

- Creazione vendita con selezione cassa e operatore
- Modifica vendita pre-chiusura turno
- Ricerca vendite per periodo, punto vendita, cliente, operatore

**Operazioni specifiche:**

- **Transazione POS**: selezione articoli, calcolo totale, applicazione sconti
- **Gestione pagamenti multipli**: contanti, carta, bonifico, cashmatic
- **Emissione scontrino fiscale**: generazione documento con normativa italiana
- **Fatturazione immediata/differita**: per clienti B2B
- **Reso merce**: vendita con SIGN=-1, nota credito
- **Chiusura cassa**: rilevamento contanti teorico vs fisico
- **Consolidamento cassa**: conferma chiusura e trasferimento dati contabili
- **Movimenti extra-cassa**: incassi/prelievi fuori vendita (versamenti banca, spese)
- **Scarico magazzino automatico**: da vendita a giacenze punto vendita

---

## 4. Capability Core per Retail/GDO

### 4.1 Multi-Location Inventory Management

**Beneficio:** Gestione real-time di giacenze distribuite su rete vendita (negozi, magazzini centrali, transito).

**Evidenze tecniche:**

- Tabella `COM_STOCK` con giacenza per `ID_STORE + ID_ARTICLE`
- Calcolo disponibilità: `STOCK - RESERVED - ORDERED`
- Movimenti automatici da vendite POS e ordini fornitori
- Trasferimenti inter-magazzino tracciati con causali specifiche

**Caso d'uso:** Catena retail con 50 punti vendita vede in tempo reale disponibilità articolo per ogni negozio, può decidere trasferimenti o riordini mirati.

---

### 4.2 Dynamic Pricing Engine

**Beneficio:** Prezzi flessibili per canale, zona, cliente, periodo promozionale senza intervento manuale.

**Evidenze tecniche:**

- 13+ tipologie listino (vendita, acquisto, ecommerce, zona, promo, ecc.)
- Motore calcolo ricarichi/margini automatici (`List_price.php` 3000+ righe)
- Campagne promozionali con validità temporale
- Listini personalizzati per cliente/gruppo

**Caso d'uso:** GDO lancia campagna Black Friday con sconti automatici su 5000 articoli, listini ecommerce aggiornati in batch, prezzi punto vendita sincronizzati via ESL.

---

### 4.3 Multi-Tenant Isolation

**Beneficio:** Piattaforma SaaS con isolamento dati garantito per catene/gruppi d'acquisto indipendenti.

**Evidenze tecniche:**

- Filtro `ID_COMPANY` su tutte le query (da conversazione precedente)
- Gestione sessione con permessi granulari per azienda/programma/gruppo
- Autenticazione multi-tenant tramite `libraries/Auth.php`

**Caso d'uso:** 10 insegne retail su stessa piattaforma, ognuna vede solo propri dati, con sicurezza a livello applicativo e database.

---

### 4.4 Omnichannel Order Management

**Beneficio:** Gestione unificata ordini da canali multipli (negozio, ecommerce, marketplace, B2B portal).

**Evidenze tecniche:**

- Entità `ORD_ORDERS` con `ID_TYPE` multi-canale (cliente, fornitore, trasferimento, rete vendita)
- Workflow stati comuni indipendentemente da origine ordine
- Integrazione con `elerama-ecommerce`, `elerama-b2b`, marketplace (eBay, Amazon)

**Caso d'uso:** Cliente ordina online, ritira in negozio; ordine visibile a PV destinazione, scarico magazzino automatico, visibilità stock centralizzata.

---

### 4.5 Fiscal Compliance & Cash Control

**Beneficio:** Conformità normativa italiana con controlli cassa integrati, riduzione errori e frodi.

**Evidenze tecniche:**

- Gestione scontrini fiscali via `SAL_SALES` con tipo documento
- Workflow chiusura cassa: rilevamento → consolidamento
- Tracciabilità movimenti contanti extra-vendita (`SAL_CASH_MOVEMENTS`)
- Password cassa per operatori (`SAL_CASHIERS`)

**Caso d'uso:** Punto vendita GDO con 5 casse, ogni operatore con credenziali proprie, chiusura turno con quadratura automatica contanti/carte, report discrepanze per auditing.

---

### 4.6 B2B Customer Credit Management

**Beneficio:** Controllo fidi clienti grossisti, prevenzione insolvenze, gestione condizioni pagamento differenziate.

**Evidenze tecniche:**

- Flag `WHOLESALE_CUSTOMER` in `COM_CUSTOMERS`
- Tabella `SAL_CUSTOMERS` con parametri credito e condizioni pagamento
- Listini personalizzati per cliente/gruppo
- Portale B2B con utenti collegati (`COM_CUSTOMER_USERS`)

**Caso d'uso:** Fornitore GDO con 200 clienti grossisti B2B, ognuno con fido, listino e condizioni proprie; sistema blocca ordini oltre fido, alert automatici per scadenze.

---

## 5. Sintesi

Il modello di dominio Daisy Solution si articola su **6 entità core** (Article, Customer, Store, List Price, Order, Sale) che abilitano **capability enterprise-grade** per retail e GDO:

1. **Inventory multi-location** con tracciabilità completa movimenti
2. **Pricing dinamico** con 13+ listini e campagne promozionali automatiche
3. **Multi-tenant SaaS** con isolamento dati garantito
4. **Omnichannel orders** unificando negozio fisico, ecommerce, marketplace, B2B
5. **Fiscal compliance** con controlli cassa e chiusure contabili
6. **B2B credit management** per gestione grossisti con fidi e listini personalizzati

Ogni capability è **verificabile nel codice** tramite tabelle database, modelli CodeIgniter, librerie di business logic e controller REST API.

---

**Fine documento STEP 2C.**
