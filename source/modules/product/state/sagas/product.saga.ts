import { IProduct } from '../../interfaces/product.interface';
import { ProductConstant } from '../constants/product.constant';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from 'axios';
import { getProducts } from './../../services/product.service';
import { fetchProductsFailure, fetchProductsSuccess } from './../actions/product.action';

function* fetchProductSaga() {
    try {
        const response: AxiosResponse<IProduct[], any> = yield call(getProducts);

        yield put(
            fetchProductsSuccess({
                products: response.data
            })
        );
    } catch (e: any) {
        yield put(
            fetchProductsFailure({
                error: e.message
            })
        );
    }
}

/**
 * catch the action and run the function
 */
function* productSaga() {
    yield all([
        takeLatest(ProductConstant.FETCH_PRODUCT_REQUEST, fetchProductSaga)
    ]);
}


export default productSaga;