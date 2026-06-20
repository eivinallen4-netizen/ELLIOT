@AGENTS.md

# Top Mountaineer — Project Knowledge

> Keep this file current. Whenever you add a page/component, change copy that
> appears in multiple places, touch design tokens, or fix a bug worth
> remembering, update the relevant section below in the same change.

## What this site is

Marketing site for **Top Mountaineer**, "the film room for sales" — weekly
1:1 coaching where a real coach tears down a rep's actual sales calls
(SDR/BDR/early AE audience). Primary conversion goal everywhere is the
`/apply` application form; secondary goal is the newsletter signup.

## Stack

- Next.js 16.2.9 (App Router, Turbopack), React 19.2, TypeScript.
- Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`, no
  `tailwind.config`).
- No database — persistence is flat JSON files under `data/` written via
  `fs` in Server Actions (see "Data & persistence" below).
- `npm run dev` / `npm run build` / `npm run lint`.
- **`AGENTS.md` warns this Next.js build may diverge from training-data
  conventions — check `node_modules/next/dist/docs/` before assuming an API.**

## Design tokens — DO NOT CHANGE colors or fonts without explicit request

Defined in `app/globals.css`:

- Colors: `--basalt` (bg), `--basalt-raised`, `--basalt-line` (borders),
  `--snow` (text), `--snow-dim` (muted text), `--orange` / `--orange-dim`
  (brand accent / CTA color). Exposed as Tailwind classes `bg-basalt`,
  `text-snow-dim`, `bg-orange`, etc.
- Fonts: `Oswald` → `font-display` (headings/eyebrows), `Inter` → default
  `font-sans` (body). Loaded via `next/font/google` in `app/layout.tsx`.
- Dark mode only (`color-scheme: dark`, `.dark` class on `<html>`), no light
  theme exists.
- Sizing/spacing/layout are fair game to adjust — only the palette and
  typeface choices are locked in.

## Page map (`app/`)

| Route | File | Purpose |
|---|---|---|
| `/` | `page.tsx` | Full marketing funnel: Hero → TrustStrip → SneakPeek → Positioning → WhoItsFor → Method → Offer → HowItWorks → Outcomes → FAQ → FinalCta → Newsletter |
| `/about` | `about/page.tsx` | Brand story, principles, coach photo slot |
| `/pricing` | `pricing/page.tsx` | What's included, 3-way comparison (us vs courses vs alone), pricing FAQ |
| `/results` | `results/page.tsx` | Filterable testimonial grid (`ResultsGrid` + `data/testimonials.ts`) |
| `/free` | `free/page.tsx` | Free ungated teardown video + 4-moment breakdown, ends in Newsletter |
| `/apply` | `apply/page.tsx` | The actual application form (`ApplyForm`) — no `MobileCtaBar` here (it *is* the destination) |
| `/admin`, `/admin/images`, `/admin/newsletter` | `admin/**` | Content-editing UI, see "Admin" below |

Every page's `<main>` has `id="main-content"` (skip-link target) and, on
pages with `MobileCtaBar`, `pb-24 md:pb-0` so the fixed mobile bar never
covers the last section.

## Key shared components (`components/`)

- `Header.tsx` — sticky nav. Sets `document.body.dataset.menuOpen` on mobile
  menu toggle; `globals.css` uses `body[data-menu-open="true"] .mobile-cta-bar
  { display: none }` to hide the sticky CTA bar while the menu is open.
- `MobileCtaBar.tsx` — fixed bottom "Get In The Film Room" bar, appears
  after scrolling ~80% of viewport height, `md:hidden`. Has class
  `mobile-cta-bar` for the above toggle hook.
- `Hero.tsx` — proof card (`order-1 lg:order-none`) shows above the headline
  on mobile; has a `.hero-progress` CSS animation (167s = 02:47, matches the
  displayed timestamp) and a pulsing live-dot.
- `TrustStrip.tsx` — rotating testimonial ticker. Auto-advances every 4.5s,
  pauses on hover/focus, has prev/next buttons + dot navigation (`role="tab"`).
- `Reveal.tsx` — IntersectionObserver scroll-reveal wrapper, used across
  grids/lists. Don't add it to above-the-fold content (Hero/TrustStrip) —
  it causes a flash on initial load.
- `ResultsGrid.tsx` — client-side category filter over `data/testimonials.ts`.
- `SneakPeekVideo.tsx` — click-to-open modal video. `autoPlay` only fires
  inside the modal after a user gesture (clicking the play button), so it's
  not an unsolicited-autoplay issue — already correct, verified, no change
  needed.
- `PhotoSlot.tsx` — dashed placeholder box used wherever a real photo is
  pending (coach headshot, rep photos in Results grid).
- `icons.tsx` — all inline SVG icons, no icon library dependency.

## Voice

All copy is written in first person as a single coach — a creative,
funny-but-tough-love sales manager who's spent years coaching 18-24 year old
SDRs/BDRs. "I" tear down calls, "I" screen applicants, not "we." Jokes and
needling are fine; the underlying claims (guarantee terms, screening
process, pricing mechanics) must stay accurate — don't let a punchline
introduce a promise that isn't real.

## CTA copy convention

Persistent/structural CTAs keep the canonical **"Get In The Film Room"**
label (Header desktop+mobile menu, Hero primary CTA, `MobileCtaBar`, homepage
`FinalCta`). Inline CTAs after a specific value prop use a contextual label
instead, so repeat visitors don't banner-blind past identical buttons:

- WhoItsFor → "See If You Make The Cut"
- Outcomes (homepage) → "Get Your Calls Torn Down"
- About → "Talk to Me"
- Results → "Get Your Calls Reviewed"
- Free → "Join the Film Room"
- Pricing hero → "Apply & Get Pricing"; Pricing bottom → "Apply Now"

Funnel timing language is standardized to **"15-minute screening call"**
everywhere price/call duration is mentioned (Hero, Pricing hero, Offer,
Pricing FAQ, homepage FAQ, HowItWorks) — keep new copy consistent with this.

## Data & persistence (`lib/`, `data/`)

No database. Server Actions in `app/actions/*.ts` read/write flat JSON under
`data/` via `fs`:

- `lib/newsletter.ts` — `data/newsletter-content.json` (editable section
  copy: `eyebrow`/`headline`/`subhead`/`ctaLabel`) and `data/subscribers.json`
  (`{ email, subscribedAt }[]`, de-duped by lowercased email).
- `lib/applications.ts` — `data/applications.json`, `{ name, email, role,
  obstacle, recording, submittedAt }[]` from `/apply`.
- `lib/images.ts` — `data/images.json`, a `Record<placeholderKey, publicPath>`
  map; uploaded files land in `public/uploads/`.
- `lib/placeholders.ts` — derives the list of needed photos (coach headshot +
  one per testimonial in `data/testimonials.ts`) for the admin image-upload
  UI.
- `data/testimonials.ts` — the single source of truth for testimonial quotes,
  used by `TrustStrip`, `Outcomes` (homepage, first 5), and `/results`
  (`ResultsGrid`, full filterable set). Add testimonials here, not per-page.

## Admin (`/admin/*`)

Write actions (`uploadPlaceholderImageAction`, `updateNewsletterContentAction`)
are gated server-side by comparing a submitted `key` field against the
`NEWSLETTER_ADMIN_KEY` environment variable — if that env var is unset,
editing is disabled entirely. **The page shells themselves render without
any login** (anyone can view the admin UI structure, just can't persist
changes without the key); pages now carry `robots: { index: false, follow:
false }` so they at least aren't crawlable/discoverable via search. If real
auth (sessions/login) is ever needed here, that's a deliberate scope
decision, not a fix-on-the-side — flag it before building it.

## Known-good decisions worth not re-litigating

- Footer social icons (LinkedIn/TikTok/X) were removed — they pointed at
  `href="#"` placeholders with no real profile URLs available. Re-add them
  in `components/Footer.tsx` (previously imported `IconLinkedIn`,
  `IconTikTok`, `IconX` from `./icons`) once real URLs exist; don't ship
  dead links again.
- Pricing's 3-card comparison uses horizontal scroll-snap on mobile
  (`snap-x snap-mandatory`, `w-[85%]` cards) instead of a long single-column
  stack, specifically to preserve the "us vs courses vs alone" contrast.
- `scroll-padding-top: 5rem` is set globally in `globals.css` so anchor links
  (`/#faq`, `/#for-you`, etc.) don't land under the sticky header.
- `prefers-reduced-motion: reduce` is respected globally (forces near-zero
  animation/transition duration) — keep new animations CSS-driven so this
  keeps working, not JS-timer-driven.

## Open / deferred items (not done, by design)

- Real coach headshot and rep photos are still `PhotoSlot` placeholders —
  populate via `/admin/images` once real photos exist.
- `ApplyForm` is a single long form (not multi-step). Left as-is; a
  progressive-disclosure redesign would be a deliberate UX project, not a
  drive-by change.
- No session-based admin auth (see "Admin" above) — current protection is
  the `NEWSLETTER_ADMIN_KEY` check on write actions only.

## Changelog

- **2026-06-20** — Rewrote all site copy sitewide in first person as a
  funny-but-tough-love sales coach voice (see "Voice" above). Canonical CTA
  changed from "Apply for Coaching" → "Get In The Film Room"; several
  contextual CTAs and most headlines/body copy rewritten across every page
  and component. `data/testimonials.ts` quotes were deliberately left
  untouched — they're testimonials in reps' own voice, not the coach's, and
  rewriting them in the coach's voice would have broken that authenticity.
  No color/font/structural changes.
- **2026-06-20** — Implemented a 20-item UX/marketing pass (no color or font
  changes): fixed `Header.tsx` invalid `preload` image prop → `priority`;
  added skip-to-content link + `id="main-content"` + anchor scroll offset;
  Hero mobile reorder/padding/CTA-weight/live animation; TrustStrip
  pause+manual controls; Results page testimonial-count stat; varied
  repeated CTA copy sitewide; standardized "15-minute screening call"
  wording; Pricing comparison mobile scroll-snap + trust-chip hero visual;
  deduped Pricing FAQ; fixed MobileCtaBar bottom overlap and menu-open
  conflict; demoted Newsletter section prominence; removed dead Footer
  social links; added `noindex` to admin pages.
