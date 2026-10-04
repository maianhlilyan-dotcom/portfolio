# Portfolio Build Guide

## Mission

Rebuild the Framer portfolio as a production-quality website using Next.js and Tailwind CSS, then deliver it through GitHub and deploy it on Vercel.

Framer source:
https://framer.com/projects/AM-Portfolio--uqF9qrvx6n109nSvuaja-beuIb?node=augiA20Il

The goal is not a generic portfolio inspired by the design. The goal is a faithful, responsive implementation of the Framer project that preserves its personality, typography, spacing, motion, imagery, and interaction patterns while improving maintainability, accessibility, and performance.

## Default Stack

- Next.js with the App Router
- TypeScript with strict typing
- Tailwind CSS
- React Server Components by default
- Client Components only when interactivity requires them
- `next/image` and `next/font` where appropriate
- Vercel for hosting
- GitHub for source control and delivery

Do not introduce a UI kit, state library, animation library, CMS, or other major dependency unless it clearly improves the implementation and the existing stack cannot reasonably handle the need.

## Working Style

- Inspect the relevant Framer page and responsive variants before implementing it.
- Infer sensible details when the design is clear; ask only when a missing decision would materially change the result.
- Build in small, working slices and keep the application runnable throughout.
- Prefer simple, readable code over clever abstractions.
- Reuse components when a real visual or behavioral pattern repeats. Do not abstract one-off details prematurely.
- Preserve existing user changes and avoid unrelated rewrites.
- Never commit credentials, Vercel tokens, private keys, or `.env*` secrets.

## Framer-to-Web Workflow

For every page or section:

1. Inspect the Framer canvas, preview, layers, text, assets, links, breakpoints, and interactions.
2. Record the important design tokens: colors, type scale, font weights, spacing, radii, borders, shadows, grid behavior, and animation timing.
3. Implement the semantic structure first, then styling, responsive behavior, and motion.
4. Compare the local result with Framer at desktop, tablet, and mobile widths.
5. Fix visible differences before moving on.

Do not use screenshots of entire sections as a substitute for implementation. Export and use original image assets when permitted, optimize them for the web, and recreate layout and typography with HTML and CSS.

## Site Structure

Use clean routes that match the portfolio content. The Framer project currently includes the following areas and should be treated as the source of truth:

- Home
- Work
- About
- DynaTax case study
- AHN Group case study
- VITAL case study
- ANEMO case study
- Cultural project/case study

Keep project data separate from presentation when multiple case-study pages share the same structure. Use route segments and naming that are understandable and SEO-friendly; preserve old Framer URLs with redirects only when those URLs are known and need migration support.

## Design Fidelity

- Match the Framer composition closely before making subjective improvements.
- Preserve intentional asymmetry, oversized typography, whitespace, overlaps, and editorial pacing.
- Use fluid sizing and layout primitives rather than many hard-coded viewport-specific offsets.
- Centralize recurring design tokens in Tailwind/theme CSS variables.
- Implement hover, focus, reveal, scroll, cursor, and page-transition behavior when present in Framer.
- Respect `prefers-reduced-motion` and keep motion smooth on mid-range mobile devices.
- Avoid placeholder text, fake project data, and generic stock imagery when source content exists.

## Responsive Requirements

- Support desktop, tablet, and phone layouts represented in Framer.
- Verify at approximately 1440px, 1024px, 768px, 390px, and 320px widths.
- Prevent horizontal overflow, clipped text, broken overlaps, and unreadable type.
- Keep touch targets at least 44 by 44 CSS pixels where practical.
- Do not rely on hover for essential navigation or content.

## Accessibility and Semantics

- Use one meaningful `h1` per page and a logical heading hierarchy.
- Use semantic landmarks and elements before generic containers.
- Provide useful alt text for informative images and empty alt text for decorative images.
- Ensure all interactions work with a keyboard and show a visible focus state.
- Maintain sufficient color contrast without flattening the visual identity.
- Label icon-only controls and announce dynamic content when necessary.

## Performance and SEO

- Prefer static rendering and Server Components where possible.
- Optimize image dimensions, formats, loading priority, and responsive `sizes`.
- Avoid layout shift and unnecessary client-side JavaScript.
- Add page metadata, social sharing metadata, canonical URLs, sitemap, and robots configuration before production launch.
- Use descriptive titles and summaries for each case study.
- Run a production build and address meaningful Lighthouse issues before deployment.

## Code Quality

- Keep TypeScript strict; do not use `any` without a documented reason.
- Use Tailwind utilities for most styling and CSS modules/global CSS only when they make complex styling clearer.
- Keep shared components focused and composable.
- Use data-driven rendering for repeated project cards, navigation entries, and case-study metadata.
- Remove dead code, unused assets, console noise, and abandoned experiments before delivery.
- Add tests for non-trivial logic and critical interactions. Do not add shallow tests only to increase counts.

## Verification

Before considering a change complete:

- Run linting and type checking.
- Run relevant tests.
- Run a production build.
- Inspect all changed routes in the browser.
- Compare desktop and mobile screenshots against Framer.
- Test keyboard navigation, links, and interactive states.
- Check for console errors, broken assets, and horizontal overflow.

If a check cannot be run, state exactly which check was skipped and why.

## GitHub Delivery

- Use focused commits with clear imperative messages.
- Do not commit generated build output, secrets, or local-only files.
- Keep the README current with setup, scripts, environment variables, and deployment notes.
- Before pushing, review the diff and run the verification steps above.
- Push only to the intended repository and branch. Create a pull request when the repository workflow uses reviews; include a concise summary, screenshots for visual changes, and test results.

## Vercel Deployment

- Treat preview deployments as the normal validation path for branches and pull requests.
- Configure environment variables in Vercel, never in committed files.
- Confirm the framework preset, build command, output settings, and project root before the first deployment.
- Verify the preview deployment on desktop and mobile before promoting to production.
- Do not claim deployment success until the Vercel deployment is ready and the live URL has been opened and checked.
- After production deployment, verify primary routes, metadata, assets, redirects, and contact links on the live domain.

## Definition of Done

The project is done when the Next.js site faithfully represents the Framer source across supported breakpoints, passes local quality checks, is stored in the intended GitHub repository, and has a verified production deployment on Vercel with no known broken routes or critical accessibility, performance, or console issues.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
