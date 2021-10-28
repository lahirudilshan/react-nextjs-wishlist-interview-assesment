import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../interfaces/product.interface';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const products: IProduct[] = [];

  for (let i = 1; i < 23; i++) {
    products.push({
      id: i,
      name: `Product ${1}`,
      href: '#',
      price: Math.floor(Math.random() * 1000),
      image: `/static/images/products/product-${i}.jpg`,
      postBy: `/static/images/avatars/user-1.jpg`,
      imageAlt: `Product ${1} image`,
    });
  }

  res.status(200).json(products);
}
