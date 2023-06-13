module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: { // changed to an object
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: { // added daisyui property
    themes: ["black"], // added themes property
  },
}
