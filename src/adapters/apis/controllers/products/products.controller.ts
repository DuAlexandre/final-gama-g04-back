//Estrutura -> controllers -> pasta da entidade -> nome deste arquivo substituindo "example"
//Class da Entidade -> Sintaxe : ExampleController
import debug from 'debug';
import express from 'express';
import createProductsUsecase from '../../../../domain/usecases/products/products.create.usecase';
import deleteProductsUsecase from '../../../../domain/usecases/products/products.delete.usecase';
import listProductsUsecase from '../../../../domain/usecases/products/products.list.usecase';
import readProductsUsecase from '../../../../domain/usecases/products/products.read.usecase';
import updateProductsUsecase from '../../../../domain/usecases/products/products.update.usecase';
import logger from '../../../../infrastructure/logs/winston.logs';

const log: debug.IDebugger = debug('app:products-controller');

class ProductsController {
    async listProducts(req: express.Request, res: express.Response) {
        try {
            const products = await listProductsUsecase.execute();
            res.status(200).send(products);
        } catch (error) {
            logger.error('Error listProducts in ProductsController:', error);
            res.status(404).send('constants!!!');
        }
    }

    async getProductById(req: express.Request, res: express.Response) {
        try {
            const products = await readProductsUsecase.execute({
                idProduct: Number(req.params.idProduct)
            });
            res.status(200).send(products)
        } catch (error) {
            logger.error('Error getProductById in ProductsController:', error);
            res.status(404).send('constants!!!');
        }
    }

    async createProduct(req: express.Request, res: express.Response) {
        try {
            const products = await createProductsUsecase.execute(req.body);
            log(products);
            res.status(201).send(products);
        } catch (error) {
            logger.error('Error createProduct in ProductsController:', error);
            res.status(500).send('constants!!!');
        }
    }

    async updateProduct(req: express.Request, res: express.Response) {
        try {
            const products = await updateProductsUsecase.execute(req.body);
            res.status(200).send(products);
        } catch (error) {
            logger.error('Error updateProduct in ProductsController:', error);
            res.status(400).send('constants!!!');
        }
    }

    async deleteProduct(req: express.Request, res: express.Response) {
        try {
            const products = await deleteProductsUsecase.execute({
                idProduct: Number(req.params.idProduct)
            });
            res.status(204).send();
        } catch (error) {
            logger.error('Error deleteProduct in ProductsController:', error);
            res.status(500).send('constants!!!');
        }
    }

    async productsByCategory(req: express.Request, res: express.Response){
        const products = await this.productsByCategory
    }
}

export default new ProductsController();