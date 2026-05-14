import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { TypeRteBlock } from '@/types'

const RteBlock = (props: TypeRteBlock<'WITHOUT_UNRESOLVABLE_LINKS'>) => {
  const { fields, sys } = props
  const inspectorProps = useContentfulInspectorMode({ entryId: sys.id })

  return (
    <section
      {...inspectorProps({
        fieldId: 'pageText',
      })}
    >
      {documentToReactComponents(fields.content as Document)}
    </section>
  )
}

export default RteBlock
