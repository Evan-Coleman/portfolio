import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts show up in `npm run dev` and never in a production build.
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    year: z.string(),
    stack: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.url() }))
      .default([]),
    order: z.number().default(100),
    // Projects are private until you say otherwise. Nothing reaches the
    // public site unless this is explicitly set to true.
    published: z.boolean().default(false),
  }),
});

export const collections = { posts, projects };
