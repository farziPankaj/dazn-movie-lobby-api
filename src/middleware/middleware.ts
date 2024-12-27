import { Request, Response, NextFunction } from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const checkRole = async (req: Request, res: Response, next: NextFunction) => {
    console.log("--------------In middleware file & checkRole method--------------");
    try {
        const userRole = req.body.role as string;
        if( !userRole || !userRole.includes("admin")) {
            // res.status(401).send("Unauthorized")
            throw new Error("Unauthorized")
        }
        next();
    } catch (err) {
        console.log("--------------In catch block of middleware file & checkRole method--------------");
        console.log({error: err});
        res.status(401).send({message: `${err}`});
    }
};

const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    console.log("----------In middleware file & handleValidationErrors method--------------");
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            // array() => convert inoto array
            // map() => make new array based on given conditions
            const formattedErrors = errors.array().map((error) => { 
                return { 
                    msg: error.msg 
                }
            });
            return res.status(400).send({ errors: formattedErrors });
        }
        next();
    } catch(err) {
        console.log("----------In catch block of validateData file & handleValidationErrors method--------------");
        console.log(`Error in validateData file & handleValidationErrors method: ${err}`);
        return res.status(500).json({ error: err });
    }
};

// const validateSearchMovies = async (req: Request, res: Response, next: NextFunction) => {
//     await checkSchema({
//         q: {
//             in: ['query'],
//             trim: true,
//             isString: {
//                 errorMessage: `Name must of type string`,
//                 bail: true 
//             },
//             escape: true
//         }
//     }).run(req);

//     handleValidationErrors(req, res, next);
// };

const validateAddMovie = async (req: Request, res: Response, next: NextFunction) => {
    await checkSchema({
        title: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'Title must not be empty',
                // if this error is hit then flow will break and it will return
                bail: true,
            },
            isString: {
                errorMessage: 'Title must be a string',
                bail: true,
            },
            // remove extra spaces from starting and ending
            trim: true,
            escape: true,
        },
        rating: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'Rating must not be empty',
                bail: true,
            },
            isFloat: {
                errorMessage: 'Rating must be a number',
                bail: true,
            },
            trim: true,
            escape: true,
        },
        genre: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'Genre must not be empty',
                bail: true,
            },
            isString: {
                errorMessage: 'Genre must be a string',
                bail: true,
            },
            trim: true,
            escape: true,
        },
        streamingLink: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'streamingLink must not be empty',
                bail: true,
            },
            isString: {
                errorMessage: 'streamingLink must be a string',
                bail: true,
            },
            trim: true
        },
    }).run(req);

    handleValidationErrors(req, res, next);
};

const validateUpdateMovie = async (req: Request, res: Response, next: NextFunction) => {
    await checkSchema({
        id: {
            in: ['params'],
            notEmpty: {
                errorMessage: 'Movie ID must be provided',
                bail: true,
            },
            isMongoId: {
                errorMessage: 'Movie ID must be a valid MongoDB ID',
                bail: true,
            },
        },
        title: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'Title must not be empty',
                bail: true,
            },
            isString: {
                errorMessage: 'Title must be a string',
                bail: true,
            },
            trim: true,
            escape: true,
        },
        rating: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'Rating must not be empty',
                bail: true,
            },
            isFloat: {
                errorMessage: 'Rating must be a number',
                bail: true,
            },
            trim: true,
            escape: true,
        },
        genre: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'Genre must not be empty',
                bail: true,
            },
            isString: {
                errorMessage: 'Genre must be a string',
                bail: true,
            },
            trim: true,
            escape: true,
        },
        streamingLink: {
            in: ['body'],
            notEmpty: {
                errorMessage: 'streamingLink must not be empty',
                bail: true,
            },
            isString: {
                errorMessage: 'streamingLink must be a string',
                bail: true,
            },
            trim: true,
            escape: true,
        },
    }).run(req);

    handleValidationErrors(req, res, next);
};

const validateDeleteMovie = async (req: Request, res: Response, next: NextFunction) => {
    await checkSchema({
        id: {
            in: ['params'],
            notEmpty: {
                errorMessage: 'Movie ID must be provided',
                bail: true,
            },
            isMongoId: {
                errorMessage: 'Movie ID must be a valid MongoDB ID',
                bail: true,
            },
        },
    }).run(req);

    handleValidationErrors(req, res, next);
};

export { validateAddMovie, validateUpdateMovie, validateDeleteMovie };
