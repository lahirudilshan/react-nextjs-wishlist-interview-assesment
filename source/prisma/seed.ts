
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const main = async () => {

    // product names
    const products = [
        "Head phone",
        "Watch",
        "Camera",
        "Cream Cocooil",
        "Nike Shoe",
        "Nike Shoe",
        "Nail Polish",
        "Chair",
        "Shoe",
        "Sunglass",
        "Plan pot",
        "Toys Car",
        "Foods",
        "Bag",
        "I watch",
        "Bike",
        "Camera",
        "Camera bundle",
        "Awesome cup",
        "Headphone",
        "Apple Airpods pro",
        "Apple IWatch"
    ];

    for (let i = 0; i < 22; i++) {
        await prisma.products.create({
            data: {
                name: products[i],
                price: Math.floor(Math.random() * 10000),
                image: `/static/images/products/product-${i + 1}.jpg`,
                postBy: `/static/images/avatars/user-1.jpg`,
                created_at: new Date()
            }
        });
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });