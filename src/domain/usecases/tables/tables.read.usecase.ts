import tablesRepository from "../../../adapters/repositories/tables/tables.repository";
import { ITablesEntity } from "../../entities/tables/tables.entity";
import { ITablesRepository } from "../../repositories/tables/tables.repository.interface";
import { IUseCase } from "../usecase.interface";

class ReadTableUseCase implements IUseCase{
    constructor(private _repository: ITablesRepository){}

    async execute(data: {id: number}): Promise<ITablesEntity | undefined> {
        return await this._repository.readById(data.id);        
    }
}

export default new ReadTableUseCase(
    tablesRepository
);
