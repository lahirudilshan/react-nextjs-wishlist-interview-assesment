import React from 'react'
import { IoHeart } from 'react-icons/io5'

const Liked = () => {
    return (
        <div className="flex items-center mt-2 font-bold">
            <IoHeart className="text-xl lg:text-lg" /> <span className="ml-2">32 likes</span>
        </div>
    )
}

export default Liked
