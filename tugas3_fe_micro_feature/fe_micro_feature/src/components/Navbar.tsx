import React from "react"
import logo from "../assets/logo.png"

const Navbar: React.FC = () => {
    return ( 
        <div className="bg-black flex justify-center">
            <div className="container w-full h-[64px] text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="" className="w-[35px]" />
                    <p className="font-bold uppercase text-lg">PEMILU PRESIDEN DUMBWAYS.ID</p>
                </div>

                <div className="flex gap-5 text-gray-300">
                    <a href="" className="hover:text-white transition-all ease-in-out duration-500">Partai</a> |
                    <a href="" className="hover:text-white transition-all ease-in-out duration-500">Passion</a> |
                    <a href="" className="hover:text-white transition-all ease-in-out duration-500">Voting</a>
                    <button
                        className="bg-white text-black font-bold px-5 py-1 rounded-sm uppercase ml-2 text-sm hover:bg-gray-200 transition-all ease-in-out duration-500"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;