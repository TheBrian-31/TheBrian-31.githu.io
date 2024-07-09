const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

// tailwind.config.js

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        // Add as many custom classes as needed
      },
      colors: {
        'custom-gray': '#3B3B3B',
        'custom-black': '#262626',
        'custom-yellow': '#FDB623',
        'custom-blue': '#79ABD2',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
});
