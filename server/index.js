const express = require('express');
const app = express();
const apiRouter = express.Router();

const ROUTER_UTILS = require('./utils/routerMethods');
const APP_UTILS = require('./utils/appMethods');

const getAppsRoute = require('./app/routes/apps/getApps');

const PORT = 3000;

APP_UTILS.addUseAllMethod(app);

ROUTER_UTILS.addRoutesMethod(apiRouter);

apiRouter.$routes({
    get: {
        '/apps': getAppsRoute
    }
});

app.$useAll([
    [function(req, res, next) {
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        });

        next();
    }],
    ['/api', apiRouter]
]);

app.listen(PORT, function() {
    console.log('Server started at port: ', PORT);
});
