import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const draft = await draftMode()
  const referer = request.headers.get('referer')

  draft.disable()
  redirect(referer ?? '/')
}
