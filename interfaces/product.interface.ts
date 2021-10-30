import { IWishlist } from "./wishlist.interface";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    postBy: string;
    created_at?: Date;
    wishlist?: IWishlist[]
}