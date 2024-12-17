// export type ImageLink = {
//   alt: string;
//   src: string;
//   href?: string | undefined;
// };

// export interface ProjectShowcase {
//   title: string;
//   description: string;
//   coverImage: ImageLink;
// }

// export interface ExperienceBadgeType {
//   title: string;
//   src: string;
//   alt: string;
//   experience: "Learning" | "Beginner" | "Intermediate" | "Expert";
// }

// export type NavLink = {
//   href: string;
//   label?: string | undefined;
// };

// export type NavLinkParent = {
//   children?: NavLink[];
// } & NavLink;

import type { NavLinkType } from "./types";

export const SITE_NAVIGATION: Array<NavLinkType> = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/comp-experience",
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
    href: "/art-experience",
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
