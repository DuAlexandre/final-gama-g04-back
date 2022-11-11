//Estrutura -> usecases -> pasta da entidade -> nome deste arquivo substituindo "example" e
//método substituindo "method" Ex: create, delete, etc
//Classe do método -> sintaxe: MethodExampleUseCase; Ex: CreateUserUseCase
import productsRepository from "../../../adapters/repositories/products/products.repository";
import { IProductsEntity } from "../../entities/products/products.entity";
import { IProductsRepository } from "../../repositories/products/products.repository.interface";
import { IUseCase } from "../usecase.interface";

class CreateProductUseCase implements IUseCase {
    
    constructor(private _repository: IProductsRepository) {}

    async execute(data: IProductsEntity): Promise<IProductsEntity | undefined> {
        return await this._repository.create(data);
    }
}

export default new CreateProductUseCase(
    productsRepository
);
