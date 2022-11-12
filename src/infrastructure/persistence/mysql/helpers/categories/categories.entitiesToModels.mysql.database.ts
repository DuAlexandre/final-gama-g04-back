import { ICategoriesEntity } from "../../../../../domain/entities/categories/categories.entity";

export default function (category: ICategoriesEntity) {

    const categoryOne = {
        idCategory: category.idCategory,
        name: category.name,

    }

    return { categoryOne: categoryOne };
}