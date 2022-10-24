import { IWishlist } from '../../interfaces/wishlist.interface';
import { WishlistConstant } from '../constants/wishlist.constant';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { getWishlist } from '../../services/wishlist.service';
import { fetchWishlistFailure, fetchWishlistSuccess } from '../actions/wishlist.action';

function* fetchWishlistSaga() {
    try {
        const response: AxiosResponse<IWishlist[], any> = yield call(getWishlist);

        yield put(
            fetchWishlistSuccess({
                wishlist: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchWishlistFailure({
                error: e.message
            })
        );
    }
}

function* wishlistSaga() {
    yield all([
        takeLatest(WishlistConstant.FETCH_WISHLIST_REQUEST, fetchWishlistSaga)
    ]);
}


export default wishlistSaga;