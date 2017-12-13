module.exports = {
    addRoutesMethod: function (router) {
        if (!router.$routes) router.$routes = obj => Object.keys(obj).forEach((method) => {
            Object.keys(obj[method]).forEach((route) => {
                router[method](route, obj[method][route]);
            });
        });
    }
};
