
import { ICategoriesEntity } from "../../../../../domain/entities/categories/categories.entity";

export default function (category: any): ICategoriesEntity | undefined {
    if (!category) {
        return;
    }

    let categoryOne: ICategoriesEntity = {
        idCategory: category.idCategory,
        name: category.name,
    }

    return (categoryOne as ICategoriesEntity);
}