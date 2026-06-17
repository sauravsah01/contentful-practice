'use client'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { AlertBannerWrapperProps } from '../types'

const AlertBannerWrapper = (props: AlertBannerWrapperProps) => {
  const { useLivePreview } = props

  const liveData = useContentfulLiveUpdates(useLivePreview ? props : null)
  const data = liveData ?? props
  const entryId = data.sys.id
  const inspectorMode = useContentfulInspectorMode({ entryId })

  const { description, ctaLabel, ctaLink } = data.fields

  return (
    <section
      {...inspectorMode({ fieldId: 'internalName' })}
      className="bg-accent px-3 py-3 text-center font-bold text-white sm:px-6 lg:px-8"
    >
      {description}
      <a href={ctaLink} className="ml-4 inline-block text-base font-semibold text-white underline hover:text-white/80">
        {ctaLabel}
      </a>
    </section>
  )
}

export default AlertBannerWrapper
