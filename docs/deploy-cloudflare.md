# Publishing with Cloudflare Workers

One-time hosting setup, about 15 minutes, free. After this, every push to `main` rebuilds the live
site automatically; nobody ever "deploys" by hand. The AI can walk you through these steps while
you click.

We use **Cloudflare Workers** with static assets. Workers serves your built site directly from a
CDN, builds straight from the repo on every push (Workers Builds), and gives you preview URLs for
free. It is where Cloudflare now puts its investment; Cloudflare Pages still works but is in
maintenance mode. If you already publish through Pages, see [Already publishing with Cloudflare
Pages?](#already-publishing-with-cloudflare-pages) below, your live site keeps working untouched.

## 0. Push first

Connect Cloudflare only **after** the first version of the site has been committed and pushed to
GitHub (Claude does this as part of building v1). A Git-connected build can only pick a branch that
already exists on GitHub, and a repo with nothing pushed yet has none. The production branch is
always **`main`**.

The repo ships a `site/wrangler.jsonc` that tells Workers how to serve the site (a static Astro
build in `site/dist`). Its `name` field must match the Worker you create in the dashboard, so the
setup skill sets it to your project name during the first session. If you set up before that file
existed, ask Claude to add it before connecting.

## 1. Connect the repo

1. Create a free account at [dash.cloudflare.com](https://dash.cloudflare.com) (it should belong to the owner, like the GitHub account).
2. In the dashboard: **Workers & Pages → Create → Workers → Import a repository**.
3. Authorize Cloudflare on GitHub and pick your repo.
4. Build settings:
   - Git branch: **`main`**
   - **Root directory: `site`** (easy to miss; the website lives in the `site/` subfolder)
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
5. Save and deploy. The first build takes a couple of minutes and gives you a URL like `https://<project>.<your-subdomain>.workers.dev`. That URL is live from now on; put it in `source/brief.md`.

The decks under `site/public/decks/` and anything else in `site/public/` ship as part of this same
build, so your presentations go live at `https://<domain>/decks/<slug>/` with nothing extra to set
up. There is no separate deploy for them.

If the build fails on a Node version complaint, set a build variable `NODE_VERSION` to a current LTS
(for example `22`) in the Worker's **Settings → Build**.

## 2. Connect your domain

In the Worker: **Settings → Domains & Routes → Add → Custom domain**, enter your domain, and follow
what Cloudflare proposes. What happens next depends on where the domain lives:

- **Domain already on Cloudflare**: it adds the DNS record for you. Done.
- **Domain registered elsewhere** (OVH, Gandi, GoDaddy...): the smoothest path is moving DNS to Cloudflare. Add the domain as a site in Cloudflare (free plan), Cloudflare shows two nameservers, and you paste those into the nameserver settings at your registrar. Propagation takes minutes to a day. The domain stays owned at your registrar; only DNS moves. Then repeat the custom-domain step.
- **Can't or won't move DNS**: point a `CNAME` for `www` at your `*.workers.dev` URL at your registrar, and use `www.yourdomain.com` as the custom domain. Bare domains (no `www`) generally require DNS on Cloudflare, which is another reason the previous option is smoother.

Add both `yourdomain.com` and `www.yourdomain.com` so either one works; Cloudflare handles the certificate and the redirect.

## 3. Sanity checks

- Push a small change and watch it appear on the live URL about a minute later.
- `https://` works and `http://` redirects to it (automatic with Cloudflare).
- Record the final URLs in `source/brief.md`.

## Day-to-day

There is no day-to-day. Pushing is publishing. If the live site ever looks stale, open your Worker
in **Workers & Pages → your project → Deployments** and check for a failed build; the log says why.
Every build also produces a preview URL you can open before it reaches production, and an earlier
version can be rolled back from that same screen. The AI can also revert the offending commit.

## Already publishing with Cloudflare Pages?

If your site already deploys through Cloudflare Pages, **nothing here forces you to move, and pulling
this template update changes nothing about your live site.** Your Pages project keeps building and
serving exactly as before, because the deploy is configured entirely in the Cloudflare dashboard
(production branch, root directory, build command), not by any file in this repo. The new
`site/wrangler.jsonc` is inert for Pages: Pages ignores a Wrangler config that has no
`pages_build_output_dir` key, so it neither changes nor breaks your build.

Pages is in maintenance mode, so moving to Workers is worth doing when convenient, but it is a
**one-time action you take in the Cloudflare dashboard when you choose**, not something that happens
on pull. When you're ready, ask Claude to walk you through it, or:

1. Make sure `site/wrangler.jsonc` exists with your project's `name` (Claude adds it if you set up before this file shipped).
2. Create the Worker: **Workers & Pages → Create → Workers → Import a repository**, pick this repo. Root directory `site`, build command `npm run build`, deploy command `npx wrangler deploy`. Save and deploy, then check that the `*.workers.dev` URL shows your site.
3. Move the custom domain from the Pages project to the Worker: remove it from Pages first (a domain can attach to only one at a time), then add it to the Worker. DNS is already on Cloudflare, so this is a couple of clicks and the certificate carries over.
4. Once the domain serves from the Worker, turn off the Pages project's automatic deployments (or delete the Pages project) so two builds don't run on the same repo.

In short: existing Pages sites keep working untouched, the switch is opt-in and done in the
dashboard, and only the custom-domain move (step 3) has any visible effect.

## Why Cloudflare (and how to swap it)

Cloudflare is the default here for three reasons: it's free with generous, unlimited bandwidth on
static sites; one owner-controlled account holds the domain, DNS, and (if an app later needs a
backend) Workers + D1/KV, the sovereign-backend tier in `source/formats/webapp.md`; and it builds
straight from the repo on every push, no config to babysit. Static assets and any future backend
live in the same Worker, so there's one thing to own instead of two.

None of that is lock-in. The host only builds a static site from your repo, so the repo stays the
source of truth and the host is a swappable build-and-CDN layer. **Vercel, Netlify, or GitHub Pages
would all work the same way**: you repoint DNS and set one build command (`npm run build`, output
`dist`, root `site`), and the content doesn't move. Pick Cloudflare unless you already live
somewhere else; the choice costs you nothing later.
