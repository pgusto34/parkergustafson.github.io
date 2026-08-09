import { useEffect, useMemo, useState } from "react";

export interface BlogPostSummary {
  href: string;
  title: string;
  description: string;
  pubDate: string;
  tags: string[];
  label?: string;
}

interface BlogFilterProps {
  posts: BlogPostSummary[];
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export default function BlogFilter({ posts }: BlogFilterProps) {
  const tags = useMemo(() => [...new Set(posts.flatMap((post) => post.tags))].sort(), [posts]);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    const requestedTag = new URLSearchParams(window.location.search).get("tag");
    if (requestedTag && tags.includes(requestedTag)) setSelectedTag(requestedTag);
  }, [tags]);

  const selectTag = (tag: string) => {
    setSelectedTag(tag);
    const url = new URL(window.location.href);
    if (tag === "all") url.searchParams.delete("tag");
    else url.searchParams.set("tag", tag);
    window.history.replaceState({}, "", url);
  };

  const visiblePosts = selectedTag === "all"
    ? posts
    : posts.filter((post) => post.tags.includes(selectedTag));

  return (
    <>
      {tags.length > 0 && (
        <nav className="filter-bar" aria-label="Filter posts by tag">
          {["all", ...tags].map((tag) => {
            const active = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                className={`tag-filter${active ? " is-active" : ""}`}
                aria-pressed={active}
                onClick={() => selectTag(tag)}
              >
                {tag === "all" ? "All" : tag}
              </button>
            );
          })}
        </nav>
      )}
      <p className="sr-only" aria-live="polite">
        {visiblePosts.length} {visiblePosts.length === 1 ? "post" : "posts"} shown
      </p>
      <div className="blog-list">
        {visiblePosts.map((post) => (
          <article className="blog-card" key={post.href}>
            <div className="blog-card-meta">
              <time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time>
              {post.label && <span className="status-pill">{post.label}</span>}
            </div>
            <h3><a href={post.href}>{post.title}</a></h3>
            <p>{post.description}</p>
            {post.tags.length > 0 && (
              <ul className="tag-list" aria-label="Tags">
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <button type="button" onClick={() => selectTag(tag)}>{tag}</button>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
