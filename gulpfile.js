var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
  // place code for your default task here
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src('public/js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('compress', function() {
  return gulp.src('public/js/*.js')
    .pipe(uglify({
      mangle: true
    }))
    .pipe(gulp.dest('public/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/js/*.js', ['lint', 'compress']);
});

// Default Task
gulp.task('default', ['lint', 'compress', 'watch']);