// //Estrutura -> repositories -> pasta da entidade -> nome deste arquivo substituindo "example"
// //Class da entidade -> sintaxe = ExampleRepository

// import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
// import * as Sequelize from "sequelize";
// import logger from "../../../infrastructure/logs/winston.logs";
// import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";
// import { ICategoriesRepository } from "../../../domain/repositories/categories/categories.repository.interface";
// import { ICategoriesEntity } from "../../../domain/entities/categories/categories.entity";
// import categoriesModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/categories/categories.modelsToEntities.mysql.database";
// import categoriesModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/categories/categories.models.mysql.database";

// export class CategoriesRepository implements ICategoriesRepository {

//     constructor(
//         private _database: IDatabaseModel,
//         private _ModelCategories: Sequelize.ModelCtor<Sequelize.Model<any, any>>
//     ) {}

//         async readById(resourceId: number): Promise<ICategoriesEntity | undefined> {
//         try {
//             const productOne = await this._database.read(this._ModelCategories, resourceId);
//             logger.info('Running readById of CategoriesRepository')
//             return categoriesModelsToEntitiesMysqlDatabase(productOne)
//         } catch (error) {
//             logger.error('Error readById of CategoriesRepository:', error);
//             throw new Error((error as Error).message);
//         }
//     }
//     async listAll(): Promise<ICategoriesEntity[]> {
//         try {
//             const products = await this._database.list(this._ModelCategories);
//             const productsList = products.map(categoriesModelsToEntitiesMysqlDatabase);
//             logger.info('Running listAll of CategoriesRepository.');
//             return productsList;
//         } catch (error) {
//             logger.error('Error in listAll of CategoriesRepository:', error);
//             throw new Error((error as Error).message);
//         }
//     }
// }

// export default new CategoriesRepository(
//     MysqlDatabase.getInstance(),
//     categoriesModelsMysqlDatabase
// ) 