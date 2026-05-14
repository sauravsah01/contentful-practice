'use client'

import RenderBlock from '@/components/Global/ContentBlocks/RenderBlock'
import { useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { Fragment } from 'react/jsx-runtime'

type GenericPageProps = {
  entryData: any
  useLivePreview?: boolean
}

const GenericPage = (props: GenericPageProps) => {
  const { entryData, useLivePreview } = props

  const liveData = useContentfulLiveUpdates(useLivePreview ? entryData : null)
  const data = liveData ?? entryData

  if (!data) {
    return null
  }
  const { pageComponents } = data.fields

  return (
    <>
      {pageComponents?.map((contentBlock: any, index: number) => (
        <Fragment key={index}>{RenderBlock(contentBlock)}</Fragment>
      ))}
    </>
  )
}

export default GenericPage
