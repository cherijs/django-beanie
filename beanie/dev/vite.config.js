// const path = require("path");
//
// const sharedConfig = {
//   alias: {
//     "/@/": path.resolve(__dirname, "src"),
//   },
// };
// module.exports = {
//   ...sharedConfig,
//   transforms: [require("vite-transform-globby-import")(sharedConfig)],
// };

const pathAliasMap = {
  "@/": "/src/",
  "@components/": "/src/components/",
  "@views/": "/src/views/",
};

export default {
  cors: true,
  emitManifest: true,
  resolvers: [
    {
      alias(path) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res);
          }
        }
      },
    },
  ],
  proxy: {
    // "/": "http://localhost:5100",
    "/hack": {
      target: "http://localhost:5100/hack",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/hack/, ""),
    },
  },
};
