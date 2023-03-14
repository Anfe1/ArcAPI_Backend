if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

//Routers

const errorHandler = require("./errors/errorHandler");
// const logger = require()

app.use(cors());
app.use(express.json());

//----router----//
//----Error handlers----//
app.use(errorHandler);

module.exports = app;
