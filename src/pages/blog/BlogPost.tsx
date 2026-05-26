import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import { Linkedin, Twitter, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { getPostBySlug, getAllPosts } from "@/content/blogLoader";

const SITE = "https://reply-craft.com";

function buildToc(content: string): { id: string; text: string }[] {
  const slugger = new GithubSlugger();
  const items: { id: string; text: string }[] = [];
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(/^##\s+(.+?)\s*$/);
    if (m) {
      const text = m[1].replace(/\*\*/g, "");
      items.push({ id: slugger.slug(text), text });
    }
  }
  return items;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-4 text-muted-foreground">
            We couldn't find that article. Return to the{" "}
            <Link to="/blog" className="text-primary">
              blog index
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

  const { frontmatter, content } = post;
  const articleUrl = `${SITE}/blog/${post.slug}`;
  const coverImageUrl = frontmatter.coverImage
    ? `${SITE}${frontmatter.coverImage}`
    : `${SITE}/og-image.png`;
  const toc = buildToc(content);
  const relatedPosts = getAllPosts().filter((p) => p.slug !== post.slug);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    image: coverImageUrl,
    mainEntityOfPage: articleUrl,
    keywords: frontmatter.tags?.join(", "),
    author: {
      "@type": "Person",
      name: frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Reply Craft",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/ReplyCraft.png`,
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: frontmatter.title,
        item: articleUrl,
      },
    ],
  };

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    articleUrl
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    frontmatter.title
  )}&url=${encodeURIComponent(articleUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Could not copy link");
    }
  };

  return (
    <>
      <SEO
        title={`${frontmatter.title} | Reply Craft`}
        description={frontmatter.excerpt}
        canonical={articleUrl}
        ogType="article"
        ogImage={coverImageUrl}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="bg-background">
        {/* Cover image (or gradient placeholder) */}
        <div className="max-w-4xl mx-auto px-6 mt-32 mb-12">
          {frontmatter.coverImage ? (
            <img
              src={frontmatter.coverImage}
              alt={frontmatter.coverImageAlt || frontmatter.title}
              width={1200}
              height={514}
              fetchPriority="high"
              decoding="async"
              className="w-full aspect-[21/9] object-cover rounded-2xl shadow-elegant"
            />
          ) : (
            <div
              aria-hidden="true"
              className="w-full aspect-[21/9] rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-secondary flex items-center justify-center px-6"
            >
              <span className="text-primary/70 text-xl md:text-2xl font-semibold text-center">
                {frontmatter.title}
              </span>
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 max-w-3xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{frontmatter.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-muted-foreground">
              By {frontmatter.author} • {frontmatter.date} •{" "}
              {frontmatter.readTime}
            </p>
          </header>

          {/* Tags */}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="text-muted-foreground text-sm">Share</span>
            <a
              href={linkedinShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={twitterShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={handleCopyLink}
              aria-label="Copy link"
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition"
            >
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Table of contents */}
          {toc.length > 1 && (
            <nav
              aria-label="Table of contents"
              className="mb-12 p-6 bg-muted/60 rounded-xl border border-border"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                On this page
              </h2>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-foreground hover:text-primary transition"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Article body (markdown) */}
          <section className="prose prose-lg text-foreground prose-headings:text-foreground prose-a:text-primary prose-a:underline prose-strong:text-foreground max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={{
                a: ({ href, children, ...props }) => {
                  const isExternal = href?.startsWith("http");
                  return (
                    <a
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </section>

          {/* CTA */}
          <div className="mt-12 border-t pt-8">
            <p className="text-muted-foreground">
              Enjoyed this article?{" "}
              <Link to="/blog" className="text-primary font-semibold">
                Explore more posts
              </Link>{" "}
              or{" "}
              <a
                href="https://calendly.com/replyycraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold"
              >
                book a demo
              </a>
              .
            </p>
          </div>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <aside className="mt-12 mb-16 border-t pt-8">
              <h2 className="text-2xl font-bold mb-6">Related articles</h2>
              <ul className="space-y-4">
                {relatedPosts.map((rp) => (
                  <li key={rp.slug}>
                    <Link
                      to={`/blog/${rp.slug}`}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {rp.frontmatter.title}
                    </Link>
                    <p className="text-muted-foreground text-sm mt-1">
                      {rp.frontmatter.excerpt}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPost;
