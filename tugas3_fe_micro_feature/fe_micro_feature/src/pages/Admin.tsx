import React from "react";
import CardAdmin from "../components/admin/CardAdmin";
import TableAdmin from "../components/admin/TableAdmin";
import Navbar from "../components/Navbar";

const Admin: React.FC = () => {
  const adminToken = sessionStorage.getItem("admin")

  if (!adminToken) {
    window.location.assign("/")
    alert("Access Denied")
    return
  }

  return (
    <>
        <Navbar />
        <div className="bg-white m-auto py-10 pt-[100px] flex flex-col
       items-center">
            <h1 className="text-3xl font-bold uppercase">dashboard</h1>
            <CardAdmin />
        </div>
        
        <div className="container m-auto py-20 flex flex-col justify-center items-center gap-10 overflow-x-hidden">
            <h1 className="font-bold uppercase text-3xl">list voter</h1>
            <TableAdmin />
        </div>
    </>
  )
}

export default Admin;