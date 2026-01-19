import { createContentfulClient } from './Contentful'

export function createClient() {
  return {
    api: createContentfulClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
      preview: {
        enable: process.env.NEXT_PUBLIC_CONTENTFUL_LIVE_PREVIEW === 'true',
        host: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_HOST,
        token: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
      },
    }),
  }
}
