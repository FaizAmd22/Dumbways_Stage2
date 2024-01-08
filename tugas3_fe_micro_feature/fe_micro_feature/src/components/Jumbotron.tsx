import React from "react"
import dumbways from "../assets/jumbotron01.png"
import jumbotron from "../assets/jumbotron02.png"

const Jumbotron: React.FC = () => {
    return (
        <>
            <div className="w-full rounded-xl bg-gradient-to-r from-red-400 to-red-700 grid grid-cols-2 pb-5">
                <div className="flex flex-col uppercase text-white font-bold justify-between col-span-2 md:col-span-1">
                    <div>
                        <img src={dumbways} alt="dumbways" className="w-[300px] mix-blend-multiply z-10 opacity-65 absolute hidden md:block" />
                    </div>

                    <div className="p-6 text-center md:text-start">
                        <h1 className="text-[35px] lg:text-[50px]">selamat datang</h1>
                        <p className="text-md lg:text-lg">PEMILU RT YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA</p>
                    </div>
                </div>

                <div className="col-span-2 md:col-span-1 flex justify-center">
                    <img src={jumbotron} alt="" className="w-[200px] md:w-auto"/>
                </div>
            </div>
        </>
     );
}
 
export default Jumbotron;