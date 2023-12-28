import React, { useEffect, useState } from "react"
import jsonData from "../data/dataDummy.json"
import bg from "../assets/card01.png"


const Cards: React.FC = () => {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        setData(jsonData)
    }, [jsonData])

    return ( 
        <div className="py-20 px-3 md:px-0 grid grid-cols-4 md:grid-cols-3 gap-5">
        {data.map((item, index) => (
            <div key={index} className={index === 0 ? "col-span-4 md:col-span-2" : "col-span-2 md:col-span-1"}>
                <div className={index === 0 ? "text-white h-[290px] lg:h-[320px] xl:h-[400px]" : "bg-white h-[290px] lg:h-[320px] xl:h-[400px]"}>
                    <img src={item.image} alt="" className={index === 0 ? "w-full h-[290px] lg:h-[320px] xl:h-[400px]" : "" } />
                    <div className={index == 0 ? "-mt-36 pt-10 relative bg-gradient-to-t from-black from-[40%] p-5" : "p-3 pt-5 sm:pt-5"}>
                        <p className="bg-red-500 w-[150px] px-2 text-white text-sm font-semibold rounded-lg text-center p-1">{item.date}</p>
                        <a className="text-[21px] cursor-pointer font-bold uppercase">{item.title}</a>
                        <p>{item.author}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
     );
}
 
export default Cards;