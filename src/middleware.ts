import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'
import middlewares from '@/middlewares'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * - API routes;
     * - Next.js internal paths;
     * - Static files (e.g., .ico, .png, .jpg, .js, .css, etc.).
     */
    '/((?!api|_next|.*\\..*).*)',
  ],
}

export async function middleware(req: NextRequest) {
  let res = NextResponse.next()

  for (const middleware of middlewares) {
    res = await middleware(req, res)

    // If the HTTP response status code is not ok, we will
    // return the most recently processed response.
    if (!res.ok) break
  }

  return res
}
