import { IProduct } from "../../product/interfaces/product.interface";

export interface IWishlist {
    id: number;
    product_id: number;
    created_at: Date;
    products: IProduct | null
}
// apis response interfaces
export interface IWishlistSaveResponse {
    id: number;
    product_id: string;
    created_at: Date;
}
// apis response interfaces
export interface IWishlistRemoveResponse {
    count: number;
}