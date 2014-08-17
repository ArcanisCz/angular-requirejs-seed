define([
    'angular',
    "uiBootstrap",
    "./Controllers",
    "./Services",
    "./Components",
    "less!./css/bootstrap"
], function (angular, uiBootstrap, Controllers, Services, Components) {
    return angular.module('euiv', [
        "ngRoute",
        'route-segment',
        'view-segment',
        "ui.bootstrap",
        Controllers.name,
        Services.name,
        Components.name
    ]);
});