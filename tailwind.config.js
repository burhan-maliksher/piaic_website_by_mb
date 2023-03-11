/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        iceberg:['var(--font-iceberg)'],
      },
      colors:{
        cyan_cust_dark:'#17BEBB',
        cyan_cust_light:'#85dddb',
      }
      
    },
  },
  plugins: [],
}
