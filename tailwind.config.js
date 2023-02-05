module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",

  ],
  theme: {
    extend: {},
    colors: {
        'active-color':'#ed1846',
        'text-color':'rgb(116, 113, 113)',
        'btn-icon-color':'rgb(49, 48, 49)'
    },
  },
  plugins: [
    require("flowbite/plugin")

  ],
}