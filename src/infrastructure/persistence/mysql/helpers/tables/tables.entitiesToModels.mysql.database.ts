import { ITablesEntity } from "../../../../../domain/entities/tables/tables.entity";

export default function (tables: ITablesEntity) {

    const TableList = {
        idTable: tables.idTable,
        order: tables.order       
    }

    return { TableList: TableList };
}