import { IWishlist } from '../../interfaces/wishlist.interface';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { saveWishlistProductFailure, saveWishlistProductSuccess } from '../actions/wishlist-save.action';
import { saveProductInWishlist } from '../../services/wishlist.service';
import { WishlistSaveConstant } from '../constants/wishlist-save.constant';
import { ISaveWishlistRequest } from '../interfaces/wishlist-save.interface';

function* saveWishlistSaga({ payload }: ISaveWishlistRequest) {
    try {
        const response: AxiosResponse<IWishlist, any> = yield call(saveProductInWishlist, payload);
        console.log('saga', payload);

        yield put(
            saveWishlistProductSuccess({
                ...response.data,
                products: payload
            })
        );
    } catch (e: any) {
        yield put(
            saveWishlistProductFailure({
                error: e.message
            })
        );
    }
}

function* wishlistSaveSaga() {
    yield all([
        takeLatest(WishlistSaveConstant.SAVE_WISHLIST_REQUEST, saveWishlistSaga)
    ]);
}


export default wishlistSaveSaga;