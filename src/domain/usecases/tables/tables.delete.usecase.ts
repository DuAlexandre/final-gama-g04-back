import tablesRepository from "../../../adapters/repositories/tables/tables.repository";
import { ITablesRepository } from "../../repositories/tables/tables.repository.interface";
import { IUseCase } from "../usecase.interface";

class DeleteTableUseCase implements IUseCase{
    constructor(private _repository: ITablesRepository){}

    async execute(data: {IdTable: number}): Promise<void> {
        return await this._repository.deleteById(data.IdTable);        
    }
}

export default new DeleteTableUseCase(
    tablesRepository
);
