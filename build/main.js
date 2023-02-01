"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express modules.
const express_1 = __importDefault(require("express"));
//import resizeImage middleware.
const resizing_1 = __importDefault(require("./resizing/resizing"));
//import validationResult function from express-validator to check query values.
const express_validator_1 = require("express-validator");
//import validation schema from validator.ts module. 
const validator_1 = __importDefault(require("./validator/validator"));
//create the main server.
const app = (0, express_1.default)();
//customize the server's port.
const port = process.env.PORT || 5000;
//declare main endpoint.
app.get('/', (req, res) => {
    res.send('Welcome to image processing main page.');
});
//declare image processing API endpoint.
app.get('/resize', validator_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //define input queries (image,width&height).
    const image = req.query.image;
    const imageWidth = parseInt(req.query.width);
    const imageHeight = parseInt(req.query.height);
    //check validation schema. 
    const errors = (0, express_validator_1.validationResult)(req);
    //handle validation errors.
    if (!errors.isEmpty()) {
        res.json(errors);
    }
    else {
        //declare resizeImage for image processing.
        const output = yield (0, resizing_1.default)(image, imageWidth, imageHeight);
        //show the output resized image
        res.sendFile(output);
    }
}));
//listen to port 5000 OR env.PORT.
app.listen(port, () => {
    console.log('server is running at PORT:', port);
});
exports.default = app;
