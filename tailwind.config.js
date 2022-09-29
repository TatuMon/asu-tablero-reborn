/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
	"./pages/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-pattern': "url('/img/background-dark.png')",
		'light-pattern': "url('/img/fondo.png')",
	  }
	},
  },
  plugins: [],
}
