# Design Overhaul Plan for Sourcesmart Landing Page

Based on the founder's feedback and the inspiration sources (Supahero, Godly, Saaspo), we will elevate the landing page from "ok" to **"premium & world-class"**.

## Core Design Philosophy
- **Style:** "Bento Grid" layouts, Glassmorphism, and High-Contrast Dark Mode.
- **Vibe:** Technical yet accessible, premium, fast, and trustworthy.
- **Typography:** Large, bold headings (Inter or similar sans-serif) with tight tracking.
- **Motion:** Subtle entrance animations and micro-interactions on hover.

## Key Section Upgrades

### 1. Hero Section (The "Wow" Moment)
- **Current:** Standard text + image.
- **New Pattern:** Centered, massive typography with a "background glow" effect.
- **Visual:** A high-fidelity "App Dashboard" preview with a 3D tilt or glow effect, sitting on a glass surface.
- **Inspiration:** `supahero.io`, `linear.app`.

### 2. Features as a Bento Grid
- **Current:** Vertical list of features.
- **New Pattern:** A responsive **Bento Grid** layout.
  - **Large Box:** Core value prop (e.g., "AI Procurement").
  - **Medium Boxes:** Secondary features (e.g., "Real-time Analytics", "Vendor Matching").
  - **Small Boxes:** Stats or "Speed" indicators.
- **Interactivity:** Hovering over a box reveals a subtle gradient or animation.
- **Inspiration:** `landing.love`, `bento.grids`.

### 3. "Wall of Love" (Testimonials)
- **Current:** Standard cards.
- **New Pattern:** A masonry grid or infinite scroll marquee that feels dense and rich with social proof.
- **Style:** Dark cards with glowing borders.

### 4. Footer
- **Current:** Basic links.
- **New Pattern:** Massive "Fat Footer" with a call-to-action integrated at the top.
- **Inspiration:** `footer.design`.

## Implementation Steps

1.  **Global Styles Upgrade:**
    -   Refine color palette (Deep blacks `#0a0a0a`, vibrant blues/purples for accents).
    -   Add utility classes for "glass" and "glow" effects.

2.  **Component Construction:**
    -   `Hero.tsx`: Rewrite for impact.
    -   `BentoGrid.tsx`: Create a reusable grid component.
    -   `FeatureCard.tsx`: Individual cards for the grid.
    -   `Footer.tsx`: Expand and style.

3.  **Polish:**
    -   Add `framer-motion` for reveal animations.
    -   Ensure mobile responsiveness for the challenging Bento layout.
