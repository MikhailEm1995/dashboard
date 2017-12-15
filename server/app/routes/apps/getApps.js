const AppModel = require('../../db/models/app');

function getApps(req, res) {
    try {
        AppModel.find({}, '', function(err, doc) {
            if (err) throw new Error('Coldn\'t find apps');

            res.status(200).send(JSON.stringify(doc));
        });
    } catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports = getApps;
