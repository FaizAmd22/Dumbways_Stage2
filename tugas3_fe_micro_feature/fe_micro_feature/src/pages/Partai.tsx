import React from "react";
import Navbar from "../components/Navbar";
import TablePartai from "../components/partai/TablePartai";
import Table from "../components/paslon/TablePaslon";

const Partai: React.FC = () => {
  const adminToken = sessionStorage.getItem("admin")

  if (!adminToken) {
    window.location.assign("/")
    alert("Access Denied")
    return
  }

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <div className="container m-auto py-10 pt-[100px] flex flex-col justify-center items-center gap-10">
        <h1 className="font-bold text-3xl uppercase">list partai</h1>
        <TablePartai />
      </div>
    </div>
  )
}

export default Partai;
