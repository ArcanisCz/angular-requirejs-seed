define([
    "core/service/CacheService"
], function (CacheService) {

    var service;

    beforeEach(function(){
        service = new CacheService();
    });

    return [ "A CacheService", function () {
        xit("has API", function(){
            expect(service.get).toBeDefined();
            expect(service.remove).toBeDefined();
        });

        xit("will call value function if key requested first time");
        xit("will use previously stored value when requesting saved key");
        xit("will not call value function when retrieving existing value from cache");
    }]
});



