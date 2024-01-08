import React, { useEffect, useState } from "react"
import { PaslonData } from "../../types/Paslon";
import Data from "../../data/paslon.json"


const CardAdmin: React.FC<PaslonData> = () => {
    const [data, setData] = useState<PaslonData[]>([])
    const sorted = Data.sort((a, b) => a.noUrut - b.noUrut);

    useEffect(() => {
        setData(sorted);
    }, [])
    
    const allValue = data.reduce((sum, item) => sum + item.value, 0)

    return ( 
        <div className="container py-10 gap-5 grid grid-cols-3">
            {data.map((data, index) => {
                return (
                    <div key={index} className="h-auto col-span-1 shadow-lg rounded-lg" style={{backgroundColor: `${data.color}`}}>
                        <h1>No paslon: {data.noUrut}</h1>
                        <img src={data.image} alt={data.name} className="w-full h-[250px] object-cover" />
                        <h1 className="font-bold text-xl">{data.name}</h1>
                        <p>Akumulasi: {Math.round((data.value / allValue) * 100)}%</p>
                        <p>Jumlah Vote: {data.value}</p>
                    </div>
                )
            })}
        </div>
     );
}

export default CardAdmin;