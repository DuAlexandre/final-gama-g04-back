//Estrutura -> controllers -> pasta da entidade -> nome deste arquivo substituindo "example"
//Class da Entidade -> Sintaxe : ExampleController
import debug from 'debug';
import express from 'express';
import categoriesListUsecase from '../../../../domain/usecases/categories/categories.list.usecase';
import categoriesReadUsecase from '../../../../domain/usecases/categories/categories.read.usecase';

import logger from '../../../../infrastructure/logs/winston.logs';

const log: debug.IDebugger = debug('app:categories-controller');

class CategoriesController {
    async listCategories(req: express.Request, res: express.Response) {
        try {
            const categories = await categoriesListUsecase.execute();
            res.status(200).send(categories);
        } catch (error) {
            logger.error('Error listCategories in CategoriesController:', error);
            res.status(404).send('constants!!!');
        }
    }

    async getProductById(req: express.Request, res: express.Response) {
        try {
            const categories = await categoriesReadUsecase.execute({
                idProduct: Number(req.params.idCategory)
            });
            res.status(200).send(categories)
        } catch (error) {
            logger.error('Error getCategoryById in CategoriesController:', error);
            res.status(404).send('constants!!!');
        }
    }

}

export default new CategoriesController();