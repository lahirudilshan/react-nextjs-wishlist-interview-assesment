import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    switch (req.method) {
        case 'DELETE': {
            return handleDeleteRequest(req, res);
        }
        default: {
            res.status(400).send({ message: 'Method not allowed' });
            return
        }
    }
}

/**
 * handle delete request
 * @param req NextApiRequest
 * @param res NextApiResponse
 */
const handleDeleteRequest = (req: NextApiRequest, res: NextApiResponse<any>) => {
    const { id } = req.query

    return deleteWishlistProduct(Number(id))
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
 * delete wishlist product
 * @return Promise<wishlist>
 */
async function deleteWishlistProduct(id: number) {
    return await prisma.wishlist.deleteMany({
        where: {
            product_id: id
        }
    });
}