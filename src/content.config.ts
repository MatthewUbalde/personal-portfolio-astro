import { defineCollection, z, type SchemaContext } from "astro:content";
import { file, glob } from "astro/loaders";

import {
  imageLinkSchema,
  experienceBadgeSchema,
  projectArticleSchema,
} from "./schemas";

const socialMedia = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/socialMedia" }),
  schema: imageLinkSchema,
});

const experiences = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/experience" }),
  schema: z.array(experienceBadgeSchema),
});

// This is used to create links, but not the pages
const articles = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: `./src/content/`,
  }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

// The ones below are used to create the pages
const computerProjectsRoot = "./src/content/comp-experience";

const gameArticles = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: `${computerProjectsRoot}/game` }),
  schema: ({ image }) => projectArticleSchema({ image }),
  type: "content_layer",
});

const mobileArticles = defineCollection({
  loader: glob({
    pattern: "*.{md,mdx}",
    base: `${computerProjectsRoot}/mobile`,
  }),
  schema: ({ image }) => projectArticleSchema({ image }),
  type: "content_layer",
});

const webArticles = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: `${computerProjectsRoot}/web` }),
  schema: ({ image }) => projectArticleSchema({ image }),
  type: "content_layer",
});

export const collections = {
  articles,
  socialMedia,
  experiences,
  gameArticles,
  mobileArticles,
  webArticles,
};
