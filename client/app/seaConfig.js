//全局json
var G = {};
// seajs config
seajs.config({
    base: './app/',
    alias: {
        'angular': 'lib/angular/source/angular.min',
        'ngRoute': 'lib/angular/source/angular-route.min',
        'ngSea': 'lib/angular/plugin/angular-sea.min'
    },

    map: [
        [
            '.js', '.js' + '?' + Math.random(), '.html' + '?' + Math.random()
        ]
    ],
    preload: ['angular']
    //,debug:true

});
seajs.on('error', function (module) {
    if (module.status != 5) {
        console.error('seajs error: ', module);
    }
});
seajs.use('app.js');