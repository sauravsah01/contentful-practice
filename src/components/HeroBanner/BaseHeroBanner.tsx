import { analytics } from '@/lib/personalization/segment'
import { TypeHeroBanner } from '@/types'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import Image from 'next/image'

function BaseHeroBanner(props: TypeHeroBanner<'WITHOUT_UNRESOLVABLE_LINKS'>) {
  const { fields, sys } = props
  const { header, description, image, primaryCtaLink, primaryCtaLabel, secondaryCtaLabel, secondaryCtaLink } = fields
  const imageUrl = image?.fields?.file?.url

  const inspectorProps = useContentfulInspectorMode({ entryId: sys.id })

  return (
    <div {...inspectorProps({ fieldId: 'internalName' })} className="bg-background">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="fill-background absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-white sm:text-7xl">{header}</h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">{description}</p>
                <div className="mt-10 flex items-center gap-x-6">
                  {primaryCtaLink && (
                    <button
                      onClick={() => analytics.track('primaryCTA.clicked')}
                      // href={primaryCtaLink}
                      className="bg-accent hover:bg-accent/70 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      {primaryCtaLabel}
                    </button>
                  )}
                  {secondaryCtaLink && (
                    <a href={secondaryCtaLink} className="text-sm/6 font-semibold text-white">
                      {secondaryCtaLabel} <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {imageUrl && (
            <Image
              alt=""
              src={'https:' + imageUrl}
              fill
              className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BaseHeroBanner
