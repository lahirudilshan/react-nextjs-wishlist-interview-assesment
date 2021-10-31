import { fetch } from '../../../shared/services/httpService';
import { IProduct } from '../interfaces/product.interface';
import { AxiosResponse } from 'axios';

/**
 * get list of available products
 * @returns Promise<AxiosResponse<IProduct[]>>
 */
export const getProducts = (): Promise<AxiosResponse<IProduct[]>> => {
    return fetch({
        url: '/api/v1/products',
        method: 'GET'
    });
}