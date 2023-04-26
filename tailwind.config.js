/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        sidebarblack: "#131313",
        palewhite: "#F8F8F8",
        transparent_white: "rgba(10,10,10,0.8)",
        gray_i_like: "rgba(212, 212, 252, 0.12)",
      },
    },
  },
  plugins: [],
};
