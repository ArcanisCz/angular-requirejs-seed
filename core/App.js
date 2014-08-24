define([
    'angular',
    "app/Includes"
], function (angular, Includes) {
    var app = angular.module('euiv', [
        "ngRoute",
        'route-segment',
        'view-segment'
    ]);
    for (var i in Includes) {
        app.requires.push(Includes[i]);
    }
    return app;
});