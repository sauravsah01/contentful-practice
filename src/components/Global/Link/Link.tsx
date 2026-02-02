import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import Raw, { LinkProps } from 'next/link'

type Props = PropsWithChildren<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>>

export default function Link({ children, ...props }: Props) {
  if (!props?.href) return null

  return <Raw {...props}>{children}</Raw>
}
