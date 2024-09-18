const express = require("express");
const Router = express.Router();
const ControllerCreate = require("../controller/createConnector");
const ControllerFind = require("../controller/findConnector");


Router.post("/create/:connectorType", ControllerCreate.create);

Router.get("/find_all", ControllerFind.findAll);


module.exports = Router;
