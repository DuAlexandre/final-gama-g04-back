import productsListUsecase from "./products.list.usecase";

describe("Test to list a product", () => {
    it("Should list a product", async () => {
        const list = await productsListUsecase.execute();
        if(list){
        expect(list[0]).toMatchObject({'idProduct': /0-9/
    });
    }else{
        expect(list).toEqual([]);
    };
    });
});