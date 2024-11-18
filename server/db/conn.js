
const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let connection;
try {
  connection = await client.connect();
} catch(e) {
  console.error(e);
}
let db = connection.db("sample_training");
export default db;

module.exports = {
  connectToServer: function (callback) {
    // Implement Database connection
  },

  getDb: function () {
    return dbConnection;
  },
};
