var project_path='view/',//自定义编译完成后的项目文件夹
    html_path='dist/';//自定义需要编译的html文件路径，默认会把该路径下的所有html进行编译

// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint'),
    sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var append_rev = require('gulp-rev-append'),
    rev=require("gulp-rev"),
    usemin = require('gulp-usemin'),
    runSequence = require('run-sequence'),
    clean=require('gulp-clean');
var autoprefix=require('gulp-autoprefixer');

var paths = {
    appDir: "../",
    entrySass: 'assets/sass/*.scss',
    watch: {
        sass: ['assets/**/*.scss'],
        css: ['assets/css/*.css'],
        html: ['pages/**/*.html','dist/**/*.html'],
        js: ['assets/js/**/*.js', '!assets/vendor/**/*.js']
    },
    copySrc: ['./**/*', '!./assets/**/*.scss', '!./**/package.json', '!./**/bower.json', '!./app/**/package.gzip']
};

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: paths.appDir
        }
    });
});

// 编译Sass
gulp.task('sass', function (done) {
    gulp.src(paths.entrySass)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefix({browsers: ['last 3 version']}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/css/'))
        .on('end', done);
});
gulp.task('cleanCss', function () {
    console.log("——————————————开始清空 dist/css 下的css文件");
    return gulp.src('dist/css/*.css', {read: false})
        .pipe(clean());
});
gulp.task('cleanJs', function () {
    console.log("——————————————开始清空 dist/js 下的js文件");
    return gulp.src('dist/js/*.js', {read: false})
        .pipe(clean());
});
gulp.task('release', function(callback) {
    runSequence(['cleanCss','cleanJs'],'usemin', function () {
        console.log("——————————————项目构建完成");
    });
});
gulp.task('usemin', function(callback) {
    console.log("——————————————项目正在构建并打包到"+project_path+"下");
    return gulp.src(html_path+'*/*.html')
        .pipe(usemin({
            about_css:[rev()],
            about_js:[rev(),uglify()],

            consultingIndex_css:[rev()],
            consultingIndex_js:[rev(),uglify()],

            cooperate_css:[rev()],
            cooperate_js:[rev(),uglify()],
            cooperateList_css:[rev()],
            cooperateList_js:[rev(),uglify()],

            course_css:[rev()],
            course_js:[rev(),uglify()],
            courseList_css:[rev()],
            courseList_js:[rev(),uglify()],

            dynamicList_css:[rev()],
            dynamicList_js:[rev(),uglify()],
            dynamicDetail_css:[rev()],
            dynamicDetail_js:[rev(),uglify()],

            dynamicForcusDetail_css:[rev()],
            dynamicForcusDetail_js:[rev(),uglify()],

            forget_css:[rev()],
            forget_js:[rev(),uglify()],

            index_css:[rev()],
            index_js:[rev(),uglify()],

            personalCollect_css:[rev()],
            personalConsulting_css:[rev()],
            personalCourse_css:[rev()],
            personalIndex_css:[rev()],
            personalOrder_css:[rev()],
            personalUpdate_css:[rev()],

            //个人中心一个脚本
            personal_js:[],
            personalUpdate_js:[rev(),uglify()],

            register_css:[rev()],
            register_js:[rev(),uglify()],
            shop_css:[rev()],
            shop_js:[rev(),uglify()],
            result_css:[rev()],
            result_js:[rev(),uglify()],

            evaluationList_css:[rev()],
            evaluationList_js:[rev(),uglify()],
            evaluationAnswer_css:[rev()],
            evaluationAnswer_js:[rev(),uglify()],
            evaluationAnswered_css:[rev()],
            evaluationAnswered_js:[rev(),uglify()],
            evaluationReport_css:[rev()],
            evaluationReport_js:[rev(),uglify()],
            evaluationReportList_css:[rev()],
            evaluationReportList_js:[rev(),uglify()],

            expertList_css:[rev()],
            expertList_js:[rev(),uglify()],
            expertDetail_css:[rev()],
            expertDetail_js:[rev(),uglify()],
            caseDetail_css:[rev()],
            caseDetail_js:[rev(),uglify()],

            toolsList_css:[rev()],
            toolsList_js:[rev(),uglify()],
            toolsDetail_css:[rev()],
            toolsDetail_js:[rev(),uglify()],
            toolPreview_css:[rev()],
            toolPreview_js:[rev(),uglify()],
           

            suggestion_css:[rev()],
            suggestion_js:[rev(),uglify()],

            protocol_css:[rev()],
            protocol_js:[rev(),uglify()]
        }))
        .pipe(gulp.dest(project_path));
});
gulp.task('rev_js',function () {
    console.log("——————————————开始给js添加版本号");
    var s=gulp.src('assets/dist_js/*.js')
        .pipe(rev())
        .pipe(uglify());
    gulp.src('assets/dist_js/*.js').pipe(clean());
    s.pipe(gulp.dest('assets/dist_js'));
    return s;
});
gulp.task('rev_css',function () {
    console.log("——————————————开始给css添加版本号");
    var s=gulp.src('assets/dist_css/*.css')
        .pipe(rev());
    gulp.src('assets/dist_css/*.css').pipe(clean());
    s.pipe(gulp.dest('assets/dist_css'));
    return s;
});
gulp.task('append_rev', function () {
    return gulp.src(html_path+'*/*html')
        .pipe(append_rev())
        .pipe(gulp.dest(project_path));
});
gulp.task('watch', function () {
    gulp.watch(paths.watch.sass, ['sass']);
    // gulp.watch(paths.watch.css, ['append_rev']);
    gulp.watch(paths.watch.css, reload);

    gulp.watch(paths.watch.html, reload);
    gulp.watch(paths.watch.js, reload);

});


gulp.task('default', [ 'sass', 'browser-sync', 'watch']);

gulp.task('build', [ 'sass', 'copy']);


