import productsRepository from "../../../adapters/repositories/products/products.repository";
import { IProductsEntity } from "../../entities/products/products.entity";
import { IProductsRepository } from "../../repositories/products/products.repository.interface";
import { IUseCase } from "../usecase.interface";

class ReadProductUseCase implements IUseCase {
    
    constructor(private _repository: IProductsRepository) {}

    async execute(data: {idProduct: number}): Promise<IProductsEntity | undefined> {
        return await this._repository.readById(data.idProduct);
    }
}

export default new ReadProductUseCase(
    productsRepository
)