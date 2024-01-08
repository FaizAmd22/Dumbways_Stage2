import React from "react"
import { Article } from "../types/article";


const Card: React.FC = ({ id, title, author, date, image}: Article) => {

    return ( 
        <div className="w-full h-full bg-white flex flex-col justify-between rounded-b-lg shadow-lg">
            <img src={image} alt={title} className="w-full h-[45%] md:h-[60%] object-cover" />

            <div className="p-2 md:p-5 flex flex-col justify-between">
                <p className="w-[145px] bg-red-500 rounded-md flex justify-center py-1 mb-2 font-semibold text-white text-sm">{date}</p>

                <a
                    className="font-bold uppercase text-lg md:text-xl lg:text-3xl cursor-pointer hover:text-gray-400 transition-all duration-500 ease-in-out"
                    href={"/article/" + id}
                >
                    {title}
                </a>

                <p className="text-sm">{author}</p>
            </div>
        </div>
     );
}

export default Card;