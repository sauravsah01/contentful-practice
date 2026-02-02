'use client'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type GenericPageProps = {
  entryData: any
  useLivePreview?: boolean
}

const GenericPage = (props: GenericPageProps) => {
  const { entryData, useLivePreview } = props

  const inspectorProps = useContentfulInspectorMode({ entryId: entryData.sys.id })
  const liveData = useContentfulLiveUpdates(useLivePreview ? entryData : null)
  const data = liveData ?? entryData

  if (!data) {
    return null
  }

  return (
    <>
      <h1
        {...inspectorProps({
          fieldId: 'pageName',
        })}
      >
        {data.fields.pageName}
      </h1>
      <div
        {...inspectorProps({
          fieldId: 'pageText',
        })}
      >
        {documentToReactComponents(data.fields.pageText)}
      </div>
    </>
  )
}

export default GenericPage
