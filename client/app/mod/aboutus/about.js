define(function (require, exports, module) {

    var app = require('app');
    app.register.controller('aboutusCtrl', ['$scope', '$routeParams', '$location', '$http',
        function ($scope, $routeParams, $location, $http) {
            G.isActive = 'about';
            G.site.catname = '关于我们';
        }]
    );
});