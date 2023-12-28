import React from "react"
import logo from "../assets/footer01.png"

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="border-b-2 border-white flex justify-center">
                <div className="container py-20 flex items-center gap-10 justify-center md:justify-start">
                    <img src={logo} alt="dumbways.png" className="w-[110px]" />
                    
                    <div className="w-[300px]">
                        <p className="font-bold text-xl">DUMBWAYS.ID</p>
                        <p className="text-gray-400 text-sm">Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
                    </div>
                </div>
            </div>

            <div className="text-center py-5 md:text-lg">
                <p>Komisi Pemilihan Umum DumbWays.ID | Faizhal Ahmad 2023</p>
            </div>
        </div>
     );
}
 
export default Footer;