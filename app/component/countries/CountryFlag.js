define([
    "text!./CountryFlag.html",
    "less!./CountryFlag.less"
], function (template) {
    return function () {
        return {
            restrict: "E",
            template: template,
            scope: {
                code: "="
            }
        }
    };
});