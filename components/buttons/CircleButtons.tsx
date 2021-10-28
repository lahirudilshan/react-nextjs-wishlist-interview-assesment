import React from 'react'
import { IoHeart } from 'react-icons/io5'

const CircleButton = () => {
    return (
        <div className="absolute right-4 bottom-4 lg:w-7 lg:h-7 w-10 h-10 opacity rounded-full p-1 hover:bg-pink-200 hover:text-pink-700 transition-all duration-100 cursor-pointer" title="Click here to add wishlist">
            <IoHeart className="block lg:text-xl text-2xl mx-auto my-auto lg:mt-0 mt-1" />
        </div>
    )
}

export default CircleButton
