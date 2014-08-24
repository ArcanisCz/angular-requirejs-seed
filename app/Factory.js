define([
    'angular',
    "app/App"
], function (angular, app) {

    function createController(name, def) {
        var module = angular.module(name, []).controller(name, def);
        app.requires.push(module.name);
        return module;
    }

    function createDirective(name, def) {
        var module = angular.module(name, []).directive(name, def);
        app.requires.push(module.name);
        return module;
    }

    function createService(name, def) {
        app.factory(name, def);
    }

    return {
        controller: createController,
        directive: createDirective,
        service: createService
    };
});