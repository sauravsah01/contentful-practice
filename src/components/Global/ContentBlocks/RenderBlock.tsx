import HeroBanner from '@/components/HeroBanner/HeroBanner'
import RteBlock from '@/components/RteBlock/RteBlock'
import { TypeHeroBanner, TypeRteBlock } from '@/types'
import { Entry } from 'contentful'

const RenderBlock = (pageContent: Entry) => {
  const pageContentTypeId = pageContent?.sys?.contentType?.sys?.id

  if ('rteBlock' === pageContentTypeId) {
    return <RteBlock {...(pageContent as TypeRteBlock<'WITHOUT_UNRESOLVABLE_LINKS'>)} />
  }

  if ('heroBanner' === pageContentTypeId) {
    return <HeroBanner {...(pageContent as TypeHeroBanner<'WITHOUT_UNRESOLVABLE_LINKS'>)} />
  }

  return null
}

export default RenderBlock
