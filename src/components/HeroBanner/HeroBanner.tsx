'use client'
import { Experience } from '@ninetailed/experience.js-react'
import { TypeHeroBanner } from '@/types'
import { mapNinetailedExperiences } from '@/lib/personalization/mapNinetailedExperiences'
import BaseHeroBanner from './BaseHeroBanner'

type ExperienceHeroBannerProps = TypeHeroBanner<'WITHOUT_UNRESOLVABLE_LINKS'>

function HeroBanner(props: ExperienceHeroBannerProps) {
  const experiences = mapNinetailedExperiences((props.fields as any).nt_experiences)

  return <Experience {...props} id={props.sys.id} component={BaseHeroBanner} experiences={experiences} />
}

export default HeroBanner
