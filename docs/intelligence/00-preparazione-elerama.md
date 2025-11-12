# STEP 0 — Preparazione: Analisi Iniziale Codebase Elerama

**Data**: 10 novembre 2025
**Repository**: `projects/elerama`
**Obiettivo**: Identificare struttura, moduli funzionali e mappa ad albero della codebase

---

## 1. Contesto di Progetto

### 1.1 Identificazione del Progetto

**Nome**: Daisy Solution (repository: elerama)
**Tipo**: Applicazione web gestionale SaaS per retail e gruppi d'acquisto
**Stack tecnologico principale**:

- **Backend**: PHP 8.3 (framework basato su CodeIgniter pattern MVC)
- **Database**: MySQL (strutture multi-database)
- **Architettura**: Modulare con separazione logica per aree funzionali

### 1.2 Package Manager e Dipendenze Principali

Dal file `composer.json`:

```json
{
    "name": "daisy/elerama",
    "version": "1.0.0",
    "require": {
        "php": "^8.3",
        "adodb/adodb-php": "^5.22",              // Database abstraction
        "api2pdf/api2pdf.php": "^2.0",           // PDF generation
        "dvicklund/ebay-oauth-php-client": "^1.2", // eBay integration
        "google/apiclient": "^2.14",             // Gmail API
        "guzzlehttp/guzzle": "^7.0",             // HTTP client
        "jlevers/selling-partner-api": "^5.1",   // Amazon SP-API
        "openspout/openspout": "^4.28",          // Excel/CSV handling
        "phpseclib/phpseclib": "~3.0",           // Security/cryptography
        "vlucas/phpdotenv": "^5.6"               // Environment management
    }
}
```

**Evidenze di integrazioni esterne**:

- eBay Marketplace
- Amazon Selling Partner API
- Gmail API (per comunicazioni)
- API2PDF (generazione PDF cloud)

---

## 2. Struttura Generale del Progetto

### 2.1 Layout Workspace Completo

```text
daisy-workspace/
├── docker-compose.yml                    # Orchestrazione container
├── database/                             # SQL scripts e migrazioni
│   ├── init/settings.sql                # Setup iniziale DB
│   └── history.sql                      # Storico modifiche schema
├── docker/                              # Configurazioni Docker/PHP/Apache
├── handler/                             # Script utility e automazioni
└── projects/                            # Monorepo progetti
    ├── elerama/                         ⭐ PROGETTO PRINCIPALE ANALIZZATO
    ├── elerama-api/                     # API REST esterne
    ├── elerama-b2b/                     # Portale B2B clienti
    ├── elerama-ecommerce/               # E-commerce B2C/B2B
    ├── elerama-frontend/                # Frontend moderno (React/Next.js)
    ├── elerama-gift-list/               # Gestione liste regalo
    ├── elerama-license/                 # Sistema licenze
    ├── elerama-worker/                  # Background jobs/cron
    ├── elerama-site/                    # Sito istituzionale
    └── elerama-ui/                      # Design system React
```

### 2.2 Struttura Interna `projects/elerama/`

```text
elerama/
├── .env, .env.example, .env.local       # Configurazioni ambiente
├── README.md
├── rector.php                           # Refactoring tool config
├── dist/                                # Assets compilati (JS/CSS)
└── src/                                 ⭐ CODICE SORGENTE PRINCIPALE
    ├── composer.json                    # Dipendenze PHP
    ├── index.html                       # Entry point applicazione
    ├── config/                          # Configurazioni framework
    ├── controllers/                     # Entry points HTTP
    ├── core/                            # Logica business core
    │   ├── ErpEnv.php                  # Gestione variabili ambiente
    │   ├── MemcacheInstance.php        # Cache layer
    │   ├── cache/, db/, envs/          # Utility core
    │   ├── features/, security/        # Feature flags, sicurezza
    │   └── utils/                       # Utilità generiche
    ├── models/                          # Data access layer (40+ modelli)
    │   ├── article_model.php           # Articoli
    │   ├── customer_model.php          # Clienti
    │   ├── invoice_model.php           # Fatturazione
    │   ├── movements_model.php         # Movimenti magazzino
    │   ├── orders_model.php            # Ordini
    │   ├── price_model.php             # Listini prezzi
    │   └── ...                          # (vedi sezione 3.1)
    ├── modules/                         ⭐ MODULI FUNZIONALI BUSINESS (41 moduli)
    │   ├── accounting/                 # Contabilità
    │   ├── admin/                      # Amministrazione sistema
    │   ├── authentication/             # Login/autenticazione
    │   ├── authorization/              # Controllo accessi
    │   ├── b2c/                        # Funzionalità B2C
    │   ├── contracts/                  # Contratti/garanzie
    │   ├── crm/                        # Customer relationship
    │   ├── export/                     # Esportazioni dati
    │   ├── gift_lists/                 # Liste regalo/nozze
    │   ├── import/                     # Importazioni tracciati
    │   ├── label/                      # Etichette/Fastlabel/ESL
    │   ├── match/                      # Riconciliazione dati
    │   ├── orders/                     # Ordini fornitori
    │   ├── planning/                   # Pianificazione acquisti
    │   ├── promotion/                  # Promozioni/sconti
    │   ├── sales/                      # Vendite/documenti fiscali
    │   ├── sales_1/                    # Vendite avanzate
    │   ├── search/                     # Ricerca avanzata
    │   ├── soap/                       # Web services SOAP
    │   ├── rest/                       # API REST interne
    │   ├── store/                      # Magazzino
    │   ├── ticket_printer/             # Stampa ticket
    │   ├── warranties/                 # Garanzie
    │   ├── wms/                        # Warehouse management
    │   └── ...                          # (41 moduli totali)
    ├── libraries/                       # Librerie business logic
    │   ├── Amazon_spapi_lib.php        # Amazon Selling Partner API
    │   ├── Ebay_lib_v823.php          # eBay Trading API
    │   ├── Ebay_api_lib.php           # eBay Feed API
    │   ├── Elecommerce.php             # Integrazione e-commerce
    │   ├── Fastlabel_lib.php          # Stampa cartelli prezzo
    │   ├── Esl_lib.php                # Etichette elettroniche
    │   └── ...
    ├── views/                           # Template presentazione
    ├── helpers/                         # Helper functions
    ├── hooks/                           # Event hooks
    ├── plugins/                         # Plugin estensioni
    ├── utilities/                       # Utility di sistema
    └── vendor/                          # Dipendenze Composer
```

---

## 3. Moduli Funzionali Distinti (Aree Business)

### 3.1 Entità Core (Models)

**Gestione Anagrafiche**:

- `article_model.php` → Articoli/prodotti
- `customer_model.php` → Clienti
- `supplier_model.php` → Fornitori
- `brand_model.php` → Marchi
- `category_model.php` → Categorie merceologiche
- `contact_model.php` → Contatti/indirizzi

**Gestione Prezzi e Listini**:

- `price_model.php` → Prezzi articoli
- `lists_price_model.php` → Listini multipli
- `price_tracking_model.php` → Storico prezzi
- `promotion_model.php` → Promozioni/sconti

**Gestione Magazzino**:

- `movements_model.php` → Movimenti magazzino
- `Store_movements_model.php` → Movimenti punto vendita
- `quantity_model.php` → Giacenze
- `serials_model.php` → Numeri seriali
- `barcode_model.php` → Codici a barre

**Gestione Vendite**:

- `sales_model.php` → Documenti vendita
- `invoice_model.php` → Fatture
- `orders_model.php` → Ordini
- `orders_b2b_model.php` → Ordini B2B
- `voucher_model.php` → Buoni/voucher
- `gift_card_model.php` → Gift card

**Gestione Amministrativa**:

- `fiscal_model.php` → Registri fiscali
- `einvoices_model.php` → Fatture elettroniche
- `riba_model.php` → Ri.Ba. (incassi)
- `deadlines_model.php` → Scadenze pagamenti

**Integrazioni Marketplace**:

- `ebay_model.php` → Sincronizzazione eBay
- `b2c_extract_model.php` → Export B2C

**Gestione Organizzativa**:

- `sale_point_model.php` → Punti vendita
- `group_model.php` → Gruppi utenti/permessi
- `license_model.php` → Licenze software

### 3.2 Moduli Business (Cartelle `modules/`)

#### Moduli Amministrativi

- `admin/` → Configurazione sistema, listini, parametri
- `authentication/`, `authorization/` → Sicurezza e accessi
- `panel/` → Dashboard amministrativa

#### Moduli Commerciali

- `sales/`, `sales_1/` → Vendite (punto cassa e back-office)
- `orders/` → Ordini fornitori e acquisti
- `crm/` → CRM clienti e anagrafiche
- `contracts/` → Contratti e assistenze
- `promotion/` → Gestione promozioni

#### Moduli Logistici

- `store/` → Magazzino (carichi, scarichi, inventari)
- `wms/` → Warehouse Management System avanzato
- `planning/` → Pianificazione acquisti

#### Moduli Integrazione

- `import/` → Importazione tracciati esterni (articoli, movimenti, sell-out)
- `export/` → Esportazione dati verso sistemi terzi
- `soap/`, `rest/` → Web services API

#### Moduli Specializzati

- `gift_lists/` → Liste regalo/nozze
- `label/` → Etichette (Fastlabel, ESL elettroniche)
- `ticket_printer/` → Stampanti ticket
- `b2c/` → Funzionalità e-commerce B2C
- `dealer/` → Gestione rivenditori
- `warranties/` → Garanzie prodotti
- `raee/` → Gestione RAEE (rifiuti elettronici)
- `specifications/` → Schede tecniche prodotti
- `match/` → Riconciliazione dati esterni

#### Moduli Supporto

- `search/` → Ricerca avanzata multi-criterio
- `navigator/` → Navigazione cataloghi
- `messages/` → Messaggistica interna
- `help/` → Sistema help contestuale
- `common_cart/` → Carrelli condivisi

---

## 4. Integrazioni Esterne Identificate

### 4.1 Marketplace & E-commerce

- **eBay** (Trading API + Feed API) → `libraries/Ebay_lib_v823.php`, `libraries/Ebay_api_lib.php`
- **Amazon Selling Partner API** → `libraries/Amazon_spapi_lib.php`
- **Elecommerce** (piattaforma proprietaria B2B/B2C) → `libraries/Elecommerce.php`

### 4.2 Banche Dati e Cataloghi

- **Eldomcat** → Banca dati prodotti settore elettrodomestici/elettronica
  - Integrazione per caratteristiche tecniche, foto, specifiche
  - Rilevata nei riferimenti: `modules/*/controllers/*eldomcat*`, viste e-commerce

### 4.3 Etichettatura e Pricing

- **Fastlabel** → Sistema stampa cartelli prezzo personalizzati
  - `libraries/Fastlabel_lib.php`
  - `modules/label/controllers/fastlabel_test.php`
- **ESL (Electronic Shelf Labels)** → Etichette elettroniche punto vendita
  - `modules/label/libraries/Esl_lib.php`
  - API Vusion (SES-imagotag), Delfi

### 4.4 Servizi Cloud

- **API2PDF** → Generazione PDF via cloud (`composer.json`, controller `api2pdf.php`)
- **Google Gmail API** → Gestione email programmatiche

### 4.5 Tracciati Import/Export

- Tracciati clienti per articoli, movimenti, listini (cartella `modules/import/libraries/read/`)
- Tracciati export verso grossisti/clienti (cartella `modules/export/libraries/write/`)

---

## 5. Database Multi-Schema

Dal file `database/init/settings.sql`:

```sql
elelocal_erp            -- Database principale gestionale
elelocal_erp_restore    -- Database backup/ripristino
elelocal_erp_noreplica  -- Dati temporanei/statistiche
elelocal_worker         -- Background jobs e cache (Icecat, sessioni)
elelocal_license        -- Sistema licenze
elelocal_sessions       -- Sessioni utenti fallback
elelocal_ws             -- Web socket real-time
```

**Tabelle chiave identificate**:

- Prefisso `COM_*`: entità comuni (articoli, clienti, listini, magazzini)
- Prefisso `SAL_*`: modulo vendite
- Prefisso `STO_*`: modulo magazzino
- Prefisso `ORD_*`: modulo ordini
- Prefisso `LIS_*`: modulo liste regalo
- Prefisso `ICECAT_*`: cache Icecat (worker DB)

---

## 6. Mappa ad Albero Sintetica (Percorsi Principali)

```text
elerama/src/
│
├── [ENTRY POINTS]
│   ├── controllers/              # HTTP entry points (login, async, API gateway)
│   └── index.html                # Bootstrap applicazione
│
├── [CORE FRAMEWORK]
│   ├── core/                     # Logiche centrali (env, cache, sicurezza)
│   ├── config/                   # Configurazioni framework
│   └── hooks/                    # Event system
│
├── [DATA LAYER]
│   └── models/                   # 40+ modelli dati (articoli, clienti, ordini...)
│
├── [BUSINESS LOGIC]
│   ├── modules/                  # 41 moduli funzionali organizzati per dominio
│   │   ├── admin/               # Amministrazione
│   │   ├── sales/               # Vendite
│   │   ├── store/               # Magazzino
│   │   ├── orders/              # Ordini
│   │   ├── import/export/       # Integrazioni dati
│   │   ├── label/               # Etichettatura
│   │   ├── gift_lists/          # Liste regalo
│   │   └── ...                  # (altri 34 moduli)
│   │
│   └── libraries/                # Logiche riutilizzabili e integrazioni esterne
│       ├── Amazon_spapi_lib.php
│       ├── Ebay_lib_v823.php
│       ├── Elecommerce.php
│       ├── Fastlabel_lib.php
│       └── Esl_lib.php
│
├── [PRESENTATION]
│   ├── views/                    # Template HTML/PHP
│   └── language/                 # Internazionalizzazione
│
├── [UTILITIES]
│   ├── helpers/                  # Helper functions
│   ├── utilities/                # Utility di sistema
│   └── plugins/                  # Estensioni
│
└── vendor/                       # Dipendenze Composer
```

---

## 7. Pattern Architetturali Identificati

### 7.1 MVC (Model-View-Controller)

- **Model**: `models/*.php` → Accesso dati e persistenza
- **View**: `views/*.php` e `modules/*/views/*.php` → Presentazione
- **Controller**: `controllers/*.php` e `modules/*/controllers/*.php` → Logica richieste HTTP

### 7.2 Modularità per Dominio

- Ogni modulo (`modules/<nome>/`) contiene:
  - `controllers/` → Entry points specifici
  - `models/` → Modelli dominio
  - `views/` → Template UI
  - `libraries/` → Logiche business riutilizzabili
  - `language/` → Traduzioni specifiche

### 7.3 Service Layer

- `libraries/` → Incapsulamento integrazioni esterne e logiche complesse
- Dependency injection gestita manualmente (es. `$this->CI->load->library()`)

### 7.4 Repository Pattern (implicito)

- Modelli centralizzano l'accesso DB per entità specifiche
- Uso ADOdb come astrazione database

---

## 8. Caratteristiche Tecniche Rilevanti

### 8.1 Sicurezza

- `phpseclib` per crittografia
- Gestione permessi/ruoli → `modules/authorization/`
- Autenticazione OAuth per marketplace (eBay, Amazon)

### 8.2 Performance

- Cache layer → `core/MemcacheInstance.php`
- Database slave per letture (pattern master-slave rilevato in codice)
- Job asincroni → progetto separato `elerama-worker`

### 8.3 Multi-tenancy

- Supporto multi-azienda (`ID_COMPANY`) e multi-punto vendita (`ID_SALE_POINT`)
- Ogni cliente può avere più punti vendita gestiti centralmente

### 8.4 Flessibilità Commerciale

- Listini multipli per cliente/categoria
- Promozioni articolate (sconti scaglionati, bundle)
- Gestione contratti e garanzie personalizzabili

---

## 9. Conclusioni Preliminari

### Punti di Forza Architetturali

✅ **Modularità elevata**: 41 moduli separati consentono estensione e manutenzione mirata
✅ **Integrazioni strategiche**: eBay, Amazon, Eldomcat, ESL → ecosistema completo retail
✅ **Multi-database**: separazione dati operativi/temporanei/worker per scalabilità
✅ **Feature flags e configurabilità**: `ErpEnv.php` gestisce abilitazioni dinamiche
✅ **Astrazione marketplace**: pattern unificato per gestire più canali vendita

### Complessità Gestionale

⚠️ **41 moduli + 40+ modelli**: richiede disciplina organizzativa ma offre granularità
⚠️ **Dipendenze esterne critiche**: API eBay/Amazon soggette a rate limit/policy
⚠️ **Stack legacy (CodeIgniter-like)**: PHP 8.3 ma pattern framework datato

### Valore Business

🎯 **SaaS verticale retail**: specializzato per elettrodomestici/elettronica con Eldomcat
🎯 **Omnichannel nativo**: ERP + E-commerce + Marketplace in unico sistema
🎯 **Automazioni avanzate**: Fastlabel, ESL, tracciati import/export per GDO

---

## Prossimi Passi

L'analisi preparatoria è completata. È stata mappata:

- ✅ Struttura gerarchica completa del progetto
- ✅ 41 moduli funzionali identificati e categorizzati
- ✅ Stack tecnologico e dipendenze chiave
- ✅ Integrazioni esterne (6 categorie principali)
- ✅ Pattern architetturali rilevati

**Pronto per STEP 1**: Architettura generale e flussi chiave
