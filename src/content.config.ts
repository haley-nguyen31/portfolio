import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const category = z.enum(['growth', 'strategy', 'community', 'product']).optional();
const metric = z.object({ value: z.string(), label: z.string(), todo: z.string().optional() });
const pending = z.object({ label: z.string(), raw: z.string(), todo: z.string().optional() });

// `.loose()` keeps the extra TODO/notes fields I left in the frontmatter.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z
    .looseObject({
      // `kind` is a free-text label now (e.g. "Growth, 2025"); nesting comes from `parent`.
      title: z.string().optional(),
      kind: z.string().optional(),
      parent: z.string().optional(),
      org: z.string().optional(),
      role: z.string().optional(),
      client: z.string().optional(),
      dateLabel: z.string().optional(),
      timeline: z.string().nullable().optional(),
      location: z.string().optional(),
      category,
      tools: z.array(z.string()).optional(),
      order: z.number().default(99),
      summary: z.string().optional(),
      chip: z.string().optional(),
      metrics: z.array(metric).optional(),
      pendingMetrics: z.array(pending).optional(),
      resultsConfidential: z.boolean().optional(),
      pullQuotes: z.array(z.string()).optional(),
      learned: z.string().optional(),
      images: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

const sideImage = z.union([
  z.string(),
  z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }),
]);

const sideProjects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/side-projects' }),
  schema: z.looseObject({
    title: z.string(),
    kind: z.string().optional(),
    group: z.enum(['experience', 'competition']),
    org: z.string(),
    role: z.string().optional(),
    award: z.string().optional(),
    dateLabel: z.string(),
    category,
    order: z.number().default(99),
    summary: z.string().optional(),
    metrics: z.array(metric).optional(),
    images: z.array(sideImage).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, 'side-projects': sideProjects };
