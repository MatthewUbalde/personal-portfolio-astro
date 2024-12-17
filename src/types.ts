export type ImageLinkType = {
  alt: string;
  src: string;
  href?: string | undefined;
};

export type ProjectShowcaseType = {
  title: string;
  description: string;
  coverImage: ImageLinkType;
};

export type ExperienceBadgeType = {
  title: string;
  src: string;
  alt: string;
  experience: "Learning" | "Beginner" | "Adequate" | "Intermediate" | "Expert";
};

export type NavLinkType = {
  href: string;
  label: string;
  children?: NavLinkType[];
};
