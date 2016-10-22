import "reflect-metadata";
import {useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
const cors = require("cors");
const express = require("express");

// setup routing-controllers to use typedi container. You can use any container here
useContainer(Container);

// now import all our controllers. alternatively you can specify controllerDirs in routing-controller options
import "./controllers/CategoryController";
import "./controllers/PostController";

// create express server
let expressApp = express();
expressApp.use(cors());
useExpressServer(expressApp);

// run express app
expressApp.listen(3000);

console.log("Server is up and running at port 3000");