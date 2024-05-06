export type ImageLink = {
  alt: string;
  src: string;
  href?: string | undefined;
};

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

interface PageNavigation {
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

interface SocialMedia {
  linkedin: ImageLink;
  github: ImageLink;
}

export const SITE_SOCIAL_MEDIA: SocialMedia = {
  linkedin: {
    src: "/assets/linkedin.svg",
    alt: "Linkedin Account Link",
    href: "https://www.linkedin.com/in/matthew-ubalde-171918252/",
  },
  github: {
    src: "/assets/github-mark-white.svg",
    alt: "Github Account Link",
    href: "https://github.com/MatthewUbalde",
  },
};
