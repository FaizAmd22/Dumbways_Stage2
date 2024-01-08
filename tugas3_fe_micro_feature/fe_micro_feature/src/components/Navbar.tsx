import React, { useState } from "react"
import logo from "../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import Login from "./Login";
import Register from "./Register";

const Navbar: React.FC = () => {
    const [list, setList] = useState<boolean>(false)
    const [modal, setModal] = useState<boolean>(false)
    const [login, setLogin] = useState<boolean>(false)
    const [register, setRegister] = useState<boolean>(false)

    const adminToken = sessionStorage.getItem("admin")
    const userToken = sessionStorage.getItem("user")

    const isLogin = (adminToken == null || !adminToken) && (userToken == null || !userToken)

    console.log("adminToken", adminToken);
    console.log("userToken", userToken);


    const openList = (): void => {
        setList(!list)
    }

    const openLoginMob = (): void => {
        setList(!list)
        setModal(true)
        setLogin(true)
        setRegister(false)
    }

    const closeModal = (): void => {
        setLogin(false)
        setLogin(false)
        setRegister(false)
    }

    const openLogin = (): void => {
        setModal(true)
        setLogin(true)
        setRegister(false)
    }

    const openRegister = (): void => {
        setModal(true)
        setRegister(true)
        setLogin(false)
    }

    const handleLogout = () => {
        sessionStorage.removeItem("admin");
        sessionStorage.removeItem("user");
        window.location.assign("/");
    };

    console.log("register", register)
    console.log("login", login)
    console.log("modal", modal)

    return ( 
        <>
            <div className="w-full z-30 bg-black flex justify-center fixed">
                <div className="container w-full h-[64px] text-white flex justify-between items-center mx-3 md:mx-0">
                    <a href="/" className="flex items-center gap-3">
                        <img src={logo} alt="" className="w-[35px]" />
                        <p className="font-bold uppercase text-lg hidden md:block">PEMILU PRESIDEN DUMBWAYS.ID</p>
                    </a>

                    <div className="gap-5 text-gray-300 hidden md:flex">
                        <a href="/partai" className="hover:text-white transition-all ease-in-out duration-500">Partai</a> |
                        <a href="/paslon" className="hover:text-white transition-all ease-in-out duration-500">Paslon</a>
                    
                        {(userToken || (!userToken && !adminToken)) && (
                            <>
                            | <a href="/vote" className="hover:text-white transition-all ease-in-out duration-500">Voting</a>
                            </>
                        )}

                        {isLogin ? (
                            <button
                                className="bg-white text-black font-bold px-5 py-1 rounded-sm uppercase ml-2 text-sm hover:bg-gray-200 transition-all ease-in-out duration-500"
                                onClick={() => openLogin()}
                            >
                                Login
                            </button>
                        ) : (
                            <button
                            className="bg-white text-black font-bold px-5 py-1 rounded-sm uppercase ml-2 text-sm hover:bg-gray-200 transition-all ease-in-out duration-500"
                            onClick={() => handleLogout()}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                    <button
                        className="text-2xl font-bold block md:hidden"
                        onClick={() => openList()}
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>
            </div>


            {list && (
                <div className="flex w-full h-full justify-end fixed z-10 top-[64px] transition-all ease-in-out duration-500 md:hidden">
                    <div className="w-[80%] bg-gray-500 text-white flex flex-col font-semibold text-end">
                        <a href="/partai" className="hover:bg-gray-300 hover:text-gray-800 transition-all ease-in-out duration-500 p-4 mx-5">Partai</a>
                        <a href="/paslon" className="hover:bg-gray-300 hover:text-gray-800 transition-all ease-in-out duration-500 border-t-2 border-white p-4 mx-5">Paslon</a>
                        
                        {(userToken || (!userToken && !adminToken)) && (
                            <a href="/vote" className="hover:bg-gray-300 hover:text-gray-800 transition-all ease-in-out duration-500 border-t-2 border-white p-4 mx-5">Voting</a>
                        )}

                        {isLogin ? (
                            <button
                                className="bg-white text-black font-bold px-5 py-1 rounded-sm uppercase ml-2 text-sm hover:bg-gray-200 transition-all ease-in-out duration-500"
                                onClick={() => openLoginMob()}
                            >
                                Login
                            </button>
                        ) : (
                            <button
                            className="bg-white text-black font-bold px-5 py-1 rounded-sm uppercase ml-2 text-sm hover:bg-gray-200 transition-all ease-in-out duration-500"
                            onClick={() => handleLogout()}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}

            {(modal && login) && (
                <div>
                    <Login openRegister={openRegister} closeModal={closeModal} />
                </div>
            )}

            {(modal && register) && (
                <div>
                    <Register openLogin={openLogin} closeModal={closeModal} />
                </div>
            )}
        </>
     );
}
 
export default Navbar;