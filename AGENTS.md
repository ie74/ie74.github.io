# AGENTS.md — ie74.github.io

Project context and working agreements. You can read the code yourself: this file only holds what the code does NOT tell you (decisions, reasons, preferences).

## About the user

- Pietro (handle: ie74), university student based in Italy. Builds software as a hobby.
- Comfortable with Python, C, C++, JS, HTML, CSS. Uses Blender and Illustrator.
- Photography: architecture, landscapes, portraits. Post-processing in Darktable and Photoshop.
- Writes informal Italian or English, often with typos: infer context, avoid piling up clarifying questions.

## How to work with him

- Direct answers, no filler.
- Explain the WHY behind technical choices. He prefers understanding and doing it himself over receiving code blocks to paste: propose, explain, then implement when asked or when clearly implied.
- Iterative loop: implement -> he tests -> he flags a specific breakage -> targeted fix. No full rewrites when a patch will do.
- He edits files by hand: re-read a file before modifying it, and treat his version as the source of truth.
- Prefer the simple solution. Past sessions repeatedly converged back to the simpler option after trying complex ones.
- Aesthetic: clean, minimal, no performative personality. No emoji in site copy, no developer-culture cliches.
- Site copy language: check existing pages and match it; do not assume.

## The project

- Personal portfolio on GitHub Pages (`ie74.github.io`): photography, 3D work, code.
- Stack: vanilla HTML, CSS, JavaScript. NO frameworks, no build step.
- The site name stays **ie74** (not "Duality Studio").
- Ground-up rework; the old site lives on the `old-main` branch.
- Licenses: GPL-3.0 for code, CC BY-NC-ND 4.0 for images.
- Folders: pages in `/pages`, CSS in `/css`, JS in `/js`, photos in `/assets/photos` (`thumb/` and `full/`), data in `/data`.
- Use root-anchored absolute paths (`/assets/photos/...`): relative paths caused trouble with GitHub Pages caching.

## Design: source of truth

- The rework frontend originated from Google Stitch (3 screens: landing, photography, engineering). Design system: **"Monochrome Discipline"**.
- **`docs/DESIGN.md` wins** for colors, typography, spacing, components.
- Key docs/DESIGN.md rules: 0px radius everywhere, zero box-shadow, depth only via 1px borders and tonal shifts, metadata in uppercase monospace.
- Tokens from the old design (warm palette `#F5F2EE` / orange `#E8500A`, Merriweather/Raleway) are legacy: do not reintroduce them. If any remain in the code, flag them before changing.
- Projects page: dark theme. Other pages: light.

## Decisions already made (don't reopen without a reason)

- Structure: landing (hero + photo preview + short about), gallery page, about, projects, contact.
- Gallery: keep masonry + lightbox. Photos have NO captions/subtitles and are organized in collections (albums). Very thin gap between photos. `pointer` cursor (not zoom).
- Desktop header: Photography/Projects toggle (each segment in its own theme color), plus About and Contact links. Mobile: hamburger with link list.
- Scroll-reactive header (style change, hides on scroll down, shows on scroll up), two-row structure `#header-top` / `#header-bottom`.
- Contact: email (mailto), GitHub, Discord.
- Projects: half-page blocks on the same page (no separate per-project pages), each with GitHub link, live link, info, how-to, long description.
- Copy: short on the landing, full on dedicated pages. Sober, professional, never inflated.

## Asset pipeline

- Python + Pillow script, run from the repo root: generates thumbnails (~600px wide, `_thumb` suffix), copies originals to `full/`, appends entries to `data/photos.json`.
- Filenames are not slugified. The script handles duplicates and creates `data/` if missing.

## Technical lessons (bugs already hit)

- **CSS specificity**: several bugs were specificity conflicts (e.g. `.lightbox.is-open .lightbox-image` at 3 classes beating 2-class rules) and inline JS styles blocking class-based CSS. Check these two first.
- **JS/CSS source of truth**: read layout values (e.g. gap) from CSS via `getComputedStyle`; never duplicate them in JS.
- **Marquee**: use `margin-right` on individual items, not `gap`, to keep the exact `-50%` translate midpoint for a seamless loop.
- **Layout shift**: declare `aspect-ratio` inline on every image.
- **`text-wrap: balance`** needs `display: block` spans instead of `<br>`.
- **`display: none` is not animatable**: use `opacity` + `position: absolute` + `transform` for transitions.
- **Lightbox**: CSS transitions with a preload pattern to avoid a flash of the old image.
- **Masonry**: CSS Grid with `grid-auto-rows: 8px` + JS for columns, initialized via `data-*` attributes with a single auto-init (`querySelectorAll('.masonry-grid').forEach(initMasonryGallery)`). If real photos produce visible gaps, plan B is true JS bin-packing.
- **Page sync**: `pages/gallery.html` tends to lag behind `index.html` (resources/scripts added only to the index). When adding assets or scripts, check every page.

## Rework to-do

- Share preview (Open Graph / Twitter card meta).
- GitHub repo links and images for projects.
- Half-page project blocks (see above).
- Full-bodied About page.
- Contact section/page.
- More editorial text and detail as in the Stitch screenshots (without breaking docs/DESIGN.md rules).

## Photography (for copy and metadata)

- Aspect ratios: 3:2, 2:3, 4:3.
- Caption convention in data: "Location, Country, date".
