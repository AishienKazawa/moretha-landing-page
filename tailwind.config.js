/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "ctm-accent": "#FDCA40",
        "ctm-primary": "#EFF5F8",
        "ctm-secondary": "#111010",
      },
      borderColor: {
        "ctm-accent": "#FDCA40",
        "ctm-primary": "#EFF5F8",
        "ctm-secondary": "#111010",
      },
      backgroundColor: {
        "ctm-accent": "#FDCA40",
        "ctm-primary": "#EFF5F8",
        "ctm-secondary": "#111010",
      },
      backgroundImage: {
        "ctm-gradient":
          "linear-gradient(180deg, rgb(0,0,0,.8), rgb(46,40,5,.8))",
      },
    },
  },
  plugins: [],
};
