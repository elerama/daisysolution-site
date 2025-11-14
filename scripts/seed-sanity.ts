/**
 * Script per popolare Sanity Studio con contenuti di esempio
 *
 * Esegui con: npx sanity exec scripts/seed-sanity.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function seedData() {
  console.log('🌱 Inizio seeding di Sanity...\n')

  // 1. Crea autore
  console.log('📝 Creazione autore...')
  const author = await client.create({
    _type: 'author',
    name: 'Team Daisy Solution',
    slug: { _type: 'slug', current: 'team-daisy' },
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Il team di sviluppo e consulenza Daisy Solution, con oltre 20 anni di esperienza nel retail italiano.',
          },
        ],
      },
    ],
  })
  console.log(`✅ Autore creato: ${author._id}\n`)

  // 2. Crea categorie
  console.log('🏷️  Creazione categorie...')
  const categories = await Promise.all([
    client.create({
      _type: 'category',
      title: 'Case Study',
      slug: { _type: 'slug', current: 'case-study' },
      description: 'Storie di successo dei nostri clienti',
    }),
    client.create({
      _type: 'category',
      title: 'Guide ERP',
      slug: { _type: 'slug', current: 'guide-erp' },
      description: 'Guide pratiche per gestire al meglio il tuo retail',
    }),
    client.create({
      _type: 'category',
      title: 'E-commerce',
      slug: { _type: 'slug', current: 'e-commerce' },
      description: 'Tutto su Elecommerce B2B e B2C',
    }),
    client.create({
      _type: 'category',
      title: 'Compliance',
      slug: { _type: 'slug', current: 'compliance' },
      description: 'RAEE, normative e obblighi fiscali',
    }),
  ])
  console.log(`✅ ${categories.length} categorie create\n`)

  // 3. Crea post
  console.log('📰 Creazione post...')

  const posts = [
    {
      title: 'Come Unieuro gestisce 270 negozi affiliati con un unico gestionale',
      slug: 'unieuro-270-negozi-gestionale',
      category: categories[0]._id, // Case Study
      excerpt: 'Il progetto 1Company fornisce a tutti gli affiliati Unieuro una soluzione verticale completa: 900+ postazioni, 400+ casse, sincronizzazione real-time con la centrale.',
      content: `
Il **progetto 1Company** rappresenta un caso di eccellenza nella gestione di reti franchising nel retail italiano. Dal 2018, Daisy Solution supporta 270 negozi affiliati Unieuro con una piattaforma gestionale integrata.

## I numeri del progetto

- **270 negozi affiliati** distribuiti su tutto il territorio nazionale
- **900+ postazioni operative** (media 3-4 per negozio)
- **400+ casse collegate** con scontrini fiscali sincronizzati
- **Partenza 2018**, crescita continua fino ad oggi

## Moduli attivi

Ogni affiliato dispone di un pacchetto verticale completo:

- Cassa e scontrini fiscali
- Vendite (preventivi, ordini, fatture)
- Magazzino multi-sede con giacenze real-time
- Acquisti con integrazione EDI centrale
- Promozioni sincronizzate con volantino Unieuro
- Stampa cartelli con prezzi e caratteristiche
- RAEE compliance automatica
- Riparazioni e laboratorio
- Fidelity card e punti programma

## Interconnessione centrale-affiliato

Il vero valore aggiunto è l'**integrazione EDI** con la centrale Unieuro:

- Ricezione bolle di carico automatiche
- Accesso catalogo completo centrale (85.000+ SKU)
- Visualizzazione listini e giacenze magazzini Unieuro
- Effettuazione ordini con tracciamento stato
- Ricezione variazioni prezzo in tempo reale
- Attivazione volantini/promozioni con un click
- Invio quotidiano dati vendita e giacenze per sell-out

## Benefici misurabili

- **-80% tempo** gestione sell-out quotidiano grazie a invio automatico
- **1 click** per attivare volantino nazionale su tutti i 270 negozi
- **Visibilità real-time** giacenze magazzini centrali
- **Zero duplicazioni**: catalogo gestito centralmente
- **Scalabilità provata**: da 150 a 270 negozi senza re-platforming

[Scopri il case study completo →](/customer-stories/unieuro)
      `,
    },
    {
      title: 'Domex sincronizza 200+ negozi con visual merchandising centralizzato',
      slug: 'domex-200-negozi-fastlabel',
      category: categories[0]._id, // Case Study
      excerpt: "Gruppo d'acquisto per insegne Expert ed ExpertGroup: attivazione campagne promozionali real-time su tutta la rete con Fastlabel.",
      content: `
**Domex S.c.r.l.**, gruppo d'acquisto nazionale per insegne Expert, ExpertGroup e negozi indipendenti, coordina la comunicazione in-store di oltre 200 associati con **Fastlabel**.

## La sfida

Prima di Fastlabel, ogni negozio stampava cartelli autonomamente:

- Ritardo medio 2-3 giorni per nuove promozioni
- Errori frequenti su prezzi barrati e scadenze
- Impossibile lanciare campagne nazionali simultanee
- Costi elevati: stampante, carta, toner per ogni PV

## La soluzione

Con Fastlabel, la centrale Domex può:

- Attivare campagne su tutta la rete con un click
- Gestire template multi-insegna (Expert, ExpertGroup, custom)
- Schedulare promozioni con data inizio/fine automatica
- Controllare in modo granulare: rete completa o singolo PV

I cartelli elettronici nei punti vendita si aggiornano **automaticamente** in tempo reale via cloud.

## Risultati tangibili

- **Da 2 ore a 5 minuti**: tempo attivazione promozione nazionale
- **100% uniformità** messaggistica brand su tutti i PV
- **-95% errori** sui prezzi barrati
- **€12k/anno risparmio** costi stampa per punto vendita
- **3x frequenza campagne**: da 4 a 12 campagne/mese possibili

[Leggi il case study Domex →](/customer-stories/domex)
      `,
    },
    {
      title: 'Eldomcat: 300.000+ articoli per eliminare la gestione manuale del catalogo',
      slug: 'eldomcat-300k-articoli-catalogo',
      category: categories[1]._id, // Guide ERP
      excerpt: 'La banca dati centralizzata con 8 compilazioni diverse che fa risparmiare 75.000 ore/anno ai retailer italiani.',
      content: `
**Eldomcat** è la banca dati centralizzata di Daisy Solution che contiene oltre **300.000 articoli** nel settore elettronica ed elettrodomestici, sempre aggiornati e pronti all'uso.

## Cosa include

Ogni articolo dispone di 8 diverse compilazioni:

1. **Scheda tecnica completa** con caratteristiche strutturate
2. **Specifiche tecniche dettagliate** per confronti
3. **Campi ricerca avanzata** per filtri verticali
4. **Esportazione gestionali** con codici EAN/SKU
5. **Contenuti SEO-optimized** per siti e-commerce
6. **Template per cartelli** con descrizioni puntuali
7. **Descrizioni per volantini** promozionali
8. **Testi discorsivi** per marketing e vendita

## Benefici concreti

- **Zero data entry**: nessun inserimento manuale caratteristiche
- **Copertura 100%** catalogo settore eldom
- **Aggiornamenti continui**: nuovi prodotti aggiunti settimanalmente
- **Personalizzazione**: adatta contenuti al tuo brand
- **75.000 ore/anno risparmiate** (stima industria)

## Integrazione nativa

Eldomcat si integra nativamente con:

- Gestionale Daisy (modulo Banca Dati)
- Elecommerce per export automatico schede prodotto
- Fastlabel per cartelli con descrizioni corrette
- Modulo Volantini per layout promozionali

## ROI immediato

Un negozio medio con 5.000 SKU attivi risparmia circa **500 ore/anno** solo eliminando l'inserimento manuale di caratteristiche tecniche.

Per catene e franchising, il risparmio è esponenziale: con 50 punti vendita si arriva a **25.000 ore/anno** recuperate.

[Richiedi demo Eldomcat →](/contatti)
      `,
    },
    {
      title: 'RAEE compliance automatica: tutto quello che devi sapere',
      slug: 'raee-compliance-automatica-guida',
      category: categories[3]._id, // Compliance
      excerpt: 'Guida completa alla gestione RAEE nel retail: obblighi normativi, reportistica CDC e come Daisy automatizza tutto.',
      content: `
La gestione del **RAEE** (Rifiuti da Apparecchiature Elettriche ed Elettroniche) è un obbligo normativo per tutti i rivenditori di elettronica ed elettrodomestici.

## Obblighi normativi

Ogni rivenditore deve:

- Registrarsi al portale CDC (Centro di Coordinamento RAEE)
- Comunicare mensilmente quantità RAEE raccolti
- Emettere scontrino fiscale con contributo RAEE evidenziato
- Conservare documentazione per controlli
- Gestire ritiro "uno contro uno" e "uno contro zero"

## Come Daisy automatizza il RAEE

Il modulo RAEE di Daisy Solution:

1. **Integrazione CDC**: invio automatico reportistica mensile
2. **Scontrino automatico**: contributo RAEE sempre evidenziato
3. **Registro ritiri**: tracciamento completo con firma digitale cliente
4. **Alert scadenze**: notifiche per comunicazioni obbligatorie
5. **Storico completo**: audit trail per controlli ispettivi

## Caso pratico: rete Unieuro

I 270 affiliati Unieuro gestiscono il RAEE in modo centralizzato:

- La centrale coordina i rapporti con CDC
- Ogni affiliato traccia i propri ritiri localmente
- Reportistica aggregata automatica mensile
- Zero dimenticanze, zero sanzioni

## Sanzioni da evitare

Il mancato rispetto degli obblighi RAEE comporta:

- Sanzioni da €2.600 a €26.000 per mancata comunicazione
- Chiusura temporanea attività in caso di recidiva
- Responsabilità penale del legale rappresentante

## Semplifica con Daisy

Con Daisy Solution, la compliance RAEE diventa:

- **Automatica**: nessun intervento manuale mensile
- **Sicura**: impossibile dimenticare comunicazioni
- **Tracciata**: storico completo sempre disponibile
- **Integrata**: dati già presenti nel gestionale

[Richiedi demo modulo RAEE →](/contatti)
      `,
    },
    {
      title: 'Elecommerce: come vendere su Amazon, eBay e comparatori prezzi',
      slug: 'elecommerce-marketplace-comparatori',
      category: categories[2]._id, // E-commerce
      excerpt: 'Piattaforma B2B e B2C integrata con gestionale: sincronizzazione automatica catalogo, ordini e giacenze verso marketplace e comparatori.',
      content: `
**Elecommerce** è la piattaforma e-commerce di Daisy Solution progettata per retailer che vogliono vendere online mantenendo l'integrazione totale con il gestionale.

## Canali di vendita supportati

- **Sito B2C proprietario** con catalogo completo
- **Portale B2B** per rivenditori con listini dedicati
- **Amazon Marketplace** con sincronizzazione ordini
- **eBay** con gestione listing automatica
- **Comparatori prezzi**: Google Shopping, Trovaprezzi, Idealo

## Integrazione con gestionale

Tutto è sincronizzato real-time:

- **Catalogo**: export automatico da Eldomcat
- **Prezzi e listini**: aggiornamento da gestionale
- **Giacenze**: visibilità stock per ogni canale
- **Ordini**: importazione automatica in Daisy
- **Spedizioni**: tracking sincronizzato

## Gestione pagamenti

Integrazione nativa con:

- Banca Sella
- Unicredit
- BCC
- PayPal
- Bonifico bancario (B2B)

## Caso d'uso: Gruppo Gaer

Il Gruppo Gaer (200+ negozi) utilizza Elecommerce con innovazione **totem interattivi** in-store:

- Cliente naviga catalogo esteso su touch screen
- Ordina articoli non presenti fisicamente (pick & pay)
- Paga in negozio, ritira a casa o in punto vendita
- Esperienza cross-canale seamless

## SEO e marketing

Elecommerce include:

- URL SEO-friendly con contenuti Eldomcat
- Sitemap XML automatica
- Google Shopping feed
- Remarketing pixel
- Newsletter integrata

## Vantaggi multi-canale

- **+40% fatturato medio** con vendita online
- **Zero duplicazioni**: gestisci tutto da un unico gestionale
- **Costi contenuti**: nessun software esterno da pagare
- **Scalabilità**: da 1 negozio a 200+ con stessa piattaforma

[Scopri Elecommerce →](/prodotto/elecommerce)
      `,
    },
  ]

  for (const post of posts) {
    const createdPost = await client.create({
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      author: { _type: 'reference', _ref: author._id },
      categories: [{ _type: 'reference', _ref: post.category }],
      publishedAt: new Date().toISOString(),
      body: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: post.excerpt,
            },
          ],
          style: 'normal',
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: post.content,
            },
          ],
          style: 'normal',
        },
      ],
    })
    console.log(`✅ Post creato: "${post.title}"`)
  }

  console.log('\n🎉 Seeding completato con successo!')
  console.log('\n📍 Accedi a Sanity Studio: http://localhost:3000/studio')
  console.log('📍 Visualizza blog: http://localhost:3000/blog')
}

// Esegui seeding
seedData().catch((err) => {
  console.error('❌ Errore durante il seeding:', err)
  process.exit(1)
})
