import type { NavLinkType } from "./types";

export const SITE_ROOT: string = "/personal-portfolio-astro";
export const SITE_NAVIGATION: Array<NavLinkType> = [
  {
    href: `${SITE_ROOT}/`,
    label: "Home",
  },
  {
    href: `${SITE_ROOT}/comp-experience`,
    label: "Programming Experience",
    children: [
      {
        href: "/web",
        label: "Web Development",
      },
      {
        href: "/software",
        label: "Software Development",
      },
      {
        href: "/mobile",
        label: "Mobile Development",
      },
      {
        href: "/game",
        label: "Game Development",
      },
    ],
  },
  // This is for if I were to pursue this path
  {
    href: `${SITE_ROOT}/art-experience`,
    label: "Art Experience",
    // children: [
    //   {
    //     href: "/illustration",
    //     label: "Illustration",
    //   },
    //   {
    //     href: "/animation",
    //     label: "Animation",
    //   },
    // ],
  },
];
