import React from 'react';
import Image from 'next/image';
import { IoHeart } from 'react-icons/io5';

const WishlistProduct = (props: any) => {
    // variables
    const { wishlistProduct } = props;

    return (
        <div className="rounded-md p-2 pb-1 shadow">
            <div className="flex justify-between items-center">

                <div className="flex">
                    <Image src={wishlistProduct?.products?.image} width="96px" height="96px" className="object-center object-cover rounded-md" />
                    <div className="flex flex-col ml-4 justify-center">
                        <div className="text-lg">{wishlistProduct?.products?.name}</div>
                        <div className="text-gray-400">Awesome {wishlistProduct?.products?.name} description</div>
                    </div>
                </div>

                <div className="flex justify-between items-center w-10 h-10 bg-pink-300 text-pink-600 hover:bg-gray-300 hover:text-gray-500 rounded-full mr-4 cursor-pointer transition-all duration-200" title="Click here to remove product from wishlist" role="button" onClick={() => props.removeFromWishlist(wishlistProduct?.products)}>
                    <div className="flex justify-between items-center text-2xl mx-auto">
                        <IoHeart />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WishlistProduct