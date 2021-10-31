import { IProduct } from '../../interfaces/product.interface';
import { ProductConstant } from '../constants/product.constant';

export interface IProductState {
    pending: boolean;
    products: IProduct[] | null;
    error: string | null;
}

export interface IFetchProductSuccessPayload {
    products: IProduct[]
}

export interface IFetchProductFailurePayload {
    error: string;
}

export interface IFetchProductRequest {
    type: typeof ProductConstant.FETCH_PRODUCT_REQUEST;
}

export type FetchProductSuccess = {
    type: typeof ProductConstant.FETCH_PRODUCT_SUCCESS;
    payload: IFetchProductSuccessPayload;
};

export type FetchProductFailure = {
    type: typeof ProductConstant.FETCH_PRODUCT_FAILURE;
    payload: IFetchProductFailurePayload;
};

export type TProductAction = IFetchProductRequest | FetchProductSuccess | FetchProductFailure;
