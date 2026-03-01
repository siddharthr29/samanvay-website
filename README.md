# Samanvay Foundation Website

Official website for [Samanvay Research and Development Foundation](https://samanvayfoundation.org) — a Section-8 non-profit in Bangalore building open-source technology for India's social sector.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **UI:** [shadcn/ui](https://ui.shadcn.com), [Tailwind CSS 4](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com)
- **Animations:** [Motion](https://motion.dev) (Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev)
- **CMS:** [Notion API](https://developers.notion.com) (with local data fallback)
- **Deployment:** [Vercel](https://vercel.com)

## Features

- Product pages for Avni, Bahmni, Gunak, TeleSathi, Shwaas, and Mentor To Go
- Article system with reading progress, estimated read time, and share buttons
- Contact form with validation and Discord webhook integration
- Ask AI section — verify our impact via ChatGPT, Perplexity, Claude, Gemini, Grok
- SEO optimized — JSON-LD structured data, sitemap, robots.txt, OpenGraph images
- Glossary, use cases, comparisons, books, and team pages
- Light/dark theme toggle
- WCAG AA accessible
- Fully responsive

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables (Optional)

For Notion CMS integration, add to `.env.local`:

```env
NOTION_API_KEY=your_notion_api_key
NOTION_DB=your_notion_database_id
NOTION_CRM_DB=your_notion_crm_database_id
```

Without these, the site uses local article data from `data/articles.ts`.

## Project Structure

```
app/                  # Next.js App Router pages
  api/contact/        # Contact form API (Discord webhook)
  articles/           # Article pages (Notion or local)
  products/           # Product pages
  glossary/           # Health-tech glossary
  use-cases/          # Use case pages
  compare/            # Product comparison pages
components/
  blocks/             # Page-level components (hero, CTA, etc.)
  layout/             # Navbar, footer, breadcrumbs
  article/            # Article renderer, TOC, share buttons
  shared/             # Reusable components
  ui/                 # shadcn/ui primitives
data/                 # Static data (products, articles, site config)
lib/                  # Utilities (Notion client, SEO helpers, icons)
public/               # Static assets (logos, fonts, icons)
```

## License

All rights reserved. Copyright Samanvay Research and Development Foundation.
