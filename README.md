# Haley Nguyen: portfolio

Static site built with [Astro](https://astro.build), Tailwind CSS 4 and self-hosted fonts (Instrument Serif, Inter, JetBrains Mono). No client framework; a few small scripts handle the menu, accordions, lightbox, scroll reveal and the metric count-up. Deploys to Netlify.

Pages: `/` Home, `/about`, `/resume`, `/work`, `/side-projects`, plus a custom 404.

## Run it locally

Needs Node 20 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
```

Other commands:

```bash
npm run build      # static site into dist/
npm run preview    # serve dist/ locally (http://localhost:4321)
npm run check      # astro check: type and content-schema errors
```

## Where each page's text lives

| Page | Edit this |
|---|---|
| Home (hero, metrics, "Now", project cards, side-project list, awards, collaborate block) | `src/data/home.json` |
| Footer links (email, LinkedIn, Instagram, Facebook, Couchsurfing) | `site` block in `src/data/home.json` |
| About: story text | `src/data/about.json` (the favorite quote and the P/s + blog card are in `src/pages/about.astro`) |
| About: video | `public/videos/haley-intro.mp4` and `haley-intro-poster.jpg` |
| Resume | `src/data/resume.json` |
| Download CV button | replace `public/cv.pdf` (keep the file name) |
| Work: companies and projects | `src/content/work/*.md` |
| Work: order of items | `groups` list at the top of `src/pages/work.astro` |
| Side projects | `src/content/side-projects/*.md` |
| Side projects: galleries and image descriptions | `src/lib/sideProjectMedia.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (`@theme` block) |

Images used by the pages live in `src/assets/images/` (optimized at build time). Logos and the video live in `public/`.

## Add a new project

**A work project or case study** (shown on `/work`)

1. Create `src/content/work/my-project.md`:

   ```md
   ---
   title: "Project title"
   kind: Branding Project        # free-text label shown as the tag
   parent: hello-digital         # id of the company it sits under (zalopay, hello-digital)
   org: "Company name"
   client: "Client name"
   role: "Your role"
   summary: "One sentence."
   metrics:                      # optional cards
     - { value: "60+", label: "creators" }
   pullQuotes: ["An insight worth highlighting."]
   learned: "One line for the 'What I learned' box."
   links:
     - { label: "Client website", href: "https://example.com" }
   images: ["some-image.jpg"]    # file in src/assets/images
   ---
   ## The brief
   Body text. Each `##` heading becomes a small section label.
   ```

2. Add its id (the file name without `.md`) to the right `kids` list in `src/pages/work.astro`.
3. Optional: add a card for it in `work.cards` inside `src/data/home.json`. Its `link` is `/work#my-project`.

**A side project** (shown on `/side-projects`)

1. Create `src/content/side-projects/my-side-project.md` (copy `brandlab.md` as a template).
2. Add its id to the `experience` or `competitions` list in `src/pages/side-projects.astro`.
3. Add its photos and image descriptions to `src/lib/sideProjectMedia.ts`.

**Images:** drop the file into `src/assets/images/`, then reference it by file name. Always write a real description (alt text) for it.

Every expandable item has an id, so `/work#my-project` opens and scrolls to it, and the URL updates when a visitor opens an item.

## Deploy to Netlify

`netlify.toml` already has the build command (`npm run build`), the publish folder (`dist`), Node 20 and cache headers, so Netlify needs no extra settings.

### Option 1: GitHub + Netlify (recommended, redeploys on every push)

1. Create an empty repository on GitHub (private is fine; Netlify can read private repos).
2. In this folder:

   ```bash
   git add -A
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. In Netlify: **Add new site > Import an existing project > GitHub**, pick the repository.
4. Leave the build settings as they are (they come from `netlify.toml`) and click **Deploy**. The first build takes about a minute.
5. **Site configuration > Change site name** to pick `your-name.netlify.app`.
6. Open the site and check each page, the CV download, the video on `/about`, and a deep link such as `/work#lucky-money-tree`.

From then on, every `git push` to `main` publishes a new version.

### Option 2: drag and drop

```bash
npm run build
```

Open <https://app.netlify.com/drop> and drag the `dist` folder onto the page. To update, build again and drop the new `dist` onto the site's **Deploys** tab.

### Custom domain

**Domain management > Add a domain** in Netlify, then follow its DNS instructions. Afterwards set the environment variable `SITE_URL` (for example `https://yourname.com`) in **Site configuration > Environment variables** and redeploy, so the canonical links, sitemap and `robots.txt` use your domain. Without it, Netlify's own site URL is used.

## Checks before you publish

- `npm run check` and `npm run build` finish with no errors or warnings.
- Lighthouse (mobile) last measured on the built site: Performance 97 – 99, Accessibility 100, Best Practices 100, SEO 100 on every page.
- No horizontal scroll at 360px.

## Things to keep in mind

- **Source files stay out of Git.** `source/` (original PDFs and photos), `PROMPT.md` and the Phase 0 notes are listed in `.gitignore`.
- **The CV and the Resume page can drift apart.** The Resume page reads `src/data/resume.json`; the Download CV button serves `public/cv.pdf`. Update both when you change your CV.
- **Numbers in the Lucky Money Tree and Zalopay entries are masked on purpose** (`1x%`, `2.xM`). Keep it that way if the real results are confidential.
- **Third-party content:** the LinkedIn post on the La Roche item is an embed, so LinkedIn may show its own cookie notice there.
- **Content notes:** some content files still carry `todo` or `*Note` fields from the build. They are not shown on the site, but delete them if the repository will be public.
