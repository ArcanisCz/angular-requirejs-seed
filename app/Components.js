define([
    "angular",
    "./component/countries/CountryFlagComponent"
], function (angular, CountryFlagComponent) {
    return angular.module('Components', [
        CountryFlagComponent.name
    ]);
});