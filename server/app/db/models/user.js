const createModel = require('../schemaTemplate');
const MAIN = require('../../constants/dbDatabaseNames').MAIN;
const USER = require('../../constants/dbModelNames').USER;

// USER model
module.exports = createModel(MAIN, USER, {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    applications: {
        type: [ String ],
        required: true
    },
    registrationDate: {
        type: Number,
        required: true
    }
});
