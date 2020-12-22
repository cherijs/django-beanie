const path = require("path");
const rimraf = require("rimraf");

rimraf.sync(path.resolve(__dirname, "../static/beanie"));

const pathAliasMap = {
  "@/": "/src/",
  "@components/": "/src/components/",
  "@views/": "/src/views/",
};

export default {
  cors: true,
  emitManifest: true,
  outDir: "../static/beanie",
  alias: {
    vue: "vue/dist/vue.esm-bundler.js",
  },
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
