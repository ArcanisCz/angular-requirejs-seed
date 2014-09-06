define([
    "core/MainModule",
    "angularMocks",
    "app/scope/EuropaScope"
], function (MainModule, mocks, EuropaScope) {
    describe("A EuropaSave", function () {

        var scope = {};

        beforeEach(function (done) {
            mocks.module('angularSeed');
            mocks.inject(function ($rootScope) {
                scope = $rootScope.$new();
                EuropaScope(scope);
                done();
            });
        });

        it("should be initialized", function () {
            expect(scope.save).toBeDefined();
            expect(scope.save.date).toEqual("");
            expect(scope.save.player).toEqual("");
            expect(scope.save.countries).toEqual({});
        });


        it("should load data", function (done) {
            scope.load(function () {
                expect(scope.save.date).toEqual("1444.9.1");
                expect(scope.save.player).toEqual("GBR");
                expect(scope.save.countries).toEqual({});
                done();
            });
        });
    });
});



