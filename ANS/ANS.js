var ANS  ={
    init: function (root) {
        this.root = root;
        //C:配置
        global.C = {};
        C = require(root + "/ANS/conf/config").init(root);
        //N:odejs模块
        global.N = {};
        N.express = require('express');
        N.mongoose = require('mongoose');
        N.nodemailer = require('nodemailer');
        N.thenjs = require('thenjs');
        var libpath = root + '/ANS/lib/';
        //F:法
        global.F = {};
        F.pageNavi = require(libpath + '/pageNavi');
        F.date = require(libpath + '/date');
        F.dir = require(libpath + '/dir');
        F.email = require(libpath + '/email');
        F.encode = require(libpath + '/encode');
        F.html = require(libpath + '/html');
        F.msg = require(libpath + '/msg');
        F.upload = require(libpath + '/upload');
        //D:数据库配置
        global.D = {};
        this.express();
    },

    express:function(){
        var app = require(this.root + '/ANS/conf/express').init();
        require(this.root+'/ANS/conf/route').init(app);
        this.mongo(app);
        require('http').createServer(app).listen(C.port, function () {
        });
    },

    mongo:function(app){
        var mongoose = N.mongoose;
        var Schema = mongoose.Schema;
        mongoose.connect(C.mongodb);
        app.on('close', function (err) {
            mongoose.disconnect(callback);
        });
    }

}

module.exports = ANS;
