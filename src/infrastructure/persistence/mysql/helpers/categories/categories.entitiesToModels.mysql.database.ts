import { IcategoryEntity } from "../../../../../domain/entities/categories/categories.entity";

export default function (category: IcategoryEntity) {

    const categoryOne = {
        idCategory: category.idCategory,
        name: category.name,

    }

    return { categoryOne: categoryOne };
}