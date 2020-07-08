let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    sass = require('gulp-sass'),
    minify = require('gulp-clean-css'),
    hash = require('gulp-hash'),
    concat = require('gulp-concat-css')

let styles = ['styles/styles.css'],
    destination = 'build';

let test = ['test.js'],
    destination1 = 'build/testDest';

gulp.task('test', function () {
    return gulp.src(test)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination1));
})

gulp.task('clean', function () {
    return del(['build/*'])
});

gulp.task('styles', function () {
    return gulp.src(styles)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination));
});

gulp.task('sass-debugger', function () {
    return gulp.src("styles/stylesheet1.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destination));
});

gulp.task('sass-release', function () {
    return gulp.src("styles/*.scss")
        .pipe(sass())
        .pipe(concat("styles.min.css"))
        .pipe(minify())
        .pipe(hash())
        .pipe(gulp.dest(destination));
});


gulp.task('watch', gulp.series('sass-debugger', 'test', function () {
    return gulp.watch(['styles/**/*.scss'],
           gulp.series('styles'));
}));

gulp.task('build', gulp.series('test', 'styles'));

