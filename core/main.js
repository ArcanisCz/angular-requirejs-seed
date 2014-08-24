require([
    "angular",
    "App",
    "app/Layout",
    "angularRoute",
    "angularSegment",
    "angularView"
], function (angular, App, AppLayout) {
    AppLayout.init(App);
    angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        angular.bootstrap(document, [App.name]);
    });
});