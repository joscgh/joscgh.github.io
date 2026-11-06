# Michele Valsecchi — academic website

A responsive, multi-page academic portfolio built as plain HTML, CSS and JavaScript. It is designed for GitHub Pages and has no build step, package manager or external runtime dependency.

## What's included

- `index.html` — homepage and research overview
- `about.html` — research profile, career and education
- `research.html` — five research themes and methods
- `publications.html` — all 17 publications in the supplied CV, grouped by year and filterable by theme
- `teaching.html` — teaching, mentoring and qualifications
- `cv.html` — full HTML CV and public PDF download
- `contact.html` — contact details and profile links
- `assets/files/Michele_Valsecchi_CV_Public.pdf` — redesigned public CV PDF
- `assets/css/site.css`, `assets/js/site.js`, `assets/img/` — site styling, navigation and vector artwork

## 1. Review before publishing

This is a public-facing academic profile. The uploaded CV included a residential address, date of birth and personal telephone number; these have **not** been copied into the website or public CV PDF. The site includes the email address and public profile links from the CV.

Please review the following before publishing:

- **Citation to confirm:** the supplied CV cites the Nature Materials paper “Ab initio structure solutions from nanocrystalline powder diffraction data via diffusion models” as *Nature Materials* (2025), 24, 1502. The publisher record currently lists volume 24, pages 1726–1734 (DOI: 10.1038/s41563-025-02220-y). I retained the CV wording in this draft and recommend confirming the correct pagination before publication.
1. Confirm that you want the Outlook address shown publicly. Replace it in the HTML and PDF if you would rather use a Columbia address or a contact form.
2. Confirm the wording of your current appointment and whether you want to state that you are open to faculty/research opportunities.
3. Check the publication list, in-press status, titles and author order against your latest CV. The publication page uses DOI links where verified; otherwise it links to a Google Scholar title search.
4. Consider adding a professional headshot or a research image you own. The current hero artwork is a custom vector schematic, not a data figure.
5. The short teaching and research summaries are edited website prose based on the CV; revise them to match your preferred voice.

## 2. Preview locally

You can open `index.html` directly in a browser. For a local web-server preview, open PowerShell in this folder and run:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

## 3. Publish on GitHub Pages

Your CV links to the GitHub account `michelevalsecchi`, so the cleanest destination is a **user site** at `https://michelevalsecchi.github.io/`.

1. Sign in to GitHub as `michelevalsecchi`.
2. Create a new **public** repository named exactly `michelevalsecchi.github.io`. If that repository already exists, use it rather than creating a second site repository; back up or inspect its existing contents first.
3. For the simplest first push, create the repository without pre-populating it with a README, licence or `.gitignore`.
4. Extract this website ZIP on your computer. Open PowerShell in the extracted `michele-valsecchi-website` folder.
5. Run the following commands (Git must be installed and configured):

```powershell
git init
git branch -M main
git remote add origin https://github.com/michelevalsecchi/michelevalsecchi.github.io.git
git add .
git commit -m "Create academic research website"
git push -u origin main
```

6. In the GitHub repository, open **Settings → Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then click **Save**.
9. Once the deployment completes, use **Settings → Pages → Visit site** or open `https://michelevalsecchi.github.io/`.

The site is static, so GitHub Pages can publish it directly from the repository root; no Jekyll or custom Actions workflow is required. GitHub documents this flow in its [Pages quickstart](https://docs.github.com/en/pages/quickstart) and [publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### If you already created the repository with a README

Clone the repository first, copy the website files into the cloned folder (keeping any files you want), then run:

```powershell
git add .
git commit -m "Add academic website"
git push
```

## 4. Update the site later

- Edit the relevant `.html` file for page copy.
- Edit `assets/css/site.css` for visual changes.
- Replace `assets/files/Michele_Valsecchi_CV_Public.pdf` whenever the CV is updated.
- Update the publication entries in `publications.html` and the HTML CV in `cv.html` together.
- Commit and push changes; GitHub Pages republishes from `main`.

## 5. Suggested next improvements

The most valuable additions would be (i) one strong research image or graphical abstract for each major theme, (ii) a one-page research vision for faculty searches, and (iii) a teaching statement. Those materials are not invented here because the supplied CV does not contain them.
