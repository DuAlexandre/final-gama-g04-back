
import categoriesRepository from "../../../adapters/repositories/categories/categories.repository";
import { ICategoriesEntity } from "../../entities/categories/categories.entity";
import { ICategoriesRepository } from "../../repositories/categories/categories.repository.interface";
import { IUseCase } from "../usecase.interface";

class ListAllCategoriesUseCase implements IUseCase {
    
    constructor(private _repository: ICategoriesRepository) {}

    async execute(): Promise<ICategoriesEntity[] | undefined> {
        return await this._repository.listAll();
    }
}

export default new ListAllCategoriesUseCase(
    categoriesRepository
)