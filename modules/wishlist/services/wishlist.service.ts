import { IProduct } from '../../product/interfaces/product.interface';
import { fetch } from '../../../shared/services/httpService';

export const saveProductInWishlist = (product: IProduct) => {
    if (!product) throw new Error('Product params should be passed to the "saveProductInWishlist" function');

    return fetch({
        url: '/api/v1/user/wishlist',
        method: 'POST',
        data: product
    });
}

export const getWishlist = () => {
    return fetch({
        url: '/api/v1/user/wishlist',
        method: 'GET'
    });
}

export const removeProductFromWishlist = ({ id }: { id: number }) => {
    if (!id) throw new Error('Product ID should be passed to remove product from wishlist');

    return fetch({
        url: `/api/v1/user/wishlist/${id}`,
        method: 'DELETE'
    });
}