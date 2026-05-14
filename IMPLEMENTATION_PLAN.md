# Cruise Trade News — Wireframe Prototype Implementation Plan

This document records the architecture for the CTN navigable wireframe prototype:
section components, page templates, routes, mock data sources, interactions, and
assumptions made during the build.

## Stack and conventions

- Next.js **16.2.6** (App Router) + React **19.2.4** + Tailwind CSS **v4**.
- Path alias `@/*` resolves to the repo root; **no `src/` directory**.
- Theme tokens defined CSS-first in `app/globals.css` using `@theme inline { ... }`.
- All section UI is wireframe fidelity: zinc / neutral palette, dashed/solid borders,
  labeled `Placeholder` blocks instead of real images. No external network calls.
- Server Components by default; `'use client'` only where interactivity is required.

## Relume install outcome

Attempting `npm install @relume_io/relume-ui @relume_io/relume-tailwind` failed with
`ERESOLVE` — Relume's peer dependency is React `^18.2.0` and this project is on
React 19.2.4. Re-running with `--legacy-peer-deps` succeeded but the packages would
not be runtime-compatible with React 19 (peer mismatch), and `@relume_io/relume-tailwind`
ships a Tailwind v3 preset that is incompatible with the project's Tailwind v4
PostCSS pipeline. **Decision**: Relume packages were uninstalled. The visual fidelity
target — Relume-style wireframes per https://abn-zeta.vercel.app/ and
https://react-docs.relume.io/ — is achieved with locally-built Tailwind v4 patterns.

## Section components (28 total, hard cap honored)

All section components live in `components/sections/`. Templates compose them.

1. `SiteHeader` — sticky global nav, mobile hamburger, search trigger.
2. `SiteFooter` — link columns, legal, newsletter mini-CTA.
3. `PageHero` — generic hero used by category and informational pages.
4. `EditorialHero` — home-page editor-led hero with featured story.
5. `Breadcrumbs` — used on all detail pages.
6. `SearchOverlay` — global mock search across articles / events / magazines.
7. `TopicSelector` — "Choose your news" tile grid, saves a topic to localStorage.
8. `ArticleCard` — single content card with variants (default, compact, feature).
9. `ArticleGrid` — responsive grid of `ArticleCard`s, supports loading skeleton.
10. `FeaturedArticleRail` — horizontal feature rail of priority stories.
11. `TrendingList` — numbered trending stories list.
12. `FilterBar` — active chips, clear/reset, category filtering UI.
13. `SortControl` — sort dropdown wired via local state.
14. `TabsNav` — reusable tab strip (used in Magazines, Knowledge Hub, Agent Portal).
15. `NewsletterCTA` — email signup with success state.
16. `EventsPromo` — home-page promo strip for upcoming events.
17. `EventCard` — single event card.
18. `EventGrid` — grid of `EventCard`s.
19. `MagazineCard` — single issue card.
20. `MagazineGrid` — grid of `MagazineCard`s.
21. `PodcastBlock` — podcast hero + episode list.
22. `CruiseCorner` — composite home section (podcast + trending hub + magazine).
23. `AgentIncentiveCard` — single incentive / competition / offer card.
24. `AgentIncentivesGrid` — grid of incentive cards with category filter.
25. `KnowledgeCategoryGrid` — clickable category grid for the Knowledge Hub.
26. `DetailHeader` — top of every article / event / magazine detail page.
27. `RelatedContent` — "Related" rail at the foot of detail pages.
28. `EmptyState` — shown when filters return zero results.

Confirmed count: **28** unique reusable section components (does not exceed cap).

## Templates (NOT counted toward the 28)

Located in `components/templates/`.

- `NewsCategoryTemplate` — single template for `/news/ocean`, `/news/river`,
  `/news/cabins`, `/news/luxury`, `/news/expedition`, `/news/latest`.
- `FeatureCategoryTemplate` — single template for `/features-analysis/analysis-comment`,
  `/features-analysis/interviews`, `/features-analysis/mktg-tips`, `/features-analysis/cruise-review`.
- `EventDetailTemplate` — template for all four event detail routes.
- `SimpleContentPageTemplate` — used for `/about`, `/contact`, `/advertise`,
  `/subscribe`, `/newsletter`, `/terms`, `/privacy`, `/cookies`.
- `ArticleDetailTemplate` — single article and single feature detail pages.

## UI primitives (NOT counted toward the 28)

Located in `components/ui/`.

- `Container` — max-width gutters wrapper.
- `Placeholder` — labeled neutral block; `kind` enum (`ship`, `river`, `cabin`,
  `expedition`, `stage`, `magazine`, `podcast`, `training`, `portrait`, `generic`).
- `WireframeTag` — small caps "Wireframe" badge used in a couple of headers.
- `Button` — link / button shared styling.
- `SectionLabel` — small caps overline.

## Hooks

Located in `lib/hooks/`.

- `useLocalState` — generic `useState` synced to `localStorage` (powers Save Topic /
  Follow Category persistence across navigation).

## Routes (all navigable from header / footer / inline links)

- `/`
- `/news`, `/news/ocean`, `/news/river`, `/news/cabins`, `/news/luxury`,
  `/news/expedition`, `/news/latest`, `/news/[slug]`
- `/features-analysis`, `/features-analysis/analysis-comment`,
  `/features-analysis/interviews`, `/features-analysis/mktg-tips`,
  `/features-analysis/cruise-review`, `/features-analysis/[slug]`
- `/magazines`, `/magazines/cruise-trade-news`, `/magazines/ctn-digital`
- `/podcast`
- `/events`, `/events/wave-awards`, `/events/cruise-summit-2026`,
  `/events/cruise-stars`, `/events/cruise-challenge`
- `/knowledge-hub`
- `/agent-portal`, `/agent-portal/competitions`, `/agent-portal/incentives`,
  `/agent-portal/offers`
- `/about`, `/contact`, `/advertise`, `/subscribe`, `/newsletter`,
  `/terms`, `/privacy`, `/cookies`

## Mock data (under `data/`)

- `navigation.ts` — primary nav, footer, social.
- `articles.ts` — typed `Article` content for News and search.
- `features.ts` — typed `Feature` content for Features & Analysis.
- `events.ts` — typed `Event` content for the four event routes.
- `magazines.ts` — typed `MagazineIssue` and brand metadata.
- `podcast.ts` — `PodcastEpisode` content.
- `knowledgeHub.ts` — knowledge categories and resources.
- `agentPortal.ts` — competitions, incentives, offers.

## Interactions implemented

- Sticky global nav with mobile hamburger.
- Global mock search overlay (header trigger) across articles, events, magazines.
- "Choose your news" category nav rail on home (pure navigation, links to the six News categories).
- Category chips + sort dropdown on list pages (driven by `useState`).
- Active filter chips with clear / reset.
- Tabs on Magazines, Knowledge Hub, Agent Portal pages.
- Breadcrumbs on every detail page.
- Newsletter signup with success state.
- "Follow category" toggle backed by `localStorage` via `useLocalState` on category pages.
- Skeleton loading state on `ArticleGrid` (simulated via `useEffect` + `setTimeout`).
- Empty state when filters/search return zero results.
- Related articles rail on detail pages.

## Home redesign (2026-05-13)

The home composition was reworked to improve hierarchy and routing affordance.
Section component count is unchanged (28 / 28) — only existing components were
edited; no new ones added, none renamed. The home agent-routing block is built
inline in `app/page.tsx` from primitives, not as a new section component.

- `EditorialHero` — now a magazine-style 1-lead-plus-3-sub-features block. New
  optional prop `subFeatures?: Article[]` (additive, backwards-compatible). Lead
  occupies left 7/12 (large `Placeholder` + single `h1` + excerpt + meta + 2 CTAs);
  right 5/12 stacks three `<article>` sub-feature rows (small image + category + `h3`).
- `TopicSelector` — converted to horizontal category navigation rail (6 tiles in
  one row on lg; horizontal scroll on narrow viewports). No longer a client
  component; localStorage Save logic removed. Heading remains `h2`
  "Choose your news".
- `TrendingList` — new optional `layout?: "list" | "grid"` prop (additive). The
  default `"list"` keeps the existing sidebar usage unchanged. `"grid"` is used
  by `CruiseCorner` for the full-width Trending Hub.
- `CruiseCorner` — restructured to two-column top (Podcast left 6/12, Magazine
  right 6/12, equal heights) with `TrendingList layout="grid"` full-width below.
- `EventsPromo` — featured event large at the top (image 7/12 + content 5/12),
  with the remaining three events in a 3-column row below. Section heading and
  "See full calendar" CTA sit above the featured card for clearer reading flow.
- Home agent-incentives block — replaced the previous `AgentIncentivesGrid`
  composition with three routing tiles (Competitions / Incentives / Offers)
  rendered inline in `app/page.tsx`, each showing live item count and linking
  to its sub-page. `AgentIncentivesGrid` is unchanged and still powers the
  `/agent-portal` listings.

## RoW-style restructure (2026-05-13)

The site was restructured to mirror the editorial layout, mega-menu, and rhythm
of Rest of World (https://restofworld.org/) while keeping all existing CTN
content and routes. **Section component count is unchanged: 28 / 28.** No new
files were added to `components/sections/`. New primitives live under `lib/`.

### Mega-menu (in `SiteHeader.tsx`)

- The eyebrow row and flat desktop nav were removed. The brand row now carries
  logo (left) + Search button + Subscribe `LinkButton` + a single dark **Menu**
  button (right cluster). The mobile-only hamburger nav is removed — mobile and
  desktop both use the mega-menu overlay.
- Clicking Menu opens a `fixed inset-0 z-50` panel (`bg-zinc-900 text-zinc-50`).
- Panel layout (rendered with `Container`):
  - Top utility row: About, Latest, Newsletter links + inline `Search` form +
    close `X` button. Submitting the inline search closes the panel and opens
    the existing `SearchOverlay` pre-filled with the typed query (new optional
    `initialQuery` prop on `SearchOverlay`).
  - Main grid `lg:grid-cols-12 gap-8`:
    - `col-span-2`: "Explore by" italic label rail.
    - `col-span-2`: EDITORIAL column (News, Features & Analysis, Magazines, Podcast).
    - `col-span-2`: NEWS CATEGORIES column (Ocean, River, Cabins, Luxury,
      Expedition, Latest).
    - `col-span-3`: TRADE column with Events (sub-listing the 4 events from
      `data/events.ts`), Knowledge Hub, Agent Portal (sub-listing
      Competitions / Incentives / Offers).
    - `col-span-3`: Newsletter sign-up rail (Name + Email + `SIGN UP` button in
      `bg-teal-300 text-zinc-900`).
  - Horizontal divider, then a LEARN MORE row (About, Contact, Advertise,
    Subscribe, Terms, Privacy, Cookies) and a FOLLOW US row (social links).
- Column headers use teal small-caps (`text-teal-300` / `bg-teal-300`).
- Accessibility & interactions:
  - `aria-controls="mega-menu-panel"`, `aria-expanded`, `aria-label`.
  - Body scroll lock while open (saves/restores `document.body.style.overflow`).
  - Escape closes the panel.
  - Every link inside the panel calls `closeMenu` `onClick` (this also handles
    the "close on navigation" requirement without a pathname-watching effect,
    which is now flagged by `react-hooks/set-state-in-effect` under React 19).
  - Focus moves to the close button on open and back to the Menu trigger on
    close (via the effect cleanup).
- All search overlay state is preserved through the `SearchOverlay` `initialQuery`
  prop. To work around the React 19 lint rule against calling `setState` in
  `useEffect`, `SearchOverlay` was split into a thin outer component that
  conditionally renders an inner one `key={initialQuery}`, so the inner state
  initialiser picks up the fresh query each open.

### Kicker color helper — `lib/categoryStyle.ts`

A new helper `kickerTone` / `toneFor(key)` maps category keys to Tailwind text
colors:

| key | tone |
| --- | --- |
| ocean | `text-sky-700` |
| river | `text-teal-700` |
| cabins | `text-stone-700` |
| luxury | `text-amber-700` |
| expedition | `text-slate-700` |
| latest | `text-zinc-700` |
| feature | `text-rose-700` |
| podcast | `text-fuchsia-700` |
| magazine | `text-indigo-700` |
| event | `text-emerald-700` |

`ArticleCard` (all three variants), `EditorialHero` (lead + sub-features),
`TrendingList` (`text-list` mode), and the home features grid use this helper
to color the kicker.

### Read time helper — `lib/readTime.ts`

`readTimeFromBody(body, wpm = 220)` returns minutes (floored to 1) from an
article/feature body. Appended to the meta line of every card variant and to
the editorial hero meta line.

### `TrendingList` extension

A third `layout` mode `"text-list"` was added (alongside the existing `"list"`
and `"grid"`). Renders an ordered list of rows: color-coded kicker + headline
(`text-base sm:text-lg font-semibold`) + small meta (`author · X min read`), no
images, with tight padding. The original `"list"` and `"grid"` modes are
unchanged.

### Footer — 5 columns

`SiteFooter` was restructured to mirror the mega-menu axes:

- Editorial — News, Features & Analysis, Magazines, Podcast.
- News Categories — Ocean, River, Cabins, Luxury, Expedition, Latest.
- Trade — Events, Knowledge Hub, Agent Portal (with indented sub-items for
  Competitions / Incentives / Offers).
- Learn More — About, Contact, Advertise, Subscribe, Newsletter.
- Legal — Terms, Privacy, Cookies.

The compact `NewsletterCTA` block has been removed from the footer (newsletter
is now in the mega-menu and the full-section CTA still lives on the home).
The bottom row keeps logo + copyright + social links. `data/navigation.ts`
gained a new `megaMenuColumns` export and `footerColumns` was rewritten to
the new shape (children supported on `NavChild` for the Trade column's
Agent Portal sub-list).

### New home section order

`app/page.tsx` rewritten:

1. Latest Stories (`TrendingList layout="text-list"`, 12 articles sorted by
   `date` desc).
2. `EditorialHero` with `article={lead}` only — no `subFeatures` (home falls
   back to single-lead layout). The `subFeatures` prop remains for internal
   pages.
3. Lead Stories rail (`FeaturedArticleRail` with editorsPicks minus the lead,
   or the next 3 articles if fewer than 3 picks).
4. Features rail — `Long-form analysis`, 3 feature cards (inline grid using
   primitives because `Feature.category` is a different type union than
   `Article.category`).
5. `EventsPromo` (kept as-is).
6. `CruiseCorner` (kept as-is).
7. Five category rails — Ocean, River, Cabins, Luxury, Expedition; each a
   `FeaturedArticleRail` with category-tone eyebrow, short hook, top 3
   articles. A rail is skipped when it has fewer than 2 articles.
8. `NewsletterCTA` (full-section variant).
9. Agent routing tiles (3 inline tiles for Competitions / Incentives / Offers).

`TopicSelector` is no longer mounted on the home (the mega-menu and category
rails carry the same affordance). The file remains in the catalogue.

### Component cap check

No new section components added. Mega-menu is implemented inline inside
`SiteHeader.tsx`. `lib/categoryStyle.ts` and `lib/readTime.ts` are helpers,
not sections. Final section count remains **28 / 28**. Build still produces
**73 prerendered pages**; lint clean.

## B&W RoW restructure (2026-05-13)

Full home rebuild to mirror the RoW homepage structurally, in a strict
Relume-style black-and-white wireframe (no teal, no rose, no colored kickers,
no colored placeholders). Section count remains **28 / 28** — only existing
components edited, no new sections added. All new home blocks (hero
extension row, AD dividers, Most Accessed band, Magazines+Podcast block,
Agent routing) are inline compositions in `app/page.tsx`.

- `lib/categoryStyle.ts` — every tone collapsed to a single neutral
  `text-zinc-700`. Helper signature unchanged so existing callers compile.
- `components/ui/Placeholder.tsx` — `KIND_TONES` table removed; all kinds
  render with one neutral `bg-zinc-100 border-zinc-300 wf-stripes`.
- `components/sections/SiteHeader.tsx` — header bottom border `teal-300` →
  `zinc-900`; brand row converted from 3-col grid to flexbox with the logo
  centered and the 4 categories tight around it; categories are now
  `text-sm` (was `text-xs`), `text-zinc-900` (was `text-teal-700`), no
  longer `italic`; gap `gap-8 lg:gap-10`. Mega-menu overlay teal tokens
  swapped for neutral `text-zinc-300` / `bg-white text-zinc-900`.
- `components/sections/EditorialHero.tsx` — Subscribe CTA card no longer
  teal: `border-zinc-900 bg-white text-zinc-900`. New optional prop
  `secondary?: Article` renders a small story (image + kicker + h3 + meta)
  inside the right column **above** the Subscribe CTA card.
- `data/features.ts` — padded from 8 to 16 mocks so every Features &
  Analysis subcategory (Analysis & Comment / Interviews / Marketing Tips /
  Cruise Reviews) has 4 items. SSG page count rises from 73 to 81.
- `app/page.tsx` — full rewrite with 19 numbered sections:
  1. Hero (3-col with secondary + Latest list + featured + Subscribe CTA)
  2. Hero extension row (continuation Latest list + 2 inverted-layout
     stories: image right / text left)
  3. Editor's Picks rail
  4. AD divider 1 — wireframe "AD SLOT" band with Events promo
  5-10. News Categories x 6 (Ocean, River, Cabins, Luxury, Expedition,
     Latest), 4 cards each
  11. Most Accessed — dark contrast band (`bg-zinc-900 text-white`),
     6 numbered items
  12. Magazines + Podcast combined block (2 columns)
  13-16. Features & Analysis x 4 (Analysis & Comment, Interviews,
     Marketing Tips, Cruise Reviews), 4 cards each
  17. AD divider 2 — wireframe "AD SLOT" band with Knowledge Hub promo
  18. Agent Portal CTA — 3 routing tiles
  19. NewsletterCTA

Confirmed: no `text-teal-*`, `bg-teal-*`, `border-teal-*`, `sky-`, `rose-`,
`fuchsia-`, `indigo-`, `emerald-`, or `amber-` Tailwind classes remain in
any `.tsx` file. Build green (81 pages), lint clean.

## Assumptions

- Cruise Trade News content is invented but plausible for the UK cruise trade.
- Agent Portal is public — no auth flow; saved-state UI is visual only and only
  persists locally via `localStorage`.
- All four events are internal; no external links.
- Placeholders replace any imagery; no `next/image` external URLs.
- Lint warnings are acceptable; the build must compile without errors.
