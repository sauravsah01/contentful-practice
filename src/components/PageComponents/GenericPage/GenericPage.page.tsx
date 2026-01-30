'use client'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type GenericPageProps = {
  entryData: any
  useLivePreview?: boolean
}

const GenericPage = (props: GenericPageProps) => {
  const { entryData, useLivePreview } = props

  const data = useLivePreview ? useContentfulLiveUpdates(entryData) : entryData
  const inspectorProps = useContentfulInspectorMode({ entryId: data.sys.id })

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
