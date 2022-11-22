import tablesReadUsecase from "./tables.read.usecase";
import tablesCreateUsecase from "./tables.create.usecase";
import { ITablesEntity } from "../../entities/tables/tables.entity";


describe("Unit Test for reading the tables in the use cases", () => {
    it("Should read the tables in the use cases", async () => {
        const table: ITablesEntity = {
            "idTable": 1, 
            "order": [
                {
                    "name": "Bife Acebolado",
                    "comment": "Sem Cebola"
                },
                {
                    "name": "Bife",
                    "comment": "Sem Carne"
                }
            ],
            "command": 120.7
        }
        await tablesCreateUsecase.execute(table);
        const tableRead: ITablesEntity = {
            "idTable": 1, 
            "order": [
                {
                    "name": "Bife Acebolado",
                    "comment": "Sem Cebola"
                },
                {
                    "name": "Bife",
                    "comment": "Sem Carne"
                }
            ],
            "command": 120.7
        }
        expect(await tablesReadUsecase.execute({ id:1 })).toMatchObject(tableRead)
    })
})
