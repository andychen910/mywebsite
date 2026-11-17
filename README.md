# Andy Chen portfolio

A static portfolio based on Andy Chen's resume and two undergraduate presentation PDFs. It uses plain HTML, CSS, and a small JavaScript file, with no build step or runtime dependencies.

The main portfolio is available at `https://andychen910.com/`. The full master's project research story is available at `/projects/master-project/`.

## Preview locally

```sh
python3 -m http.server 8765
```

Open `http://localhost:8765` in a browser.

## Content

- `index.html` contains the portfolio copy and semantic sections.
- `projects/master-project/` contains the interactive master's project research page, descriptive state chart, methodology flow, and research-status content.
- `styles.css` contains the responsive design and lightweight CSS hero visual.
- `script.js` updates the copyright year and controls the mobile menu.
- `Andy-Chen-Resume.pdf` is the downloadable resume provided by Andy.
- `Seattle-Weather-Analysis.pdf` and `Stock-Price-Analysis-GBM-OU.pdf` are Andy's undergraduate presentations.
- `favicon.svg`, `og-image.png`, `robots.txt`, and `sitemap.xml` support sharing and search indexing.

The homepage featured project graphic is a conceptual illustration. The master's project page includes descriptive charts based on the local FHFA state HPI files and clearly labels them as descriptive analysis, not final model results.

## Design tooling

Impeccable is installed for this project at `.agents/skills/impeccable` from `pbakaus/impeccable`. It is a Codex design skill, not a website runtime dependency. Its launcher can be checked from the project root with `.agents/skills/impeccable/scripts/impeccable context --target index.html`.

Design Taste Frontend is also installed at `.agents/skills/design-taste-frontend` from `Leonxlnx/taste-skill`. It provides art direction and browser-based review for future portfolio design work. Neither skill is included in the deployed website.

## Deployment

The live site is deployed from this directory to the existing Vercel project `andy-chen-portfolio` at `andychen910.com`.
