//Estrutura -> helpers -> pasta da entidade -> nome deste arquivo substituindo "example"
//Utilize esta função para retorno de Modelo
import { IProductsEntity } from "../../../../../domain/entities/products/products.entity";

export default function (product: IProductsEntity) {

    const productOne = {
        idProduct: product.idProduct,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        isVegan: product.isVegan,
        isGlutenFree: product.isGlutenFree,
        type: product.type,
    }

    return { productOne: productOne };
}