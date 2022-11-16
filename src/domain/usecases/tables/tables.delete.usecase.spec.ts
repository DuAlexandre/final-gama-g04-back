import tablesDeleteUsecase from "./tables.delete.usecase";

describe(" Teste to delete a table", () =>{
    it("Should delete a table", async () =>{
        const table = {
            id: 0
        };
    expect(await tablesDeleteUsecase.execute(table)).toBeUndefined();
    });
});