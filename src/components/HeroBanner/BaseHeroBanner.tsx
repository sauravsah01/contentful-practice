import { TypeHeroBanner } from '@/types'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import { useNinetailed } from '@ninetailed/experience.js-react'
import Image from 'next/image'

function BaseHeroBanner(props: TypeHeroBanner<'WITHOUT_UNRESOLVABLE_LINKS'>) {
  const { fields, sys } = props
  const { header, description, image } = fields
  const imageUrl = image?.fields?.file?.url

  const { track } = useNinetailed()
  const inspectorProps = useContentfulInspectorMode({ entryId: sys.id })

  return (
    <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1
            {...inspectorProps({ fieldId: 'header' })}
            className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto"
          >
            {header}
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p
              {...inspectorProps({ fieldId: 'description' })}
              className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
            >
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="bg-teal hover:bg-teal/70 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => track('bookNow.clicked')}
              >
                Book now
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {imageUrl && (
            <div
              {...inspectorProps({ fieldId: 'image' })}
              className="relative aspect-6/5 w-full max-w-lg overflow-hidden rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            >
              <Image alt="" src={'https:' + imageUrl} fill className="" style={{ objectFit: 'cover' }} />
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
    </div>
  )
}

export default BaseHeroBanner
