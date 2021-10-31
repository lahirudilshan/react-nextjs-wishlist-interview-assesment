import React from 'react'
import { IoHeart } from 'react-icons/io5'

const CircleButton = ({ variant }: { variant: string }) => {
    const colors = (variant === 'active') ? 'bg-pink-200 text-pink-700 hover:bg-gray-200 hover:text-gray-700 focus:bg-gray-200 focus:text-gray-700 active:bg-gray-200 active:text-gray-700' : 'hover:bg-pink-200 hover:text-pink-700 focus:bg-pink-200 focus:text-pink-700 active:bg-pink-200 active:text-pink-700  opacity';

    return (
        <div className={`absolute right-4 bottom-4 lg:w-7 lg:h-7 w-10 h-10 rounded-full p-1 transition-all duration-100 cursor-pointer ${colors}`} title={variant === 'active' ? 'Click here to remove from wishlist' : 'Click here to add wishlist'}>
            <IoHeart className="block lg:text-xl text-2xl mx-auto my-auto lg:mt-0 mt-1" />
        </div>
    )
}

export default CircleButton
