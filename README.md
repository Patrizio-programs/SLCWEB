# Simple Language Centre website

An Astro website for Simple Language Centre. It includes course and CXC landing pages, a resource library, an alphabet lesson, and a standalone Spanish verb practice game. TinaCMS stores editable site content as Markdown files in `content/`.

## Requirements

- Node.js 22.12 or newer (see `package.json`)
- npm or Yarn (the repository declares Yarn 1.22.22)

Install dependencies with `npm install` or `yarn install`.

## Development

The repository's `dev` script starts TinaCMS and Astro together:

```sh
npm run dev
```

Use this when working on Tina-managed content or visual editing. The Astro CLI is also exposed as `npm run astro`; the repository instructions specify `astro dev --background` for starting an Astro development server directly. The Tina admin is served from `/admin/` when its dev server is running.

Useful commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start TinaCMS and Astro for local editing |
| `npm run astro -- dev --background` | Start Astro directly in background mode |
| `npm run astro -- dev stop` | Stop the Astro background server |
| `npm run astro -- dev status` | Check the Astro background server |
| `npm run astro -- dev logs` | Read Astro background server logs |
| `npm run build` | Build TinaCMS admin assets and the static Astro site |
| `npm run preview` | Preview the generated Astro site locally |

## Routes and key files

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Main landing page |
| `/courses` | `src/pages/courses.astro` | General and student course signup choices |
| `/cxc` | `src/pages/cxc.astro` | CXC Spanish course information |
| `/resources` | `src/pages/resources.astro` | Resource cards |
| `/alphabet` | `src/pages/alphabet.astro` | Spanish alphabet lesson |
| `/verbgame.html` | `src/pages/verbgame.html` | Standalone verb practice game |
| `/comics` | `src/pages/comics/index.astro` | Index of published Spanish comics |
| `/comics/comic_strip` | `src/pages/comics/comic_strip.astro` | Spanish dialogue comic |
| `/comics/preterite-weekend` | `src/pages/comics/preterite-weekend.astro` | Five-panel weekend dialogue practising the preterite |
| `/tinacms-demo` | `src/pages/tinacms-demo.astro` | Tina visual editing example |

Shared page layout and site components live in `src/layouts/` and `src/components/`. Global brand colors are CSS custom properties in `src/layouts/Layout.astro`. Tina collection fields and paths are defined in `tina/config.ts`; generated Tina client files are in `tina/__generated__/` and are ignored by Git.

## Editing site content

Edit the Markdown files under `content/` directly, or use Tina's admin while the dev command is running. Current collections are defined in `tina/config.ts`:

- `content/nav/nav.md` controls the three main navigation labels and links.
- `content/hero/` contains the CXC hero text.
- `content/courses/` contains the four course descriptions, details, and enrollment links used on the home page.
- `content/services/services.md` contains service card text.
- `content/socials/socials.md` contains footer social links.
- `content/posts/` powers the Tina visual editing demo.

When changing Tina fields, update the schema in `tina/config.ts`; the generated client/types are recreated by Tina's build/dev tooling. Keep generated files out of source changes.

## Configuration and deployment

Astro is configured for static output in `astro.config.mjs`. The `build` script runs `tinacms build` before `astro build`. Tina credentials are read from `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` in `tina/config.ts`; keep secrets in local environment configuration or the hosting provider's secret store and never commit them. `GITHUB_BRANCH`, `VERCEL_GIT_COMMIT_REF`, and `HEAD` are checked to determine the Tina branch, with `main` as fallback.

The config imports a Netlify adapter, but it is currently commented out. Revisit the output mode and adapter together if changing from static hosting or adding server-rendered routes.

## Current improvement opportunities

- Replace placeholder `#` lesson and quiz links in `src/components/RESOURCES/ResourceLibrary.astro` before treating those cards as usable resources.
- Set the production domain in Astro's `site` config before adding canonical URLs; page titles, descriptions, and social preview tags are supplied through `src/layouts/Layout.astro`.
- Move duplicated course card markup into a data-driven component and decide which course content should be editable through Tina.
- Check external links that open a new tab for consistent `rel="noopener noreferrer"` attributes.
- Add an accessibility and responsive review for navigation, game controls, color contrast, and image alternatives.
- Confirm whether `/tinacms-demo` is intended to ship publicly; its source comments describe it as a temporary visual editing example.

## Brand palette

- Primary green: `#16703D`
- Secondary dark teal: `#083045`
- Accent brown/gold: `#8F602C`
