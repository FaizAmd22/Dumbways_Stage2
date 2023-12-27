import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

interface MapboxMapProps {
  latitude: number;
  longitude: number;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ latitude, longitude }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZnpoYWxhMiIsImEiOiJjbHFqMXdxa2QxeWNmMmxtZHI4Y2wwbmFjIn0.lvZy5M-ZcQ7HVuJmVFIBqw"

    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/fzhala2/clqjdau5q00j901qy2yqyek9w",
        center: [longitude, latitude],
        zoom: 10,
      })

      map.current.addControl(new mapboxgl.NavigationControl())

      map.current.on("load", () => {
        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map.current!)
      })
    }

    return () => {
      if (map.current) {
        map.current?.off()
        map.current?.remove()
        map.current = null
      }
    }
  }, [latitude, longitude])

  return <div ref={mapContainer} className="w-full h-full rounded-lg shadow-lg" />
}

export default MapboxMap;
