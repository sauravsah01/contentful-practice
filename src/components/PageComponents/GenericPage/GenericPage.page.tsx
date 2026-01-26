'use client'

import { useContentfulLiveUpdates } from '@contentful/live-preview/react'

type GenericPageProps = {
  data: any
}

const GenericPage = (props: GenericPageProps) => {
  const { data } = props

  // const inspectorProps = useContentfulInspectorMode()
  const updatedData = useContentfulLiveUpdates(data)

  console.log('data', data)

  if (!data) {
    return null
  }

  return (
    <h1>
      {/* {inspectorProps({
        entryId: updatedData.sys.id,
        fieldId: 'pageName',
      })} */}
      {updatedData.fields.pageName}
    </h1>
  )
}

export default GenericPage
