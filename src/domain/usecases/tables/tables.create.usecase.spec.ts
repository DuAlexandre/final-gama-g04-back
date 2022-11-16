import { TablesRepository } from "../../../adapters/repositories/tables/tables.repository";

jest.mock("../../../adapters/repositories/tables/tables.repository");
const TablesRepositoryMock = TablesRepository as jest.Mock<TablesRepository>

describe("Testing Table Creation Use Cases", () => {
    it("Should create an order on the table", async () => {
        

    });
})