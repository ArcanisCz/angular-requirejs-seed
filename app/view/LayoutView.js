define([
    "app/controller/MainController",
    "text!./LayoutView.html",
    "less!./LayoutView.less",
    "app/component/countries/CountryFlagComponent"
], function (MainController, template) {
    return {
        template: template,
        controller: MainController
    }
});