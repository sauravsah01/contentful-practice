import Link from '@/components/Global/Link'

const NAV_LINKS = [
  { label: 'Games', href: '/games' },
  { label: 'Live Casino', href: '/live-casino' },
  { label: 'Sports', href: '/sports' },
  { label: 'Promotions', href: '/promotions' },
  { label: 'VIP', href: '/vip' },
]

function XCasinoLogo({ className }: { className?: string }) {
  return (
    <svg width="200" height="60" viewBox="0 0 680 200" className={className} aria-label="XCasino" role="img">
      {/* X icon */}
      <g transform="translate(128, 60)">
        <line x1="8" y1="8" x2="72" y2="72" stroke="#6b47f3" strokeWidth="20" strokeLinecap="round" />
        <line x1="72" y1="8" x2="8" y2="72" stroke="#6b47f3" strokeWidth="20" strokeLinecap="round" />
      </g>

      {/* C icon */}
      <g transform="translate(206, 60)">
        <path d="M 66 14 A 30 30 0 1 0 66 66" fill="none" stroke="#6b47f3" strokeWidth="20" strokeLinecap="round" />
      </g>

      {/* asino */}
      <text
        x="290"
        y="135"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="76"
        fontWeight="300"
        fill="#F9FAFB"
        letterSpacing="-3"
        dominantBaseline="auto"
      >
        asino
      </text>
    </svg>
  )
}
function Header() {
  return (
    <header className="w-full border-b border-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          <XCasinoLogo />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="border-accent text-sm font-medium text-white hover:border-b-2">
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
