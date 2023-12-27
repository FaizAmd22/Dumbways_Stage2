import React, { useEffect, useState } from "react";
import Provinsi from "./components/Provinsi";
import "./App.css";
import MapboxMap from "./components/MapboxMap";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [globalDistrict, setGlobalDistrict] = useState<string>('');
  const [globalRegency, setGlobalRegency] = useState<string>('');
  const [globalProvince, setGlobalProvince] = useState<string>('Indonesia');
  const [latitude, setLatitude] = useState<number>(40.740121);
  const [longitude, setLongitude] = useState<number>(-73.990593);

  const accessToken = "pk.eyJ1IjoiZnpoYWxhMiIsImEiOiJjbHFqMXdxa2QxeWNmMmxtZHI4Y2wwbmFjIn0.lvZy5M-ZcQ7HVuJmVFIBqw"

  const globalLocation = encodeURIComponent(`${globalDistrict} ${globalRegency} ${globalProvince}`)

  const urlMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${globalLocation}.json?country=id&proximity=${longitude}%2C${latitude}&access_token=${accessToken}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlMapbox)

        if (response.ok) {
          const data = await response.json()
          const location = data.features[0].center
          if (location && location.length >= 2) {
            const [newLongitude, newLatitude] = location
            console.log("New Latitude:", newLatitude)
            console.log("New Longitude:", newLongitude)
            setLatitude(newLatitude)
            setLongitude(newLongitude)
          } else {
            console.error('Invalid location data')
          }
        } else {
          console.error('Failed to fetch data')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [urlMapbox])

  return (
    <>
      <div className="w-full">
        <div className="container m-auto min-h-[95vh] p-5 grid grid-cols-2 gap-5">
          <div className="text-center flex justify-center items-end md:items-center font-bold text-[40px] col-span-2 md:col-span-1 text-3xl">
            <h1>Data Wilayah Indonesia</h1>
          </div>

          <div className="h-full flex flex-col gap-3 justify-center col-span-2 md:col-span-1">
            <Provinsi setGlobalDistrict={setGlobalDistrict} setGlobalRegency={setGlobalRegency} setGlobalProvince={setGlobalProvince} />
          </div>

          <div className="col-span-2 h-[300px] text-black">
            <MapboxMap latitude={latitude} longitude={longitude} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
