import { IProduct } from '../../../product/interfaces/product.interface';
import { IWishlist } from '../../interfaces/wishlist.interface';
import { WishlistRemoveConstant } from '../constants/wishlist-remove.constant';

export interface IWishlistRemoveState {
    pending: boolean;
    wishlist: IWishlist[];
    error: string | null;
}

// payload interfaces
export interface IRemoveWishlistSuccessPayload {
    removeProduct: IProduct | null
}

export interface IRemoveWishlistFailurePayload {
    error: string;
}

// actions interfaces
export interface IRemoveWishlistRequest {
    type: typeof WishlistRemoveConstant.REMOVE_WISHLIST_REQUEST;
    payload: IProduct
}

export type IRemoveWishlistSuccess = {
    type: typeof WishlistRemoveConstant.REMOVE_WISHLIST_SUCCESS;
    payload: IRemoveWishlistSuccessPayload;
};

export type IRemoveWishlistFailure = {
    type: typeof WishlistRemoveConstant.REMOVE_WISHLIST_FAILURE;
    payload: IRemoveWishlistFailurePayload;
};

// available actions
export type TWishlistRemoveAction = IRemoveWishlistRequest | IRemoveWishlistSuccess | IRemoveWishlistFailure;