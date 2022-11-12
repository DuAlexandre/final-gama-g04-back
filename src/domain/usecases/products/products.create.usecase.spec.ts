import { ProductsRepository } from "../../../adapters/repositories/products/products.repository"
import productsCreateUsecase from "./products.create.usecase";


jest.mock("../../../adapters/repositories/products/products.repository");
const ProductsRepositoryMock = ProductsRepository as jest.Mock<ProductsRepository>;

describe('Isolated unit test of product use case creation', () => {
    it('Should test the use cases of the products in the creation', () =>{

        const productsRepository = new ProductsRepositoryMock() as jest.Mocked<ProductsRepository>;
        productsRepository.create.mockResolvedValue({
                "name": "Name of product in Test",
                "description": "Description of product in test",
                "image": "https://storage.googleapis.com/grandchef-apps/gc3896/images/products/6007567642ef7.png",
                "price": 23.50,
                "isVegan": false,
                "isGlutenFree":true,
                "isEnough":"isEnought in test",
                "category":"category in Test",
        });
    });

expect(productsCreateUsecase).toMatchObject(ProductsRepositoryMock)
});
