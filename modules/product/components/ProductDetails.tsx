import React from 'react';
import { IProduct } from '../../modules/product/interfaces/product.interface';

const ProductDetails = ({ product }: { product: IProduct }) => {
    return (
        <div className="absolute bottom-2 left-4">
            <div className="text-gray-100">{product.name}</div>
            <div className="font-bold text-white">USD {product.price}</div>
        </div>
    );
}

export default ProductDetails
