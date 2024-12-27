import { z, type SchemaContext } from "astro:content";

const imageLinkSchema = ({ image }: SchemaContext) =>
  z.object({
    imagePath: z.string(),
    alt: z.string(),
    href: z.string(),
  });

const projectShowcaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.object({
    src: z.string(),
    href: z.string(),
    alt: z.string(),
  }),
});

const experienceBadgeSchema = z.object({
  title: z.string(),
  src: z.string(),
  alt: z.string(),
  experience: z.enum(["Learning", "Beginner", "Intermediate", "Expert"]),
});

const externalLinkSchema = z.string().optional();

const projectArticleSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    coverImage: image(),
    coverImageAlt: z.string(),
    summaryPoints: z.string().array().nonempty(),
    dateProjectPublished: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
    itchio: externalLinkSchema,
    steam: externalLinkSchema,
    github: externalLinkSchema,
  });

export {
  imageLinkSchema,
  projectShowcaseSchema,
  experienceBadgeSchema,
  projectArticleSchema,
};
