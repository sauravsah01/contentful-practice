import Result from '@/lib/Result'
import { createClient } from '@/lib/contentful/contentfulClient'
import { draftMode } from 'next/headers'

const PAGE_CONTENT_TYPE = 'page'

export default async function getGenericPageData(url: string, locale?: string) {
  const { isEnabled } = await draftMode()

  try {
    const client = isEnabled ? createClient(true) : createClient()
    const response = await client.api.find(PAGE_CONTENT_TYPE, {
      'fields.url': url,
      limit: 1,
      ...(locale && { locale }),
    })

    if (!response || response.error) {
      return Result.fail('getGenericPage: No Items Found')
    }

    if (!response.data) {
      return Result.fail('getGenericPage: No Page item found')
    }

    const item = response.data?.[0]

    return Result.success(item)
  } catch (err) {
    console.error('There is an error in getGenericPage query:', err)
    return Result.fail('getGenericPage Query failed to fetch data')
  }
}
