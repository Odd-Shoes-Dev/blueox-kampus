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
                Blue <span className="text-[#e05a3a]">OX</span> <span className="text-blue-500">Kampus</span>
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
                <Link key={label} href={href} className="text-xs text-gray-500 hover:text-[#e05a3a] transition-colors font-semibold uppercase tracking-wider">
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} className="text-xs text-gray-500 hover:text-[#e05a3a] transition-colors font-semibold uppercase tracking-wider">
                  {label}
                </a>
              )
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Blue Ox Kampus. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
