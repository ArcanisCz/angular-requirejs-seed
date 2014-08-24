define([
    'angular',
    "uiBootstrap"
], function (angular, uiBootstrap) {
    var app = angular.module('euiv', [
        "ngRoute",
        'route-segment',
        'view-segment',
        "ui.bootstrap"
    ]);
    return app;
});