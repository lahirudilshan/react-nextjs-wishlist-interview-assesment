import { IProduct } from "./product.interface";

export interface IWishlist {
    id: number;
    product_id: string;
    created_at: Date;
    products: IProduct
}