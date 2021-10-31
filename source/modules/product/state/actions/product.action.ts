import { ProductConstant } from '../constants/product.constant';
import { IFetchProductRequest, TFetchProductSuccess, TFetchProductFailure, IFetchProductSuccessPayload, IFetchProductFailurePayload } from '../interfaces/product.interface';

export const fetchProductRequest = (): IFetchProductRequest => ({
    type: ProductConstant.FETCH_PRODUCT_REQUEST
});

export const fetchProductsSuccess = (payload: IFetchProductSuccessPayload): TFetchProductSuccess => ({
    type: ProductConstant.FETCH_PRODUCT_SUCCESS,
    payload
});

export const fetchProductsFailure = (payload: IFetchProductFailurePayload): TFetchProductFailure => ({
    type: ProductConstant.FETCH_PRODUCT_FAILURE,
    payload
});