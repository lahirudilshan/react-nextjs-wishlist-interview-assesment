import { IProduct } from '../../interfaces/product.interface';
import { ProductConstant } from '../constants/product.constant';

export interface IProductState {
    pending: boolean;
    products: IProduct[] | null;
    error: string | null;
}

// payload interfaces
export interface IFetchProductSuccessPayload {
    products: IProduct[]
}

export interface IFetchProductFailurePayload {
    error: string;
}

// apis interfaces
export interface IFetchProductRequest {
    type: typeof ProductConstant.FETCH_PRODUCT_REQUEST;
}

export type TFetchProductSuccess = {
    type: typeof ProductConstant.FETCH_PRODUCT_SUCCESS;
    payload: IFetchProductSuccessPayload;
};

export type TFetchProductFailure = {
    type: typeof ProductConstant.FETCH_PRODUCT_FAILURE;
    payload: IFetchProductFailurePayload;
};

// available actions
export type TProductAction = IFetchProductRequest | TFetchProductSuccess | TFetchProductFailure;
