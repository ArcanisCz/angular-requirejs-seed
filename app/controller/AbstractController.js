define([
    "Factory",
    "i18n!nls/texts"
], function (factory, texts) {
    return factory.controller('AbstractController', ['$scope', function ($scope) {
        $scope.texts = texts;

        $scope.parentAaa = function () {
            console.log("parentAaa");
        }
    }]);
});