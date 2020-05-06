const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { NODE_ENV } = require("./config");
const errorHandler = require("./middleware/error-handler");
const authRouter = require("./auth/auth-router");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));

app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ greeting: "Hello, world!" });
});

app.use("/api/auth", authRouter);
module.exports = app;
