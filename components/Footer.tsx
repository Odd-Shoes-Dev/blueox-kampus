import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 flex-wrap">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/assets/images/logo_name.png" alt="Blue OX" className="w-20 h-auto" />
              <span className="text-xs font-black tracking-tighter uppercase leading-none text-black">
                Blue <span className="text-[#F58220]">OX</span> <span className="text-blue-500">Kampus</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">Mbarara, Uganda · EU · US · Gulf</p>
            <p className="mt-2 text-sm text-gray-500 font-medium leading-snug max-w-xs">
              Not a dev shop. Not a talent marketplace.<br />
              Execution infrastructure for redemptive technology.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: 'Hire a Pod',      href: '/#request' },
              { label: 'Join as Builder', href: '/builders' },
              { label: 'Fund Training',   href: '/fund' },
              { label: 'Academy',         href: '/academy' },
              { label: 'Partners',        href: '/partners' },
              { label: 'Email us',        href: 'mailto:blueoxrecruit@gmail.com' },
              { label: 'WhatsApp',        href: 'https://wa.me/3197010209759' },
            ].map(({ label, href }) => (
              href.startsWith('/') || href.startsWith('#') ? (
                <Link key={label} href={href} className="text-xs text-gray-500 hover:text-[#F58220] transition-colors font-semibold uppercase tracking-wider">
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} className="text-xs text-gray-500 hover:text-[#F58220] transition-colors font-semibold uppercase tracking-wider">
                  {label}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Blue Ox Kampus. All rights reserved.</p>
          <a
            href="https://youtube.com/@blueoxkampus?si=BrmK3Ms8-tIHwfYv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blue OX Kampus on YouTube"
            className="text-gray-400 hover:text-[#F58220] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
