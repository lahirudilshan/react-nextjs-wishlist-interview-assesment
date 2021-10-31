import { IWishlist } from '../../interfaces/wishlist.interface';
import { WishlistConstant } from '../constants/wishlist.constant';
import { TWishlistRemoveAction } from './wishlist-remove.interface';
import { TWishlistSaveAction } from './wishlist-save.interface';

export interface IWishlistState {
    pending: boolean;
    wishlist: IWishlist[];
    error: string | null;
}

export interface IFetchWishlistSuccessPayload {
    wishlist: IWishlist[]
}

export interface IFetchWishlistFailurePayload {
    error: string;
}

export interface IFetchWishlistRequest {
    type: typeof WishlistConstant.FETCH_WISHLIST_REQUEST;
}

export type FetchWishlistSuccess = {
    type: typeof WishlistConstant.FETCH_WISHLIST_SUCCESS;
    payload: IFetchWishlistSuccessPayload;
};

export type FetchWishlistFailure = {
    type: typeof WishlistConstant.FETCH_WISHLIST_FAILURE;
    payload: IFetchWishlistFailurePayload;
};

export type TWishlistAction = IFetchWishlistRequest | FetchWishlistSuccess | FetchWishlistFailure | TWishlistRemoveAction | TWishlistSaveAction;