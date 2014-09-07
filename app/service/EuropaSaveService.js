define([
    "async",
    "service!$http"
], function (async, $http) {
    return  function () {
        function loadFromHttp(saveLocation, done) {
            $http({
                method: "GET",
                url: "./static/dummy.json",
                data: "JSON"
            })
                .success(done)
                .error(done);
        }

        function reduceCountries(memo, code, callback) {
            if (code != "---" && !code.match(/C[0-9]{2}/) && !code.match(/O[0-9]{2}/)) {
                memo[code] = {
                    code: code
                }
            }
            callback(null, memo);
        };

        function load(url, done) {
            loadFromHttp(url, function (data) {
                var ret = {};
                ret.date = data.date;
                ret.player = data.player;
                async.reduce(Object.keys(data.countries), {}, reduceCountries, function (err, result) {
                    ret.countries = result;
                    done(ret);
                });
            });
        }


        return {
            load: load
        };
    }
});
