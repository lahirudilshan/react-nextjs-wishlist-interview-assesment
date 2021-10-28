import React from 'react';
import { IProduct } from '../../interfaces/product.interface';

const Details = ({ product }: { product: IProduct }) => {
    return (
        <div className="absolute bottom-2 left-4">
            <div className="text-gray-100">Awesome {product.name} pictures</div>
            <div className="font-bold text-white">AED {product.price}</div>
        </div>
    )
}

export default Details
