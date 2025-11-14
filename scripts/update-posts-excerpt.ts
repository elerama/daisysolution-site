/**
 * Script per aggiungere excerpt ai post esistenti
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function addExcerpts() {
  console.log('📝 Aggiornamento post con excerpt...\n')

  // Recupera tutti i post
  const posts = await client.fetch(`*[_type == "post" && !defined(excerpt)]`)

  console.log(`Trovati ${posts.length} post senza excerpt\n`)

  for (const post of posts) {
    // Estrai il primo paragrafo dal body come excerpt
    let excerpt = ''
    if (post.body && post.body[0] && post.body[0].children) {
      excerpt = post.body[0].children
        .map((child: any) => child.text)
        .join('')
        .slice(0, 200) + '...'
    }

    if (!excerpt) {
      excerpt = `Leggi l'articolo completo: ${post.title}`
    }

    await client
      .patch(post._id)
      .set({
        excerpt,
        isFeatured: false
      })
      .commit()

    console.log(`✅ Aggiornato: ${post.title}`)
  }

  // Marca i primi 3 post come featured
  const recentPosts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...3]`
  )

  for (const post of recentPosts) {
    await client
      .patch(post._id)
      .set({ isFeatured: true })
      .commit()
    console.log(`⭐ Marked as featured: ${post.title}`)
  }

  console.log('\n🎉 Aggiornamento completato!')
}

addExcerpts().catch(console.error)
