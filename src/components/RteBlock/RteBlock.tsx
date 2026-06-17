import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { Document } from '@contentful/rich-text-types'
import { TypeRteBlock } from '@/types'

const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_: any, children: any) => (
      <h1 className="mt-12 mb-6 text-6xl font-semibold tracking-tight text-white">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_: any, children: any) => (
      <h2 className="mt-10 mb-4 text-4xl font-semibold tracking-tight text-white">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: any, children: any) => (
      <h3 className="mt-8 mb-3 text-lg font-semibold text-white">{children}</h3>
    ),
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => <p className="mb-4 text-base leading-7 text-white/60">{children}</p>,
    [BLOCKS.UL_LIST]: (_: any, children: any) => (
      <ul className="mb-4 list-inside list-disc space-y-1 pl-4 text-base leading-7 text-white/60">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_: any, children: any) => (
      <ol className="mb-4 list-inside list-decimal space-y-1 pl-4 text-base leading-7 text-white/60">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_: any, children: any) => <li className="text-white/60">{children}</li>,
    [BLOCKS.HR]: () => <hr className="my-10 border-white/10" />,
  },
  renderMark: {
    [MARKS.BOLD]: (text: any) => <strong className="font-semibold text-white">{text}</strong>,
    [MARKS.CODE]: (text: any) => (
      <code className="text-accent rounded bg-white/5 px-1.5 py-0.5 font-mono text-sm">{text}</code>
    ),
  },
}

const RteBlock = (props: TypeRteBlock<'WITHOUT_UNRESOLVABLE_LINKS'>) => {
  const { fields, sys } = props
  const inspectorProps = useContentfulInspectorMode({ entryId: sys.id })

  return (
    <section {...inspectorProps({ fieldId: 'pageText' })} className="bg-black px-36 py-24 text-white">
      <div className="mx-auto max-w-3xl">{documentToReactComponents(fields.content as Document, richTextOptions)}</div>
    </section>
  )
}

export default RteBlock
