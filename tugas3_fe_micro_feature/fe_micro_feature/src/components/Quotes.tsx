import React from "react"

type QuoteText = {
    text: string
}

const Quotes: React.FC<QuoteText> = ({text}) => {
    return (
        <div className="w-full bg-white font-bold text-xl md:text-3xl p-20 flex justify-center items-center text-center">
            <div className="container">
                <h1>{text}</h1>
            </div>
        </div>
     );
}
 
export default Quotes;