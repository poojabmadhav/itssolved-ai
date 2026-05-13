# itssolved.ai - Development Guide

## Quick Start

The dev server is running at **http://localhost:3000**

### View the Site

1. Open http://localhost:3000 in your browser
2. Explore the pages:
   - **Landing Page** - Hero section with tools grid
   - **PennyPincher** - Full showcase with 4 tabs:
     - Overview - What is PennyPincher?
     - Features - Full feature list
     - How It Works - Step-by-step guide
     - Demo - Live embedded iframe of the app
   - **About** - Company info and philosophy
   - **Tool 2 & 3** - Placeholder "Coming Soon" pages

## Project Structure

```
app/
├── layout.tsx              # Root layout with Navbar & Footer
├── page.tsx                # Landing page (home)
├── globals.css             # Tailwind styles + color theme
├── about/
│   └── page.tsx            # About page
└── tools/
    ├── penny-pincher/
    │   └── page.tsx        # PennyPincher showcase (with tabs)
    ├── tool-2/
    │   └── page.tsx        # Tool 2 placeholder
    └── tool-3/
        └── page.tsx        # Tool 3 placeholder

components/
├── Navbar.tsx              # Top navigation
└── Footer.tsx              # Footer with links

Public assets in: public/
```

## Features Implemented

### Pages
- ✅ Landing page with tool grid preview
- ✅ PennyPincher showcase with 4 tabs
- ✅ Tool placeholders (coming soon)
- ✅ About page
- ✅ Responsive design (mobile-first)

### PennyPincher Tab Structure
1. **Overview** - What is it, key principles
2. **Features** - CSV import, categorization, visualizations, export
3. **How It Works** - 4-step process walkthrough
4. **Demo** - Live iframe embedding penny-pincher-app.vercel.app

### Design
- Color palette: #8A5F41, #A77F60, #F3E4C9, #CCD67F
- Tailwind CSS with Tailwind 4 CSS variables
- Responsive grid layouts
- Hover transitions and interactions
- Clean typography

## Customization

### Colors
Edit `tailwind.config.ts` to change the primary palette:

```typescript
colors: {
  primary: "#8A5F41",
  secondary: "#A77F60",
  background: "#F3E4C9",
  accent: "#CCD67F",
}
```

### Content
- **Homepage:** Edit `app/page.tsx`
- **PennyPincher:** Edit `app/tools/penny-pincher/page.tsx` (tab content)
- **Navbar/Footer:** Edit `components/Navbar.tsx` and `components/Footer.tsx`

### Adding Pages
Create new files in `app/` following the structure:

```
app/new-page/page.tsx  # Becomes /new-page
```

## Deployment

When ready to deploy to itssolved.ai:

```bash
npm run build
vercel --prod
```

Then update DNS records at your domain registrar to point to Vercel.

## Common Tasks

### Start dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
npm start
```

### Run linter
```bash
npm run lint
```

## Next Steps

1. Update copy/content (about page, tool descriptions, etc.)
2. Add real favicon (replace public/favicon.ico)
3. Connect email subscription form
4. Update social links in footer
5. Deploy to itssolved.ai domain
