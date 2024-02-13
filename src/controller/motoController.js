"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObject = exports.updateObject = exports.createObject = exports.getObjectsById = exports.getObjects = void 0;
var fileUtils_1 = require("../utils/fileUtils");
var getObjects = function (req, res) {
    var objects = (0, fileUtils_1.loadDataFromFile)();
    res.status(200).send(objects);
};
exports.getObjects = getObjects;
var getObjectsById = function (req, res) {
    console.log("Запрошенный ID:", req.params.id);
    var objects = (0, fileUtils_1.loadDataFromFile)();
    console.log("Загруженные объекты:", objects);
    var id = parseInt(req.params.id, 10);
    var object = objects.find(function (obj) { return obj.id === id; });
    if (object !== undefined) {
        res.status(200).send(object);
    }
    else {
        res.sendStatus(404);
    }
};
exports.getObjectsById = getObjectsById;
var createObject = function (req, res) {
    var objects = (0, fileUtils_1.loadDataFromFile)();
    var newObj = req.body;
    newObj.id = Date.now();
    objects.push(newObj);
    (0, fileUtils_1.saveDataToFile)(objects);
    res.status(201).send(newObj);
};
exports.createObject = createObject;
var updateObject = function (req, res) {
    var objects = (0, fileUtils_1.loadDataFromFile)();
    var id = parseInt(req.params.id, 10);
    var index = objects.findIndex(function (obj) { return obj.id === id; });
    if (index > -1) {
        var updatedObj = __assign(__assign({}, objects[index]), req.body);
        objects[index] = updatedObj;
        (0, fileUtils_1.saveDataToFile)(objects);
        res.status(200).send(updatedObj);
    }
    else {
        res.status(404).send({ message: 'Object not found' });
    }
};
exports.updateObject = updateObject;
var deleteObject = function (req, res) {
    var objects = (0, fileUtils_1.loadDataFromFile)();
    var id = parseInt(req.params.id, 10);
    objects = objects.filter(function (obj) { return obj.id !== id; });
    console.log("Deletete obj", objects);
    (0, fileUtils_1.saveDataToFile)(objects);
    res.status(204).send();
};
exports.deleteObject = deleteObject;
