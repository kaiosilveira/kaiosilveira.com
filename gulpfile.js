let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');
let minify = require('gulp-minify');

gulp.task('minify-css', () => {
  return gulp.src('./public/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify-html', function() {
  return gulp.src('public/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
  gulp.src('./public/js/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        ignoreFiles: ['*.min.js']
    }))
    .pipe(gulp.dest('dist/js'))
});
