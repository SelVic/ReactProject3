let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    del = require('del'),
    path = require('path');

let styles = ['app/css/styles.scss'],
    destination = 'app/build';

gulp.task('delete', function () {
    return del(['app/build/*.css', 'app/build/*.css.map'])
});

gulp.task('clean', function () {
    return del(['app/build/*'])
});

gulp.task('styles', function () {
    return gulp.src(styles)
        .pipe(sourcemaps.init())
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination));
});

gulp.task('watch', gulp.series('delete', 'styles', function () {
    return gulp.watch(['app/css/**/*.scss'], gulp.series('styles'));
}));

gulp.task('build', gulp.series('delete', 'styles'));

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return {file: url};
}