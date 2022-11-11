import { ITablesEntity } from "../../entities/tables/tables.entity";

export interface ITablesRepository {
    listAll(): Promise<ITablesEntity[]>,
    create(resource: ITablesEntity): Promise<ITablesEntity>,
    readById(resourceId: number): Promise<ITablesEntity | undefined>,
    updateById(resource: ITablesEntity): Promise<ITablesEntity | undefined>,
    deleteById(resourceId: number): Promise<void>  
}