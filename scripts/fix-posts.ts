/**
 * Script per verificare e fixare i post
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function fixPosts() {
  console.log('🔍 Verifica post...\n')

  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    slug,
    excerpt,
    isFeatured,
    publishedAt,
    body,
    categories
  }`)

  console.log(`Trovati ${posts.length} post\n`)

  for (const post of posts) {
    console.log(`\n📝 Post: ${post.title}`)
    console.log(`   Slug: ${post.slug?.current}`)
    console.log(`   Excerpt: ${post.excerpt ? 'OK' : 'MANCANTE'}`)
    console.log(`   Featured: ${post.isFeatured}`)
    console.log(`   PublishedAt: ${post.publishedAt}`)
    console.log(`   Body blocks: ${post.body?.length || 0}`)
    console.log(`   Categories: ${post.categories?.length || 0}`)

    // Fix body blocks senza _key
    if (post.body && Array.isArray(post.body)) {
      let needsUpdate = false
      const fixedBody = post.body.map((block: any, index: number) => {
        if (!block._key) {
          needsUpdate = true
          return {
            ...block,
            _key: `block-${Date.now()}-${index}`,
            _type: block._type || 'block',
          }
        }
        // Fix children senza _key
        if (block.children && Array.isArray(block.children)) {
          const fixedChildren = block.children.map((child: any, childIndex: number) => {
            if (!child._key) {
              needsUpdate = true
              return {
                ...child,
                _key: `span-${Date.now()}-${index}-${childIndex}`,
                _type: child._type || 'span',
              }
            }
            return child
          })
          return { ...block, children: fixedChildren }
        }
        return block
      })

      if (needsUpdate) {
        await client
          .patch(post._id)
          .set({ body: fixedBody })
          .commit()
        console.log('   ✅ Body fixed with _key')
      }
    }

    // Fix categories senza _key
    if (post.categories && Array.isArray(post.categories)) {
      let needsUpdate = false
      const fixedCategories = post.categories.map((cat: any, index: number) => {
        if (!cat._key) {
          needsUpdate = true
          return {
            ...cat,
            _key: `cat-${Date.now()}-${index}`,
          }
        }
        return cat
      })

      if (needsUpdate) {
        await client
          .patch(post._id)
          .set({ categories: fixedCategories })
          .commit()
        console.log('   ✅ Categories fixed with _key')
      }
    }
  }

  console.log('\n🎉 Fix completato!')
}

fixPosts().catch(console.error)
