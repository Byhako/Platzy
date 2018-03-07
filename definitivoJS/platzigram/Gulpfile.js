var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('styles', ()=>{
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
});

gulp.task('assets', ()=>{
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})

gulp.task('scripts', ()=>{
  browserify('./src/index.js')
    .transform(babel, {presets: ['env']})
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['styles', 'assets', 'scripts']);
