import type { NextPage } from 'next';
import { useEffect } from 'react';
import Link from 'next/link';
import { IWishlist } from '../../modules/wishlist/interfaces/wishlist.interface';
import WishlistProduct from '../../modules/wishlist/components/WishlistProduct';
import NoDataMessage from './../../shared/components/NoDataMessage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/states/reducers/root.reducer';
import { fetchWishlistRequest } from './../../modules/wishlist/state/actions/wishlist.action';
import { removeWishlistProductRequest } from './../../modules/wishlist/state/actions/wishlist-remove.action';
import WishlistProductSkeleton from './../../shared/components/skeletons/WishlistProductSkeleton';
import { IProduct } from './../../modules/product/interfaces/product.interface';

const Wishlist: NextPage = () => {
  // hooks
  const dispatch = useDispatch();

  // states
  const { pending, wishlist, error } = useSelector((state: RootState) => state.wishlist);
  console.log(pending, wishlist, error);

  // effects
  useEffect(() => {
    dispatch(fetchWishlistRequest());

    return () => { }
  }, []);

  /**
   * remove product from user wishlist
   * @param wishlistProduct IWishlist
   * @returns void
   */
  const removeFromWishlist = (wishlistProduct: IProduct) => {
    dispatch(removeWishlistProductRequest(wishlistProduct));
  }

  return (
    <>
      <div className="bg-white">
        <div className={`max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ${wishlist?.length || pending ? 'py-4 sm:py-24 ' : ''}`}>
          <div className="grid grid-cols-1 gap-5 md:w-3/4 w-full mx-auto">
            {wishlist?.length ? <h2 className="my-4 font-semibold text-lg text-gray-600">My Favorite Products</h2> : ''}

            {/* display skeleton when the wishlist products loading */}
            {pending && (
              <WishlistProductSkeleton />
            )}

            {pending === false && (
              <>
                {/* display wishlist products */}
                {wishlist?.map((wishlistProduct: IWishlist, index: number) => (
                  <WishlistProduct key={index} wishlistProduct={wishlistProduct} removeFromWishlist={removeFromWishlist} />
                ))}

                {/* display no product added to favorite list message */}
                {wishlist !== null && wishlist?.length === 0 && (
                  <NoDataMessage
                    text="No Favorite products in wishlist"
                    subText={<div>Click <Link href="/"><span className="text-blue-600 cursor-pointer">here</span></Link> to find products you may like</div>} />
                )}
              </>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist
