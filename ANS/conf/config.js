var config = module.exports = {};

config.init = function (path) {
    var date = new Date();
    var root = path;
    var server = root + '/server';
    var conf = {
        debug: false,
        port: 100,
        email: 'ckken@qq.com',
        site_name: 'NodeJs开发社区',
        site_desc: '研究nodejs方向',
        session_secret: 'KenzRSecret',
        secret: 'KensSecret',
        mongodb: 'mongodb://vco:vco666666@112.124.64.160:27017/vco',
        maxAge: 259200000,
        version: '0.0.1',
        //path
        root: root,
        client: root + '/client',
        lib: root + '/ANS/lib',
        conf: root + '/ANS/conf',
        model: server + '/model',


    }

    return conf;
}
