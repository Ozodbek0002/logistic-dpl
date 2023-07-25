import { ProductModel } from "./product.model";

export interface ProductGroupModel {
    id: number,
    name: string,
    details: ProductModel
}