/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ocean-black": "#191234",
        "ocean-blue": "#2c3664",
      },
    },
  },
  plugins: [],
};
