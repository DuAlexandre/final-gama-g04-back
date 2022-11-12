
import { IcategoryEntity } from "../../../../../domain/entities/categories/categories.entity";

export default function (category: any): IcategoryEntity | undefined {
    if (!category) {
        return;
    }

    let categoryOne: IcategoryEntity = {
        idCategory: category.idCategory,
        name: category.name,
    }

    return (categoryOne as IcategoryEntity);
}