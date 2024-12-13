import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

import { experienceBadgeSchema, projectCoverSchema } from "./schemas";

const gameProjects = defineCollection({
  loader: file("src/data/game.json", {
    parser: (text) => JSON.parse(text).projects,
  }),
  schema: projectCoverSchema,
});

const gameExperiences = defineCollection({
  loader: file("src/data/game.json", {
    parser: (text) => JSON.parse(text).experience,
  }),
  schema: experienceBadgeSchema,
});

const game = defineCollection({
  loader: file("src/data/game.json", {
    parser: (text) => JSON.parse(text),
  }),
  schema: z.object({
    projects: projectCoverSchema,
    experience: experienceBadgeSchema,
  }),
});

export const collections = { game, gameProjects, gameExperiences };
