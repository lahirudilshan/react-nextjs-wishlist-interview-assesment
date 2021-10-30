import React, { useState } from 'react'
import Avatar from '../../../shared/components/Avatar';
import { IProduct } from '../interfaces/product.interface';
import Image from 'next/image';
import Details from './ProductDetails';
import CircleButton from '../../../shared/components/buttons/CircleButtons';
import ProductDescription from './ProductDescription';
import { saveProductInWishlist } from '../../wishlist/services/wishlist.service';
import { removeProductFromWishlist } from '../../wishlist/services/wishlist.service';

const ProductCard = ({ product }: { product: IProduct }) => {
    const [isInWishlist, setIsInWishlist] = useState<boolean>((product.wishlist?.length) ? true : false);

    /**
     * add product to user wishlist
     * @param product IProduct
     * @returns void
     */
    const handleAction = (product: IProduct) => {
        console.log(isInWishlist, 'isInWishlist');

        if (isInWishlist) {
            removeProductFromWishlist({ id: product.id })
                .then((response) => {
                    console.log(response);

                    if (response.status === 200) setIsInWishlist(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            saveProductInWishlist(product)
                .then((response) => {
                    console.log(response);

                    if (response.status === 200) setIsInWishlist(true);
                })
                .catch((error) => {
                    console.log(error);
                });
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