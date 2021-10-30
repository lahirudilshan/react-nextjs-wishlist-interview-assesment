import { fetch } from './shared/httpService';

export const getProducts = () => {
    return fetch({
        url: '/api/v1/products',
        method: 'GET'
    });
}