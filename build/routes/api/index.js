"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import imageDirectory from '../api/images';
const route = express_1.default.Router();
route.get('/', (req, res) => {
    res.send('welcome to image processing api project main page');
});
