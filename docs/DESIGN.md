---
name: Monochrome Discipline
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45474a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777b'
  outline-variant: '#c6c6ca'
  surface-tint: '#5e5e60'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1c1e'
  on-primary-container: '#848386'
  inverse-primary: '#c7c6c9'
  secondary: '#555f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f1'
  on-secondary-container: '#596372'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1f1b19'
  on-tertiary-container: '#8a827f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e2e4'
  primary-fixed-dim: '#c7c6c9'
  on-primary-fixed: '#1b1c1e'
  on-primary-fixed-variant: '#464749'
  secondary-fixed: '#d9e3f4'
  secondary-fixed-dim: '#bdc7d8'
  on-secondary-fixed: '#121c28'
  on-secondary-fixed-variant: '#3e4755'
  tertiary-fixed: '#eae0dd'
  tertiary-fixed-dim: '#cec5c1'
  on-tertiary-fixed: '#1f1b19'
  on-tertiary-fixed-variant: '#4b4643'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 5rem
    fontWeight: '700'
    lineHeight: 5.25rem
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
  label-meta:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.06em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
---
 
## Brand & Style
 
This design system serves a dual-discipline practice bridging computational rigor and analog photographic perception. The atmosphere is quiet, deliberate, and architectural. It operates with the precision of a Swiss gallery catalog and the austere clarity of an IDE.
 
### Emotional Response & Principles
- **Restraint Over Decoration:** The interface recedes entirely to give precedence to full-bleed visual documentation and structured code architecture.
- **Architectural Cadence:** Micro-details rely on hairline dividers, monospace metadata, and razor-sharp typographic alignment rather than heavy containers or artificial ornamentation.
- **Technical Poise:** Interactions are immediate and physical—no sluggish motion curves, excessive blur filters, or skeuomorphic embellishments.
- **Duality:** The aesthetic mediates between organic visual capture (photography exhibitions, tonal dynamics) and systematic structure (runtime engines, shaders, systems engineering).
## Colors
 
The palette is restricted to an architectural tritone hierarchy designed to prevent chromatic collision with photographic work.
 
### Palette Architecture
- **Primary Canvas (`#F9FAFB`):** Crisp, desaturated off-white providing museum-grade neutrality.
- **Surface Elevation (`#F3F4F6`):** Secondary backing for technical breakdowns, code blocks, and metadata sidebars.
- **Structural Lines (`#E5E7EB`):** Exact hairline boundaries defining viewport partitions and content framing.
- **Core Ink (`#121315`):** Deep anthracite providing decisive typographic contrast without the harsh artificial glare of pure `#000000`.
- **Secondary Charcoal (`#1E2022`):** Primary tone for interactive components, dark code canvases, and framing mats.
- **Muted Slate (`#4B5563`):** Technical indices, camera metadata (EXIF), and secondary project descriptions.
- **High-Contrast Focal Accent (`#2563EB`):** Spacing-sparse interactive states, active repository status indicators, and focal focus rings.
### Dark Color Variant (Workspaces & Darkroom Mode)
When switching into photo-inspection or interactive code modes:
- Canvas shifts to `#121315`.
- Secondary surfaces shift to `#1E2022`.
- Border networks invert to `#2E3236`.
- Typography shifts to `#F9FAFB` and `#9CA3AF`.
## Typography
 
Typography establishes an editorial tension between contemporary neo-grotesque geometry and technical monospaced documentation.
 
- **Primary Typeface (Plus Jakarta Sans):** Modern, disciplined neo-grotesque with sharp geometry. Used for major project titles, section identifiers, and narrative project statements. Tighter tracking at larger scales emphasizes tension and structure.
- **Secondary Monospace (JetBrains Mono):** Delivers technical credibility across camera exposure data (ISO, shutter, aperture, lens focal length), commit hashes, runtime metrics, tech stack listings, and timestamps.
- **Editorial Conventions:** Headlines always lead with sentence casing. Running numbers, dates, and technical tags always appear in monospace caps.
## Layout & Spacing
 
The spatial engine uses a modular 12-column grid bound by strict perimeter borders. Negative space functions as structural matter, separating distinct disciplines without visual friction.
 
### Grid Systems
- **Desktop (1024px+):** 12-column fluid grid, `2.5rem` gutters, `3rem` margins. Maximum content boundary capped at `1440px`.
- **Tablet (768px - 1023px):** 8-column grid, `1.5rem` gutters, `2rem` margins.
- **Mobile (< 768px):** 4-column grid, `1rem` gutters, `1.25rem` margins. Sidebars collapse to inline technical accordions.
### Sectioning Philosophy
Vertical page divisions are paced via hairline `#E5E7EB` horizontal grid tracks. Dual-discipline indexing organizes software and photography into asymmetric balance:
- **Exhibition Grid:** 2-column or 3-column masonry with expansive, variable-aspect frames.
- **Engineering Ledger:** Single-column split row tables containing project title, technological stack, release date, and direct deployment link.
## Elevation & Depth
 
This system intentionally rejects simulated drop shadows, skeuomorphic blur gradients, and three-dimensional extrusion. Depth is conveyed entirely through tonal layering, surface contrasts, and precise hairline borders.
 
### Rules of Spatial Hierarchy
- **Level 0 (Canvas):** Ground plane (`#F9FAFB`) hosting foundational copy and raw media embeds.
- **Level 1 (Panels & Frames):** Recessed or elevated zones marked by a 1px solid `#E5E7EB` border and subtle background shifts to `#F3F4F6`.
- **Level 2 (Technical Overlays & Lightboxes):** High-density modal environments using pure `#121315` backgrounds with `#2E3236` hairline outlines, creating a distraction-free framing apparatus for photography inspections and live shader rendering.
- **Zero-Shadow Constraint:** No standard element uses `box-shadow`. Overlays use absolute background opacity to separate layers.
## Shapes
 
The design uses a pure architectural shape system: zero border-radius (`0px`).
 
- **Edges:** Sharp corners throughout all viewports, cards, buttons, media viewports, and modals.
- **Intent:** Unrounded edges evoke contact sheets, physical print mats, terminal windows, and mechanical viewfinders.
- **Focal Highlights:** Selection markers, category switches, and state indicators utilize razor-edge rectangles and solid hairline dividers.
## Components
 
### Buttons & Interactive Controls
- **Primary Action:** Solid `#121315` fill, `#F9FAFB` label-code typography, 0px radius, zero shadow. Inner spacing: `0.75rem` vertical by `1.5rem` horizontal. Hover transforms background to `#1E2022` with a 1px solid inset border.
- **Secondary / Ghost:** 1px solid `#E5E7EB` border, transparent background, `#121315` text. On hover, background shifts to `#F3F4F6` and border transitions to `#121315`.
- **Monospace Action Links:** Naked typography using `label-code` with an inline arrow (`→`). Underlined with a 1px offset line that expands right-to-left on hover.
### Filter & Category Chips
- Rectangular tags wrapped in a 1px solid `#E5E7EB` frame.
- Set in `label-meta` uppercase.
- Inactive state: `#F9FAFB` background, `#4B5563` typography.
- Active state: `#121315` fill, `#F9FAFB` typography, 1px solid `#121315` outline.
### Exhibition Project Cards (Dual-Discipline)
- **Photography Frame:** Minimalist mat frame. Image sits flush against top and sides with a 1px bottom divider line separating the visual from EXIF details (focal length, shutter speed, location). Caption uses `label-meta` in `#4B5563`.
- **Engineering Ledger Row:** A horizontal split component. Left: monospaced project number and year (`[01] // 2024`). Center: Project title in `headline-sm` with a secondary list of technical tags (e.g., `Rust`, `WebGPU`, `GLSL`). Right: interactive repository / live instance launcher icon.
### Form Inputs & Terminal Fields
- **Input Fields:** Flat rectangular baseline or 1px bounding box in `#E5E7EB`.
- Text typed in `label-code`. Placeholder text set in `#4B5563` with 50% opacity.
- Focus state switches border to a crisp 1px `#121315` border. No glowing halos or fuzzy drop-shadow rings.
### Code / Inspection Blocks
- Surface container rendered in `#1E2022` with `#F9FAFB` monospaced code.
- Header strip containing file name, size, and line count rendered in `0.6875rem` uppercase monospace over a 1px `#2E3236` border.