# Tycho Coaching 2.0

International, multilingual website for personal cycling coach Tycho Parmentier. The application uses Next.js 15, React 19, Tailwind CSS and GitHub-authored MDX content, and is deployed through the existing Vercel project at [tychocoaching.com](https://www.tychocoaching.com).

## Local development

```bash
npx --yes pnpm@10.13.1 install
npx --yes pnpm@10.13.1 dev
```

Open `http://localhost:3000`; the root redirects permanently to `/en`.

## Quality checks

```bash
npx --yes pnpm@10.13.1 check
npx --yes pnpm@10.13.1 build
npx --yes pnpm@10.13.1 exec playwright install chromium
npx --yes pnpm@10.13.1 test:e2e
```

The content check enforces six matching MDX articles in English, Dutch and Norwegian. Dutch and Norwegian frontmatter remains marked `draft-native-review` until a native reviewer approves it.

## Content publishing

Knowledge articles live in `content/knowledge/{en,nl,no}`. Every translated version uses the same filename/slug and includes frontmatter for title, description, category, publication and update dates, reading time, featured status and translation status. A pull request is the editorial workflow: preview it on Vercel, review all three languages, then merge.

## Intake delivery

Copy `.env.example` to `.env.local` and configure the two server-only variables. Follow [the Apps Script setup](integrations/google-apps-script/README.md) to create the private Leads sheet, shared-secret delivery endpoint, notification and six-month lost-lead cleanup.

## Launch gates

Version 2.0 should remain on a preview deployment until all of the following are complete:

- Tycho has approved the expanded English copy.
- Native reviewers have approved Dutch and Norwegian UI and articles.
- The final coaching agreement and cancellation terms have replaced or approved the visibly marked draft Terms page.
- The new Google Sheet, Apps Script and Vercel secrets pass a real submission test.
- Google Search Console ownership is verified and the sitemap is submitted.
- Responsive, accessibility and Lighthouse checks pass on the Vercel preview.

The existing Vercel production deployment remains the rollback point until the 2.0 PR is merged and promoted.
