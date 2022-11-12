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
        isVegan: product.isVegan,
        isGlutenFree: product.isGlutenFree,
        isEnough: product.isEnough,
        category: product.category,
    }

    return (productOne as IProductsEntity);
}