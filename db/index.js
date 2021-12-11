const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(DB, options).then(
  () => {
    console.log("Can Use BD");
  },
  (err) => {
    console.log(err);
  }
);
