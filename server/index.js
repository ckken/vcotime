var base = {

    init: function (req, res, next) {
        res.render(C.client+'/index.html');
    }
}

module.exports = base;

