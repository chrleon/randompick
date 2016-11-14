var gulp = require('gulp'),
		browsersync = require('browser-sync'),
		sass = require('gulp-sass'),
		autoprefix = require('autoprefixer'),
		sass = require('gulp-sass'),
		postcss = require('gulp-postcss'),
		sourcemaps = require('gulp-sourcemaps');

// Start a server to preview the site in
gulp.task('browsersync', function() {
  browsersync.init({
    server: './app/'
  });
});

gulp.task('default', ['browsersync']);
