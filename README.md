# Mai Anh Portfolio

A responsive Next.js recreation of the source Framer portfolio, built with TypeScript and Tailwind CSS.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Routes

- `/` — home and featured work
- `/work` — work archive
- `/about` — about
- `/produc-dynatax`
- `/produc-ahn`
- `/produc-anemo`
- `/produc-vital`
- `/produc-cultural`

The `produc-*` route names intentionally match the existing Framer source so links can be migrated without changing their paths.

## Deployment

1. Push this directory to the intended GitHub repository.
2. Import that repository into Vercel.
3. Keep the framework preset set to Next.js and the project root at the repository root.
4. Set `NEXT_PUBLIC_SITE_URL` to the production origin so sitemap URLs are correct.
5. Verify every route in the preview deployment before promoting it to production.

No secrets are required for the current static site.
