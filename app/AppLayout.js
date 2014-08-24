define([
    "./controller/MainController",
    "./view/LayoutView",
    "./view/ContentView"
], function (MainController, LayoutView, ContentView) {

    function config(app) {
        app.config(['$routeProvider', "$routeSegmentProvider", function ($routeProvider, $routeSegmentProvider) {
            $routeSegmentProvider
                .when('/', 's1')
                .segment('s1', {
                    template: LayoutView.template,
                    controller: MainController.name
                })
                .within()
                .segment("home", {
                    default: true,
                    template: ContentView.template
                })
                .up();
            $routeProvider.otherwise({redirectTo: '/'});
        }])
    }

    return {
        init: config
    };
});