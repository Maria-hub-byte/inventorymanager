const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const db = await mongoose.connect(
     process.env.DB_LINK
    );
    console.log("Database Connected");
    return db;
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
