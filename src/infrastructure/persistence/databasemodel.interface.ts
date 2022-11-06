import { IDatabase } from "./database.interface";

export interface IDatabaseModel extends IDatabase {
    createModel(name: string, properties: any): any,
    update(type:any, properties: any): any,
    read(type: any, dataId: number, includes?: object): any,
    list(type: any, includes?: object): any,
    selectQuery(sql: string, replacements: any): any,
}