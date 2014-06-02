var gulp = require('gulp')
  , bower = require('gulp-bower')
  , browserify = require('gulp-browserify')
  , compass = require('gulp-compass')
  , csso = require('gulp-csso')
  , footer = require('gulp-footer')
  , plumber = require('gulp-plumber')
  , rename = require('gulp-rename')
  , uglify = require('gulp-uglify');

gulp.task('bower', function () {
  return bower()
    .pipe(gulp.dest('./client/assets/lib/'));
});

gulp.task('browserify', ['bower'], function () {
  gulp.src('./client/config/app.js')
    .pipe(plumber())
    .pipe(browserify())
    .pipe(gulp.dest('./client/assets/js/'))
    .pipe(rename('app.min.js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(footer('\n//# sourceMappingURL=app.min.js.map'))
    .pipe(gulp.dest('./client/assets/js/'));
});

gulp.task('compass', ['bower'], function () {
  gulp.src('./client/assets/scss/*.scss')
    .pipe(plumber())
    .pipe(compass({ sass: './client/assets/scss', css: './client/assets/css' }))
    .pipe(gulp.dest('./client/assets/css/'))
    .pipe(rename(function (path) { path.basename += '.min'; }))
    .pipe(csso())
    .pipe(gulp.dest('./client/assets/css/'));
});

gulp.task('watch', function () {
  gulp.watch(['./client/config/*.js', './client/app/*.js'], ['browserify']);
  gulp.watch(['./client/assets/scss/*.scss', './client/assets/scss/**/*.scss'], ['compass']);
});

gulp.task('default', ['bower', 'browserify', 'compass']);
