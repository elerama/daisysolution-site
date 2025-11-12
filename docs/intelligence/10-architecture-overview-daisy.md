# STEP 1 — Architettura Generale: Daisy Solution (Elerama)

**Documento di analisi architetturale basato sulla codebase `projects/elerama`**

**Data analisi:** 10 Novembre 2025

**Versione:** 1.0

---

## 1. Pattern Architetturale Dominante

### 1.1 Modular Monolith con Estensioni MVC

Daisy Solution adotta un **pattern architetturale modulare monolitico** basato su **CodeIgniter 2.x** (customizzato), strutturato secondo il paradigma **Model-View-Controller (MVC)** con estensioni modulari proprietarie.

#### Caratteristiche distintive

- **Router modulare personalizzato** (`MY_Router.php`)
  - Estende `CI_Router` nativo per supportare routing dinamico verso moduli indipendenti
  - Definisce `MODBASE` (`application/modules/`) come percorso base dei moduli
  - Implementa `Router::locate()` per risolvere controller dentro strutture modulari
  - **File**: `projects/elerama/src/libraries/MY_Router.php`

```php
define('MODBASE', APPPATH.'modules/');
define('MODOFFSET', '../modules/');

class MY_Router extends CI_Router {
    public function _validate_request($segments) {
        [$module, $controller] = Router::locate($segments);
        Router::$path = ($controller) ? $module : NULL;
        // ...
    }
}
```

- **41 moduli funzionali autonomi** (cfr. STEP 0) organizzati con pattern:
  - `modules/{nome_modulo}/controllers/` — logica applicativa
  - `modules/{nome_modulo}/models/` — accesso dati
  - `modules/{nome_modulo}/views/` — presentazione
  - `modules/{nome_modulo}/libraries/` — logiche di dominio riutilizzabili
  - `modules/{nome_modulo}/language/` — localizzazione

#### Vantaggi di questo pattern

- **Separazione delle responsabilità** per dominio (vendite, magazzino, ordini, etichette)
- **Deploy unitario** con complessità ridotta rispetto a microservizi
- **Condivisione di librerie comuni** (Auth, Common, Tmp, init_adodb) tra moduli
- **Estensibilità** tramite aggiunta di nuovi moduli senza impattare il core

#### Svantaggi

- **Accoppiamento database**: tutti i moduli condividono lo stesso layer di persistenza (ADOdb)
- **Difficoltà di scalabilità orizzontale**: necessita scaling verticale o refactoring verso service-oriented
- **Deployment atomico**: un errore in un modulo impatta l'intero sistema

---

## 2. Stack Tecnologico

### 2.1 Backend

| Componente          | Tecnologia/Versione               | Evidenza Codebase                                      |
|---------------------|-----------------------------------|--------------------------------------------------------|
| **Linguaggio**      | PHP 8.3                           | `docker/php83.Dockerfile`, `composer.json` constraint  |
| **Framework MVC**   | CodeIgniter 2.x (fork custom)     | `projects/ci/ci_2.2.6/`, `libraries/MY_Router.php`    |
| **Database Layer**  | ADOdb 5.22                        | `vendor/adodb/adodb-php`, `libraries/init_adodb.php`  |
| **Database RDBMS**  | MySQL 8.0 (multi-schema)          | 7 schemi: `elelocal_erp`, `elelocal_worker`, `elelocal_license`, `elelocal_sessions`, `elelocal_ws`, `elelocal_erp_restore`, `elelocal_erp_noreplica` |
| **Session Storage** | Memcache/Redis + MySQL            | `COM_SESSIONS` table, `CI_Session` library            |
| **Container**       | Docker Compose                    | `docker-compose.yml` — servizi: `apache-php83`, `mysql-host`, `elerama-frontend`, `elerama-b2b` |
| **Web Server**      | Apache 2.4 (mod_rewrite)          | Config: `docker/build/*.local.daisy.conf`              |

### 2.2 Frontend Moderno (Separati dal Monolite)

| Progetto               | Stack                            | Porte/Servizi                       |
|------------------------|----------------------------------|-------------------------------------|
| `elerama-frontend`     | React + Vite                     | Development server (Vite)           |
| `elerama-b2b`          | Next.js 14+ (TypeScript)         | Container: `3180:3000` (Next.js)    |
| `elerama-ecommerce`    | PHP + jQuery (legacy)            | Apache virtual host                 |
| `elerama-site`         | CodeIgniter 3.x (landing pages)  | Apache virtual host                 |

**Separazione logica**: le applicazioni frontend moderne (`elerama-frontend`, `elerama-b2b`) comunicano con il backend via API REST (`elerama-api` project).

### 2.3 Strumenti di Integrazione & Dipendenze Chiave

| Libreria/SDK                        | Scopo                                      | Evidenza                                      |
|-------------------------------------|--------------------------------------------|-----------------------------------------------|
| `adodb/adodb-php` (5.22)            | Astrazione database cross-RDBMS            | `src/core/db/DbInstance.php`                  |
| `jlevers/selling-partner-api`       | Amazon Selling Partner API                 | `libraries/Amazon_spapi_lib.php`              |
| `dvicklund/ebay-oauth-php-client`   | eBay OAuth 2.0                             | `libraries/Ebay_lib.php`, `Ebay_api_lib.php`  |
| `google/apiclient` (2.x)            | Gmail API (per invio mail transazionali)   | `composer.json`, `google_gmail_api_token.json`|
| `openspout/openspout` (4.x)         | Import/Export Excel/CSV                    | Import massivi articoli, listini, clienti     |
| `api2pdf/api2pdf.php`               | Generazione PDF cloud (fatture, etichette) | `controllers/api2pdf.php`                     |
| `nusoap/nusoap`                     | Servizi SOAP legacy (B2B wholesale)        | `modules/soap/`                               |

---

## 3. Logiche di Integrazione

### 3.1 Pattern di Comunicazione

Daisy Solution implementa **4 strati di integrazione**:

#### A) **REST API (elerama-api project)**

- **Tecnologia**: CodeIgniter + REST_Controller (libreria Phil Sturgeon-based)
- **Autenticazione**: Bearer Token (JWT-like custom) + Session memcache validation
- **Endpoints principali**:
  - `/app/app_auth/login` — autenticazione frontend React/Next.js
  - `/b2b/b2b_auth/login` — login B2B clienti wholesale
  - `/ws_auth/index` — validazione token sessione per web services
  - Endpoints specifici per entità (articoli, ordini, clienti, listini)

**File chiave**: `projects/elerama-api/src/config/rest.php`, `libraries/REST_Controller.php`

```php
$config['rest_default_format'] = 'json';
$config['rest_supported_formats'] = ['json'];
$config['force_https'] = TRUE;
```

**Autenticazione multi-livello**:

```php
// projects/elerama-api/src/controllers/Ws_auth.php
$session = $this->session->get_decoded_session($params['token']);
$session = $this->_unserialize($session);
// Verifica session_id in memcache e validazione ID_COMPANY/ID_USER
```

#### B) **SOAP Web Services (legacy)**

- **Server NuSOAP** per compatibilità con sistemi ERP/WMS esterni (es. SGM, Maroni)
- **Endpoint**: `/soap/soap/webservice`
- **Funzioni esposte**: `get_offline_data`, `insert_orders`, `set_offline_sales`, `get_user_info`
- **File**: `modules/soap/controllers/soap.php`, `modules/soap/libraries/soap_functions/`

#### C) **Integrazioni Marketplace (HTTP REST + XML)**

##### eBay Integration (dual-mode)

1. **Trading API v823** (SOAP/XML legacy):
   - Libreria: `Ebay_lib_v823.php`
   - Metodi: `update_feed()`, `download_orders()`, `update_categories()`
   - Auth: eBay Auth Token + RuName flow

2. **Sell Feed API (REST)** (moderno):
   - Libreria: `Ebay_api_lib.php`
   - SDK: `ebay/sell-feed-php-sdk`
   - Auth: OAuth 2.0 (client credentials + refresh token)

**Evidenza**:

```php
// libraries/Ebay_lib.php
use EbayOauthToken\EbayOauthToken;

private function _get_ebay_oauth_token() {
    return new EbayOauthToken([
        'env' => $_ENV[ErpEnv::EBAY_OAUTH_ENV],
        'clientId' => $_ENV[ErpEnv::EBAY_OAUTH_CLIENT_ID],
        'clientSecret' => $_ENV[ErpEnv::EBAY_OAUTH_CLIENT_SECRET],
        'redirectUri' => $_ENV[ErpEnv::EBAY_OAUTH_REDIRECT_URI]
    ]);
}
```

##### Amazon Selling Partner API

- Libreria: `Amazon_spapi_lib.php`
- SDK: `jlevers/selling-partner-api` (Composer)
- Auth: LWA (Login with Amazon) refresh token
- Operazioni: `send()` feed JSON, `download()` feed risultati, `test()` marketplace participation

```php
// libraries/Amazon_spapi_lib.php
$this->_config = Configuration::getDefaultConfiguration([
    "lwaClientId" => $_ENV[ErpEnv::AMAZON_SP_LWA_CLIENT_ID],
    "lwaClientSecret" => $_ENV[ErpEnv::AMAZON_SP_LWA_CLIENT_SECRET],
    "lwaRefreshToken" => $refresh_token,
    "awsAccessKeyId" => $_ENV[ErpEnv::AMAZON_SP_AWS_ACCESS_KEY_ID],
    "awsSecretAccessKey" => $_ENV[ErpEnv::AMAZON_SP_AWS_SECRET_ACCESS_KEY],
    "endpoint" => Endpoint::EU
]);
```

#### D) **Integrazioni ESL (Electronic Shelf Labels)**

- **Vusion/SES-imagotag**: REST API + Ocp-Apim-Subscription-Key
- **Delfi Technologies**: REST API custom
- **Libreria**: `modules/label/libraries/Esl_lib.php` (3000+ righe)

**Flusso tipico**:

1. Generazione template pricing via API `/pricing/v1/domains/{domain}/templates`
2. Upload immagini label via CURL multipart
3. Match automatico ESL-articolo tramite barcode
4. Push asincrono via correlation ID

```php
// Esl_lib.php::_send_vusion_pricing()
$this->CI->curl->create($url);
$this->CI->curl->http_header('Content-Type: application/json');
$this->CI->curl->http_header('Ocp-Apim-Subscription-Key: '.$this->_ocp_apim_subscription_key);
$this->CI->curl->post($params);
$response = $this->CI->curl->execute();
```

---

## 4. Gestione Multi-Database

### 4.1 Architettura Database Layer

Daisy implementa un **Connection Pool Pattern personalizzato** con supporto **Master-Replica** e **schema multipli**.

#### Schema logico

```text
DbConnectionPool (singleton registry)
  ├─ PrimaryDb (master: elelocal_erp)
  ├─ ReplicaDb (slave: elelocal_erp_replica)
  ├─ WorkerDb (elelocal_worker)
  ├─ LicenseDb (elelocal_license)
  ├─ SessionsDb (elelocal_sessions)
  └─ WsDb (elelocal_ws)
```

**Implementazione**: `projects/elerama/src/core/db/DbInstance.php`, `DbConnectionPool` class

```php
class DbInstance {
    protected $connection; // ADOConnection instance
    protected $isReplicaOf; // Riferimento a istanza master per fallback

    public function connect() {
        $this->connection = ADONewConnection($this->type);
        $this->connection->connect($this->host, $this->user, $this->password, $this->database);

        if ($this->connection === false && $this->isReplicaOf !== null) {
            // Fallback to master if replica fails
            $replica = DbConnectionPool::connectInstance($this->isReplicaOf, $this->parameters);
            $this->connection = $replica->getConnection();
        }
    }
}

class DbConnectionPool {
    private static $instances = [];

    public static function connectList($CI, array $names, array $additionalParameters) {
        foreach ($names as $name) {
            $instance = self::connectInstance($name, $additionalParameters);
            $CI->{$instance::$name} = $instance->getConnection();
        }
        return $CI;
    }
}
```

#### Uso nel controller

```php
// Autoload in config/autoload.php
$autoload['libraries'] = array('init_adodb', 'session', 'Auth');

// init_adodb.php carica automaticamente PrimaryDb + ReplicaDb
$this->CI->db = PrimaryDb instance (master)
$this->CI->db_slave = ReplicaDb instance (read-only replica)
```

#### Vantaggi

- **Separazione letture/scritture**: query SELECT su replica, INSERT/UPDATE/DELETE su master
- **Resilienza**: fallback automatico su master se replica inaccessibile
- **Isolamento funzionale**: worker background jobs, sessioni, license check in database separati

---

## 5. Sistema di Autenticazione & Autorizzazione

### 5.1 Pattern di Sicurezza

Daisy implementa un **sistema di autenticazione multi-tenant e multi-ruolo** con autorizzazioni granulari a livello:

1. **Utente → Azienda (ID_COMPANY)**
2. **Utente → Modulo (ID_PROGRAM)**
3. **Utente → Punto vendita (ID_STORE, ID_SALE_POINT)**

#### Libreria centrale: `libraries/Auth.php` (3259 righe)

**Flussi di autenticazione supportati**:

- **Session-based** (memcache + MySQL `COM_SESSIONS`)
- **Bearer Token API** (JWT-like custom in `elerama-api`)
- **IP Whitelist** per client B2B wholesale
- **External Access Mode** per API senza sessione HTTP

```php
class Auth {
    public function __construct($params = array()) {
        $this->_external_access = (!empty($params['external_access']));
        $this->_skip_session = (!empty($params['skip_session']));
        $this->_ip_address = $params['ip_address'] ?? $this->CI->input->ip_address();
        $this->_multiple_user_sessions = $params['multiple_user_sessions'] ?? FALSE;
    }

    public function login($username, $password, $autologin = FALSE, $external_access = FALSE) {
        // Verifica max login attempts (throttling)
        if ($this->is_max_login_attempts_exceeded()) return FALSE;

        // Valida credenziali contro COM_USERS
        // Verifica stato attivazione, validità licenza, abilitazione ID_COMPANY
        // Popola sessione con COMPANY array (multi-tenant permissions)
    }

    public function check_program($id_program, $die = TRUE) {
        // Verifica se utente corrente ha permessi su modulo specifico
        $user_companies = $this->CI->session->userdata('COMPANY');
        if (!isset($user_companies[$id_company][$id_program]['ID_GROUP'])) {
            // Redirect o AJAX "no_auth"
        }
    }
}
```

#### Struttura permessi in sessione

```php
$_SESSION['COMPANY'] = [
    121 => [ // ID_COMPANY
        2 => ['ID_GROUP' => 1, 'ID_USER_TYPE' => 1], // ID_PROGRAM = 2 (Vendite)
        6 => ['ID_GROUP' => 4], // ID_PROGRAM = 6 (Magazzino) — limited
    ]
];
```

#### Multi-tenancy enforcement

Ogni query eseguita nei moduli **DEVE** filtrare per `ID_COMPANY` corrente:

```php
$id_company = $this->auth->get_active_company_id();
$query = "SELECT * FROM COM_ARTICLES WHERE ID_COMPANY = ".escape($id_company);
```

---

## 6. Deployment & Infrastruttura

### 6.1 Docker Compose Configuration

**File**: `docker-compose.yml` (213 righe)

#### Profili di esecuzione

- `php83` — Solo Apache+PHP 8.3
- `php83-with-db` — PHP + MySQL
- `php83-with-db-and-next` — Full stack (PHP + MySQL + Next.js B2B)
- `php83-with-db-and-frontend` — PHP + MySQL + React frontend

#### Container principali

```yaml
services:
  apache-php83:
    container_name: php83.daisy-server
    ports: ["80:80", "443:443"]
    volumes:
      - ./projects:/home/elelocal/daisy
      - ./handler:/home/elelocal/daisy-handler

  elerama-b2b:
    container_name: elerama-b2b
    ports: ["3180:3000"]
    volumes:
      - ./projects/elerama-b2b:/app
      - elerama-b2b-node_modules:/app/node_modules

  elerama-frontend:
    build:
      target: development-dependencies-env
    volumes:
      - ./projects/elerama-frontend:/app
```

#### Virtual Hosts Apache

- `erp.local.daisy` → `/home/elelocal/daisy/elerama/src/`
- `api.local.daisy` → `/home/elelocal/daisy/elerama-api/src/`
- `b2c.local.daisy` → `/home/elelocal/daisy/elerama-ecommerce/src/`
- `gift.local.daisy` → `/home/elelocal/daisy/elerama-gift-list/src/`
- `site.local.daisy` → `/home/elelocal/daisy/elerama-site/src/`

### 6.2 Gestione Configurazioni

**Pattern**: Environment Variables + config files per ambiente (local/stage/production)

```text
handler/config/
  ├─ elelocal.env          # Sviluppo locale
  ├─ elestage.env          # Server staging
  ├─ eleprod.env           # Produzione
  ├─ elelocal.erp.env      # Specifiche ERP locale
  ├─ elelocal.worker.env   # Worker background jobs
  └─ elelocal.licenses.env # Sistema licenze
```

**Caricamento runtime**: `docker/config/env/daisy-server.env` mappa variabili in PHP `$_ENV[]`

---

## 7. Punti di Forza Architetturali

### 7.1 Modularità & Manutenibilità

✅ **Separazione domini funzionali**: ogni modulo ha responsabilità ben definita (vendite, magazzino, ordini, label, import/export)

✅ **Riuso codice**: librerie comuni (`Auth`, `Common`, `Tmp`) condivise tra moduli riducono duplicazione

✅ **Estensibilità**: aggiungere un nuovo modulo (es. `modules/reso/`) non richiede modifiche al core

### 7.2 Performance Database

✅ **Master-Replica separation**: letture su replica (query SELECT pesanti report/statistiche), scritture su master

✅ **Connection pooling**: istanze database singleton condivise tra richieste

✅ **Cache ADOdb**: supporto query cache nativo (`$ADODB_CACHE_DIR`)

### 7.3 Integrazioni Enterprise-Ready

✅ **Marketplace multi-canale**: sincronizzazione bidirezionale eBay/Amazon con gestione feed asincroni

✅ **ESL IoT**: integrazione diretta con hardware etichette elettroniche (Vusion, Delfi)

✅ **Ecosystem B2B**: supporto SOAP per legacy ERP wholesale + REST API moderna per frontend

### 7.4 Sicurezza Multi-Tenant

✅ **Isolamento dati**: ogni query forzata su `ID_COMPANY` corrente (tenant isolation)

✅ **Permessi granulari**: matrice utente-azienda-modulo-punto vendita

✅ **Audit trail**: tabella `COM_ACTIONS` traccia modifiche critiche (da verificare dettagli implementazione)

---

## 8. Punti di Debolezza & Debito Tecnico

### 8.1 Framework Legacy

⚠️ **CodeIgniter 2.x obsoleto**: framework non più supportato, necessita migrazione a CI 4.x o Laravel

⚠️ **PHP procedural/mix OOP**: presenza di helper function globali (`escape()`, `echo_xmp()`) riduce testabilità

⚠️ **Tight coupling database**: logica business nei model dipende fortemente da ADOdb, difficile unit testing

### 8.2 Scalabilità Limitata

⚠️ **Monolite condiviso**: impossibile scalare singoli moduli indipendentemente (es. scaling solo magazzino per picchi inventario)

⚠️ **Sessioni centralizzate**: memcache/MySQL sessioni è SPOF (Single Point of Failure) se non clusterizzato

⚠️ **Deploy atomico**: deployment richiede downtime o strategie blue-green complesse

### 8.3 Testing & CI/CD

⚠️ **Copertura test assente**: nessuna evidenza di test automatizzati (PHPUnit, Codeception)

⚠️ **Deploy manuale**: script shell custom (`handler/local/`, `handler/jobs/`) invece di pipeline CI/CD moderne

⚠️ **Validazione dati insufficiente**: form validation affidata a CodeIgniter Form Validation (vulnerabilità SQL injection se mal configurato)

### 8.4 Documentazione Tecnica

⚠️ **Code comments limitati**: molte classi > 1000 righe senza PHPDoc completo

⚠️ **Diagrammi architettura assenti**: necessità reverse engineering per capire flussi inter-modulo

⚠️ **API documentation**: REST API non documentate con standard (OpenAPI/Swagger)

---

## 9. Aderenza al Contesto Enterprise Retail

### 9.1 Requisiti Retail Soddisfatti

✅ **Multi-punto vendita**: gestione centralizzata magazzini, punti cassa, sale point

✅ **Listini dinamici**: supporto listini multiple per cliente/gruppo/promozione

✅ **Omnichannel**: sincronizzazione articoli/stock tra ERP, ecommerce, marketplace

✅ **Etichettatura automatizzata**: integrazione ESL riduce manualità pricing in-store

✅ **Tracciabilità**: serial number, lotti, garanzie gestiti a livello articolo

### 9.2 Gap Funzionali (da approfondire STEP 2)

🔍 **Inventory real-time**: mancanza evidenza sincronizzazione stock real-time tra punto vendita e centrale (verificare cron jobs)

🔍 **Analytics/BI nativi**: report generati via query dirette, assenza dashboard interattive (Tableau, Power BI)

🔍 **Mobile-first POS**: app vendita offline/online ibrida per commessi (verificare `elerama-node`, `elerama-frontend`)

🔍 **Customer 360**: CRM integrato con storico acquisti, preferenze, loyalty program (verificare moduli `customers`, `gift_lists`)

---

## 10. Schema Logico Componenti Principali

```text
┌─────────────────────────────────────────────────────────────────┐
│                   LAYER PRESENTAZIONE                           │
├─────────────────────────────────────────────────────────────────┤
│ elerama-frontend (React+Vite)  │ elerama-b2b (Next.js+TS)       │
│ elerama-ecommerce (PHP+jQuery) │ elerama-site (CI3.x landing)   │
└─────────────────────┬───────────────────────────────────────────┘
                      │ HTTPS/REST API
┌─────────────────────▼───────────────────────────────────────────┐
│            LAYER API GATEWAY (elerama-api project)              │
│  REST_Controller + Bearer Token Auth + Session Validation       │
└─────────────────────┬───────────────────────────────────────────┘
                      │ Internal routing
┌─────────────────────▼───────────────────────────────────────────┐
│         LAYER BUSINESS LOGIC (elerama/src/modules/)             │
├─────────────────────────────────────────────────────────────────┤
│ 41 Moduli Funzionali:                                           │
│  ├─ admin (utenti, aziende, configurazioni)                     │
│  ├─ sales (vendite, ordini, cassa)                              │
│  ├─ store (magazzino, movimenti, inventario)                    │
│  ├─ import/export (sincronizzazioni articoli/clienti)           │
│  ├─ label (etichette ESL, Fastlabel)                            │
│  ├─ b2c (marketplace eBay/Amazon)                                │
│  ├─ orders (gestione ordini fornitori)                          │
│  ├─ gift_lists (liste regalo/nozze)                             │
│  └─ ... (38 altri moduli)                                       │
│                                                                  │
│ Librerie Condivise:                                             │
│  ├─ Auth.php (autenticazione multi-tenant)                      │
│  ├─ Common.php (utility comuni)                                 │
│  ├─ Ebay_lib.php / Amazon_spapi_lib.php (marketplace)           │
│  └─ Esl_lib.php (etichette elettroniche)                        │
└─────────────────────┬───────────────────────────────────────────┘
                      │ ADOdb ORM
┌─────────────────────▼───────────────────────────────────────────┐
│              LAYER PERSISTENZA (DbConnectionPool)               │
├─────────────────────────────────────────────────────────────────┤
│ PrimaryDb (master)       │  ReplicaDb (slave)                   │
│  ├─ elelocal_erp (master)│   ├─ elelocal_erp_replica (R/O)      │
│                                                                  │
│ Database Specializzati:                                          │
│  ├─ WorkerDb (elelocal_worker) — background jobs                │
│  ├─ LicenseDb (elelocal_license) — validazione licenze          │
│  ├─ SessionsDb (elelocal_sessions) — sessioni utente            │
│  └─ WsDb (elelocal_ws) — log web services                       │
└─────────────────────┬───────────────────────────────────────────┘
                      │ MySQL 8.0
┌─────────────────────▼───────────────────────────────────────────┐
│                   STORAGE LAYER (MySQL)                          │
│  7 Schemi Database + Replication Master-Slave                   │
└──────────────────────────────────────────────────────────────────┘

           ┌────────────────────────────────────┐
           │   INTEGRAZIONI ESTERNE (HTTP/SOAP) │
           ├────────────────────────────────────┤
           │ eBay Trading API + Feed API (REST) │
           │ Amazon SP-API (REST + AWS Sign)    │
           │ ESL Vusion/Delfi (REST + IoT)      │
           │ Fastlabel (REST printer labels)    │
           │ Gmail API (email transazionali)    │
           │ API2PDF (cloud PDF generation)     │
           │ NuSOAP (legacy ERP B2B)            │
           └────────────────────────────────────┘
```

---

## 11. Flussi Chiave & Esempi

### 11.1 Flusso Autenticazione Utente

```text
1. User invia POST /app/app_auth/login {username, password}
   → elerama-api/controllers/App_auth.php::login_post()

2. Api_auth library valida:
   - Throttling max login attempts (IP-based)
   - Query COM_USERS WHERE USER_LOGIN = :username
   - Verifica hash password (bcrypt)
   - Check licenza attiva (COM_COMPANY_LICENSES)

3. Genera Bearer Token:
   - Serializza session data (ID_USER, ID_COMPANY, PERMISSIONS)
   - Encrypt token via CI_Encrypt + secret key
   - Store in memcache con TTL (default 24h)

4. Response JSON:
   {
     "status": 200,
     "response": {
       "session": "encrypted_bearer_token_xyz",
       "user": { ... },
       "companies": [{ ID_COMPANY: 121, COMPANY_NAME: "..." }]
     }
   }

5. Frontend salva token in localStorage/cookie
   → Ogni richiesta successiva invia header:
   Authorization: Bearer encrypted_bearer_token_xyz
```

### 11.2 Flusso Sincronizzazione eBay Feed

```text
1. Cronjob/manuale trigger:
   modules/b2c/controllers/ebay.php::upload_insert()

2. Ebay_lib->update_feed($id_company, $sale_point_config):
   - Query articoli pubblicati: SAL_PUBLISHED_ARTICLES
   - Genera XML BulkDataExchange:
     <BulkDataExchangeRequests>
       <AddFixedPriceItemRequest>
         <Item><SKU>...</SKU><Title>...</Title>...</Item>
       </AddFixedPriceItemRequest>
     </BulkDataExchangeRequests>

3. Upload file via File Transfer Service:
   - POST https://storage.ebay.com/FileTransferService
   - Auth: X-EBAY-SOA-SECURITY-TOKEN
   - Attachment multipart: request UUID + XML zip

4. Start job via createUploadJob()
   - Response: jobId (polling async)

5. Background check_ebay() via CURL async:
   - Polling getJobStatus() ogni 5 min
   - Su success: salva risultati in EBA_FEED_UPLOADS
   - Su error: log in EBA_FEED_ERRORS

6. Notifica admin via email (optional)
```

### 11.3 Flusso Generazione Etichetta ESL

```text
1. Utente modifica prezzo articolo in SAL_LIST_PRICES_ARTICLES
   → modules/label/controllers/esl.php::update_price()

2. Esl_lib->_send_vusion_pricing():
   - Genera template JSON:
     {
       "template": { "code": "IT_PRICE_TEMPLATE", "values": [...] },
       "devices": [{ "barcode": "EAN13_ARTICLE" }]
     }

3. POST https://api.ses-imagotag.com/pricing/v1/domains/{domain}/templates
   Headers:
     - Content-Type: application/json
     - Ocp-Apim-Subscription-Key: {subscription_key}

4. Response: { "correlationId": "abc123" }
   → Polling /correlations/abc123 per status

5. ESL gateway IoT:
   - Match barcode → device ID fisico
   - Push update via RF/NFC al tag in negozio

6. Conferma display aggiornato:
   - Salva log in LAB_ESL_UPDATES_LOG
```

---

## 12. Conclusioni & Raccomandazioni

### 12.1 Sintesi Architetturale

Daisy Solution presenta un'**architettura modulare monolitica matura** con:

- ✅ Forte separazione domini funzionali (41 moduli)
- ✅ Integrations ecosystem completo (marketplace, ESL, B2B)
- ✅ Sicurezza multi-tenant robusta
- ⚠️ Debito tecnico framework legacy (CodeIgniter 2.x)
- ⚠️ Limitata scalabilità orizzontale
- ⚠️ Testing automatizzato assente

### 12.2 Adeguatezza Contesto Retail

**ALTA** per retail tradizionale con:

- Store fisici + ecommerce
- Multi-punto vendita (catene 5-50 negozi)
- Necessità integrazione marketplace
- Etichettatura automatizzata in-store

**LIMITATA** per:

- Enterprise retail >100 store (necessita refactoring microservizi)
- Real-time inventory ultra-concorrente
- Mobile-first commerce (necessita app nativa)

### 12.3 Prossimi Passi Analisi

1. **STEP 2**: Mappare entità dominio + capability core (articoli, clienti, ordini, listini)
2. **STEP 3**: Dettagliare integrazioni esterne (Eldomcat, Fastlabel, comparatori)
3. **STEP 4**: Identificare differenziatori competitivi (analisi moduli unici: label, gift_lists, layout)
4. **STEP 5**: Tradurre in messaggi marketing per daisysolution.it

---

**Pronto per STEP 2** — Modello di Dominio e Core Capabilities
