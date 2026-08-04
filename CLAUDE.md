# Joy Clean Team Website

Business website for Joy Clean Team at joycleanteam.com.

**Joy Clean Team is a DBA (doing business as) of Joy Junk Removal LLC** — same legal entity,
same owner (Ron, `hello@joyjunkremoval.com`), same GitHub account (`jjremoval`). It is NOT a
separate company. Keep that in mind: legal/footer text should say "Joy Junk Removal LLC, dba
Joy Clean Team," not "Joy Clean Team LLC."

Hosted on GitHub Pages (`jjremoval/joycleanteam` — **public repo**), auto-deploys on push to main.

## Status as of launch (see CHANGELOG-equivalent: just check git log)

- Site is live content (Home, Services, About) — no fake data, no placeholder reviews.
- **Reviews section is intentionally omitted** until real Joy Clean Team reviews exist. Do not
  add reviews here unless they are real, attributable, verifiable reviews — see Security section.
- **Contact form is NOT wired to a backend yet.** No Cloudflare Worker/Resend/KV has been set up
  for this site. The form currently tells users to call/text instead of pretending to submit.
  Next step: build a Worker (can reuse the same pattern as `joyjunkremoval`'s, pointed at a new
  KV namespace and `hello@joycleanteam.com` via Resend) once Ron has created those pieces in his
  Cloudflare/Resend accounts.
- Logo is a simple text wordmark ("JOY / CLEAN TEAM"), not a designed logo. `favicon.png`,
  `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` are placeholder generated icons
  (yellow rounded square, black "J") — replace with a real logo when one exists.

## File structure

| File | Purpose |
|------|---------|
| `index.html` | Main landing page |
| `services.html` | Services page |
| `about.html` | About page |
| `css/styles.css` | All styles |
| `js/main.js` | All JavaScript |
| `sw.js` | Service worker — bump cache version on every deploy |
| `manifest.json` | PWA manifest |

## Rules (same spirit as the joyjunkremoval repo)

- Bump `CACHE` version in `sw.js` on every deployment that touches CSS/JS/HTML.
- All `<script>` tags must have `defer` (except the tiny inline SW-registration snippet).
- Optimize every change for mobile at the same time as desktop.
- Never hardcode credentials — use environment variables or a separate config file that is gitignored.
- Always develop and test on localhost first — do not push to GitHub unless explicitly asked.
- **Never add placeholder, fabricated, or made-up customer reviews.** This repo is public and the
  site is live — fake reviews presented as genuine are deceptive (and the kind of thing the FTC
  fines businesses for). Only add reviews here once they're real.

## Security & privacy

**This repo is PUBLIC. Anything committed is public forever** — including git history. So:

- **Never commit secrets.** No API keys, tokens, passwords, or customer data in tracked files.
- The contact form (once wired up) must post to a Cloudflare Worker, which holds any email key
  server-side. Never put a key/CRM ID in the page itself.
- Customer/lead data stays out of the repo — it flows only through the email/Worker pipeline.
- Commit author email: use the GitHub noreply address, not a personal one.

## Accounts / infrastructure

Same owner, same core accounts as Joy Junk Removal (see that project's
`docs/40_Account_Handoff.md` in the private `joyjunkremoval-ops` repo, and the
"Owner's Guide" PDF Mike wrote). Specific to Joy Clean Team:

- **Domain**: `joycleanteam.com`, registered on IONOS (same registrar as joyjunkremoval.com).
- **Email**: `hello@joycleanteam.com` — set up as a secondary-domain alias on the existing
  Google Workspace account (not a separate Workspace subscription).
- **GitHub Pages**: custom domain set to `joycleanteam.com` in repo Settings → Pages.
- **Contact form backend**: not yet built — see "Status" above.

## Deployment

After any change: edit locally → commit → push to main → GitHub Pages deploys automatically.
