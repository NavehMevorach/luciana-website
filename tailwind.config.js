module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/bg.jpeg')",
        place: "url('/assets/bg-place.jpeg')",
      },
    },
  },
  plugins: [],
}
