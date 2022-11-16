import productsReadUsecase from "./products.read.usecase";
import productsCreateUsecase from "./products.create.usecase";
import { IProductsEntity } from "../../entities/products/products.entity";
import productsDeleteUsecase from "./products.delete.usecase";


describe("Unit Test for reading the products in the use cases", () => {
    it("Should read the products in the use cases", async () => {
        const product: IProductsEntity = {
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
        const productRead: IProductsEntity = {
                "name": "x-onion com Chocolate",
                "description": "Um lanchão com muita cebola!",
                "image": "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
                "price": 23.50,
                "isVegan": false,
                "isGlutenFree":true,
                "isEnough":2,
                "category":5,
        };
        expect(await productsReadUsecase.execute({ idProduct: 5})).toMatchObject(productRead)
    })
})
