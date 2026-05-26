import React from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { getAllPosts } from "@/content/blogLoader";

const BlogIndex = () => {
  const posts = getAllPosts();

  return (
    <>
      <SEO
        title="Blog | Reply Craft — ICP, Deliverability & Cold Outreach"
        description="Reply Craft blog: in-depth guides on ICPs, email warming, deliverability, and AI-driven outreach."
        canonical="https://reply-craft.com/blog"
      />

      <section className="pt-36 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Outbound & Lead Generation Insights
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Practical guides, technical deep-dives, and tactical templates to
              scale outbound the right way.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  aria-label={post.frontmatter.title}
                  className="block"
                >
                  {post.frontmatter.coverImage ? (
                    <img
                      src={post.frontmatter.coverImage}
                      alt={
                        post.frontmatter.coverImageAlt ||
                        post.frontmatter.title
                      }
                      width={1200}
                      height={514}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[21/9] object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-full aspect-[21/9] bg-gradient-to-br from-primary/30 via-primary/10 to-secondary flex items-center justify-center px-6"
                    >
                      <span className="text-primary/70 text-lg font-semibold text-center">
                        {post.frontmatter.title}
                      </span>
                    </div>
                  )}
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-2xl font-bold mb-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.frontmatter.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {post.frontmatter.date} • {post.frontmatter.readTime}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary font-semibold"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
