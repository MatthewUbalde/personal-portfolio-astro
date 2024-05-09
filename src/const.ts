export type ImageLink = {
  alt: string;
  src: string;
  href?: string | undefined;
};

export interface ProjectShowcase extends ImageLink {
  title: string;
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
    href: "/web",
    label: "Web Portfolio",
  },
  {
    href: "/game",
    label: "Game Portfolio",
  },
  {
    href: "/art",
    label: "Art Portfolio",
  },
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
