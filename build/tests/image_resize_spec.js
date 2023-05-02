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
//import resizeImage function
const resizing_1 = __importDefault(require("../resizing/resizing"));
//import path module.
const path_1 = __importDefault(require("path"));
//create a testing spec for image processing function.
describe('First testing case of image processing function.', () => {
    it('should return resized image', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgOutput = path_1.default.join(__dirname, '../../imagesDir/thumbnails/fjord_200_200.jpg');
        expect(yield (0, resizing_1.default)('fjord', 200, 200)).toBe(imgOutput);
    }));
});
