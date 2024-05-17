import { useState } from "react";
import { LocationMap } from "../Common/LocationMap"
import * as maptilerClient from '@maptiler/client';
import { useDispatch } from "react-redux";
import { setIsTripDetailSelected, setLocationCoordinates, setLocationName, setNotes, setPaymentMethod, setVehicleType } from "../../store/customerTripSlices";
import { GeocodingSearchResult } from "@maptiler/sdk";

function LocationSelection() {
  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [payment, setPayment] = useState("Other");
  const [note, setNote] = useState("Other");
  const [isSelectLocation, setIsSelectLocation] = useState(false);

  const dispatch = useDispatch();

  const handleCancelClick = () => {
    dispatch(setVehicleType({vehicleTypeId: null}));
    dispatch(setLocationCoordinates({startPositionCoordinates: null, endPositionCoordinates: null}));
    dispatch(setLocationName({startPosition: null, endPosition: null}));
    dispatch(setPaymentMethod({paymentMethod: null}));
    dispatch(setNotes({notes: null}));
    dispatch(setIsTripDetailSelected({isTripDetailSelected: false}))
  }

  const handleConfirmClick = async () => {
    if (isSelectLocation) {
        dispatch(setPaymentMethod({paymentMethod: payment}))
        dispatch(setNotes({notes: note}))
        dispatch(setIsTripDetailSelected({isTripDetailSelected: true}))
    }

    else {
        if (origin !== "" && dest !== "") {
            setIsSelectLocation(!isSelectLocation);
            const original : GeocodingSearchResult = await maptilerClient.geocoding.forward(origin, {
                apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
                limit: 1,
                country: ['vn']
            });
        
            const destination : GeocodingSearchResult = await await maptilerClient.geocoding.forward(dest, {
                apiKey: import.meta.env.VITE_MAPTILER_API_KEY,
                limit: 1,
                country: ['vn']
            });
            
            dispatch(setLocationName({
                startPosition: original.features[0].place_name, 
                endPosition: destination.features[0].place_name
            }));
            
            dispatch(setLocationCoordinates({
                startPositionCoordinates: original.features[0].geometry.coordinates,
                endPositionCoordinates: destination.features[0].geometry.coordinates
            }));
        }
        else {
            console.log('Origin and Destination null')
        }
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
                                        { payment == "" ? "Choose" : payment }
                                    </button>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button 
                                            className="dropdown-item"
                                            value="Cash"
                                            onClick={(e) => setPayment(e.currentTarget.value)}
                                        >
                                            Cash
                                        </button>
                                        <button 
                                            className="dropdown-item"
                                            value="Credit Card"
                                            onClick={(e) => setPayment(e.currentTarget.value)}
                                        >
                                            Credit Card
                                        </button>
                                        <button 
                                            className="dropdown-item"
                                            value="Other"
                                            onClick={(e) => setPayment(e.currentTarget.value)}
                                        >
                                            Other
                                        </button>
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
                                        { note == "" ? "Choose" : note}
                                    </button>

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <button 
                                            className="dropdown-item"
                                            value="Drive carefully"
                                            onClick={(e) => setNote(e.currentTarget.value)}
                                        >
                                            Drive carefully
                                        </button>
                                        <button 
                                            className="dropdown-item"
                                            value="Quick, im in a rush"
                                            onClick={(e) => setNote(e.currentTarget.value)}  
                                        >
                                            Quick, im in a rush
                                        </button>
                                        <button 
                                            className="dropdown-item"
                                            value="I have extra luggage"
                                            onClick={(e) => setNote(e.currentTarget.value)}   
                                        >
                                            I have extra luggage
                                        </button>
                                        <button 
                                            className="dropdown-item"
                                            value="Other"
                                            onClick={(e) => setNote(e.currentTarget.value)}
                                        >
                                            Other
                                        </button>
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
                                    value={dest}
                                    onChange={(e) => setDest(e.currentTarget.value)}
                                />
                            </div>
                        </div>
                    )
                }

                <div className="col-12 text-center p-5">
                    <button 
                        className="rounded border fw-bold px-3 btn btn-light mx-2 px-4"
                        onClick={() => handleCancelClick()}
                    >
                        Cancle
                    </button>

                    <button 
                        className="rounded border fw-bold px-3 btn btn-light mx-2"
                        onClick={() => handleConfirmClick()}
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
