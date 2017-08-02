/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'angular:': 'app/ts/@angular'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'app/js/@angular/core/bundles/core.umd.min.js',
            '@angular/common': 'app/js/@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': 'app/js/@angular/compiler/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'app/js/@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/animations': 'app/js/@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'app/js/@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'app/js/@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',
            '@angular/platform-browser-dynamic': 'app/js/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'app/js/@angular/http/bundles/http.umd.min.js',
            '@angular/router': 'app/js/@angular/router/bundles/router.umd.min.js',
            '@angular/forms': 'app/js/@angular/forms/bundles/forms.umd.min.js',

            '@progress/kendo-angular-buttons': 'app/js/kendo/kendo-angular-buttons/dist/cdn/js/kendo-angular-buttons.js',
            '@progress/kendo-angular-l10n': 'app/js/kendo/kendo-angular-l10n/dist/cdn/js/kendo-angular-l10n.js',
            '@progress/kendo-angular-popup': 'app/js/kendo/kendo-angular-popup/dist/cdn/js/kendo-angular-popup.js',
            '@progress/kendo-popup-common': 'app/js/kendo/kendo-popup-common/dist/cdn/js/kendo-popup-common.js',
            '@progress/kendo-angular-layout': 'app/js/kendo/kendo-angular-layout/dist/cdn/js/kendo-angular-layout.js',
            '@progress/kendo-angular-intl': 'app/js/kendo/kendo-angular-intl/dist/cdn/js/kendo-angular-intl.js',
            '@progress/kendo-angular-inputs': 'app/js/kendo/kendo-angular-inputs/dist/cdn/js/kendo-angular-inputs.js',
            '@progress/kendo-angular-popup': 'app/js/kendo/kendo-angular-popup/dist/cdn/js/kendo-angular-popup.js',
            '@progress/kendo-angular-dateinputs': 'app/js/kendo/kendo-angular-dateinputs/dist/cdn/js/kendo-angular-dateinputs.js',


            // other libraries
            'rxjs':                       'app/js/rxjs',
            'tslib': 'app/js/tslib/tslib.js',
            // 'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './js/main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }//,
            // 'angular2-in-memory-web-api': {
            //     main: './ts/index.js',
            //     defaultExtension: 'js'
            // }
        }
    });
})(this);