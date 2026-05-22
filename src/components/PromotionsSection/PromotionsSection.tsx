'use client'

import { Experience } from '@ninetailed/experience.js-react'
import { TypePromotionsSection } from '@/types'
import { mapNinetailedExperiences } from '@/lib/personalization/mapNinetailedExperiences'
import BasePromotionsSection from './BasePromotionsSection'

type Props = TypePromotionsSection<'WITHOUT_UNRESOLVABLE_LINKS'>

function PromotionsSection(props: Props) {
  const experiences = mapNinetailedExperiences((props.fields as any).nt_experiences)
  return <Experience {...props} id={props.sys.id} component={BasePromotionsSection} experiences={experiences} />
}

export default PromotionsSection
