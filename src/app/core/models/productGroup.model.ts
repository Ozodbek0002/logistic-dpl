import { ProductCubeModel, ProductSlinderModel } from "./product.model";

export interface ProductGroupModel {
    id: number,
    name: string,
    details: ProductCubeModel[] | ProductSlinderModel[]
}