requirejs.config({
    baseUrl: './',
    paths: {
        app: './app',
        nls: "./nls",

        //libs
        text: "./lib/require/text",
        jquery: "./lib/jquery/jquery-2.1.1",
        i18n: "./lib/require/i18n",
        less: "./lib/less/less-1.7.4",
        angular: "./lib/angular/angular",
        angularRoute: './lib/angular/angular-route',
        angularSegment: './lib/angular/angular-route-segment',
        angularView: './lib/angular/angular-view-segment',
        async: "./lib/async/async",
        less: "./lib/require-less/less",
        lessc: "./lib/require-less/lessc",
        "less-builder": "./lib/require-less/less-builder",
        normalize: "./lib/require-less/normalize"
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularSegment': ['angular'],
        'angularView': ['angular']
    },
    less: {
        rootpath: "./",
        env: "development"
    }
});