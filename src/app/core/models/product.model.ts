export interface ProductModel {
    id: number,
    name: string,
    icon: string,
    image: string,
    parametrs: ProductParametrModel[]
};



export interface ProductParametrModel {
    name: string,
    label: string,
    unity: string | undefined,
    value: number | undefined
}




export interface UserProductModel {
    id: number,
    name: string,
    product: ProductModel[]
}

