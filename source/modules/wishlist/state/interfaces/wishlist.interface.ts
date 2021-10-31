import { IWishlist } from '../../interfaces/wishlist.interface';
import { WishlistConstant } from '../constants/wishlist.constant';
import { TWishlistRemoveAction } from './wishlist-remove.interface';
import { TWishlistSaveAction } from './wishlist-save.interface';

export interface IWishlistState {
    pending: boolean;
    wishlist: IWishlist[];
    error: string | null;
}

// payload interfaces
export interface IFetchWishlistSuccessPayload {
    wishlist: IWishlist[]
}

export interface IFetchWishlistFailurePayload {
    error: string;
}

// actions interdaces
export interface IFetchWishlistRequest {
    type: typeof WishlistConstant.FETCH_WISHLIST_REQUEST;
}

export type TFetchWishlistSuccess = {
    type: typeof WishlistConstant.FETCH_WISHLIST_SUCCESS;
    payload: IFetchWishlistSuccessPayload;
};

export type TFetchWishlistFailure = {
    type: typeof WishlistConstant.FETCH_WISHLIST_FAILURE;
    payload: IFetchWishlistFailurePayload;
};

// available actions
export type TWishlistAction = IFetchWishlistRequest | TFetchWishlistSuccess | TFetchWishlistFailure | TWishlistRemoveAction | TWishlistSaveAction;