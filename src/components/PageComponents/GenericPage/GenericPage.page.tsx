'use client'

import { useContentfulInspectorMode, useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type GenericPageProps = {
  data: any
}

const GenericPage = (props: GenericPageProps) => {
  const { data } = props

  const liveData = useContentfulLiveUpdates(data)
  const inspectorProps = useContentfulInspectorMode({ entryId: liveData.sys.id })

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
        {liveData.fields.pageName}
      </h1>
      <div
        {...inspectorProps({
          fieldId: 'pageText',
        })}
      >
        {documentToReactComponents(liveData.fields.pageText)}
      </div>
    </>
  )
}

export default GenericPage
