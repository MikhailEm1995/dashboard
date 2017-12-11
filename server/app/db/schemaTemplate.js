const connectToDB = require('./connectTo');

function createModel(dbName, modelName, description) {
    const mongoose = connectToDB(dbName);
    const schema = mongoose.Schema;

    return mongoose.model(modelName, schema(description));
}

module.exports = createModel;
