import GenericPage from '@/components/PageComponents/GenericPage/GenericPage.page'
import { getGenericPageData } from '@/components/PageComponents/GenericPage/getGenericPage'
import { getGlobalSettingsData } from '@/lib/contentful/contentfulService'
import { createMetadata } from '@/utils'
import { notFound } from 'next/navigation'

// Block paths that contain a . to prevent invalid requests like /com.chrome.devtools.json
const BLOCK_PATH_REGEX = /\./

export async function generateMetadata({ params }: Core.Page<{ path: Array<string>; lang: string }>) {
  const { lang, path } = await params
  const url = path?.length ? `/${path.join('/')}` : '/'

  if (BLOCK_PATH_REGEX.test(url)) {
    return null
  }

  const { data } = await getGenericPageData(url, lang)
  const { data: globalSettingsData } = await getGlobalSettingsData(lang)
  return createMetadata(data, globalSettingsData)
}

export default async function Page({ params }: Core.Page<{ path: Array<string>; lang: string }>) {
  const { lang, path } = await params
  const url = path?.length ? `/${path.join('/')}` : '/'

  if (BLOCK_PATH_REGEX.test(url)) {
    return null
  }

  const result = await getGenericPageData(url, lang)

  if (!result.ok || !result.data) {
    return notFound()
  }

  return <GenericPage data={result.data} />
}
