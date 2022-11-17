import productsUpdateUsecase from "./products.update.usecase";
import productsCreateUsecase from "./products.create.usecase";
import { IProductsEntity } from "../../entities/products/products.entity";

describe("Testing a product update in usecase", () => {
    it.skip("Should test if the product is being updated", async () => {
        const product: IProductsEntity = {
            "idProduct":5,
            "name": "x-onion com Chocolate",
            "description": "Um lanchão com muita cebola!",
            "image": "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
            "price": 23.50,
            "isVegan": false,
            "isGlutenFree":true,
            "isEnough":2,
            "category":5,
        };
        await productsCreateUsecase.execute(product);
        const productUpdated: IProductsEntity = {
            "idProduct":5,
            "name": "x-onion com Chocolate Atualizado",
            "description": "Um lanchão com muita cebola!",
            "image": "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
            "price": 23.50,
            "isVegan": false,
            "isGlutenFree":true,
            "isEnough":2,
            "category":5,
        };
        const readingProductUpdated: IProductsEntity = {
            "idProduct":5,
            "name": "x-onion com Chocolate Atualizado",
            "description": "Um lanchão com muita cebola!",
            "image": "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
            "price": 23.50,
            "isVegan": false,
            "isGlutenFree":true,
            "isEnough":2,
            "category":5,
        };
        expect(await productsUpdateUsecase.execute(productUpdated)).toMatchObject(readingProductUpdated);
        });
});