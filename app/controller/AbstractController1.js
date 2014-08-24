define([
    "Factory"
], function (factory) {
    return factory.controller('AbstractController1', ['$scope', function ($scope) {
        $scope.parentAaa = function () {
            console.log("inherited scope method");
        }
    }]);
});