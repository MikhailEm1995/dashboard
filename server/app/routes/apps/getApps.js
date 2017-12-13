const AppModel = require('../../db/models/app');

function getApps(req, res) {
    AppModel.find({}, '', function(err, doc) {
        if (err) console.log('error');
        console.log(doc);
    });

    res.send('test');
}

module.exports = getApps;
