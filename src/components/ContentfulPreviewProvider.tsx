'use client'

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'

export default function ContentfulPreviewProvider({
  children,
  isEnabled,
}: {
  children: React.ReactNode
  isEnabled: boolean
}) {
  return (
    <ContentfulLivePreviewProvider locale="en-US" enableInspectorMode={isEnabled} enableLiveUpdates={isEnabled}>
      {children}
    </ContentfulLivePreviewProvider>
  )
}
