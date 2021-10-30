import React from 'react'
import { IoHeart } from 'react-icons/io5'
import { IProduct } from '../../modules/product/interfaces/product.interface';

const ProductLikes = ({ product }: { product: IProduct }) => {
    return (
        <div className="flex items-center mt-2 font-bold">
            <IoHeart className="text-xl lg:text-lg" /> <span className="ml-2">{product.name.length} likes</span>
        </div>
    )
}

export default ProductLikes
