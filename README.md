# John Floyd Macahibag — Portfolio

A fast, responsive, single-page portfolio built with **React + Vite + TypeScript + Tailwind CSS**, using **Font Awesome** icons. No backend or database is required — the site is fully static.

Live sections: Hero · About · Skills · Projects · Education · Achievements · Contact.

---

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Customizing content

Almost all text lives in one file:

```
src/data/portfolio.ts
```

Edit your name, summary, skills, projects, education, achievements, languages, and links there.

### Images (drop your pictures here)

```
public/assets/images/
```

| File | Purpose |
| --- | --- |
| `profile.jpg` | Hero photo (currently pulled from your GitHub avatar) |
| `profile-placeholder.svg` | Fallback if the photo is missing |
| `project-bangkago.webp` | BangkaGo project preview |
| `project-senior.webp` | Senior Citizen Assistance preview |
| `project-jkl.webp` | JKL Vince Furniture preview |
| `favicon.svg` | Browser tab icon |
| `og-image.svg` | Social sharing preview |

To use your own screenshots, either replace these files (keeping the names) or add new files and update the paths in `src/data/portfolio.ts`. The hero image automatically falls back to the placeholder if it fails to load.

### Resume

Replace the placeholder at:

```
public/assets/docs/resume.pdf
```

with your real resume PDF. The **Download Resume** button already points to it.

### GitHub links

The GitHub username is set in `src/data/portfolio.ts`:

```ts
github: 'https://github.com/BiniAiah',
githubUsername: 'BiniAiah',
```

---

## Deployment

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository.
3. Vercel auto-detects Vite. Keep the defaults (`npm run build`, output `dist`).
4. Deploy. Every push to `main` redeploys automatically.

`vercel.json` is already configured.

### GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`. It builds with the correct base path automatically.

1. Push the project to GitHub.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the workflow manually). The site publishes at:
   - `https://<username>.github.io/<repo>/`, or
   - `https://<username>.github.io/` if the repo is named `<username>.github.io`.

---

## Project structure

```
├─ public/assets/images/        # your pictures + placeholders
├─ public/assets/docs/          # resume.pdf
├─ src/
│  ├─ components/               # Navbar, Hero, About, Skills, Projects, ...
│  ├─ data/portfolio.ts         # all content in one typed file
│  ├─ hooks/                    # scroll spy, reveal, typewriter, reduced motion
│  ├─ lib/asset.ts              # base-aware asset URL helper
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css                 # Tailwind + theme + animations
├─ .github/workflows/deploy.yml # GitHub Pages deploy
├─ vercel.json                  # Vercel config
└─ index.html                   # SEO + Open Graph meta, fonts
```

## Accessibility & performance notes

- Semantic landmarks, skip link, visible focus states, ARIA labels, and progressbar roles.
- Scroll animations respect `prefers-reduced-motion`.
- Images use `loading="lazy"` (except the hero) and fixed aspect ratios to avoid layout shift.
- Content is data-driven and typed for safe edits.
