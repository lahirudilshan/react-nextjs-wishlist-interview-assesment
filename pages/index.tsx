import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Avatar from '../components/shared/Avatar';
import { IProduct } from '../interfaces/product.interface';
import { getProducts } from '../services/product.service';
import Image from 'next/image';
import Details from './../components/products/Details';
import CircleButton from './../components/buttons/CircleButtons';
import Description from './../components/products/Description';

const Home: NextPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => { }
  }, []);

  const addToWishlist = (product: IProduct) => {
    console.log('ok', product);
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto lg:py-16 sm:py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:mt-10">
        <h2 className="my-4 font-semibold text-lg">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 z-auto lg:bg-gradient-to-b lg:from-transparent lg:to-black lg:z-auto">
                <Avatar product={product} />
                <Image src={product.image} alt={product.imageAlt} layout="responsive"
                  className="w-full h-full object-center object-cover group-hover:opacity-50 opacity-75 transition-all duration-200" width="200px" height="200px" />
                <Details product={product} />
                <div onClick={() => addToWishlist(product)}>
                  <CircleButton />
                </div>
              </div>
              <Description />
            </div>
          ))}s
        </div>
      </div>
    </div>
  );
}

export default Home
