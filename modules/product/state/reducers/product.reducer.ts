import { ProductConstant } from '../constants/product.constant';
import { IProductState, TProductAction } from '../interfaces/product.interface';

const initialState: IProductState = {
    pending: false,
    products: null,
    error: null
};

export default (state = initialState, action: TProductAction) => {
    switch (action.type) {
        case ProductConstant.FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                pending: true
            };
        case ProductConstant.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload.products,
                error: null
            };
        case ProductConstant.FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                pending: false,
                products: [],
                error: action.payload.error
            }
        default:
            return {
                ...state
            };
    }
}