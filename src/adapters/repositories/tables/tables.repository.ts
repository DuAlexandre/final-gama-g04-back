import { ITablesRepository } from "../../../domain/repositories/tables/tables.repository.interface";
import * as Sequelize from "sequelize"
import { ITablesEntity } from "../../../domain/entities/tables/tables.entity";
import logger from "../../../infrastructure/logs/winston.logs";

export class TablesRepository implements ITablesRepository {
    
    constructor(
        private _ModelTables: Sequelize.ModelStatic<Sequelize.Model<any, any>>
    ){}

    async create(resource: ITablesEntity): Promise<ITablesEntity> {
        try {
            const ModelTable = await this._ModelTables.create(); resource.idTable = ModelTable;
            logger.info('Running creation of TablesRepository');
            return ModelTable;            
        } catch (err) {
            logger.error('Error creating TablesRepository:', err);
            throw new Error ((err as Error).message);        
    }
}
    async readById(resourceId: number): Promise<ITablesEntity | undefined>{
        try{

        }
    }

}