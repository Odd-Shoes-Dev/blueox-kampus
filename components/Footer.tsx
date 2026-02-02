import Reveal from './Reveal';

export default function Footer(){
  return (
    <Reveal delay={0.36}>
      <footer className="py-12 border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <img src="/assets/images/logo.png" alt="logo" className="w-10" />
          <div>
            <div className="font-extrabold">BLUE OX KAMPUS</div>
            <div className="text-xs text-gray-400">Uganda's first AI and VR innovation campus</div>
          </div>
        </div>
        <div className="text-sm text-gray-400 text-center">
          <a href="mailto:jobs@blueoxjobs.eu" className="hover:underline">jobs@blueoxjobs.eu</a>
          <div className="mt-1">
            <a href="https://wa.me/3197010209759" className="hover:underline">WhatsApp: +3197010209759</a>
          </div>
        </div>
        </div>
      </footer>
    </Reveal>
  );
}
