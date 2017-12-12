const connectToDB = require('./connectTo');

function createModel(dbName, modelName, description) {
    const mongoose = connectToDB(dbName);
    const Schema = mongoose.Schema;

    return mongoose.model(modelName, new Schema(description));
}

module.exports = createModel;
