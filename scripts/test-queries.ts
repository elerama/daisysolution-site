/**
 * Script per testare le query del blog
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function testQueries() {
  console.log('🧪 Test query blog...\n')

  // Test query base: tutti i post
  console.log('1️⃣ Tutti i post:')
  const allPosts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    isFeatured
  } | order(publishedAt desc)`)
  console.log(`   Trovati: ${allPosts.length}`)
  allPosts.forEach((p: any) => {
    console.log(`   - ${p.title} (slug: ${p.slug}, featured: ${p.isFeatured})`)
  })

  // Test query: post NON featured
  console.log('\n2️⃣ Post NON featured (per blog listing):')
  const nonFeatured = await client.fetch(`*[
    _type == "post"
    && defined(slug.current)
    && isFeatured != true
  ] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    excerpt
  }`)
  console.log(`   Trovati: ${nonFeatured.length}`)
  nonFeatured.forEach((p: any) => {
    console.log(`   - ${p.title}`)
  })

  // Test query: post featured
  console.log('\n3️⃣ Post Featured:')
  const featured = await client.fetch(`*[
    _type == "post"
    && isFeatured == true
    && defined(slug.current)
  ] | order(publishedAt desc)[0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage
  }`)
  console.log(`   Trovati: ${featured.length}`)
  featured.forEach((p: any) => {
    console.log(`   - ${p.title}`)
  })

  // Test query con author
  console.log('\n4️⃣ Post con author:')
  const withAuthor = await client.fetch(`*[
    _type == "post"
    && defined(slug.current)
  ] | order(publishedAt desc)[0...5] {
    title,
    "slug": slug.current,
    author->{
      name,
      image
    }
  }`)
  console.log(`   Trovati: ${withAuthor.length}`)
  withAuthor.forEach((p: any) => {
    console.log(`   - ${p.title} by ${p.author?.name || 'NO AUTHOR'}`)
  })

  console.log('\n✅ Test completato!')
}

testQueries().catch(console.error)
