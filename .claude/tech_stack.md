# Tech Stack

## Package Manager
**bun** - Fast JavaScript runtime and package manager

## Framework & Runtime
- **Next.js 16+** - React framework with App Router
- **React 18+** - UI library
- **TypeScript** - Type safety

## Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Headless UI components built on Radix UI
- **Google Fonts** - Newsreader (display), Inter (body)

## Icons
- **Lucide React** - Modern icon library (consistent with shadcn)

## Project Structure
```
app/
├── layout.tsx              # Root layout with fonts, metadata
├── page.tsx                # Landing page
├── globals.css             # Global styles + Tailwind
├── produkt/
│   └── page.tsx
├── preis/
│   └── page.tsx
├── sicherheit/
│   └── page.tsx
├── ablauf/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── ueber-uns/
│   └── page.tsx
└── (legal)/
    ├── agb/
    │   └── page.tsx
    ├── datenschutz/
    │   └── page.tsx
    └── impressum/
        └── page.tsx

components/
├── layout/
│   ├── Navigation.tsx      # Fixed header with mobile menu
│   └── Footer.tsx          # Site footer
└── ui/                     # shadcn components
```

## Commands
```bash
# Development
bun run dev

# Build
bun run build

# Install shadcn components
bunx shadcn add <component>

# Install packages
bun add <package>
```

## Design System

### Typography
- **Display**: `Newsreader` (serif) - elegant headlines
- **Body**: `Inter` (sans-serif) - clean readability

### Color Palette
```
--color-charcoal: #1a1a1a       (Primary text, headings, dark sections)
--color-warm-gray-600: #6b6b6b  (Secondary text, descriptions)
--color-warm-gray-400: #9a9a9a  (Tertiary text, placeholders)
--color-warm-gray-200: #e5e5e5  (Light borders, dividers)
--color-border-subtle: #e8e8e8  (Card borders, section dividers)
--color-warm-white: #fdfcfb     (Hero backgrounds, gradient start)
--color-warm-cream: #faf8f7     (Section backgrounds, cards)
--color-accent: #c9a66b         (Accent color - copper, highlights, CTAs)
```

## shadcn/ui Components Used
- `button` - Primary CTAs
- `accordion` - FAQ sections
- `card` - Feature/pricing cards
- `sheet` - Mobile navigation
- `separator` - Visual dividers

## Deployment
- Static export configured
- Output directory: `dist/`
