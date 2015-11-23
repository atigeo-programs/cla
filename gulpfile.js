var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('assets/js/**/*')
});

gulp.task('html', function() {
  gulp.src('assets/views/*.html')
});

gulp.task('css', function() {
  gulp.src('assets/css/**/*')
});

gulp.task('watch', function() {
  gulp.watch('assets/js/**/*', ['js']);
  gulp.watch('assets/css/**/*', ['css']);
  gulp.watch(['assets/views/*.html',
    'assets/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
