import { createClient, ContentfulClientApi, Entry, EntrySkeletonType } from 'contentful'
import Result from '@/lib/Result'
import logger from '@/lib/logger'

export type Options = {
  accessToken: string
  environment: string
  space: string
  preview?: {
    enable: boolean
    host?: string
    token?: string
  }
}

if (typeof window !== 'undefined') {
  throw new Error(`The 'lib/contentful' is not compatible with the browser`)
}

export class Contentful {
  private options: Options
  private client: ContentfulClientApi<undefined>

  constructor(options: Options) {
    this.options = options
    this.client = this.createClient()
  }

  private createClient() {
    const isPreview = this.options.preview?.enable
    return createClient({
      space: this.options.space,
      accessToken: isPreview ? this.options.preview!.token! : this.options.accessToken,
      environment: this.options.environment,
      host: isPreview ? this.options.preview?.host : undefined,
    })
  }

  async find<T extends EntrySkeletonType>(
    contentType: T['contentTypeId'],
    query?: Record<string, any>,
  ): Promise<Result<Entry[]>> {
    try {
      const response = await this.client.getEntries({
        content_type: contentType,
        ...query,
      })
      return Result.success(response.items)
    } catch (error) {
      const traceId = crypto.randomUUID()
      logger.error(error, `Contentful (Trace ID '${traceId}'): Query for content type '${contentType}'`)
      return Result.fail('Woops', { traceId })
    }
  }
}

export function createContentfulClient(options: Options) {
  return new Contentful(options)
}
