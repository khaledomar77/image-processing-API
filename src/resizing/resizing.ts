//import path module.
import path from 'path'

//import sharp library for doing image processing task. 
import sharp from 'sharp'
//import fs module
import fs from 'fs'

//define image resizing (processing) function.
const resizeImage =async (image:string,width:number,height:number):Promise<string>=>{
      //detect image path.
      const imagePath = path.join(__dirname, `../../imagesDir/${image}.jpg`)
      //detect resized image path.
      const outputImage = path.join(__dirname, `../../imagesDir/thumbnails/${image}_${width}_${height}.jpg`)

      //caching function.
    if(fs.existsSync(outputImage)) {
        return outputImage
    } else {
        //handle error of image processing.
        try {
            //implement image resizing using sharp library.
            await sharp(imagePath).resize({width: width,height: height,}).toFile(outputImage)
              return outputImage
        //catch any error if exists.
        } catch (err) {
            throw new Error("image processing failed")
        }
    }
}

//export resizeImage function to be used in another module.
export default resizeImage