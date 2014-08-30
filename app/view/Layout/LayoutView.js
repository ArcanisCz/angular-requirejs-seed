define([
    "controller!app/controller/MainController",
    "text!./LayoutView.html",
    "less!./LayoutView.less"
], function (MainController, template) {
    return {
        template: template,
        controller: MainController
    }
});