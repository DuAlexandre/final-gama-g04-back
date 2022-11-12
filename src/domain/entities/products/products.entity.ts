import { ICategoriesEntity } from "../categories/categories.entity";

export interface IProductsEntity {
    idProduct?: number,
    name: string,
    description: string,
    image?: string,
    price: number,
    isVegan: boolean,
    isGlutenFree: boolean,
    isEnough: string,
    category: ICategoriesEntity,

}