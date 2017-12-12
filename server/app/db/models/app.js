const createModel = require('../schemaTemplate');
const dBases = require('../../constants/dbDatabaseNames');
const models = require('../../constants/dbModelNames');

// APP model
module.exports = createModel(dBases.MAIN, models.APP, {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    baseUrl: {
        type: String,
        required: true,
        unique: true
    },
    mainPhotoDir: {
        type: String
    },
    photosDir: {
        type: String
    },
    rating: {
        type: Number,
        required: true
    }
});
