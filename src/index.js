require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./router/index");

// mongoDB.connect()

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

route(app);

// route(app);

app.listen(5000, () =>
  console.log(
    "> Server is up and running on port : http://localhost:5000 " + 5000,
  ),
);
