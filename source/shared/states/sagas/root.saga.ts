import { all, fork } from '@redux-saga/core/effects';
import productSaga from '../../../modules/product/state/sagas/product.saga';
import wishlistSaga from './../../../modules/wishlist/state/sagas/wishlist.saga';
import wishlistRemoveSaga from './../../../modules/wishlist/state/sagas/wishlist-remove.saga';
import wishlistSaveSaga from './../../../modules/wishlist/state/sagas/wishlist-save.saga';

export default function* rootSaga() {
    yield all([
        fork(productSaga),
        fork(wishlistSaga),
        fork(wishlistSaveSaga),
        fork(wishlistRemoveSaga)
    ])
}