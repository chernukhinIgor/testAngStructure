'use strict';

var gulp            = require('gulp'),
    run             = require('run-sequence'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    ts              = require('gulp-typescript'),
    imagemin        = require('gulp-imagemin'),
    browserSync     = require('browser-sync').create(),
    del             = require('del'),
    modRewrite      = require('connect-modrewrite'),
    csscomb         = require('gulp-csscomb'),
    concat          = require('gulp-concat');

var paths = {
    views: 'app/*.html',
    styles: 'app/sass/**/*.scss',
    templates: 'app/templates/*.html',
    images: 'app/img/**/*',
    pictures: 'app/pic/**/*',
    php: 'app/php/**/*',
    rxjs: 'node_modules/rxjs/**/*.js',
    kendo: 'node_modules/@progress/**/*.js',
    kendocss: 'node_modules/@progress/kendo-theme-default/scss/**/*.scss',
    angular: [
        {
            from: 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            to: 'dist/app/js/@angular/platform-browser-dynamic/bundles/'
        },
        {
            from: 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            to: 'dist/app/js/@angular/compiler/bundles/'
        },
        {
            from: 'node_modules/@angular/core/bundles/core.umd.js',
            to: 'dist/app/js/@angular/core/bundles/'
        },
        {
            from: 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            to: 'dist/app/js/@angular/platform-browser/bundles/'
        },
        {
            from: 'node_modules/@angular/common/bundles/common.umd.js',
            to: 'dist/app/js/@angular/common/bundles/'
        },
        {
            from: 'node_modules/@angular/forms/bundles/forms.umd.js',
            to: 'dist/app/js/@angular/forms/bundles/'
        },
        {
            from: 'node_modules/@angular/router/bundles/router.umd.js',
            to: 'dist/app/js/@angular/router/bundles/'
        },
        {
            from: 'node_modules/@angular/http/bundles/http.umd.js',
            to: 'dist/app/js/@angular/http/bundles/'
        }
    ],
    jsVendors: [
        'app/js/vendors/**/*.*',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.js',
        'system.config.js'
    ],
    cssVendors: [
        'node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css'
    ],
    ts: 'app/ts/**/*.ts',
    fonts: 'app/fonts/**/*'
};

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function (cb) {
    return del('dist', cb);
});

gulp.task('serve', ['watch'], function() {
    browserSync.init({
        port: 3010,
        server: {
            baseDir: 'dist',

            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('views', function () {
    return gulp.src(paths.views, {
        base: 'app'
    })
        .pipe(gulp.dest('dist'));
});

gulp.task('templates', function () {
    return gulp.src(paths.templates, {
        base: 'app'
    })
        .pipe(gulp.dest('dist/app'));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/css'))
        .pipe(browserSync.stream());
});

gulp.task('kendocss', function () {
    return gulp.src('node_modules/@progress/kendo-theme-default/scss/all.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
        .pipe(csscomb())
        .pipe(concat('all.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/app/css'))
        .pipe(browserSync.stream());
});

gulp.task('angular', function () {
    for( var i = 0; i < paths.angular.length; i++ ){
        gulp.src( paths.angular[ i ].from)
            .pipe( gulp.dest( paths.angular[ i ].to ) );
    }
});

gulp.task('jsVendors', function () {
    for( var i = 0; i < paths.jsVendors.length; i++ ){
        gulp.src( paths.jsVendors[ i ])
            .pipe( gulp.dest('dist/app/js/vendors') );
    }
});

gulp.task('cssVendors', function () {
    for( var i = 0; i < paths.cssVendors.length; i++ ){
        gulp.src( paths.cssVendors[ i ])
            .pipe( gulp.dest('dist/app/css/vendors') );
    }
});

gulp.task('ts', function() {
    var tsResult = gulp.src( paths.ts )
        .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest('dist/app/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.ts,        [ 'ts',         browserSync.reload ]);
    gulp.watch(paths.templates, [ 'templates',  browserSync.reload ]);
    gulp.watch(paths.styles,    [ 'styles',     browserSync.reload ]);
    gulp.watch(paths.views,     [ 'views',      browserSync.reload ]);
    gulp.watch(paths.images,     [ 'images',      browserSync.reload ]);
    gulp.watch(paths.pictures,     [ 'pictures',      browserSync.reload ]);
    gulp.watch(paths.php,     [ 'php',      browserSync.reload ]);
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/app/img'));
});

gulp.task('pictures', function() {
    return gulp.src(paths.pictures)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/app/pic'));
});
gulp.task('rxjs', function() {
    return gulp.src(paths.rxjs)
        .pipe(gulp.dest('dist/app/js/rxjs'));
});

gulp.task('kendo', function() {
    return gulp.src(paths.kendo)
        .pipe(gulp.dest('dist/app/js/kendo'));
});

gulp.task('php', function() {
    return gulp.src(paths.php)
        .pipe(gulp.dest('dist/app/php'));
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts, {
        base: 'app/fonts'
    }).pipe(gulp.dest('dist/app/fonts'));
});

function serve() {
    return run( 'styles', 'kendocss',  'templates', 'ts','rxjs', 'kendo', 'angular', 'cssVendors', 'jsVendors', 'images', 'pictures', 'views', 'php', 'fonts', 'serve');
}

gulp.task('default', ['clean'], serve());