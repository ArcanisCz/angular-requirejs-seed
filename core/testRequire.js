require([
    "core/config"
], function (config) {
    (function (window) {
        var contextId = 0;
        window.testRequire = function () {
            var newConfig = angular.extend({}, config);
            newConfig = angular.extend(newConfig, {
                baseUrl: './',
                urlArgs: 'now=' + Date.now(),
                context: 'test-context' + contextId++
            })
            var context = requirejs.config(newConfig);
            return context.apply(this, arguments);
        };
    }(typeof global === 'undefined' ? this : global));
});
