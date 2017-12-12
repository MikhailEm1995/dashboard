const createModel = require('../schemaTemplate');
const MAIN = require('../../constants/dbDatabaseNames').MAIN;
const APP = require('../../constants/dbModelNames').APP;

// APP model
module.exports = createModel(MAIN, APP, {
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
