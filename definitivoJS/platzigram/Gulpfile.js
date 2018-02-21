var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

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
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles', 'assets']);


gulp.task('scripts', function() {
  browserify('./src/index.js')
  .transform(babel, {presets: ['env']})
  .bundle()
  .pipe(souce('index.js'))
});