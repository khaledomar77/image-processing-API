# Image processing API

The main purpose of this project is to use an API endpoint used for image processing and resizing of input image using given image name, width and height. It is build using nodeJs,express and typescript language. The main idea of the project is to create an endpoint has GET type. It receives three input queries which are image name, width & height, then it integrates with sharp image processing library to create resized image based on user's output. It also integrates with express-validator library to check if the input is valid or not. Caching of resized images is implemented too. It's performed to avoid repeated creation of already existing resized image in /thumbnails folder. If the resized image exists, render the image wit no need to resave it.If not exist, save the image then render it. 

you can install any dependencies using the following CLI command: 

    npm install dependency-name

you can install any dev-dependencies using the following CLI command:
   
   npm install --save-dev dependency-name

all scripts and dependencies are in package.json 

## Main Scripts:

  ### script for project setup:
    npm install

  ### script for developer's mode:
    npm run dev

  ### script for starting project:
    npm start

  ### script for compiling typescript to javascript:
    npm run build

  ### script for linting:
    npm run lint
  
  ### script for code formatting:
    npm run prettier.

  ### script for run testing:
    npm run test.

### Main Link:
  http://localhost:5000
  
  the server is running on port 5000
  
### Endpoint: 
   http://localhost:3000/resize/
   
### Running Example:
   http://localhost:3000/resize?image=fjord&width=500&height=500

## Simple diagram explains how the endpoint works:
![Untitled Diagram drawio](https://user-images.githubusercontent.com/56520041/216181191-4a4d46f0-2086-4345-9b42-4b375af34b51.png)


main code exists in master branch
