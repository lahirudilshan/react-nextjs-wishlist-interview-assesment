import { IProduct } from '../../../product/interfaces/product.interface';
import { IWishlist } from '../../interfaces/wishlist.interface';
import { WishlistSaveConstant } from '../constants/wishlist-save.constant';

export interface IWishlistSaveState {
    pending: boolean;
    wishlist: IWishlist[];
    error: string | null;
}

export interface ISaveWishlistSuccessPayload {
    id: number;
    product_id: number;
    created_at: Date;
    products: IProduct | null
}

export interface ISaveWishlistFailurePayload {
    error: string;
}

// export interface ISaveWishlistRequestPayload {
//     wishlistProduct: IWishlist;
// }

export interface ISaveWishlistRequest {
    type: typeof WishlistSaveConstant.SAVE_WISHLIST_REQUEST;
    payload: IProduct
}

export type ISaveWishlistSuccess = {
    type: typeof WishlistSaveConstant.SAVE_WISHLIST_SUCCESS;
    payload: ISaveWishlistSuccessPayload;
};

export type ISaveWishlistFailure = {
    type: typeof WishlistSaveConstant.SAVE_WISHLIST_FAILURE;
    payload: ISaveWishlistFailurePayload;
};

export type TWishlistSaveAction = ISaveWishlistRequest | ISaveWishlistSuccess | ISaveWishlistFailure;