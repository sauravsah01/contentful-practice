// import Result from '@/lib/Result'
// import { createClient } from '@/lib/contentful/contentfulClient'
// import { GetEntryOptions } from '@/lib/contentful/Contentful'

// export async function getEntries<T>(options: GetEntryOptions): Promise<Result<T[]>> {
//   const result = await createClient().api.find(options)

//   if (!result.ok) {
//     return Result.from(result)
//   }

//   if (!result.data || result.data.length < 1) {
//     return Result.fail('Not Found')
//   }

//   return Result.success<T[]>(result.data)
// }

// export async function getEntrySingle<T>(options: GetEntryOptions): Promise<Result<T>> {
//   const result = await createClient().api.find<T>(options)

//   if (!result.ok) {
//     return Result.from(result)
//   }

//   if (!result.data || result.data.length < 1) {
//     return Result.fail('Not Found')
//   }

//   return Result.success<T>(result.data.shift())
// }

// export async function getEntryByUrl<T>(
//   url: string,
//   contentType: string,
//   language?: string,
// ): Promise<Result<T>> {
//   return getEntrySingle<T>({
//     contentType,
//     query: {

//     }
//   })
// }

// export const getSitemapPages = async (language: string): Promise<Result<Page[]>> => {
//   // Add pages content type here
//   const ALL_PAGES_CONTENT_TYPE = ['page']

//   if (!ALL_PAGES_CONTENT_TYPE || ALL_PAGES_CONTENT_TYPE.length === 0) {
//     return Result.fail('No content types defined for all pages')
//   }

//   try {
//     const pages: Page[] = []

//     for (const contentType of ALL_PAGES_CONTENT_TYPE) {
//       const result = await getEntries<Page>({
//         contentType,
//         builder: (query) =>
//           query.where('search.disable_search_indexing', QueryOperation.NOT_EQUALS, true).addParams({
//             include_fallback: true,
//             include_system_fields: true,
//             locale: language || '',
//           }),
//       })

//       if (result.ok && result.data) {
//         pages.push(...result.data)
//       }
//     }

//     return Result.success(pages)
//   } catch (error) {
//     return Result.fail(`Failed to fetch pages\r\n ${JSON.stringify(error, null, 2)}`)
//   }
// }
