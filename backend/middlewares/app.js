const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("../routes/userRoutes");

var corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    callback(null, true);
  },
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1/users", userRoutes);

module.exports = app;
