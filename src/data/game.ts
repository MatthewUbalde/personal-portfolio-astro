import type { ExperienceShowcase, ProjectShowcase } from "../const"

const gameProjects: Array<ProjectShowcase> = [
  {
    title: "King of the Cheese",
    src: "/mint-big.png",
    href: "/game/king-of-the-cheese",
    alt: "Dark Birthday eating cheese in his dreams",
    description: "King of the Hat fan-game where you play as Dark Birthday and eat cheese in his dreams!",
  },
  {
    title: "Combo Spells",
    src: "/mint-big.png",
    href: "/game/combo-spells",
    alt: "Magician beating up a dummy",
    description: "Initially a high school project. Use series of key combinations to cast spells upon the dummy and get a high score!",
  }
]

const gameExperience: Array<ExperienceShowcase> = [
  {
    title: "Godot",
    src: "/assets/godot.svg",
    alt: "Godot Logo",
    experience: "Beginner",
  },
  {
    title: "Unity",
    src: "/assets/unity.svg",
    alt: "Unity Logo",
    experience: "Beginner",
  }
]

export { gameProjects, gameExperience }