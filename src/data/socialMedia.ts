import type { ImageLink } from "../const.tsx"

export interface SocialMedia {
  linkedin: ImageLink;
  github: ImageLink;
}

const socialMedia: SocialMedia = {
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

export default socialMedia;