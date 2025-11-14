import { client } from './client'

const TOTAL_POSTS_QUERY = /* groq */ `count(*[
  _type == "post"
  && defined(slug.current)
  && select(defined($category) => $category in categories[]->slug.current, true)
])`

export async function getPostsCount(category?: string) {
    const data = await client.fetch(
        TOTAL_POSTS_QUERY,
        { category: category ?? null },
        { next: { revalidate: 60 } }
    )
    return { data }
}

const POSTS_QUERY = /* groq */ `*[
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
}`

export async function getPosts(
    startIndex: number,
    endIndex: number,
    category?: string,
) {
    const data = await client.fetch(
        POSTS_QUERY,
        {
            startIndex,
            endIndex,
            category: category ?? null,
        },
        { next: { revalidate: 60 } }
    )
    return { data }
}

const FEATURED_POSTS_QUERY = /* groq */ `*[
  _type == "post"
  && isFeatured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...$quantity]{
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
    image,
  },
}`

export async function getFeaturedPosts(quantity: number) {
    const data = await client.fetch(
        FEATURED_POSTS_QUERY,
        { quantity },
        { next: { revalidate: 60 } }
    )
    return { data }
}

const FEED_POSTS_QUERY = /* groq */ `*[
  _type == "post"
  && defined(slug.current)
]|order(isFeatured, publishedAt desc){
  title,
  "slug": slug.current,
  publishedAt,
  mainImage,
  excerpt,
  author->{
    name,
  },
}`

export async function getPostsForFeed() {
    const data = await client.fetch(
        FEED_POSTS_QUERY,
        undefined,
        { next: { revalidate: 3600 } }
    )
    return { data }
}

const POST_QUERY = /* groq */ `*[
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

export async function getPost(slug: string) {
    console.log('[getPost] Fetching post with slug:', slug)
    const data = await client.fetch(
        POST_QUERY,
        { slug },
        { next: { revalidate: 60 } }
    )
    console.log('[getPost] Result:', data ? `Found: ${data.title}` : 'NULL')
    return { data }
}

const CATEGORIES_QUERY = /* groq */ `*[
  _type == "category"
  && count(*[_type == "post" && defined(slug.current) && ^._id in categories[]._ref]) > 0
]|order(title asc){
  title,
  "slug": slug.current,
}`

export async function getCategories() {
    const data = await client.fetch(
        CATEGORIES_QUERY,
        undefined,
        { next: { revalidate: 60 } }
    )
    return { data }
}

const ALL_POST_SLUGS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]{
  "slug": slug.current
}`

export async function getAllPostSlugs() {
    const data = await client.fetch<Array<{ slug: string }>>(
        ALL_POST_SLUGS_QUERY,
        {},
        { next: { revalidate: 3600 } }
    )
    return { data }
}
