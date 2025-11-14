/**
 * Debug specifico per getPost
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function debugGetPost() {
    const slug = 'raee-compliance-automatica-guida'

    console.log(`\n🔍 Debug getPost("${slug}")\n`)

    // Query esatta come in queries.ts
    const POST_QUERY = `*[
  _type == "post"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`

    console.log('Query:', POST_QUERY)
    console.log('Params:', { slug })

    const result = await client.fetch(POST_QUERY, { slug })

    console.log('\n✅ Risultato:')
    console.log('  - Title:', result?.title || 'NULL')
    console.log('  - Has body:', !!result?.body)
    console.log('  - Has author:', !!result?.author)
    console.log('  - Categories:', result?.categories?.length || 0)

    if (!result) {
        console.log('\n❌ PROBLEMA: La query non ritorna nulla!')
    } else {
        console.log('\n✅ Post trovato correttamente')
    }

    // Test anche altri slug
    console.log('\n\n🔍 Test tutti gli slug disponibili:')
    const allPosts = await client.fetch(`*[_type == "post"]{ title, "slug": slug.current }`)
    allPosts.forEach((p: any) => console.log(`  - ${p.slug} → ${p.title}`))
}

debugGetPost().catch(console.error)
