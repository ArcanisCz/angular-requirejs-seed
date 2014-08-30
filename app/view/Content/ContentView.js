define([
    "text!./ContentView.html",
    "less!./ContentView.less",
    "directive!app/component/countries/CountryFlag"
], function (template) {
    return {
        default: true,
        template: template
    }
});