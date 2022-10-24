import { IWishlist } from '../../interfaces/wishlist.interface';
import { WishlistRemoveConstant } from '../constants/wishlist-remove.constant';
import { WishlistSaveConstant } from '../constants/wishlist-save.constant';
import { WishlistConstant } from '../constants/wishlist.constant';
import { IRemoveWishlistSuccess } from '../interfaces/wishlist-remove.interface';
import { ISaveWishlistSuccess } from '../interfaces/wishlist-save.interface';
import { IWishlistState, TWishlistAction } from '../interfaces/wishlist.interface';

const initialState: IWishlistState = {
    pending: false,
    wishlist: [],
    error: null
};

/**
 * remove product from user wishlist
 * @param state IWishlistState
 * @param action TWishlistAction
 * @returns IWishlist[]
 */
const removeProductFromWishlist = (state: IWishlistState, action: IRemoveWishlistSuccess) => {
    return state.wishlist?.filter((wishlist: IWishlist) => Number(wishlist.product_id) !== action.payload.removeProduct?.id) || [];
}

/**
 * save product in user wishlist
 * @param state IWishlistState
 * @param action TWishlistAction
 * @returns IWishlist[]
 */
const saveProductInWishlist = (state: IWishlistState, action: ISaveWishlistSuccess) => {
    return [
        action.payload,
        ...state.wishlist
    ];
}

export default (state = initialState, action: TWishlistAction) => {
    switch (action.type) {
        /**
         * fetch actions
         */
        case WishlistConstant.FETCH_WISHLIST_REQUEST:
            return {
                ...state,
                pending: true
            };
        case WishlistConstant.FETCH_WISHLIST_SUCCESS:
            return {
                ...state,
                pending: false,
                wishlist: action.payload.wishlist,
                error: null
            };
        case WishlistConstant.FETCH_WISHLIST_FAILURE:
            return {
                ...state,
                pending: false,
                wishlist: [],
                error: action.payload.error
            }

        /**
         * remove actions
         */
        case WishlistRemoveConstant.REMOVE_WISHLIST_REQUEST:
            return {
                ...state,
                pending: true
            };
        case WishlistRemoveConstant.REMOVE_WISHLIST_SUCCESS:
            return {
                ...state,
                pending: false,
                wishlist: removeProductFromWishlist(state, action),
                error: null
            };
        case WishlistRemoveConstant.REMOVE_WISHLIST_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        /**
         * save actions
         */
        case WishlistSaveConstant.SAVE_WISHLIST_REQUEST:
            return {
                ...state,
                pending: true
            };
        case WishlistSaveConstant.SAVE_WISHLIST_SUCCESS:
            return {
                ...state,
                pending: false,
                wishlist: saveProductInWishlist(state, action),
                error: null
            };
        case WishlistSaveConstant.SAVE_WISHLIST_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default:
            return {
                ...state
            };
    }
}