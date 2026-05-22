'use client'

import { analytics } from '@/lib/personalization/segment'
import { TypePromotionsSection, TypePromotionCard } from '@/types'
import Image from 'next/image'

type PromotionCardProps = {
  card: TypePromotionCard<'WITHOUT_UNRESOLVABLE_LINKS'>
  featured?: boolean
}

function PromotionCard({ card, featured = false }: PromotionCardProps) {
  const { fields, sys } = card
  const { title, description, ctaLabel, ctaLink, image } = fields
  const imageUrl = image?.fields?.file?.url

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        featured
          ? 'border-accent/40 shadow-accent/10 z-10 scale-105 bg-white/5 shadow-lg'
          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
      } `}
    >
      {imageUrl && (
        <div className={`relative overflow-hidden ${featured ? 'h-56' : 'h-40'}`}>
          <Image
            alt={title ?? ''}
            src={'https:' + imageUrl}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      <div className={`flex flex-1 flex-col ${featured ? 'p-8' : 'p-6'}`}>
        <h3 className={`font-semibold text-white ${featured ? 'text-2xl' : 'text-lg'}`}>{title}</h3>
        <p className={`mt-2 flex-1 text-white/50 ${featured ? 'text-base' : 'text-sm'}`}>{description}</p>
        {ctaLink && (
          <a
            href={ctaLink}
            onClick={() => analytics.track('promotionCTA.clicked', { title, featured })}
            className={`mt-6 inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${
              featured
                ? 'bg-accent hover:bg-accent/80 px-6 py-3 text-sm text-white'
                : 'border border-white/20 px-4 py-2 text-sm text-white/70 hover:border-white/40 hover:text-white'
            } `}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  )
}

function BasePromotionsSection(props: TypePromotionsSection<'WITHOUT_UNRESOLVABLE_LINKS'>) {
  const { fields } = props
  const cards = (fields.cards ?? []).filter(Boolean) as TypePromotionCard<'WITHOUT_UNRESOLVABLE_LINKS'>[]

  if (!cards.length) return null

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-accent mb-3 text-xs font-semibold tracking-widest uppercase">Featured Promotions</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Your Games, Your Rewards</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
          {cards.map((card, index) => (
            <PromotionCard key={card.sys.id} card={card} featured={index === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BasePromotionsSection
