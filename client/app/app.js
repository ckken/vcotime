define(function (require, exports, module) {
    require("angular");
    require("ngRoute");
    require("ngSea");

    var app = angular.module('app', ['angular-sea', 'ngRoute']);
    app.config(['$routeProvider', 'seaProvider','$locationProvider', function ($routeProvider, seaProvider,$locationProvider) {
            seaProvider.init('$routeChangeStart');
            app.register = seaProvider.register;
            $locationProvider.html5Mode(true).hashPrefix('!');
            $routeProvider
                .when('/aboutus', {
                    controller: 'aboutusCtrl',
                    controllerUrl: 'mod/aboutus/about.js',
                    templateUrl: 'app/mod/aboutus/about.html'
                })

                .when('/', {
                    controller: 'homeCtrl',
                    controllerUrl: 'mod/home/home.js',
                    templateUrl: 'app/mod/home/home.html'
                })

                .otherwise({
                    redirectTo: '/'
                });
        }
        ]).run(["$rootScope", "$location", function (s, l) {


            s.global = {
                "site": {
                    "title": '维酷移动商务平台',
                    "catname": ''
                }
            };
            s.global.isActive = 'home';
            G = s.global;
        }]);

    angular.bootstrap(document, ['app']);

    module.exports = app;
});