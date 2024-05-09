import Map, { Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

// Default Location is HCM City
const MAPS_DEFAULT_LOCATION = { 
  longitude: 106.84009943157434,
  latitude: 10.898946222505144,
  zoom: 6,
};

const MAPS_STYLE = {
  width: "50wh",
  height: "60vh",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: "10px"
};

export const OperatorMap = () => {
  const mapTilerMapStyle = useMemo(() => {
    return `https://api.maptiler.com/maps/basic-v2/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`;
  }, []);

  const isLocationLocated = useSelector((state: RootState) => state.operatedTripStore.isLocationLocated);
  const locationCoordinates = useSelector((state: RootState) => state.operatedTripStore.locationCoordinates);

  return (
    <Map 
      initialViewState={{
        ...MAPS_DEFAULT_LOCATION,
      }}
      style={MAPS_STYLE}
      hash
      mapLib={maplibregl}
      mapStyle={mapTilerMapStyle}
    >
      {
        isLocationLocated &&
        <Marker 
          longitude={locationCoordinates[0]}
          latitude={locationCoordinates[1]}  
          anchor="bottom"
          color="red"
        />
      }
    </Map>
  );
};