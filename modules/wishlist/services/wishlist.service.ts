import { IProduct } from '../../product/interfaces/product.interface';
import { fetch } from '../../../shared/services/httpService';
import { AxiosResponse } from 'axios';
import { IWishlist, IWishlistRemoveResponse, IWishlistSaveResponse } from '../interfaces/wishlist.interface';

/**
 * save favorite products in wishlist
 * @param product IProduct
 * @returns Promise<AxiosResponse<IWishlistSaveResponse>>
 */
export const saveProductInWishlist = (product: IProduct): Promise<AxiosResponse<IWishlistSaveResponse>> => {
    if (!product) throw new Error('Product params should be passed to the "saveProductInWishlist" function');

    return fetch({
        url: '/api/v1/user/wishlist',
        method: 'POST',
        data: product
    });
}

/**
 * get wishlist products
 * @returns Promise<AxiosResponse<IWishlist[]>>
 */
export const getWishlist = (): Promise<AxiosResponse<IWishlist[]>> => {
    return fetch({
        url: '/api/v1/user/wishlist',
        method: 'GET'
    });
}

/**
 * remove product from wishlist
 * @param { id: number }
 * @returns Promise<AxiosResponse<IWishlistRemoveResponse>>
 */
export const removeProductFromWishlist = ({ id }: { id: number }): Promise<AxiosResponse<IWishlistRemoveResponse>> => {
    if (!id) throw new Error('Product ID should be passed to remove product from wishlist');

    return fetch({
        url: `/api/v1/user/wishlist/${id}`,
        method: 'DELETE'
    });
}