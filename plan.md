# Segamat Taekwondo & Martial Arts Centre

## Implementation

- Plain static HTML/CSS/JavaScript, served from the project root.
- `assets/js/content.js` is the single source of truth for brand facts, contacts, WhatsApp numbers, schedule, venue, and English / Simplified Chinese / Bahasa Melayu copy.
- `assets/js/app.js` renders all page content from that data source, formats the schedule, builds WhatsApp links, switches languages, and controls mobile menu / WhatsApp panel interactions.
- `assets/css/styles.css` owns the responsive visual system and mobile-first behavior; the hero uses a portrait asset on phones and a landscape asset on wider screens.
- `manus-routes.json` declares the single static route.

## Design

- **Movement:** cinematic martial-arts editorial / modern dojang poster.
- **Principles:** solemn, disciplined, high-contrast, mobile-legible.
- **Color:** charcoal and deep navy provide pressure and focus; amber signals mastery and action; crimson is the club's conversion accent; warm paper sections make the schedule and factual content easy to scan.
- **Layout:** editorial split-heads, full-bleed hero, asymmetric schedule and image-led venue panel rather than a generic centered grid.
- **Signature elements:** crest seal, thin amber rules, condensed fight-poster typography, numeric feature markers.
- **Interaction:** direct, tactile CTA buttons; two instructor WhatsApp paths; sticky mobile-safe WhatsApp drawer; language changes preserve the current page.
- **Animation:** short lift / fade reveals only; reduced-motion users receive no decorative motion.
- **Typography:** Barlow Condensed for fight-poster headlines and labels, DM Sans for body copy, Noto Sans SC for Chinese fallback.
- **Brand essence:** a serious Segamat training centre for students and parents who want structured progression, respect and real technique; **disciplined, grounded, formidable**.
- **Voice:** direct and respectful. Example lines: “Discipline. Power. Respect.” / “Ready to step into the dojang?”
- **Wordmark:** crest seal paired with a compact legal-name lockup.
- **Signature color:** amber `#E7A43B`.

## Known source constraint

The supplied venue signage gives only `Pusat Latihan Seni Bela Diri`, `Tingkat 3 (三楼)`, and the Segamat centre name / phone; no street address is invented. The map link therefore searches the verified centre name in Segamat, Johor. The footer carries the requested copyright text exactly.
