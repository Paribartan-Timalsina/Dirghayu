// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/config.env" });
// const connectDB = () => {
//   const conn = mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useFindAndModify:false,
//   });
//   // console.log(`Moongose DB connected:${conn.connection.host}`)

//   //     catch(err){
//   // console.error(err)
//   // process.exit(1)
//   // }
// };
// module.exports = connectDB;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Database connected successfully");
    } catch (err) {
      console.error(`Error connecting to database: ${err.message}`);
      process.exit(1);
    }
  };

module.exports = connectDB;
  