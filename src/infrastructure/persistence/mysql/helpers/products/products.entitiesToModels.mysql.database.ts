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
        isEnough: product.isEnough,
    }

    let category = undefined;
    if ('category' in product) {
        category = {...product.category}
    };

    return { 
        productOne: productOne , 
        category: category,
    };
}