const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "crud_mongodb";
//const url = "mongodb://mongo:27017";
//const url = "mongodb://0.0.0.0:27017"
const url = "mongodb://MONGO:27017"
//const url = "mongodb://$GET_HOST_FROM:27017"
const mongoOptions = { useNewUrlParser: true };

const state = {
  db: null
};

const connect = cb => {
  if (state.db) {
    cb();
  } else {
    MongoClient.connect(
      url,
      mongoOptions,
      (err, client) => {
        if (err) {
          cb(err);
        } else {
          state.db = client.db(dbname);
          cb();
        }
      }
    );
  }
};

const getPrimirayKey = _id => {
  return ObjectID(_id);
};

const getDB = () => {
  return state.db;
};

const getDBAndCollection = collection => {
  return getDB().collection(collection);
};
module.exports = { getDB, getDBAndCollection, connect, getPrimirayKey };
