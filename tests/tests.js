define([], function () {
    return [
        testRequire.bind(this, ['test/EuropaScope'], ["app/service/EuropaSaveService"])
    ];
});