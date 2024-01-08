import React, { useEffect, useState } from "react"
import { Article } from "../types/article";
import Card from "./Card";
import Data from "../data/article.json"
import FirstCard from "./FirstCard";

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        setArticles(Data)
    }, [])

    console.log("Data : ", articles)

    return ( 
        <div className="grid grid-cols-4 md:grid-cols-3 gap-5 py-20 px-5 md:px-0">
            {articles.map(( data: Article, index: number ) => {
                return (
                    <div key={index} className={index === 0 ? "col-span-4 md:col-span-2" : "col-span-2 md:col-span-1"}>
                        { index === 0 ?
                            <div className="h-[300px] md:h-[350px] lg:h-[450px]">
                                <FirstCard id={data.id} title={data.title} author={data.author} image={data.image} date={data.date} />
                            </div> :

                            <div className="h-[250px] md:h-[350px] lg:h-[450px]">
                                <Card id={data.id} title={data.title} author={data.author} image={data.image} date={data.date} />
                            </div>
                        }
                    </div>
                )
            })
            }
        </div>
     );
}
 
export default Articles;