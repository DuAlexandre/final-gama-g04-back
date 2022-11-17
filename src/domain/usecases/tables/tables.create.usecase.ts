import tablesRepository from "../../../adapters/repositories/tables/tables.repository";
import { ITablesEntity } from "../../entities/tables/tables.entity";
import { ITablesRepository } from "../../repositories/tables/tables.repository.interface";
import { IUseCase } from "../usecase.interface";

export class CreateTableUseCase implements IUseCase{

    constructor(private _repository: ITablesRepository){}

    async execute(data: ITablesEntity): Promise<ITablesEntity | undefined> {
        return await this._repository.create(data);        
    }
}

export default new CreateTableUseCase(
    tablesRepository
);
