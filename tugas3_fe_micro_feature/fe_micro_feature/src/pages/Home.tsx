import React from "react";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Quotes from "../components/Quotes";

const Home: React.FC = () => {
  const text = "PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT"

  const userToken = sessionStorage.getItem("user")
  const adminToken = sessionStorage.getItem("admin")

  if (adminToken) {
    window.location.assign("/admin")
    return
  }

  return (
    <>
      <Navbar />
      <div className="container m-auto py-10 pt-[100px]">
        <Jumbotron />
        <Articles />
      </div>
      <Quotes text={text} />
      <Footer />
    </>
  )
}

export default Home;
