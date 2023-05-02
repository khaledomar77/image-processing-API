"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import query function from express-validator function.
const express_validator_1 = require("express-validator");
//define validation schema to check queries.
const validateInput = [
    (0, express_validator_1.query)('width').isNumeric().withMessage('width should be a number.'),
    (0, express_validator_1.query)('height').isNumeric().withMessage('height should be a number')
];
//export schema to be declared in another module.
exports.default = validateInput;
