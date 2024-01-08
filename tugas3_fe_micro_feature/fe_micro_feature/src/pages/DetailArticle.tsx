import React from "react";
import DetailContent from "../components/DetailContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DetailArticle: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="container m-auto pt-[64px]">
                <DetailContent />
            </div>
            <Footer />
        </>
     );
}
 
export default DetailArticle;