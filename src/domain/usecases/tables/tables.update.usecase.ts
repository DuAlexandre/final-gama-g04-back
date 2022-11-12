import tablesRepository from "../../../adapters/repositories/tables/tables.repository";
import { ITablesEntity } from "../../entities/tables/tables.entity";
import { ITablesRepository } from "../../repositories/tables/tables.repository.interface";
import { IUseCase } from "../usecase.interface";

class UpdateTableUseCase implements IUseCase{
    constructor(private _repository: ITablesRepository){}

    async execute(data: ITablesEntity): Promise<ITablesEntity | undefined> {
        return await this._repository.updateById(data);        
    }
}

export default new UpdateTableUseCase(
    tablesRepository
);
