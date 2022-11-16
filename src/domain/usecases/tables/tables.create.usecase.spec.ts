import { TablesRepository } from "../../../adapters/repositories/tables/tables.repository";
import { CreateTableUseCase } from "./tables.create.usecase";
import { ITablesEntity } from "../../entities/tables/tables.entity";

jest.mock("../../../adapters/repositories/tables/tables.repository");
const TablesRepositoryMock = TablesRepository as jest.Mock<TablesRepository>

describe("Testing Table Creation Use Cases", () => {
    it("Should create an order on the table", async () => {
        const tablesRepository = new TablesRepositoryMock() as jest.Mocked<TablesRepository>;
        tablesRepository.create.mockResolvedValue({
                    "id": 1,
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
                });
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
        };

        const createTableUseCase = new CreateTableUseCase(
            tablesRepository
        );
        expect(await createTableUseCase.execute(table)).toMatchObject(table);
    });
});