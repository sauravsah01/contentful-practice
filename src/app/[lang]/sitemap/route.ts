import { getSitemapPages } from '@/lib/contentful/contentfulService'
import { ensureNoTrailingSlash } from '@/utils/string-utils'

export const dynamic = 'force-static'
export const revalidate = 21600 // 6 hours

export async function GET(request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const domain = new URL(request.url).origin

  const result = await getSitemapPages(lang)
  if (!result.ok || !result.data) {
    return []
  }

  const now = new Date()
  const urls = result.data
    .filter((page): page is typeof page & { fields: { url: string } } => page.fields.url !== undefined)
    .map(
      (page) => `
        <url>
          <loc>${domain}${ensureNoTrailingSlash(page.fields.url)}</loc>
          <lastmod>${new Date(page.sys.updatedAt || now).toISOString().split('T')[0]}</lastmod>
          <changefreq>${page.fields?.change_frequency || 'daily'}</changefreq>
          <priority>${page.fields?.priority || 0.5}</priority>
        </url>`,
    )
    .join('')

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  )
}
