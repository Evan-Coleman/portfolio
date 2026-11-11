# ecoleman.dev

Personal portfolio and blog for Evan Coleman. A static site built with Astro, with no client-side JavaScript frameworks.

## Stack

- Astro 7 (static output), content collections for posts and projects
- `@astrojs/rss` for the feed, sitemap, self-hosted fonts
- Plain CSS design tokens in `src/styles/global.css`

## Commands

```sh
npm install
npm run dev     # local dev server (drafts and hidden projects are visible)
npm run build   # production build into dist/
```

## Where to edit

- `src/data/site.ts`: name, role, email, links, availability
- `src/data/resume.ts`: roles, skills, education (feeds the home page and `/resume`)
- `src/content/posts/`: blog posts
- `src/content/projects/`: project write-ups
- Files prefixed with `_` in the content folders are ignored by the collections.

## Writing a post

Copy `src/content/posts/hello-again.md` and edit the frontmatter:

- `title`, `description`, `date` (required)
- `updated` (optional), `tags` (list)
- `draft: true` keeps the post out of production builds; it still shows in `npm run dev`. Remove the line or set it to `false` to publish.

## Adding a project

Copy `src/content/projects/_template.md` to a new file without the underscore. Fields: `title`, `summary`, `year`, `role`, `stack`, `links`, `order`. Projects are hidden from the production site until `published: true` is set.

## Deployment

GitHub Pages, via `.github/workflows/deploy.yml`, on every push to `gh-pages`.
In the repository, go to Settings → Pages → Source and select "GitHub Actions". The old site was served straight from the branch, so this must be changed once.

Cloudflare Pages also works: build command `npm run build`, output directory `dist`.

## Static files

- `public/CNAME` holds the custom domain.
- The résumé files under `/res/` are generated, not static (see below).

## Résumé downloads

`/res/resume.pdf`, `/res/resume.docx` and `/res/resume.txt` are generated from `src/data/resume.ts` at build time, so they always match the `/resume` page. The shared code is in `src/lib/resume-export.ts`.

To make a private copy with a phone number and personal email, run `RESUME_PHONE="..." RESUME_EMAIL="..." npm run build` locally and take the files from `dist/res/`. Never commit those files, and never set these variables in CI.
