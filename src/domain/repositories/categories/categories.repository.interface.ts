//Estrutura -> repositories -> pasta da entidade -> nome deste arquivo substituindo "example"
//Interface de metodos da entidade -> sintaxe = IExampleRepository

import { IcategoriesEntity } from "../../entities/categories/categories.entity";

export interface ICategoriesRepository {
    readById(resourceId: number): Promise<IcategoriesEntity | undefined>,
    listAll(): Promise<IcategoriesEntity[]>,
}