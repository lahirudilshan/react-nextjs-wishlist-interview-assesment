import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getWishlist, removeProductFromWishlist } from '../../modules/wishlist/services/wishlist.service';
import Link from 'next/link';
import { IWishlist } from '../../modules/wishlist/interfaces/wishlist.interface';
import WishlistProduct from '../../modules/wishlist/components/WishlistProduct';
import NoDataMessage from './../../shared/components/NoDataMessage';

const Wishlist: NextPage = () => {
  // states
  const [wishlist, setWishlist] = useState<IWishlist[]>([]);

  // effects
  useEffect(() => {
    getWishlist()
      .then((response) => {
        console.log(response);

        setWishlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => { }
  }, []);

  /**
   * remove product from user wishlist
   * @param wishlistProduct IWishlist
   * @returns void
   */
  const removeFromWishlist = (wishlistProduct: IWishlist) => {
    removeProductFromWishlist({
      id: wishlistProduct.products.id
    })
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          const updatedWishlist = wishlist.filter(product => product.id != wishlistProduct.id);
          setWishlist(updatedWishlist);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="bg-white">
      <div className={wishlist?.length ? 'max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8' : ''}>
        <div className="grid grid-cols-1 gap-5 md:w-3/4 w-full mx-auto" >

          {/* display wishlist products */}
          {wishlist?.map((wishlistProduct: IWishlist, index) => (
            <WishlistProduct key={index} wishlistProduct={wishlistProduct} removeFromWishlist={removeFromWishlist} />
          ))}

          {/* display no product added to favorite list message */}
          {wishlist?.length === 0 && (
            <NoDataMessage
              text="No Favorite products in wishlist"
              subText={<div>Click <Link href="/"><span className="text-blue-600 cursor-pointer">here</span></Link> to find products you may like</div>} />
          )}

        </div>
      </div>
    </div>
  );
}

export default Wishlist
