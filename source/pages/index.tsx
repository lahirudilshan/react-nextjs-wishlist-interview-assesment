import type { NextPage } from 'next';
import { useEffect } from 'react';
import { IProduct } from '../modules/product/interfaces/product.interface';
import ProductCard from '../modules/product/components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../shared/states/reducers/root.reducer';
import { fetchProductRequest } from './../modules/product/state/actions/product.action';
import ProductSkeleton from '../shared/components/skeletons/ProductSkeleton';

const Home: NextPage = () => {
  // hooks
  const dispatch = useDispatch();

  // states
  const { pending, products, error } = useSelector((state: RootState) => state.products);

  // effects
  useEffect(() => {
    dispatch(fetchProductRequest());

    return () => { }
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto lg:py-16 sm:py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:mt-10">
          <h2 className="my-4 font-semibold text-lg text-gray-600">Products</h2>
          {/* display skeleton when the products loading */}
          {pending && (<ProductSkeleton />)}

          {pending === false && (
            <>
              {/* display list of available products */}
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products && products.map((product: IProduct, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home
