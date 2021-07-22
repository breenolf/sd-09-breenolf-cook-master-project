require('dotenv').config();
const { MongoClient } = require('mongodb');

const DB_URL = process.env.MONGO_DB_URL || 'mongodb://mongodb:27017/Cookmaster';
const DB_NAME = 'Cookmaster';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (
  db
  ? Promise.resolve(db)
  : MongoClient.connect(DB_URL, OPTIONS)
  .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
);

module.exports = connection;
