import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IProduct } from '../modules/product/interfaces/product.interface';
import { getProducts } from '../modules/product/services/product.service';
import ProductCard from '../modules/product/components/ProductCard';

const Home: NextPage = () => {
  // states
  const [products, setProducts] = useState<IProduct[]>([]);

  // effects
  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log(response.data);

        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => { }
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto lg:py-16 sm:py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:mt-10">
        <h2 className="my-4 font-semibold text-lg">Products</h2>

        {/* display list of available products */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products && products.map((product: IProduct, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home
