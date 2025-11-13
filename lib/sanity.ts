import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries
export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(_createdAt asc)`)
}

export async function getAdvantages() {
  return client.fetch(`*[_type == "advantage"] | order(_createdAt asc)`)
}

export async function getNews() {
  return client.fetch(`*[_type == "news"] | order(date desc)`)
}

export async function getFAQ() {
  return client.fetch(`*[_type == "faq"] | order(order asc)`)
}

export async function getTelecomOperators() {
  return client.fetch(`*[_type == "telecomOperator"] | order(order asc)`)
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`)
}
