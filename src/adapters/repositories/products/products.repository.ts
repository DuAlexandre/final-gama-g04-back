//Estrutura -> repositories -> pasta da entidade -> nome deste arquivo substituindo "example"
//Class da entidade -> sintaxe = ExampleRepository
import { IProductsRepository } from "../../../domain/repositories/products/products.repository.interface";
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
import categoriesModels from "../../../infrastructure/persistence/mysql/models/categories/categories.models.mysql.database";
import * as Sequelize from "sequelize";
import { IProductsEntity } from "../../../domain/entities/products/products.entity";
import productsModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/products/products.models.mysql.database";
import logger from "../../../infrastructure/logs/winston.logs";
import productsEntitiesToModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/products/products.entitiesToModels.mysql.database";
import productsModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/products/products.modelsToEntities.mysql.database";
import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
import { info } from "winston";

export class ProductsRepository implements IProductsRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelProducts: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _ModelCategories: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
    ) {
        this._ModelProducts.hasOne(this._ModelCategories, {
            foreignKey:'idProduct',
            as: 'category',
        })
    }

    async create(resource: IProductsEntity): Promise<IProductsEntity> {
        try {
            const { productOne, category } = productsEntitiesToModelsMysqlDatabase(resource);
            const modelProduct = await this._database.create(this._ModelProducts, productOne);

            if(category){
                category.idProduct = modelProduct.null;
                const categoryModel = await this._database.create(this._ModelCategories, category);
            }
            resource.idProduct = modelProduct.null;
            logger.info('Running create of ProductsRepository');
            return modelProduct;
        } catch (error) {
            logger.error('Error create PostRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async readById(resourceId: number): Promise<IProductsEntity | undefined> {
        try {
            const productOne = await this._database.read(this._ModelProducts, resourceId, {
                include: [
                    'category',
                ]
            });

            logger.info('Running readById of ProductsRepository')
            return productsModelsToEntitiesMysqlDatabase(productOne)
        } catch (error) {
            logger.error('Error readById of ProductsRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async deleteById(resourceId: number): Promise<void> {
        try {
            await this._database.delete(this._ModelProducts, { idProduct: resourceId });
            await this._database.delete(this._ModelCategories, { idProduct: resourceId });
            logger.info('Running deleteById of ProductsRepository.');
        } catch (error) {
            logger.error('Error in deleteById of ProductsRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async listAll(): Promise<IProductsEntity[]> {
        try {
            const products = await this._database.list(this._ModelProducts, {
                include:[
                    'category'
                ]
            });
            const productsList = products.map(productsModelsToEntitiesMysqlDatabase);
            logger.info('Running listAll of ProductsRepository.');
            return productsList;
        } catch (error) {
            logger.error('Error in listAll of ProductsRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async updateById(resource: IProductsEntity): Promise<IProductsEntity | undefined> {
        try {
            let modelProducts = await this._database.read(this._ModelProducts, resource.idProduct!, {
                include: [
                    'category',
                ]
            });
            const { productOne } = productsEntitiesToModelsMysqlDatabase(resource);
            await this._database.update(modelProducts, productOne);
            logger.info('Running updateById of ProductsRepository.');
            return resource;
        } catch (error) {
            logger.error('Error in updateById of ProductsRepository:', error);
            throw new Error((error as Error).message);
        }
    }

    async groupProductsByCategory(category: number): Promise<{
        category: number
    }> {
        const productsByCategory = await this._database.selectQuery(
            `
            SELECT p.category
            FROM products p
            WHERE category = :category
            `,
            {
                category
            }
        );

        if(productsByCategory[0].category){
            return productsByCategory[0];
        } else{
            return {
                category: category,
            }
        }
        
    }
}

export default new ProductsRepository(
    MysqlDatabase.getInstance(),
    productsModelsMysqlDatabase, 
    categoriesModels
) 