import React from 'react'
import Liked from './Liked';
import Tags from './Tags';

const Description = () => {
    return (
        <div className="mx-2">
            <Liked />
            <div className="mt-2 text-gray-800">A simple product description</div>
            <Tags />
            <div className="font-normal text-gray-400 mt-3 mb-6">View 12 comments</div>
        </div>
    )
}

export default Description
