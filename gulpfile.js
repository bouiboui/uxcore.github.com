var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var LessPluginInlineUrls = require('less-plugin-inline-urls');
var autoprefix = new LessPluginAutoPrefix({
	browsers: ['last 2 versions', 'not ie < 8']
});
var inject = require('gulp-inject-string');

gulp.task('deploy', function() {
  return gulp.src('./_site/**/*')
    .pipe(ghPages({
        branch: 'master'
    }));
});

gulp.task('less_index', function(){
    return gulp.src(['./style/index.less'])
        .pipe(less({
            plugins: [autoprefix, LessPluginInlineUrls]
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./theme/static/style/'));
});

var fs = require('fs');
var themeLessFileContent = fs.readFileSync('./style/theme.less', 'utf-8');

gulp.task('less', ['less_index'], function(){
    return gulp.src(['./style/kuma/src/kuma.less', './style/kuma/src/theme/*.less'])
		.pipe(inject.append('\n' + themeLessFileContent))
        .pipe(less({
            plugins: [autoprefix, LessPluginInlineUrls]
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./theme/static/style/'));
});

gulp.task('watch', ['less'], function(){
    watch('./style/index.less', batch(function(e, done){
        gulp.start('less', done);
    }));
});
