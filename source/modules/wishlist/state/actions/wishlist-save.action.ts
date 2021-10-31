import { WishlistSaveConstant } from '../constants/wishlist-save.constant';
import { ISaveWishlistRequest, ISaveWishlistSuccessPayload, ISaveWishlistSuccess, ISaveWishlistFailure } from '../interfaces/wishlist-save.interface';
import { ISaveWishlistFailurePayload } from '../interfaces/wishlist-save.interface';
import { IProduct } from '../../../product/interfaces/product.interface';

/**
 * wishlist save actions
 */
export const saveWishlistProductRequest = (payload: IProduct): ISaveWishlistRequest => ({
    type: WishlistSaveConstant.SAVE_WISHLIST_REQUEST,
    payload
});

export const saveWishlistProductSuccess = (payload: ISaveWishlistSuccessPayload): ISaveWishlistSuccess => ({
    type: WishlistSaveConstant.SAVE_WISHLIST_SUCCESS,
    payload
});

export const saveWishlistProductFailure = (payload: ISaveWishlistFailurePayload): ISaveWishlistFailure => ({
    type: WishlistSaveConstant.SAVE_WISHLIST_FAILURE,
    payload
});