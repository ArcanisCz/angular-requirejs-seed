define([
    "app/view/Layout/LayoutView",
    "app/view/Content/ContentView"
], function (LayoutView, ContentView) {
    return function (route, segment) {
        segment
            .when('/', 's1')
            .segment('s1', LayoutView)
            .within()
            .segment("home", ContentView)
            .up();
        route.otherwise({redirectTo: '/'});
    }
});

