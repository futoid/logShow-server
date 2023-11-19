const mongoose = require("mongoose");
const { DATABASE_URL } = require("../config/index");
async function connectToDatabase() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Not able to connect to database", error);
  }
}

module.exports = connectToDatabase;
