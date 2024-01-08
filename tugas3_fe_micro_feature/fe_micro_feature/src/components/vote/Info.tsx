import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Data from "../../data/paslon.json"
import { PaslonData } from '../../types/Paslon';



const Info: React.FC = () => {
    const [data, setData] = useState<PaslonData[]>([])
    const sortedData = Data.sort((a, b) => a.noUrut - b.noUrut);


    useEffect(() => {
        setData(sortedData);
    }, [])

    const items = data.map((data, index) => (
        <div key={index} className="w-[100%] bg-white p-4 rounded-md shadow-md flex gap-5">
            <div className="w-[30%] h-[150px] md:h-[250px] lg:h-[400px]">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover rounded-lg" />
            </div>

            <div>
                <p>Nomor urut: {data.noUrut}</p>
                <h3 className="font-bold">{data.name}</h3>
                <p>Visi & Misi :</p>
                {data.visi.map((visi) => {
                    return (
                        <ul>
                            <li>- {visi}</li>
                        </ul>
                    )
                })}
                <p>Koalisi</p>
                {data.koalisi.map((koalisi) => {
                    return (
                        <ul>
                            <li>- {koalisi}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
      ));

    
    return (
        <>
            <div className="container flex flex-col justify-center items-center m-auto p-10 gap-10">
                <h1 className="font-bold uppercase text-3xl">info paslon</h1>

                <div className="w-full">
                    <AliceCarousel
                        items={items}
                        autoPlay
                        autoPlayInterval={5000}
                        buttonsDisabled={true}
                        dotsDisabled={true}
                        infinite
                        mouseTracking
                        responsive={{ 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 992: { items: 1 } }}
                    />
                </div>
            </div>
        </>
     );
}
 
export default Info;