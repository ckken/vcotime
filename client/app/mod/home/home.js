define(function (require, exports, module) {

    var app = require('app');
    app.register.controller('homeCtrl', ['$scope', '$routeParams', '$location', '$http',
        function ($scope, $routeParams, $location, $http) {
            G.isActive = 'home';
            G.site.catname = '维酷移动';
        }]
    );
});