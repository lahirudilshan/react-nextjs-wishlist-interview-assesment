import { WishlistConstant } from '../constants/wishlist.constant';
import { IFetchWishlistRequest, TFetchWishlistSuccess, TFetchWishlistFailure, IFetchWishlistSuccessPayload, IFetchWishlistFailurePayload } from '../interfaces/wishlist.interface';

/**
 * wishlist fetch actions
 */
export const fetchWishlistRequest = (): IFetchWishlistRequest => ({
    type: WishlistConstant.FETCH_WISHLIST_REQUEST
});

export const fetchWishlistSuccess = (payload: IFetchWishlistSuccessPayload): TFetchWishlistSuccess => ({
    type: WishlistConstant.FETCH_WISHLIST_SUCCESS,
    payload
});

export const fetchWishlistFailure = (payload: IFetchWishlistFailurePayload): TFetchWishlistFailure => ({
    type: WishlistConstant.FETCH_WISHLIST_FAILURE,
    payload
});