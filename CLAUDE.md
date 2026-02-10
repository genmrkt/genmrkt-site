# GENMRKT Website

## About This Project
Marketing agency website for Generate Marketing (genmrkt.com).
Migrating from WordPress to custom HTML/CSS/JS.
The owner is a coding beginner — keep code clean, well-commented, and simple.

## Brand Identity
- **Company:** Generate Marketing (GENMRKT)
- **Tagline:** We generate growth for ambitious brands.
- **Tone:** Bold, edgy, clean, minimal. Creative agency energy — confident but not cluttered.
- **Services:** Lead Generation, Website Design, Marketing Automation, Instructional Design
- **Contact:** (917) 443-9516 | info@genmrkt.com | genmrkt.com

## Design System

### Theme: Alternating Dark & Light Sections
The site uses **alternating dark and light sections** to create high contrast and visual drama as the user scrolls. The hero is always dark. Sections alternate from there.

### Dark Palette
- Background: `#141422`
- Surface (cards, nav): `#1d1d32`
- Surface 2 (secondary): `#252540`
- Border: `#2a2a44`
- Text: `#f8f6ff`
- Text dim: `#dddaf0`

### Light Palette
- Background: `#faf9f7`
- Surface (cards): `#ffffff`
- Border: `#e4e2de`
- Text: `#0a0a14`
- Text dim: `#6b6980`

### Accent Colors
- **Primary accent (warm):** `#ff4d4d` (electric coral/red)
- **Secondary accent (cool):** `#5b3cff` (deep indigo)
- **Warm gradient:** `linear-gradient(135deg, #ff4d4d, #ff8c42)` — used for primary buttons, hero accent text, gradient highlights
- **Cool gradient:** `linear-gradient(135deg, #5b3cff, #3c9dff)` — used for secondary highlights, alternating card accents
- **Mix gradient:** `linear-gradient(135deg, #ff4d4d, #5b3cff)` — used sparingly for special emphasis (quote marks, process numbers)
- **Warm glow:** `rgba(255, 77, 77, 0.15)` — card icon backgrounds, hover states on dark
- **Cool glow:** `rgba(91, 60, 255, 0.15)` — card icon backgrounds, hover states on dark

### Typography
- **Display font:** `'Outfit', sans-serif` — all headings, buttons, labels, nav, stats
- **Body font:** `'Satoshi', sans-serif` — paragraphs, form inputs, descriptions
- **Google Fonts link:** `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Satoshi:wght@300;400;500;600;700&display=swap`
- **Hero headline size:** `clamp(3.5rem, 9vw, 7rem)`, weight 900, line-height 0.98, letter-spacing -0.045em
- **Section title size:** `clamp(2.2rem, 4.5vw, 3.4rem)`, weight 900, line-height 1.1
- **Body text:** 0.95rem, weight 400, line-height 1.7
- **Emphasized words in headlines use the warm gradient** applied via background-clip text

### Border Radius
- Cards, panels: `20px`
- Smaller cards, stat cards: `16px`
- Buttons, pills, tags: `100px`
- Icons, small elements: `14-16px`

### Shadows (Light Sections Only)
- Card hover: `0 24px 64px rgba(0, 0, 0, 0.08)`
- Subtle: `0 2px 8px rgba(12, 12, 29, 0.04)`

### Animation & Motion
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for smooth exits, `cubic-bezier(0.34, 1.56, 0.64, 1)` for spring/bounce
- **Scroll reveal types:** fade-up (default), slide-from-left, slide-from-right, scale-in
- **Staggered delays:** Use 0.12s increments for grid items (0.12s, 0.24s, 0.36s, 0.48s)
- **Hero:** Staggered entrance animations on tag, headline, description, buttons
- **Background orbs:** Floating gradient orbs with blur(100px), subtle animation (8-12s alternate)
- **Card hovers:** translateY(-6px) + shadow increase on light sections, border-color change on dark sections
- **Button hovers:** scale(1.05) + glow box-shadow
- **Service links:** gap animates wider on hover (8px → 14px)
- **Transitions:** 0.3s-0.5s for hover effects, 0.7s-0.9s for scroll reveals

### Patterns & Background Effects
- **Hero:** Floating gradient orbs (coral, indigo, orange) with blur, plus subtle grid lines using mask-image radial gradient
- **CTA sections:** Gradient orbs centered behind content
- **Dark sections:** Subtle border-based separation, no heavy patterns
- **Light sections:** Clean, minimal — rely on white space and card shadows

## Layout & Structure

### Navigation
- Fixed top, transparent initially, glass-morphism on scroll (blur + semi-transparent bg)
- Logo: "GEN" in white/dark + "MRKT" in warm gradient
- Links: dim color, brighten on hover
- CTA button: warm gradient background, rounded pill
- Mobile: hamburger menu with animated toggle (3 spans)

### Section Pattern
Each section follows this structure:
1. Section tag (uppercase label with gradient line before it, tagged `.warm` or `.cool`)
2. Section title (large, bold)
3. Section subtitle (dim text, max-width ~520px)
4. Content (grid, cards, steps, etc.)
5. Optional CTA

### Service Cards (Light Sections)
- White background, light border, 20px radius
- Gradient top-border appears on hover (warm gradient for odd cards, cool for even)
- Icon in glow-colored rounded square
- Title, description, arrow link
- Hover: lift + shadow

### Stat Cards (Dark Sections)
- Dark surface background, dark border, 16px radius
- Number in warm gradient text (large, 900 weight)
- Label in dim text below
- Hover: border color shifts warm, slight lift

### Process Steps (Light Sections)
- 4-column grid with vertical dividers between steps
- Large gradient counter numbers (4rem, low opacity, brighten on hover)
- Title + description below
- Hover: background shifts to white

### Footer
- Dark background
- 4-column grid: brand + description + socials | services links | company links | contact
- Bottom bar: copyright left, legal links right

## Tech Stack
- Static HTML/CSS/JS — no frameworks, no build tools
- Forms handled by Formspree
- Hosted on Netlify, auto-deployed from GitHub
- No npm dependencies in the site itself

## File Structure
```
genmrkt-site/
├── CLAUDE.md
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── course-player.js
├── services/
│   ├── website-design.html
│   ├── instructional-design.html
│   ├── social-media.html
│   └── lead-generation.html
├── blog/
│   ├── index.html
│   └── posts/
├── legal/
│   ├── privacy.html
│   └── terms.html
├── images/
│   ├── logo.svg
│   ├── clients/
│   └── blog/
├── courses/
│   └── demo-course.html
└── favicon.ico
```

## Coding Rules
1. Always use CSS custom properties (variables) for all colors, fonts, and key values
2. Mobile-responsive: test at 768px and 480px breakpoints
3. Keep JavaScript vanilla — no frameworks or libraries
4. Use CSS transitions and animations, not external animation libraries
5. Every page shares the same nav and footer HTML structure
6. Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
7. Add meaningful comments explaining sections for the beginner owner
8. All pages must include the shared Google Fonts link and css/style.css
9. Dark sections use class `.section-dark`, light sections use `.section-light`
10. Section tags get class `.warm` (coral accent) or `.cool` (indigo accent), alternating by section
11. Scroll reveal: add class `.reveal`, `.reveal-left`, `.reveal-right`, or `.reveal-scale` to animated elements
12. Stagger grid items with `.reveal-delay-1` through `.reveal-delay-4`
13. Keep file sizes small — compress images, minimize inline styles
14. All links must point somewhere real — never use `#` as a placeholder href
