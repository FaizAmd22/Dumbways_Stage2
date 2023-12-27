import React, { useState, useEffect } from 'react';
import Kecamatan from './Kecamatan';
import Loading from '../assets/loading.svg';

type KotaProps = {
    kotaId: string;
    setShowKecamatan: boolean;
    showKecamatan: boolean;
    setGlobalDistrict: string;
    setGlobalRegency: string;
}

type KotaDatas = {
    id: string;
    name: string;
};

const Kota: React.FC<KotaProps> = ({
    kotaId,
    setShowKecamatan,
    showKecamatan,
    setGlobalRegency,
    setGlobalDistrict,
}) => {
    const [regencies, setRegencies] = useState<KotaDatas[]>([])
    const [selectedRegency, setSelectedRegency] = useState<string>('')
    const [loading, setLoading] = useState(true)
    console.log("show kematan di kota: ", showKecamatan)
    

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${kotaId}.json`)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()
        console.log('Fetched Data:', data)
        
        setRegencies(data)
    } catch (error) {
        console.error('Error fetching data:', error)
    } finally {
          setLoading(false)
          setShowKecamatan(false)
    }
    }

    fetchData()
}, [kotaId, setShowKecamatan])

const handleSelectRegency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex
    const selectedRegencyId = event.target.value
    const selectedRegencyName = selectedIndex > 0 ? event.target.options[selectedIndex].text : ''

    const selectedProvinceObject = regencies.find(regency => regency.id === selectedRegencyId)

    if (selectedProvinceObject) {
        setSelectedRegency(selectedRegencyId)
        setShowKecamatan(true)
        setGlobalRegency(selectedRegencyName)
        setGlobalDistrict("")
    } else {
        setSelectedRegency("")
        setGlobalRegency("")
        setGlobalDistrict("")
    }
}

return (
    <div className="w-full flex flex-col justify-center items-center">
        <h2>Pilih Kota/Kab :</h2>
        {loading ? (
            <img src={Loading} alt="loading..." />
        ) : regencies.length > 0 ? (
                <select
                    value={selectedRegency}
                    onChange={handleSelectRegency}
                    className="w-[90%] lg:w-[70%] mb-5 bg-white bg-opacity-40 shadow-lg rounded-2xl px-2 py-1 focus:outline-none cursor-pointer"
                >
                <option value=""></option>
                {regencies.map((regency) => (
                    <option id="inputKota" key={regency.id} value={regency.id}>
                        {regency.name}
                    </option>
                ))}
            </select>
        ) : (
            <p>No regencies available</p>
        )}

        {showKecamatan && selectedRegency.length > 0 ?
            <Kecamatan kecamatanId={selectedRegency} setGlobalDistrict={setGlobalDistrict} />
        : null}
    </div>
  )
}

export default Kota;
