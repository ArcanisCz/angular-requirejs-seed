define([
    "angular",
    "text!./CountryFlagComponent.html",
    "less!./CountryFlagComponent.less"
], function (angular, template) {
    return angular.module('CountryFlagComponent', []).directive("countryFlag", [function () {
        return {
            restrict: "E",
            template: template,
            scope: {
                code: "="
            }
        }
    }]);
});