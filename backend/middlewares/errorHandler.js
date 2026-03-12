const {constants} = require('../constants');

const errorHandler = (err,req,res,next) =>{
    const statusCode  = res.statusCode ? res.statusCode: 500;

    switch(statusCode){
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message,
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:"Not found",
                message:err.message,
            });
            break;
        case constants.SERVER_ERROR:
            res.json({
                title:"Server Error",
                message:err.message,
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message:err.message,
            })
            break;
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation error",
                message:err.message,
            });
            break; 
        default:
            res.status(500).json({
            title: "Unknown Error",
            message: err.message
        });
            break;
    }
};
module.exports = errorHandler;

