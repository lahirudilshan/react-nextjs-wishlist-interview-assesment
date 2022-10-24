import React from 'react'

const WishlistProductSkeleton = ({ loop = 4 }: { loop?: number }) => {
    return (
        <>
            {
                Array.from({ length: loop }, (x, index) =>
                    <div key={index} className="rounded-md p-2 pb-1 shadow">
                        <div className="flex justify-between items-center">

                            <div className="flex">
                                <div className="w-24 h-24 bg-gray-300 animate-pulse rounded-md"></div>
                                <div className="flex flex-col ml-4 justify-center">
                                    <div className="col-span-4 w-24 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div className="col-span-4 w-48 h-4 mt-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-10 h-10 rounded-full mr-4 cursor-pointer transition-all duration-200" title="Click here to remove product from wishlist">
                                <div className="flex justify-between items-center text-2xl mx-auto">
                                    <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default WishlistProductSkeleton
