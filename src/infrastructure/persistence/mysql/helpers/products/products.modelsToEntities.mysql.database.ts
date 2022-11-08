//Estrutura -> helpers -> pasta da entidade -> nome deste arquivo substituindo "example"
//Utilize esta função para retorno de Entity
import { IProductsEntity } from "../../../../../domain/entities/products/products.entity";

export default function (product: any): IProductsEntity | undefined {
    if (!product) {
        return;
    }

    let productOne: IProductsEntity = {
        idProduct: product.idProduct,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        isAvailable: product.isAvailable
    }

    return (productOne as IProductsEntity);
}