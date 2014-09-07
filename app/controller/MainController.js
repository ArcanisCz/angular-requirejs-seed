define([
    "core/scope/NlsScope",
    "app/scope/EuropaScope"
//    "directive!app/component/countries/CountryFlag"
], function (NlsScope,EuropaScope) {
    return ['$scope', function ($scope) {
        NlsScope($scope, "view.MainController");
        EuropaScope($scope);

        document.title = $scope.msgNS("title");
        $scope.save.load();
    }];
});