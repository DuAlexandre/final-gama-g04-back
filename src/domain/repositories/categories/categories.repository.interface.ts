//Estrutura -> repositories -> pasta da entidade -> nome deste arquivo substituindo "example"
//Interface de metodos da entidade -> sintaxe = IExampleRepository

import { ICategoriesEntity } from "../../entities/categories/categories.entity";

export interface ICategoriesRepository {
    readById(resourceId: number): Promise<ICategoriesEntity | undefined>,
    listAll(): Promise<ICategoriesEntity[]>,
}