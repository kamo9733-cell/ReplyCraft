import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/content/blogPosts";

// Import each article component
import WhatIsICP from "./articles/WhatIsICP";
import EmailWarming from "./articles/EmailWarming";

// Map slugs to components
const postComponents: Record<string, React.FC> = {
  "what-is-icp": WhatIsICP,
  "email-warming-importance": EmailWarming,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const PostContent = slug ? postComponents[slug] : null;

  React.useEffect(() => {
    if (post) {
      document.title = `${post.title} | Reply Craft`;

      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", post.excerpt);
    }
  }, [post]);

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

  return (
    <article className="pt-32 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">{post.title}</h1>
          <p className="text-muted-foreground">{post.date} • {post.readTime}</p>
        </header>

        {/* Article Content */}
        <section className="prose prose-lg text-foreground prose-a:text-primary prose-a:underline max-w-none">
          <div className="
            prose-headings:text-foreground 
            prose-h2:text-primary prose-h2:font-bold prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-primary/80 prose-h3:font-semibold prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-h4:text-primary/60 prose-h4:font-medium prose-h4:text-lg prose-h4:mt-5 prose-h4:mb-2
            prose-li:text-foreground prose-li:leading-relaxed
            prose-strong:text-primary/90 prose-strong:font-semibold
            prose-p:mb-6
          ">
            <PostContent />
          </div>
        </section>

        {/* Article Footer */}
        <footer className="mt-16 border-t pt-8 text-muted-foreground">
          <p>
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
        </footer>
      </div>
    </article>
  );
};

export default BlogPost;
