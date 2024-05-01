import { useState } from "react";
import { LocationMap } from "../Common/LocationMap"
import * as maptilerClient from '@maptiler/client';

function LocationSelection() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [isSelectLocation, setIsSelectLocation] = useState(false);

  const handleConfirmClick = async (origin: string, destination: string) => {
    if (origin !== null && destination !== null) {
        // const originLocation = await maptilerClient.geocoding.forward(origin, {
        //     apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
        //     limit: 1,
        //     country: ['vn']
        // });
    
        // const destinationLocation = await await maptilerClient.geocoding.forward(destination, {
        //     apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
        //     limit: 1,
        //     country: ['vn']
        // });
    
        // console.log(originLocation);
        // console.log(destinationLocation);
        setIsSelectLocation(!isSelectLocation);
    }
  }

  return (
    <div className="">
        <div className="row">
            <LocationMap/>
        </div>
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-4 pt-5">
                {
                    isSelectLocation ? (
                        <div>
                            <div className="row fw-bold mb-1">
                                <div className="col-6">Payment Method</div>
                                <div className="dropdown col-6 row">
                                    <button 
                                        className="btn btn-light dropdown-toggle" 
                                        type="button"
                                        data-bs-toggle="dropdown" 
                                    >
                                        Choose
                                    </button>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button className="dropdown-item">Cash</button>
                                        <button className="dropdown-item">Credit Card</button>
                                        <button className="dropdown-item">Other</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row fw-bold mb-1">
                                <div className="col-6">Notes</div>
                                <div className="dropdown col-6 row">
                                <button 
                                        className="btn btn-light dropdown-toggle" 
                                        type="button"
                                        data-bs-toggle="dropdown" 
                                    >
                                        Choose
                                    </button>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button className="dropdown-item">Note example 1</button>
                                        <button className="dropdown-item">Note example 2</button>
                                        <button className="dropdown-item">Note example 3</button>
                                        <button className="dropdown-item">Note example Other</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
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
                        </div>
                    )
                }

                <div className="col-12 text-center p-5">
                    <button className="rounded border fw-bold px-3 btn btn-light mx-2 px-4">
                        Cancle
                    </button>

                    <button 
                        className="rounded border fw-bold px-3 btn btn-light mx-2"
                        onClick={() => handleConfirmClick(origin, destination)}
                    >
                        Confirm
                    </button>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default LocationSelection
