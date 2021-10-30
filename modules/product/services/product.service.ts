import { fetch } from '../../../shared/services/httpService';

export const getProducts = () => {
    return fetch({
        url: '/api/v1/products',
        method: 'GET'
    });
}