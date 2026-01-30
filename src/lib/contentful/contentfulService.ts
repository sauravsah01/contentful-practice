import Result from '@/lib/Result'
import { createClient } from '@/lib/contentful/contentfulClient'
import { Entry } from 'contentful'
import { cache } from 'react'

const GLOBAL_SETTINGS_CONTENT_TYPE = 'globalSettings'

export const getGlobalSettingsData = cache(async (locale?: string): Promise<Result<Entry>> => {
  try {
    const client = createClient()
    const response = await client.api.find(GLOBAL_SETTINGS_CONTENT_TYPE, { limit: 1, ...(locale && { locale }) })

    if (!response || response.error) {
      return Result.fail('getGlobalSettingsData: No Items Found')
    }

    if (!response.data) {
      return Result.fail('getGlobalSettingsData: No entry found')
    }

    const item = response.data?.[0]

    return Result.success(item)
  } catch (err) {
    console.error('There is an error in getGlobalSettingsData query:', err)
    return Result.fail('getGlobalSettingsData Query failed to fetch data')
  }
})

export const getSitemapPages = async (locale: string): Promise<Result<Entry[]>> => {
  // Add pages content type here
  const ALL_PAGES_CONTENT_TYPE = ['page']

  if (!ALL_PAGES_CONTENT_TYPE || ALL_PAGES_CONTENT_TYPE.length === 0) {
    return Result.fail('No content types defined for all pages')
  }

  try {
    const pages: Entry[] = []

    for (const contentType of ALL_PAGES_CONTENT_TYPE) {
      const client = createClient()
      const response = await client.api.find(contentType, { ...(locale && { locale }) })

      if (response.ok && response.data) {
        const visiblePages = response.data.filter(
          (page) => (page.fields?.seoMetadata as Entry)?.fields?.hidePageFromSitemap !== true,
        )

        pages.push(...visiblePages)
      }
    }

    return Result.success(pages)
  } catch (error) {
    return Result.fail(`Failed to fetch pages\r\n ${JSON.stringify(error, null, 2)}`)
  }
}
