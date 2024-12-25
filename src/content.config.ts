import { defineCollection, z, type SchemaContext } from "astro:content";
import { file, glob } from "astro/loaders";

import {
  experienceBadgeSchema,
  projectArticleSchema,
  projectShowcaseSchema,
} from "./schemas";

const experiences = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/experience" }),
  schema: z.array(experienceBadgeSchema),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/projects" }),
  schema: z.array(projectShowcaseSchema),
});

const computerProjectsRoot = "./src/content/comp-experience";

const gameArticles = defineCollection({
  loader: glob({ pattern: "*.md", base: `${computerProjectsRoot}/game` }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

const mobileArticles = defineCollection({
  loader: glob({ pattern: "*.md", base: `${computerProjectsRoot}/mobile` }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

const webArticles = defineCollection({
  loader: glob({ pattern: "*.md", base: `${computerProjectsRoot}/web` }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

export const collections = {
  experiences,
  projects,
  gameArticles,
  mobileArticles,
  webArticles,
};
