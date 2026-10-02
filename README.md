# WHAT'S THE ISSUE?

WHAT'S THE ISSUE? is a short Environmental Law issue-spotting game for paralegal students. Each round draws 10 shuffled scenarios from a bank of 47. Players identify the main issue, get immediate practical feedback, and may stop at any time or continue with more files.

- Source: <https://github.com/JenS246/whats-the-issue>
- Live game: <https://jens246.github.io/whats-the-issue/>

## How it works

Most files ask the player to choose **Air**, **Water**, **Waste**, or **Land / Site**. A smaller group asks about the governing law, agency overlap, next investigative step, or type of legal issue. The scenarios cover the Clean Air Act, Clean Water Act, NPDES, wetlands, RCRA, CERCLA, TSCA, environmental justice, toxic torts, Pennsylvania DEP, enforcement, permitting, and recordkeeping.

The project is intentionally dependency-free. It uses plain HTML, CSS, and JavaScript with no backend, account, tracking, external asset, or build step.

## Run locally

Open `index.html` directly, or serve the folder with any static web server:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Edit or add cards

Open `game.js` and edit the `cards` array. Standard issue cards need `prompt`, `answer`, and `explanation` fields. Mixed-review cards also provide `question` and `options`.

Keep each scenario concise, avoid trick questions, and frame the player's role around file review and issue spotting rather than final legal conclusions.

## Deploy with GitHub Pages

The repository includes `.github/workflows/pages.yml`. A push to `main` deploys the static site through GitHub Pages.

1. In **Settings > Pages**, select **GitHub Actions** as the source.
2. Push to `main`, or run the workflow manually from **Actions**.
3. The public site is available at <https://jens246.github.io/whats-the-issue/>.

## Accessibility

- Large tap targets and high-contrast light and dark themes
- Visible keyboard focus states
- Keyboard shortcuts: `1` through `4` for answers and `Enter` for the next file
- Polite screen-reader announcements for feedback
- Responsive layouts for phones, tablets, and desktop screens
- Reduced-motion support
