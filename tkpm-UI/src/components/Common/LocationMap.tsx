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
  height: "50vh",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const LocationMap = () => {
  const original = useSelector((state: RootState) => state.customerTripStore.StartPositionCoordinates);
  const destination = useSelector((state: RootState) => state.customerTripStore.EndPositionCoordinates)

  const mapTilerMapStyle = useMemo(() => {
    return `https://api.maptiler.com/maps/basic-v2/style.json?key=${import.meta.env.VITE_MAPTILER_API_KEY}`;
  }, []);

  if (original[0] === 0) {
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
      </Map>
    );
  }

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
      <Marker 
        longitude={original[0]}
        latitude={original[1]}  
        anchor="bottom"
        color="red"
      />

      <Marker
        longitude={destination[0]}
        latitude={destination[1]}
        anchor="bottom"
        color="green"
      />
    </Map>
  );
};