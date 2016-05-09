var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browser-sync', ['sass'], function() {
  browserSync({
    server: {
      baseDir: '..'
    }
  });
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
    .pipe(sass()).on('error', handleError)
    .pipe(prefix())
    .pipe(gulp.dest('../css'))
    .pipe(browserSync.reload({
      stream: true
    }));;
});

gulp.task('watch', function() {
  gulp.watch(['styles/*.scss'], ['sass']);
});

gulp.task('default', ['browser-sync', 'watch']);
