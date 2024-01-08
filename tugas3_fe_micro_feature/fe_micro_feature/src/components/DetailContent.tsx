import React, { useState, useEffect } from "react"
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "../assets/card01.png"
import { Article } from "../types/article";
import Data from "../data/article.json";

const DetailContent: React.FC = () => {
    const [article, setArticle] = useState<any>(""); 
    useEffect(() => {
        
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf("/") + 1);

        const selectedArticle = Data.find((article) => article.id === parseInt(id, 10));

        if (selectedArticle) {
            setArticle(selectedArticle);
        }
    }, []);

    console.log("data artikel :", article)

    return (
        <div className="bg-white p-5 lg:px-32 lg:pt-10 pb-20">
            <div className="w-full flex items-center">
                <div className="bg-gray-100 px-5 py-1 rounded-lg absolute hover:bg-white hover:shadow-lg transition-all ease-in-out duration-500">
                    <a href="/" className="flex items-center gap-1">
                    <IoIosArrowRoundBack className="text-xl" />
                    Beranda
                    </a>
                </div>

                <div className="w-full flex justify-center uppercase text-sm">
                    <p>berita hari ini</p>
                </div>
            </div>

            <div className="text-center mt-10 flex flex-col gap-10">
                <div>
                    <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#5E5A00] uppercase">{article.title}</h1>
                    <p>{article.author}</p>
                    <p>{article.date}</p>
                </div>

                <img src={article.image} alt={article.title} className="w-full object-cover" />
                
                <p className="text-justify ">{article.description}</p>
            </div>
        </div>
    );
}
 
export default DetailContent;