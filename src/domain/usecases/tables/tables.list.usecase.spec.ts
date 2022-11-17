import tablesListUsecase from "./tables.list.usecase";

describe("Test to list a tables", () => {
    it("Should list a table", async () => {
        const table = await tablesListUsecase.execute();
        if(table){
        expect(table[0]).toMatchObject({'id': /0-9/
    });
    }else{
        expect(table).toEqual([]);
    };
    });
});