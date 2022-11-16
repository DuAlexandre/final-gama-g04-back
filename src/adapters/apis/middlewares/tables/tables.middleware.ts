import debug from "debug";
import { Joi, validate } from "express-validation";

const log: debug.IDebugger = debug('app:tables-middleware');

class TablesMiddleware {

    idValidator = validate({
        params: Joi.object({
            id: Joi.number().exist().required()
        })
    })

    createValidator = validate({
        body: Joi.object({
            idTable: Joi.number().required(),
            order: Joi.array().required(),
            command: Joi.number().required()
        })
    })

    updateValidator = validate({
        body: Joi.object({
            id: Joi.number().required(),
            idTable: Joi.number().required(),
            order: Joi.array().required(),
            comand: Joi.number().required()
        })
    })
}

export default new TablesMiddleware();