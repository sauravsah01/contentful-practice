import Result from '@/lib/Result'
import { createClient } from '@/lib/contentful/contentfulClient'
import { TypeGlobalAlertBanner, TypeGlobalAlertBannerSkeleton, TypeGlobalSettingsSkeleton } from '@/types'
import { Entry } from 'contentful'
import { cache } from 'react'

const GLOBAL_SETTINGS_CONTENT_TYPE = 'globalSettings'
const GLOBAL_ALERT_BANNER_CONTENT_TYPE = 'globalAlertBanner'
const NT_EXPERIENCE_CONTENT_TYPE = 'nt_experience'
const NT_AUDIENCE_CONTENT_TYPE = 'nt_audience'

export const getNinetailedExperiences = cache(async (): Promise<Result<Entry[]>> => {
  try {
    const client = createClient()
    const response = await client.api.find(NT_EXPERIENCE_CONTENT_TYPE, {
      limit: 1000,
    })
    if (!response || response.error) {
      return Result.fail('getNinetailedExperiences: No Items Found')
    }
    if (!response.data) {
      return Result.fail('getNinetailedExperiences: No entries found')
    }
    return Result.success(response.data)
  } catch (err) {
    console.error('There is an error in getNinetailedExperiences query:', err)
    return Result.fail('getNinetailedExperiences Query failed to fetch data')
  }
})

export const getNinetailedAudiences = cache(async (): Promise<Result<Entry[]>> => {
  try {
    const client = createClient()
    const response = await client.api.find(NT_AUDIENCE_CONTENT_TYPE, {
      limit: 1000,
    })
    if (!response || response.error) {
      return Result.fail('getNinetailedAudiences: No Items Found')
    }
    if (!response.data) {
      return Result.fail('getNinetailedAudiences: No entries found')
    }
    return Result.success(response.data)
  } catch (err) {
    console.error('There is an error in getNinetailedAudiences query:', err)
    return Result.fail('getNinetailedAudiences Query failed to fetch data')
  }
})

export const getGlobalSettingsData = cache(
  async (locale?: string): Promise<Result<Entry<TypeGlobalSettingsSkeleton>>> => {
    try {
      const client = createClient()
      const response = await client.api.find<TypeGlobalSettingsSkeleton>(GLOBAL_SETTINGS_CONTENT_TYPE, {
        limit: 1,
        ...(locale && { locale }),
      })

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
  },
)

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

export const getGlobalAlertBannerData = cache(
  async (locale?: string): Promise<Result<TypeGlobalAlertBanner<'WITHOUT_UNRESOLVABLE_LINKS'>>> => {
    try {
      const client = createClient()
      const response = await client.api.find<TypeGlobalAlertBannerSkeleton>(GLOBAL_ALERT_BANNER_CONTENT_TYPE, {
        limit: 1,
        include: 3,
        ...(locale && { locale }),
      })

      if (!response || response.error) {
        return Result.fail('getGlobalAlertBannerData: No Items Found')
      }

      if (!response.data) {
        return Result.fail('getGlobalAlertBannerData: No entry found')
      }

      const item = response.data?.[0] as TypeGlobalAlertBanner<'WITHOUT_UNRESOLVABLE_LINKS'>

      return Result.success(item)
    } catch (err) {
      console.error('There is an error in getGlobalAlertBannerData query:', err)
      return Result.fail('getGlobalAlertBannerData Query failed to fetch data')
    }
  },
)
