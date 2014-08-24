define([
    'angular',
    "core/App"
], function (angular, app) {

    function createController(name, def) {
        app.controller(name, def);
        return name;
    }

    function createDirective(name, def) {
        app.directive(name, def);
        return name;
    }

    function createService(name, def) {
        app.factory(name, def);
        return name;
    }

    return {
        controller: createController,
        directive: createDirective,
        service: createService
    };
});