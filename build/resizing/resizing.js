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
//import path module.
const path_1 = __importDefault(require("path"));
//import sharp library for doing image processing task. 
const sharp_1 = __importDefault(require("sharp"));
//import fs module
const fs_1 = __importDefault(require("fs"));
//define image resizing (processing) function.
const resizeImage = (image, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    //detect image path.
    const imagePath = path_1.default.join(__dirname, `../../imagesDir/${image}.jpg`);
    //detect resized image path.
    const outputImage = path_1.default.join(__dirname, `../../imagesDir/thumbnails/${image}_${width}_${height}.jpg`);
    //caching function.
    if (fs_1.default.existsSync(outputImage)) {
        return outputImage;
    }
    else {
        //handle error of image processing.
        try {
            //implement image resizing using sharp library.
            yield (0, sharp_1.default)(imagePath).resize({ width: width, height: height, }).toFile(outputImage);
            return outputImage;
            //catch any error if exists.
        }
        catch (err) {
            throw new Error("image processing failed");
        }
    }
});
//export resizeImage function to be used in another module.
exports.default = resizeImage;
