# Blue Ox Kampus — VR Technical Training Platform

Blue Ox Kampus is a foundation-focused platform delivering immersive, industry-aligned technical education to refugees, women, persons with disabilities, underserved youth, and students in Western Uganda. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Mission
**From Isolation to Industry** — Bridging the last mile between talent and opportunity through accessible, cost-efficient VR-based technical education.

## Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom Blue Ox design system
- **3D Models**: model-viewer for VR equipment visualization
- **Icons**: Custom SVG icon library (32+ icons in `/public/icons/`)
- **Fonts**: Orbitron (headings), Rajdhani (body), Space Mono (technical)
- **Deployment**: Vercel

## Key Features
- VR-based technical training programs (welding, solar, EV, customer care)
- Target beneficiaries: refugees, women, persons with disabilities, underserved youth, students
- Partnership with Dig in Vision (European VR simulation developer)
- Ethical workforce pathways (local + international placement)
- Mobile-optimized responsive design

## Project Structure
- `app/` - Next.js App Router pages
  - `page.tsx` - Homepage (hero section only)
  - `academy/` - Programs page
  - `partners/` - Partners & funding page
  - `house/` - Community space page
- `components/` - React components
- `public/icons/` - Custom SVG icon library
- `styles/` - Global styles and Tailwind config

## Setup (local)
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Contact
- **Email**: blueoxrecruit@gmail.com
- **WhatsApp**: +3197010209759
- **Website**: https://www.blueoxkampus.com