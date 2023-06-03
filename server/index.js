const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;
const router = express.Router();
const route = require("./routes/routes");
const cors = require("cors");
const { keyverification } = require("./middleware/keyverification");
require("dotenv").config();
app.use(cors());
const mongoose = require("mongoose");

// Middleware to parse JSON bodies
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://Ayush:${process.env.MONGO_PASS}@cluster0.fohsg.mongodb.net/${process.env.DB_NAME}`,
    { useNewUrlParser: true }
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/route", route);






app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
