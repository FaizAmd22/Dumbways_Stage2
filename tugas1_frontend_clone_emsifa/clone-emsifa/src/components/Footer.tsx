import React from 'react';
import { PiFireFill } from "react-icons/pi";

const Footer: React.FC = () => {
    return (
        <div className="h-[5vh] flex justify-center items-center text-white bg-gray-900">
            <h1>Made with</h1>
            <PiFireFill className="text-lg mx-1 text-orange-500"/>
            <h1>by Faizhal Ahmad</h1>
        </div>
    )
}

export default Footer
