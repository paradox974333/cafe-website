// lib/sanity.ts

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '3rdrb9c2',
  dataset: 'production',
  apiVersion: '2024-07-01',
  useCdn: false, // must be false to fetch drafts
  perspective: 'previewDrafts'
})