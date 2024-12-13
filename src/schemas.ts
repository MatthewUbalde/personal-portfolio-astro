import { z } from "astro:content";

const projectShowcaseSchema = z.object({
  title: z.string(),
  coverImage: z.object({
    src: z.string(),
    href: z.string(),
    alt: z.string(),
    description: z.string().optional(),
  }),
});

const experienceBadgeSchema = z.object({
  title: z.string(),
  src: z.string(),
  alt: z.string(),
  experience: z.enum(["Learning", "Beginner", "Intermediate", "Expert"]),
});

export { projectShowcaseSchema, experienceBadgeSchema };
