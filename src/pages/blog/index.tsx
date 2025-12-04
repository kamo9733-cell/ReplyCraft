import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/content/blogPosts";
import SEO from "@/components/SEO";

const BlogIndex = () => {
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
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold mb-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block text-primary font-semibold"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
