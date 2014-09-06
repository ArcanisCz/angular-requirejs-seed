define([], function () {
    return [
        testRequire.bind(this, ['test!spec/EuropaScope'], ["app/service/EuropaSaveService"]),
        testRequire.bind(this, ['test!spec/EuropaSaveService'], ["$http"])
    ];
});