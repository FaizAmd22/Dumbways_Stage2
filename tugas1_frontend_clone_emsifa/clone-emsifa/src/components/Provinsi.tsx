import React, { useState, useEffect } from 'react';
import Kota from './Kota';
import Loading from '../assets/loading.svg';

type ProvinsiProps = {
    setGlobalProvince: string;
    setGlobalRegency: string;
    setGlobalDistrict: string;
}

type ProvinsiDatas = {
    id: string;
    name: string;
};

const Provinsi: React.FC<ProvinsiProps> = ({
    setGlobalDistrict,
    setGlobalRegency,
    setGlobalProvince
}) => {
    const [provinces, setProvinces] = useState<ProvinsiDatas[]>([])
    const [selectedProvinces, setSelectedProvinces] = useState<string>('')
    const [showKecamatan, setShowKecamatan] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        console.log('Fetched Data:', data)
        
        setProvinces(data)
        
    } catch (error) {
        console.error('Error fetching data:', error)
    } finally {
        setLoading(false)
    }}
    
    fetchData()
}, [])

const handleSelectProvinces = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex
    const selectedProvinceId = event.target.value
    const selectedProvinceName = selectedIndex > 0 ? event.target.options[selectedIndex].text : ''

    const selectedProvinceObject = provinces.find(province => province.id === selectedProvinceId)

    if (selectedProvinceObject) {
        setSelectedProvinces(selectedProvinceId)
        setShowKecamatan(false)
        setGlobalProvince(selectedProvinceName)
        setGlobalRegency("")
        setGlobalDistrict("")
    } else {
        setSelectedProvinces("")
        setGlobalProvince("Indonesia")
        setGlobalRegency("")
        setGlobalDistrict("")
    }
}


return (
    <div className="w-full shadow-2xl shadow-gray-500 rounded-lg p-5 py-10 my-5 lg:my-0 flex flex-col justify-center items-center">
        <h2>Pilih Provinsi :</h2>
        {loading ? (
        <img src={Loading} alt="loading..." />
        ) : provinces.length > 0 ? (
                <select
                    value={selectedProvinces}
                    onChange={handleSelectProvinces}
                    className="w-[90%] lg:w-[70%] mb-5 bg-white bg-opacity-40 shadow-lg rounded-2xl px-2 py-1 focus:outline-none cursor-pointer"
                >
                <option value=""></option>
                {provinces.map((province) => (
                    <option
                        key={province.id}
                        value={province.id}
                    >
                        {province.name}
                    </option>
                ))}
            </select>
        ) : (
            <p>No regencies available</p>
        )}

        {selectedProvinces.length > 0 ? 
            <Kota kotaId={selectedProvinces} setShowKecamatan={setShowKecamatan} showKecamatan={showKecamatan} setGlobalRegency={setGlobalRegency} setGlobalDistrict={setGlobalDistrict} />
        : null
        }
    </div>
  )
}

export default Provinsi;
