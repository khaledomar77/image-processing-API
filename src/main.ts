//import express modules.
import express, { Request, Response } from 'express'
//import resizeImage middleware.
import resizeImage from './resizing/resizing'
//import validationResult function from express-validator to check query values.
import { validationResult } from 'express-validator'
//import validation schema from validator.ts module. 
import validateInput from './validator/validator';

//create the main server.
const app = express();

//customize the server's port.
const port = process.env.PORT||5000;

//declare main endpoint.
app.get('/', (req:Request, res:Response) => {
    res.send('Welcome to image processing main page.');
});

//declare image processing API endpoint.
app.get('/resize',validateInput,async (req: Request, res: Response) => {
        //define input queries (image,width&height).
        const image=req.query.image as string
        const imageWidth=parseInt(req.query.width as string)
        const imageHeight=parseInt(req.query.height as string)

        //check validation schema. 
        const errors=validationResult(req)
        //handle validation errors.
        if(!errors.isEmpty()){
            res.json(errors)
        }
        else{
            //declare resizeImage for image processing.
            const output=await resizeImage(image,imageWidth,imageHeight)
            //show the output resized image
            res.sendFile(output)
        }
    }
);


//listen to port 5000 OR env.PORT.
app.listen(port, () => {
    console.log('server is running at PORT:', port);
});

export default app