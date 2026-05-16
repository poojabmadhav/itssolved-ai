# Tech Setup Guide - itssolved.ai

## Quick Start

```bash
# Create Next.js project
npx create-next-app@latest itssolved-portfolio --typescript --tailwind --app

# Navigate to project
cd itssolved-portfolio

# Install additional dependencies (if needed)
npm install recharts lucide-react  # For charts/icons if used

# Run dev server
npm run dev
# Visit http://localhost:3000
```

## Project Structure

```
itssolved-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (navbar, footer)
│   ├── page.tsx            # Landing page
│   ├── tools/
│   │   ├── layout.tsx
│   │   ├── penny-pincher/
│   │   │   └── page.tsx
│   │   ├── tool-2/
│   │   │   └── page.tsx
│   │   └── tool-3/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── api/               # API routes if needed
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ToolCard.tsx       # Reusable tool showcase card
│   └── HeroSection.tsx
├── public/
│   ├── logo.png
│   └── favicon.ico
├── tailwind.config.ts     # Color palette config
└── next.config.ts
```

## Tailwind Config

Add color palette to `tailwind.config.ts`:

```javascript
theme: {
  colors: {
    primary: '#8A5F41',
    secondary: '#A77F60',
    background: '#F3E4C9',
    accent: '#CCD67F',
    ...
  }
}
```

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time)
vercel --prod

# Future deploys
git push  # Auto-deploys if linked to Vercel
```

## Domain Setup

1. Log into Vercel dashboard
2. Go to Settings → Domains
3. Add `itssolved.ai`
4. Update DNS at domain registrar to point to Vercel nameservers
5. Verify in Vercel dashboard

## Environment Variables

Create `.env.local`:

```
# No sensitive vars needed for portfolio initially
# NEXT_PUBLIC_PENNY_PINCHER_URL=https://penny-pincher-eight.vercel.app
```

## Key Decisions

- **PennyPincher Embedding:** Use iframe pointing to penny-pincher-eight.vercel.app OR create a dedicated page that redirects/embeds
- **Blog/Content:** Future phase (store in `/app/blog` if added later)
- **Analytics:** Consider adding PostHog/Plausible later (add to layout.tsx)
- **Sitemap:** Next.js auto-generates `/sitemap.xml` if using App Router

