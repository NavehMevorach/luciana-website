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
        bar: "url('/assets/bar.jpg')",
        dinning: "url('/assets/dinning.jpg')",
        food: "url('/assets/food.jpg')",
        menu: "url('/assets/menu-en.png')",
      },
    },
  },
  plugins: [],
}
