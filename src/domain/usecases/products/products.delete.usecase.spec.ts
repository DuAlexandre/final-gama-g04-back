import productsRepository from "../../../adapters/repositories/products/products.repository";
import { IProductsRepository } from "../../repositories/products/products.repository.interface";
import { IUseCase } from "../usecase.interface";

class DeleteProductUseCase implements IUseCase {
    constructor(private _repository: IProductsRepository) {}

    async execute(data: {idProduct: number}): Promise<void> {
        return await this._repository.deleteById(data.idProduct);
    }
}

export default new DeleteProductUseCase(
    productsRepository
)