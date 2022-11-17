import productsRepository from "../../../adapters/repositories/products/products.repository";
import { IProductsEntity } from "../../entities/products/products.entity";
import { IProductsRepository } from "../../repositories/products/products.repository.interface";
import { IUseCase } from "../usecase.interface";

export class CreateProductUseCase implements IUseCase {
    
    constructor(private _repository: IProductsRepository) {}

    async execute(data: IProductsEntity): Promise<IProductsEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateProductUseCase(
    productsRepository
);
