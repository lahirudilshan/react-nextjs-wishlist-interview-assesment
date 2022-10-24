import { IWishlist } from '../../interfaces/wishlist.interface';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { removeWishlistProductFailure, removeWishlistProductSuccess } from '../actions/wishlist-remove.action';
import { removeProductFromWishlist } from './../../services/wishlist.service';
import { WishlistRemoveConstant } from '../constants/wishlist-remove.constant';
import { IRemoveWishlistRequest } from '../interfaces/wishlist-remove.interface';

function* removeWishlistSaga({ payload }: IRemoveWishlistRequest) {
    try {
        const response: AxiosResponse<IWishlist[], any> = yield call(removeProductFromWishlist, { id: payload.id });

        yield put(
            removeWishlistProductSuccess({
                removeProduct: payload
            })
        );
    } catch (e: any) {
        yield put(
            removeWishlistProductFailure({
                error: e.message
            })
        );
    }
}

function* wishlistRemoveSaga() {
    yield all([
        takeLatest(WishlistRemoveConstant.REMOVE_WISHLIST_REQUEST, removeWishlistSaga)
    ]);
}


export default wishlistRemoveSaga;