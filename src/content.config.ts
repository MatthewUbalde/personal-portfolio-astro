import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

import { experienceBadgeSchema, projectShowcaseSchema } from "./schemas";

const experiences = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/experience" }),
  schema: z.array(experienceBadgeSchema),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/projects" }),
  schema: z.array(projectShowcaseSchema),
});

export const collections = { experiences, projects };
