var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var server = require( 'gulp-develop-server' );

// run server 
gulp.task( 'server:start', function() {
    server.listen( { path: './app.js' } );
});
 
// restart server if app.js changed 
gulp.task( 'server:restart', function() {
    gulp.watch( [ './app.js' ], server.restart );
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
gulp.task('default', ['lint', 'compress','server:start', 'watch']);