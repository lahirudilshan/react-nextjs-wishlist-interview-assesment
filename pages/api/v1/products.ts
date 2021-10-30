import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, products } from '@prisma/client';

const prisma = new PrismaClient();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<products[]>
) {
  switch (req.method) {
    case 'GET': {
      return handleGetRequest(res);
    }
  }
}

/**
 * handle get request
 * @param res NextApiResponse<any>
 */
const handleGetRequest = (res: NextApiResponse<products[]>) => {
  return getProducts()
    .then((products) => {
      return res.status(200).json(products);
    })
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect()
    });
}

/**
 * get products
 * @return Promise<IProduct[]>
 */
async function getProducts() {
  return await prisma.products.findMany({
    include: {
      wishlist: true
    }
  });
}