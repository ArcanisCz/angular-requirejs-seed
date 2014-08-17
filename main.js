require([
    "angular",
    "app/App",
    "app/Routes"
], function (angular, App, Routes) {
    angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        angular.bootstrap(document, [App.name]);
    });
});