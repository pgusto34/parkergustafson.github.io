---
title: "Publishing Notes: A Sample Post"
description: "A clearly labeled sample used to demonstrate the site’s writing, code, and math support."
pubDate: 2026-07-28
tags: ["sample", "meta"]
draft: false
placeholder: true
---

> **Sample content:** This article exists only to exercise the publishing system. It is not a claim about Parker’s work, research, or views and can be replaced by the first real post.

This site supports ordinary Markdown, syntax-highlighted code, and mathematical notation. A post can move from an isolated public Obsidian vault into this folder without exposing private notes.

## Code

```ts
const publishedPosts = posts
  .filter((post) => !post.data.draft)
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
```

## Math

Inline notation such as $O(n \log n)$ renders alongside prose. Display equations work too:

$$
\sum_{i=1}^{n} i = \frac{n(n + 1)}{2}
$$

## Standard links

Published posts should use [standard Markdown links](https://www.markdownguide.org/basic-syntax/#links), not Obsidian-only wiki links. Images should live beside the article or in the public assets directory.
