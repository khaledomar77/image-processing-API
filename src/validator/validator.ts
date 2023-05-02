//import query function from express-validator function.
import { query} from 'express-validator'

//define validation schema to check queries.
const validateInput= [
        query('width').isNumeric().withMessage('width should be a number.'),
        query('height').isNumeric().withMessage('height should be a number')
    ];


//export schema to be declared in another module.
export default validateInput