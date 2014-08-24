define([
    'angular',
    "core/MainModule"
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

    function createInheritance(name, scope) {
        var injector = angular.injector([app.name]);
        injector.invoke(["$controller", function (controller) {
            controller(name, {$scope: scope});
        }]);
    }

    return {
        controller: createController,
        directive: createDirective,
        service: createService,
        inheritController: createInheritance
    };
});