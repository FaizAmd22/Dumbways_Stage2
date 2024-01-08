import React, { useEffect, useState } from "react"
import { PaslonData } from "../../types/Paslon"
import Data from "../../data/paslon.json"

const TablePartai: React.FC = () => {
    const [partai, setPartai] = useState<PaslonData[]>([])

    useEffect(() => {
        setPartai(Data)
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="w-full py-2 sm:px-6 lg:px-8">
                        <table
                        className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                            <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500">
                                No. Urut
                            </th>
                            <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500">
                                Image
                            </th>
                            <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500">
                                Name
                            </th>
                            <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500">
                                Visi & Misi
                            </th>
                            <th
                                scope="col"
                                className="border-r px-6 py-4 dark:border-neutral-500">
                                Kualisi
                            </th>
                            </tr>
                        </thead>
                        
                        <tbody className="text-start">
                        {partai.map((data: PaslonData, index: number) => {
                            return (
                                <tr key={index} className="border-b dark:border-neutral-500">
                                <td
                                    className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500 text-center">
                                    {data.noUrut}
                                </td>
                                <td
                                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    <img src={data.image} alt={data.name} className="w-[200px] h-[220px] object-contain m-auto"/>
                                </td>
                                <td
                                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                    {data.name}
                                </td>
                                <td
                                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                        <ul className="list-disc">
                                        {data.visi.map((visi, index:number) => {
                                            return (
                                                <li key={index}>{visi}</li>
                                        )
                                        })}
                                        </ul>
                                </td>
                                <td
                                    className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                        <ul className="list-disc">
                                        {data.koalisi.map((koalisi, index: number) => {
                                            return (
                                                <li key={index}>{koalisi}</li>
                                        )
                                        })}
                                        </ul>
                                </td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </table>
                    </div>
                </div>
                </div>
        </div>
     );
}
 
export default TablePartai;