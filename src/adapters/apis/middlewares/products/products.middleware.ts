//Estrutura -> middlewares -> pasta da entidade -> nome deste arquivo substituindo "example"
//Class da entidade -> Sintaxe : ExampleMiddleware,
import debug from "debug";
import { Joi, validate } from "express-validation" 

const log: debug.IDebugger = debug('app:products-middleware');

class ProductsMiddleware {

    idValidator = validate({
        params: Joi.object({
            idProduct: Joi.number().exist().required()
        })
    })

    createValidator = validate({
        body: Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            image: Joi.string().required(),
            price: Joi.number().required()
        })
    })

    updateValidator = validate({
        body: Joi.object({
            idProduct: Joi.number().exist().required(),
            name: Joi.string().required(),
            description: Joi.string(),
            image: Joi.string(),
            price: Joi.number().required()
        })
    })
}

export default new ProductsMiddleware();