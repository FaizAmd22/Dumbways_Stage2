import React, { useState } from "react"
import DataUser from "../data/user.json"

type UserData = {
    fullname: string;
    alamat: string;
    gender: string;
    username: string;
    password: string;
};

type RegisterProps = {
    openLogin: () => void
    closeModal: () => void
}

const Register: React.FC<RegisterProps> = ({ openLogin, closeModal }) => {
    const [formData, setFormData] = useState<UserData>({
        fullname: "",
        alamat: "",
        gender: "",
        username: "",
        password: "",
    });
    console.log("data hadnleChange di register :", DataUser)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));

        console.log("data hadnleChange di register :", formData)
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a new user object with form data
        const newUser = {
            id: DataUser.length + 1,
            ...formData,
        };

        // Update DataUser.json with the new user data
        DataUser.push(newUser);
        sessionStorage.setItem("user", newUser.username)

        // Perform any additional logic (e.g., saving to backend/server, updating local storage, etc.)

        console.log("Updated user data:", DataUser);

        closeModal();

        window.location.assign("/")
    };
    

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center fixed z-20">
                <a
                    onClick={() => closeModal()}
                    className="w-full h-screen absolute cursor-default fixed bg-gray-400 opacity-80"
                />

                <div className="min-w-[450px] bg-white capitalize text-center p-20 py-10 rounded-lg relative">
                    <h1 className="uppercase mb-5 font-bold text-2xl">Register</h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="text-start flex flex-col">
                            <label htmlFor="fullname">fullname</label>
                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="border rounded-md"/>
                        </div>

                        <div className="text-start flex flex-col">
                            <label htmlFor="alamat">alamat</label>
                            <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} className="border rounded-md" />
                        </div>

                        <div className="text-start flex flex-col">
                            <label htmlFor="gender">jenis kelamin</label>
                            <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className="border rounded-md cursor-pointer">
                                <option value=""></option>
                                <option value="laki">Laki-Laki</option>
                                <option value="perempuan">Perempuan</option>
                            </select>
                        </div>

                        <div className="text-start flex flex-col">
                            <label htmlFor="username">username</label>
                            <input type="email" name="username" value={formData.username} onChange={handleChange} className="border rounded-md" />
                        </div>

                        <div className="text-start flex flex-col">
                            <label htmlFor="password">password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} className="border rounded-md" />
                        </div>


                        <button type="submit" value="Submit" className="w-full bg-green-700 text-white text-sm uppercase font-semibold rounded-lg py-2 mt-3 mb-5">
                            submit
                        </button>
                    </form>

                    <p>
                        Sudah memiliki akun?
                        <a
                            onClick={() => openLogin()}
                            className="text-blue-600 underline italic ml-1 cursor-pointer"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </>
     );
}
 
export default Register;