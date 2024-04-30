import Map, { Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useMemo } from "react";

const MAPS_DEFAULT_LOCATION = {
  latitude: 10.822,
  longitude: 106.6257,
  zoom: 6,
};

export const LocationMap = () => {
  const mapTilerMapStyle = useMemo(() => {
    return `https://api.maptiler.com/maps/basic-v2/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`;
  }, []);

  return (
    <Map 
      initialViewState={{
        ...MAPS_DEFAULT_LOCATION,
      }}
      style={{
        width: "50wh",
        height: "50vh",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      hash
      mapLib={maplibregl}
      mapStyle={mapTilerMapStyle}
    >
      <Marker 
        longitude={MAPS_DEFAULT_LOCATION.longitude}
        latitude={MAPS_DEFAULT_LOCATION.latitude}  
        anchor="bottom"
      />
    </Map>
  );
};