import { createClient } from 'next-sanity'

import { token, apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  token,
  projectId,
  dataset,
  apiVersion,
  useCdn,
  // perspective: 'published',
})