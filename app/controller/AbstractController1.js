define([
    "Factory"
], function (factory) {
    return factory.controller('AbstractController1', ['$scope', function ($scope) {
        $scope.parentAaa1 = function () {
            console.log("parentAaa1");
        }
    }]);
});