const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
const db = require("./db/index");
app.use(express.json());



const PORT = process.env.PORT || 5000;
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});