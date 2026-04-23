# AQU4TRO Landing — UI Kit

High-fidelity recreation of the A QU4TRO marketing landing page (mobile). Source of truth: [rafaeltorresng/A4](https://github.com/rafaeltorresng/A4) (`index.html` + `components/sections.jsx`).

## Files
- `index.html` — composed page (all sections stacked in the mobile column)
- `primitives.jsx` — `Icon` set, `Logo`, `SectionLabel`, `WA_URL`
- `sections.jsx` — `TopBar`, `Hero`, `Especialidades`, `ComoFunciona`, `QuemSomos`, `FAQ`, `CTAFinal`, `Footer`
- `ios-frame.jsx` — iPhone frame starter (available if you want to wrap the page in a device)

## Conventions
- **Mobile-first, 420px column**, 22px gutters.
- **Colors** pulled from `../../colors_and_type.css`:
  - Primary `#1E4FA1`, accent `#FFC431`, navy `#0F2E63`, footer `#0A1F45`
  - WhatsApp green `#25D366` — used on all primary CTAs
- **Fonts**: Poppins (display + logo) + DM Sans (body).
- **Icons**: inline SVG, stroke 1.5-1.6, `#1E4FA1`. Do not swap for Lucide.
- **Signature copy pattern**: 2-line H2 with second line in color — always sentence case.

## Notes
Reveal-on-scroll animations, floating CTA, shine-sweep on buttons, pulse-dot are present in the live site's `index.html`; they were omitted here to keep the kit static and composable. Drop them back in with `IntersectionObserver` + the classes from `../colors_and_type.css`.
