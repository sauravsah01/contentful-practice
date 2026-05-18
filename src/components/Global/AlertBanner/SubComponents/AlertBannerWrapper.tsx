'use client'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { AlertBannerWrapperProps } from '../types'

const AlertBannerWrapper = (props: AlertBannerWrapperProps) => {
  const { useLivePreview } = props

  const liveData = useContentfulLiveUpdates(useLivePreview ? props : null)
  const data = liveData ?? props
  const entryId = data.sys.id
  const inspectorMode = useContentfulInspectorMode({ entryId })

  const { description } = data.fields

  return (
    <section
      {...inspectorMode({ fieldId: 'internalName' })}
      className="bg-teal px-3 py-3 text-center font-bold text-white sm:px-6 lg:px-8"
    >
      {description}
    </section>
  )
}

export default AlertBannerWrapper
