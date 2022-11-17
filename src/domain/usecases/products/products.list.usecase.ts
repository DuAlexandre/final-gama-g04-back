import productsRepository from "../../../adapters/repositories/products/products.repository";
import { IProductsEntity } from "../../entities/products/products.entity";
import { IProductsRepository } from "../../repositories/products/products.repository.interface";
import { IUseCase } from "../usecase.interface";

export class ListAllProductsUseCase implements IUseCase {
    
    constructor(private _repository: IProductsRepository) {}

    async execute(): Promise<IProductsEntity[] | undefined> {
        return await this._repository.listAll();
    }
}

export default new ListAllProductsUseCase(
    productsRepository
)