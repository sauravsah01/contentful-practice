'use client'
import { useNinetailed } from '@ninetailed/experience.js-react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function TrackPage() {
  const pathname = usePathname()
  const { page } = useNinetailed()

  useEffect(() => {
    void page()
  }, [page, pathname])

  return null
}
