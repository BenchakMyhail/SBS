// 'use strict';

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();

// gulp.task('sass', function () {
//   return gulp.src('./dev/scss/main.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./src/assets/css'))
//     .pipe(browserSync.stream())
// });

// gulp.task('sass:watch', function() {
//   gulp.watch('./scss/**/*.scss', gulp.parallel('sass'));
// });

// gulp.task('default', gulp.series('sass', 'sass:watch'));

//===============================================
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./dev/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./dev/scss/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;