import tablesRepository from "../../../adapters/repositories/tables/tables.repository";
import { ITablesRepository } from "../../repositories/tables/tables.repository.interface";
import { IUseCase } from "../usecase.interface";

class DeleteTableUseCase implements IUseCase{
    constructor(private _repository: ITablesRepository){}

    async execute(data: {id: number}): Promise<void> {
        return await this._repository.deleteById(data.id);        
    }
}

export default new DeleteTableUseCase(
    tablesRepository
);
