//Estrutura -> entities -> pasta da entidade -> nome deste arquivo substituindo "example"
//Interface da entidade -> sintaxe = IExampleEntity

export interface IProductsEntity {
    idProduct?: number,
    name: string,
    description: string,
    image?: string,
    price: number,
    isVegan: boolean,
    isGlutenFree: boolean,
    type: number,

}