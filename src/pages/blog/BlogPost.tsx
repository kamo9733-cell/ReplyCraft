import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/content/blogPosts";
import WhatIsICP from "./articles/WhatIsICP";
import EmailWarming from "./articles/EmailWarming";
import LandingInSpam from "./articles/LandingInSpam";
import SEO from "@/components/SEO";

const postComponents: Record<string, React.FC> = {
  "what-is-icp": WhatIsICP,
  "email-warming-importance": EmailWarming,
  "landing-in-spam": LandingInSpam,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const PostContent = slug ? postComponents[slug] : null;

  if (!post || !PostContent) {
    return (
      <section className="py-24">
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

  const articleUrl = `https://reply-craft.com/blog/${post.slug}`;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: "https://reply-craft.com/og-image.png",
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: "Hassan Kamran",
    },
    publisher: {
      "@type": "Organization",
      name: "Reply Craft",
      logo: {
        "@type": "ImageObject",
        url: "https://reply-craft.com/ReplyCraft.png",
      },
    },
  };

  return (
    <>
      <SEO
        title={`${post.title} | Reply Craft`}
        description={post.excerpt}
        canonical={articleUrl}
        ogType="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <article className="pt-32 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">{post.title}</h1>
            <p className="text-muted-foreground">{post.date} • {post.readTime}</p>
          </header>

          {/* Article Content */}
          <section className="prose prose-lg text-foreground prose-a:text-primary prose-a:underline max-w-none">
            <div className="prose-headings:text-foreground">
              <PostContent />
            </div>
          </section>

          {/* Share Buttons & Footer */}
          <div className="mt-16 border-t pt-8">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-muted-foreground text-sm">Share this article</span>
              {/* Social links here */}
            </div>

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
        </div>
      </article>
    </>
  );
};

export default BlogPost;
