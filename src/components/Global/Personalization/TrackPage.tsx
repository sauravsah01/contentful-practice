'use client'
import { analytics } from '@/lib/personalization/segment'
import { useNinetailed } from '@ninetailed/experience.js-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function TrackPage() {
  const pathname = usePathname()
  const { page, identify } = useNinetailed()

  // useEffect(() => {
  //   const userId = 'user-michael-chen'
  //   const traits = {
  //     playerTier: 'vip',
  //     preferredGame: 'table',
  //     state: 'NJ',
  //     sessionCount: 150,
  //     daysInactive: 0,
  //   }
  //   //
  //   // const userId = 'user-john-doe'
  //   // const traits = {
  //   //   playerTier: 'new',
  //   //   preferredGame: 'sports',
  //   //   state: 'CA',
  //   //   sessionCount: 150,
  //   //   daysInactive: 0,
  //   // }

  //   analytics.identify(userId, traits)
  //   // analytics.identify(userId)
  //   identify(userId, {})
  // }, [])

  useEffect(() => {
    void page()
  }, [page, pathname])

  return null
}
