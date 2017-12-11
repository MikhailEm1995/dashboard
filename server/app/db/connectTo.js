var mongoose = require('mongoose');

function connectToDB(dbName) {
    mongoose.connect('mongodb://localhost:27017/' + dbName, { useMongoClient: true });
    mongoose.Promise = global.Promise;

    return mongoose;
}

module.exports = connectToDB;
