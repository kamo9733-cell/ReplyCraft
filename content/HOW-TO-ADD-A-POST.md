# How to add a new blog post

This site's blog runs on markdown files. Adding a post = creating **one** `.md` file in `content/posts/`. No code changes, no editing route files, no manual sitemap updates.

---

## Quick start (the 60-second version)

1. Decide a URL slug (lowercase, hyphens, no spaces). Example: `how-to-write-cold-emails`.
2. Copy `content/posts/_TEMPLATE.md` to `content/posts/<your-slug>.md`.
3. Fill in the fields at the top (between the two `---` lines) and write the body below.
4. (Optional) Drop a cover image into `public/blog/` and reference it in `coverImage`.
5. Commit and push. The build picks it up automatically — new route, sitemap entry, prerendered HTML, all wired up.

The URL becomes `https://reply-craft.com/blog/<your-slug>` — derived from the filename.

---

## The frontmatter fields (between the two `---` lines)

Every field with **(required)** must be filled in. Optional fields can be deleted entirely if you don't need them.

| Field | Required? | What it does |
| --- | --- | --- |
| `title` | **required** | Becomes the post's H1 heading and the SEO `<title>` tag. Keep it under ~60 characters so Google doesn't truncate it. |
| `date` | **required** | Publish date, format `YYYY-MM-DD`. Shown under the title and used for sorting posts (newest first) and for the `BlogPosting` schema. |
| `author` | **required** | Author name. Used in the blog post schema (good for E-E-A-T signals). Default: `Hassan Kamran`. |
| `excerpt` | **required** | One- or two-sentence summary. Shown on the blog index card and used as the `<meta name="description">` for SEO. Aim for 120–160 characters. |
| `readTime` | **required** | Estimated reading time, e.g. `"6 min read"`. Shown under the title. |
| `coverImage` | optional | Path to a horizontal cover image, e.g. `"/blog/my-post-cover.jpg"`. Renders as a full-width hero at the top. If omitted, a gradient placeholder is shown. |
| `coverImageAlt` | optional | Alt text for the cover image. If omitted, the post title is used. |
| `tags` | optional | List of topic tags, e.g. `["Cold Email", "Deliverability"]`. Shown as pills on the post and on the blog index. Used for organization; not currently filterable. |

### Important formatting notes

- **Use straight quotes** (`"like this"`) around string values, not curly quotes.
- **Dates must be `YYYY-MM-DD`**, in quotes.
- **Tags must be a JSON-style array** in quotes: `["Tag One", "Tag Two"]`.
- Do **not** put the title as an `# H1` in the body — the `title` field becomes the H1 automatically. Start the body with a paragraph or `## H2`.

---

## Writing the body (markdown basics)

Below the closing `---` you write plain markdown. The most useful syntax:

```markdown
## A section heading (H2)
### A sub-section heading (H3)

A paragraph. **Bold text.** *Italic.* A [link](https://example.com).

- A bullet list item
- Another item

1. A numbered list item
2. Another item

> A quoted blockquote.

`inline code` or fenced code blocks:

​```js
const x = 1;
​```
```

That covers ~95% of what you'll need. Markdown reference: <https://www.markdownguide.org/basic-syntax/>.

---

## Cover images

1. Save your image to `public/blog/` (create the folder if it's not there). Recommended dimensions: **1200×630** or wider (3:1 ratio works great for the hero banner). JPG or PNG. Keep it under **300 KB** for fast loading.
2. Reference it in frontmatter as `coverImage: "/blog/your-filename.jpg"` (note the leading slash — that's correct).
3. Add `coverImageAlt: "Describe what's in the image"` for accessibility and SEO.

If you don't have a cover image yet, just leave both fields out. A gradient placeholder with the post title will be shown.

---

## Table of contents

The TOC at the top of the post is **auto-generated** from your `## H2` headings. You don't have to maintain it. If you want a section to show up in the TOC, just make it an `## H2`.

`### H3` sub-headings appear in the article but not in the TOC (intentional — keeps it scannable).

---

## What happens automatically when you add a post

When you run the build (locally with `npm run build`, or on Vercel deploy), the following are generated for your new post — **you don't touch any of them**:

- A new route at `/blog/<slug>` (from the filename)
- Per-route SEO: `<title>`, meta description, canonical URL, Open Graph + Twitter Card tags
- `BlogPosting` structured data (JSON-LD) including title, date, author, image
- `BreadcrumbList` structured data
- The post added to `dist/sitemap.xml`
- Prerendered HTML (so crawlers see the full content without running JavaScript)
- The post listed on `/blog`, sorted newest-first
- Tags rendered as pills on the post and the index
- Share buttons (LinkedIn, X, Copy link)
- A "Related articles" section linking to your other posts

---

## SEO checklist for every post

Before publishing, double-check:

- [ ] `title` is under 60 characters and includes a keyword you want to rank for.
- [ ] `excerpt` is 120–160 characters and reads well as a search-result snippet.
- [ ] `coverImage` is set (and is at least 1200px wide, under 300 KB).
- [ ] `coverImageAlt` describes the image (don't keyword-stuff).
- [ ] At least 3–4 `## H2` sections in the body. Long posts get a real TOC.
- [ ] You linked to at least one other page on the site (e.g., `/pricing`, another blog post, `/#how-it-works`). Internal links matter.
- [ ] You linked to **at least one external source** if you mention a tool or stat — adds credibility.
- [ ] No raw URLs sitting in the text. Use `[descriptive anchor](url)` instead.
- [ ] Word count above ~800 for serious topics; thin content rarely ranks.

---

## Editing or deleting a post

- **Edit**: change the `.md` file. The next build picks up the changes.
- **Update date if you make significant edits**: bump `date` (or add a `dateModified: "YYYY-MM-DD"` field — currently not consumed, but planned for future).
- **Delete**: remove the `.md` file. The route and sitemap entry disappear on the next build.
- **Rename a post (change slug)**: rename the file. **Be careful** — the old URL will 404. If the post was indexed, set up a redirect or keep the old slug.

---

## The template file

Open `content/posts/_TEMPLATE.md` to see a working example with every field filled in. Copy it, rename, edit. That's the whole workflow.

The `_TEMPLATE.md` file itself is ignored by the loader (its leading `_` makes the loader skip it), so it never shows up as a published post.
