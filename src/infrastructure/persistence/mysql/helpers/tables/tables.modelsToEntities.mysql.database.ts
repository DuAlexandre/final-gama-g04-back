import { ITablesEntity } from "../../../../../domain/entities/tables/tables.entity";

export default function (table: any): ITablesEntity | undefined{
    if(!table) {
        return;
    }

    let TableList: ITablesEntity = {
        id: table.id,
        idTable: table.idTable,
        order: table.order,
        command: table.command
    }

    return (TableList as ITablesEntity);
}