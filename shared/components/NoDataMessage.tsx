import React from 'react'
import { BsBagPlus } from 'react-icons/bs';

const NoDataMessage = ({ text = 'Data not found', subText = null }: { text: string, subText?: any | null }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <BsBagPlus className="text-3xl" />
                <div className="lg:text-3xl my-4 text-2xl text-gray-600">{text}</div>
                <span className="text-gray-500">{subText && subText}</span>
            </div>
        </div>
    )
}

export default NoDataMessage
