import { ITablesRepository } from "../../../domain/repositories/tables/tables.repository.interface";
import * as Sequelize from "sequelize"
import { ITablesEntity } from "../../../domain/entities/tables/tables.entity";
import logger from "../../../infrastructure/logs/winston.logs";
import { IDatabaseModel } from "../../../infrastructure/persistence/databasemodel.interface";
import tablesEntitiesToModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/tables/tables.entitiesToModels.mysql.database";
import tablesModelsToEntitiesMysqlDatabase from "../../../infrastructure/persistence/mysql/helpers/tables/tables.modelsToEntities.mysql.database";
import tablesModelsMysqlDatabase from "../../../infrastructure/persistence/mysql/models/tables/tables.models.mysql.database";
import { MysqlDatabase } from "../../../infrastructure/persistence/mysql/mysql.database";

export class TablesRepository implements ITablesRepository {
    
    constructor(
        private _database: IDatabaseModel,
        private _ModelTables: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ){}

    async listAll(): Promise<ITablesEntity[]> {
        try {
            const tables = await this._database.list(this._ModelTables);
            const tablesList = tables.map(tablesModelsToEntitiesMysqlDatabase);
            logger.info('Running listAll of TablesRepository');
            return tablesList;
        } catch (err) {
            logger.error('Error in listAll of TablesRepository:', err);
            throw new Error((err as Error).message);
        }
    }
    async create(resource: ITablesEntity): Promise<ITablesEntity> {
        try {
            const { TableList } = tablesEntitiesToModelsMysqlDatabase(resource);
            const ModelTable = await this._database.create(this._ModelTables, TableList);
            resource.idTable = ModelTable; ///////////////////////////////////////////////////////
            logger.info('Running creation of TablesRepository');
            return ModelTable;            
        } catch (err) {
            logger.error('Error creating TablesRepository:', err);
            throw new Error ((err as Error).message);        
        }
    }

    async readById(resourceId: number): Promise<ITablesEntity | undefined> {
        try{
            const TableList = await this._database.read(this._ModelTables, resourceId);
            logger.info('Running readById of TablesRepository')
            return tablesModelsToEntitiesMysqlDatabase(TableList);
        } catch (err) {
            logger.error('Error readById of TablesRepository:', err);
            throw new Error((err as Error).message);
        }
    }

    async updateById(resource: ITablesEntity): Promise<ITablesEntity | undefined> {
        try{
            let ModelTable = await this._database.read(this._ModelTables, resource.idTable!);
            const {TableList} = tablesEntitiesToModelsMysqlDatabase(resource);
            await this._database.update(ModelTable, TableList);
            logger.info('Running updateById of TablesRepository');
            return resource;
        } catch (err) {
            logger.error('Error in updateById of TablesRepository', err);
            throw new Error((err as Error).message);
        }
    }

    async deleteById(resourceId: number): Promise<void> {
        try {
            await this._database.delete(this._ModelTables, {idTable: resourceId});
            logger.info('Running deleteById of TableRepository');
        } catch (err) {
            logger.error('Error in deleteById os TableRepository:', err);
            throw new Error((err as Error).message);
        }
    }
};

export default new TablesRepository(
    MysqlDatabase.getInstance(),
    tablesModelsMysqlDatabase
) 