import HeroBanner from '@/components/HeroBanner/HeroBanner'
import PromotionsSection from '@/components/PromotionsSection/PromotionsSection'
import RteBlock from '@/components/RteBlock/RteBlock'
import { TypeHeroBanner, TypePromotionsSection, TypeRteBlock } from '@/types'
import { Entry } from 'contentful'

const RenderBlock = (pageContent: Entry) => {
  const pageContentTypeId = pageContent?.sys?.contentType?.sys?.id

  if ('rteBlock' === pageContentTypeId) {
    return <RteBlock {...(pageContent as TypeRteBlock<'WITHOUT_UNRESOLVABLE_LINKS'>)} />
  }

  if ('heroBanner' === pageContentTypeId) {
    return <HeroBanner {...(pageContent as TypeHeroBanner<'WITHOUT_UNRESOLVABLE_LINKS'>)} />
  }

  if ('promotionsSection' === pageContentTypeId) {
    return <PromotionsSection {...(pageContent as TypePromotionsSection<'WITHOUT_UNRESOLVABLE_LINKS'>)} />
  }

  return null
}

export default RenderBlock
