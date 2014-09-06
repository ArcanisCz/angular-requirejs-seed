define([
    "app/config"
], function (config) {
    var obj = deepExtend({
        baseUrl: './',
        paths: {
            app: './app',
            nls: "./nls",
            core: "./core",
            service: "./core/loader/service",
            controller: "./core/loader/controller",
            directive: "./core/loader/directive",

            //libs
            text: "./lib/require/text",
            i18n: "./lib/require/i18n",
            less: "./lib/less/less-1.7.4",
            angular: "./lib/angular/angular",
            angularRoute: './lib/angular/angular-route',
            angularSegment: './lib/angular/angular-route-segment',
            angularView: './lib/angular/angular-view-segment',
            angularMocks: './lib/angular/angular-mocks',
            async: "./lib/async/async",
            less: "./lib/require-less/less",
            lessc: "./lib/require-less/lessc",
            "less-builder": "./lib/require-less/less-builder",
            normalize: "./lib/require-less/normalize"
        },

        shim: {
            'angular': {
                exports: 'angular'
            },
            'angularRoute': ['angular'],
            'angularSegment': ['angular'],
            'angularView': ['angular'],
            'angularMocks':{
                deps: ['angular'],
                exports:'angular.mock'
            }
        },
        less: {
            env: "development"
        }
    }, config);

    requirejs.config(obj);
    return obj;

    //we do not want load any frameworks with extend() function here (jquery, angular, ...). So we are providing
    // some basic extend here, based on http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        for (var property in source) {
            if (source[property] && source[property].constructor &&
                source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                arguments.callee(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    };
});