import Image from 'next/image'
import Link from 'next/link'

export default function SupportHeader() {
  return (
    <header className="fixed w-full bg-white border-b border-slate-200 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="flex items-end" href="/" aria-label="Cruip">
              <Image src="/images/image.png" alt="tacoza" width={120} height={30} />
              <span className="text-slate-400 text-sm font-[550] ml-2">| Support Center</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-2">
                <a className="btn-sm inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 shadow-sm" href="#0">
                  Help?
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>        
  )
}