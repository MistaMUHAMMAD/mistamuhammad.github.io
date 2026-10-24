# Muhammad Musa — Executive & Technical Support Portfolio

A lightweight, responsive portfolio for Executive Assistant, Personal Assistant, Administrative Assistant, Operations Associate, Virtual Assistant, Technical Assistant, and Executive/Technical Support applications.

The site uses plain HTML, CSS, and JavaScript. It has no framework, package installation, build command, or paid dependency.

## Latest update: approved portraits and browser-tab icon

This package uses the three approved angled portraits and adds a navy-and-teal **MM** favicon. The professional-focus badge is above the homepage portrait, not over the head. The biography, employment history, contact details, work-sample screenshots, and CV links have not changed.

To update the existing site, extract this ZIP and upload **all of its contents** to the root of `mistamuhammad.github.io`, including `favicon.svg`, `favicon.ico`, and the complete `assets` folder. Do not upload the ZIP itself or an enclosing folder. Keep the existing `assets/Muhammad_Musa_CV.pdf`: the actual CV is not included in this package.

## Selected homepage headline

**Executive support that keeps priorities clear and work moving.**

The five headline options considered were:

1. Executive support that keeps priorities clear and work moving.
2. Organized executive, operations, and technical support for busy leaders.
3. Reliable support for schedules, communication, coordination, and follow-through.
4. Executive administration with an operations and technical support mindset.
5. Practical support for leaders who need clarity, coordination, and follow-through.

## Folder structure

```text
mistamuhammad.github.io/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── favicon.ico
├── README.md
├── IMAGE_PROMPTS.md
└── assets/
    ├── Muhammad_Musa_CV.pdf       ← keep your current CV here
    ├── muhammad-musa-headshot-angle-v3.jpg
    ├── executive-support-angle-v3.jpg
    ├── technical-operations-angle-v3.jpg
    ├── icons/
    │   ├── favicon-32.png
    │   └── apple-touch-icon.png
    ├── work-samples/
    │   ├── executive-calendar.png
    │   ├── meeting-agenda.jpg
    │   ├── task-coordination-board.png
    │   ├── research-contact-log.jpg
    │   ├── spreadsheet-charting.jpg
    │   ├── hotel-comparison-desktop.jpg
    │   ├── hotel-shortlist-mobile.jpg
    │   └── hotel-options-mobile.jpg
    └── PLACE_CV_HERE.txt
```

`index.html`, `styles.css`, `script.js`, `favicon.svg`, `favicon.ico`, `README.md`, `IMAGE_PROMPTS.md`, and the `assets` folder belong at the top level of the GitHub repository. Earlier image versions may also remain inside `assets` for rollback; the page loads only the three current `angle-v3` images.

## Add the CV

1. Export the current CV as a PDF.
2. Rename it exactly `Muhammad_Musa_CV.pdf`.
3. Place it inside the `assets` folder.
4. The two CV buttons already point to `assets/Muhammad_Musa_CV.pdf`.
5. Delete `assets/PLACE_CV_HERE.txt` if it is no longer needed.

Do not publish the site until the real CV is added, or the CV buttons will lead to a missing file.

## Images and visual explanations

- `muhammad-musa-headshot-angle-v3.jpg` is the approved AI-assisted homepage portrait with a gentle three-quarter head-and-shoulder angle, based on the submitted real passport-style photo. It is labelled as AI-assisted, not an unedited camera photograph.
- `executive-support-angle-v3.jpg` and `technical-operations-angle-v3.jpg` are the revised AI-assisted illustrative professional scenes. They use the approved headshot as a pose and likeness reference while preserving their respective work settings and outfits.
- The two illustrative scenes are clearly captioned in the website and are not presented as photographs of a client, employer, or completed engagement.
- Earlier image files remain in `assets` for rollback, but the page uses the three new `angle-v3` files.
- The support workflow, integrated-support model, technical-operations cycle, sample previews, and tool ecosystem are code-based infographics. They remain sharp on phones and do not claim unprovided statistics.

To replace the homepage picture later, add a new portrait to `assets` and update the hero image's `src`, `alt`, `width`, and `height` in `index.html`. A vertical 4:5 portrait works best. Keep `height: auto` on `.portrait-card img` in `styles.css` so the image does not become excessively tall at a narrower width. Update or remove the AI-assisted label if the replacement is an actual unedited photograph.

### Approved portrait update — 24 October 2026

The three images were refined with the built-in image-generation workflow, using the original passport-style photograph as the main likeness reference. The red-tie portrait's gentler head angle was approved and used as a reference for the two work scenes. The executive-support scene keeps the navy suit, teal tie, documents, notebook, and laptop. The technical-support scene keeps the light-blue shirt, laptop, secondary monitor, and desk setting. The hero keeps normal 4:5 proportions rather than a tall strip. AI assistance is disclosed and no scene is claimed as proof of a real engagement.

The hero's responsive CSS overrides the fixed HTML height, preserving normal proportions. The professional-focus badge now sits above the photo so it does not obscure the head. Versioned image filenames and a new stylesheet query identify this update separately from cached older files.

### Browser-tab icon

The previous page did not declare a favicon. This version includes:

- `favicon.svg`: sharp, code-drawn MM initials in the site's navy-and-teal palette.
- `favicon.ico`: 16-, 32-, and 48-pixel fallback icons, also available at the conventional repository-root location.
- `assets/icons/favicon-32.png`: PNG fallback.
- `assets/icons/apple-touch-icon.png`: 180-pixel icon for an added home-screen shortcut.

`index.html` links all four files using relative paths, with versioned URLs to distinguish them from cached older icons. Uploading only the photos will not update the tab icon: upload the updated `index.html` and the favicon files as well. After GitHub Pages deploys, close the old tab and open the site in a new tab or private window. If it still shows the globe, confirm the favicon files are present in the same repository and that the latest Pages deployment has completed.

#### Image-generation briefs

The full final prompts are included in `IMAGE_PROMPTS.md`.

1. **Executive support:** preserve the original seated suit-and-documents composition; anchor facial identity in the real photo; use ordinary window light, natural skin texture, realistic fabric, and plausible hands. Keep paper and screen contents indistinct; do not add client details or performance claims.
2. **Technical operations:** preserve the original pale-blue-shirt, laptop, and monitor composition; use the same face reference, relaxed posture, natural skin and cotton texture, coherent daylight, and a defocused illustrative screen. No real operational statistics are implied.
3. **Homepage portrait:** retain a navy suit, white shirt, and red tie; use a relaxed three-quarter head angle, normal head-and-shoulder proportions in a 4:5 frame, a plain grey background, natural skin detail, and soft daylight. Change pose and perspective, not facial structure.

Biographical text, work-sample screenshots, LinkedIn URL, international phone number, and CV links are unchanged by this image update. Keep your existing `assets/Muhammad_Musa_CV.pdf` when uploading; this ZIP does not include the actual CV.

## Screenshot work-sample update — 24 October 2026

The Work section leads with eight supplied screenshots grouped into five relevant areas. The biography, experience, education, contact details, and CV path have been retained. The separate portrait update above now supplies the homepage and illustrated work-setting images.

| Work area | Supplied screenshot | Website placement |
| --- | --- | --- |
| Calendar planning and meeting preparation | `IMG_2623.PNG`, `IMG_3712.jpg` | Featured calendar-and-agenda sample |
| Operations and task coordination | `IMG_5266.PNG` | Task-board sample |
| Online research and record organisation | `IMG_4707.jpg` | Research contact-log sample |
| Spreadsheet presentation | `IMG_4152.jpg` | Chart-formatting exercise |
| Travel and accommodation research | `IMG_6088.jpg`, `IMG_4733.jpg`, `IMG_4734.jpg` | Hotel comparison with two additional references |

Screenshots are copied without changing their contents. The task-board thumbnail shows an excerpt for readability; opening it displays the full supplied screenshot. The image viewer supports previous/next buttons, arrow keys, Escape to close, and a full-size image link. If JavaScript or native dialog support is unavailable, image links still open the original files.

The eight written workflow examples have not been removed. They are available under **Explore my working methods** below the gallery.

### Honest presentation

- Screenshots are labelled as representative or practice examples, not verified client case studies.
- The sample agenda is not represented as a meeting with a real client.
- Organisations in the research sheet are research entries, not claimed clients.
- The chart screenshot demonstrates presentation only. It is not a validated market report or a personal-performance chart; underlying research sources were not supplied.
- Hotel screenshots are historical research references. Displayed prices and availability are not current quotes, and the images do not establish a booking, endorsement, or supplier relationship.
- No additional software experience, employment claims, numerical achievements, or certifications have been inferred from the images.

### Images intentionally left out

- `IMG_3715.jpg`: inbox screenshot with personal correspondence, account/security messages, and another person's identifying references. It is not included in the public package.
- `IMG_4828.PNG`: calendar collage with attendee contact information, meeting links, and a different named calendar owner. It is not included in the public package.
- `IMG_5264.jpg`: budget screenshot needing correction. For example, catering actual cost of ₦25,000 minus projected cost of ₦20,000 is ₦5,000, not the displayed ₦25,000. Event supplies should show ₦3,000 over projected and transport ₦2,000 over projected. The overall summary of ₦200,000 projected and ₦216,000 actual is arithmetically consistent, but several individual event-row variances are not. Correct the underlying sheet before using the screenshot as evidence of accurate budgeting. Stacked charts also obscure a projected-versus-actual comparison.
- `IMG_6325.jpg`: generic task-board illustration. The more specific task-board screenshot is stronger evidence, so this duplicate-style illustration was not added.

The original uploads have not been altered or deleted. These decisions apply only to what is included in this website package.

### Adding another sample later

1. Check that it is your work and that you have permission to publish it. Remove names, email addresses, meeting links, account details, and confidential records first.
2. Place the approved image in `assets/work-samples` using a descriptive filename without spaces.
3. Duplicate a matching `evidence-card` in `index.html` and update the title, description, image path, dimensions, and alternative text.
4. For the enlargement link, keep `data-sample-preview`, `data-title`, and `data-caption`. The viewer automatically includes the new sample.
5. Use captions that distinguish practice work from actual engagements. Do not include unsupported outcomes.

## Links and details to review

The following contact details are already included in `index.html`:

- Email: `muhammad.musa4rl@gmail.com`
- Phone display: `+234 814 805 7035`
- Phone link: `+2348148057035`
- LinkedIn: `https://www.linkedin.com/in/muhammad-musa-17082a42a/`
- Location: Abuja, Nigeria

Search `index.html` for any detail that needs to be changed. There is no GitHub username placeholder inside the website itself because all site files use relative links.

To change the LinkedIn URL later, search `index.html` for `linkedin.com/in/muhammad-musa-17082a42a/`. Update the full URL in the `sameAs` profile information and the contact link's `href`, plus the visible address, then commit the change.

The contact form creates a `mailto:` message and opens the visitor’s email application. It does not store submissions. To receive submissions directly from the website later, replace the JavaScript mail action with a configured service such as Formspree.

## Update the existing live website

Your current live address is:

```text
https://mistamuhammad.github.io/
```

1. Extract the updated ZIP file on your phone or computer.
2. Open the `mistamuhammad.github.io` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Drag or select **all extracted files**, including `index.html`, `styles.css`, `script.js`, `favicon.svg`, `favicon.ico`, `README.md`, `IMAGE_PROMPTS.md`, and the complete `assets` folder. These must be in the repository root, not a nested portfolio folder.
5. If GitHub says files already exist, allow the uploaded versions to replace them.
6. Keep your existing `assets/Muhammad_Musa_CV.pdf`; the updated package does not remove it.
7. Enter a commit message such as `Update approved portfolio portraits and add MM favicon`.
8. Choose **Commit changes**.
9. Open the repository's **Actions** tab and check that the latest Pages deployment succeeds. Then refresh `https://mistamuhammad.github.io/`. If the old page or globe remains, close the old tab and use a new private/incognito window or perform a hard refresh.

## Publish with GitHub Pages from a new account

1. Sign in to GitHub and create a new repository.
2. Name the repository exactly `<my-github-username>.github.io`, replacing the placeholder with the actual GitHub username. For this project, that name is `mistamuhammad.github.io`.
3. For GitHub Free, make the repository public.
4. Upload the contents of this portfolio folder to the repository root. Do not upload an enclosing folder that leaves `index.html` one level down.
5. Commit the files to the `main` branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Select the `main` branch and `/(root)` folder, then save.
9. Open `https://mistamuhammad.github.io/` after deployment finishes. GitHub says publishing can take up to 10 minutes after a push.

Official references:

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [Configure a GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Preview before publishing

Open `index.html` in a browser. Check the page at desktop and mobile widths. The portfolio does not need an internet connection to display, although the LinkedIn link and email action need external applications or services.

## Short deployment checklist

- [ ] Repository name exactly matches `<my-github-username>.github.io`
- [ ] `index.html` is in the repository root
- [ ] Real CV added as `assets/Muhammad_Musa_CV.pdf`
- [ ] Three portfolio images are inside `assets`
- [ ] `favicon.svg` and `favicon.ico` are in the repository root
- [ ] PNG icons are inside `assets/icons`
- [ ] Updated `index.html` and `styles.css` uploaded, not only the new images
- [ ] MM icon appears when the deployed site is opened in a fresh browser tab
- [ ] Eight sample screenshots are inside `assets/work-samples`
- [ ] Gallery images open, navigate, and close correctly
- [ ] Confidential screenshots have not been uploaded with the website
- [ ] Email, phone, location, and LinkedIn details checked
- [ ] Public contact details approved for display on the internet
- [ ] Work examples and experience wording reviewed for accuracy
- [ ] Mobile and desktop layouts checked
- [ ] GitHub Pages set to `main` and `/(root)`
- [ ] Live CV, email, phone, and LinkedIn links tested

## Suggested repository details

**Repository name**

```text
mistamuhammad.github.io
```

**Repository description**

```text
Professional portfolio of Muhammad Musa — executive, operations, administrative, and technical support.
```

**Suggested update commit message**

```text
Update approved portfolio portraits and add MM favicon
```

## Sharing copy

**LinkedIn Featured caption**

```text
My portfolio brings together my experience in executive assistance, operations coordination, administrative support, and practical technical support. It includes representative work examples covering meeting coordination, action tracking, digital filing, stakeholder follow-up, customer communication, daily operations reporting, data review, and travel planning.

View the portfolio: https://mistamuhammad.github.io/
```

**Job application message**

```text
Here is my portfolio, with representative examples of how I approach executive, administrative, operations, and technical support work: https://mistamuhammad.github.io/
```
