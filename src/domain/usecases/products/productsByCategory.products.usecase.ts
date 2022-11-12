import { IProductsRepository } from "../../repositories/products/products.repository.interface";
import { IUseCase } from "../usecase.interface";
import productsRepository, { ProductsRepository } from "../../../adapters/repositories/products/products.repository";

export class ProductsByCategoryUseCase implements IUseCase {
    constructor(private _repository: IProductsRepository){

    }

    async execute(category: number) {
        return await this._repository.groupProductsByCategory(category);
    }
}

export default new ProductsByCategoryUseCase(
    productsRepository
)