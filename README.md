# AQU4TRO Design System

A design system for **A QU4TRO Serviços de Trânsito** — a Brazilian specialist firm (based in Recife, PE) that helps traffic accident victims claim compensation. The business is consumer-facing (B2C): anyone who has suffered a traffic accident, or their family, contacts A QU4TRO to evaluate indenização (compensation) rights and have the entire process handled for them, paid only on success.

> "Especialistas em indenização. Seu direito, nossa prioridade."

## What A QU4TRO does
A QU4TRO is **not** an insurer or a public body. It is a specialized intermediary that:
- Evaluates whether a person has a right to compensation after a traffic accident
- Handles all bureaucracy end-to-end (documents, reports, legal protocols)
- Charges **nothing upfront** — fee only on success
- Operates 100% online, with WhatsApp as the primary channel

### Core service lines ("Especialidades")
1. **Indenização via App** (NEW) — Uber, 99, iFood drivers & passengers
2. **Processos contra Terceiros** — material, moral and aesthetic damages from other drivers
3. **Seguro de Passageiro (APP)** — triggering private policies for app-ride accidents
4. **Casos DPVAT (Legado)** — legacy compulsory-insurance cases (pre-2025 law change)

### Key proof-points
- 14 anos de experiência
- +5 mil vítimas indenizadas
- 100% atendimento on-line
- Baseados em Recife, atendem todo o Brasil
- WhatsApp: (81) 99714-0111
- Instagram: @a4servicosdetransito

## Sources used
- **Brand kit images** (provided): `assets/brand-kit.jpeg`, `assets/brand-manifesto.jpeg`, `assets/logo-aqu4tro.jpeg`
- **Landing page codebase**: GitHub `rafaeltorresng/A4` (main) — imported `index.html`, `components/sections.jsx`, and assets into `assets/`
- **Positioning copy**: provided in the project brief (hero, FAQ, manifesto)

---

## Index (what lives in this folder)

| File / Folder | Purpose |
|---|---|
| `README.md` | This file — brand overview, foundations, iconography |
| `SKILL.md` | Cross-compatible skill file for Claude Code use |
| `colors_and_type.css` | CSS variables: brand colors, type scale, radii, shadows, spacing |
| `assets/` | Logos, hero/about imagery, partner brand SVGs, and original reference images |
| `assets/brands/` | Uber, 99, iFood logos (partner mentions — respective trademarks) |
| `preview/` | Small HTML cards that populate the Design System tab |
| `landing/` | React/JSX recreation of the A QU4TRO landing page inside an iPhone frame |

---

## CONTENT FUNDAMENTALS

### Voice (from the official "Manifesto da Marca")
A QU4TRO explicitly names its brand personality on sliders ("Nossa Personalidade"):

- **Accessible > Formal** (leans informal, not casual)
- **Modern, not traditional**
- **Descomplicado** (the opposite of bureaucratic — this word is load-bearing)
- **Próximo** (close, warm — not distant)
- **Especialista** (specialist — always lean on expertise)
- **Ágil** (quick, responsive)
- **Focused on the person, not the process**

The tagline of the voice: *"Falamos com clareza, empatia e confiança."* Three pillars:
1. **Clareza que orienta** — plain-language explanations of rights
2. **Empatia que acolhe** — acknowledging the pain of what happened
3. **Confiança que transmite segurança** — 14 years, thousands of cases

### Tone rules & copy patterns
- **Portuguese (Brazilian)** — always. Accents preserved (`Indenização`, `Trânsito`).
- **Second-person "você"**, never "tu" or "o senhor". Direct address.
- **Short headlines with a line break + accent colour on the payoff clause.** Example:
  - "Sofreu um acidente de trânsito? **Você tem direito** à indenização."
  - "Sua jornada para **a indenização.**"
  - "Histórias reais de **quem confiou.**"
  - "14 anos lutando pelo **seu direito.**"
- **Title casing:** headlines use sentence case, not Title Case. Eyebrow labels use UPPERCASE with wide letter-spacing.
- **Numbers speak:** big stats ("14 anos", "+5mil", "100%") rendered in display type with the yellow accent.
- **Name the fear, answer it.** Section "O que você está sentindo" quotes the client's own anxieties verbatim ("Não sei se tenho direito…", "Tenho medo de ser enganado…").
- **Contrast lists:** "O que somos / O que não somos" is a signature device — explicit disclaimers ("Não somos seguradora nem órgão público").
- **Success promises are always qualified by the no-cost guarantee.** The sentence "Sem custo adiantado" recurs across hero, CTA and about.
- **No emoji.** The brand is consumer-facing but professional — no emoji in UI copy, marketing, or CTAs. Iconography carries the tonal colour.
- **Quotes are used as design elements**, not just punctuation — wrapping anxieties ("…") and brand promises ("Somos especialistas que resolvem com humanidade.").
- **Signature example phrases** (from manifesto):
  - "Seu direito, nossa prioridade."
  - "Do início ao fim."
  - "Sem burocracia. Sem complicação."
  - "Especialistas em indenizações por acidente de trânsito."

### What A QU4TRO is NOT (used as a tonal guardrail)
- Não é seguradora
- Não é órgão público
- Não é burocrático nem demorado
- Não faz promessas vazias
- Não tem atendimento robotizado
- Não é indiferente à história do cliente

---

## VISUAL FOUNDATIONS

### Colors
| Token | Hex | Role |
|---|---|---|
| `--brand-blue` | `#1E4FA1` | **Primary.** Headlines accents, icons, CTA bg variants |
| `--brand-blue-deep` | `#0F2E63` | Deep navy. Headlines, dark CTA backgrounds, stats block |
| `--brand-blue-darker` | `#0A1F45` | Footer bg |
| `--brand-blue-100` | `#E7F0FF` | Pale blue (brand kit) |
| `--brand-blue-200` | `#BFD6EB` | Soft blue (brand kit) |
| `--brand-yellow` | `#FFC431` | **Accent.** Highlighted words, the "4" in logo, CTAs on dark |
| `--white` | `#FFFFFF` | Surfaces |
| `--neutral-500` | `#6B7280` | Body muted |
| `--neutral-200` | `#E5E7EB` | Borders |
| `--whatsapp-green` | `#25D366` | Primary action CTA (brand-of-channel colour) |

The brand kit swatch names them: Azul (confiança e segurança), Amarelo (destaque, energia, atenção), and light tones (transparência e leveza).

### Typography
- **Display / Headlines:** Poppins — weights 500 (large H1/H2), 700 (H3), 800 (logo + stats).
  - Letter-spacing tightens slightly on big heads (`-0.01em`).
  - Logo uses Poppins 800 with manual letter-spacing `.02em` and the "A" + "4" in yellow.
- **Body / UI:** DM Sans (weights 400, 500, 700). The Brand Kit names Montserrat as secondary but **the live site uses DM Sans** — treat DM Sans as the source of truth, Montserrat as an acceptable fallback.
- **No serifs, no monospace.** The brand is sans-only.

### Backgrounds & imagery
- **Full-bleed photography with deep navy gradient overlays** is the signature hero treatment. Linear overlay from `rgba(15,46,99,0.7)` at top to `--brand-blue` at bottom.
- **Subtle radial gradient page background:** two soft washes (blue top-left, yellow bottom-right) over `#EEF2F7`.
- **Image tone is warm-realistic** — urban mobility shots, hands signing documents, cars on roads. Not stock-y; a documentary feel.
- **No hand-drawn illustration, no patterns, no textures.** Photography + solid colour blocks + glass cards only.
- **SVG swooshes / curves** in white + yellow low-opacity lines decorate the hero.

### Cards & surfaces
Two distinct card systems, used consistently:
1. **Glass cards** (dominant): `background: rgba(255,255,255,0.4–0.6)` + `backdrop-filter: blur(8–20px) saturate(180%)` + 1px translucent white border + large rounding (16–24px) + soft drop shadow `0 10px 30px rgba(15,46,99,.08)`.
2. **Solid soft cards:** `#F7F9FC` bg + `#E5E7EB` border + 18–20px radius + shadow `0 4px 20px rgba(0,0,0,.03)`.

### Corners (radii)
- Pills (buttons-on-pill, status dots): `999px`
- Cards: `16–24px`
- Inputs / smaller chips: `10–14px`
- Icon containers: `12–16px`
The brand trends toward **generously rounded**, never sharp.

### Shadows / elevation
- Flat on small elements (`0 2px 5px rgba(0,0,0,.05)`)
- Lifted on cards (`0 4px 15–20px rgba(0,0,0,.03)`)
- Strong glow on CTAs (`0 10–12px 24px rgba(37,211,102,.25–.35)` for WhatsApp; `0 12px 24px rgba(15,46,99,.15)` for navy CTA)
- Inner shadows are **not used**.

### Borders
- Subtle 1px translucent borders are the norm (`rgba(229,231,235,.6)` or `rgba(255,255,255,.8)` on glass).
- No heavy outlines. No left-accent-border-only cards (this is an AI trope to avoid for this brand).

### Transparency & blur
Used generously: TopBar, cards, testimonial card, FAQ items. Always paired with saturate(160–180%) so colour doesn't mute out behind glass.

### Layout rules
- Mobile-first. The landing is designed in a **480px column** centered on page. Everything hangs off a 22px horizontal gutter.
- TopBar is `position: sticky; top: 0` with glass bg.
- **Floating CTA** (WhatsApp button, bottom-right) is always present with a pulsing dot.
- Sections alternate background colour (`#f5f5f5`, `#F7F9FC`, primary blue, `#0F2E63`) to provide rhythm.
- Big section eyebrow + 2-line H2 (second line in colour) + body is the canonical section header pattern.

### Animation & motion
- **Reveal on scroll:** `opacity + translateY(20px) → 0`, easing `cubic-bezier(0.16, 1, 0.3, 1)`, duration 800ms.
- **Counter animation:** big numbers tick up when they enter viewport.
- **Pulse dot:** live-status green dot with `dotPulse` 2s infinite (scale + expanding ring).
- **Button shine:** a diagonal highlight sweeps across CTAs every 4s (`::after` with gradient).
- **Press / active:** `transform: scale(.96) + brightness(.9)`. This is the standard feedback.
- **Hover (footer icons):** `background: rgba(255,255,255,.15)` + `translateY(-2px)`.
- **FAQ open:** chevron rotates 180°, background softens, shadow appears. Transition 300ms.
- **Easing of choice:** `cubic-bezier(0.16, 1, 0.3, 1)` — a deliberate, confident ease-out.

### Interaction states summary
- **Default:** flat or soft shadow
- **Hover:** very subtle — background lightens, slight lift on icons, never bold colour change
- **Active / press:** scale down to 0.96 + brightness 0.9
- **Focus:** default browser (not custom) — acceptable for a marketing site

---

## ICONOGRAPHY

### Approach
A QU4TRO uses **custom inline SVG icons authored in the landing codebase** (`components/sections.jsx`). Every icon is:
- **Outline-based**, stroke width `1.3–1.8` (most commonly 1.5–1.6)
- Drawn on a **24×24 viewBox** (a few at 26×26 for service icons)
- Uses `strokeLinecap="round"` and `strokeLinejoin="round"` consistently
- Always rendered in `--brand-blue` (#1E4FA1) unless inverted on dark bg
- Some composite icons add a small filled circle accent in brand-blue (e.g. `Check`, `PaperworkStack`)

There is **no external icon font** (no Lucide/Heroicons/FontAwesome imported). The set is bespoke and tight: ~25 icons cover the whole product.

### Named icon set (from `sections.jsx`)
- UI: `Whatsapp`, `Phone`, `Shield`, `Check`, `Clock`, `Pin`, `Chevron`, `Star`, `Quote`, `Alert`, `Menu`, `Search`, `Award`, `Instagram`, `ExternalLink`
- Service / narrative: `Car`, `App`, `Doc`, `CaseReview`, `PaperworkStack`, `PayoutReceived`, `RideshareClaim`, `ThirdPartyCollision`, `PassengerTripCover`, `LegacyPolicyArchive`

The service icons (second group) are **composite narrative icons** — each tells a micro-story (a phone with a route + a checkmark = "rideshare claim"). They're a defining feature of the brand; generic silhouettes would feel wrong. **Do not replace them with Lucide equivalents.**

### Emoji / unicode
- **No emoji ever** in UI, marketing, or copy.
- No unicode glyphs used as icons.

### Logo usage
Three variants per the brand kit:
- **Horizontal (primary):** `AQU4TRO` in navy with "A" + "4" in yellow, `SERVIÇOS DE TRÂNSITO` subtitle below in navy.
- **Reduced:** `AQ4TRO` (condensed) with same colouring — use at very small sizes or as favicon foundation.
- **Icon / mark:** `AQ4` locked inside a solid brand-blue circle — use as app icon, social avatar, favicon.

All three live as references in `assets/logo-aqu4tro.jpeg` (brand kit crop) and reproduced in code via the `<Logo>` component in `landing/`.

### Partner logos (for "Indenização via App" card)
- `assets/brands/uber.svg`
- `assets/brands/ifood.svg`
- `assets/brands/99.svg` (placeholder; a JS `Brand99Mark` component renders the yellow pill with "99" as a fallback since SVG text often doesn't load in `<img>`).

Always paired with a footnote: *"Marcas exibidas pertencem aos respectivos titulares."*

---

## UI Kits
- `landing/` — A QU4TRO marketing landing page, mobile (iPhone frame). See its own README.

## Font substitution note
The brand kit lists **Montserrat** as the secondary typeface, but the live codebase uses **DM Sans** as the body font. Both are in `colors_and_type.css` via Google Fonts (no `.ttf` files needed). If you want to standardise on one, ask — we went with **DM Sans** as source of truth since the production site uses it.
