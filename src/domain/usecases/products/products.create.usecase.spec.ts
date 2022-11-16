import  { ProductsRepository } from "../../../adapters/repositories/products/products.repository";
import { IProductsEntity } from "../../entities/products/products.entity";
import {CreateProductUseCase } from "../products/products.create.usecase";

jest.mock('../../../adapters/repositories/products/products.repository');

const ProductsRepositoryMock = ProductsRepository as jest.Mock<ProductsRepository>;

describe('Test for product creation', () => {

    it('Should create a new product', async () => {
        const productRepository = new ProductsRepositoryMock() as jest.Mocked<ProductsRepository>;
        productRepository.create.mockResolvedValue({
            "idProduct": 1,
                "name": "Chevette",
                "description": "Corote, suco MID de Baunilha com Limão e Gelo de coco, pra sua felicidade! Valor da dose",
                "image": "https://c.pxhere.com/photos/79/35/alcoholic_beverage_cocktail_counter_drink_glasses_liquor_pour-1529499.jpg!d",
                "price": 2.50,
                "isVegan": true,
                "isGlutenFree":false,
                "isEnough":1,
                "category":1,
        });
        const product: IProductsEntity = {
            "name": "Chevette",
                    "description": "Corote, suco MID de Baunilha com Limão e Gelo de coco, pra sua felicidade! Valor da dose",
                    "image": "https://c.pxhere.com/photos/79/35/alcoholic_beverage_cocktail_counter_drink_glasses_liquor_pour-1529499.jpg!d",
                    "price": 2.50,
                    "isVegan": true,
                    "isGlutenFree":false,
                    "isEnough":1,
                    "category":1,
        };
    
        const createProductUseCase = new CreateProductUseCase(
            productRepository
        )
        expect(await createProductUseCase.execute(product)).toMatchObject(product);
    });
});