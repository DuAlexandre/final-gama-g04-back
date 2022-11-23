import productsReadUsecase from "./products.read.usecase";
import productsCreateUsecase from "./products.create.usecase";
import { IProductsEntity } from "../../entities/products/products.entity";
import productsDeleteUsecase from "./products.delete.usecase";


describe("Unit Test for reading the products in the use cases", () => {
    it("Should read the products in the use cases", async () => {
        const product: IProductsEntity = {
            "name": "Combo Veggie",
            "description": "Porção de Edamane (feijão de soja) cozido no vapor e salada de algas wakame marinada em óleo de gergelim e pimenta ",
            "image": "https://res.cloudinary.com/diiwq3le6/image/upload/v1668864015/combo_veggie_ba8p2w.jpg",
            "price": 17.9,
            "isVegan": true,
            "isGlutenFree": true,
            "isEnough": 1,
            "category": 1
        };
        await productsCreateUsecase.execute(product);
        const productRead: IProductsEntity = {
            "name": "Combo Veggie",
            "description": "Porção de Edamane (feijão de soja) cozido no vapor e salada de algas wakame marinada em óleo de gergelim e pimenta ",
            "image": "https://res.cloudinary.com/diiwq3le6/image/upload/v1668864015/combo_veggie_ba8p2w.jpg",
            "price": 17.9,
            "isVegan": true,
            "isGlutenFree": true,
            "isEnough": 1,
            "category": 1
        };
        expect(await productsReadUsecase.execute({ idProduct: 25})).toMatchObject(productRead)
    })
})
