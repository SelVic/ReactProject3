let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

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


gulp.task('build', gulp.series('test', 'styles'));

