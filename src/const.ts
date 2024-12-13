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

export type NavLink = {
  href: string;
  label?: string | undefined;
};

export type NavLinkParent = {
  children?: NavLink[];
} & NavLink;

export const SITE_NAVIGATION: Array<NavLinkParent> = [
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
  // {
  //   href: "/art-experience",
  //   label: "Art Experience",
  //   children: [
  //     {
  //       href: "/illustration",
  //       label: "Illustration",
  //     },
  //     {
  //       href: "/animation",
  //       label: "Animation",
  //     },
  //   ],
  // },
];

// export interface PageNavigation {
//   dev?: Array<NavigationTab>;
//   web?: Array<NavigationTab>;
// }

// export const SITE_PAGE_NAVIGATION: PageNavigation = {
//   web: [
//     {
//       href: "/intro",
//       label: "Intro",
//     },
//   ],
//   dev: [
//     {
//       href: "/intro",
//       label: "Intro",
//     },
//   ],
// };
