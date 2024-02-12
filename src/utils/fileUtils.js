"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDataFromFile = exports.saveDataToFile = void 0;
var fs = require("fs");
var path = require("path");
var saveDataToFile = function (data) {
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 2));
};
exports.saveDataToFile = saveDataToFile;
var loadDataFromFile = function () {
    try {
        var data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
};
exports.loadDataFromFile = loadDataFromFile;
