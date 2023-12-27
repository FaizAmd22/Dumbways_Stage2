import React, { useState, useEffect } from 'react';
import Loading from '../assets/loading.svg';


type KecamatanProps = {
    kecamatanId: string;
    setGlobalDistrict: string;
}

type KecamatanDatas = {
    id: string;
    name: string;
};

const Kecamatan: React.FC<KecamatanProps> = ({
    kecamatanId,
    setGlobalDistrict,
}) => {
    const [districts, setDistricts] = useState<KecamatanDatas[]>([])
    const [selectedDistrict, setSelectedDistrict] = useState<string>('')
    const [loading, setLoading] = useState(true)
    console.log("kecamatanId: ", kecamatanId)

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kecamatanId}.json`)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        console.log('Fetched Data:', data)
        
        setDistricts(data)
    } catch (error) {
        console.error('Error fetching data:', error)
    } finally {
        setLoading(false)
    }}

    fetchData()
    }, [kecamatanId])

const handleSelectDistrict = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex
    const selectedDistrictId = event.target.value
    const selectedDistrictName = selectedIndex > 0 ? event.target.options[selectedIndex].text : ''

    const selectedProvinceObject = districts.find(district => district.id === selectedDistrictId)

    if (selectedProvinceObject) {
        setSelectedDistrict(selectedDistrictId)
        setGlobalDistrict(selectedDistrictName)
    } else {
        setSelectedDistrict("")
        setGlobalDistrict("")
    }

}
console.log("distrik : ", selectedDistrict)

return (
    <div className="w-full flex flex-col justify-center items-center">
        <h2>Pilih Kecamatan :</h2>
        {loading ? (
            <img src={Loading} alt="loading..." />
        ) : kecamatanId > 0 ? (
                <select
                    value={selectedDistrict}
                    onChange={handleSelectDistrict}
                    className="w-[90%] lg:w-[70%] mb-5 bg-white bg-opacity-40 shadow-lg rounded-2xl px-2 py-1 focus:outline-none cursor-pointer"
                >
                <option value=""></option>
                {districts.map((district) => (
                    <option key={district.id} value={district.id}>
                        {district.name}
                    </option>
                ))}
            </select>
        ) : (
            <p>No districts available</p>
        )}
    </div>
  )
}

export default Kecamatan;
