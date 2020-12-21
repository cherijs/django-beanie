module.exports = {
  purge: ["../templates/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        xs: "0 0 2px 0px rgba(0, 0, 0, 0.15)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      red: "#f60a0a",
      background: "#383E4C",
      "body-text": "#FFFFFF",
      gray: {
        DEFAULT: "#737373",
        100: "#F7F7F7",
        200: "#eaeaea",
        300: "#e4e4e4",
        400: "#949494",
        500: "#737373",
        600: "#6B6B6B",
        700: "#636363",
        800: "#5C5C5C",
        900: "#333",
      },

      blue: {
        DEFAULT: "#1433D2",
        100: "#B9C4F8",
        200: "#8A9CF4",
        300: "#5b70e0",
        400: "#2D4DEB",
        500: "#1433D2",
        600: "#0F28A3",
        700: "#0B1C75",
        800: "#071146",
        900: "#020617",
      },
      headers: "#7E87A0",
      primary: {
        DEFAULT: "#383E4C",
        100: "#9BA2B5",
        200: "#7E87A0",
        300: "#646D87",
        400: "#4E556A",
        500: "#383E4C",
        600: "#23262F",
        700: "#0D0E12",
        800: "#000000",
        900: "#000000",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Josefin Sans", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-css-variables")(
      {
        colors: "color",
        // borderColors: 'rounded',
        // colors: false,
        screens: false,
        fontFamily: false,
        fontSize: false,
        fontWeight: false,
        lineHeight: false,
        letterSpacing: false,
        backgroundSize: false,
        borderWidth: false,
        borderRadius: false,
        width: false,
        height: false,
        minWidth: false,
        minHeight: false,
        maxWidth: false,
        maxHeight: false,
        padding: false,
        margin: false,
        boxShadow: false,
        zIndex: false,
        opacity: false,
      },
      {
        // options
        postcssEachVariables: true, // default: false
      }
    ),
    require("@tailwindcss/forms"),
  ],
};
