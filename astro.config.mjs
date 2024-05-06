import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";
import { twJoin, twMerge } from "tailwind-merge";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: true,
    }),
    twJoin(),
    twMerge(),
  ],
});
