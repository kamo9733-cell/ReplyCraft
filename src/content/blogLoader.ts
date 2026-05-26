// Loads every .md file in /content/posts at build time via Vite's import.meta.glob,
// parses the YAML-style frontmatter, and exposes a sorted list of posts.
// Adding a new post = dropping a .md file in /content/posts. No code changes here.

export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  readTime: string;
  coverImage?: string;
  coverImageAlt?: string;
  tags?: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

const rawModules = import.meta.glob("/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatterBlock, content] = match;
  const data: Record<string, unknown> = {};

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const kv = line.match(/^([A-Za-z0-9_]+)\s*:\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    const value = kv[2].trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      data[key] = value.slice(1, -1);
    } else if (value.startsWith("[") && value.endsWith("]")) {
      try {
        data[key] = JSON.parse(value);
      } catch {
        data[key] = value;
      }
    } else {
      data[key] = value;
    }
  }

  return { data, content };
}

const posts: BlogPost[] = Object.entries(rawModules)
  .filter(([path]) => {
    const filename = path.split("/").pop() || "";
    return !filename.startsWith("_");
  })
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { data, content } = parseFrontmatter(raw);
    return {
      slug,
      frontmatter: data as unknown as BlogFrontmatter,
      content: content.trim(),
    };
  })
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
