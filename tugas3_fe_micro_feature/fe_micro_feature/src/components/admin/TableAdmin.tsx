import React, { useEffect, useState } from "react"
import { User } from "../../types/User";
import Data from "../../data/user.json"

const TableAdmin: React.FC = () => {
    const [dataVoter, setDataVoter] = useState<User[]>([])

    useEffect(() => {
        setDataVoter(Data)
    }, [])

    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="h-[300px] overflow-y-auto">
                        <table
                        className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                        <thead className="border-b font-medium bg-gray-600 dark:border-neutral-500 text-white">
                            <tr>
                                <th
                                    scope="col"
                                    className="border-r px-6 py-4 dark:border-neutral-500">
                                    No
                                </th>
                                <th
                                    scope="col"
                                    className="border-r px-6 py-4 dark:border-neutral-500">
                                    Nama
                                </th>
                                <th
                                    scope="col"
                                    className="border-r px-6 py-4 dark:border-neutral-500">
                                    Alamat
                                </th>
                                <th
                                    scope="col"
                                    className="border-r px-6 py-4 dark:border-neutral-500">
                                    Jenis Kelamin
                                </th>
                                <th
                                    scope="col"
                                    className="border-r px-6 py-4 dark:border-neutral-500">
                                    Paslon
                                </th>
                            </tr>
                        </thead>
                                
                        <tbody className="bg-gray-100">
                        {dataVoter.map((data: User, index: number) => {
                            return (
                            <tr className="border-b dark:border-neutral-500">
                            <td
                                className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                {index + 1}
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {data.nama}
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {data.alamat}
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {data.gender}
                            </td>
                            <td
                                className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                                {data.paslon}
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
            <p className="font-bold uppercase text-xl mt-5">total suara terkumpul : {dataVoter.length}</p>
        </div>
     );
}
 
export default TableAdmin;