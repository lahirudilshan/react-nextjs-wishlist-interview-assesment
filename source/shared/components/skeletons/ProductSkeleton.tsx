import React, { Fragment } from 'react'

const ProductSkeleton = ({ loop = 20 }: { loop?: number }) => {
    return (
        <>
            <div className="grid lg:grid-cols-4 gap-y-10 sm:grid-cols-3 gap-x-6 grid-cols-1 xl:gap-x-8">
                {
                    Array.from({ length: loop }, (x, index) =>
                        <div key={index} className="w-full bg-white">
                            <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
                            <div className="py-5">
                                <div className="grid grid-cols-4 gap-2">
                                    <div className="col-span-4 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                                    <div className="col-span-3 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div className="col-span-1 h-4 rounded-sm bg-gray-200 animate-pulse"></div>

                                    <div className="col-span-1 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div className="col-span-1 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div className="col-span-1 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                    <div className="col-span-1 h-4 rounded-sm bg-gray-200 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ProductSkeleton
