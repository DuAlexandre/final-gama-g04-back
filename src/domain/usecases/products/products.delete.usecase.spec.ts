import productsDeleteUsecase from "./products.delete.usecase";

describe("Test to delete a product",() => {
    it.skip("should delete a product", async ()  => {
        const product = {
            idProduct: 0
        };
        expect(await productsDeleteUsecase.execute(product)).toBeUndefined();
    });    
})