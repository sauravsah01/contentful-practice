import type { Metadata } from 'next'

export const createMetadata = async (data: any, globalSettingsData?: any): Promise<Metadata> => {
  const pageTag = globalSettingsData ? globalSettingsData.fields.pageTag : null
  let pageTitle = data?.fields?.seoMetadata?.fields?.ogTitle

  if (pageTag && globalSettingsData) {
    pageTitle = globalSettingsData.fields.pageTagPrefix ? `${pageTag}${pageTitle}` : `${pageTitle}${pageTag}`
  }

  const metadata = {
    title: pageTitle,
    description: data?.fields?.seoMetadata?.fields?.ogDescription || '',
    keywords: data?.fields?.seoMetadata?.fields?.keywords || [],
    openGraph: {
      title: pageTitle,
      description: data?.fields?.seoMetadata?.fields?.ogDescription || '',
      siteName: data?.fields?.seoMetadata?.fields?.sitename || '',
      images: [{ url: data?.fields?.seoMetadata?.fields?.ogImage?.fields?.file?.url }],
      type: data?.fields?.seoMetadata?.fields?.type || 'website',
    },
    robots: {
      index: !data?.fields?.seoMetadata?.fields?.hidePageFromSitemap,
      nocache: data?.fields?.seoMetadata?.fields?.hidePageFromSitemap,
    },
  }

  return metadata
}
