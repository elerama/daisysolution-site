# Integrazioni ed Ecosistema - Daisy Solution ERP

> **Versione:** 1.0.0
> **Data:** 2025-11-10
> **Ambito:** Mappatura integrazioni esterne e flussi dati

---

## 1. Panoramica Ecosistema

Daisy Solution si posiziona come **hub centrale** per la gestione integrata retail/GDO connettendo:

- **Banche dati prodotti** (Eldomcat)
- **Canali vendita** (E-commerce B2B/B2C, Marketplace)
- **Dispositivi IoT** (Etichette elettroniche ESL)
- **Comparatori prezzi** (Data feed automatici)
- **Servizi B2B partner** (Unieuro, Axioma, Agos)
- **Strumenti marketing** (Fastlabel stampa cartelli)

**Architettura integrazione:** API REST, SOAP legacy, FTP/CSV, Web Services IoT.

---

## 2. Integrazioni Principali

### 2.1 Eldomcat - Banca Dati Prodotti Tecnologici

**Descrizione:** Database italiano prodotti settore Eldom (elettrodomestici, elettronica consumo, condizionatori, telefonia, informatica) con caratteristiche tecniche, foto, schede prodotto.

**Localizzazione codice:**

- `projects/elerama-ecommerce/src/libraries/Eldomcat.php`
- `projects/elerama-site/src/views/eldomcat.php`
- `projects/elerama-ecommerce/src/language/italian/eldomcat_lang.php`

**Flusso dati:**

```
Eldomcat DB → ERP (import caratteristiche/foto)
             ↓
    Articoli arricchiti → E-commerce frontend
                         → Fastlabel cartelli
                         → Marketplace (eBay/Amazon)
```

**Protocollo:** API proprietaria + caching Memcache (chiave `eldomcat_count_<date>`, `eldomcat_log_<date>`).

**Benefici per retailer:**

- **Copertura 100%** catalogo prodotti tecnologici
- **Automazione** schede prodotto per e-commerce
- **Riduzione costi** inserimento dati manuale
- **Time-to-market** rapido per nuovi articoli
- **Servizio on-demand** caricamento dati prodotti non presenti

---

### 2.2 Elecommerce - Piattaforma E-commerce B2B/B2C

**Descrizione:** Soluzione SaaS cloud per creazione e gestione negozi online integrati con ERP. Supporta doppio canale B2B (portale grossisti) e B2C (consumatore finale).

**Localizzazione codice:**

- `projects/elerama/src/libraries/Elecommerce.php` (core library 10.000+ righe)
- `projects/elerama-api/src/libraries/Elecommerce.php` (symlink)
- `projects/elerama-api/src/controllers/Categories.php`, `Orders.php`
- `projects/elerama-b2b/services/api/catalogue/products.service.tsx`
- `projects/elerama-b2b/services/api/catalogue/order-summary.service.tsx`

**Flusso dati:**

```
ERP (Articoli, Stock, Listini) → API REST → Frontend B2B/B2C
                                             ↓
                    Ordini E-commerce ← SOAP/REST ← Cliente web
                                             ↓
                            Movimenti magazzino automatici (ERP)
```

**Endpoint API chiave:**

- `GET /categories` - albero merceologico
- `GET /categories/erp` - categorie ERP mappate
- `POST /categories/data` - filtro articoli per categoria
- `GET /articles` - catalogo prodotti con prezzi/disponibilità
- `POST /orders/send` - invio ordine da carrello

**Protocollo:** REST JSON (elerama-api) + SOAP NuSOAP legacy (`get_orders_ecommerce`, `get_offline_orders_ecommerce`).

**Benefici per retailer:**

- **Omnichannel** unificato (negozio fisico + online)
- **Sincronizzazione real-time** stock multi-punto vendita
- **Gestione listini dinamici** per cliente/gruppo/canale
- **Ordini automatici** confluiscono in workflow ERP
- **Integrazione Eldomcat** nativa per settore Eldom
- **Portale B2B** con fidi, listini personalizzati, multi-indirizzo

---

### 2.3 Fastlabel - Stampa Cartelli Prezzi

**Descrizione:** Sistema generazione PDF cartelli prezzi/caratteristiche prodotti con layout grafici personalizzabili, integrazione promo/listini da ERP.

**Localizzazione codice:**

- `projects/elerama/src/modules/label/libraries/Fastlabel_lib.php`
- `projects/elerama/src/modules/label/views/fastlabel/`
- `handler/docs/tools/project-build-ecommerce-themes.md`

**Flusso dati:**

```
ERP (Articolo + Listino vendita + Promo) → Fastlabel_lib
                                              ↓
                            Rendering PDF (prezzi, caratteristiche, loghi)
                                              ↓
                                    Download/Stampa cartello
```

**Funzionalità:**

- Layout multipli (19+ template configurabili)
- Slogan promozionali (58+ varianti: "Sottoprezzo", "Consigliato Expert", "Tasso zero", ecc.)
- Prezzi barrati (vecchio/nuovo)
- Caratteristiche tecniche prodotto
- Logo/brand personalizzazione
- Flag disponibilità negozio/magazzino centrale

**Benefici per retailer:**

- **Autonomia** creazione cartelli senza grafico
- **Coerenza** visual identity punto vendita
- **Promo dinamiche** aggiornamento rapido campagne
- **Integrazione ERP** dati sempre allineati
- **Costi ridotti** vs stampa esterna

---

### 2.4 Marketplace eBay

**Descrizione:** Integrazione doppio stack per sincronizzazione catalogo e ordini con marketplace eBay Italia.

**Localizzazione codice:**

- `projects/elerama/src/libraries/Ebay_lib_v823.php` (Trading API v823 legacy)
- `projects/elerama/src/libraries/Ebay_api_lib.php` (Sell Feed API v1 moderna)
- `projects/elerama/src/modules/b2c/controllers/ebay.php`
- `handler/jobs/cronjob/ebay-import-export-cronjobs.sh`

**Flusso dati:**

```
ERP (Articoli pubblicati) → XML Feed → FTP eBay → Upload Feed API
                                                      ↓
                                        Processing eBay (correlationId tracking)
                                                      ↓
                    ERP ← Download ordini XML ← eBay Order Task API
                                                      ↓
                            Conversione ordine cliente (ORD_ORDERS tipo 11)
```

**Operazioni supportate:**

- **Upload feed**: `LMS_ADD_FIXED_PRICE_ITEM`, `LMS_REVISE_FIXED_PRICE_ITEM`, `LMS_END_FIXED_PRICE_ITEM`
- **Download ordini**: `LMS_ORDER_REPORT` (Feed API + Bulk Data Exchange)
- **Matching categorie**: ERP ↔ eBay Store Categories
- **Sincronizzazione inventario**: stock real-time
- **Gestione prezzi**: listino e-commerce dedicato

**Credenziali:** OAuth2 token refresh (`Ebay_lib::EBAY_ALL_SCOPES`), App ID/Cert ID produzione.

**Cronjob automatici:**

1. Upload files (insert/edit/delete) ogni 10 minuti
2. Wait 10 minutes
3. Download files (insert/edit/delete) per elaborazione errori

**Benefici per retailer:**

- **Espansione canale vendita** senza sviluppo proprietario
- **Gestione centralizzata** stock su marketplace da ERP
- **Ordini automatici** nel workflow gestionale
- **Errori tracciati** con correlationId per debug

---

### 2.5 Marketplace Amazon SP-API

**Descrizione:** Integrazione moderna Amazon Selling Partner API per feed prodotti, inventario, prezzi.

**Localizzazione codice:**

- `projects/elerama/src/libraries/Amazon_spapi_lib.php` (SP-API Feeds v20210630)
- `projects/elerama/src/libraries/Amazon_lib.php` (generazione feed JSON)
- `projects/elerama/src/modules/b2c/controllers/amazon.php`

**Flusso dati:**

```
ERP (Articoli) → JSON Feed generator → FeedsApi::createFeedDocument
                                          ↓
                            Upload S3 (feedDocumentId) → Amazon Processing
                                          ↓
                    Download feed result ← FeedsApi::getFeed (feedId)
                                          ↓
                        Elaborazione errori → Retry automatico
```

**Feed supportati:**

- `JSON_LISTINGS_FEED` - catalogo prodotti (insert/update)
- `JSON_INVENTORY_FEED` - giacenze per SKU
- `JSON_PRICING_FEED` - prezzi vendita
- `DELETE_ALL_FEED` - rimozione prodotti

**Attributi prodotto mappati:**

- `condition_type`: `new_new`
- `item_name`, `brand`, `manufacturer`
- `product_description`
- `fulfillment_availability` (quantity, fulfillment_channel_code: `DEFAULT`)
- `list_price` (amount + currency_code EUR)

**Marketplace:** `A1PA6795UKMFR9` (Germania), `APJ6JRA9NG5V4` (Italia), endpoint EU.

**Benefici per retailer:**

- **Feed JSON moderni** vs XML legacy
- **Error handling robusto** con retry automatico
- **Multi-marketplace** (IT, DE, EU)
- **Sandbox testing** disponibile
- **Sincronizzazione prezzi/stock** separata da catalogo

---

### 2.6 ESL - Electronic Shelf Labels (IoT)

**Descrizione:** Integrazione etichette elettroniche IoT per aggiornamento prezzi/promo real-time nei punti vendita. Supporto dual-vendor (Vusion/SES-imagotag, Delfi Technologies).

**Localizzazione codice:**

- `projects/elerama/src/modules/label/libraries/Esl_lib.php` (3800+ righe core)
- `projects/elerama-api/src/controllers/Esl.php` (API REST pubblica)
- `projects/elerama/src/modules/label/controllers/esl.php`
- `projects/elerama/src/controllers/async.php` (check labels status cronjob)

**Provider integrati:**

#### Vusion (SES-imagotag) - API REST v1

- **Endpoint**: `https://api-eu.vusion.io/vlink-pro/v1`
- **Auth**: `Ocp-Apim-Subscription-Key` header
- **Clienti**: Unieuro, Gaer, Domex, Trony, Sinergy Di Giorgio
- **Operazioni**:
  - `POST /stores/{domain}/labels/matchings` - associa articolo ↔ etichetta
  - `DELETE /stores/{domain}/labels/matchings` - elimina associazione
  - `GET /stores/{domain}/labels/{id}/pages` - anteprima rendering (base64 PNG)
  - `GET /stores/{domain}/labels/{id}` - stato etichetta (TRANSMITTED/WAITING/ERROR)
  - `POST /stores/{domain}/items` - creazione/aggiornamento item (prezzo, descrizione, barcode)

#### Delfi Technologies - API REST

- **Endpoint**: `https://cloudapi.breecesystem.com/api`
- **Auth**: `Authorization-Token` header
- **Operazioni**:
  - `POST /installations/{id}/displays/assign` - matching articolo ↔ display
  - `GET /installations/{id}/displays/{id}/CurrentImage/1` - anteprima etichetta

**Flusso dati:**

```
ERP (Articolo + Listino + Promo) → Esl_lib::insert()
                                      ↓
                    Generazione CSV promo (FTP) o JSON (API)
                                      ↓
            API POST items (Vusion) / displays (Delfi)
                                      ↓
        Matching articolo ↔ seriale etichetta (labelId)
                                      ↓
    Aggiornamento ESL (E-ink display refresh)
                                      ↓
        Async check status (TRANSMITTED/WAITING/ERROR)
```

**Dati inviati etichetta (campi CSV Delfi):**

- Codice articolo, barcode, descrizione, marca, modello
- Prezzo vendita, prezzo barrato, flag promo
- Disponibilità negozio/magazzino centrale/totale
- Caratteristiche prodotto (Car1...Car11)
- Flag finanziamento (nrate, valrate, acconto, TAN, TAEG)
- Orientamento etichetta, tipo griglia (taglie/colori)

**Promo gestite (T_LIST_PRICE mapping):**

- 0: nessuna promo
- 1: promo volantino (listino tipo 5)
- 2: campagna (listino tipo 9)
- 3: sellout (listino tipo 13)
- 4: promo percentuale
- 5: variazione manuale (listino tipo 3)

**Benefici per retailer:**

- **Aggiornamento prezzi real-time** vs cartellini carta
- **Riduzione errori** esposizione prezzi
- **Campagne promo** attivazione immediata
- **Risparmio costi** manodopera cambio cartelli
- **Integrazione nativa** con listini ERP
- **Doppio vendor** (Vusion, Delfi) per flessibilità contrattuale
- **Anteprima rendering** prima invio etichetta

---

### 2.7 Comparatori Prezzi & Data Feed

**Descrizione:** Export automatizzati feed personalizzati per comparatori di prezzo terzi (Trovaprezzi, Google Shopping, ecc.).

**Localizzazione codice:**

- `projects/elerama/src/modules/export/libraries/read/` (pattern file export)
- `projects/elerama/src/modules/export/libraries/write/Giacenze_domex_edit_wait.php`
- `projects/elerama/src/modules/b2c/controllers/export_filters.php`

**Flussi export:**

- **Giacenze disponibilità**: CSV con stock per articolo/punto vendita
- **Ordini e-commerce**: XML ordini online da sincronizzare
- **Listini prezzi**: feed prezzi pubblici per comparatori
- **Catalogo filtrato**: export subset articoli per canale

**Formato dati:**

- CSV delimitato (personalizzabile)
- XML strutturato
- JSON per API moderne

**Benefici per retailer:**

- **Visibilità multi-canale** comparatori prezzi
- **Automazione** aggiornamento feed notturno
- **Personalizzazione** formato per ogni comparatore
- **Filtri avanzati**: per brand, categoria, disponibilità, ricarico

---

### 2.8 Integrazioni B2B Partner Specifiche

#### Unieuro Movimenti Magazzino

**Descrizione:** Export movimenti magazzino per rete affiliati Unieuro con filtri per tipo movimento e periodo.

**Localizzazione:**

- `projects/elerama-api/src/controllers/b2b/Unieuro_movements.php`
- `projects/elerama-b2b/services/api/administration/axioma.service.ts`

**Endpoint:**

- `GET /b2b/unieuro-movements` - lista movimenti filtrati
- `GET /b2b/unieuro-movements/export` - export Excel

**Filtri:**

- `customerAddresseeId` (destinatario)
- `startDate`, `endDate` (periodo)
- `movementTypeCategory` (tipo movimento)
- `movementTypeId` (causale specifica)

#### Axioma Transit Operations

**Descrizione:** Gestione operazioni transito merce con upload file movimenti.

**Localizzazione:**

- `projects/elerama-b2b/services/api/administration/axioma.service.ts`

**Operazioni:**

- `options()` - filtri disponibili
- `list()` - elenco operazioni transito
- `getAxiomaUploadUrl()` - URL pre-signed S3 per upload file

#### Agos Finanziamenti (SOAP)

**Descrizione:** Web Service SOAP per integrazione partner finanziario Agos (finanziamenti rateali punto vendita).

**Localizzazione:**

- `projects/elerama/src/modules/soap/controllers/agos.php`

**Autenticazione:** HTTP Basic Auth (`agosws` / password configurata).

**WSDL:** `agos.wsdl` (produzione) / `agos_dev.wsdl` (sviluppo).

#### Sendcloud Spedizioni

**Descrizione:** Integrazione corriere Sendcloud per gestione spedizioni e-commerce.

**Localizzazione:**

- `projects/elerama/src/modules/rest/controllers/sendcloud_test.php`
- `projects/elerama/src/libraries/Sendcloud_lib.php`

**Operazioni:**

- `get_integrations()` - integrazioni attive
- Creazione spedizione da ordine

#### WMS - Warehouse Management System

**Descrizione:** Middleware per integrazione con sistemi WMS esterni (gestione magazzino avanzata).

**Localizzazione:**

- `projects/elerama/src/modules/wms/` (controller + library)

**Operazioni:**

- `auth_middleware()` - autenticazione WMS
- `sync_articles()` - sincronizzazione articoli
- Export/import file ZIP

---

### 2.9 Secondhand - Usato Garantito

**Descrizione:** Gestione magazzino dedicato per articoli usato garantito con sincronizzazione prezzi/disponibilità.

**Localizzazione:**

- `projects/elerama/src/modules/rest/controllers/secondhand.php`
- `projects/elerama/src/libraries/Secondhand_lib.php`

**Operazioni:**

- `sync_articles()` - sincronizzazione catalogo usato
- `import_movements()` - import movimenti magazzino usato
- `get_articles()` - estrazione articoli per store
- `count_pending_movements()` - movimenti in coda

**Flusso:**

```
Magazzino Usato (esterno) → API sync → ERP (ID_STORE dedicato)
                                         ↓
                        Disponibilità real-time → E-commerce
                                         ↓
                            Ordini usato → Movimenti scarico
```

**Benefici:**

- **Canale vendita aggiuntivo** usato certificato
- **Gestione separata** da nuovo
- **Tracciabilità** movimenti dedicati
- **Integrazione e-commerce** con flag usato

---

## 3. Protocolli e Tecnologie Integrazione

### 3.1 API REST

- **Framework**: CodeIgniter 2.x `REST_Controller`
- **Autenticazione**: Bearer Token (`Api_auth` library)
- **Formato**: JSON request/response
- **Progetti**: `elerama-api`, endpoint `/b2b/*`, `/esl/*`, `/orders/*`, `/categories/*`

### 3.2 SOAP Legacy

- **Framework**: NuSOAP
- **WSDL**: generati dinamicamente
- **Autenticazione**: HTTP Basic Auth o username/password in payload
- **Operazioni**: `get_orders_ecommerce`, `get_offline_orders_ecommerce`

### 3.3 FTP/CSV

- **Path**: `$_ENV['FTP_PATH']` (configurabile per ambiente)
- **Utilizzo**: eBay feed XML, Amazon feed JSON, ESL CSV (Delfi legacy)
- **Pattern file**: `{id_company}_{id_sale_point}_{tipo}.{ext}`

### 3.4 IoT Web Services

- **Vusion/SES-imagotag**: REST API + OAuth2 subscription key
- **Delfi**: REST API + Authorization Token
- **Payload**: JSON (Vusion) / JSON assign + CSV data (Delfi)

### 3.5 Cronjob Schedulati

**Gestione:**

- `handler/jobs/cronjob/ebay-import-export-cronjobs.sh` - eBay sync ogni 10 min + 10 min wait
- `projects/elerama/src/controllers/async.php` - ESL check labels status con delay configurabile

---

## 4. Benefici Complessivi Ecosistema

### 4.1 Per Retail/GDO

- **Omnichannel unificato**: gestione stock/ordini su tutti i canali da singolo ERP
- **Time-to-market rapido**: nuovi articoli online in minuti con Eldomcat
- **Automazione promo**: etichette ESL + e-commerce + marketplace sincronizzati
- **Riduzione errori**: prezzi esposti sempre allineati a listini ERP
- **Espansione vendite**: marketplace eBay/Amazon senza sviluppo proprietario
- **Visibilità multi-canale**: comparatori prezzi con feed automatici
- **Risparmio costi**: eliminazione cartelli carta, inserimento dati manuale

### 4.2 Per Partner B2B

- **Integrazioni custom**: Unieuro, Axioma, Agos con protocolli dedicati
- **Sicurezza**: autenticazione multi-livello (Bearer Token, Basic Auth, API Key)
- **Tracciabilità**: ogni operazione loggata con correlationId/jobId
- **Scalabilità**: architettura REST stateless

### 4.3 Per IT Manager Cliente

- **Ecosistema completo**: unico vendor per ERP + integrazioni
- **Manutenzione ridotta**: aggiornamenti integrazioni gestiti da Elettrorama
- **Flessibilità**: API REST moderne + legacy SOAP per retrocompatibilità
- **Monitoraggio**: log centralizzati, async task tracking
- **Deploy semplificato**: Docker Compose stack completo

---

## 5. Roadmap Integrazioni Future

- **Marketplace aggiuntivi**: Zalando, Kaufland, MediaWorld online
- **ESL vendor terzi**: compatibilità Pricer, Displaydata
- **Pagamenti digitali**: Stripe, PayPal, Satispay API
- **CRM integrati**: HubSpot, Salesforce connector
- **BI/Analytics**: Power BI, Tableau data connector
- **Logistica**: GLS, BRT, SDA tracking API

---

**Fine documento STEP 3B.**
