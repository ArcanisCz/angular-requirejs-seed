define([
    "Factory"
], function (factory) {
    return  factory.service("europaSave", ["$http", function ($http) {
        function load(saveLocation, done) {
            $http({
                method: "GET",
                url: "./static/dummy.json",
                data: "JSON"
            })
                .success(done)
                .error(done);
        }

        return {
            load: load
        };
    }])
});