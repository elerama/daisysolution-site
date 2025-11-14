/**
 * Script per debuggare le query del blog
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function debugQueries() {
  console.log('🐛 Debug query blog...\n')

  // Test query esatta usata in getPosts
  console.log('1️⃣ Query getPosts (startIndex=0, endIndex=5):')
  const posts = await client.fetch(`*[
    _type == "post"
    && defined(slug.current)
    && select(defined($category) => $category in categories[]->slug.current, true)
  ]|order(publishedAt desc)[$startIndex...$endIndex]{
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    author->{
      name,
      image,
    },
  }`, {
    startIndex: 0,
    endIndex: 5,
    category: null
  })
  console.log(`   Risultati: ${posts.length}`)
  posts.forEach((p: any) => console.log(`   - ${p.title}`))

  // Test query getPost
  console.log('\n2️⃣ Query getPost (slug="raee-compliance-automatica-guida"):')
  const post = await client.fetch(`*[
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
  }`, { slug: 'raee-compliance-automatica-guida' })
  console.log(`   Risultato: ${post ? post.title : 'NULL'}`)

  // Test semplice senza select
  console.log('\n3️⃣ Query semplice senza select:')
  const simplePosts = await client.fetch(`*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...5]{
    title,
    "slug": slug.current,
    publishedAt,
    excerpt
  }`)
  console.log(`   Risultati: ${simplePosts.length}`)
  simplePosts.forEach((p: any) => console.log(`   - ${p.title}`))

  console.log('\n✅ Debug completato!')
}

debugQueries().catch(console.error)
