import { z, type SchemaContext } from "astro:content";

const externalLinkSchema = z.string().optional();

export const projectShowcaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.object({
    src: z.string(),
    href: z.string(),
    alt: z.string(),
  }),
});

export const experienceBadgeSchema = z.object({
  title: z.string(),
  src: z.string(),
  experience: z.enum(["Learning", "Beginner", "Intermediate", "Expert"]),
});

export const projectArticleSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    coverImage: image(),
    coverImageAlt: z.string(),
    summaryPoints: z.string().array().nonempty(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    featured: z.boolean(),
    itchio: externalLinkSchema,
    steam: externalLinkSchema,
    github: externalLinkSchema,
  });
