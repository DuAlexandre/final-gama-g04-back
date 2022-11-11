import { ITablesEntity } from "../../entities/tables/tables.entity";

export interface ITablesRepository {
    create(resource: ITablesEntity): Promise<ITablesEntity>,
    readById(resourceId: number): Promise<ITablesEntity>,
    deleteById(resourceId: number): Promise<void>,
    listAll(): Promise<ITablesEntity[]>,
    updateById(resource: ITablesEntity): Promise<ITablesEntity | undefined>
}