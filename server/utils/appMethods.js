module.exports = {
    addUseAllMethod: function(app) {
        if (!app.$useAll) app.$useAll = arr => arr.forEach(item => app.use(...item));
    }
};
