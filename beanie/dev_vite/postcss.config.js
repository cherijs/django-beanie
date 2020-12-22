module.exports = {
  parser: require("postcss-comment"),
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-hexrgba"),
    require("postcss-custom-properties"),
    require("postcss-at-rules-variables"),
    require("postcss-each"),
    require("postcss-preset-env")({
      stage: 1,
    }),
  ],
};
