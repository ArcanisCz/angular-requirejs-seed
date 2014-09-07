define([
    "app/service/EuropaSaveService"
], function (EuropaSaveService) {
    return [ "A EuropaSaveService", function () {

        var service;

        beforeEach(function(){
           service = new EuropaSaveService();
        });

        it("should have 'load' method", function () {
            expect(service.load).toBeDefined();
        });

        it("should be defined", function (done) {
            service.load("aa", function (data) {
                expect(data).toBeDefined();
                done();
            });
        });

//
//
//        it("should load data", function (done) {
//            scope.load(function () {
//                expect(scope.save.date).toEqual("1444.9.1");
//                expect(scope.save.player).toEqual("GBR");
//                expect(scope.save.countries).toEqual({});
//                done();
//            });
//        });
    }]
});



