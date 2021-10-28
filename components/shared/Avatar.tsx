import React from 'react'
import Image from 'next/image';
import { IProduct } from '../../interfaces/product.interface';

const Avatar = ({ product }: { product: IProduct }) => {
    return (
        <div className="absolute top-6 left-3 w-full flex justify-between items-center">
            <div className="w-14 h-14 absolute z-10 shadow-2xl rounded-full border-2 border-gray-100">
                <Image className="inline object-cover mr-2 rounded-full z-40" src={product.postBy} alt="Profile image" layout="responsive" width="16px" height="16px" />
                <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full z-40"></span>
            </div>
            <div className="text-black relative ml-16 z-40">Lahiru Dilshan</div>
        </div>
    )
}

export default Avatar;
