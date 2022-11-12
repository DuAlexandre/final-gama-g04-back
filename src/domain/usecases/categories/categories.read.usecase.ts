
import categoriesRepository from "../../../adapters/repositories/categories/categories.repository";
import { ICategoriesEntity } from "../../entities/categories/categories.entity";
import { ICategoriesRepository } from "../../repositories/categories/categories.repository.interface";
import { IUseCase } from "../usecase.interface";

class ReadCategoryUseCase implements IUseCase {
    
    constructor(private _repository: ICategoriesRepository) {}

    async execute(data: {idProduct: number}): Promise<ICategoriesEntity | undefined> {
        return await this._repository.readById(data.idProduct);
    }
}

export default new ReadCategoryUseCase(
    categoriesRepository
)