# Blue OX Kampus — Next.js (TypeScript) Starter

This repository contains a Next.js App Router (TypeScript) starter scaffolded from your existing landing pages. It uses Tailwind CSS and is configured for deployment on Vercel.

## What I added
- Next.js (App Router) + TypeScript
- Tailwind CSS, PostCSS
- Basic components: `Header`, `Hero`, `OfferingsGrid`, `SkillsSection`, `HouseCard`, `Footer`
- A placeholder API route: `POST /api/apply` (logs submissions) — replace with your email/DB solution later
- `styles/globals.css` includes fonts (Syne, Space Mono) and Tailwind

## Setup (local)
1. Install dependencies:

   npm install

2. Run development server:

   npm run dev

3. Build for production:

   npm run build

4. Lint/format:

   npm run lint
   npm run format

## Assets
Please move your existing `assets/images/logo.png` and `assets/images/logo_name.png` into `public/assets/images/` so the site can reference them as `/assets/images/logo.png`.

## Deploying to Vercel
1. Sign in to Vercel and import this repository (or link your Git provider and repo).
2. Vercel will detect Next.js and set everything up. No additional server is required for the placeholder API route; it will run as a serverless function.

## Notes
- I did not configure email or persistent storage for form submissions — the `POST /api/apply` route is a placeholder. When you are ready, we can integrate SMTP, SendGrid, or a simple DB.
- If you want, I can initialize a Git repo and create a GitHub repo for you and set up automatic Vercel deploys.

---

If you want, I can now: (a) initialize git, (b) move assets into `public`, or (c) push a sample commit. Which do you want next?