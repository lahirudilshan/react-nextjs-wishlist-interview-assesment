import React, { useState } from 'react'
import Avatar from '../../../shared/components/Avatar';
import { IProduct } from '../interfaces/product.interface';
import Image from 'next/image';
import Details from './ProductDetails';
import CircleButton from '../../../shared/components/buttons/CircleButtons';
import ProductDescription from './ProductDescription';
import { useDispatch } from 'react-redux';
import { removeWishlistProductRequest } from './../../wishlist/state/actions/wishlist-remove.action';
import { saveWishlistProductRequest } from './../../wishlist/state/actions/wishlist-save.action';

const ProductCard = ({ product }: { product: IProduct }) => {
    // hooks
    const dispatch = useDispatch();

    // states
    const [isInWishlist, setIsInWishlist] = useState<boolean>((product.wishlist?.length) ? true : false);

    /**
     * add product to user wishlist
     * @param product IProduct
     * @returns void
     */
    const handleAction = (product: IProduct) => {
        if (isInWishlist) {
            dispatch(removeWishlistProductRequest(product));
            setIsInWishlist(false);
        } else {
            dispatch(saveWishlistProductRequest(product));
            setIsInWishlist(true);
        }
    }

    return (
        <div key={product?.id} className="group">
            <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 z-auto lg:bg-gradient-to-b lg:from-transparent lg:to-black lg:z-auto">
                <Avatar product={product} />
                <Image src={product?.image} alt="product image" layout="responsive"
                    className="w-full h-full object-center object-cover group-hover:opacity-50 opacity-75 transition-all duration-200" width="200px" height="200px" />
                <Details product={product} />
                <div onClick={() => handleAction(product)}>
                    <CircleButton variant={isInWishlist ? 'active' : 'inactive'} />
                </div>
            </div>
            <ProductDescription product={product} />
        </div>
    )
}

export default ProductCard