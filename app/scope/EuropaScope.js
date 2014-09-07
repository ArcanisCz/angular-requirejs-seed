define([
    "service!app/service/EuropaSaveService"
], function (EuropaSaveService) {
    return function ($scope) {
        $scope.save = {
            date: "",
            player: "",
            countries: {}
        };

        $scope.save.load = function (done) {
            EuropaSaveService.load("TODO", function (data) {
                console.log(data);
                $scope.save.date = data.date;
                $scope.save.player = data.player;
                $scope.save.countries = data.countries;
                $scope.$apply();
                if(done){
                    done();
                }
            });
        }
    }
});