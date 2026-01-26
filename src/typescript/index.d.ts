/// <reference types="node" />
/// <reference types="next" />
/// <reference types="next/image-types/global" />

//
// Standard

interface Window {}

//
// NodeJS

declare namespace NodeJS {
  interface ProcessEnv {
    // Node
    readonly NODE_ENV: 'development' | 'production' | 'test'
    // Logging
    readonly LOGGING_LEVEL: 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent'
    // Next
    readonly NEXT_PHASE: string | undefined
    readonly NEXT_REVALIDATE: string
    readonly NEXT_BASE_URL: string
    readonly NEXT_PUBLIC_BASE_URL: string
    //Client Cache Value
    readonly S_MAXAGE: string
    // Contentful
    readonly NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN: string
    readonly NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT: string
    readonly NEXT_PUBLIC_CONTENTFUL_SPACE_ID: string
    readonly NEXT_PUBLIC_CONTENTFUL_ENABLE_LIVE_PREVIEW: string
    readonly NEXT_PUBLIC_CONTENTFUL_PREVIEW_HOST: string
    readonly NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN: string
  }
}
