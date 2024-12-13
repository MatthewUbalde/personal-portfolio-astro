import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { twJoin, twMerge } from "tailwind-merge";

// https://astro.build/config
export default defineConfig({
  site: "https://matthewubalde.github.io",
  base: "",
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    twJoin(),
    twMerge(),
  ],
});
