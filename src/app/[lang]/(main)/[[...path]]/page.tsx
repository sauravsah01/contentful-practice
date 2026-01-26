import GenericPage from '@/components/PageComponents/GenericPage/GenericPage.page'
import getGenericPageData from '@/components/PageComponents/GenericPage/getGenericPage'
import { notFound } from 'next/navigation'

export default async function Page({ params, searchParams }: Core.Page<{ path: Array<string>; lang: string }>) {
  const { lang, path } = await params
  const url = path?.length ? `/${path.join('/')}` : '/'
  const result = await getGenericPageData(url)

  if (!result.ok || !result.data) {
    return notFound()
  }

  return <GenericPage data={result.data} />
}

// export async function generateMetadata({ params, searchParams }: Core.Page<{ path: Array<string>; lang: string }>) {
//   const { lang } = await params;
//   const { data } = await getPageData({ params, searchParams });
//   const { data: globalSettingsData } = await getGlobalSettingsData(lang);
//   return createMetadata(data, globalSettingsData);
// }
