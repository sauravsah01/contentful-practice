import Result from '@/lib/Result'
import { createClient } from '@/lib/contentful/contentfulClient'
import { draftMode } from 'next/headers'

const PAGE_CONTENT_TYPE = 'page'

export default async function getGenericPageData(url: string) {
  const { isEnabled } = await draftMode()

  try {
    const client = isEnabled ? createClient(true) : createClient()
    const response = await client.api.find(PAGE_CONTENT_TYPE, {
      'fields.url': url,
      limit: 1,
    })

    // console.log('response', JSON.stringify(response))

    // if (!response || response.error) {
    //   return Result.fail('No Items Found')
    // }
    // if (!response.data) {
    //   return Result.fail('No Page item found')
    // }
    const item = response.data?.[0]

    return Result.success(item)
  } catch (err) {
    console.error('There is an error in page query:', err)
    return Result.fail('Query failed to fetch data')
  }
}
