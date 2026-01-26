import type { Middleware } from '@/middlewares'

import { NextResponse } from 'next/server'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@/i18n/settings'

// Define a regular expression to match the supported locales in the URL path.
const pattern = new RegExp(`^/(${SUPPORTED_LANGUAGES.join('|')})(/|$)`, 'i')

const i18n: Middleware = async (req, res) => {
  // Extract the locale from the matched pattern (supported locales).
  // If no match is found, we will use the default locale.
  const matches = req.nextUrl.pathname.match(pattern)
  const locale = matches?.[1] || DEFAULT_LANGUAGE

  // // Set the "Content-Language" header to the determined locale.
  // res.headers.set('Content-Language', locale);

  // // The "Vary: Accept-Language" header is useful for self-hosted
  // // servers (e.g., Nginx), but some platforms like Vercel ignore
  // // or overwrite it.
  // res.headers.set('Vary', 'Accept-Language');

  // If is a valid locale, skip the rest of the middleware.
  if (matches) return res

  // Clone the request URL to create a new URL object.
  const url = req.nextUrl.clone()

  // Append the default locale to the new URL path.
  url.pathname = `/${locale}${url.pathname}`

  // Rewrite the response with the new URL.
  return NextResponse.rewrite(url, res)
}

export default i18n
