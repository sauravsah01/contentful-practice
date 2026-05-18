import Link from '@/components/Global/Link'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const XcentiumHotelsLogo = () => {
  const teal = '#0a7a7a'
  const bg = '#faf8f5'
  const subtitleColor = '#999999'
  const dividerColor = '#cccccc'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      {/* X Icon */}
      <svg
        width="30"
        height="40"
        viewBox="0 0 30 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Xcentium Hotels icon"
      >
        <polygon fill={teal} points="0,0 8,0 30,40 22,40" />
        <polygon fill={teal} points="22,0 30,0 8,40 0,40" />
        <rect x="0" y="16" width="30" height="6" fill={bg} />
      </svg>

      {/* Vertical divider */}
      <div
        style={{
          width: '0.5px',
          height: '36px',
          background: dividerColor,
          flexShrink: 0,
        }}
      />

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '0.16em',
            color: teal,
            lineHeight: 1,
            fontFamily: 'sans-serif',
          }}
        >
          XCENTIUM
        </span>
        <span
          style={{
            fontSize: '9px',
            letterSpacing: '0.38em',
            color: subtitleColor,
            marginTop: '3px',
            fontFamily: 'sans-serif',
            fontWeight: 400,
          }}
        >
          HOTELS
        </span>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          <XcentiumHotelsLogo />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
