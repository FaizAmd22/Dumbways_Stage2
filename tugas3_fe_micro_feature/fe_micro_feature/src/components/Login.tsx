import React, {  useState } from "react";
import DataAdmin from "../data/admin.json"
import DataUser from "../data/user.json"

type LoginProps = {
    openRegister: () => void;
    closeModal: () => void;
};

const Login: React.FC<LoginProps> = ({ openRegister, closeModal }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    
    const handleLogin = () => {
        const user = DataUser.find((user) => user.username === username && user.password === password);
        
        const admin = DataAdmin.find((admin) => admin.username === username && admin.password === password);

        if (user) {
            setIsLoggedIn(true);
            setIsAdmin(false);
            sessionStorage.setItem("user", username)
        } else if (admin) {
            setIsLoggedIn(true);
            setIsAdmin(true);
            sessionStorage.setItem("admin", username)
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    if (isLoggedIn) {
        const redirectPath = isAdmin ? "/admin" : "/";
        window.location.assign(redirectPath);
        closeModal();
    }

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center fixed z-20">
                <a
                    onClick={() => closeModal()}
                    className="w-full h-screen absolute cursor-default fixed bg-gray-400 opacity-80"
                />
                <div className="min-w-[450px] bg-white capitalize text-center p-20 py-10 rounded-lg relative">
                    <h1 className="uppercase mb-5 font-bold text-2xl">Login</h1>

                    <form className="flex flex-col gap-5">
                        <div className="text-start flex flex-col">
                            <label htmlFor="username">username</label>
                            <input
                                type="email"
                                name="username"
                                id="username"
                                className="border rounded-md"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="text-start flex flex-col">
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="border rounded-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                aria-required="true"
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="w-full bg-green-700 text-white text-sm uppercase font-semibold rounded-lg py-2 mt-3"
                        >
                            submit
                        </button>

                        <p>
                            Belum memiliki akun?
                            <a
                                onClick={() => openRegister()}
                                className="text-blue-600 underline italic ml-1 cursor-pointer"
                            >
                                Register
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;