# Muhammad Musa — Executive & Technical Support Portfolio

A lightweight, responsive portfolio for Executive Assistant, Personal Assistant, Administrative Assistant, Operations Associate, Virtual Assistant, Technical Assistant, and Executive/Technical Support applications.

The site uses plain HTML, CSS, and JavaScript. It has no framework, package installation, build command, or paid dependency.

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
├── README.md
└── assets/
    ├── Muhammad_Musa_CV.pdf       ← keep your current CV here
    ├── muhammad-musa-headshot.jpg
    ├── executive-support-workspace.jpg
    ├── technical-operations-workspace.jpg
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

`index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder must be at the top level of the GitHub repository.

## Add the CV

1. Export the current CV as a PDF.
2. Rename it exactly `Muhammad_Musa_CV.pdf`.
3. Place it inside the `assets` folder.
4. The two CV buttons already point to `assets/Muhammad_Musa_CV.pdf`.
5. Delete `assets/PLACE_CV_HERE.txt` if it is no longer needed.

Do not publish the site until the real CV is added, or the CV buttons will lead to a missing file.

## Images and visual explanations

- `muhammad-musa-headshot.jpg` is the real portrait used in the homepage hero.
- `executive-support-workspace.jpg` and `technical-operations-workspace.jpg` are illustrative professional scenes created from the submitted portrait.
- The two illustrative images are clearly captioned in the website and are not presented as photographs of a client, employer, or completed engagement.
- The support workflow, integrated-support model, technical-operations cycle, sample previews, and tool ecosystem are code-based infographics. They remain sharp on phones and do not claim unprovided statistics.

To replace the homepage picture later, create a new image named `muhammad-musa-headshot.jpg`, place it in `assets`, and overwrite the old file. A vertical 4:5 portrait works best.

## Screenshot work-sample update — 24 October 2026

The Work section now leads with eight supplied screenshots grouped into five relevant areas. The original headshot, biography, experience, education, contact details, and CV path have been retained.

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
4. Drag or select `index.html`, `styles.css`, `script.js`, `README.md`, and the complete `assets` folder from the extracted package.
5. If GitHub says files already exist, allow the uploaded versions to replace them.
6. Keep your existing `assets/Muhammad_Musa_CV.pdf`; the updated package does not remove it.
7. Enter a commit message such as `Add screenshot-based portfolio work samples`.
8. Choose **Commit changes**.
9. Wait a few minutes, then refresh `https://mistamuhammad.github.io/`. If the old page remains, use a private/incognito window or perform a hard refresh.

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
Add screenshot-based portfolio work samples
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
