import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Users, 
  Zap, 
  Code, 
  CheckCircle, 
  Quote,
  Globe,
  Mail,
  MessageSquare,
  Terminal,
  Activity,
  Layers,
  Shield,
  Award,
  ArrowUpRight,
  Cpu,
  Eye,
  Database,
  Layout,
  PlayCircle,
  Briefcase,
  Star
} from 'lucide-react';

// --- VISUAL ORNAMENTS ---

const GridBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0044CC 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0044CC 1px, transparent 1px), linear-gradient(90deg, #0044CC 1px, transparent 1px)', backgroundSize: '200px 200px' }} />
  </div>
);

const TechBorder = ({ className = "" }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="w-4 h-4 border-t-2 border-l-2 border-[#F58220]" />
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F58220] opacity-20" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F58220] opacity-20" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F58220]" />
  </div>
);

// --- LOGOS ---

const BlueOxLogo = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#F58220" fillOpacity="0.1" stroke="#F58220" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="50" cy="50" r="42" fill="#F58220" />
    <path d="M72 40C72 40 68 32 50 32C32 32 28 40 28 40C28 40 25 45 30 55C35 65 42 75 50 75C58 75 65 65 70 55C75 45 72 40 72 40Z" fill="#0044CC" />
    <path d="M45 42L72 43V52L45 51C45 51 40 50 40 46C40 42 45 42 45 42Z" fill="white" />
    <rect x="42" y="44" width="28" height="6" rx="1" fill="#00FFFF" fillOpacity="0.6" />
    <path d="M50 32C55 32 68 35 72 40C60 40 55 42 50 50C45 42 40 40 28 40C32 35 45 32 50 32Z" fill="#0044CC" />
  </svg>
);

const KingdomChaplainLogo = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C50 10 35 30 35 55C35 80 50 90 50 90C50 90 65 80 65 55C65 30 50 10 50 10Z" fill="currentColor" />
    <path d="M55 35C55 35 45 45 45 60C45 75 55 85 55 85C55 85 65 75 65 60C65 45 55 35 55 35Z" fill="white" fillOpacity="0.3" />
  </svg>
);

// --- HELPER COMPONENTS ---

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`py-16 md:py-40 overflow-hidden ${className}`}>
    <div className="container mx-auto px-5 md:px-6 max-w-7xl">
      {children}
    </div>
  </section>
);

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-[#0044CC] text-white hover:bg-[#0033AA] border-b-4 border-[#002288] active:border-b-0 active:translate-y-[4px] shadow-lg shadow-blue-500/10 font-bebas tracking-wide',
    secondary: 'bg-[#F58220] text-white hover:bg-[#EE5500] border-b-4 border-[#CC4400] active:border-b-0 active:translate-y-[4px] shadow-lg shadow-orange-500/10 font-bebas tracking-wide',
    outline: 'border-2 border-[#0044CC] text-[#0044CC] hover:bg-[#0044CC] hover:text-white font-bebas tracking-wide',
    ghost: 'text-[#0044CC] hover:bg-blue-50 font-bebas tracking-wide'
  };
  return (
    <button className={`px-6 py-4 md:py-3 rounded-lg transition-all duration-100 uppercase text-lg md:text-xl flex items-center justify-center gap-2 ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const BlueprintCard = ({ children, title, step, className = "" }) => (
  <div className={`relative border border-gray-100 bg-white p-6 md:p-10 rounded-xl group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 ${className}`}>
    <TechBorder className="inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute top-4 right-6 flex flex-col items-end gap-1">
       {step && <span className="font-bebas text-4xl md:text-5xl text-gray-100 group-hover:text-blue-100 transition-colors leading-none">{step}</span>}
       {title && <p className="font-mono text-[8px] md:text-[9px] text-gray-300 uppercase tracking-[0.3em] font-bold">{title}</p>}
    </div>
    {children}
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tickerItems = [
    'Raising builders, creatives, and storytellers across Africa',
    'Transforming church spaces into Christian creative environments',
    'Partnered with Kingdom Chaplain · Uganda · Malawi · South Africa',
    'Competition-ranked talent · Weekly hackathons · Top performers deployed first',
    'Eagle Venture Fund · Counter-trafficking tech · Haiven · DevShield · OneHaven',
    'oddshoes.dev · 50% of every project funds the mission',
  ];

  const podRoles = [
    { role: 'Pod Coordinator', desc: 'Management & QA Layer' },
    { role: 'Lead Developer', desc: 'Architecture & Logic' },
    { role: 'UI/UX Designer', desc: 'Product Interfaces' },
    { role: 'Motion Creative', desc: 'Video & Storytelling' },
    { role: 'DevOps Intern', desc: 'Infrastructure Support' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-libre selection:bg-[#F58220] selection:text-white overflow-x-hidden">
      
      {/* Font Imports */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-libre { font-family: 'Libre Baskerville', serif; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
      `}} />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-2 md:py-3 shadow-sm border-b border-gray-100' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-5 md:px-6 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3 group cursor-pointer">
            <BlueOxLogo className="h-8 w-8 md:h-10 md:h-10 group-hover:rotate-12 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bebas leading-none text-[#0044CC]">BLUE OX</span>
              <span className="text-[8px] md:text-[10px] font-mono font-black tracking-[0.2em] md:tracking-[0.3em] text-[#F58220] mt-0.5 md:mt-1">KAMPUS_SYSTEM</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Movement', 'Hire a Pod', 'Proof', 'Clients', 'Founder'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="text-sm font-bebas text-gray-400 hover:text-[#0044CC] transition-colors uppercase tracking-widest">{item}</a>
            ))}
            <Button variant="primary" className="py-2.5 px-6 text-sm">Request a Pod</Button>
          </div>

          <button className="lg:hidden text-[#0044CC] p-2 hover:bg-blue-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white p-8 pt-24 flex flex-col gap-8 lg:hidden animate-in fade-in slide-in-from-right duration-300">
           <div className="flex flex-col gap-4">
              {['Movement', 'Hire a Pod', 'Proof', 'Clients', 'Founder'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '')}`} onClick={() => setIsMenuOpen(false)} className="text-5xl font-bebas text-[#0044CC] uppercase border-b border-gray-100 pb-4">{item}</a>
              ))}
           </div>
           <Button variant="primary" className="mt-auto py-6 text-2xl">Request a Pod</Button>
        </div>
      )}

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-16 md:pt-64 md:pb-40 bg-white overflow-hidden">
        <GridBackground />
        
        <div className="container mx-auto px-5 md:px-6 max-w-7xl relative">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-lg px-3 py-2 mb-8 md:mb-12 shadow-xl shadow-blue-500/5">
              <span className="font-mono text-[9px] font-black text-[#F58220] tracking-widest uppercase">/ START</span>
              <span className="w-px h-3 bg-gray-200" />
              <p className="text-[10px] md:text-xs font-bold text-gray-500 font-libre italic">If we don’t shape culture, culture will disciple the next generation.</p>
            </div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[11rem] font-bebas text-[#0044CC] leading-[0.85] tracking-tight mb-8 md:mb-12 uppercase">
              RAISING <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>BUILDERS</span><br />
              TO SHAPE CULTURE.
            </h1>
            
            <p className="text-lg md:text-3xl text-gray-400 leading-relaxed mb-12 md:mb-16 max-w-4xl font-libre italic">
              "We are building Christian creative hubs across Africa, transforming church spaces into creative environments where Gen Z and Gen Alpha are formed in faith and sent to shape media, technology, and storytelling."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16 md:mb-24">
              <Button variant="primary" className="w-full sm:w-auto px-10 py-5 md:py-6 text-xl md:text-2xl">Hire an Intern Pod</Button>
              <Button variant="outline" className="w-full sm:w-auto px-10 py-5 md:py-6 text-xl md:text-2xl">Build with oddshoes.dev</Button>
            </div>
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="bg-[#0044CC] py-6 md:py-10 overflow-hidden relative border-y-4 border-gray-900 shadow-2xl">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-10 mx-6 md:mx-10">
              <span className="text-white font-bebas text-xl md:text-2xl uppercase tracking-widest">{item}</span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-[#F58220] rotate-45" />
            </div>
          ))}
        </div>
      </div>

      {/* THE MOVEMENT */}
      <Section id="movement" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="lg:sticky lg:top-40">
            <p className="font-mono text-[#F58220] font-black text-xs uppercase tracking-[0.5em] mb-6 md:mb-8">/ THE_MOVEMENT</p>
            <h2 className="text-6xl md:text-9xl font-bebas text-[#0044CC] leading-[0.9] mb-8 md:mb-10 uppercase">Culture is <br /><span className="text-gray-100">discipling</span> <br />the next gen.</h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-500 leading-relaxed font-libre">
              <p>
                Right now, billions of dollars are flowing into the stories, platforms, and technologies shaping how young people think, desire, create, and live. Too much of it is forming imagination without truth, creativity without conviction, and influence without responsibility.
              </p>
              <p className="text-[#0044CC] font-bold border-l-4 border-[#F58220] pl-6 md:pl-8 py-2 italic">
                Blue Ox Kampus exists to answer that directly. We are raising a generation of African builders, creatives, and storytellers who are discipled in their faith and excellent in their craft.
              </p>
            </div>
          </div>
          <div className="space-y-8 md:space-y-12">
             <BlueprintCard title="Operation_Framework" step="ALPHA">
                <div className="space-y-6 font-libre text-base md:text-lg text-gray-600 leading-relaxed">
                  <p>
                    We build Christian creative hubs across Africa and partner with churches to transform underused spaces into creative environments for Gen Z and Gen Alpha. We bring young people into spaces where they can <span className="text-[#0044CC] font-bold">belong, build, and become.</span>
                  </p>
                  <p>
                    We train them. We disciple them. We run weekly competitions. And we deploy the best of them into real work with founders, ministries, and startups around the world.
                  </p>
                </div>
             </BlueprintCard>

             <div className="relative p-8 md:p-12 bg-[#0044CC] rounded-xl overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Quote className="text-orange-400 w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 opacity-20" />
                <p className="text-2xl md:text-3xl font-libre italic text-white leading-tight relative z-10">
                  "This is not a youth program. This is not a side ministry. This is a movement raising builders who will spend their lives shaping culture with what is true, beautiful, and redemptive."
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* STRATEGIC PARTNER */}
      <Section id="partner" className="bg-gray-50 border-y-2 border-gray-100">
        <div className="max-w-5xl mx-auto relative">
          <p className="font-mono text-[#F58220] font-black text-xs uppercase tracking-[0.5em] mb-8 md:mb-12">/ INFRA_PARTNER</p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
             <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-[#0044CC] text-white rounded-2xl flex items-center justify-center shadow-2xl relative">
               <KingdomChaplainLogo className="h-12 w-12 md:h-16 md:h-16" />
               <div className="absolute -bottom-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-[#F58220] rounded-lg animate-pulse" />
             </div>
             <div>
                <h3 className="text-5xl md:text-6xl font-bebas text-[#0044CC] mb-2 uppercase">Kingdom Chaplain</h3>
                <p className="text-[#F58220] font-mono font-black text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 uppercase">Strategic Hub Expansion Partner</p>
                <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-500 leading-relaxed font-libre">
                  <p>
                    Through our partnership with Kingdom Chaplain, we are expanding the Blue Ox model across Uganda, Malawi, and South Africa. Kingdom Chaplain brings trusted church relationships, local access, and on-the-ground community infrastructure. 
                  </p>
                  <p className="font-bold text-gray-900 italic">
                    "Together, we are not just opening spaces. We are building the spiritual, creative, and technical infrastructure needed to shape how Africa’s next generation creates, builds, and leads."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* HIRE A POD */}
      <Section id="hireapod" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-start">
          <div>
            <p className="font-mono text-[#F58220] font-black text-xs uppercase tracking-[0.5em] mb-6 md:mb-8">/ POD_SYSTEM_V4</p>
            <h2 className="text-6xl md:text-9xl font-bebas text-[#0044CC] uppercase mb-8 md:mb-12">HIRE A <br /><span className="text-gray-100">BUILDER</span> <br />POD.</h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 md:mb-12 font-libre italic">
              Every builder earns their place through weekly hackathons judged by senior mentors. We deploy competition-ranked talent directly into your backlog.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-bebas text-gray-400 text-sm uppercase tracking-[0.3em]">DEPLOYABLE_ROLES</h4>
              {podRoles.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-4 group hover:border-[#0044CC] transition-colors">
                  <span className="font-bebas text-xl md:text-2xl text-[#0044CC] uppercase">{item.role}</span>
                  <span className="text-xs md:text-sm text-gray-400 font-libre italic group-hover:text-gray-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#0044CC] p-8 md:p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform" />
               <p className="text-7xl md:text-8xl font-bebas mb-2 uppercase">200</p>
               <p className="text-lg md:text-xl font-bebas text-blue-200 mb-8 uppercase tracking-widest">EUR / Person / Week</p>
               <div className="flex items-center justify-between">
                 <p className="font-libre italic text-[10px] md:text-xs uppercase opacity-60">Solo Pod · 12-week Cycle</p>
                 <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
               </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-100 hover:border-[#0044CC] transition-all group">
               <div className="flex justify-between mb-2">
                  <p className="text-7xl md:text-8xl font-bebas text-[#0044CC] uppercase">167</p>
                  <div className="bg-orange-50 text-[#F58220] h-fit px-2 py-1 rounded-lg font-bebas text-xs md:text-sm uppercase tracking-widest border border-orange-100">Save 17%</div>
               </div>
               <p className="text-lg md:text-xl font-bebas text-gray-400 mb-8 uppercase tracking-widest">EUR / Person / Week</p>
               <div className="flex items-center justify-between">
                 <p className="font-libre italic text-[10px] md:text-xs uppercase text-gray-400">Team Pod · 3 People Min.</p>
                 <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-200 group-hover:text-[#0044CC] transition-colors" />
               </div>
            </div>

            <BlueprintCard title="Pod_Inclusions">
               <ul className="space-y-4 font-libre italic text-xs md:text-sm">
                 {[
                   'Dedicated Pod Coordinator',
                   'Weekly Progress Reports',
                   'Quality Assurance Layer',
                   'UTC+3 Timezone Overlap',
                   '3-Day Replacement Match'
                 ].map((perk, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-500 uppercase tracking-wider">
                     <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> {perk}
                   </li>
                 ))}
               </ul>
               <Button variant="primary" className="w-full mt-8 md:mt-10 py-5 text-xl md:text-2xl">Request a Pod Match</Button>
            </BlueprintCard>
          </div>
        </div>
      </Section>

      {/* PROOF */}
      <Section id="proof" className="bg-[#0044CC] text-white relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
           <div>
              <p className="font-mono text-orange-400 font-black text-xs uppercase tracking-[0.5em] mb-6 md:mb-8">/ PROOF_DATA_LOG</p>
              <h2 className="text-8xl sm:text-9xl md:text-[14rem] font-bebas mb-6 leading-[0.8] tracking-tight">$2,500</h2>
              <h3 className="text-4xl md:text-5xl font-bebas mb-8 md:mb-10 uppercase tracking-tight">ONE ACTIVATION. <br />ONE SPACE. <br />EVERYTHING CHANGED.</h3>
              <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-blue-50/80 leading-relaxed mb-10 md:mb-12 font-libre italic">
                <p>
                  At Worship Harvest Mbarara, a church building that sat underused through the week became a creative powerhouse. With $2,500, we installed power, internet, and simple workspace. Within weeks, 300 students from three schools were showing up regularly to build.
                </p>
                <p className="font-bold text-white not-italic">
                  "Two church-based activations. $5,000 total. 300+ young builders reached weekly. Roughly $42 per builder annually."
                </p>
              </div>
              <div className="p-8 md:p-10 bg-white/10 rounded-2xl border border-white/10 relative">
                 <Quote className="text-orange-400 w-10 h-10 md:w-12 md:h-12 mb-6 md:mb-8 opacity-40" />
                 <p className="text-2xl md:text-3xl font-libre italic mb-8 md:mb-10 tracking-tight leading-tight">“We built this church for $50,000. It sat empty most of the week. $2,500 later, it became a place for students to build. This is what the Church should look like.”</p>
                 <div className="flex flex-col">
                    <span className="font-bebas text-xl text-white uppercase tracking-widest">Ps. Flo and Stephen Ssenyonjo</span>
                    <span className="font-mono text-[8px] md:text-[9px] text-blue-200 uppercase mt-1">Worship Harvest Mbarara</span>
                 </div>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: 'Cost per activation', value: '$2.5K' },
                { label: 'Young builders weekly', value: '300+' },
                { label: 'Hubs Activated', value: '2' },
                { label: 'Per builder / year', value: '$42' },
                { label: 'Attendance delta', value: '50%+' },
                { label: 'Schools involved', value: '3' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-6 md:p-10 rounded-2xl border border-white/5 text-center group hover:border-orange-400/50 transition-colors">
                   <p className="text-4xl md:text-6xl font-bebas text-orange-400 mb-1 md:mb-2 uppercase group-hover:scale-110 transition-transform">{stat.value}</p>
                   <p className="text-[9px] font-mono font-bold text-blue-200 uppercase tracking-widest leading-tight">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* CLIENTS */}
      <Section id="clients" className="bg-white">
        <div className="mb-12 md:mb-24 flex flex-col items-center text-center">
          <p className="font-mono text-[#F58220] font-black text-xs uppercase tracking-[0.5em] mb-4 md:mb-6">/ PRODUCTION_LOG</p>
          <h2 className="text-6xl md:text-9xl font-bebas text-[#0044CC] uppercase">STUDIOS SHIPPED.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
           {[
             { icon: <Shield />, name: 'Haiven', badge: 'Counter-trafficking', body: 'AI platform backed by Eagle Venture Fund. Blue Ox builders contributed software development to products designed to protect vulnerable people.', proof: '50K+ children protected' },
             { icon: <Eye />, name: 'DevShield', badge: 'Child safety', body: 'Real-time child safety plugin for Roblox designed to block known predators before harm reaches children.', proof: 'Protecting children at scale' },
             { icon: <Database />, name: 'OneHaven', badge: 'AI safety', body: 'Privacy-first AI product helping protect families from predators, scams, and harmful content.', proof: '100+ families on waitlist' },
             { icon: <PlayCircle />, name: 'Dig in Vision', badge: 'Industrial XR', body: 'Europe’s leading industrial VR simulator, used for real-world training across industrial environments.', proof: 'Industrial VR tech' },
           ].map((client, i) => (
             <BlueprintCard key={i} title="Project_Data">
                <div className="flex justify-between items-start mb-6 md:mb-8">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#F58220]">
                        {client.icon}
                      </div>
                      <h4 className="text-2xl md:text-4xl font-bebas text-[#0044CC] uppercase">{client.name}</h4>
                   </div>
                   <div className="bg-[#0044CC] px-2 py-1 rounded text-white text-[8px] md:text-[10px] font-bebas uppercase tracking-widest">{client.badge}</div>
                </div>
                <p className="text-gray-400 font-libre italic text-sm md:text-base leading-relaxed mb-8 md:mb-10 flex-grow">{client.body}</p>
                <div className="pt-6 border-t border-gray-100 flex items-center gap-3">
                   <CheckCircle className="w-4 h-4 text-[#F58220] flex-shrink-0" />
                   <p className="text-[10px] md:text-xs font-bebas text-[#0044CC] uppercase tracking-widest">{client.proof}</p>
                </div>
             </BlueprintCard>
           ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-white pt-24 md:pt-32 pb-12 md:pb-16 border-t-4 md:border-t-8 border-[#0044CC]">
        <div className="container mx-auto px-5 md:px-6 max-w-7xl text-center">
           <div className="flex justify-center mb-8 md:mb-10">
              <BlueOxLogo className="h-12 w-12 md:h-16 md:h-16" />
           </div>
           <p className="text-[#F58220] font-mono font-black text-xs uppercase tracking-[0.4em] mb-8 md:mb-10">/ DISCIPLING_CULTURE</p>
           <p className="text-4xl md:text-8xl font-bebas text-[#0044CC] uppercase mb-16 md:mb-20 max-w-4xl mx-auto">RAISING THE BUILDERS TO SHAPE THE FUTURE.</p>
           
           <div className="pt-10 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 font-mono text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">
              <p>System_State: ACTIVE // 2026 // © BLUE OX KAMPUS</p>
              <div className="flex gap-8 md:gap-10">
                <a href="#" className="hover:text-[#0044CC]">PRIVACY_DOC</a>
                <a href="#" className="hover:text-[#0044CC]">IMPACT_REPORT_24</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
