import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AiOutlineCloudUpload } from "react-icons/ai";


const AddPaslon: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
        }
    };

    const adminToken = sessionStorage.getItem("admin")

    if (!adminToken) {
        window.location.assign("/")
        alert("Access Denied")
        return
    }

    return (
    <>
        <Navbar />
        <div className="bg-white w-full h-screen pt-[64px] flex items-center flex-col justify-center">
            <h1 className="uppercase font-bold text-3xl">ADD PASLON</h1>
            <div className="w-full grid grid-cols-2 p-10">
            {imageUrl ? (
                <div className="px-10 flex flex-col items-center justify-center">
                    <img src={imageUrl} alt="Selected File" className="max-h-full max-w-full rounded-lg shadow-lg" />

                    <input
                        className="file:bg-violet-50 file:text-violet-500 hover:file:bg-violet-100 file:rounded-lg file:rounded-tr-none file:rounded-br-none file:px-4 file:py-2 file:mr-4 file:border-none hover:cursor-pointer border rounded-lg text-gray-400 mt-5"
                        id="fileInput"
                        type="file"
                        accept=".jpg, .png, .jpeg"
                        onChange={handleFileInputChange}
                    />
                </div>
            ) : (
                <div className="h-[40vh] px-10 my-auto flex flex-col items-center justify-center gap-2 bg-violet-50 text-violet-500 rounded-lg hover:bg-violet-100 cursor-pointer">
                    <label htmlFor="fileInput" className="w-full h-full flex flex-col gap-3 justify-center items-center">
                    <AiOutlineCloudUpload className="w-6 h-6" />
                    <span>Choose some files to upload</span>
                    <input
                        id="fileInput"
                        type="file"
                        className="hidden"
                        accept=".jpg, .png, .jpeg"
                        onChange={handleFileInputChange}
                    />
                    </label>
                </div>
            )}
            
                <div className="my-auto px-5">
                <form action="/" className="flex flex-col gap-5">
                        <div className="text-start flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="border rounded-md"/>
                        </div>

                        <div className="text-start flex flex-col">
                            <label htmlFor="noUrut">Nomor Urut</label>
                            <input type="number" name="noUrut" className="border rounded-md" />
                        </div>
                        
                        <div className="text-start flex flex-col">
                            <label htmlFor="visi">Visi Misi</label>
                            <textarea type="textarea" name="visi" className="border rounded-md h-[15vh]" />
                        </div>

                        <button type="submit" className="w-full bg-green-700 text-white text-sm uppercase font-semibold rounded-lg py-2 mt-3">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default AddPaslon;