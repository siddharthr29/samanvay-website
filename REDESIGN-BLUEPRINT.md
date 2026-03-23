# SAMANVAY FOUNDATION — Website Redesign Blueprint

## The Story We're Telling

> "In a forest in Chhattisgarh, a woman with a class-10 education and a feature phone was doing the work of a system — tracking pregnancies, monitoring TB, managing diabetes, counselling families, deciding when a 50km hospital trip was necessary. She carried twelve paper registers. The answers were always somewhere in the pile. The moment for early intervention had often passed by the time patterns became visible."

This is not a story about software. This is a story about **what happens when human commitment meets system limits** — and what becomes possible when that limit is removed.

Every page, every scroll, every interaction on this website must carry this emotional weight: **technology is invisible when it works, but the people it serves become extraordinary.**

---

## I. NARRATIVE ARCHITECTURE

### The Cinematic Arc (Homepage)

The homepage unfolds like a documentary film — not a product brochure.

**Act 1: THE FOREST (0-100vh)**
*Emotion: Quiet tension*

Open in darkness. A single line of warm amber text fades in against a deep indigo/charcoal canvas:

> "In 2016, inside a tiger reserve in Chhattisgarh, a village health worker named Kaushilya walked house to house — carrying twelve paper registers, a feature phone, and the health of 200 families in her memory."

No logo. No navigation (yet). Just the sentence. Let it breathe.

As the user scrolls, the scene expands — a faint topographic map of India emerges in the background (SVG lines, not an image). Warm dots begin appearing across the map, each representing a place where this story is repeating.

> "She is not unique. Across India, 900,000 frontline workers carry the same weight — in health, education, water, livelihoods. The systems they manage are complex. The tools they carry are not."

**Act 2: THE SHIFT (100-200vh)**
*Emotion: Hope rising*

The darkness lifts. Background transitions from deep charcoal to a warm dawn gradient (deep blue → amber → soft cream). Typography shifts from serif (contemplative) to the bold ClashDisplay (action).

> "What if the infrastructure matched the commitment?"

This is where Samanvay enters — not as a hero, but as the answer to a question the story has already asked.

The products appear — not as a grid, but as **chapters in the same story**:
- Avni: "So Kaushilya could focus on care, not paperwork"
- Bahmni: "So the hospital she refers patients to could see their full history"
- TeleSathi: "So the doctor 50km away could be present without the journey"
- Gunak: "So the quality of care could be measured, not assumed"
- Shwaas: "So when a pandemic arrived, triage happened in seconds"
- Mentor To Go: "So the next generation could be guided, not guessed at"

Each product card reveals on scroll with a one-line human story + the product name + a subtle product icon.

**Act 3: THE EVIDENCE (200-300vh)**
*Emotion: Conviction*

Impact counters animate in:
- **60+** nonprofits transformed
- **500,000+** lives touched
- **3,000+** frontline workers equipped
- **6** open-source products
- **25+** states across India

Below: A scrolling band of partner logos (UNICEF, NHSRC, Calcutta Kids, Ashwini, etc.) — not in a grid, but a slow horizontal marquee with subtle opacity on edges.

**Act 4: THE INVITATION (300-400vh)**
*Emotion: Belonging*

> "The opportunity ahead is not simply onboarding more nonprofits onto our platforms. It is rethinking how digital infrastructure for the social sector is imagined, built, financed and governed. That requires deeper partnership."

Two clear pathways:
- **"I run a nonprofit"** → Our Work / Products
- **"I want to support this mission"** → For Funders / Contact

---

## II. PAGE STRUCTURE

### 1. HOME (`/`)
- Cinematic scroll narrative (Acts 1-4 above)
- No traditional "hero section" — the entire page IS the hero
- Sticky minimal nav appears after Act 1 (scroll-triggered)
- Mobile: vertical narrative with snap-scroll sections

### 2. THE STORY (`/story`)
**NEW PAGE — The emotional center of the site**
- Extended version of the Kaushilya narrative
- Parallax scroll with illustrated scenes (SVG/CSS art, not stock photos)
- Timeline of Samanvay's journey:
  - 2017: Founded. First partnership with JSS.
  - 2018: Avni v1 — Kaushilya gets her first tablet
  - 2019: Bahmni adopted by rural hospitals
  - 2020: COVID hits → Shwaas built in weeks
  - 2021: TeleSathi bridges the distance gap
  - 2022: Gunak selected by NHSRC
  - 2023: 50+ nonprofits, ecosystem growing
  - 2024: Mentor To Go reaches 5000+ youth
  - 2025-26: The platform vision emerges
- Each milestone: date + one-sentence story + product icon + impact number
- Ends with: "This story is still being written. And it needs more authors."

### 3. PRODUCTS (`/products`)
- NOT a feature comparison grid
- Each product gets a **story card** (full-width, alternating left/right):
  - Human problem it solves (one sentence)
  - Who uses it (with real org names)
  - Key capability (3 bullet points max)
  - Scale metric (e.g., "70+ organizations, 25+ states")
  - "Explore [Product]" CTA
- Product detail pages (`/products/[slug]`) keep current structure but add:
  - A "Day in the Life" scenario at the top
  - Implementation partners section
  - GitHub link + open source badge

### 4. OUR WORK (`/our-work`)
- **Interactive India Map** (top section)
  - SVG map of India with state boundaries
  - Colored dots for each implementation (color-coded by product)
  - Click/tap a dot → slide-in card with project name, partner, product, impact
  - Filter by: Product | Sector | State
- Below map: Featured case studies (3-4 deep stories)
- Partner logos organized by type: Implementation | Funding | Technology

### 5. ABOUT (`/about`)
- Opens with the founders' motivation (adapted from the Vinay & Arjun piece)
- Values section: Not generic words — specific beliefs:
  - "We believe nonprofits should own their digital infrastructure, not rent it"
  - "We believe open source is not charity — it's strategy"
  - "We believe the last mile is the first priority"
- Team grid with real photos, one-line personal motivations
- Office section with warm photography

### 6. FOR FUNDERS (`/for-funders`)
**NEW PAGE — Critical for investor/CSR conversion**
- Theory of Change (visual diagram)
- Why digital infrastructure (not just software)
- Impact evidence with citations
- CSR-1 / 80G / 12A / Section-8 registration badges
- Annual reports (downloadable PDFs)
- "Schedule a Conversation" CTA (not "Donate" — this is partnership language)

### 7. ARTICLES (`/articles`)
- Keep Notion integration
- Add category filtering with pill badges
- Featured article hero card at top
- Reading time + author + date metadata

### 8. CAREERS (`/join-us`)
- Culture section: XP, pair programming, TDD, open source ethos
- "Why Samanvay" with team testimonial quotes
- Open positions (or "We're always looking for..." when none open)

### 9. CONTACT (`/contact`)
- Simplified form: Name, Org, Email, "How can we work together?"
- Addresses with Google Maps embeds
- Response time commitment: "We respond within 48 hours"

---

## III. VISUAL DESIGN SYSTEM

### Color Palette — "Dawn in the Forest"

The palette tells the story: from the darkness of broken systems to the warmth of working ones.

```
PRIMARY PALETTE:
  Midnight:    #0B1120  (deepest background — "the forest at night")
  Indigo:      #1E2D4A  (dark sections, nav, cards)
  Amber:       #E8913A  (primary accent — "the dawn", CTAs, highlights)
  Warm Cream:  #FAF6F1  (light backgrounds — "morning light")
  Charcoal:    #2C2C2C  (body text on light)
  Soft White:  #FEFEFE  (text on dark)

PRODUCT COLORS (each product has its own identity):
  Avni:        #4CAF50  (green — growth, field, community)
  Bahmni:      #2196F3  (blue — clinical, trust, precision)
  Gunak:       #FF9800  (orange — assessment, measurement)
  TeleSathi:   #9C27B0  (purple — connection, distance bridging)
  Shwaas:      #F44336  (red — urgency, emergency, breath)
  Mentor To Go:#00BCD4  (cyan — youth, future, guidance)

SEMANTIC:
  Success:     #059669
  Warning:     #D97706
  Error:       #DC2626
  Muted:       #94A3B8  (secondary text)

GLASS:
  Glass BG:    rgba(255, 255, 255, 0.06)
  Glass Border:rgba(255, 255, 255, 0.12)
  Glass Blur:  backdrop-filter: blur(16px)
```

### Typography — "Authority meets Warmth"

```
DISPLAY (Headlines, Impact Numbers):
  Font: ClashDisplay (already loaded)
  Weights: 600 (semibold), 700 (bold)
  Sizes:
    Hero statement: clamp(2rem, 5vw, 4.5rem)
    Section title:  clamp(1.75rem, 3.5vw, 3rem)
    Card title:     clamp(1.25rem, 2vw, 1.75rem)
  Letter-spacing: -0.02em (tighter for display)
  Line-height: 1.1

NARRATIVE (Story text, long-form):
  Font: Georgia / serif fallback (system serif for performance)
  Weight: 400
  Size: clamp(1.125rem, 2vw, 1.375rem)
  Line-height: 1.7
  Color: slightly muted (#4A4A4A on light, #C8C8C8 on dark)
  Max-width: 680px (optimal reading measure)

BODY (UI text, descriptions, metadata):
  Font: Inter (already loaded)
  Weights: 400, 500, 600
  Sizes:
    Body:    1rem (16px)
    Small:   0.875rem (14px)
    Caption: 0.75rem (12px)
  Line-height: 1.6

IMPACT NUMBERS:
  Font: ClashDisplay
  Weight: 700
  Size: clamp(3rem, 8vw, 6rem)
  Color: Amber (#E8913A)
  Animation: Count-up on scroll intersection
```

### Spacing System

```
Section Padding:
  Mobile:  py-16 (64px)
  Tablet:  py-20 (80px)
  Desktop: py-24 (96px)

Content Max-Width:
  Narrative: max-w-2xl (672px) — for story text
  Standard:  max-w-6xl (1152px) — for grids
  Full:      max-w-7xl (1280px) — for maps, hero

Card Padding:
  Compact: p-4
  Standard: p-6
  Generous: p-8

Gap System:
  Tight:   gap-2 (8px)
  Normal:  gap-4 (16px)
  Relaxed: gap-6 (24px)
  Spacious:gap-8 (32px)
```

### Elevation & Glass

```
CARD LEVELS:
  Level 0: No shadow, border only (subtle)
  Level 1: shadow-sm + border (default cards)
  Level 2: shadow-md (hover state)
  Level 3: shadow-xl + glow (featured/active)

GLASS CARDS (dark sections):
  Background: rgba(255, 255, 255, 0.04)
  Border: 1px solid rgba(255, 255, 255, 0.08)
  Backdrop-filter: blur(16px) saturate(1.2)
  Hover: Background → rgba(255, 255, 255, 0.08)

GLOW EFFECTS:
  Amber glow: box-shadow: 0 0 60px rgba(232, 145, 58, 0.15)
  Product glow: box-shadow: 0 0 40px [product-color]/15
```

---

## IV. INTERACTION DESIGN

### Scroll-Driven Animations

```
PAGE ENTRANCE:
  - Fade-in-up: translateY(30px) → 0, opacity 0→1, duration 0.6s
  - Stagger: each child delayed +0.08s
  - Trigger: IntersectionObserver at 15% visibility

NARRATIVE SECTIONS:
  - Text blocks fade in as user scrolls into them
  - Background color transitions smoothly between sections (CSS scroll-timeline or JS)
  - Product cards slide in from alternating sides

IMPACT COUNTERS:
  - Start at 0, count up to final number over 2s
  - Easing: cubic-bezier(0.16, 1, 0.3, 1) — fast start, gentle end
  - Trigger once (not re-trigger on re-scroll)

INDIA MAP:
  - States draw in with SVG stroke-dasharray animation
  - Dots pulse in after state outline completes
  - Stagger by geography (south → north)

PARALLAX:
  - Background elements: translateY at 0.3x scroll speed
  - Foreground text: translateY at 0.7x scroll speed
  - Subtle — never disorienting
```

### Mobile-First Interactions

```
HAPTIC FEEDBACK (navigator.vibrate API):
  - CTA button tap: 10ms pulse
  - Product card tap: 15ms pulse
  - Form submission: [10, 50, 10] pattern (success)
  - Map dot tap: 5ms micro-pulse

  Implementation:
    const haptic = (pattern: number | number[]) => {
      if ('vibrate' in navigator) navigator.vibrate(pattern);
    };

GESTURE NAVIGATION:
  - Product cards: horizontal swipe carousel on mobile
  - Case studies: swipe between stories
  - Bottom sheet for map project details (swipe up to expand, down to dismiss)

SNAP SCROLL (Homepage narrative):
  - scroll-snap-type: y mandatory (on mobile only)
  - Each act is one snap section (100dvh)
  - Subtle scroll indicator dot-trail on right edge

TOUCH TARGETS:
  - All interactive elements: min 48x48px
  - CTA buttons: min-height 52px, full-width on mobile
  - Navigation items: py-3 px-4 minimum

PROGRESSIVE DISCLOSURE:
  - Product features: Show 3 on mobile, "See all features" expands
  - Team bios: Photo + name visible, tap to reveal full bio
  - Case studies: Title + one-line visible, tap to expand
```

### Micro-Animations

```
BUTTON HOVER (Desktop):
  - Background: smooth color shift (200ms)
  - Transform: translateY(-1px) (subtle lift)
  - Box-shadow: elevate one level

BUTTON PRESS:
  - Transform: scale(0.98) (tactile press)
  - Duration: 100ms

CARD HOVER:
  - Border: opacity 0 → 1 (amber tint)
  - Shadow: elevate one level
  - Product icon: subtle scale(1.05)
  - Duration: 200ms ease-out

NAV SCROLL:
  - Transparent → backdrop-blur on scroll (>50px)
  - Logo: full text → icon-only at smaller breakpoint
  - Duration: 300ms

LINK HOVER:
  - Underline draws in from left (width 0→100%)
  - Color shift to amber
  - Duration: 200ms

LOADING STATES:
  - Skeleton screens (not spinners) for async content
  - Subtle pulse animation on skeletons
  - Map: state outlines shimmer before data loads
```

---

## V. COMPONENT SPECIFICATIONS

### 1. CinematicHero (Homepage Act 1)

```
Structure:
  <section className="relative min-h-[100dvh] bg-[#0B1120] flex items-center justify-center overflow-hidden">
    <!-- Background: Faint topographic SVG map of India, animated stroke -->
    <!-- Floating amber particles (CSS, no canvas for performance) -->
    <div className="max-w-2xl mx-auto px-6 text-center">
      <p className="font-serif text-lg md:text-xl text-[#C8C8C8] leading-relaxed animate-fade-in">
        "In 2016, inside a tiger reserve in Chhattisgarh..."
      </p>
    </div>
    <!-- Scroll indicator: animated chevron at bottom -->
  </section>

Behavior:
  - Text fades in word-by-word on load (staggered, 30ms per word)
  - Background map lines slowly draw in (stroke-dasharray)
  - Scroll indicator pulses after 3s delay
  - On scroll: text opacity decreases, map becomes more visible
```

### 2. NarrativeSection (Story blocks)

```
Structure:
  <section className="relative py-20 md:py-28 [background transitions per section]">
    <div className="max-w-2xl mx-auto px-6">
      <blockquote className="font-serif text-xl md:text-2xl leading-relaxed">
        {quote}
      </blockquote>
      <!-- Optional: supporting detail in Inter -->
    </div>
  </section>

Behavior:
  - Each section has its own background color (smooth CSS transition)
  - Quote fades in on scroll intersection
  - Optional ambient element (floating shape, subtle gradient orb)
```

### 3. ProductStoryCard

```
Structure:
  <div className="group relative grid md:grid-cols-2 gap-8 items-center py-12">
    <!-- Left: Story text -->
    <div>
      <p className="font-serif text-lg text-muted italic mb-4">{humanStory}</p>
      <h3 className="font-heading text-2xl font-bold mb-2">{productName}</h3>
      <p className="text-base text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center gap-2 text-sm text-amber-500">
        <span className="font-semibold">{impactStat}</span>
      </div>
      <Button>Explore {productName} →</Button>
    </div>
    <!-- Right: Product visual (icon + glass card with key feature) -->
    <div className="glass-card p-8 rounded-2xl">
      <ProductIcon className="w-12 h-12 text-[productColor]" />
      <!-- 3 key features as minimal list -->
    </div>
  </div>

Behavior:
  - Alternates: odd cards text-left/visual-right, even cards reversed
  - Glass card has product-colored glow on hover
  - Slide-in from left (odd) or right (even) on scroll
  - Mobile: stacks vertically, no alternation
```

### 4. ImpactCounter

```
Structure:
  <section className="py-20 bg-[#0B1120]">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
      {stats.map(stat => (
        <div className="text-center">
          <span className="font-heading text-5xl md:text-6xl font-bold text-amber-400">
            <AnimatedCounter target={stat.number} suffix={stat.suffix} />
          </span>
          <p className="text-sm text-[#94A3B8] mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>

Data:
  { number: 60, suffix: '+', label: 'Nonprofits Partnered' }
  { number: 500000, suffix: '+', label: 'Lives Touched' }
  { number: 3000, suffix: '+', label: 'Frontline Workers' }
  { number: 6, suffix: '', label: 'Open Source Products' }
  { number: 25, suffix: '+', label: 'States Across India' }
```

### 5. IndiaMap (Interactive)

```
Structure:
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading>Where We Work</SectionHeading>
      <!-- Filter pills: All | Avni | Bahmni | Gunak | TeleSathi -->
      <div className="relative aspect-[4/5] md:aspect-[16/10]">
        <svg viewBox="..." className="w-full h-full">
          <!-- India state paths (simplified topojson) -->
          <!-- Animated dots at implementation locations -->
        </svg>
        <!-- Hover/tap card overlay for selected project -->
      </div>
    </div>
  </section>

Behavior:
  - SVG-based (no external map library — faster, lighter)
  - State outlines draw in on first view
  - Dots pulse with product color
  - Click/tap dot → slide-in card with: Project name, Partner org, Product used, Key impact, "Read Case Study →"
  - Filter pills animate dot visibility (fade out non-matching)
  - Mobile: Dots are larger (12px), tap opens bottom sheet
```

### 6. TimelineJourney (Story page)

```
Structure:
  <section className="py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative">
        <!-- Vertical line (amber, animated draw-in) -->
        {milestones.map((m, i) => (
          <div className={`flex gap-8 ${i % 2 ? 'flex-row-reverse' : ''} mb-16`}>
            <div className="w-1/2">
              <span className="text-amber-400 font-heading text-sm">{m.year}</span>
              <h3 className="font-heading text-xl font-bold mt-1">{m.title}</h3>
              <p className="text-muted-foreground mt-2">{m.description}</p>
              {m.product && <Badge color={productColor[m.product]}>{m.product}</Badge>}
              {m.impact && <p className="text-amber-400 font-semibold mt-2">{m.impact}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

Behavior:
  - Center line draws downward as user scrolls
  - Each milestone fades in when line reaches it
  - Alternates left/right on desktop, all-left on mobile
  - Product badge glows with product color
```

### 7. FunderTrustSection (For Funders page)

```
Structure:
  <section className="py-20 bg-warm-cream">
    <div className="max-w-4xl mx-auto px-4">
      <h2>Partnering for Systemic Change</h2>

      <!-- Theory of Change diagram (CSS/SVG) -->
      <!-- Registration badges: CSR-1, 80G, 12A, Section-8 -->
      <!-- Annual report download cards -->
      <!-- "Schedule a Conversation" CTA (prominent, amber) -->
    </div>
  </section>

Registration Badges:
  - Glass cards with official certification names
  - Small check icon (green) confirming active status
  - These are CRITICAL trust signals for Indian CSR funders
```

### 8. PartnerMarquee

```
Structure:
  <div className="overflow-hidden py-8 border-y border-border/30">
    <div className="flex animate-marquee gap-12">
      {[...partners, ...partners].map(p => (
        <img src={p.logo} alt={p.name} className="h-8 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all" />
      ))}
    </div>
  </div>

Behavior:
  - Infinite horizontal scroll (CSS animation, no JS)
  - Grayscale by default, color on hover
  - Pauses on hover (animation-play-state: paused)
  - Double the array for seamless loop
```

---

## VI. MOBILE-FIRST SPECIFICATIONS

### Navigation (Mobile)

```
BOTTOM BAR (not hamburger):
  - Fixed bottom, glass background, 5 items:
    [Home] [Products] [Our Work] [Story] [Menu]
  - Menu opens full-screen overlay with all links
  - Active item: amber dot indicator above icon
  - Safe area padding for notched phones (env(safe-area-inset-bottom))
  - Haptic pulse on tap (10ms)

Replaces: Current hamburger menu (top-right)
Why: Thumb-reachable zone, higher engagement, modern mobile pattern
```

### Homepage (Mobile)

```
SNAP SECTIONS:
  - Each narrative act = one full-screen snap section
  - scroll-snap-type: y mandatory
  - Scroll indicator: dots on right edge showing progress
  - Swipe up between acts

PRODUCT CARDS:
  - Horizontal swipe carousel (CSS scroll-snap-x)
  - Peek: next card visible at 15% width
  - Dot indicators below
  - Swipe haptic (5ms per card boundary)

IMPACT COUNTERS:
  - 2-column grid on mobile (vs 5-column desktop)
  - Count-up triggers on visibility
```

### Map (Mobile)

```
  - Full-width, taller aspect ratio (4:5)
  - Larger dots (14px) for fat-finger friendliness
  - Tap dot → bottom sheet slides up with project info
  - Bottom sheet: swipe up to expand, down to dismiss
  - No hover states (tap-only)
```

---

## VII. DARK/LIGHT MODE

### Light Mode (Default for first visit)
```
Background: #FAF6F1 (warm cream — not pure white)
Text: #2C2C2C (charcoal — not pure black)
Cards: white with subtle warm shadow
Accent: #D97A1A (slightly deeper amber for contrast)
Nav: white/cream with subtle shadow
```

### Dark Mode
```
Background: #0B1120 (deep midnight blue — not pure black)
Text: #E8E4DF (warm off-white)
Cards: glass (rgba(255,255,255,0.04) + blur)
Accent: #E8913A (amber — pops beautifully on dark)
Nav: glass overlay
```

### Narrative sections (Homepage) are ALWAYS dark
- The cinematic scroll experience uses the dark palette regardless of mode
- Ensures the emotional impact of the story is preserved
- Light mode kicks in for content pages (products, articles, about)

---

## VIII. PERFORMANCE BUDGET

```
Target: Lighthouse 95+ on mobile

CORE WEB VITALS:
  LCP: < 2.5s (hero text is LCP element — no image dependency)
  FID: < 100ms
  CLS: < 0.1

ASSET BUDGET:
  JS (total): < 150KB gzipped
  CSS: < 30KB gzipped
  Fonts: ClashDisplay (30KB) + Inter (variable, 40KB) = 70KB
  SVG map: < 50KB (simplified India topography)
  Total first load: < 300KB

STRATEGY:
  - No external map library (Mapbox/Leaflet) — pure SVG
  - No animation library beyond motion (already present, tree-shakeable)
  - Dynamic imports for below-fold sections
  - SVG icons via Lucide (tree-shaken)
  - System serif for narrative text (Georgia) — zero font cost
  - Image: next/image with WebP, priority on hero only
  - Intersection Observer for scroll animations (native API)
  - CSS scroll-snap for mobile (no JS scroll library)
  - Haptic API: 2 lines of JS, no library needed
```

---

## IX. SEO & CONVERSION

### Structured Data
```
- Organization (enhanced with founder info, registration details)
- NonprofitType (for Google's nonprofit carousel)
- SoftwareApplication (for each product)
- FAQPage (homepage FAQs)
- BreadcrumbList (all pages)
- WebPage with speakable (for voice search)
```

### Conversion Funnels

```
FUNNEL 1: NGO Decision-Maker
  Landing → Story/Products → Case Study → "Schedule a Discussion"

FUNNEL 2: CSR/Funder
  Landing → For Funders → Impact Evidence → "Partner With Us"

FUNNEL 3: Developer/Contributor
  Landing → Products → GitHub → Contribute

FUNNEL 4: Job Seeker
  Landing → About → Join Us → Apply

Each funnel has a distinct CTA color treatment:
  NGO: Amber (primary)
  Funder: Deep blue
  Developer: Green
  Job seeker: Purple
```

### Meta & Social

```
OG Image: Dynamic — product/page specific
Twitter Card: Large image
Description: "Samanvay builds open-source digital infrastructure for India's social sector. 60+ nonprofits. 500,000+ lives. 6 products."
```

---

## X. EMOTIONAL DESIGN PRINCIPLES

1. **Lead with the human, not the product.** Every section should start with a person or a problem before introducing technology.

2. **Darkness before dawn.** The site's visual journey mirrors the narrative: from the constraints of paper systems (dark, heavy) to the possibilities of digital infrastructure (light, expansive).

3. **Earned complexity.** Start simple (one sentence, one story). Layer detail as the user scrolls deeper. Never overwhelm.

4. **Indian context, global quality.** Use Indian names, places, conventions (lakh/crore, state names, SEBI/NHSRC references). But the design quality should match the best global nonprofits (charity:water, Noora Health).

5. **Respectful interactivity.** Animations serve the story, never distract from it. Haptics confirm, never surprise. Every interaction should feel intentional.

6. **The field worker is the protagonist.** Not the founders. Not the software. The person in the forest, the hospital, the school — they are the heroes. Samanvay is the infrastructure that makes their heroism sustainable.

---

## XI. IMPLEMENTATION ORDER

```
Phase 1: Foundation (3-4 days)
  - Design system (colors, typography, spacing in globals.css)
  - New layout (bottom nav mobile, glass nav desktop)
  - CinematicHero component
  - NarrativeSection component
  - Dark/light mode with narrative-always-dark

Phase 2: Homepage (2-3 days)
  - Full cinematic scroll (Acts 1-4)
  - ProductStoryCards
  - ImpactCounters
  - PartnerMarquee
  - Mobile snap-scroll

Phase 3: Key Pages (3-4 days)
  - /story (Timeline, parallax narrative)
  - /products (Story-driven product cards)
  - /for-funders (Trust signals, theory of change)
  - /our-work (India map, case studies)

Phase 4: Polish (2-3 days)
  - Haptic feedback integration
  - Micro-animations
  - Performance optimization
  - SEO structured data
  - Accessibility audit
  - Mobile gesture testing

Total: ~10-14 days for full implementation
```

---

## XII. REFERENCE WEBSITES (Ranked by Relevance)

1. **charity:water** — Gold standard for nonprofit storytelling + transparency
2. **Noora Health** — Indian health tech nonprofit, premium design
3. **Digital Green** — Indian context, farmer-first narrative
4. **Medic (medic.org)** — Open-source health tools, similar mission
5. **Last Mile Health** — Narrative tension + resolution pattern
6. **Pratham** — Indian education nonprofit, impact-forward design
7. **Barefoot College** — Grassroots narrative, women-centered

---

*This blueprint is the complete creative and technical brief. Every design decision traces back to the story of Kaushilya walking house to house in a tiger reserve — and the question of what becomes possible when infrastructure matches commitment.*
