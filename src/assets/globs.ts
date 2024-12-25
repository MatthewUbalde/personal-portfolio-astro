import type { ImageMetadata } from "astro";

export const icons = import.meta.glob<{ default: ImageMetadata }>(
  `/src/assets/icons/*.svg`
);