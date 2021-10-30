import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../../../../modules/product/interfaces/product.interface';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    switch (req.method) {
        case 'GET': {
            return handleGetRequest(res);
        }
        case 'POST': {
            return handlePostRequest(req, res);
        }
        default: {
            res.status(400).send({ message: 'Method not allowed' });
            return
        }
    }
}

/**
 * handle get request
 * @param res NextApiResponse<any>
 */
const handleGetRequest = (res: NextApiResponse<any>) => {
    return getWishlistProducts()
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
 * get user wishlist
 * @return Promise<wishlist[]>
 */
async function getWishlistProducts() {
    return await prisma.wishlist.findMany({
        include: {
            products: true
        }
    });
}

/**
 * handle post request
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
const handlePostRequest = (req: NextApiRequest, res: NextApiResponse<any>) => {
    const data = req.body
    console.log(data);

    return saveProductInWishlist(data)
        .then((product) => {
            return res.status(200).json(product);
        })
        .catch((e) => {
            throw e;
        })
        .finally(async () => {
            await prisma.$disconnect()
        });
}

/**
 * save product in wishlist
 * @return Promise<wishlist[]>
 */
async function saveProductInWishlist(product: IProduct) {
    console.log(product, 'product');

    return await prisma.wishlist.create({
        data: {
            product_id: product.id,
            created_at: new Date()
        }
    });
}