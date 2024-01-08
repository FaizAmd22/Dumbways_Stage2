import React, { useEffect, useState } from "react"
import { PaslonData } from "../../types/Paslon";
import Data from "../../data/paslon.json"


const CardVote: React.FC<PaslonData> = () => {
    const [paslon, setPaslon] = useState<PaslonData[]>([])
    const sorted = Data.sort((a, b) => b.value - a.value);

    useEffect(() => {
        setPaslon(sorted);
    }, [])
    
    const allValue = paslon.reduce((sum, item) => sum + item.value, 0)

    return ( 
        <div className="w-full h-auto flex flex-col justify-between mx-10 gap-5">
            {paslon.map((data: PaslonData, index: number) => {
                return (
                <div 
                    key={index}
                    className="w-full px-3 py-2 shadow-lg rounded-lg flex gap-5"
                >
                        <div
                            className="w-[8vw] rounded-lg flex flex-col justify-center items-center text-center py-3 shadow-md text-white"
                            style={{
                                backgroundColor: `${data.color}`}}
                        >
                            <p className="text-sm">No Paslon</p>
                            <h1 className="font-bold text-2xl">
                                {data.noUrut}
                            </h1>
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1>{data.name}</h1>
                            <p>{Math.round((data.value / allValue) * 100)}%</p>
                        </div>
                </div>
                )
            })}
        </div>
     );
}

export default CardVote;