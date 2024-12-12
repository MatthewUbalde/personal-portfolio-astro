/**
 * Type that holds the alt, src, and href
 */
export type ImageLink = {
  alt: string;
  src: string;
  href?: string | undefined;
};

/**
 * Extended by the ImageLink which is used to showcase projects with title and description
 */
export interface ProjectShowcase extends ImageLink {
  title: string;
  description?: string;
}

export interface ExperienceShowcase {
  title: string;
  src: string;
  alt: string;
  experience: "Learning" | "Beginner" | "Intermediate" | "Expert"; // As if.
}

export type NavigationTab = {
  href: string;
  label?: string | undefined;
};

export const SITE_NAVIGATION: Array<NavigationTab> = [
  {
    href:"/",
    label: "Home",
  },
  {
    href: "/web",
    label: "Web",
  },
  {
    href: "/game",
    label: "Game",
  },
  {
    href: "/software",
    label: "Software",
  },
  // {
  //   href: "/art",
  //   label: "Art",
  // },
];

export interface PageNavigation {
  dev?: Array<NavigationTab>;
  web?: Array<NavigationTab>;
}

export const SITE_PAGE_NAVIGATION: PageNavigation = {
  web: [
    {
      href: "/intro",
      label: "Intro",
    },
  ],
  dev: [
    {
      href: "/intro",
      label: "Intro",
    },
  ],
};
