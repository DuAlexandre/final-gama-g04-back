import { ITablesEntity } from "../../../../../domain/entities/tables/tables.entity";

export default function (tables: ITablesEntity) {

    const TableList = {
        IdTable: tables.IdTable,
        order: tables.order,
        command : tables.command        
    }

    return { TableList: TableList };
}