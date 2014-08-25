define([
    "Factory",
    "core/controller/BaseController",
    "app/controller/AbstractController1",
    "app/service/EuropaSaveService"
], function (factory, BaseController, AbstractController1, EuropaSaveService) {
    return factory.controller('MainController', ['$scope', "$http", EuropaSaveService, function ($scope, $http, $europaSave) {
        factory.inheritScope(BaseController, $scope);
        factory.inheritScope(AbstractController1, $scope);

        $scope.setMsgNS("view.MainController");
        $scope.parentAaa();
        initSaveModel($scope, $europaSave);

    }]);

    function initSaveModel($scope, $europaSave) {
        $scope.save = {
            date: "",
            player: "",
            countries: {}
        };

//        $europaSave.load("TODO", function (data) {
//            console.log(data);
//            $scope.save.date = data.date;
//            $scope.save.player = data.player;
//            $scope.save.countries = data.countries;
//        });
    }
});