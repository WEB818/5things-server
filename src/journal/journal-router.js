const express = require("express");
const path = require("path");
const JournalService = require("./journal-service");

const journalRouter = express.Router();
const jsonBodyParser = express.json();

journalRouter.get("/",

module.exports = journalRouter;