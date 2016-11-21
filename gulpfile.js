const gulp 						= require('gulp');
const clean 					= require('gulp-clean');
const mocha 					= require('gulp-mocha');
const uglify 					= require('gulp-uglify');
const istanbul 					= require('gulp-istanbul');
const webpack					= require('webpack-stream');
const ts 							= require('gulp-typescript');
const rename 					= require("gulp-rename");
const concat 					= require('gulp-concat');
const browserSync 				= require('browser-sync').create();


//----------------------------
// PATHS
//----------------------------
const paths = {
	sources: ['src/**/*.js', 'src/**/*.jsx', 'index.html', 'webpack.config.js'],
	tests: ['test/**/*.js'],
	clean: ['public/*', 'coverage'],
	public: ['index.html', 'public/bundle.js'],
	typescripts: ['src/visualization/barneshut/*.ts'],
	styles: ['src/styles/**/*.styl']
};

//----------------------------
// CONFIG
//----------------------------
var tsProject = ts.createProject({
	target: "ES5",
	module: "commonjs",
	declaration: false,
	noResolve: false,
	removeComments: true
});


gulp.task('clean', function() {
	return gulp.src(paths.clean)
		.pipe(clean())
});

gulp.task('typescript', ['clean'], function(){
	return gulp.src(paths.typescripts, {base: "."})
		.pipe(tsProject())
		.pipe(gulp.dest('.'));
});

gulp.task('build', ['typescript'], function() {

	return gulp.src('') // specified in webpack config
		.pipe(webpack( require('./webpack.config.js' )))
		.pipe(gulp.dest('public/'));
});


gulp.task('uglify', ['build'], function() {
	return gulp.src('public/bundle.js')
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest('public/'));
});

gulp.task('test', ['build'], function () { //TODO: actually write some tests
	return gulp.src(paths.tests, {read: false})
						 .pipe(mocha({reporter: 'nyan',
						 							timeout: 60000}));
});

//----------------------------
// BROWSER SYNC
//----------------------------
gulp.task('webpackBrowserSync', ['uglify'], function() {
	browserSync.init({
		files: ['public/bundle.js', 'index.html'],
		server: {
			baseDir: './'
		},
		open: true,
		ghostMode: false
	});

	gulp.watch(paths.sources, ['uglify']);
	gulp.watch(paths.styles, ['stylus']);
	gulp.watch(paths.public).on('change', browserSync.reload);
});


//----------------------------
// MAIN TASKS
//----------------------------
gulp.task('default', ['webpackBrowserSync']);
