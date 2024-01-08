import React, { useEffect, useState } from "react"
import { Article } from "../types/article";


const FirstCard: React.FC = ({ id, title, author, date, image }: Article) => {
    const images = JSON.stringify(image)

    return ( 
        <div
            className="w-full h-full flex flex-col justify-end bg-cover bg-center"
            style={{
                backgroundImage: `url(${images})`}}
        >
            <div className="bg-gradient-to-t from-black text-white p-3 flex flex-col">
                <p className="w-[145px] bg-red-500 rounded-md flex justify-center py-1 mb-2 font-semibold text-white text-sm">{date}</p>

                <a
                    className="font-bold uppercase text-lg md:text-xl lg:text-3xl cursor-pointer hover:text-red-400 transition-all duration-500 ease-in-out"
                    href={"/article/" + id}
                >
                    {title}
                </a>
                
                
                <p>{author}</p>
            </div>
        </div>
     );
}

export default FirstCard;