# SentrySearch — Landing Page

Marketing site for [SentrySearch](https://github.com/ssrajadh/sentrysearch), a semantic search tool for video footage.

Built with Next.js 16, Tailwind CSS v4, and shadcn/ui.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Fonts:** Geist / Geist Mono
- **Icons:** lucide-react + inline SVG

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```text
app/
  page.tsx          # Root page — composes all landing sections
  layout.tsx        # Root layout, metadata, fonts
  globals.css       # Tailwind base + theme tokens

components/
  landing/
    nav.tsx               # Fixed top nav with live GitHub star count
    hero.tsx              # Hero section with terminal demo
    how-it-works.tsx      # 3-step explainer
    features.tsx          # 6-card feature grid
    quick-start.tsx       # Install / configure / search terminal cards
    pricing.tsx           # Gemini vs local model cost comparison
    footer.tsx            # Footer links
    github-star-button.tsx  # Async server component — fetches live star count
    github-icon.tsx         # Inline GitHub SVG icon
```

## Live GitHub Stars

The GitHub buttons fetch the live star count from the GitHub API at build time and revalidate every hour via Next.js ISR (`next: { revalidate: 3600 }`). No client-side fetching — stars are rendered server-side and cached.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

> Requires Node.js 20+.
