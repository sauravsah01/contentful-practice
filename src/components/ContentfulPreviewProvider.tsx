'use client'

import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'

export default function ContentfulPreviewProvider({
  children,
  isEnabled,
  locale,
}: {
  children: React.ReactNode
  isEnabled: boolean
  locale?: string
}) {
  return (
    <ContentfulLivePreviewProvider
      locale={locale ?? 'en-US'}
      enableInspectorMode={isEnabled}
      enableLiveUpdates={isEnabled}
    >
      {children}
    </ContentfulLivePreviewProvider>
  )
}
