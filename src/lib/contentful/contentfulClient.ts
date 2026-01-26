import { createContentfulClient } from './Contentful'

export function createClient(useLivePreview?: boolean) {
  return {
    api: createContentfulClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      preview: {
        enable: useLivePreview === true && process.env.NEXT_PUBLIC_CONTENTFUL_ENABLE_LIVE_PREVIEW === 'true',
        host: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_HOST,
        token: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      },
    }),
  }
}
