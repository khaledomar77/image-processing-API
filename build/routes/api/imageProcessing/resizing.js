"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp = require('sharp');
const fs = require('fs');
const resizeRouting = express_1.default.Router();
resizeRouting.get('/resize:image', (req, res) => {
    sharp(req.params.image).resize(req.query.width, req.query.height)
        .toFile(`${__dirname}/${req.params.image}_${req.query.width}_${req.query.height}.jpg`).toBuffer();
});
exports.default = resizeRouting;
