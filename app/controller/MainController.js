define([
    "Factory",
    "app/controller/AbstractController",
    "app/controller/AbstractController1",
    "app/service/EuropaSaveService"
], function (factory, AbstractController, AbstractController1, EuropaSaveService) {
    return factory.controller('MainController', ['$scope', "$http", EuropaSaveService, function ($scope, $http, $europaSave) {
        factory.inheritController(AbstractController, $scope);
        factory.inheritController(AbstractController1, $scope);


        $scope.save = {
            date: "",
            player: "",
            countries: {}
        };

        $europaSave.load("TODO", function (data) {
            console.log(data);
            $scope.save.date = data.date;
            $scope.save.player = data.player;
            $scope.save.countries = data.countries;
        });

        $scope.parentAaa();
        $scope.parentAaa1();
    }]);
});