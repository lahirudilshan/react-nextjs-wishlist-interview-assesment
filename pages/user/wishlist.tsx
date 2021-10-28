import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoHeart } from 'react-icons/io5';
import { IProduct } from './../../interfaces/product.interface';
import { getProducts } from './../../services/product.service';

const Wishlist: NextPage = () => {
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

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-5 md:w-3/4 w-full mx-auto" >
          <h2 className="font-semibold">Wishlist</h2>

          {products && products.map((product: IProduct, index) => (
            <div key={index} className="rounded-md p-2 pb-1 shadow">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Image src={product.image} width="100px" height="100px" className="object-center object-cover rounded-md" />
                  <div className="flex flex-col ml-4 justify-center">
                    <div className="text-lg">{product.name}</div>
                    <div className="text-gray-400">Awesome product description</div>
                  </div>
                </div>
                <div className="flex justify-between items-center w-10 h-10 bg-pink-300 rounded-full mr-4 cursor-pointer" title="Click here to remove product from wishlist">
                  <div className="flex justify-between items-center text-pink-600 text-2xl mx-auto">
                    <IoHeart />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Wishlist
