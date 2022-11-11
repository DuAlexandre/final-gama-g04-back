//Estrutura -> repositories -> pasta da entidade -> nome deste arquivo substituindo "example"
//Interface de metodos da entidade -> sintaxe = IExampleRepository
import { IProductsEntity } from "../../entities/products/products.entity";

export interface IProductsRepository {
    create(resource: IProductsEntity): Promise<IProductsEntity>,
    readById(resourceId: number): Promise<IProductsEntity | undefined>,
    deleteById(resourceId: number): Promise<void>,
    listAll(): Promise<IProductsEntity[]>,
    updateById(resource: IProductsEntity): Promise<IProductsEntity | undefined>
}