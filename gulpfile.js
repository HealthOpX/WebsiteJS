const gulp = require("gulp");
const browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");

gulp.task("nodemon", cb => {
  let started = false;

  return nodemon({
    script: "app.js"
  }).on("start", () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task(
  "browser-sync",
  gulp.series("nodemon", () => {
    browserSync.init(null, {
      proxy: "http://localhost:3000",
      files: ["views/*.*", "public/styles/*.css", "public/js/*.js", "public/stylesheets/*.css", "public/assets/*.*"],
      port: 9000
    });
  })
);

gulp.task("start", gulp.series("browser-sync", async () => {return gulp.src('package.json')}));
