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
const supertest_1 = __importDefault(require("supertest"));
const main_1 = __importDefault(require("../main"));
const request = (0, supertest_1.default)(main_1.default);
describe('test the main get / endpoint', () => {
    it('should return OK response', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        console.log(`API status code:${response.statusCode}`);
    }));
});
describe('test the image processing get resize/ endpoint', () => {
    it('should return OK response', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/resize');
        console.log(`API status code:${response.statusCode}`);
    }));
});
