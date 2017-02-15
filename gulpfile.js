'use strict';

const gulp    = require('gulp');
const jshint  = require('gulp-jshint');
const jasmine = require('gulp-jasmine');

const paths = {
    scripts: ['./**/*.js', '!./node_modules/**']
};

gulp.task('default', () => {

});

gulp.task('jshint', () => {
    return gulp.src(paths.scripts)
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('jasmine', () => {
    gulp.src('spec/test.js')
        .pipe(jasmine());
});

gulp.task('watch', () => {
    gulp.watch(paths.scripts, ['jshint']);
});
