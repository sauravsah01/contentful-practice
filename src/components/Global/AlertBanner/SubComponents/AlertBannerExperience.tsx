'use client'
import { Experience } from '@ninetailed/experience.js-react'
import { mapNinetailedExperiences } from '@/lib/personalization/mapNinetailedExperiences'
import { AlertBannerWrapperProps } from '../types'
import AlertBannerWrapper from './AlertBannerWrapper'

function AlertBannerExperience(props: AlertBannerWrapperProps) {
  const experiences = mapNinetailedExperiences((props.fields as any).nt_experiences) as any[]

  return (
    <Experience
      {...props}
      id={props.sys.id}
      component={AlertBannerWrapper}
      experiences={experiences}
      passthroughProps={{ useLivePreview: props.useLivePreview }}
    />
  )
}

export default AlertBannerExperience
