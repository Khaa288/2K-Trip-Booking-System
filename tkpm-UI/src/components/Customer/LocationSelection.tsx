import { useState } from "react";
import { LocationMap } from "../LocationMap"
import * as maptilerClient from '@maptiler/client';

function LocationSelection() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleConfirmClick = async (origin: string, destination: string) => {
    const originLocation = await maptilerClient.geocoding.forward(origin, {
        apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
        limit: 1,
        country: ['vn']
    });

    const destinationLocation = await await maptilerClient.geocoding.forward(destination, {
        apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
        limit: 1,
        country: ['vn']
    });

    console.log(originLocation);
    console.log(destinationLocation);
  }

  return (
    <div className="">
        <div className="row">
            <LocationMap/>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-4 p-5">
                <div className="col-12 fw-bold d-flex justify-content-between mb-2">
                    Enter Location
                    <input 
                        type="text" 
                        className="rounded border" 
                        value = {origin}
                        onChange={(e) => setOrigin(e.currentTarget.value)}
                    />
                </div>
                <div className="col-12 fw-bold d-flex justify-content-between mb-2">
                    Enter Destination
                    <input 
                        type="text" 
                        className="rounded border"
                        value={destination}
                        onChange={(e) => setDestination(e.currentTarget.value)}
                    />
                </div>
                <div className="col-12 fw-bold d-flex justify-content-between mb-2">
                    Enter Payment Type
                    <input 
                        type="text" 
                        className="rounded border"
                        value={destination}
                        onChange={(e) => setDestination(e.currentTarget.value)}
                    />
                </div>

                <div className="col-12 text-center p-5">
                    <button 
                        className="rounded border fw-bold px-3 btn btn-light"
                        onClick={() => handleConfirmClick(origin, destination)}
                    >Confirm</button>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default LocationSelection
