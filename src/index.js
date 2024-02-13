"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var motoController_1 = require("./controller/motoController");
var app = express();
var PORT = 3000;
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});
app.get('/objects', motoController_1.getObjects);
app.get('/objects/:id', motoController_1.getObjectsById);
app.post('/objects', motoController_1.createObject);
app.put('/objects/:id', motoController_1.updateObject);
app.delete('/objects/:id', motoController_1.deleteObject);
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
