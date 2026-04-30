'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';

type StageKey = 'ideation' | 'mvp' | 'revenue';

const TIERS: Record<StageKey, {
  free: string; week: number; note: string;
  isOrange: boolean; formLabel: string; offerLabel: string;
}> = {
  ideation: {
    free: '8 Weeks Free', week: 9,
    note: 'You have a vision. We help you build from zero — disciplined, supervised, and shipping within 7 days of kickoff.',
    isOrange: false, formLabel: 'Ideation / Concept', offerLabel: '8 Weeks Free → $199/wk',
  },
  mvp: {
    free: '6 Weeks Free', week: 7,
    note: "You've built something real. We help you get it across the finish line and into the hands of your users.",
    isOrange: false, formLabel: 'MVP Stage', offerLabel: '6 Weeks Free → $199/wk',
  },
  revenue: {
    free: '4 Weeks Free', week: 5,
    note: "You're live and growing. We clear your backlog so you stay focused on your customers and your mission.",
    isOrange: true, formLabel: 'Post-Revenue', offerLabel: '4 Weeks Free → $199/wk',
  },
};

const ROLES = ['Developer', 'Designer', 'Marketer', 'Sales', 'Creator', 'Ops'];

// styles moved to globals.css
const _cohortStyles = `
:root {
  --co-blue:        #0044CC;
  --co-blue-dark:   #0033AA;
  --co-blue-light:  rgba(0,68,204,0.06);
  --co-orange:      #F58220;
  --co-orange-light:rgba(245,130,32,0.08);
  --co-black:       #111111;
  --co-cream:       #FDFAF4;
  --co-cream-dark:  #F5F0E8;
  --co-white:       #FFFFFF;
  --co-border:      #E2DDD4;
  --co-muted:       #7A7060;
  --co-text:        #1A1209;
  --co-font-h:      'Exo 2', 'Arial Narrow', Impact, sans-serif;
  --co-font-b:      'DM Sans', -apple-system, Helvetica, Arial, sans-serif;
  --co-font-s:      'Playfair Display', Georgia, 'Times New Roman', serif;
  --co-font-m:      'JetBrains Mono', 'Courier New', monospace;
  --co-ease:        cubic-bezier(0.4, 0, 0.2, 1);
}
.co-main {
  background: var(--co-cream);
  color: var(--co-text);
  min-height: 100vh;
}
/* PRICING STRIP */
.co-pricing-strip {
  background: var(--co-black); padding: 1.5rem 1.25rem;
  display: flex; flex-direction: column; gap: 10px;
}
.co-strip-numbers { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }
.co-strip-free {
  font-family: var(--co-font-h); font-weight: 900; font-size: 32px;
  color: var(--co-orange); text-transform: uppercase; line-height: 1; letter-spacing: -0.02em;
}
.co-strip-arrow { font-family: var(--co-font-m); font-size: 14px; color: rgba(255,255,255,0.3); }
.co-strip-paid {
  font-family: var(--co-font-h); font-weight: 900; font-size: 32px;
  color: #ffffff; line-height: 1; letter-spacing: -0.02em;
}
.co-strip-paid small { font-size: 16px; font-weight: 400; font-family: var(--co-font-b); }
.co-strip-note { font-family: var(--co-font-b); font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.5; }
.co-strip-note strong { color: rgba(255,255,255,0.75); font-weight: 500; }
/* SECTION LABELS */
.co-section-wrap { padding: 3rem 1.25rem 0; }
.co-section-label {
  font-family: var(--co-font-m); font-size: 10px; font-weight: 600;
  letter-spacing: 0.18em; color: var(--co-orange); text-transform: uppercase;
  margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;
}
.co-section-label::before { content: '/'; }
.co-selector-prompt { font-family: var(--co-font-b); font-size: 13px; color: var(--co-muted); margin-bottom: 1.25rem; }
/* STAGES */
.co-stages-wrap { padding: 0 1.25rem; }
.co-stages { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--co-border); }
.co-stage-btn {
  background: var(--co-white); padding: 1.1rem 1.25rem;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  cursor: pointer; border: none; border-left: 4px solid transparent;
  border-bottom: 1px solid var(--co-border); text-align: left; width: 100%;
  transition: background 0.2s var(--co-ease), border-color 0.2s;
}
.co-stage-btn:last-child { border-bottom: none; }
.co-stage-btn:hover { background: var(--co-cream); }
.co-stage-active { border-left-color: var(--co-blue) !important; background: var(--co-blue-light) !important; }
.co-stage-active-o { border-left-color: var(--co-orange) !important; background: var(--co-orange-light) !important; }
.co-stage-left { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; }
.co-stage-dot {
  width: 10px; height: 10px; border-radius: 50%;
  border: 2px solid var(--co-border); flex-shrink: 0; transition: all 0.2s;
}
.co-dot-blue { background: var(--co-blue) !important; border-color: var(--co-blue) !important; }
.co-dot-orange { background: var(--co-orange) !important; border-color: var(--co-orange) !important; }
.co-stage-text { min-width: 0; }
.co-stage-name {
  font-family: var(--co-font-h); font-weight: 800; font-size: 14px;
  text-transform: uppercase; letter-spacing: 0.04em; color: var(--co-text); display: block; line-height: 1.2;
}
.co-name-blue { color: var(--co-blue) !important; }
.co-name-orange { color: var(--co-orange) !important; }
.co-stage-desc { font-family: var(--co-font-b); font-size: 12px; color: var(--co-muted); display: block; margin-top: 2px; }
.co-stage-right { text-align: right; flex-shrink: 0; }
.co-stage-free {
  font-family: var(--co-font-h); font-weight: 800; font-size: 14px;
  color: var(--co-blue); text-transform: uppercase; display: block; line-height: 1.2;
}
.co-free-blue { color: var(--co-blue) !important; }
.co-free-orange { color: var(--co-orange) !important; }
.co-stage-then { font-family: var(--co-font-b); font-size: 11px; color: var(--co-muted); display: block; margin-top: 2px; }
/* OFFER GRID */
.co-offer-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0; border: 1px solid var(--co-border); border-top: none; background: var(--co-border);
}
.co-offer-cell { padding: 1.25rem; background: var(--co-blue); }
.co-offer-cell-wh { background: var(--co-white) !important; }
.co-offer-eye {
  font-family: var(--co-font-m); font-size: 9px; font-weight: 600;
  letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 6px;
  color: rgba(255,255,255,0.45);
}
.co-offer-cell-wh .co-offer-eye { color: var(--co-orange) !important; }
.co-offer-big {
  font-family: var(--co-font-h); font-weight: 900; font-size: 26px;
  line-height: 1; margin-bottom: 4px; color: var(--co-white); letter-spacing: -0.02em;
}
.co-offer-big-blue { color: var(--co-blue) !important; }
.co-offer-big small { font-size: 14px; font-weight: 400; font-family: var(--co-font-b); }
.co-offer-sm { font-family: var(--co-font-b); font-size: 11px; line-height: 1.4; color: rgba(255,255,255,0.45); }
.co-offer-sm-muted { color: var(--co-muted) !important; }
.co-offer-context {
  background: var(--co-cream-dark); padding: 1rem 1.25rem;
  font-family: var(--co-font-s); font-size: 14px; font-style: italic;
  color: var(--co-muted); line-height: 1.6;
  border: 1px solid var(--co-border); border-top: none;
}
/* SPOTS */
.co-spots-wrap { padding: 1.5rem 1.25rem; border-bottom: 1px solid var(--co-border); margin-top: 2rem; }
.co-spots-track { display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap; }
.co-spot { width: 24px; height: 8px; border-radius: 0; background: var(--co-blue); }
.co-spot-gone { background: var(--co-border) !important; }
.co-spots-txt { font-family: var(--co-font-b); font-size: 13px; color: var(--co-muted); }
.co-spots-txt strong { color: var(--co-blue); font-weight: 600; }
/* PROOF */
.co-proof {
  margin: 2.5rem 1.25rem;
  border-left: 4px solid var(--co-orange); padding: 1rem 1.25rem;
  background: var(--co-white); border-top: 1px solid var(--co-border);
  border-right: 1px solid var(--co-border); border-bottom: 1px solid var(--co-border);
}
.co-proof-title {
  font-family: var(--co-font-m); font-weight: 600; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.14em; color: var(--co-orange); margin-bottom: 6px;
}
.co-proof-body { font-family: var(--co-font-b); font-size: 13px; color: var(--co-muted); line-height: 1.6; }
/* HOW IT WORKS */
.co-how-wrap { padding: 3rem 1.25rem 0; }
.co-big-label {
  font-family: var(--co-font-h); font-weight: 900;
  font-size: clamp(42px, 11vw, 72px); text-transform: uppercase; color: var(--co-blue);
  line-height: 0.92; letter-spacing: -0.02em; margin-bottom: 2.5rem;
}
.co-steps-grid {
  display: flex; flex-direction: column; gap: 1px;
  background: var(--co-border); border: 1px solid var(--co-border);
}
.co-step { background: var(--co-white); padding: 1.5rem 1.25rem; transition: background 0.2s; }
.co-step:hover { background: var(--co-cream); }
.co-step-num {
  font-family: var(--co-font-m); font-weight: 700; font-size: 11px;
  color: var(--co-orange); letter-spacing: 0.1em; margin-bottom: 0.6rem; display: block;
}
.co-step-title {
  font-family: var(--co-font-h); font-weight: 800; font-size: 15px;
  text-transform: uppercase; letter-spacing: 0.04em; color: var(--co-blue); margin-bottom: 0.5rem;
}
.co-step-desc { font-family: var(--co-font-b); font-size: 14px; color: var(--co-muted); line-height: 1.6; }
/* FORM */
.co-rule { border: none; border-top: 2px solid var(--co-border); margin: 3rem 0 0; }
.co-form-section { padding: 2.5rem 1.25rem 4rem; }
.co-form-title {
  font-family: var(--co-font-h); font-weight: 900;
  font-size: clamp(36px, 9vw, 54px); text-transform: uppercase; color: var(--co-blue);
  line-height: 0.92; letter-spacing: -0.02em; margin-bottom: 0.5rem;
}
.co-form-sub {
  font-family: var(--co-font-s); font-size: 16px; font-style: italic;
  color: var(--co-muted); margin-bottom: 2rem;
}
.co-selected-offer {
  background: var(--co-blue-light); border: 1px solid rgba(0,68,204,0.2);
  padding: 0.85rem 1rem; margin-bottom: 1.5rem;
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
}
.co-selected-offer-orange { background: var(--co-orange-light) !important; border-color: rgba(245,130,32,0.25) !important; }
.co-sel-stage { font-family: var(--co-font-m); font-size: 10px; color: var(--co-muted); text-transform: uppercase; letter-spacing: 0.1em; }
.co-sel-offer { font-family: var(--co-font-h); font-weight: 900; font-size: 16px; color: var(--co-blue); text-transform: uppercase; white-space: nowrap; letter-spacing: 0.02em; }
.co-sel-offer-orange { color: var(--co-orange) !important; }
.co-field { margin-bottom: 1.1rem; }
.co-field label {
  display: block; font-family: var(--co-font-m); font-size: 9px;
  font-weight: 600; letter-spacing: 0.16em; color: var(--co-muted);
  text-transform: uppercase; margin-bottom: 6px;
}
.co-field input[type=text],
.co-field input[type=email],
.co-field select,
.co-field textarea {
  display: block; width: 100%; background: var(--co-white);
  border: 1px solid var(--co-border); border-radius: 0; padding: 13px 14px;
  font-family: var(--co-font-b); font-size: 16px; color: var(--co-text); outline: none;
  -webkit-appearance: none; appearance: none; transition: border-color 0.2s var(--co-ease);
}
.co-field input[type=text]:focus,
.co-field input[type=email]:focus,
.co-field select:focus,
.co-field textarea:focus { border-color: var(--co-blue); background: var(--co-white); }
.co-field input::placeholder,
.co-field textarea::placeholder { color: #BBB4A8; }
.co-field select {
  color: var(--co-muted); cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A7060' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center; background-size: 12px 8px; padding-right: 40px;
}
.co-field textarea { resize: vertical; min-height: 90px; line-height: 1.6; }
.co-field-err { border-color: #D9534F !important; }
.co-g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.co-roles { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.co-role {
  border: 1px solid var(--co-border); background: var(--co-white);
  padding: 11px 12px; cursor: pointer; display: flex; align-items: center; gap: 9px;
  transition: all 0.2s var(--co-ease); user-select: none;
}
.co-role:hover { border-color: var(--co-blue); }
.co-role-sel { border-color: var(--co-blue) !important; background: var(--co-blue-light) !important; }
.co-role-box {
  width: 14px; height: 14px; border: 1.5px solid var(--co-border);
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  transition: all 0.15s; border-radius: 0;
}
.co-role-box-sel { background: var(--co-blue) !important; border-color: var(--co-blue) !important; }
.co-role-box-sel::after {
  content: ''; width: 6px; height: 4px;
  border-left: 1.5px solid #fff; border-bottom: 1.5px solid #fff;
  transform: rotate(-45deg) translateY(-1px); display: block;
}
.co-role-lbl { font-family: var(--co-font-b); font-size: 13px; color: var(--co-muted); font-weight: 500; }
.co-role-lbl-sel { color: var(--co-blue) !important; font-weight: 600 !important; }
.co-err { font-family: var(--co-font-b); font-size: 12px; color: #D9534F; margin-top: 8px; }
.co-err a { color: #D9534F; }
.co-submit-btn {
  display: block; width: 100%; background: var(--co-blue); color: var(--co-white);
  border: none; border-radius: 0; padding: 18px; cursor: pointer;
  font-family: var(--co-font-h); font-weight: 900; font-size: 18px;
  letter-spacing: 0.08em; text-transform: uppercase; margin-top: 1.5rem; min-height: 56px;
  transition: background 0.25s var(--co-ease), transform 0.15s;
}
.co-submit-btn:hover { background: var(--co-blue-dark); transform: translateY(-2px); }
.co-submit-btn:active { transform: translateY(0); }
.co-submit-btn:disabled { background: #BBB4A8; cursor: not-allowed; transform: none; }
.co-fine {
  font-family: var(--co-font-s); font-size: 12px; font-style: italic;
  color: #BBB4A8; text-align: center; margin-top: 1rem; line-height: 1.7;
}
/* SUCCESS */
.co-success { padding: 4rem 1.25rem; text-align: center; }
.co-success-mark {
  width: 56px; height: 56px; border: 2px solid var(--co-blue);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem; font-size: 22px; color: var(--co-blue);
}
.co-success-title {
  font-family: var(--co-font-h); font-weight: 900;
  font-size: clamp(36px, 9vw, 54px); text-transform: uppercase; color: var(--co-blue);
  line-height: 0.92; letter-spacing: -0.02em; margin-bottom: 1.25rem;
}
.co-success-body { font-family: var(--co-font-s); font-size: 16px; font-style: italic; color: var(--co-muted); line-height: 1.8; }
/* RESPONSIVE — 480px */
@media (min-width: 480px) {
  .co-eyebrow-wrap, .co-hero, .co-section-wrap, .co-how-wrap,
  .co-form-section, .co-spots-wrap, .co-proof { padding-left: 2rem; padding-right: 2rem; }
  .co-stages-wrap { padding-left: 2rem; padding-right: 2rem; }
  .co-roles { grid-template-columns: 1fr 1fr 1fr; }
  .co-pricing-strip { flex-direction: row; align-items: center; padding: 1.5rem 2rem; }
  .co-strip-note { margin-left: auto; text-align: right; }
}
/* RESPONSIVE — 768px */
@media (min-width: 768px) {
  .co-eyebrow-wrap, .co-hero, .co-section-wrap, .co-how-wrap,
  .co-form-section, .co-spots-wrap, .co-proof { padding-left: 3rem; padding-right: 3rem; }
  .co-stages-wrap { padding-left: 3rem; padding-right: 3rem; }
  .co-pricing-strip { padding: 1.5rem 3rem; }
  .co-h1 { font-size: clamp(80px, 10vw, 130px); }
  .co-tagline { font-size: clamp(22px, 2.5vw, 30px); }
  .co-steps-grid { flex-direction: row; }
  .co-step { flex: 1; }
  .co-offer-grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
  .co-form-section { max-width: 720px; }
}
/* RESPONSIVE — 1024px */
@media (min-width: 1024px) {
  .co-eyebrow-wrap, .co-hero, .co-section-wrap, .co-how-wrap,
  .co-form-section, .co-spots-wrap, .co-proof { padding-left: 4rem; padding-right: 4rem; }
  .co-stages-wrap { padding-left: 4rem; padding-right: 4rem; }
  .co-pricing-strip { padding: 1.5rem 4rem; }
}
`;

export default function CohortPage() {
  const [activeStage, setActiveStage] = useState<StageKey | null>('revenue');
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showRequiredErr, setShowRequiredErr] = useState(false);
  const [showSubmitErr, setShowSubmitErr] = useState(false);
  const [fieldErrs, setFieldErrs] = useState<Record<string, boolean>>({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [formStage, setFormStage] = useState<StageKey | ''>('revenue');
  const [vision, setVision] = useState('');
  const [hearAbout, setHearAbout] = useState('');

  const handleSelectStage = (stage: StageKey) => {
    setActiveStage(stage);
    setFormStage(stage);
  };

  const handleFormStageChange = (val: string) => {
    const stage = val as StageKey | '';
    setFormStage(stage);
    if (stage) setActiveStage(stage);
  };

  const toggleRole = (role: string) => {
    setSelectedRoles(prev =>
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleSubmit = async () => {
    const stage = formStage || activeStage || '';
    const errs: Record<string, boolean> = {};
    if (!name.trim()) errs.name = true;
    if (!email.trim()) errs.email = true;
    if (!stage) errs.stage = true;
    if (!vision.trim()) errs.vision = true;

    if (Object.keys(errs).length > 0) {
      setFieldErrs(errs);
      setShowRequiredErr(true);
      return;
    }

    setFieldErrs({});
    setShowRequiredErr(false);
    setShowSubmitErr(false);
    setSubmitting(true);

    try {
      const tier = stage ? TIERS[stage as StageKey] : null;
      const res = await fetch('https://formspree.io/f/mdaboaea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          stage,
          roles: selectedRoles.join(', ') || 'Not selected',
          vision: vision.trim(),
          source: hearAbout || 'Not specified',
          offer: tier?.offerLabel || '',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('failed');
      }
    } catch {
      setSubmitting(false);
      setShowSubmitErr(true);
    }
  };

  const tier = activeStage ? TIERS[activeStage] : null;
  const formTierKey = (formStage || activeStage) as StageKey | null;
  const formTier = formTierKey ? TIERS[formTierKey] : null;

  return (
    <>
      <Header />

      <main className="co-main">

        {/* HERO */}
        <section className="relative bg-white pt-28 md:pt-36 pb-24 md:pb-28">
          <div className="max-w-6xl mx-auto px-6 sm:px-6">
            <Reveal>
              <div className="text-left mb-20 max-w-4xl">
                <div className="inline-flex items-center gap-2 border border-blue-100 rounded-full px-4 py-2 mb-10 shadow-sm">
                  <span className="text-[#F58220] text-xs font-mono font-bold tracking-wider uppercase">/ COHORT 01</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-600 text-sm font-libre italic">For Christian founders building redemptive technology.</span>
                </div>
                <h1 className="font-bebas text-[5.5rem] sm:text-[7rem] md:text-[10rem] mb-12 text-[#0044CC] leading-[1.1] tracking-normal uppercase text-left">YOU&apos;VE<br />BUILT IT.<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>NOW LET&apos;S</span><br />SHIP IT.</h1>
                <p className="font-libre text-2xl md:text-4xl text-gray-900 mb-4 italic">
                  We fix that.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-start mt-12">
                  <a href="#request" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA]">
                    REQUEST YOUR POD →
                  </a>
                  <a href="#how" className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0044CC] hover:text-white">
                    SEE HOW IT WORKS
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRICING STRIP */}
        <div className="co-pricing-strip">
          <div className="co-strip-numbers">
            <span className="co-strip-free">4–8 Weeks Free</span>
            <span className="co-strip-arrow">→</span>
            <span className="co-strip-paid">$199<small>/wk</small></span>
          </div>
          <p className="co-strip-note">
            <strong>Full 3-builder pod.</strong> Not per person. One team, one price.
          </p>
        </div>

        {/* STAGE SELECTOR */}
        <Reveal>
          <div className="co-section-wrap">
            <p className="co-section-label">Select Your Stage</p>
            <p className="co-selector-prompt">
              Your free period depends on where you are. Pick your stage to see your exact offer.
            </p>
          </div>
        </Reveal>

        <div className="co-stages-wrap">
          <div className="co-stages">
            {/* Ideation */}
            <button
              className={`co-stage-btn${activeStage === 'ideation' ? ' co-stage-active' : ''}`}
              onClick={() => handleSelectStage('ideation')}
              aria-label="Ideation stage"
            >
              <div className="co-stage-left">
                <div className={`co-stage-dot${activeStage === 'ideation' ? ' co-dot-blue' : ''}`} />
                <div className="co-stage-text">
                  <span className={`co-stage-name${activeStage === 'ideation' ? ' co-name-blue' : ''}`}>
                    Ideation / Concept
                  </span>
                  <span className="co-stage-desc">I have an idea. Nothing built yet.</span>
                </div>
              </div>
              <div className="co-stage-right">
                <span className={`co-stage-free${activeStage === 'ideation' ? ' co-free-blue' : ''}`}>
                  8 Weeks Free
                </span>
                <span className="co-stage-then">then $199/wk</span>
              </div>
            </button>

            {/* MVP */}
            <button
              className={`co-stage-btn${activeStage === 'mvp' ? ' co-stage-active' : ''}`}
              onClick={() => handleSelectStage('mvp')}
              aria-label="MVP stage"
            >
              <div className="co-stage-left">
                <div className={`co-stage-dot${activeStage === 'mvp' ? ' co-dot-blue' : ''}`} />
                <div className="co-stage-text">
                  <span className={`co-stage-name${activeStage === 'mvp' ? ' co-name-blue' : ''}`}>
                    MVP Stage
                  </span>
                  <span className="co-stage-desc">Something exists. Not launched yet.</span>
                </div>
              </div>
              <div className="co-stage-right">
                <span className={`co-stage-free${activeStage === 'mvp' ? ' co-free-blue' : ''}`}>
                  6 Weeks Free
                </span>
                <span className="co-stage-then">then $199/wk</span>
              </div>
            </button>

            {/* Post-Revenue */}
            <button
              className={`co-stage-btn${activeStage === 'revenue' ? ' co-stage-active-o' : ''}`}
              onClick={() => handleSelectStage('revenue')}
              aria-label="Post-revenue stage"
            >
              <div className="co-stage-left">
                <div className={`co-stage-dot${activeStage === 'revenue' ? ' co-dot-orange' : ''}`} />
                <div className="co-stage-text">
                  <span className={`co-stage-name${activeStage === 'revenue' ? ' co-name-orange' : ''}`}>
                    Post-Revenue
                  </span>
                  <span className="co-stage-desc">Live product. Paying customers.</span>
                </div>
              </div>
              <div className="co-stage-right">
                <span className={`co-stage-free${activeStage === 'revenue' ? ' co-free-orange' : ''}`}>
                  4 Weeks Free
                </span>
                <span className="co-stage-then">then $199/wk</span>
              </div>
            </button>
          </div>
        </div>

        {/* OFFER PANEL */}
        {tier && (
          <div className="co-stages-wrap">
            <div className="co-offer-grid">
              <div className="co-offer-cell">
                <p className="co-offer-eye">Your free period</p>
                <p className="co-offer-big">{tier.free}</p>
                <p className="co-offer-sm">Donate what you can. No minimum.</p>
              </div>
              <div className="co-offer-cell co-offer-cell-wh">
                <p className="co-offer-eye">From week {tier.week}</p>
                <p className="co-offer-big co-offer-big-blue">$199<small>/wk</small></p>
                <p className="co-offer-sm co-offer-sm-muted">Full pod. 3 builders. Not per person.</p>
              </div>
              <div className="co-offer-cell">
                <p className="co-offer-eye">Kickoff</p>
                <p className="co-offer-big">7 Days</p>
                <p className="co-offer-sm">Request to first sprint.</p>
              </div>
              <div className="co-offer-cell co-offer-cell-wh">
                <p className="co-offer-eye">Accountability</p>
                <p className="co-offer-big co-offer-big-blue">Weekly</p>
                <p className="co-offer-sm co-offer-sm-muted">Friday Pod Report.</p>
              </div>
            </div>
            <p className="co-offer-context">{tier.note}</p>
          </div>
        )}

        {/* SPOTS */}
        <div className="co-spots-wrap">
          <div className="co-spots-track" aria-label="7 of 10 spots remaining">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className={`co-spot${i >= 7 ? ' co-spot-gone' : ''}`} />
            ))}
          </div>
          <p className="co-spots-txt">
            <strong>7 spots remaining</strong> across all tiers. We cap at 10 this cohort.
          </p>
        </div>

        {/* PROOF */}
        <Reveal>
          <div className="co-proof">
            <p className="co-proof-title">Already shipped for</p>
            <p className="co-proof-body">
              Haiven (counter-trafficking AI · Eagle Venture Fund) · DevShield (child safety · Roblox) ·
              By The Fruit ($100M+ kingdom portfolio) · Dig In Vision (industrial VR · Europe).
              We build for founders building things that matter.
            </p>
          </div>
        </Reveal>

        {/* HOW IT WORKS */}
        <Reveal>
          <div className="co-how-wrap" id="how">
            <p className="co-section-label">How It Works</p>
            <p className="co-big-label">THREE<br />STEPS.<br />THAT&apos;S IT.</p>
          </div>
        </Reveal>

        <div className="co-stages-wrap" style={{ paddingBottom: '3rem' }}>
          <div className="co-steps-grid">
            {[
              {
                num: '01',
                title: 'Tell us what you need',
                desc: 'Fill in the form below. Your vision, your stage, the roles you need. Takes 2 minutes.',
              },
              {
                num: '02',
                title: 'We confirm fit in 24 hours',
                desc: 'We only work with Christian founders building redemptive technology. Every submission reviewed carefully.',
              },
              {
                num: '03',
                title: 'You ship. We supervise.',
                desc: 'Pod starts within 7 days. Campus supervisors keep builders accountable. Friday report every week.',
              },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="co-step">
                  <span className="co-step-num">{step.num}</span>
                  <p className="co-step-title">{step.title}</p>
                  <p className="co-step-desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FORM */}
        <hr className="co-rule" />
        <div className="co-form-section" id="request">
          {!submitted ? (
            <div>
              <p className="co-section-label">Request Your Pod</p>
              <p className="co-form-title">JOIN<br />COHORT 01.</p>
              <p className="co-form-sub">We respond within 24 hours. No hard sell — just a conversation.</p>

              {formTier && (
                <div className={`co-selected-offer${formTier.isOrange ? ' co-selected-offer-orange' : ''}`}>
                  <span className="co-sel-stage">{formTier.formLabel}</span>
                  <span className={`co-sel-offer${formTier.isOrange ? ' co-sel-offer-orange' : ''}`}>
                    {formTier.offerLabel}
                  </span>
                </div>
              )}

              <div className="co-field">
                <label htmlFor="co-fn">Your Name *</label>
                <input
                  id="co-fn" type="text"
                  placeholder="First and last name"
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={fieldErrs.name ? 'co-field-err' : ''}
                />
              </div>

              <div className="co-g2">
                <div className="co-field">
                  <label htmlFor="co-fe">Email *</label>
                  <input
                    id="co-fe" type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={fieldErrs.email ? 'co-field-err' : ''}
                  />
                </div>
                <div className="co-field">
                  <label htmlFor="co-fc">Company / Project</label>
                  <input
                    id="co-fc" type="text"
                    placeholder="What you're building"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <div className="co-field">
                <label htmlFor="co-fst">Your Stage *</label>
                <select
                  id="co-fst"
                  value={formStage}
                  onChange={e => handleFormStageChange(e.target.value)}
                  className={fieldErrs.stage ? 'co-field-err' : ''}
                >
                  <option value="">Select your stage...</option>
                  <option value="ideation">Ideation / Concept — idea only, nothing built</option>
                  <option value="mvp">MVP Stage — something exists, not launched</option>
                  <option value="revenue">Post-Revenue — live product, paying customers</option>
                </select>
              </div>

              <div className="co-field">
                <label>Roles You Need In Your Pod</label>
                <div className="co-roles">
                  {ROLES.map(role => (
                    <div
                      key={role}
                      className={`co-role${selectedRoles.includes(role) ? ' co-role-sel' : ''}`}
                      onClick={() => toggleRole(role)}
                      role="checkbox"
                      aria-checked={selectedRoles.includes(role)}
                    >
                      <div className={`co-role-box${selectedRoles.includes(role) ? ' co-role-box-sel' : ''}`} />
                      <span className={`co-role-lbl${selectedRoles.includes(role) ? ' co-role-lbl-sel' : ''}`}>
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="co-field">
                <label htmlFor="co-fv">In One Sentence — What Are You Building And Why? *</label>
                <textarea
                  id="co-fv"
                  placeholder="e.g. A discipleship tracking platform for African churches that can't afford enterprise tools..."
                  value={vision}
                  onChange={e => setVision(e.target.value)}
                  className={fieldErrs.vision ? 'co-field-err' : ''}
                />
              </div>

              <div className="co-field">
                <label htmlFor="co-fh">How Did You Hear About Us?</label>
                <select id="co-fh" value={hearAbout} onChange={e => setHearAbout(e.target.value)}>
                  <option value="">Select...</option>
                  <option>LinkedIn</option>
                  <option>Faith Driven Entrepreneur network</option>
                  <option>Referral from someone I know</option>
                  <option>Haiven / DevShield / By The Fruit</option>
                  <option>Other</option>
                </select>
              </div>

              {showRequiredErr && (
                <p className="co-err">Please fill in all required fields above.</p>
              )}
              {showSubmitErr && (
                <p className="co-err">
                  Something went wrong. Please email{' '}
                  <a href="mailto:info@blueoxkampus.com">info@blueoxkampus.com</a> directly.
                </p>
              )}

              <button className="co-submit-btn" disabled={submitting} onClick={handleSubmit}>
                {submitting ? 'Sending...' : 'Request My Pod →'}
              </button>
              <p className="co-fine">
                Christian founders building redemptive technology only.<br />
                Every submission reviewed carefully. No spam, ever.
              </p>
            </div>
          ) : (
            <div className="co-success">
              <div className="co-success-mark">✓</div>
              <p className="co-success-title">YOU&apos;RE IN<br />THE QUEUE.</p>
              <p className="co-success-body">
                We&apos;ll review your submission and respond within 24 hours to confirm fit and book your
                kickoff call.<br /><br />
                <em>God bless what you&apos;re building.</em>
              </p>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </>
  );
}
