var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		sass = require('gulp-sass'),
		autoprefix = require('autoprefixer'),
		sass = require('gulp-sass'),
		postcss = require('gulp-postcss'),
		sourcemaps = require('gulp-sourcemaps');

// Static Server + watching scss/html files
gulp.task('serve', ['html', 'js', 'sass', 'assets'], function() {
	browserSync.init({
		server: "./app",
		open: false,
		cors:true,
	ghostMode: {
		clicks:true,
		forms: true,
		scroll: false
	}

	});

		gulp.watch("src/sass/*.scss", ['sass']);
		gulp.watch("src/*.html", ['html', browserSync.reload]);
		gulp.watch("src/js/*.js", ['js', browserSync.reload]);
		gulp.watch("src/assets/**/*", ['assets', browserSync.reload]);


});

gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('html', function(){
	return gulp.src('src/*.html')
		.pipe(gulp.dest('app/'));
});

gulp.task('js', function(){
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('app/js/'));
});

gulp.task('assets', function(){
	return gulp.src('src/assets/**/*')
		.pipe(gulp.dest('app/assets/'));
});

gulp.task('default', ['serve']);
