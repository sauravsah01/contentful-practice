import { createClient } from '@/lib/contentful/contentfulClient'
import { cookies, draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const url = searchParams.get('url')
  const contentType = searchParams.get('content-type')
  const locale = searchParams.get('locale')

  const previewClient = createClient(true)

  // Check the secret and next parameters
  // This secret should only be known to this Route Handler and the CMS
  if (secret != process.env.CONTENTFUL_PREVIEW_SECRET || !url || !contentType || !locale)
    return new Response('Invalid secret or preview URL', { status: 401 })

  const response = await previewClient.api.find(contentType, {
    'fields.url': url,
    locale,
    limit: 1,
  })

  if (!response.data || !response.ok) return new Response('Invalid entry ID', { status: 401 })

  const draft = await draftMode()
  draft.enable()

  const item = response.data?.[0]

  const entryUrl = item.fields?.url as string
  if (!entryUrl) return new Response('Invalid entry slug value', { status: 401 })

  // Get the cookie store
  const cookieStore = await cookies()

  // Get the draft mode cookie that was just set
  const draftCookie = cookieStore.get('__prerender_bypass')

  // If we have the cookie, update it with cross-origin iframe support
  if (draftCookie?.value) {
    cookieStore.set({
      name: '__prerender_bypass',
      value: draftCookie.value,
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'none', // Allow cookie in cross-origin iframes
    })
  }

  redirect(`/${locale}${entryUrl}`)
}
