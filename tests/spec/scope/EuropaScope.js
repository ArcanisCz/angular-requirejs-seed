define([
    "app/scope/EuropaScope"
], function (EuropaScope) {
    return ["A EuropeScope", function () {
        var scope;
        var plainScope;

        beforeEach(function (done) {
            angular.mock.inject(function ($rootScope) {
                scope = $rootScope.$new();
                EuropaScope(scope);
                EuropaScope(plainScope);
                done();
            });
        });

        it("should be initialized", function () {
            expect(plainScope.save).toBeDefined();
            expect(plainScope.save.date).toEqual("");
            expect(plainScope.save.player).toEqual("");
            expect(plainScope.save.countries).toEqual({});
            expect(plainScope.save.load).toBeDefined();
        });


        it("should not add properties other than 'save'", function () {
            delete plainScope.save;
            expect(plainScope).toEqual({});
        });


        it("should load data", function (done) {
            scope.save.load(function () {
                expect(scope.save.date).toEqual("1444.9.1");
                expect(scope.save.player).toEqual("GBR");
                expect(scope.save.countries).toEqual({});
                done();
            });
        });
    }]
});



