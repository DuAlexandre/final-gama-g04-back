import { ITablesEntity } from "../../../../../domain/entities/tables/tables.entity";

export default function (table: any): ITablesEntity | undefined{
    if(!table) {
        return;
    }

    let TableList: ITablesEntity = {
        idTable: table.idTable,
        order: table.order
    }

    return (TableList as ITablesEntity);
}