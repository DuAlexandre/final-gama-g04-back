import tablesUpdateUsecase from "./tables.update.usecase";
import tablesCreateUsecase from "./tables.create.usecase";
import { ITablesEntity } from "../../entities/tables/tables.entity";

describe("Testing a product update in usecase", () => {
    it("Should test if the product is being updated", async () => {

        const table: ITablesEntity = {
                "idTable": 1,
                "order": [
                    {
                        "name": "Bife Acebolado",
                        "comment": "Sem Cebolaa"
                    },
                    {
                        "name": "Bife",
                        "comment": "Sem Carne"
                    }
                ],
                "command": 120.7
        };
        await tablesCreateUsecase.execute(table);
        const tableUpdated: ITablesEntity = {
            "idTable": 1,
                "order": [
                    {
                        "name": "Bife Acebolado",
                        "comment": "Sem Cebolaa"
                    },
                    {
                        "name": "Bife",
                        "comment": "Sem Carne"
                    }
                ],
                "command": 120.7
        };
        const readingtableUpdated: ITablesEntity = {
            "idTable": 1,
                "order": [
                    {
                        "name": "Bife Acebolado",
                        "comment": "Sem Cebolaa"
                    },
                    {
                        "name": "Bife",
                        "comment": "Sem Carne"
                    }
                ],
                "command": 120.7
        };
        expect(await tablesUpdateUsecase.execute(tableUpdated)).toMatchObject(readingtableUpdated);
        });
});