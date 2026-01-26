import { createClient } from '@/lib/contentful/contentfulClient'
import Result from '@/lib/Result'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
// import { getEntryByUrl, getGlobalSettingsData } from '@/lib/Contentstack/ContentstackService';
// import ModularBlocks from '@/lib/Contentstack/Render/ModularBlocks';
// import { PageProps } from '@/types/pages';
// import { createMetadata } from '@/utils';
const PAGE_CONTENT_TYPE = 'page'

const getPageData = async ({ params }: Core.Page<{ path: Array<string>; lang: string }>) => {
  const { isEnabled } = await draftMode()
  const { lang, path } = await params
  const pathString = path?.length ? `/${path.join('/')}` : '/'

  console.log('path', path)
  console.log('is preview mode enabled', isEnabled)

  try {
    const client = isEnabled ? createClient(true) : createClient()
    const response = await client.api.find(PAGE_CONTENT_TYPE, {
      'fields.url': pathString,
      limit: 1,
    })

    // console.log('response', JSON.stringify(response))

    // if (!response || response.error) {
    //   return Result.fail('No Items Found')
    // }
    // if (!response.data) {
    //   return Result.fail('No Page item found')
    // }
    const item = response.data?.shift()

    return Result.success(item)
  } catch (err) {
    console.error('There is an error in page query:', err)
    return Result.fail('Query failed to fetch data')
  }
}

export default async function Page({ params, searchParams }: Core.Page<{ path: Array<string>; lang: string }>) {
  const result = await getPageData({ params, searchParams })

  if (!result.ok || !result.data) {
    return notFound()
  }

  return (
    <>
      <h1>{result.data?.fields?.pageName}</h1>
      {/* <ModularBlocks
        contentTypeUid={PAGE_CONTENT_TYPE}
        entryUid={result.data?.uid}
        locale={result.data?.locale}
        pageComponents={result.data?.page_components}
      /> */}
    </>
  )
}

// export async function generateMetadata({ params, searchParams }: Core.Page<{ path: Array<string>; lang: string }>) {
//   const { lang } = await params;
//   const { data } = await getPageData({ params, searchParams });
//   const { data: globalSettingsData } = await getGlobalSettingsData(lang);
//   return createMetadata(data, globalSettingsData);
// }
