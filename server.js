const express = require("express");
const helmet = require("helmet");

const server = express();

const recipesRouter = require("./recipes/recipes-router.js");

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipesRouter);

module.exports = server;
