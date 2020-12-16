module.exports = {
  parser: require("postcss-comment"),
  plugins: [
    require("postcss-import"),
    require("tailwindcss")(
      "/Users/cherijs/_REPO/beanie/beanie/static_src/tailwind.config.js"
    ),
    require("postcss-hexrgba"),
    require("postcss-custom-properties"),
    require("postcss-at-rules-variables"),
    require("postcss-each"),
    require("postcss-preset-env")({
      stage: 1,
    }),
  ],
};
