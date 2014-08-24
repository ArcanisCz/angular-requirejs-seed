define([
    "app/Factory",
    "i18n!nls/texts",
    "async",
    "../service/EuropaSaveService"
], function (factory, texts, async) {
    return factory.controller('MainController', ['$scope', "$http", "europaSave", function ($scope, $http, europaSave) {
        $scope.save = {
            date: "",
            player: "",
            countries: {}
        };
        $scope.texts = texts;

        europaSave.load("TODO", function (data) {
            console.log(data);
            $scope.save.date = data.date;
            $scope.save.player = data.player;
            async.reduce(Object.keys(data.countries), {}, function (memo, code, callback) {
                //                console.log(code, code == "---", code.match(/C[0-9]{2}]/) != null, code.match(/O[0-9]{2}]/) != null);
                if (code != "---" && !code.match(/C[0-9]{2}/) && !code.match(/O[0-9]{2}/)) {
                    memo[code] = {
                        code: code
                    }
                }
                callback(null, memo);
            }, function (err, result) {
                $scope.save.countries = result;
            });
        });
    }]);
});