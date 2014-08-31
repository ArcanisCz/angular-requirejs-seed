define([
    "text!./ContentView.html",
    "less!./ContentView.less",
    "directive!app/component/countries/CountryFlag AS flag"
], function (template) {
    return {
        default: true,
        template: template
    }
});