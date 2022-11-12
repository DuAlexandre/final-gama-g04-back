//Estrutura -> routes -> pasta da entidade -> nome deste arquivo substituindo "example"
//Class da entidade -> sintaxe = ExampleRoutes
import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import productsController from "../../controllers/products/products.controller";
import productsMiddleware from "../../middlewares/products/products.middleware";

export class ProductsRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'ProductsRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route("/products")
            .get(productsController.listProducts)
            // .post(productsMiddleware.createValidator, productsController.createProduct);
            .post(productsController.createProduct);


        this.app.route("/products/:idProduct")
            .get(productsMiddleware.idValidator, productsController.getProductById)
            .put(productsMiddleware.idValidator, productsMiddleware.updateValidator, productsController.updateProduct)
            .delete(productsMiddleware.idValidator, productsController.deleteProduct);

        return this.app;
    }
}