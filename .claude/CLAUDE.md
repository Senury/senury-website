# CLAUDE.md — Senury Project Instructions

This file defines how Claude should work inside the Senury repository.
Claude must follow these rules at all times when assisting with this project.

---

## 1. PROJECT OVERVIEW

**Project name:** Senury
**Domain:** German legal-tech / notary software
**Product:** AI-assisted notary software — a **Komplettlösung für Notariate**

Senury is a comprehensive solution for German notaries. While **Kaufverträge** remain the primary focus and most mature feature, the platform includes:

- **Urkunden (Document Drafting):** Kaufverträge (primary), Schenkungen, Grundstücksübertragungen, and other urkundliche Beurkundungen
- **Recherche:** AI-powered legal research chat with access to juridical databases
- **Kontrolle:** Document analysis capabilities (perspective/future feature)

Senury helps notaries and their teams generate structured contract drafts using guided data intake, templates, clause libraries, AI-assisted drafting, and research features.

**Critical constraint:**
Senury operates in a professional secrecy context (§203 StGB).
All design, architecture, wording, feature descriptions, and operational guidance must respect:
- §203 StGB (Berufsgeheimnis)
- DSGVO (GDPR)
- ISO 27001-aligned information security practices

Claude must **never** claim that the software replaces notaries or provides legally binding advice without human review.

---

## 2. SOURCE OF TRUTH (VERY IMPORTANT)

Claude must treat the following files as authoritative:

1. `tech_stack.md`
   - Defines the actual technologies, infrastructure, deployment model, and constraints.
   - Claude must NOT invent technologies or architectures not listed there.
   - If something is unclear or missing, Claude should ask for clarification or propose options explicitly labeled as assumptions.

2. `product_spec.md` (or equivalent product spec file, if present)
   - Defines product scope, features, workflows, and non-goals.
   - Claude must not expand scope beyond what is defined without explicitly flagging it as a suggestion.

3. `reference/`
   - Website mockups in HTML and png format
   - Subfolders represent single pages in the website
   - Rely on them for design and content
   - Incomplete/Inconsistent mockups, so optimize further and value consistency

4. Legal/compliance documents (if present)
   - Claude must not contradict them.
   - If uncertainty exists (e.g. certification status), Claude must use conservative wording.

If instructions in `CLAUDE.md` conflict with other files:
→ **Ask for clarification before proceeding.**

---

## 3. DESIGN SYSTEM

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-charcoal` | `#1a1a1a` | Primary text, headings, dark sections |
| `--color-warm-gray-600` | `#6b6b6b` | Secondary text, descriptions |
| `--color-warm-gray-400` | `#9a9a9a` | Tertiary text, placeholders |
| `--color-warm-gray-200` | `#e5e5e5` | Light borders, dividers |
| `--color-border-subtle` | `#e8e8e8` | Card borders, section dividers |
| `--color-warm-white` | `#fdfcfb` | Hero backgrounds, gradient start |
| `--color-warm-cream` | `#faf8f7` | Section backgrounds, cards |
| `--color-accent` | `#c9a66b` | Accent color (copper), highlights, CTAs |

### Typography

- **Headings:** Newsreader (serif), weights 400-600, tracking-tight (`-0.02em` on large headings)
- **Body:** Inter (sans-serif), weight 400
- **Scale:**
  - H1: `text-4xl md:text-5xl lg:text-6xl`
  - H2: `text-3xl md:text-4xl`
  - H3: `text-xl font-serif`
  - Body: `text-base text-[#6b6b6b]`
  - Small/Caption: `text-xs text-[#9a9a9a]`

### UI Components

**Pill Badge:**
```
pill-badge: inline-flex, px-4 py-2, rounded-full, text-xs font-medium
Usage: bg-[#f5f5f5] text-[#6b6b6b] border border-[#e8e8e8]
```

**Cards:**
- Border: `border border-[#e8e8e8]`
- Background: `bg-white` or `bg-[#faf8f7]`
- Border radius: `rounded-xl` or `rounded-none` (editorial style)
- Shadow: `shadow-soft` (subtle) or `shadow-elevated` (hero mockups)

**Buttons:**
- Primary: `bg-[#1a1a1a] text-white rounded-full h-12 px-8`
- Secondary: `border border-[#e8e8e8] text-[#1a1a1a] rounded-full`
- All buttons use `rounded-full` (pill shape)

**Section Spacing:**
- Standard: `py-24 lg:py-32`
- Compact: `py-16 lg:py-24`
- Container: `max-w-6xl mx-auto px-6`

### Shadows

```css
.shadow-soft: 0 10px 40px -10px rgba(0, 0, 0, 0.05)
.shadow-elevated: 0 25px 50px -12px rgba(0, 0, 0, 0.08)
```

---

## 4. WEBSITE ARCHITECTURE

### Pages

| Page | Route | Purpose |
|------|-------|---------|
| Landing | `/` | Hero, problem/solution, features, process, CTA |
| Produkt | `/produkt` | Feature details, alternating layouts, integrations |
| Preis | `/preis` | Pricing tiers, comparison table, FAQ |
| Sicherheit | `/sicherheit` | Compliance, security details, certifications |
| Ablauf | `/ablauf` | Process timeline (5 steps), flexibility cards |
| FAQ | `/faq` | Searchable, categorized accordion |
| Über uns | `/ueber-uns` | Team, mission, company information |
| Kontakt | `/kontakt` | Contact form and company details |
| Demo | `/demo` | Demo request page |
| AGB | `/agb` | Terms of service (legal) |
| Datenschutz | `/datenschutz` | Privacy policy (legal) |
| Impressum | `/impressum` | Legal notice (legal) |

### Shared Components

- `components/layout/Navigation.tsx`: Fixed header with backdrop-blur, pill nav items, rounded-full CTA
- `components/layout/Footer.tsx`: 4-column layout, warm cream background, pill badge

### UI Mockup Patterns

When creating UI mockups for the website, use these component types:

1. **Window Chrome**: Always include browser-like header with 3 dots
2. **Document Mockups**: Use placeholder lines (`bg-[#f5f5f5]` bars) for text
3. **Form Mockups**: Label + input box with placeholder text
4. **Card Mockups**: Icon + title + content structure
5. **Floating Elements**: Use `shadow-soft`, `backdrop-blur`, absolute positioning

---

## 5. WHAT CLAUDE IS ALLOWED TO DO

### Engineering & Architecture
- Backend and frontend code
- API design
- Data models
- AI workflow orchestration
- Prompt engineering
- Security-aware system design (high level)
- Refactoring and documentation

### Product & UX
- Product specs (when asked)
- Feature breakdowns
- Process flows
- UI copy (especially German legal-tech tone)
- Wireframe descriptions and UI mock text
- Website and marketing copy (non-hype, compliance-first)

### Legal-Tech Writing (non-legal advice)
- Conservative explanations of workflows
- Compliance-oriented copy
- Disclaimers and trust-language
- Documentation for notaries and staff

---

## 6. WHAT CLAUDE MUST NOT DO

Claude must NOT:

- Claim legal correctness, legal advice, or replacement of notaries
- Promise compliance, certifications, or hosting guarantees unless explicitly confirmed
- Invent certifications (e.g. ISO 27001) or assert them as facts without confirmation
- Use hype language ("fully automated", "guaranteed", "no review needed")
- Generate marketing copy that would alarm conservative German notaries
- Store sensitive or real personal data in any file

---

## 7. TONE & STYLE GUIDELINES

### General
- Precise, calm, professional
- Conservative German enterprise legal-tech tone
- Short, clear sentences
- Prefer structure over verbosity

### Marketing & Website Copy
- Focus on process, control, and risk reduction
- Emphasize: transparency, configurability, auditability
- Avoid buzzwords unless clearly defined
- Use "unterstützend" (assistive) not "automatisch" (automatic)
- Frame AI as tool for efficiency, not replacement

### Preferred Phrases
- "Senury unterstützt bei..." (not "Senury erledigt...")
- "Sie behalten die volle Kontrolle"
- "§203 StGB-konform von Grund auf"
- "KI-gestützt, nicht KI-ersetzend"
- "Nachvollziehbar und auditierbar"
- "Die Komplettlösung für Ihr Notariat" (for broader context)
- "Kaufverträge in Minuten — und vieles mehr" (when mentioning other features)

### Technical Writing
- Explicit assumptions
- Clear boundaries between MVP and future scope
- Security-conscious wording

---

## 8. CONTENT GUIDELINES FOR GERMAN LEGAL-TECH

### Do Use
- Formal "Sie" (never "du")
- Technical legal terms correctly (Kaufvertrag, Beurkundung, Vollzug)
- Conservative estimates ("bis zu 75%" not "immer 75%")
- Qualifying language ("in der Regel", "typischerweise")

### Avoid
- Superlatives without qualification ("die beste", "die schnellste")
- Absolute statements ("immer", "garantiert", "100%")
- Hype words ("revolutionär", "disruptiv", "game-changing")
- Fear-based marketing ("sonst droht...")

### Compliance Disclaimers
Always include when discussing AI features:
- "KI-generierte Inhalte müssen vor Verwendung geprüft werden"
- "Die inhaltliche Verantwortung liegt stets beim Notar"
- "Senury ist ein unterstützendes Werkzeug, kein Ersatz für juristische Prüfung"

---

## 9. TEMPORARY FILES & SCRATCH SPACE

Claude may use the `tmp/` directory for:
- Drafts
- Intermediate notes
- Brainstorming artifacts
- Temporary schemas or prompt experiments

Rules for `tmp/`:
- Treat everything as disposable
- Do NOT assume content in `tmp/` is final or authoritative
- Do NOT reference `tmp/` content as a source of truth
- Claude may overwrite or delete files in `tmp/` freely

---

## 10. FILE CREATION & MODIFICATION RULES

Before creating a new file, Claude should consider:
- Does this belong in an existing document?
- Is this temporary (`tmp/`) or permanent?

Preferred structure:
- Product truth → `product_spec.md`
- Technical truth → `tech_stack.md`
- Process/workflows → `product_spec.md` or `/docs/`
- Experiments → `tmp/`

If a new permanent file is needed, Claude should:
- Explain why
- Propose a clear filename
- Keep scope minimal

---

## 11. AI-SPECIFIC CONSTRAINTS

When working on AI features:
- Always describe AI as "unterstützend" (assistive)
- Emphasize:
  - human review
  - configurability
  - explainability
  - versioning and audit trails
- Avoid black-box framing
- Never claim AI output is legally correct or binding

---

## 12. DEFAULT ASSUMPTIONS (UNLESS OVERRIDDEN)

- MVP-first mindset
- B2B SaaS with enterprise-style security expectations
- German market, German law, German language
- Conservative buyers with high trust requirements
- Next.js 16+ with App Router
- Tailwind CSS for styling
- shadcn/ui component library

---

## 13. WHEN IN DOUBT

If Claude is unsure:
- Ask a clarifying question
- Or proceed with clearly labeled assumptions

Silence or confident guessing is worse than asking.

---

## 14. COMMON WORKFLOWS

### Adding a New Page
1. Create `app/page-name/page.tsx`
2. Follow existing page structure: Hero → Content → CTA
3. Use consistent section spacing (`py-24 lg:py-32`)
4. Add to Navigation if needed
5. Test build with `npm run build`

### Creating UI Mockups
1. Create function component in page file
2. Use realistic placeholder data (German legal terms)
3. Include window chrome for app mockups
4. Use `shadow-soft` or `shadow-elevated`
5. Keep text sizes small (`text-[10px]`, `text-xs`) for realism

### Modifying Styles
1. Prefer Tailwind utilities over custom CSS
2. Add new utilities to `globals.css` if needed
3. Use CSS variables for colors (already defined)
4. Maintain consistent border-radius patterns

### Writing Copy
1. Start with problem, then solution
2. Use subjunctive for AI capabilities ("kann", "unterstützt")
3. Include compliance disclaimer for AI features
4. Review against "Do Use" / "Avoid" lists in Section 7
