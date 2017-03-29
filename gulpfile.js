var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
  var tsResult = gulp.src("src/**/*.ts")
    .pipe(ts());
    return tsResult.js
        .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
        .pipe(gulp.dest('dist'));
});