import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { twJoin, twMerge } from "tailwind-merge";

import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://matthewubalde.github.io",
  base: "",
  integrations: [tailwind({
    applyBaseStyles: true,
  }), twJoin(), twMerge(), vue(), mdx()],
});