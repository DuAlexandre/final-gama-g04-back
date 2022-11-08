//Estrutura -> routes -> pasta da entidade -> nome deste arquivo substituindo "example"
//Class da entidade -> sintaxe = ExampleRoutes
import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import productsController from "../../controllers/products/products.controller";

export class ProductsRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'ProductsRoutes');
    }

    configureRoutes(): express.Application {

        this.app.route("/products")
            .get(productsController.listProducts)
            .post(productsController.createProduct);

        this.app.route("/products/:idProduct")
            .get(productsController.getProductById)
            .put(productsController.updateProduct)
            .delete(productsController.deleteProduct);

        return this.app;
    }
}