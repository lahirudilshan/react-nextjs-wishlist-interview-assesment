import React from 'react';
import ProductLikes from './ProductLikes';
import ProductTags from './ProductTags';
import { IProduct } from './../interfaces/product.interface';

const ProductDescription = ({ product }: { product: IProduct }) => {
    return (
        <div className="mx-2">
            <ProductLikes product={product} />
            <div className="mt-2 text-gray-800">A simple {product.name} description</div>
            <ProductTags />
            <div className="font-normal text-gray-400 mt-3 mb-6">View {product.name.length + 7} comments</div>
        </div>
    )
}

export default ProductDescription
