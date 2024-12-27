import { defineCollection, z, type SchemaContext } from "astro:content";
import { file, glob } from "astro/loaders";

import {
  imageLinkSchema,
  experienceBadgeSchema,
  projectArticleSchema,
  projectShowcaseSchema,
} from "./schemas";

const socialMedia = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/socialMedia" }),
  schema: imageLinkSchema,
});

const experiences = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/experience" }),
  schema: z.array(experienceBadgeSchema),
});

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
  socialMedia,
  experiences,
  gameArticles,
  mobileArticles,
  webArticles,
};
