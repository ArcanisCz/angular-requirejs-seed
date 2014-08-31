This is a seed project for angularJS and requireJS integration. Main goals this tries to solve:

* Have angular
* Have project structured nicely for development with team (Support good habits and patterns)
* Have tool for production code compile only with really used dependencies

Last two points are reason, why i want to use requireJS in spite of many claims that its not good idea.

Integration
============
For integrating angular's DI and require's dependeny system, i chose different approach than ones, i have seen on web. I felt more like i want this two systems to cooperate than one abusing second.

In result, i wrote simple requireJS loader plugins to coopeare with DI of angularJS. now, only thing you need to do in case of for example controller, is:
```javascript
//LayoutController.js 
define([
  //deps
], function () {
    return ['$scope', function ($scope) {
        $scope = //whatever;
    }];
});

//usage in other file
define([
    "controller!./LayoutController",
], function (Controller) {
    //do stuff
});
```
This example registers controller named LayoutController in application module with definition from controller file, then retturn controller name.

Structure
============

This section contains project structure and notable features

## Writing Controller
My vision of good controller is based around having controller definition as clean as possible. Important thing is to have controller composed from (reusable) parts. Normally, funcionality is done in services, which is good, but i want to encapsulate $scope structure too. which leads to example with controller and nls funcionality in it.

```javascript
//controller.js
define([
    "./NlsScope",
], function (NlsScope) {
    return ['$scope', "$routeSegment", function ($scope, $routeSegment) {
        NlsScope($scope);

    }];
});

//NlsScope.js
define([
    "service!core/service/NlsService"
], function (NlsService) {
    return function ($scope) {
        $scope.msg = NlsService.getMessage;
        $scope.msgNamespace = "";
        $scope.setMsgNS = NlsService.setNamespace.bind(null, $scope, "msgNamespace");
        $scope.msgNS = NlsService.getMessageNS.bind(null, $scope, "msgNamespace");
    }
});
```
Objects called "scopes" are added to encapsulate $scope logic and included via define. Then, this parts of controller can have its own dependecies and encapsulate some $scope logic. We aditionally used next feature, which is service DI integration.

## Services
In controller example above, we used angular service as requireJS dependency. We can use "service!" plugin in same way, DI is used in angular. Either way, we demand our custom service from file with service factory function, or we inject some core service like $http.
```javascript
define([
    "service!core/service/NlsService",
    "service!$http",
], function (NlsService, $http) {
    return function ($scope, $http) {
      //do stuff
    }
});
```

## Layouts and views
For layout and views, angular-route-segment (http://angular-route-segment.com/) is used. This can do things like standard layout composition and routing. More nice than angular's ng-route....
```javascript
define([
    "./view/Layout/LayoutView",
    "./view/Home/HomeView",
    "./view/Detail/DetailView"
], function (LayoutView, HomeView,DetailView) {
    return function (route, segment) {
        segment
            .when('/', 's1')
            .when('/detail', 's1.detail')
            .segment('s1', LayoutView)
            .within()
                .segment("home", HomeView)
                .segment("detail", DetailView)
            .up();
        route.otherwise({redirectTo: '/'});
    }
});
```
Basically, we want only to define structure, include our views, and then define things and dependencies in separate view files. There, we define template, controller and possible some styles, directives etc.
```javascript
define([
    "controller!app/controller/LayoutController",
    "text!./LayoutView.html",
    "less!./LayoutView.less"
], function (Controller, template) {
    return {
        template: template,
        controller: Controller
    }
});
```

## Less integration 
Another great feature is integration of Less via require-less project (https://github.com/guybedford/require-less) and loader plugin "less!". Less files are then compiled and added to file as css in production mode.

## Compiling
Compiling is done by standard command "r.js -o app/build.js", which includes all javascript, html and css in one file.

## Directives
TODO (approach to use is under research)

## Filters
TODO (approach to use is under research)

## Testing
TODO (approach to use is under research)
