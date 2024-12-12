/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ocean-blue": "#28257",
        "ocean-pink": "b57fee",
        "ocean-white": "feffe8",
      },
    },
  },
  plugins: [],
};
