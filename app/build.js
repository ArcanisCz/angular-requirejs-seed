({
    appDir: './app',
    dir: '../app-build',
    baseUrl: "./",
    fileExclusionRegExp: /(^example)|(.git)|node_modules$/,
    modules: [
        {
            name: 'main.min',
            create: true,
            include: ['main']
        }
    ],
    optimize: "uglify",
    paths: {
        app: '../',
        nls: "../../nls",
        App: "../../core/App",
        Factory: "../../core/Factory",

        //libs
        main: "../../core/main",
        text: "../../lib/require/text",
        jquery: "../../lib/jquery/jquery-2.1.1",
        i18n: "../../lib/require/i18n",
        angular: "../../lib/angular/angular",
        angularRoute: '../../lib/angular/angular-route',
        angularSegment: '../../lib/angular/angular-route-segment',
        angularView: '../../lib/angular/angular-view-segment',
        less: "../../lib/require-less/less",
        "less-builder": "../../lib/require-less/less-builder",
        async: "../../lib/async/async",
        normalize: "../../lib/require-less/normalize",
        uiBootstrap: "../../lib/ui-bootstrap/ui-bootstrap-tpls-0.11.0"
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularSegment': ['angular'],
        'angularView': ['angular'],
        'uiBootstrap': ["angular"]
    }
})