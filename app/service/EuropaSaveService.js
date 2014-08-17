define([], function () {
    return  ["$http", function ($http) {
        function load(saveLocation, done) {
            $http({
                method: "GET",
                url: "./dummy.json",
                data: "JSON"
            })
                .success(done)
                .error(done);
        }

        return {
            load: load
        };
    }]
});