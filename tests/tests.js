define([], function () {
    return [
        includeTest('test!spec/scope/EuropaScope', ["app/service/EuropaSaveService"]),
        includeTest('test!spec/service/EuropaSaveService', ["$http"])
    ];

    function includeTest(test, mocks) {
        return testRequire.bind(this, [test], mocks || []);
    }
});