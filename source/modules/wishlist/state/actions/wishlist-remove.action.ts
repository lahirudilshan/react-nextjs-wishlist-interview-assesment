import { WishlistRemoveConstant } from '../constants/wishlist-remove.constant';
import { IRemoveWishlistRequest, IRemoveWishlistSuccessPayload, IRemoveWishlistSuccess, IRemoveWishlistFailure } from '../interfaces/wishlist-remove.interface';
import { IRemoveWishlistFailurePayload } from '../interfaces/wishlist-remove.interface';
import { IProduct } from './../../../product/interfaces/product.interface';

/**
 * wishlist remove actions
 */
export const removeWishlistProductRequest = (payload: IProduct): IRemoveWishlistRequest => ({
    type: WishlistRemoveConstant.REMOVE_WISHLIST_REQUEST,
    payload
});

export const removeWishlistProductSuccess = (payload: IRemoveWishlistSuccessPayload): IRemoveWishlistSuccess => ({
    type: WishlistRemoveConstant.REMOVE_WISHLIST_SUCCESS,
    payload
});

export const removeWishlistProductFailure = (payload: IRemoveWishlistFailurePayload): IRemoveWishlistFailure => ({
    type: WishlistRemoveConstant.REMOVE_WISHLIST_FAILURE,
    payload
});