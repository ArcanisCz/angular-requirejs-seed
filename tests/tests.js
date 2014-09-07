define([], function () {
    return [
        includeTest('test!spec/app/scope/EuropaScope', ["app/service/EuropaSaveService"]),
        includeTest('test!spec/app/service/EuropaSaveService', ["$http"]),
        includeTest('test!spec/core/scope/NlsScope', ["core/service/NlsService"]),
        includeTest('test!spec/core/service/NlsService', ["$http"])
    ];

    function includeTest(test, mocks) {
        return testRequire.bind(this, [test], mocks || []);
    }
});