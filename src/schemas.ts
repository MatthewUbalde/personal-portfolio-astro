import { z, type SchemaContext } from "astro:content";

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

const projectArticleSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    // coverImage: image().refine((img) => img.width >= 600, {
    //   message: "Cover image must be at least 600 pixels",
    // }),
    coverImage: image(),
    coverImageAlt: z.string(),
  });

export { projectShowcaseSchema, experienceBadgeSchema, projectArticleSchema };
