# parkergustafson.com

Parker Gustafson’s portfolio and writing site, built with Astro and deployed to GitHub Pages.

## Local development

Requires a current Node.js LTS release.

```sh
npm install
npm run dev
```

After that, ordinary content or layout changes do not require any additional npm or Astro commands. Just edit files in `src/` or `public/` and refresh your browser. The development server provides live updates.

If you add a new dependency or change package configuration, run `npm install` again and restart the development server.

Create a production build with:

```sh
npm run build
npm run preview
```

## Publishing a blog post

1. Copy `src/templates/blog-post.md` into `src/content/blog/` and choose a descriptive lowercase filename.
2. Fill in the required `title`, `description`, and `pubDate` fields.
3. Keep `draft: true` while writing. Change it to `false` when the post is ready.
4. Use standard Markdown links rather than Obsidian wiki links. LaTeX-style inline and display math are supported.
5. Run the production build before committing.

For the safest Obsidian workflow, open this repository—or only its public blog directory—as a separate vault. Do not connect a private knowledge-base vault to this public repository.

## Replacing placeholders

- Add approved project and research details to their route pages.
- Add an approved résumé at `public/resume.pdf`, then replace the résumé empty state with a download link.
- Add only confirmed external profile and contact URLs to the footer.
- Remove the sample article after the first real post is published.

## Deployment and domain

Pushing `main` runs `.github/workflows/deploy.yml`. In repository settings, GitHub Pages must use **GitHub Actions** as its source and `www.parkergustafson.com` as its custom domain.

GoDaddy DNS should contain:

- `www` CNAME → `pgusto34.github.io`
- `@` A → `185.199.108.153`
- `@` A → `185.199.109.153`
- `@` A → `185.199.110.153`
- `@` A → `185.199.111.153`

Remove conflicting parked records, do not add wildcard records, and enable **Enforce HTTPS** in GitHub after certificate provisioning completes.
