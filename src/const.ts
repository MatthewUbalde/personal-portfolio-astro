import type { NavLinkType } from "./types";

export const SITE_ROOT: string = "/personal-portfolio-astro";
export const SITE_NAVIGATION: Array<NavLinkType> = [
  {
    href: `${SITE_ROOT}/`,
    label: "Home",
  },
  {
    href: `${SITE_ROOT}/comp-experience`,
    label: "Computer Experience",
    children: [
      {
        href: "/web",
        label: "Web",
      },
      {
        href: "/software",
        label: "Software",
      },
      {
        href: "/mobile",
        label: "Mobile",
      },
      {
        href: "/game",
        label: "Game",
      },
    ],
  },
  {
    href: `${SITE_ROOT}/art-experience`,
    label: "Art Experience",
  },
];

export const SOCIAL_MEDIA_LINKS = {
  github: "https://github.com/MatthewUbalde",
  linkedin: "https://www.linkedin.com/in/matthew-ubalde-171918252/",
};
