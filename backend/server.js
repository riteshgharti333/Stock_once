const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const stockRoute = require("./routes/stockRoute");
const getStockRoute = require("./routes/stockRoute");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Successful Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api", stockRoute);
app.use("/api", getStockRoute);

app.listen(8000, () => {
  console.log("Server is Running!");
});
