import React, { useEffect, useState } from "react"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Quotes from "../components/Quotes";
import CardVote from "../components/vote/Card";
import Info from "../components/vote/Info";
import PieChart from "../components/vote/PieChart";
import { PaslonData } from "../types/Paslon";
import Datas from "../data/paslon.json"

const Vote: React.FC = () => {
    const text = "PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK MELEGALKAN SLOT"
    const [modalVote, setModalVote] = useState<boolean>(false)
    const [data, setData] = useState<PaslonData[]>([])
    const sortedPaslon = Datas.sort((a, b) => a.noUrut - b.noUrut);

    useEffect(() => {
        setData(sortedPaslon);
    }, [])

    const userToken = sessionStorage.getItem("user")
    const adminToken = sessionStorage.getItem("admin")

    if (!userToken && !adminToken) {
        window.location.assign("/")
        alert("Access Denied")
        return
    } else if (!userToken) {
        window.location.assign("/")
        alert("Access Denied")
        return
    }
    
    const openModalVote = (): void => {
        setModalVote(!modalVote)
        console.log("modalVote: ", modalVote)
    }

    return (
        <>
            <Navbar />
            {modalVote ? (
                <div className="w-full h-full fixed z-10 flex">
                    <button className="w-full h-full bg-gray-300 opacity-90 absolute" onClick={() => openModalVote()} />

                    <div className="m-auto mt-[64px] relative flex justify-center items-center top-56">
                        <div className="container bg-white text-center p-10 rounded-lg shadow-lg flex flex-col gap-10 -mt-10">
                            <h1>Masukkan pilihanmu</h1>

                            <div className="grid grid-cols-3 gap-5 overflow-auto">
                            {data.map((data, index) => {
                                return (
                                    <div key={index} className="h-auto col-span-1 shadow-lg bg-gray-400">
                                        <h1>No paslon: {data.noUrut}</h1>
                                        <img src={data.image} alt={data.name} className="w-full h-[200px] object-cover" />
                                        <p>{data.visi[0]}</p>
                                        <p>Partai Pengusung :</p>
                                        <ul className="text-start">
                                        {data.koalisi.map((koalisi) => {
                                            return (
                                                    <li>- {koalisi}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })}
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <button className="border border-2 border-green-700 text-green-700 font-bold rounded-lg py-1 uppercase">
                                    reset
                                </button>

                                <button className="border border-2 bg-green-700 border-green-700 text-white font-bold rounded-lg py-1 uppercase">
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}
            <div>
                <div className="w-full bg-white pt-[64px]">
                    <div className="container m-auto flex flex-col gap-10 py-10">
                        <h1 className="uppercase font-bold text-3xl text-center">info pemilu terupdate</h1>
                        <div className="grid grid-cols-3">
                            <div className="col-span-3 md:col-span-1 flex justify-center items-center">
                                <PieChart />
                            </div>

                            <div className="col-span-3 md:col-span-2 flex items-center">
                                <CardVote />
                            </div>
                        </div>
                        <button
                            className="w-[40%] uppercase text-white bg-gray-700 m-auto py-2 font-bold rounded-lg mt-5"
                            onClick={() => openModalVote()}
                        >
                            masukkan suaramu
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <Info />
                </div>
            </div>
            <div className="text-red-600">
                <Quotes text={text}/>
            </div>
            <Footer />
        </>
     );
}
 
export default Vote;