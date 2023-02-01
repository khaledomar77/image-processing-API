//import resizeImage function
import resizeImage from "../resizing/resizing"
//import path module.
import path from 'path'

//create a testing spec for image processing function.
describe('First testing case of image processing function.',()=>{
    it('should return resized image',async ()=>{
        const imgOutput=path.join(__dirname,'../../imagesDir/thumbnails/fjord_200_200.jpg')
        expect(await resizeImage('fjord',200,200)).toBe(imgOutput)
    })
})
