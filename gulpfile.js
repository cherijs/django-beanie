"use strict";

const browserify = require("browserify");
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const autoprefixer = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const reload = browserSync.reload;

const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const config = {
  djangoHost: "localhost",
  djangoPort: 5100,
  jsPort: 8100,
  tailwindConfig:
    "/Users/cherijs/_REPO/beanie/beanie/static_src/tailwind.config.js",
  watchSassFiles: "beanie/src/sass/**/*.scss",
  watchPostcssFiles: "beanie/static_src/src/**/*.pcss",
  watchJsFiles: "beanie/src/js/**/*.js",
  cssOutputDir: "beanie/static/",
  jsOutputDir: "beanie/static/",
  watchHtmlFiles: [
    "beanie/templates/**/*.html",
    "demo/demo/templates/**/*.html",
  ],
};

gulp.task("postcss", function () {
  return gulp
    .src(config.watchPostcssFiles)
    .pipe(
      postcss([
        require("postcss-import"),
        require("tailwindcss")(config.tailwindConfig),
        require("postcss-hexrgba"),
        require("postcss-simple-vars"),
        require("postcss-nested"),
        require("postcss-each"),
        require("postcss-custom-properties"),
        require("postcss-at-rules-variables"),
        require("postcss-preset-env")({
          stage: 1,
        }),
      ])
    )
    .pipe(
      rename({
        extname: ".css",
      })
    )
    .pipe(gulp.dest(config.cssOutputDir))
    .pipe(reload({ stream: true }));
});

gulp.task("js", function () {
  return gulp
    .src([config.watchJsFiles])
    .pipe(concat("kube.js"))
    .pipe(gulp.dest(config.jsOutputDir));
});

gulp.task("styles", function () {
  return gulp
    .src(config.watchSassFiles)
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compact" }))
    .on("error", sass.logError)
    .pipe(autoprefixer({ browsers: ["last 2 version", "> 5%"] }))
    .pipe(gulp.dest(config.cssOutputDir))
    .pipe(reload({ stream: true }));
});

gulp.task("watch", function () {
  browserSync({
    port: config.jsPort,
    ui: false,
    notify: false,
    ghostMode: false,
    https: false,
    startPath: "/admin/",
    proxy: {
      target: config.djangoHost + ":" + config.djangoPort,
    },
  });
  gulp.watch(config.watchPostcssFiles, gulp.series("postcss"), {
    ignoreInitial: false,
  });
  // gulp.watch(config.watchPostcssFiles, gulp.series("postcss"));
  // gulp.watch(config.watchSassFiles, gulp.series("styles"));
  // gulp.watch(config.watchJsFiles, gulp.series("js"));
  gulp.watch(config.watchHtmlFiles).on("change", reload);
});

gulp.task("default", gulp.series("postcss", "watch"));
// gulp.task("default", gulp.series("postcss", "styles", "js", "watch"));
