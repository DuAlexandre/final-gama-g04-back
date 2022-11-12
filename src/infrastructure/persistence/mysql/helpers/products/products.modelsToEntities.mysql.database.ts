
import { ICategoriesEntity } from "../../../../../domain/entities/categories/categories.entity";
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

    if(product.category){
        (product as ICategoriesEntity).idCategory = product.category.idCategory;
        (product as ICategoriesEntity).name = product.category.name;
     }



    return (productOne as IProductsEntity);
}